// Module ID: 14874
// Function ID: 14875
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: isEligibleForFriendOnlineNotifications, useFriendOnlineNotificationExperiment

// Module 14874 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { showSettingsToggle: true } };
obj[2] = { showSettingsToggle: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-friend-is-online-v3", defaultConfig: { showSettingsToggle: false }, variations: obj });
const result = set.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationExperiment.tsx");

export default apexExperiment;
export const useFriendOnlineNotificationExperiment = function useFriendOnlineNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForFriendOnlineNotifications = function isEligibleForFriendOnlineNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
