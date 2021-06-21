import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos = [
    {
      imagen: "../../../assets/1.jpg",
      titulo: "Psicoanalisis",
      descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsa repellat repellendus voluptas sequi tempora eveniet ullam recusandae iusto quisquam, vero doloremque esse aliquam perspiciatis officiis reprehenderit velit beatae magni non nemo, at accusamus, optio eos! Odit adipisci eius architecto labore distinctio nobis, excepturi iste tempora aliquam aperiam exercitationem culpa voluptates ducimus sunt velit.",
      precio: "$200"
    },

    {
      imagen: "../../../assets/6.jpg",
      titulo: "Cognitivo Conductual",
      descripcion: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, cumque quos? Nobis porro excepturi hic magnam ut explicabo sint suscipit non corporis fuga, est at, ab tempora animi aspernatur molestias. Ex dolores temporibus nesciunt maiores amet",
      precio: "$300"
    },
    {
      imagen: "../../../assets/Cuidar-de-la-naturaleza.jpg",
      titulo: "Gestalt",
      descripcion: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam incidunt, eius quo totam voluptate at necessitatibus recusandae quaerat voluptatem, tempora numquam blanditiis voluptatibus cumque quos voluptates eligendi voluptatum nam earum nihil et dolores unde. Praesentium, unde. Facilis inventore vitae non assumenda sint suscipit impedit odio illo omnis, tempore recusandae rem. Distinctio, facilis.",
      precio: "$200"
    },
    {
      imagen: "../../../assets/2.jpg",
      titulo: "Psicoanalisis",
      descripcion: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, cumque quos? Nobis porro excepturi hic magnam ut explicabo sint suscipit non corporis fuga, est at, ab tempora animi aspernatur molestias. Ex dolores temporibus nesciunt maiores amet",
      precio: "$500"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
