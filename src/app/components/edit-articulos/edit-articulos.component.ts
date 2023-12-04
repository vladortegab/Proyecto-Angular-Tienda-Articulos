import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-articulos',
  templateUrl: './edit-articulos.component.html',
  styleUrls: ['./edit-articulos.component.css'],
})
export class EditArticulosComponent {
  myForm!: FormGroup;
  idArticulo: any;
  accion = 'Crear';
  imagenUrl: string = '';

  constructor(
    private fb: FormBuilder,
    private articuloService: ArticuloService,
    private route: Router,
    public snackBar: MatSnackBar,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombreArticulo: ['', [, Validators.required, Validators.maxLength(15)]],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
    });
    this.idArticulo = this.aRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.idArticulo != undefined) {
      this.accion = 'Editar';
    }
    this.obtenerArticulo();
    
  }

  //? por si llega nulo
  guardarArticulo() {
    if (this.idArticulo !== undefined) {
      const articuloEdit: Articulo = {
        nombreArticulo: this.myForm.get('nombreArticulo')?.value,
        precio: this.myForm.get('precio')?.value,
        cantidad: this.myForm.get('cantidad')?.value,
        fechaIngreso: this.myForm.get('fechaIngreso')?.value,
        imagen: '../../../assets/imagenes/Articulos/Disco_Abrasivo.jpg', // Agrega la imagen aquí
      };
      this.editarArticulo(articuloEdit);
    } else {
      const nuevoArticulo: Articulo = {
        nombreArticulo: this.myForm.get('nombreArticulo')?.value,
        precio: this.myForm.get('precio')?.value,
        cantidad: this.myForm.get('cantidad')?.value,
        fechaIngreso: this.myForm.get('fechaIngreso')?.value,
        imagen: 'ruta/de/la/imagen.jpg', // Agrega la imagen aquí
      };
      this.agregarArticulo(nuevoArticulo);
    }
  }
  
  agregarArticulo(articulo: Articulo) {
    const nuevoArticulo = new Articulo('Nombre del Articulo', 100, 10, new Date(), 'ruta/de/la/imagen.jpg');
    this.articuloService.agregarArticulo(nuevoArticulo);
    this.articuloService.agregarArticulo(articulo);
    this.snackBar.open('El articulo fue Creado Exitosamente!!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);
  }

  editarArticulo(articulo: Articulo) {
    // const articulo : Articulo = this.articuloService.obtenerArticulo(this.idArticulo);
    // this.obtenerArticulo ;
    this.snackBar.open('El articulo fue Actualizado Exitosamente!!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);

    this.articuloService.editArticulo(articulo, this.idArticulo);
  }
 /*  obtenerArticulo() {
    const articulo: Articulo = this.articuloService.obtenerArticulo(
      this.idArticulo);
    this.myForm.patchValue({
      nombreArticulo: articulo.nombreArticulo,
      precio: articulo.precio,
      cantidad: articulo.cantidad,
      fechaIngreso: articulo.fechaIngreso,
    });
  }
 */
  obtenerArticulo() {
    const articulo: Articulo = this.articuloService.obtenerArticulo(
      this.idArticulo);
      this.imagenUrl = `../../../assets/imagenes/Articulos/${articulo.imagen}`; // Utiliza comillas inversas aquí

    this.myForm.patchValue({
      nombreArticulo: articulo.nombreArticulo,
      precio: articulo.precio,
      cantidad: articulo.cantidad,
      fechaIngreso: articulo.fechaIngreso,
    });
  }
}
