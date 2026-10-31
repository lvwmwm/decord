// Module ID: 8169
// Function ID: 8170
// Name: ManualReviewInconclusiveCopyExperiment
// Dependencies: [1447, 2]
// Exports: useIsManualReviewInconclusiveCopyEnabled

// Module 8169 (ManualReviewInconclusiveCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-09-manual-review-inconclusive-copy", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/ManualReviewInconclusiveCopyExperiment.tsx");

export function useIsManualReviewInconclusiveCopyEnabled(manual_review_decided_teen_modal) {
  const obj = { location: manual_review_decided_teen_modal };
  return closure_0.useConfig(obj).enabled;
}
