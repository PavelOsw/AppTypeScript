import { Producto, calculaIVA } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Samsung Galaxy S22 Ultra',
        precio: 999
    },
    {
        desc: 'iPhone 14 Pro Max',
        precio: 1399
    }
];

const [total, iva] = calculaIVA( carritoCompras );

console.log('Total: ', total);
console.log('IVA: ', iva);
