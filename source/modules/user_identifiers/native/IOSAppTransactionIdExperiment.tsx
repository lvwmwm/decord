// Module ID: 15959
// Function ID: 122403
// Name: isIOSAppTransactionIdTrackingEnabled
// Dependencies: []
// Exports: isIOSAppTransactionIdTrackingEnabled

// Module 15959 (isIOSAppTransactionIdTrackingEnabled)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_identifiers/native/IOSAppTransactionIdExperiment.tsx");

export const isIOSAppTransactionIdTrackingEnabled = function isIOSAppTransactionIdTrackingEnabled(IOSUserIdentifiersManager) {
  return config.getConfig({ location: IOSUserIdentifiersManager }).enabled;
};
