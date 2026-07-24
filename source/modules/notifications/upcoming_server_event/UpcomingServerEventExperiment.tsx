// Module ID: 14394
// Function ID: 110045
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isEligibleForUpcomingServerEventNotifications, useUpcomingServerEventExperiment

// Module 14394 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-04-upcoming-server-event", defaultConfig: { showSettingsToggle: false }, variations: { [1]: { showSettingsToggle: true }, [2]: { showSettingsToggle: true }, [3]: { showSettingsToggle: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx");

export default apexExperiment;
export const useUpcomingServerEventExperiment = function useUpcomingServerEventExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForUpcomingServerEventNotifications = function isEligibleForUpcomingServerEventNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
