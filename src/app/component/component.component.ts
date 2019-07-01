import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Model } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'app',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ProductComponent implements OnInit {

  model: Model = new Model();

  counter: number = 1;

  constructor(ref: ApplicationRef) {

    (<any>window).appRef = ref;
    (<any>window).model = this.model;

  }

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

  getStyles(key: number) {
    let product = this.model.getProduct(key);
    return {
      fontSize: "30px",
      "margin.px": 100,
      color: product.price > 50 ? "red" : "green"
    };
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }
  
  getProductCount(): number {
    console.log("getProductCount invoked");
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  get nextProduct(): Product {
    return this.model.getProducts().shift();
  }

  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }

  targetName: string = "Kayak";
}
