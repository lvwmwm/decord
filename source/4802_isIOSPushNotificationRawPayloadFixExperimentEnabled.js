// Module ID: 4802
// Function ID: 41798
// Name: isIOSPushNotificationRawPayloadFixExperimentEnabled
// Dependencies: []
// Exports: isIOSPushNotificationRawPayloadFixExperimentEnabled

// Module 4802 (isIOSPushNotificationRawPayloadFixExperimentEnabled)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "344ee148b183cbe058428a0b2e53672e", -1845285747: "img_account_sync_youtube_light_and_dark", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
let closure_1 = null;
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx");

export const isIOSPushNotificationRawPayloadFixExperimentEnabled = function isIOSPushNotificationRawPayloadFixExperimentEnabled() {
  if (null == enabled) {
    const obj = { location: "isIOSPushNotificationRawPayloadFixExperiment" };
    const enabled = config.getConfig(obj).enabled;
  }
  return enabled;
};
