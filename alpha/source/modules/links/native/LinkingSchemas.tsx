// Module ID: 4517
// Function ID: 4518
// Name: LinkingSchemas
// Dependencies: [2]

// Module 4517 (LinkingSchemas)
import size from "module_2" /* 2 */;

const obj = { bestbuy: { regex: /(?:^https?:\/\/)(?:www\.)?bestbuy\.com(?:\/(.*))?$/i, protocol: "bestbuy://" } };
const values = Object.values(obj);
const result = size.fileFinishedImporting("modules/links/native/LinkingSchemas.tsx");

export const LINKING_SCHEMAS = obj;
export const LINKING_SCHEMAS_VALUES = values;
