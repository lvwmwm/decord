// Module ID: 7696
// Function ID: 7697
// Name: ManualReviewInconclusiveCopyExperiment
// Dependencies: [1453, 558, 576, 2]

// Module 7696 (ManualReviewInconclusiveCopyExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-09-manual-review-inconclusive-copy", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsManualReviewInconclusiveCopyEnabled(location) {
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
}) : (function useIsManualReviewInconclusiveCopyEnabled(location) {
  const obj = { location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/age_assurance/ManualReviewInconclusiveCopyExperiment.tsx");

export const useIsManualReviewInconclusiveCopyEnabled = tmp2;
