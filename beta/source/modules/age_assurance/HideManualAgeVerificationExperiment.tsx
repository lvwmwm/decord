// Module ID: 8890
// Function ID: 8891
// Name: HideManualAgeVerificationExperiment
// Dependencies: [1438, 558, 568, 2]
// Exports: isManualAgeVerificationHidden

// Module 8890 (HideManualAgeVerificationExperiment)
import c from "c" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2025-11-hide-manual-link", defaultConfig: { isHidden: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { isHidden: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/HideManualAgeVerificationExperiment.tsx");

export const useIsManualAgeVerificationHidden = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).isHidden;
}) : ((location) => closure_2.useConfig({ location }).isHidden);
export const isManualAgeVerificationHidden = function isManualAgeVerificationHidden(location) {
  return closure_2.getConfig({ location }).isHidden;
};
