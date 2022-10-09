/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2){
    return numero * base;
}

//const sumarFlecha = (a: number,b: number): number => {
//    return a + b;
//}
//const resultado = multiplicar(7, 3, 10);
//console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {

    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Butcher',
    pv: 50,
    mostrarHP(){
        console.log('Puntos de vida: ', this.pv)
    }
}

curar(nuevoPersonaje,20);

nuevoPersonaje.mostrarHP();