// Module ID: 8332
// Function ID: 66023
// Name: getHostname
// Dependencies: [284214097]
// Exports: getHostname, getProtocol

// Module 8332 (getHostname)
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
