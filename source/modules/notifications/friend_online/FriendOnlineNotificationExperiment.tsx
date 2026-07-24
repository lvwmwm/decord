// Module ID: 14384
// Function ID: 110015
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isEligibleForFriendOnlineNotifications, useFriendOnlineNotificationExperiment

// Module 14384 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-03-friend-is-online-v3", defaultConfig: { showSettingsToggle: false }, variations: { [1]: { showSettingsToggle: true }, [2]: { showSettingsToggle: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationExperiment.tsx");

export default apexExperiment;
export const useFriendOnlineNotificationExperiment = function useFriendOnlineNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForFriendOnlineNotifications = function isEligibleForFriendOnlineNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
