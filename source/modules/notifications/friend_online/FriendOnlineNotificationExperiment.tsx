// Module ID: 14202
// Function ID: 107438
// Name: apexExperiment
// Dependencies: []
// Exports: isEligibleForFriendOnlineNotifications, useFriendOnlineNotificationExperiment

// Module 14202 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Null": "Array", "Null": "safeJoin", defaultConfig: { showSettingsToggle: false }, variations: { [1]: { showSettingsToggle: true }, [2]: { showSettingsToggle: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationExperiment.tsx");

export default apexExperiment;
export const useFriendOnlineNotificationExperiment = function useFriendOnlineNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForFriendOnlineNotifications = function isEligibleForFriendOnlineNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
