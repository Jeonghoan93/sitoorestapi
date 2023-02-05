export class ProductDto {
  productid: number;
  sku: string;
  skumanufacturer: string;
  descriptionshort: string;
  description: string;
  moneyprice: number;
  moneypriceorg: number;
  moneypricein: number;
  unitlabel: string;
  allowdecimals: boolean;
  deliveryinfo: string;
  activepos: boolean;
  vatid: number;
  categories: number[];
  manufacturerid: number;
  manufacturerurl: string;
  custom1: string;
  custom2: string;
  custom3: string;
  custom4: string;
  custom5: string;
  stockcountenable: boolean;
  variantparentid: number;
  id: string;
}

export class CreateProductDto extends ProductDto {}

export class UpdateProductDto extends ProductDto {}
