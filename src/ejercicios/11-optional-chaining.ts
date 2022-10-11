/*
    ===== Código de TypeScript =====
*/


interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero_1: Pasajero = {
    nombre: 'Pavel'
}

const pasajero_2: Pasajero = {
    nombre: 'Mariana',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos ( pasajero: Pasajero) : void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}

imprimeHijos(pasajero_2);
imprimeHijos(pasajero_1);