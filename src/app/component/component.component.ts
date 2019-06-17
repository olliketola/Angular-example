import { Component, OnInit } from '@angular/core';
import { Model } from '../repository.model';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  model: Model = new Model();
  constructor() { }

  ngOnInit() {
  }

}
