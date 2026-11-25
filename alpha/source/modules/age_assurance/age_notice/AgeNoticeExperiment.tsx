// Module ID: 6806
// Function ID: 6807
// Name: AgeNoticeExperiment
// Dependencies: [1450, 2]
// Exports: isAgeNoticeEnabled, useIsAgeNoticeEnabled

// Module 6806 (AgeNoticeExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/AgeNoticeExperiment.tsx");

export function useIsAgeNoticeEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
export function isAgeNoticeEnabled(location) {
  const obj = { location };
  return closure_0.getConfig(obj).enabled;
}
