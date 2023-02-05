import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Variant } from './variant.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productid: number;

  @Column()
  sku: string;

  @Column({ default: '' })
  skumanufacturer: string;

  @Column({ default: '' })
  descriptionshort: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '0.00' })
  moneyprice: number;

  @Column({ default: '0.00' })
  moneypriceorg: number;

  @Column({ default: '0.00' })
  moneypricein: number;

  @Column({ default: '' })
  unitlabel: string;

  @Column({ default: false })
  allowdecimals: boolean;

  @Column({ default: '' })
  deliveryinfo: string;

  @Column({ default: false })
  activepos: boolean;

  @Column({ default: 2 })
  vatid: number;

  @Column({ default: [] })
  categories: number[];

  @Column({ nullable: true })
  manufacturerid: number;

  @Column({ default: '' })
  manufacturerurl: string;

  @Column({ default: '' })
  custom1: string;

  @Column({ default: '' })
  custom2: string;

  @Column({ default: '' })
  custom3: string;

  @Column({ default: '' })
  custom4: string;

  @Column({ default: '' })
  custom5: string;

  @Column({ default: true })
  stockcountenable: boolean;

  @Column({ nullable: true, readonly: true })
  variantparentid: number;
  id: string;

  @Column({ default: '' })
  variants: Variant[];
}
