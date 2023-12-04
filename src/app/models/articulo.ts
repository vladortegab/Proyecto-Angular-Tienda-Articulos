export class Articulo {
    nombreArticulo : string;
    precio: number;
    cantidad: number;
    fechaIngreso: Date;
    imagen: string; // Nueva propiedad para la ruta de la imagen

    

    constructor(nombreArticulo: string,precio: number,cantidad: number, fechaIngreso: Date,  imagen: string ){
        this.nombreArticulo = nombreArticulo;
        this.precio= precio;
        this.cantidad =cantidad;
        this.fechaIngreso = fechaIngreso;
        this.imagen = imagen; 


    }



}