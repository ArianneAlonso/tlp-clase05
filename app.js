function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

class Jugador {
    constructor(nombre, personaje) {
        this.nombre = nombre;
        this.personaje = personaje;
        this.posicion = 0;
        this.vidas = 3;
        this.capa = true; 
    }

    perderVida() {
        if (this.capa) {
            console.log(`${this.nombre}, la capa te salvó pero se rompió.`);
            this.capa = false; 
        } else {
            this.vidas--;
            console.log(`${this.nombre}, perdiste una vida. Te quedan ${this.vidas}.`);

            
            if (this.vidas === 1) {
                console.log(`${this.nombre}, te queda 1 sola vida. Probá suerte.`);
                const eleccion = parseInt(prompt("Elegí un número del 1 al 6: "));
                const dado = tirarDado();
                console.log(`Salió: ${dado}`);

                if (dado === eleccion) {
                    this.vidas = 3;
                    console.log(`¡Zafaste! Tenés las 3 vidas de nuevo.`);
                } else {
                    console.log(`Nada... seguís con 1 vida.`);
                }
            }

            
            if (this.vidas <= 0) {
                console.log(`${this.nombre} quedó fuera. Vuelve al inicio con 3 vidas y capa nueva.`);
                this.posicion = 0;
                this.vidas = 3;
                this.capa = true;
            }
        }
    }
}

class Juego {
    constructor() {
        this.tablero = [
            "normal", "fuego", "roca", "monstruo", "normal",
            "trampa", "normal", "fuego", "roca", "monstruo",
            "normal", "trampa", "normal", "fuego", "roca",
            "monstruo", "normal", "trampa", "normal", "fuego",
            "roca", "monstruo", "trampa", "normal", "meta"
        ];
    }

    eventoCasilla(jugador) {
        const casilla = this.tablero[jugador.posicion];
        console.log(`${jugador.nombre} cayó en: ${casilla}`);

        switch (casilla) {
            case "fuego":
                if (jugador.personaje !== "Mago") {
                    console.log(`${jugador.nombre}, no podés pasar el fuego.`);
                    jugador.perderVida();
                }
                break;
            case "roca":
                if (jugador.personaje !== "Guerrero") {
                    console.log(`${jugador.nombre}, no podés mover la roca.`);
                    jugador.perderVida();
                }
                break;
            case "monstruo":
                console.log(`¡Monstruo!`);
                prompt("Presioná ENTER para tirar el dado y ver si zafás...");
                if (tirarDado() < 4) {
                    console.log("Perdiste contra el monstruo.");
                    jugador.perderVida();
                } else {
                    console.log("Lo derrotaste.");
                }
                break;
            case "trampa":
                console.log(`Caíste en una trampa.`);
                jugador.perderVida();
                break;
            default:
                console.log("Todo tranqui, avanzás.");
        }
    }

    jugar(j1, j2) {
        let turno = 0;
        while (true) {
            const jugador = turno % 2 === 0 ? j1 : j2;

            console.log(`\nTurno de ${jugador.nombre} (${jugador.personaje})`);
            prompt(`Presioná ENTER para tirar el dado...`);
            const pasos = tirarDado();
            console.log(`${jugador.nombre} sacó ${pasos}`);
            jugador.posicion += pasos;

            if (jugador.posicion >= this.tablero.length - 1) {
                if (jugador.personaje === "Guerrero") {
                    console.log(`${jugador.nombre} ganó. Jijija`);
                } else {
                    console.log(`${jugador.nombre} ganó. Muejeje`);
                }
                break;
            }

            this.eventoCasilla(jugador);
            turno++;
        }
    }
}


const prompt = require("prompt-sync")();

const nombre1 = prompt("Jugador 1, nombre: ");
let personaje1 = prompt("Elegí tu personaje (Mago/Guerrero): ");
personaje1 = personaje1.charAt(0).toUpperCase() + personaje1.slice(1).toLowerCase();

const personaje2 = personaje1 === "Mago" ? "Guerrero" : "Mago";
const nombre2 = prompt("Jugador 2, nombre: ");

const juego = new Juego();
const j1 = new Jugador(nombre1, personaje1);
const j2 = new Jugador(nombre2, personaje2);

juego.jugar(j1, j2);