// Module ID: 13594
// Function ID: 13595
// Name: getClientCapabilities
// Dependencies: [2]
// Exports: getClientCapabilities

// Module 13594 (getClientCapabilities)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export const getClientCapabilities = function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
};
