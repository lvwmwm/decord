// Module ID: 16621
// Function ID: 16622
// Name: isNativeAppStoreAgeSignalsEnabled
// Dependencies: [1471, 2]
// Exports: isNativeAppStoreAgeSignalsEnabled

// Module 16621 (isNativeAppStoreAgeSignalsEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-native-app-store-age-signals", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/age_assurance/native/NativeAppStoreAgeSignalsExperiment.tsx");

export const isNativeAppStoreAgeSignalsEnabled = function isNativeAppStoreAgeSignalsEnabled(ParentalConsentManager) {
  return config.getConfig({ location: ParentalConsentManager }).enabled;
};
