// Module ID: 8383
// Function ID: 66311
// Name: getHostname
// Dependencies: [2]
// Exports: getHostname, getProtocol

// Module 8383 (getHostname)
const result = require("set").fileFinishedImporting("stores/MaskedLinkStoreMethodsAdditional.native.tsx");

export const getHostname = function getHostname(closure_0) {
  const uRL = new URL(closure_0);
  return uRL.hostname;
};
export const getProtocol = function getProtocol(closure_0) {
  const uRL = new URL(closure_0);
  return uRL.protocol;
};
