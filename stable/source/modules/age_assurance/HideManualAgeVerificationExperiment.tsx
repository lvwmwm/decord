// Module ID: 8039
// Function ID: 8040
// Name: HideManualAgeVerificationExperiment
// Dependencies: [1441, 558, 576, 2]
// Exports: isManualAgeVerificationHidden

// Module 8039 (HideManualAgeVerificationExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2025-11-hide-manual-link", defaultConfig: { isHidden: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { isHidden: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
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
  return closure_2.useConfig(tmp2).isHidden;
}) : ((location) => {
  const obj = { location };
  return closure_2.useConfig(obj).isHidden;
});
const result = size.fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = tmp2;
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  const obj = { location };
  return closure_2.getConfig(obj).isHidden;
};
