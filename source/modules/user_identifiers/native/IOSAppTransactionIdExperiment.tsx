// Module ID: 15971
// Function ID: 122489
// Name: isIOSAppTransactionIdTrackingEnabled
// Dependencies: []
// Exports: isIOSAppTransactionIdTrackingEnabled

// Module 15971 (isIOSAppTransactionIdTrackingEnabled)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": true, "Bool(false)": true, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_identifiers/native/IOSAppTransactionIdExperiment.tsx");

export const isIOSAppTransactionIdTrackingEnabled = function isIOSAppTransactionIdTrackingEnabled(IOSUserIdentifiersManager) {
  return config.getConfig({ location: IOSUserIdentifiersManager }).enabled;
};
