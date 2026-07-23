// Module ID: 16088
// Function ID: 124662
// Name: isIOSAppTransactionIdTrackingEnabled
// Dependencies: [1428, 2]
// Exports: isIOSAppTransactionIdTrackingEnabled

// Module 16088 (isIOSAppTransactionIdTrackingEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-01-ios-apptransactionid-tracking", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_identifiers/native/IOSAppTransactionIdExperiment.tsx");

export const isIOSAppTransactionIdTrackingEnabled = function isIOSAppTransactionIdTrackingEnabled(IOSUserIdentifiersManager) {
  return config.getConfig({ location: IOSUserIdentifiersManager }).enabled;
};
