// Module ID: 15878
// Function ID: 15879
// Name: GatewayCapabilities
// Dependencies: [2]
// Exports: getClientCapabilities

// Module 15878 (GatewayCapabilities)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
}
