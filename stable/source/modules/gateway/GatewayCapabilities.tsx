// Module ID: 15879
// Function ID: 15880
// Name: GatewayCapabilities
// Dependencies: [2]
// Exports: getClientCapabilities

// Module 15879 (GatewayCapabilities)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
}
