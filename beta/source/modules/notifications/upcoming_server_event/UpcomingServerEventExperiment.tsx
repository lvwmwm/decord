// Module ID: 15063
// Function ID: 15064
// Name: UpcomingServerEventExperiment
// Dependencies: [1435, 2]
// Exports: isEligibleForUpcomingServerEventNotifications, useUpcomingServerEventExperiment

// Module 15063 (UpcomingServerEventExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-04-upcoming-server-event", defaultConfig: { showSettingsToggle: false }, variations: obj2 };
obj2 = { 1: null, 2: { showSettingsToggle: true }, 3: { showSettingsToggle: true } };
obj2[3] = { showSettingsToggle: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx");

export default apexExperiment;
export const useUpcomingServerEventExperiment = function useUpcomingServerEventExperiment(tabsV2Settings) {
  const obj = { location: tabsV2Settings };
  return apexExperiment.useConfig(obj);
};
export const isEligibleForUpcomingServerEventNotifications = function isEligibleForUpcomingServerEventNotifications(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).showSettingsToggle;
};
