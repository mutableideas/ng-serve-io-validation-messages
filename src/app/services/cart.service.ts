import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { getBreadcrumbPath, IBreadcrumb, IBreadCrumbLabelService } from '@ngserveio/navigation';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements IBreadCrumbLabelService {
  public cartItems$ = new BehaviorSubject<number>(0);
  
  public addCartItem(): void {
    this.cartItems$.next(this.cartItems$.value + 1);
  }

  public removeCartItem(): void {
    const cartItemCount = this.cartItems$.value - 1;
    if (cartItemCount >= 0) {
      this.cartItems$.next(cartItemCount);
    }
  }

  public getCrumb(route: ActivatedRouteSnapshot): IBreadcrumb {
    return {
      label: this.cartItems$.pipe(
        map(value => `Cart (${value})`)
      ),
      path: getBreadcrumbPath(route),
    } as IBreadcrumb;
  }
}
