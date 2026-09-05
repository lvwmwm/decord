// Module ID: 1335
// Function ID: 1336
// Name: encodeProperties
// Dependencies: [2]
// Exports: encodeProperties

// Module 1335 (encodeProperties)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/analytics-utils/encodeProperties.tsx");

export const encodeProperties = function encodeProperties(arg0) {
  try {
    const _Buffer = Buffer;
    const _JSON = JSON;
    return Buffer.from(JSON.stringify(arg0)).toString("base64");
  } catch (err) {
    return null;
  }
};
