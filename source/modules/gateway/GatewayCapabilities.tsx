// Module ID: 13667
// Function ID: 13668
// Name: getClientCapabilities
// Dependencies: [2]
// Exports: getClientCapabilities

// Module 13667 (getClientCapabilities)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export const getClientCapabilities = function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
};
