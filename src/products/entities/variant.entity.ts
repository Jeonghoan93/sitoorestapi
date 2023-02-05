import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Variant {
  @PrimaryGeneratedColumn()
  productid: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: false })
  activepos: boolean;

  @Column({ default: '' })
  sku: string;

  @Column({ default: '0.00' })
  moneyprice: number;

  @Column({ default: '0.00' })
  moneypriceorg: number;

  @Column({ default: '0.00' })
  moneypricein: number;

  @Column({ default: '' })
  barcode: string;

  @Column({ default: '' })
  barcodealias: string;

  @Column({ default: '' })
  attributes: string;
}
