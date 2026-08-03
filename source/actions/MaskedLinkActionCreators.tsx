// Module ID: 12413
// Function ID: 12414
// Name: trustDomain
// Dependencies: [709, 2]
// Exports: trustDomain, trustProtocol

// Module 12413 (trustDomain)
const result = require("set").fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  let obj = importDefault(709);
  obj = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj);
};
export const trustProtocol = function trustProtocol(url) {
  let obj = importDefault(709);
  obj = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj);
};
