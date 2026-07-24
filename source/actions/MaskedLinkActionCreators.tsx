// Module ID: 12253
// Function ID: 95725
// Name: trustDomain
// Dependencies: [686, 2]
// Exports: trustDomain, trustProtocol

// Module 12253 (trustDomain)
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
