// Module ID: 13040
// Function ID: 13041
// Name: trustDomain
// Dependencies: [706, 2]
// Exports: trustDomain, trustProtocol

// Module 13040 (trustDomain)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  let obj = dispatcherDefault;
  obj = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj);
};
export const trustProtocol = function trustProtocol(url) {
  let obj = dispatcherDefault;
  obj = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj);
};
