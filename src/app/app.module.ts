import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products-list.component';
import { ProductDepartmentComponent } from './product-department.component';
import { ProductImageCpmponent } from './product-image.component';
import { ProductPriceComponent } from './product-price.component';
import { ProductRowComponent } from './product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDepartmentComponent,
    ProductImageCpmponent,
    ProductPriceComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
