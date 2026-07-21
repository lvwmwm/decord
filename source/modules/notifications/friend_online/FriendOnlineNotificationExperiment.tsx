// Module ID: 14212
// Function ID: 107493
// Name: apexExperiment
// Dependencies: []
// Exports: isEligibleForFriendOnlineNotifications, useFriendOnlineNotificationExperiment

// Module 14212 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { showSettingsToggle: false }, variations: { [1]: { showSettingsToggle: true }, [2]: { showSettingsToggle: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationExperiment.tsx");

export default apexExperiment;
export const useFriendOnlineNotificationExperiment = function useFriendOnlineNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForFriendOnlineNotifications = function isEligibleForFriendOnlineNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
