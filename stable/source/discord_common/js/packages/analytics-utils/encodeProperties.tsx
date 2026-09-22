// Module ID: 1333
// Function ID: 1334
// Name: encodeProperties
// Dependencies: [2]
// Exports: encodeProperties

// Module 1333 (encodeProperties)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/encodeProperties.tsx");

export const encodeProperties = function encodeProperties(arg0) {
  try {
    const _Buffer = Buffer;
    const _JSON = JSON;
    return Buffer.from(JSON.stringify(arg0)).toString("base64");
  } catch (err) {
    return null;
  }
};
