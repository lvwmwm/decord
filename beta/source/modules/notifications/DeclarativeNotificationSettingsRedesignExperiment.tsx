// Module ID: 14013
// Function ID: 14014
// Name: DeclarativeNotificationSettingsRedesignExperiment
// Dependencies: [1435, 2]
// Exports: isDeclarativeNotificationSettingsRedesignEnabled, useIsDeclarativeNotificationSettingsRedesignEnabled

// Module 14013 (DeclarativeNotificationSettingsRedesignExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-declarative-notification-settings-redesign", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx");

export const isDeclarativeNotificationSettingsRedesignEnabled = function isDeclarativeNotificationSettingsRedesignEnabled(getAssignedNotifSettingsAndMappings) {
  const obj = { location: getAssignedNotifSettingsAndMappings };
  return closure_0.getConfig(obj).enabled;
};
export const useIsDeclarativeNotificationSettingsRedesignEnabled = function useIsDeclarativeNotificationSettingsRedesignEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
};
