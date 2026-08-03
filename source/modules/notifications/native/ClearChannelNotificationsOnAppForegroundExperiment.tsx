// Module ID: 16735
// Function ID: 16736
// Name: shouldClearChannelNotificationsOnAppForeground
// Dependencies: [1452, 2]
// Exports: shouldClearChannelNotificationsOnAppForeground

// Module 16735 (shouldClearChannelNotificationsOnAppForeground)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-10-clear-channel-notifications-on-app-foreground-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx");

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(location) {
  return config.getConfig({ location: location.location }).enabled;
};
