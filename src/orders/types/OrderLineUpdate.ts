/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderLineInput, OrderErrorCode, OrderEventsEmailsEnum, OrderEventsEnum, FulfillmentStatus, PaymentChargeStatusEnum, OrderStatus, OrderAction, JobStatusEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: OrderLineUpdate
// ====================================================

export interface OrderLineUpdate_draftOrderLineUpdate_errors {
  __typename: "OrderError";
  /**
   * The error code.
   */
  code: OrderErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_billingAddress_country {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_billingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: OrderLineUpdate_draftOrderLineUpdate_order_billingAddress_country;
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_events_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_events {
  __typename: "OrderEvent";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Amount of money.
   */
  amount: number | null;
  /**
   * Date when event happened at in ISO 8601 format.
   */
  date: any | null;
  /**
   * Email of the customer.
   */
  email: string | null;
  /**
   * Type of an email sent to the customer.
   */
  emailType: OrderEventsEmailsEnum | null;
  /**
   * Number of an invoice related to the order.
   */
  invoiceNumber: string | null;
  /**
   * Content of the event.
   */
  message: string | null;
  /**
   * Number of items.
   */
  quantity: number | null;
  /**
   * Order event type.
   */
  type: OrderEventsEnum | null;
  /**
   * User who performed the action.
   */
  user: OrderLineUpdate_draftOrderLineUpdate_order_events_user | null;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant_product_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  productType: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant_product_productType;
  ushop: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant_product_metadata | null)[];
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  product: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant_product;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_unitPrice_gross {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_unitPrice_net {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_unitPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_unitPrice_net;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_variant | null;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_unitPrice | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine_thumbnail | null;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  orderLine: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines_orderLine | null;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_fulfillments {
  __typename: "Fulfillment";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of lines for the fulfillment.
   */
  lines: (OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_lines | null)[] | null;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
  ukDate: any | null;
  /**
   * Warehouse from fulfillment was fulfilled.
   */
  warehouse: OrderLineUpdate_draftOrderLineUpdate_order_fulfillments_warehouse | null;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_variant_product_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  productType: OrderLineUpdate_draftOrderLineUpdate_order_lines_variant_product_productType;
  ushop: OrderLineUpdate_draftOrderLineUpdate_order_lines_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (OrderLineUpdate_draftOrderLineUpdate_order_lines_variant_product_metadata | null)[];
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  product: OrderLineUpdate_draftOrderLineUpdate_order_lines_variant_product;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_unitPrice_gross {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_unitPrice_net {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineUpdate_draftOrderLineUpdate_order_lines_unitPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: OrderLineUpdate_draftOrderLineUpdate_order_lines_unitPrice_net;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_lines {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: OrderLineUpdate_draftOrderLineUpdate_order_lines_variant | null;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: OrderLineUpdate_draftOrderLineUpdate_order_lines_unitPrice | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: OrderLineUpdate_draftOrderLineUpdate_order_lines_thumbnail | null;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_shippingAddress_country {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: OrderLineUpdate_draftOrderLineUpdate_order_shippingAddress_country;
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_shippingPrice_gross {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineUpdate_draftOrderLineUpdate_order_shippingPrice_gross;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_subtotal_gross {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_subtotal {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineUpdate_draftOrderLineUpdate_order_subtotal_gross;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_total_gross {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_total_tax {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_total {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineUpdate_draftOrderLineUpdate_order_total_gross;
  /**
   * Amount of taxes.
   */
  tax: OrderLineUpdate_draftOrderLineUpdate_order_total_tax;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_totalAuthorized {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_totalCaptured {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_availableShippingMethods_price {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: OrderLineUpdate_draftOrderLineUpdate_order_availableShippingMethods_price | null;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order_discount {
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

export interface OrderLineUpdate_draftOrderLineUpdate_order_invoices {
  __typename: "Invoice";
  /**
   * The ID of the object.
   */
  id: string;
  number: string | null;
  /**
   * Created date time of job in ISO 8601 format.
   */
  createdAt: any;
  /**
   * URL to download an invoice.
   */
  url: string | null;
  /**
   * Job status.
   */
  status: JobStatusEnum;
}

export interface OrderLineUpdate_draftOrderLineUpdate_order {
  __typename: "Order";
  /**
   * The ID of the object.
   */
  id: string;
  billingAddress: OrderLineUpdate_draftOrderLineUpdate_order_billingAddress | null;
  /**
   * Informs whether a draft order can be finalized(turned into a regular order).
   */
  canFinalize: boolean;
  created: any;
  customerNote: string;
  /**
   * List of events associated with the order.
   */
  events: (OrderLineUpdate_draftOrderLineUpdate_order_events | null)[] | null;
  /**
   * List of shipments for the order.
   */
  fulfillments: (OrderLineUpdate_draftOrderLineUpdate_order_fulfillments | null)[];
  /**
   * List of order lines.
   */
  lines: (OrderLineUpdate_draftOrderLineUpdate_order_lines | null)[];
  /**
   * User-friendly number of an order.
   */
  number: string | null;
  /**
   * Internal payment status.
   */
  paymentStatus: PaymentChargeStatusEnum | null;
  shippingAddress: OrderLineUpdate_draftOrderLineUpdate_order_shippingAddress | null;
  shippingMethod: OrderLineUpdate_draftOrderLineUpdate_order_shippingMethod | null;
  shippingMethodName: string | null;
  /**
   * Total price of shipping.
   */
  shippingPrice: OrderLineUpdate_draftOrderLineUpdate_order_shippingPrice | null;
  status: OrderStatus;
  /**
   * The sum of line prices not including shipping.
   */
  subtotal: OrderLineUpdate_draftOrderLineUpdate_order_subtotal | null;
  /**
   * Total amount of the order.
   */
  total: OrderLineUpdate_draftOrderLineUpdate_order_total | null;
  /**
   * List of actions that can be performed in the current state of an order.
   */
  actions: (OrderAction | null)[];
  /**
   * Amount authorized for the order.
   */
  totalAuthorized: OrderLineUpdate_draftOrderLineUpdate_order_totalAuthorized | null;
  /**
   * Amount captured by payment.
   */
  totalCaptured: OrderLineUpdate_draftOrderLineUpdate_order_totalCaptured | null;
  user: OrderLineUpdate_draftOrderLineUpdate_order_user | null;
  /**
   * Email address of the customer.
   */
  userEmail: string | null;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (OrderLineUpdate_draftOrderLineUpdate_order_availableShippingMethods | null)[] | null;
  discount: OrderLineUpdate_draftOrderLineUpdate_order_discount | null;
  /**
   * List of order invoices.
   */
  invoices: (OrderLineUpdate_draftOrderLineUpdate_order_invoices | null)[] | null;
}

export interface OrderLineUpdate_draftOrderLineUpdate {
  __typename: "DraftOrderLineUpdate";
  errors: OrderLineUpdate_draftOrderLineUpdate_errors[];
  /**
   * A related draft order.
   */
  order: OrderLineUpdate_draftOrderLineUpdate_order | null;
}

export interface OrderLineUpdate {
  /**
   * Updates an order line of a draft order.
   */
  draftOrderLineUpdate: OrderLineUpdate_draftOrderLineUpdate | null;
}

export interface OrderLineUpdateVariables {
  id: string;
  input: OrderLineInput;
}
