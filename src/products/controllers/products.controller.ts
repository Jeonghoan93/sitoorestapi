import {
  Controller,
  Get,
  Param,
  HttpStatus,
  HttpCode,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { CreateVariantDto, UpdateVariantDto } from '../dtos/variants.dto';
import { Product } from '../entities/product.entity';
import { Variant } from '../entities/variant.entity';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Find all products' })
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a product by id' })
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a product' })
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product by id' })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Post(':id/productvariants')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a variant' })
  async createVariant(
    @Body() createVariantDto: CreateVariantDto,
  ): Promise<Variant> {
    return this.productsService.createVariant(createVariantDto);
  }

  @Put(':id/productvariants/:variantId')
  @ApiOperation({ summary: 'Update a variant by id' })
  async updateVariant(
    @Param('variantId') variantId: string,
    @Body() updateVariantDto: UpdateVariantDto,
  ): Promise<Variant> {
    return this.productsService.updateVariant(variantId, updateVariantDto);
  }
}
