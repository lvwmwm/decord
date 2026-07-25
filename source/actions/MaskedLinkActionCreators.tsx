// Module ID: 12229
// Function ID: 95534
// Name: trustDomain
// Dependencies: [686, 2]
// Exports: trustDomain, trustProtocol

// Module 12229 (trustDomain)
const result = require("set").fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  let obj = importDefault(686);
  obj = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj);
};
export const trustProtocol = function trustProtocol(url) {
  let obj = importDefault(686);
  obj = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj);
};
