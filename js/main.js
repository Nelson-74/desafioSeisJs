let textoA ='Comision-20025';
let textoB ='Nelson Andrada';
const blanco = " ";

let resultado = textoA + blanco  + textoB;
console.log (resultado)

// const compre = ['nombra','compra','cantidad','precio','Iva'];
// var nombra = prompt (' Ingrese su nombre ');
// var compra = prompt('Ingrese el nombre de producto a comprar');
// var cantidad = prompt ( ' Ingrese la cantidad ');
// var precio = prompt( ' Ingrese el precio del producto');
// var Iva = precio * 1.21;
// alert(compre [0,1,2]);
// alert(['Hola   '+ nombra + '  Su compra consiste en :    '+ compra +'   la cantidad que compra es :    '+ cantidad +  '   El precio sin iva:   '+ precio + '  El precio con iva es :    '+ Iva + '  Muchas gracias !!!' ]); 

class verdura {
    constructor (id,nombre, cantidad,precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = parseFloat(precio);
        this.vendido = false ;
        this.Iva = 21;
    }
    aplicarIVA() {
    this.Iva = this.precio + ((this.precio * this.Iva) / 100);
    }
}

let id = prompt("Ingrese ID de la verdura/fruta:");
let nombre = prompt("Ingrese Nombre de la fruta/verdura:");
let cantidad = prompt("Ingrese la cantidad de fruta/verdura a comprar :");
let precio = prompt("Ingrese Precio de fruta/verdura:");
const verdura1 = new verdura(id, nombre,cantidad, precio);
console.log(verdura1);
verdura1.aplicarIVA();
console.log(verdura1);
console.log("Nombre: " + verdura1.nombre +"Cantidad:  "+verdura1.cantidad+ " - Precio: " + verdura1.precio);

//Pido la cantidad para agregar
let cant = parseInt(prompt("¿Cúantas frutas/verduras quiere comprar?"));
let arrayVerduras = []; //Array de verduras
for (let i=0; i<cant; i++) {
    let id = i + 1;
    let nombre = prompt("Ingrese nombre de fruta/verdura que va comprar:");
    let cantidad = prompt("Ingrese la cantidad de fruta/verdura a comprar :");
    let precio = prompt("Ingrese precio del producto por comprar:");
    var verdura2 = new verdura (id, nombre, cantidad, precio);
    arrayVerduras.push(verdura);
    console.log("Cantidad de la compra: " + arrayVerduras.length);
}
for (let verdura2 of arrayVerduras) {
    verdura2.aplicarIVA();
    console.log(verdura2);
    alert("Verdura/fruta - id: " + verdura.id + ", Nombre: " + verdura.nombre + ", Cantidad:  "+verdura.cantidad+ " Precio: $" + verdura.precio);
}

const verduras3 = (new verdura (1,"manzana" , "roja", 123.4));
const verduras4 = (new verdura (2,"peras", "amarillas", 241.9));
const verduras5 = (new verdura (3,"sandia", "verde", 288.9));
const arrayVerduras2 = [];
arrayVerduras2.push(verduras3);
arrayVerduras2.push(verduras4);
arrayVerduras2.push(verduras5);
const arrayVerduras3 = arrayVerduras2;
const arrayVerduras4 = [];
let max = 0;

for (let verdura of arrayVerduras2) {
    if (max == 0) {
        min = verdura.precio;
    }

    for (let verdura of arrayVerduras3) {
        if (verdura.precio < min) {
            min = verdura.precio;
            arrayVerduras4.push(verdura);
        }
    }
}

let array2 = [20, 10, 50];
console.log(array2);
console.log(array2.sort());

console.log("Valor: " + Math.floor(Math.random() * 11));
console.log(arrayVerduras4);
// const verduras = [];
// verduras.push (new verdura ("manzana" , "roja", 123.4));
// verduras.push (new verdura ("peras", "amarillas", 241.9));
// verduras.push (new verdura ("sandia", "verde", 288.9));
// console.log(verduras);


// for (const verdura of verduras){ 
//     console.log(verdura.nombre);
//     console.log(verdura.color);
//     console.log(verdura.precio);
//     console.log(verdura.iva)
// }

// console.log(verduras);
// console.log(verduras[0].nombre + " " + verduras[2].precio);

// const barato = verduras.filter (verdura => verdura.precio < 420);
// console.log(barato);
verduras.sort((a,b) => a.precio - b.precio);
console.log (verduras);