// Module ID: 639
// Function ID: 7339
// Name: encodeProperties
// Dependencies: [2]
// Exports: encodeProperties

// Module 639 (encodeProperties)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/analytics-utils/encodeProperties.tsx");

export const encodeProperties = function encodeProperties(arg0) {
  return Buffer.from(JSON.stringify(arg0)).toString("base64");
};
