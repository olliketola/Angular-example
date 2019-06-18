import { Component, OnInit } from '@angular/core';
import { Model } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ProductComponent implements OnInit {

  model: Model = new Model();
  constructor() { }

  ngOnInit() {
  }

  getClass(): string {
    return this.model.getProducts().length === 5 ? "bg-success" : "bg-warning";
  }

}
