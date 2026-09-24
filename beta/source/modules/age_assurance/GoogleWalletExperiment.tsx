// Module ID: 8897
// Function ID: 8898
// Name: GoogleWalletExperiment
// Dependencies: [1438, 558, 568, 2]
// Exports: isGoogleWalletEnabled

// Module 8897 (GoogleWalletExperiment)
import c from "c" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-03-age-verification-google-wallet", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/GoogleWalletExperiment.tsx");

export const useIsGoogleWalletEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : ((location) => closure_2.useConfig({ location }).enabled);
export const isGoogleWalletEnabled = function isGoogleWalletEnabled(age_verification_methods) {
  return closure_2.getConfig({ location: age_verification_methods }).enabled;
};
