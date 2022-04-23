import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgServeValidationDisplayModule } from '@ngserveio/validation-messages';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgServeMaterialFormsModule } from '@ngserveio/material-forms';
import { BreadcrumbFactoryService, IBreadCrumbLabelService, NgServeNavigationModule } from '@ngserveio/navigation';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TemplateComponent } from './components/template/template.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { CART_LABEL_SERVICE, PRODUCT_LABEL_SERVICE } from './consts';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    CheckoutComponent,
    CartComponent,
    ProductComponent,
    ProductListComponent,
    TemplateComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgServeValidationDisplayModule,
    NgServeMaterialFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    NgServeValidationDisplayModule,
    NgServeNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(factory: BreadcrumbFactoryService) {
    const labelServices: Record<string, Type<IBreadCrumbLabelService>> = {
      [CART_LABEL_SERVICE]: CartService,
      [PRODUCT_LABEL_SERVICE]: ProductService
    };

    Object.keys(labelServices).forEach(key => {
      factory.registerLabelService(key, labelServices[key])
    });
  }
}
