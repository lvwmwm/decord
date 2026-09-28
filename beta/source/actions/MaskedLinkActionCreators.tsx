// Module ID: 12511
// Function ID: 12512
// Name: MaskedLinkActionCreators
// Dependencies: [573, 2]
// Exports: trustDomain, trustProtocol

// Module 12511 (MaskedLinkActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  DispatcherDefault.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url });
};
export const trustProtocol = function trustProtocol(url) {
  DispatcherDefault.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url });
};
