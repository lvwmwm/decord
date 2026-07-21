// Module ID: 14222
// Function ID: 107523
// Name: apexExperiment
// Dependencies: []
// Exports: isEligibleForUpcomingServerEventNotifications, useUpcomingServerEventExperiment

// Module 14222 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { showSettingsToggle: false }, variations: { [1]: { showSettingsToggle: true }, [2]: { showSettingsToggle: true }, [3]: { showSettingsToggle: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx");

export default apexExperiment;
export const useUpcomingServerEventExperiment = function useUpcomingServerEventExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForUpcomingServerEventNotifications = function isEligibleForUpcomingServerEventNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
