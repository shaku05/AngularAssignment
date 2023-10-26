import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ProductEditorComponent } from "./productEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { FormsModule } from "@angular/forms";
// import { OrderTableComponent } from "./orderTable.component";

let routing = RouterModule.forChild([
  {
    path: "main",
    component: AdminComponent,
    children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductTableComponent },
      // { path: "orders", component: OrderTableComponent },
      { path: "**", redirectTo: "products" },
    ],
  },
  { path: "**", redirectTo: "main" },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing], // Dependency Modules
  providers: [],
  declarations: [
    AdminComponent,
    ProductEditorComponent,
    ProductTableComponent
  ]
})
export class AdminModule {} // lazy loaded.
