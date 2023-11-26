import { Component } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css'
})
export class AlmacenComponent {
  precio: number = 0;
  cantidad: number = 0;
  descuento: number = 0;

  calcularDescuento() {
    if (this.cantidad > 20) {
      // Descuento del 10% para más de 20 artículos
      this.descuento = this.precio * this.cantidad * 0.1;
    } else if (this.cantidad > 10) {
      // Descuento del 5% para más de 10 artículos, pero no más de 20
      this.descuento = this.precio * this.cantidad * 0.05;
    } else {
      // Sin descuento para 10 o menos artículos
      this.descuento = 0;
    }
  }
}
