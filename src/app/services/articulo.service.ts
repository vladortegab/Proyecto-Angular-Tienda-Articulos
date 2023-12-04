import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  lisArticulo: Articulo[] = [
    {
      nombreArticulo: 'ABRAZADERA CREMALLERA DE 1/2 A 3/4',
      precio: 380,
      cantidad: 23,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'ABRAZADERA_CREMALLERA.jpg'
    },
    {
      nombreArticulo: 'ACIDO MURIATICO',
      precio: 100,
      cantidad: 44,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'ACIDO MURIATICO.jpg'
    },
    {
      nombreArticulo: 'ALICATE DE 8\'\'',
      precio: 300,
      cantidad: 44,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'ALICATE.png'
    },
    {
      nombreArticulo: 'ALMADANA DE 12LB',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'ALMADANA.png'
    },
    {
      nombreArticulo: 'BALDE NEGRO',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'BALDE_NEGRO.jpg'
    },
    {
      nombreArticulo: 'BARRETON',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'BARRETON.jpg'
    },
    {
      nombreArticulo: 'BOTA PUNTERA',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'BOTAPUNTERA.jpg'
    },
    {
      nombreArticulo: 'BROCHA DE CERDA',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'BROCHA.jpg'
    },
    {
      nombreArticulo: 'CABLE ENCAUCHETADO',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'CABLE.jpg'
    },
    {
      nombreArticulo: 'CARETA',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'CARETA.jpg'
    },
    {
      nombreArticulo: 'CINTA MAGNETICA',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'CINTA_MAGNETICA.jpg'
    },
    {
      nombreArticulo: 'ESTOPA',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'ESTOPA.jpg'
    },
    {
      nombreArticulo: 'GUANTES',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'GUANTES.jpg'
    },
    {
      nombreArticulo: 'TENAZAS',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'TENAZAS.png'
    },
    {
      nombreArticulo: 'SIERRA ELECTRICA',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'SIERRA_ELECTRICA.jpg'
    },
    {
      nombreArticulo: 'CALADORA',
      precio: 20550,
      cantidad: 112,
      fechaIngreso: new Date('2023-05-27'),
      imagen: 'CALADORA.jpg'
    },
  ];


  constructor() {}

  getArticulo(){
    return this.lisArticulo.slice();
  }
  eliminarArticulo(index:number){
    this.lisArticulo.splice(index,1);
  }
  agregarArticulo(articulo:Articulo){
    this.lisArticulo.unshift(articulo);
  }
  obtenerArticulo(index:number){
    return this.lisArticulo[index];
  }
  editArticulo(articulo:Articulo, idArticulo:number){
    this.lisArticulo[idArticulo].nombreArticulo=articulo.nombreArticulo;
    this.lisArticulo[idArticulo].precio = articulo.precio;
    this.lisArticulo[idArticulo].cantidad = articulo.cantidad;
    this.lisArticulo[idArticulo].fechaIngreso = articulo.fechaIngreso;
    
  }
}
