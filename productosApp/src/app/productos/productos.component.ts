import { Component, OnInit } from '@angular/core';
import { Producto } from './productos';

@Component({
  selector: 'productos-c',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  tituloPagina: string = "Lista de Productos";
  mostrarImagenes: Boolean=false;
  private _filtrarProductos : string = '';

  productosFiltrados: Producto[]=[];
  toggleImagenes(): void{
    this.mostrarImagenes = !this.mostrarImagenes;
  }

  productos: Producto[] =[{
    id: 1,
    nombre: "audifonos bluetooth",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 999.99,
    rating: 4.2,
    imagenURL: '../assets/caja.png'
  },
  {
    id: 2,
    nombre: "Macbook Pro",
    codigo: "MAC-50",
    disponibilidad: true,
    precio: 1200,
    rating: 1.5,
    imagenURL: '../assets/caja.png'
  },
  {
    id: 3,
    nombre: "Iphone XS",
    codigo: "IPHONE-CS398",
    disponibilidad: true,
    precio: 5000.90,
    rating: 1.5,
    imagenURL: '../assets/caja.png'
  },
  {
    id: 4,
    nombre: "audifonos bluetooth",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 999.99,
    rating: 4.2,
    imagenURL: '../assets/caja.png'
  },
  {
    id: 5,
    nombre: "audifonos bluetooth",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 999.99,
    rating: 4.2,
    imagenURL: '../assets/caja.png'
  },
  {
    id: 5,
    nombre: "audifonos bluetooth",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 999.99,
    rating: 4.2,
    imagenURL: '../assets/caja.png'
  },
  {
    id: 6,
    nombre: "audifonos bluetooth",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 999.99,
    rating: 4.2,
    imagenURL: '../assets/caja.png'
  },
  {
    id: 7,
    nombre: "audifonos bluetooth",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 999.99,
    rating: 4.2,
    imagenURL: '../assets/caja.png'
  }
];
  
  constructor() { }

  filtroProductos(filtrarPor: string): Producto[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.productos.filter((producto: Producto)=>
    producto.nombre.toLocaleLowerCase().includes(filtrarPor));
  }
  
  get filtrarProductos(): string{
    return this._filtrarProductos;
  }

  set filtrarProductos(value : string){
    this._filtrarProductos = value;
    console.log(value);
    this.productosFiltrados = this.filtroProductos(value);
  }

  ngOnInit(): void {

      this.filtrarProductos ='';
  }

}
