// Module ID: 12486
// Function ID: 95391
// Name: getClientCapabilities
// Dependencies: []
// Exports: getClientCapabilities

// Module 12486 (getClientCapabilities)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export const getClientCapabilities = function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
};
