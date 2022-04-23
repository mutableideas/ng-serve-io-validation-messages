import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { getBreadcrumbPath, IBreadcrumb, IBreadCrumbLabelService } from '@ngserveio/navigation';
import { of } from 'rxjs';

export type Product = { name: string, description: string };

const products: Record<string, Product> = {
  '1234': {
    name: 'Test Product 1',
    description: 'This, is the description for the product'
  },
  '123': {
    name: 'Test Product 123',
    description: 'A Long product description goes into here'
  },
  '5': {
    name: 'The 5th Product',
    description: 'This is the another product'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IBreadCrumbLabelService {
  public products: Record<string, Product> = products;

  public getProduct(id: string): Product {
    return products[id];
  }

  public getCrumb(route: ActivatedRouteSnapshot): IBreadcrumb {
    const productId = route.params['productId'];

    return {
      label: of(products[productId].name),
      path: getBreadcrumbPath(route)
    } as IBreadcrumb;
  }
}
