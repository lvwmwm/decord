// Module ID: 9051
// Function ID: 71090
// Name: useIsFriendRequestAlertsV2Enabled
// Dependencies: []
// Exports: isFriendRequestAlertsV2Enabled, useIsFriendRequestAlertsV2Enabled

// Module 9051 (useIsFriendRequestAlertsV2Enabled)
const _module = require(dependencyMap[0]);
const obj = { bottom: null, name: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_settings/content_and_social/FriendRequestAlertsV2.tsx");

export const useIsFriendRequestAlertsV2Enabled = function useIsFriendRequestAlertsV2Enabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isFriendRequestAlertsV2Enabled = function isFriendRequestAlertsV2Enabled(maybeConfirmFriendRequestAccept) {
  return closure_0.getConfig({ location: maybeConfirmFriendRequestAccept }).enabled;
};
