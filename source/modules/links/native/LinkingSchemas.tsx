// Module ID: 3824
// Function ID: 31792
// Name: LINKING_SCHEMAS
// Dependencies: [284214097]

// Module 3824 (LINKING_SCHEMAS)
let obj = { bestbuy: obj };
obj = { regex: /(?:^https?:\/\/)(?:www\.)?bestbuy\.com(?:\/(.*))?$/i, protocol: "bestbuy://" };
const values = Object.values(obj);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/links/native/LinkingSchemas.tsx");

export const LINKING_SCHEMAS = obj;
export const LINKING_SCHEMAS_VALUES = values;
