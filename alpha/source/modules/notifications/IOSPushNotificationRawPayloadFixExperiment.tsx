// Module ID: 6566
// Function ID: 6567
// Name: IOSPushNotificationRawPayloadFixExperiment
// Dependencies: [1447, 2]
// Exports: isIOSPushNotificationRawPayloadFixExperimentEnabled

// Module 6566 (IOSPushNotificationRawPayloadFixExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-01-ios-push-notif-json-fix", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
let enabled = null;
const result = size.fileFinishedImporting("modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx");

export function isIOSPushNotificationRawPayloadFixExperimentEnabled() {
  if (null == enabled) {
    enabled = config.getConfig({ location: "isIOSPushNotificationRawPayloadFixExperiment" }).enabled;
  }
  return enabled;
}
