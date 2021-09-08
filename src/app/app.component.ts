import { Component } from '@angular/core';

import {Empleado} from './models/Empleado';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  empleadoArray: Empleado[] = [
    {id: 1, nombre:"Daniel", email:"danifell99@gamil.com",telefono:"3105719253"},
    {id: 2, nombre:"Juan", email:"juancho@gamil.com",telefono:"32224563456"},
    {id: 3, nombre:"Alexandra", email:"alexandra@gamil.com",telefono:"3112344334"},
  ];

  

}
