import { Component, OnInit } from '@angular/core';
import { Prenda } from './Prenda';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  prendas: Prenda[] = [
    {
      name: "Buzo",
      size: "12",
      price: 850,
      stock: 1,
      image: "assets/img/buzo.jpeg",
    },
    {
      name: "Vestido Sandias",
      size: "12 a 18 m",
      price: 740,
      stock: 1,
      image: "assets/img/vestido-sandia.jpg",
    },
    {
      name: "Body autitos",
      size: "3 a 6 m",
      price: 490,
      stock: 1,
      image: "assets/img/body-autitos.jpg",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
