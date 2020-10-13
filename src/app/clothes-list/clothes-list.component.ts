import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  clothes = {
    "name": "remera",
    "size": "2",
    "price": 500,
    "stock": 4,
    "image": "assets/img/remera.jpeg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
