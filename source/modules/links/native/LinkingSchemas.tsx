// Module ID: 4089
// Function ID: 4090
// Name: LINKING_SCHEMAS
// Dependencies: [2]

// Module 4089 (LINKING_SCHEMAS)
obj = { bestbuy: obj };
obj = { regex: /(?:^https?:\/\/)(?:www\.)?bestbuy\.com(?:\/(.*))?$/i, protocol: "bestbuy://" };
const values = Object.values(obj);
const result = require("set").fileFinishedImporting("modules/links/native/LinkingSchemas.tsx");

export const LINKING_SCHEMAS = obj;
export const LINKING_SCHEMAS_VALUES = values;
