let textoA ='Comision-20025';
let textoB ='Nelson Andrada';
const blanco = " ";

let resultado = textoA + blanco  + textoB;
console.log (resultado)

class verdura {
    constructor (nombre,color, precio){
        this.nombre = nombre.toUpperCase();
        this.color = color.toUpperCase ();
        this.precio = parseFloat(precio);
        this.vendido = false ;
        this.iva = this.precio * 1.21;
    }
    
}
const verduras = [];
verduras.push (new verdura ("manzana" , "roja", 123.4));
verduras.push (new verdura ("peras", "amarillas", 241.9));
verduras.push (new verdura ("sandia", "verde", 288.9));
console.log(verduras);


for (const verdura of verduras){ 
    console.log(verdura.nombre);
    console.log(verdura.color);
    console.log(verdura.precio);
    console.log(verdura.iva)
}

console.log(verduras);
console.log(verduras[0].nombre + " " + verduras[2].precio);