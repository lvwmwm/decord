// Module ID: 14468
// Function ID: 14469
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: isEligibleForUpcomingServerEventNotifications, useUpcomingServerEventExperiment

// Module 14468 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { showSettingsToggle: true }, 3: { showSettingsToggle: true } };
obj[3] = { showSettingsToggle: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-upcoming-server-event", defaultConfig: { showSettingsToggle: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx");

export default apexExperiment;
export const useUpcomingServerEventExperiment = function useUpcomingServerEventExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForUpcomingServerEventNotifications = function isEligibleForUpcomingServerEventNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};
