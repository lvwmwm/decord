// Module ID: 9059
// Function ID: 71144
// Name: useIsFriendRequestAlertsV2Enabled
// Dependencies: [1428, 2]
// Exports: isFriendRequestAlertsV2Enabled, useIsFriendRequestAlertsV2Enabled

// Module 9059 (useIsFriendRequestAlertsV2Enabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2025-10-friend-request-alerts-v2", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/FriendRequestAlertsV2.tsx");

export const useIsFriendRequestAlertsV2Enabled = function useIsFriendRequestAlertsV2Enabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isFriendRequestAlertsV2Enabled = function isFriendRequestAlertsV2Enabled(maybeConfirmFriendRequestAccept) {
  return closure_0.getConfig({ location: maybeConfirmFriendRequestAccept }).enabled;
};
