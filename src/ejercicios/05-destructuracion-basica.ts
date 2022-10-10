/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 100,
    segundo: 55,
    cancion: 'Ew',
    detalles: {
        autor: 'Joji',
        anio: 2020
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles
 
//console.log('Volumen: ', volumen);
//console.log('Segundo: ', segundo);
//console.log('Cancion: ', cancion);
//console.log('Autor: ', reproductor.detalles.autor);

const halo: string[] = ['John','Fred','Linda','Kelly'];
const [a1, a2, a3, a4] = halo;

console.log('Azul 1:', a1);
console.log('Azul 2:', a2);
console.log('Azul 3:', a3);
console.log('Azul 4:', a4);