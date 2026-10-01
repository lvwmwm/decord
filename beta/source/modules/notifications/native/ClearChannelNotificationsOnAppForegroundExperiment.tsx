// Module ID: 17635
// Function ID: 17636
// Name: ClearChannelNotificationsOnAppForegroundExperiment
// Dependencies: [1435, 2]
// Exports: shouldClearChannelNotificationsOnAppForeground

// Module 17635 (ClearChannelNotificationsOnAppForegroundExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2025-10-clear-channel-notifications-on-app-foreground-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx");

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(location) {
  const obj = { location: location.location };
  return config.getConfig(obj).enabled;
};
