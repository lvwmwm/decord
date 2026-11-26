// Module ID: 8398
// Function ID: 8399
// Name: GoogleWalletExperiment
// Dependencies: [1452, 2]
// Exports: isGoogleWalletEnabled, useIsGoogleWalletEnabled

// Module 8398 (GoogleWalletExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-03-age-verification-google-wallet", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/GoogleWalletExperiment.tsx");

export function useIsGoogleWalletEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
export function isGoogleWalletEnabled(age_verification_methods) {
  const obj = { location: age_verification_methods };
  return closure_0.getConfig(obj).enabled;
}
