// Module ID: 14339
// Function ID: 109707
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isEligibleForProfileUpdatesNotificationsToggle, useProfileUpdatesNotificationExperiment

// Module 14339 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-01-profile-updates-notification", defaultConfig: { showSettingsToggle: false }, variations: { [0]: { showSettingsToggle: false }, [1]: { showSettingsToggle: true }, [2]: { showSettingsToggle: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationExperiment.tsx");

export default apexExperiment;
export const useProfileUpdatesNotificationExperiment = function useProfileUpdatesNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForProfileUpdatesNotificationsToggle = function isEligibleForProfileUpdatesNotificationsToggle(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
