// Module ID: 19447
// Function ID: 19448
// Name: IOSAppTransactionIdExperiment
// Dependencies: [1448, 2]
// Exports: isIOSAppTransactionIdTrackingEnabled

// Module 19447 (IOSAppTransactionIdExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-01-ios-apptransactionid-tracking", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_identifiers/native/IOSAppTransactionIdExperiment.tsx");

export function isIOSAppTransactionIdTrackingEnabled(IOSUserIdentifiersManager) {
  const obj = { location: IOSUserIdentifiersManager };
  return config.getConfig(obj).enabled;
}
