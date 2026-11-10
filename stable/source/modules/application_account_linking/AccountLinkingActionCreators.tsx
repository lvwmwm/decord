// Module ID: 7333
// Function ID: 7334
// Name: AccountLinkingActionCreators
// Dependencies: [572, 2]
// Exports: accountLinkAuthorizationCompleted, accountLinkAuthorizationStarted, devtoolsSetGloballyDisabledAuthorizationFlows

// Module 7333 (AccountLinkingActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkingActionCreators.tsx");

export function accountLinkAuthorizationStarted(id, accountLinkCallbacks) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: id, accountLinkCallbacks };
  obj.dispatch(obj2);
}
export function accountLinkAuthorizationCompleted(applicationId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId };
  obj.dispatch(obj2);
}
export function devtoolsSetGloballyDisabledAuthorizationFlows(flows) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows };
  obj.dispatch(obj2);
}
