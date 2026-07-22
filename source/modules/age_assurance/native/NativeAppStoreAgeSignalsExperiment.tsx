// Module ID: 16025
// Function ID: 122983
// Name: isNativeAppStoreAgeSignalsEnabled
// Dependencies: []
// Exports: isNativeAppStoreAgeSignalsEnabled

// Module 16025 (isNativeAppStoreAgeSignalsEnabled)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": null, "Bool(false)": 0, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/age_assurance/native/NativeAppStoreAgeSignalsExperiment.tsx");

export const isNativeAppStoreAgeSignalsEnabled = function isNativeAppStoreAgeSignalsEnabled(ParentalConsentManager) {
  return config.getConfig({ location: ParentalConsentManager }).enabled;
};
