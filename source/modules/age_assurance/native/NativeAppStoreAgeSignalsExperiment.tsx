// Module ID: 16017
// Function ID: 122941
// Name: isNativeAppStoreAgeSignalsEnabled
// Dependencies: []
// Exports: isNativeAppStoreAgeSignalsEnabled

// Module 16017 (isNativeAppStoreAgeSignalsEnabled)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_assurance/native/NativeAppStoreAgeSignalsExperiment.tsx");

export const isNativeAppStoreAgeSignalsEnabled = function isNativeAppStoreAgeSignalsEnabled(ParentalConsentManager) {
  return config.getConfig({ location: ParentalConsentManager }).enabled;
};
