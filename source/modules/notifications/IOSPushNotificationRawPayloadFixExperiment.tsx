// Module ID: 4806
// Function ID: 41877
// Name: isIOSPushNotificationRawPayloadFixExperimentEnabled
// Dependencies: [1428, 2]
// Exports: isIOSPushNotificationRawPayloadFixExperimentEnabled

// Module 4806 (isIOSPushNotificationRawPayloadFixExperimentEnabled)
import ApexExperiment from "ApexExperiment";

let obj = { name: "2026-01-ios-push-notif-json-fix", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
let c1 = null;
const result = require("set").fileFinishedImporting("modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx");

export const isIOSPushNotificationRawPayloadFixExperimentEnabled = function isIOSPushNotificationRawPayloadFixExperimentEnabled() {
  if (null == enabled) {
    const obj = { location: "isIOSPushNotificationRawPayloadFixExperiment" };
    enabled = config.getConfig(obj).enabled;
  }
  return enabled;
};
