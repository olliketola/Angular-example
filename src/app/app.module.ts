import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ProductComponent } from './component/component.component';

@NgModule({
  declarations: [
    //AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
