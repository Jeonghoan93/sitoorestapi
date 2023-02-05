export class VariantDto {
  productid: number;
  active: boolean;
  activepos: boolean;
  title: string;
  sku: string;
  deliverystatus: string;
  moneyprice: {
    amount: number;
    currency: string;
  };
  moneypriceorg: {
    amount: number;
    currency: string;
  };
  moneypricein: {
    amount: number;
    currency: string;
  };
  moneyofferprice: {
    amount: number;
    currency: string;
  };
  barcode: string;
  barcodealiases: string[];
  friendly: string;
  attributes: string[];
  pricelisthasvolume: boolean;
}

export class CreateVariantDto extends VariantDto {}

export class UpdateVariantDto extends VariantDto {}
