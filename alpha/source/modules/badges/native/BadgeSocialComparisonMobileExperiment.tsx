// Module ID: 13684
// Function ID: 13685
// Name: BadgeSocialComparisonMobileExperiment
// Dependencies: [1450, 2]
// Exports: useBadgeSocialComparisonMobileEnabled

// Module 13684 (BadgeSocialComparisonMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-11-badge-social-comparison-mobile", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/native/BadgeSocialComparisonMobileExperiment.tsx");

export function useBadgeSocialComparisonMobileEnabled(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
