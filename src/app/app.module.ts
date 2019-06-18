import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductComponent } from './component/component.component';

@NgModule({
  declarations: [
    //AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
