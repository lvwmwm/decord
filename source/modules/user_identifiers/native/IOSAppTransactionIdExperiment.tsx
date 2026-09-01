// Module ID: 16983
// Function ID: 16984
// Name: isIOSAppTransactionIdTrackingEnabled
// Dependencies: [1468, 2]
// Exports: isIOSAppTransactionIdTrackingEnabled

// Module 16983 (isIOSAppTransactionIdTrackingEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-ios-apptransactionid-tracking", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/user_identifiers/native/IOSAppTransactionIdExperiment.tsx");

export const isIOSAppTransactionIdTrackingEnabled = function isIOSAppTransactionIdTrackingEnabled(IOSUserIdentifiersManager) {
  return config.getConfig({ location: IOSUserIdentifiersManager }).enabled;
};
