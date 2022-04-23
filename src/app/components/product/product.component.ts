import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  constructor(private route: ActivatedRoute, private service: ProductService, private cartService: CartService) { }

  public product$ = this.route.params.pipe(
    map(({ productId }) => {
      return this.service.getProduct(productId);
    })
  );

  public addToCart() {
    this.cartService.addCartItem();
  }
}
