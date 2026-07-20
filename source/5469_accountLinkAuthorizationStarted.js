// Module ID: 5469
// Function ID: 46695
// Name: accountLinkAuthorizationStarted
// Dependencies: []
// Exports: accountLinkAuthorizationCompleted, accountLinkAuthorizationStarted, devtoolsSetGloballyDisabledAuthorizationFlows

// Module 5469 (accountLinkAuthorizationStarted)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/application_account_linking/AccountLinkingActionCreators.tsx");

export const accountLinkAuthorizationStarted = function accountLinkAuthorizationStarted(id, accountLinkCallbacks) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "ACCOUNT_LINK_AUTHORIZATION_STARTED", applicationId: id, accountLinkCallbacks };
  obj.dispatch(obj);
};
export const accountLinkAuthorizationCompleted = function accountLinkAuthorizationCompleted(applicationId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId };
  obj.dispatch(obj);
};
export const devtoolsSetGloballyDisabledAuthorizationFlows = function devtoolsSetGloballyDisabledAuthorizationFlows(flows) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows };
  obj.dispatch(obj);
};
