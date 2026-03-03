import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
}