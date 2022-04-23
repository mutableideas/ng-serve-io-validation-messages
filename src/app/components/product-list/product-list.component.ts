import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  public products: Record<string, Product> = this.productService.products;

  constructor(protected productService: ProductService) { }
}
