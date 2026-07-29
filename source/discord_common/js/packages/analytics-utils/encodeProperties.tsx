// Module ID: 662
// Function ID: 663
// Name: encodeProperties
// Dependencies: [2]
// Exports: encodeProperties

// Module 662 (encodeProperties)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/analytics-utils/encodeProperties.tsx");

export const encodeProperties = function encodeProperties(arg0) {
  try {
    const _Buffer = Buffer;
    const _JSON = JSON;
    return Buffer.from(JSON.stringify(arg0)).toString("base64");
  } catch (err) {
    return null;
  }
};
