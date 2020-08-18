/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductTypeInput, WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductTypeCreate
// ====================================================

export interface ProductTypeCreate_productTypeCreate_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface ProductTypeCreate_productTypeCreate_productType_taxType {
  __typename: "TaxType";
  /**
   * Description of the tax type.
   */
  description: string | null;
  /**
   * External tax code used to identify given tax group.
   */
  taxCode: string | null;
}

export interface ProductTypeCreate_productTypeCreate_productType_productAttributes {
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
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * Whether the attribute should be visible or not in storefront.
   */
  visibleInStorefront: boolean;
  /**
   * Whether the attribute can be filtered in dashboard.
   */
  filterableInDashboard: boolean;
  /**
   * Whether the attribute can be filtered in storefront.
   */
  filterableInStorefront: boolean;
}

export interface ProductTypeCreate_productTypeCreate_productType_variantAttributes {
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
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * Whether the attribute should be visible or not in storefront.
   */
  visibleInStorefront: boolean;
  /**
   * Whether the attribute can be filtered in dashboard.
   */
  filterableInDashboard: boolean;
  /**
   * Whether the attribute can be filtered in storefront.
   */
  filterableInStorefront: boolean;
}

export interface ProductTypeCreate_productTypeCreate_productType_weight {
  __typename: "Weight";
  /**
   * Weight unit.
   */
  unit: WeightUnitsEnum;
  /**
   * Weight value.
   */
  value: number;
}

export interface ProductTypeCreate_productTypeCreate_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  hasVariants: boolean;
  isShippingRequired: boolean;
  /**
   * A type of tax. Assigned by enabled tax gateway
   */
  taxType: ProductTypeCreate_productTypeCreate_productType_taxType | null;
  /**
   * Product attributes of that product type.
   */
  productAttributes: (ProductTypeCreate_productTypeCreate_productType_productAttributes | null)[] | null;
  /**
   * Variant attributes of that product type.
   */
  variantAttributes: (ProductTypeCreate_productTypeCreate_productType_variantAttributes | null)[] | null;
  weight: ProductTypeCreate_productTypeCreate_productType_weight | null;
}

export interface ProductTypeCreate_productTypeCreate {
  __typename: "ProductTypeCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: ProductTypeCreate_productTypeCreate_errors[];
  productType: ProductTypeCreate_productTypeCreate_productType | null;
}

export interface ProductTypeCreate {
  /**
   * Creates a new product type.
   */
  productTypeCreate: ProductTypeCreate_productTypeCreate | null;
}

export interface ProductTypeCreateVariables {
  input: ProductTypeInput;
}
