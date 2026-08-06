// Module ID: 4973
// Function ID: 4974
// Name: isIOSPushNotificationRawPayloadFixExperimentEnabled
// Dependencies: [1452, 2]
// Exports: isIOSPushNotificationRawPayloadFixExperimentEnabled

// Module 4973 (isIOSPushNotificationRawPayloadFixExperimentEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-ios-push-notif-json-fix", kind: "user", defaultConfig: { enabled: false }, variations: obj });
let c1 = null;
const result = require("set").fileFinishedImporting("modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx");

export const isIOSPushNotificationRawPayloadFixExperimentEnabled = function isIOSPushNotificationRawPayloadFixExperimentEnabled() {
  if (null == enabled) {
    enabled = config.getConfig({ location: "isIOSPushNotificationRawPayloadFixExperiment" }).enabled;
  }
  return enabled;
};
