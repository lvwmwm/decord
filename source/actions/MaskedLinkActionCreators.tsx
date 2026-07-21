// Module ID: 12108
// Function ID: 93296
// Name: trustDomain
// Dependencies: []
// Exports: trustDomain, trustProtocol

// Module 12108 (trustDomain)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj);
};
export const trustProtocol = function trustProtocol(url) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj);
};
