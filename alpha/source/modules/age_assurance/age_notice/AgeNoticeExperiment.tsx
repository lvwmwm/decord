// Module ID: 6858
// Function ID: 6859
// Name: AgeNoticeExperiment
// Dependencies: [1449, 2]
// Exports: isTinyBroncoEnabled, useIsTinyBroncoEnabled

// Module 6858 (AgeNoticeExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/AgeNoticeExperiment.tsx");

export function useIsTinyBroncoEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
export function isTinyBroncoEnabled(location) {
  const obj = { location };
  return closure_0.getConfig(obj).enabled;
}
