import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
  columnas = [
    '',
    'Titulo',
    'Descripcion',
    'Precio',
    ''
  ]

  cambioDebe = 'cambio'

  total = 0;
  cambio = 0;
  monto = 0;
  cursos: string[] = []

  cartCurso: any = []
  constructor() { }

  ngOnInit(): void {
    this.cursos = Object.keys(sessionStorage);
    this.cursos.forEach((el: any) => {
      const item = sessionStorage.getItem(el);

      if (item != null) {
        let obj = JSON.parse(item);
        this.cartCurso.push(JSON.parse(item));
        this.total += obj.cantidad * obj.cost
      }

    });

  }

  handleCambio() {
    this.cambio = this.monto - this.total;
    this.cambioDebe = this.cambio >= 0 ? "cambio" : "debe";
  }

  change(event: any) {
    console.log(event.target.value)
  }
}