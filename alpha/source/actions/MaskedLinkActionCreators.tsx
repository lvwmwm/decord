// Module ID: 14592
// Function ID: 14593
// Name: MaskedLinkActionCreators
// Dependencies: [572, 2]
// Exports: trustDomain, trustProtocol

// Module 14592 (MaskedLinkActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export function trustDomain(url) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj2);
}
export function trustProtocol(url) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj2);
}
