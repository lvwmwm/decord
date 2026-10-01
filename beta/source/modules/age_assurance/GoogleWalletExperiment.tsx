// Module ID: 8042
// Function ID: 8043
// Name: GoogleWalletExperiment
// Dependencies: [1435, 2]
// Exports: isGoogleWalletEnabled, useIsGoogleWalletEnabled

// Module 8042 (GoogleWalletExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-03-age-verification-google-wallet", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/GoogleWalletExperiment.tsx");

export const useIsGoogleWalletEnabled = function useIsGoogleWalletEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
};
export const isGoogleWalletEnabled = function isGoogleWalletEnabled(age_verification_methods) {
  const obj = { location: age_verification_methods };
  return closure_0.getConfig(obj).enabled;
};
