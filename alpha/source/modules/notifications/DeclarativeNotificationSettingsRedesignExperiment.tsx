// Module ID: 16425
// Function ID: 16426
// Name: DeclarativeNotificationSettingsRedesignExperiment
// Dependencies: [1449, 2]
// Exports: isDeclarativeNotificationSettingsRedesignEnabled, useIsDeclarativeNotificationSettingsRedesignEnabled

// Module 16425 (DeclarativeNotificationSettingsRedesignExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-declarative-notification-settings-redesign", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx");

export function isDeclarativeNotificationSettingsRedesignEnabled(getAssignedNotifSettingsAndMappings) {
  const obj = { location: getAssignedNotifSettingsAndMappings };
  return closure_0.getConfig(obj).enabled;
}
export function useIsDeclarativeNotificationSettingsRedesignEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
