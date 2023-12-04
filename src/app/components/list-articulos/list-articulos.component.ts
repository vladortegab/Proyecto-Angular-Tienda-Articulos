import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Articulo } from 'src/app/models/articulo';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReporteService } from 'src/app/services/reporte.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-list-articulos',
  templateUrl: './list-articulos.component.html',
  styleUrls: ['./list-articulos.component.css'],
})
export class ListArticulosComponent {
  displayedColumns: string[] = ['nombreArticulo', 'precio', 'cantidad', 'fechaIngreso','Acciones'];
  dataSource = new MatTableDataSource<Articulo>();

  lisArticulo: Articulo[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private articuloService: ArticuloService,public dialog:MatDialog,
    public snackBar:MatSnackBar, private reporteService:ReporteService) {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
   
    this.cargarArticulo();
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarArticulo() {
    this.lisArticulo = this.articuloService.getArticulo();
    this.dataSource = new MatTableDataSource(this.lisArticulo);
    //const filterValue = (event?.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //this.dataSource.data = this.lisArticulo;
  }

  eliminarArticulo(index:number): void{
    const dialogRef=this.dialog.open(MensajeConfirmacionComponent,{
      width: '350px', 
      data: {mensaje:'Esta Seguro que desea Eliminar el Articulo?'},

    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result=="Aceptar"){
          this.articuloService.eliminarArticulo(index);
          this.cargarArticulo();
          this.snackBar.open('El articulo fue Eliminado Exitosamente!!','',{
            duration: 3000
          })
            
          

      }
   
    });

    
  }
  generarPDF(){
    this.reporteService.generatePDF();
  }
}
