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

  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

  getClassMap(key: number): Object {

    let product = this.model.getProduct(key);

    return {
      "text-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    };
  }

  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string = "30";

}
