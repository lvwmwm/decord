// Module ID: 12479
// Function ID: 95341
// Name: getClientCapabilities
// Dependencies: [284214097]
// Exports: getClientCapabilities

// Module 12479 (getClientCapabilities)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export const getClientCapabilities = function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
};
