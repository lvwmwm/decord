// Module ID: 12513
// Function ID: 12514
// Name: MaskedLinkActionCreators
// Dependencies: [585, 2]
// Exports: trustDomain, trustProtocol

// Module 12513 (MaskedLinkActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj2);
};
export const trustProtocol = function trustProtocol(url) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj2);
};
