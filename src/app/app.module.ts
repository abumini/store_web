import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { InsertProductsComponent } from './insert-products/insert-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { FindProductsComponent } from './find-products/find-products.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductsComponent,
    InsertProductsComponent,
    UpdateProductsComponent,
    FindProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
