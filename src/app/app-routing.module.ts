import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { IBreadcrumbRouteConfig } from '@ngserveio/navigation';
import { CART_LABEL_SERVICE, PRODUCT_LABEL_SERVICE } from './consts';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  { 
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'user-login',
        component: UserloginComponent,
        data: {
          crumb: {
            label: 'User Login'
          } as IBreadcrumbRouteConfig
        },
      },
      {
        path: 'products',
        data: {
          crumb: {
            label: 'Products'
          } as IBreadcrumbRouteConfig
        },
        children: [
          {
            path: '',
            component: ProductListComponent,
            data: {
              crumb: null
            }
          },
          {
            path: ':productId',
            component: ProductComponent,
            data: {
              crumb: {
                providerKey: PRODUCT_LABEL_SERVICE
              } as IBreadcrumbRouteConfig
            }
          }
        ]
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          crumb: {
            providerKey: CART_LABEL_SERVICE
          } as IBreadcrumbRouteConfig 
        },
        children: [
          {
            path: 'checkout',
            component: CheckoutComponent,
            data: {
              crumb: {
                label: 'Checkout'
              } as IBreadcrumbRouteConfig
            }
          }
        ]
      },
      {
        path: '',
        redirectTo: 'user-login',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
