// Module ID: 7700
// Function ID: 7701
// Name: AgeVerificationExpressiveModalEverywhereExperiment
// Dependencies: [1453, 558, 576, 2]
// Exports: isAgeVerificationExpressiveModalEverywhereEnabled

// Module 7700 (AgeVerificationExpressiveModalEverywhereExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2025-11-age-verification-expressive-everywhere", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsAgeVerificationExpressiveModalEverywhereEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsAgeVerificationExpressiveModalEverywhereEnabled(location) {
  const obj = { location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationExpressiveModalEverywhereExperiment.tsx");

export const useIsAgeVerificationExpressiveModalEverywhereEnabled = tmp2;
export const isAgeVerificationExpressiveModalEverywhereEnabled = function isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint) {
  const obj = { location: entryPoint };
  return closure_2.getConfig(obj).enabled;
};
