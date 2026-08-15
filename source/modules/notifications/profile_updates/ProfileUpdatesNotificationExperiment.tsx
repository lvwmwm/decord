// Module ID: 14815
// Function ID: 14816
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: isEligibleForProfileUpdatesNotificationsToggle, useProfileUpdatesNotificationExperiment

// Module 14815 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-profile-updates-notification", defaultConfig: { showSettingsToggle: false }, variations: { 0: { showSettingsToggle: false }, 1: { showSettingsToggle: true }, 2: { showSettingsToggle: true } } });
const result = require("set").fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationExperiment.tsx");

export default apexExperiment;
export const useProfileUpdatesNotificationExperiment = function useProfileUpdatesNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForProfileUpdatesNotificationsToggle = function isEligibleForProfileUpdatesNotificationsToggle(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
