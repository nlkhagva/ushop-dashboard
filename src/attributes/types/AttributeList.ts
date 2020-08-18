/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AttributeFilterInput, AttributeSortingInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: AttributeList
// ====================================================

export interface AttributeList_attributes_edges_node_values {
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

export interface AttributeList_attributes_edges_node {
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
  /**
   * List of attribute's values.
   */
  values: (AttributeList_attributes_edges_node_values | null)[] | null;
}

export interface AttributeList_attributes_edges {
  __typename: "AttributeCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: AttributeList_attributes_edges_node;
}

export interface AttributeList_attributes_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface AttributeList_attributes {
  __typename: "AttributeCountableConnection";
  edges: AttributeList_attributes_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: AttributeList_attributes_pageInfo;
}

export interface AttributeList {
  /**
   * List of the shop's attributes.
   */
  attributes: AttributeList_attributes | null;
}

export interface AttributeListVariables {
  filter?: AttributeFilterInput | null;
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  sort?: AttributeSortingInput | null;
}
