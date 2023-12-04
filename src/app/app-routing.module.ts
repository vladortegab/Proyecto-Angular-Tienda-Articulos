import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { EditArticulosComponent } from './components/edit-articulos/edit-articulos.component';
import { ListArticulosComponent } from './components/list-articulos/list-articulos.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  // { path: '', component: ListArticulosComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  {path:'add',component:EditArticulosComponent},
  {path:'articulos/add/:id',component:EditArticulosComponent},
  // {path:'**',component:InicioComponent},
  {path:'articulos',component:ListArticulosComponent},
  {path:'inicio',component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
