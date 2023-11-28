import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth-google.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  nombre = "";
  constructor (private authGoogleService: AuthGoogleService, private rote:Router){
    
  }
  isAuthenticated: boolean = false; // Inicialmente no autenticado

  ngOnInit() : void{
    this.isAuthenticated = this.authGoogleService.isAuthenticated(); // Asume que tienes un método en el servicio que verifica la autenticación
    this.showData();


  }
  
  showData(){
    const data=JSON.stringify(this.authGoogleService.getProfile());
    console.log(data);
    const parseData = JSON.parse(data);
    console.log(parseData);
    this.nombre=parseData.name;
    this.isAuthenticated = this.authGoogleService.isAuthenticated();



  }
 
  logOut(){
    this.authGoogleService.logout();
    this.isAuthenticated = false;
    this.rote.navigate(['login']);
  }

  

}
