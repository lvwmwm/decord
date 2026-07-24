// Module ID: 16548
// Function ID: 128996
// Name: shouldClearChannelNotificationsOnAppForeground
// Dependencies: [1428, 2]
// Exports: shouldClearChannelNotificationsOnAppForeground

// Module 16548 (shouldClearChannelNotificationsOnAppForeground)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-10-clear-channel-notifications-on-app-foreground-ios", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx");

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(location) {
  return config.getConfig({ location: location.location }).enabled;
};
