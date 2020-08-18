/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TranslationInput, LanguageCodeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProductTranslations
// ====================================================

export interface UpdateProductTranslations_productTranslate_errors {
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

export interface UpdateProductTranslations_productTranslate_product_translation_language {
  __typename: "LanguageDisplay";
  /**
   * ISO 639 representation of the language name.
   */
  code: LanguageCodeEnum;
  /**
   * Full name of the language.
   */
  language: string;
}

export interface UpdateProductTranslations_productTranslate_product_translation {
  __typename: "ProductTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  descriptionJson: any;
  /**
   * Translation language.
   */
  language: UpdateProductTranslations_productTranslate_product_translation_language;
  name: string;
  seoDescription: string | null;
  seoTitle: string | null;
}

export interface UpdateProductTranslations_productTranslate_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  descriptionJson: any;
  seoDescription: string | null;
  seoTitle: string | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: UpdateProductTranslations_productTranslate_product_translation | null;
}

export interface UpdateProductTranslations_productTranslate {
  __typename: "ProductTranslate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: UpdateProductTranslations_productTranslate_errors[];
  product: UpdateProductTranslations_productTranslate_product | null;
}

export interface UpdateProductTranslations {
  /**
   * Creates/Updates translations for Product.
   */
  productTranslate: UpdateProductTranslations_productTranslate | null;
}

export interface UpdateProductTranslationsVariables {
  id: string;
  input: TranslationInput;
  language: LanguageCodeEnum;
}
