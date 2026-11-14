// Module ID: 16177
// Function ID: 16178
// Name: DeclarativeNotificationSettingsRedesignExperiment
// Dependencies: [1452, 2]
// Exports: isDeclarativeNotificationSettingsRedesignEnabled, useIsDeclarativeNotificationSettingsRedesignEnabled

// Module 16177 (DeclarativeNotificationSettingsRedesignExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-declarative-notification-settings-redesign", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx");

export function isDeclarativeNotificationSettingsRedesignEnabled(refreshEffectiveNotifSettings) {
  const obj = { location: refreshEffectiveNotifSettings };
  return closure_0.getConfig(obj).enabled;
}
export function useIsDeclarativeNotificationSettingsRedesignEnabled(EffectiveNotifSettingsLayout) {
  const obj = { location: EffectiveNotifSettingsLayout };
  return closure_0.useConfig(obj).enabled;
}
