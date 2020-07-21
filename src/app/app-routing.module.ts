import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindProductsComponent } from './find-products/find-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { InsertProductsComponent } from './insert-products/insert-products.component';
import { DisplayProductsComponent } from './display-products/display-products.component';



const routes: Routes = [
  { path: '', component: DisplayProductsComponent },
  { path: 'find-product', component: FindProductsComponent },
  { path: 'update-product', component: UpdateProductsComponent },
  { path: 'insert-product', component: InsertProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
