import fs from 'fs';
import { resolve } from 'path';

import { Variant } from '../entities/variant.entity';
import { Product } from '../entities/product.entity';

export class DataService {
  private products: Product[];

  constructor() {
    this.products = JSON.parse(
      fs.readFileSync(
        resolve(__dirname, '../../../../database/products.json'),
        'utf-8',
      ),
    );
  }

  private getProduct(productId: string): Product | undefined {
    const product = this.products.find((p) => p.id === productId);

    return product;
  }

  public getVariants(productId: string): Variant[] {
    const product = this.getProduct(productId);

    return product?.variants || [];
  }

  public getProductsData(): Product[] {
    return this.products;
  }

  public updateProductData(id: string, data: Product) {
    const products = this.getProductsData();
    const productIndex = products.findIndex((p) => p.id === id);

    products[productIndex] = data;
    this.products = products;
  }
}
