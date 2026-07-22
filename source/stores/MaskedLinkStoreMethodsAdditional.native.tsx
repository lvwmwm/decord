// Module ID: 8333
// Function ID: 66046
// Name: getHostname
// Dependencies: []
// Exports: getHostname, getProtocol

// Module 8333 (getHostname)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("stores/MaskedLinkStoreMethodsAdditional.native.tsx");

export const getHostname = function getHostname(first) {
  const uRL = new URL(first);
  return uRL.hostname;
};
export const getProtocol = function getProtocol(url) {
  const uRL = new URL(url);
  return uRL.protocol;
};
