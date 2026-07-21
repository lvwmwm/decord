// Module ID: 14214
// Function ID: 107476
// Name: apexExperiment
// Dependencies: []
// Exports: isEligibleForProfileUpdatesNotificationsToggle, useProfileUpdatesNotificationExperiment

// Module 14214 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { showSettingsToggle: false }, variations: { [0]: { showSettingsToggle: false }, [1]: { showSettingsToggle: true }, [2]: { showSettingsToggle: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationExperiment.tsx");

export default apexExperiment;
export const useProfileUpdatesNotificationExperiment = function useProfileUpdatesNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForProfileUpdatesNotificationsToggle = function isEligibleForProfileUpdatesNotificationsToggle(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
