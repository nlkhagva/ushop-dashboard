/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderAddNoteInput, OrderErrorCode, OrderEventsEmailsEnum, OrderEventsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: OrderAddNote
// ====================================================

export interface OrderAddNote_orderAddNote_errors {
  __typename: "OrderError";
  /**
   * The error code.
   */
  code: OrderErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface OrderAddNote_orderAddNote_order_events_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
}

export interface OrderAddNote_orderAddNote_order_events {
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
  user: OrderAddNote_orderAddNote_order_events_user | null;
}

export interface OrderAddNote_orderAddNote_order {
  __typename: "Order";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of events associated with the order.
   */
  events: (OrderAddNote_orderAddNote_order_events | null)[] | null;
}

export interface OrderAddNote_orderAddNote {
  __typename: "OrderAddNote";
  errors: OrderAddNote_orderAddNote_errors[];
  /**
   * Order with the note added.
   */
  order: OrderAddNote_orderAddNote_order | null;
}

export interface OrderAddNote {
  /**
   * Adds note to the order.
   */
  orderAddNote: OrderAddNote_orderAddNote | null;
}

export interface OrderAddNoteVariables {
  order: string;
  input: OrderAddNoteInput;
}
