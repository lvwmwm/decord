// Module ID: 7418
// Function ID: 7419
// Name: AccountLinkingActionCreators
// Dependencies: [577, 2]
// Exports: accountLinkAuthorizationCompleted, accountLinkAuthorizationStarted, devtoolsSetGloballyDisabledAuthorizationFlows

// Module 7418 (AccountLinkingActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkingActionCreators.tsx");

export const accountLinkAuthorizationStarted = function accountLinkAuthorizationStarted(id, accountLinkCallbacks) {
  DispatcherDefault.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: id, accountLinkCallbacks });
};
export const accountLinkAuthorizationCompleted = function accountLinkAuthorizationCompleted(applicationId) {
  DispatcherDefault.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId });
};
export const devtoolsSetGloballyDisabledAuthorizationFlows = function devtoolsSetGloballyDisabledAuthorizationFlows(flows) {
  DispatcherDefault.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows });
};
