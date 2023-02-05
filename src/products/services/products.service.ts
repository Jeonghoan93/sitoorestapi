import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cron from 'node-cron';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { Variant } from '../entities/variant.entity';
import { UpdateVariantDto } from '../dtos/variants.dto';

@Injectable()
export class ProductsService {
  private baseUrl = 'https://api-sandbox.mysitoo.com/v2/accounts/91615/';
  private authorization =
    'Basic OTE2MTUtMTAwOk9PUnN2VG1DNmJtZ1FXYU9wZmcyVzhsSXIxM2RDeGxQbTczYzU0aTM=';

  async findAll(): Promise<Product[]> {
    const url = `${this.baseUrl}products`;
    const response = await axios.get(url, {
      headers: {
        Authorization: this.authorization,
      },
    });

    return response.data;
  }

  async findOne(id: string): Promise<Product> {
    const url = `${this.baseUrl}products/${id}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: this.authorization,
      },
    });

    return response.data;
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return cron.schedule('* * * * * *', async () => {
      const url = `${this.baseUrl}products`;
      const response = await axios.post(url, createProductDto, {
        headers: {
          Authorization: this.authorization,
        },
      });

      return response.data;
    });
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return cron.schedule('* * * * * *', async () => {
      const url = `${this.baseUrl}products/${id}`;
      const response = await axios.put(url, updateProductDto, {
        headers: {
          Authorization: this.authorization,
        },
      });

      return response.data;
    });
  }

  async updateVariant(
    id: string,
    updateVariantDto: UpdateVariantDto,
  ): Promise<Variant> {
    return cron.schedule('* * * * * *', async () => {
      const url = `${this.baseUrl}variants`;
      const response = await axios.put(url, updateVariantDto, {
        headers: {
          Authorization: this.authorization,
        },
      });

      return response.data;
    });
  }

  async createVariant(createVariantDto: UpdateVariantDto): Promise<Variant> {
    return cron.schedule('* * * * * *', async () => {
      const url = `${this.baseUrl}variants`;
      const response = await axios.post(url, createVariantDto, {
        headers: {
          Authorization: this.authorization,
        },
      });

      return response.data;
    });
  }
}
