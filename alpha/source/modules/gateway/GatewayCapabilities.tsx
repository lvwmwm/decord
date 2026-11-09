// Module ID: 15850
// Function ID: 15851
// Name: GatewayCapabilities
// Dependencies: [2]
// Exports: getClientCapabilities

// Module 15850 (GatewayCapabilities)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
}
