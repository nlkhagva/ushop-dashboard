/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomerInput, AccountErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCustomer
// ====================================================

export interface UpdateCustomer_customerUpdate_errors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface UpdateCustomer_customerUpdate_user_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface UpdateCustomer_customerUpdate_user_defaultShippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: UpdateCustomer_customerUpdate_user_defaultShippingAddress_country;
  countryArea: string;
  firstName: string;
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface UpdateCustomer_customerUpdate_user_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface UpdateCustomer_customerUpdate_user_defaultBillingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: UpdateCustomer_customerUpdate_user_defaultBillingAddress_country;
  countryArea: string;
  firstName: string;
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface UpdateCustomer_customerUpdate_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateJoined: any;
  lastLogin: any | null;
  defaultShippingAddress: UpdateCustomer_customerUpdate_user_defaultShippingAddress | null;
  defaultBillingAddress: UpdateCustomer_customerUpdate_user_defaultBillingAddress | null;
  /**
   * A note about the customer.
   */
  note: string | null;
  isActive: boolean;
}

export interface UpdateCustomer_customerUpdate {
  __typename: "CustomerUpdate";
  errors: UpdateCustomer_customerUpdate_errors[];
  user: UpdateCustomer_customerUpdate_user | null;
}

export interface UpdateCustomer {
  /**
   * Updates an existing customer.
   */
  customerUpdate: UpdateCustomer_customerUpdate | null;
}

export interface UpdateCustomerVariables {
  id: string;
  input: CustomerInput;
}
