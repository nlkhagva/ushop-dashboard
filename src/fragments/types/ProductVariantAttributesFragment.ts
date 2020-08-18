/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AttributeInputTypeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: ProductVariantAttributesFragment
// ====================================================

export interface ProductVariantAttributesFragment_attributes_attribute_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface ProductVariantAttributesFragment_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * The input type to use for entering attribute values in the dashboard.
   */
  inputType: AttributeInputTypeEnum | null;
  /**
   * Whether the attribute requires values to be passed or not.
   */
  valueRequired: boolean;
  /**
   * List of attribute's values.
   */
  values: (ProductVariantAttributesFragment_attributes_attribute_values | null)[] | null;
}

export interface ProductVariantAttributesFragment_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface ProductVariantAttributesFragment_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductVariantAttributesFragment_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ProductVariantAttributesFragment_attributes_values | null)[];
}

export interface ProductVariantAttributesFragment_productType_variantAttributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface ProductVariantAttributesFragment_productType_variantAttributes {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * List of attribute's values.
   */
  values: (ProductVariantAttributesFragment_productType_variantAttributes_values | null)[] | null;
}

export interface ProductVariantAttributesFragment_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Variant attributes of that product type.
   */
  variantAttributes: (ProductVariantAttributesFragment_productType_variantAttributes | null)[] | null;
}

export interface ProductVariantAttributesFragment_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductVariantAttributesFragment_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductVariantAttributesFragment_pricing_priceRangeUndiscounted_start_gross;
}

export interface ProductVariantAttributesFragment_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductVariantAttributesFragment_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductVariantAttributesFragment_pricing_priceRangeUndiscounted_stop_gross;
}

export interface ProductVariantAttributesFragment_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductVariantAttributesFragment_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductVariantAttributesFragment_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductVariantAttributesFragment_pricing {
  __typename: "ProductPricingInfo";
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductVariantAttributesFragment_pricing_priceRangeUndiscounted | null;
}

export interface ProductVariantAttributesFragment {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of attributes assigned to this product.
   */
  attributes: ProductVariantAttributesFragment_attributes[];
  productType: ProductVariantAttributesFragment_productType;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductVariantAttributesFragment_pricing | null;
}
