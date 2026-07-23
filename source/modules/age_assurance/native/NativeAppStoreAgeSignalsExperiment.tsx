// Module ID: 16142
// Function ID: 125156
// Name: isNativeAppStoreAgeSignalsEnabled
// Dependencies: [1428, 2]
// Exports: isNativeAppStoreAgeSignalsEnabled

// Module 16142 (isNativeAppStoreAgeSignalsEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-07-native-app-store-age-signals", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/age_assurance/native/NativeAppStoreAgeSignalsExperiment.tsx");

export const isNativeAppStoreAgeSignalsEnabled = function isNativeAppStoreAgeSignalsEnabled(ParentalConsentManager) {
  return config.getConfig({ location: ParentalConsentManager }).enabled;
};
