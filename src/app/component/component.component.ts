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

  newProduct: Product = new Product();


  ngOnInit() {

  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  selectedProduct: string;

  getSelected(product: Product): boolean {
    console.log(product)
    return product.name == this.selectedProduct;
  }

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product, e){
    console.log(e)
    console.log("New Product" + this.jsonProduct);
  }


}
