// Module ID: 12663
// Function ID: 98000
// Name: getClientCapabilities
// Dependencies: [2]
// Exports: getClientCapabilities

// Module 12663 (getClientCapabilities)
const result = require("set").fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export const getClientCapabilities = function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
};
