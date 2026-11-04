// Module ID: 11643
// Function ID: 11644
// Name: BadgeDirectoryUpdatesExperiment
// Dependencies: [1449, 2]
// Exports: useIsBadgeDirectoryUpdatesEnabled

// Module 11643 (BadgeDirectoryUpdatesExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-badge-directory-updates", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryUpdatesExperiment.tsx");

export function useIsBadgeDirectoryUpdatesEnabled(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
