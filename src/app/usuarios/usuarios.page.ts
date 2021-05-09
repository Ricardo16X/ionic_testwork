import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  private usuarios = [{
    // Usuario 1
    id:0,
    titulo: 'Nombre1 Apellido1',
    imageURL: 'https://biblioteca.acropolis.org/wp-content/uploads/2014/12/anaranjado-1200x839.png'
  },
  {
    // Usuario 2
    id:1,
    titulo: 'Nombre2 Apellido2',
    imageURL: 'https://biblioteca.acropolis.org/wp-content/uploads/2014/12/azul-1200x839.png'
  },
  {
    // Usuario 3
    id:2,
    titulo: 'Nombre3 Apellido3',
    imageURL: 'https://holatelcel.com/wp-content/uploads/2020/09/among-us.png'
  },
  {
    // Usuario 4
    id:3,
    titulo: 'Nombre4 Apellido4',
    imageURL: 'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'
  },
  {
    // Usuario 5
    id:4,
    titulo: 'Nombre5 Apellido5',
    imageURL: 'https://i.pinimg.com/originals/d0/e6/59/d0e659125145e110eee3d64013050812.png'
  }]

  constructor() { }

  ngOnInit() {
  }

}
