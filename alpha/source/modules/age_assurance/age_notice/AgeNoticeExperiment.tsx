// Module ID: 6331
// Function ID: 6332
// Name: AgeNoticeExperiment
// Dependencies: [1452, 2]
// Exports: isAgeNoticeEnabled, useIsAgeNoticeEnabled

// Module 6331 (AgeNoticeExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
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
