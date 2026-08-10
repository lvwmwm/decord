// Module ID: 12231
// Function ID: 12232
// Name: trustDomain
// Dependencies: [709, 2]
// Exports: trustDomain, trustProtocol

// Module 12231 (trustDomain)
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
