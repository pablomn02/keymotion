import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VehiculosComponent,
    ContactoComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
