// Module ID: 14301
// Function ID: 14302
// Name: GatewayCapabilities
// Dependencies: [2]
// Exports: getClientCapabilities

// Module 14301 (GatewayCapabilities)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export const getClientCapabilities = function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
};
