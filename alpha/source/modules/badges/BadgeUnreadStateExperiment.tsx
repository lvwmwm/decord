// Module ID: 11644
// Function ID: 11645
// Name: BadgeUnreadStateExperiment
// Dependencies: [1449, 2]
// Exports: useIsBadgeUnreadStateEnabled

// Module 11644 (BadgeUnreadStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-badges-unread-state", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeUnreadStateExperiment.tsx");

export function useIsBadgeUnreadStateEnabled(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
