/*
    ===== Código de TypeScript =====
*/


export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Redmi Note 7',
    precio: 149
}

const tablet: Producto = {
    desc: 'iPad Air 2',
    precio: 349
}

export function calculaIVA( productos: Producto[]): [number, number] {
    
    let total = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.16];
}

//const articulos = [telefono, tablet];

//const [ total, iva ] = calculaIVA( articulos );

//console.log('Total: ', total);
//console.log('IVA:', iva);