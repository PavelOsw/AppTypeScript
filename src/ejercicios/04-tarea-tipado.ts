/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe {
    nombre: string
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => string
}

interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

const spiderman: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 16,
    direccion: {
        calle: 'Main St',
        ciudad: 'NY',
        pais: 'USA'
    },
    mostrarDireccion () {
        return this.nombre + ': ' + this.direccion.calle + ', ' + this.direccion.ciudad;
    }
}

const moonnight: SuperHeroe = {
    nombre: 'Moon Night',
    edad: 30,
    direccion: {
        calle: '5th ave',
        ciudad: 'London',
        pais: 'UK'
    },
    mostrarDireccion () {
        return this.nombre + ': ' + this.direccion.calle + ', ' + this.direccion.ciudad;
    }
}

const direccion = spiderman.mostrarDireccion() + moonnight.mostrarDireccion();
console.log(direccion);