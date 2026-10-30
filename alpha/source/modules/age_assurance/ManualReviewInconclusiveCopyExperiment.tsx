// Module ID: 8161
// Function ID: 8162
// Name: ManualReviewInconclusiveCopyExperiment
// Dependencies: [1448, 2]
// Exports: useIsManualReviewInconclusiveCopyEnabled

// Module 8161 (ManualReviewInconclusiveCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
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
