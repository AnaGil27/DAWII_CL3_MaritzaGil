import { Component } from '@angular/core';

@Component({
  selector: 'app-obrero',
  templateUrl: './obrero.component.html',
  styleUrl: './obrero.component.css'
})
export class ObreroComponent {
  horasTrabajadas: number = 0;
  salario: number = 0;

  calcularSalario() {
    const salarioBasePorHora = 16;
    const salarioExtraPorHora = 20;
    const horasNormales = 40;

    if (this.horasTrabajadas <= horasNormales) {
      // Salario para 40 horas o menos
      this.salario = this.horasTrabajadas * salarioBasePorHora;
    } else {
      // Salario para las primeras 40 horas
      this.salario = horasNormales * salarioBasePorHora;

      // Salario por horas extras
      const horasExtras = this.horasTrabajadas - horasNormales;
      this.salario += horasExtras * salarioExtraPorHora;
    }
  }
}
