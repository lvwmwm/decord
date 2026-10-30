// Module ID: 11418
// Function ID: 11419
// Name: BadgeDirectoryUpdatesExperiment
// Dependencies: [1448, 2]
// Exports: useIsBadgeDetailsSwipeEnabled, useIsBadgeDirectoryUpdatesEnabled

// Module 11418 (BadgeDirectoryUpdatesExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-badge-directory-updates", kind: "user", defaultConfig: { enabled: false, swipeBetweenBadges: false }, variations: { 0: { enabled: false, swipeBetweenBadges: false }, 1: { enabled: true, swipeBetweenBadges: false }, 2: { enabled: true, swipeBetweenBadges: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryUpdatesExperiment.tsx");

export function useIsBadgeDirectoryUpdatesEnabled(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
export function useIsBadgeDetailsSwipeEnabled(location) {
  const obj = { location: location.location };
  const config = closure_0.useConfig(obj);
  return config.enabled && config.swipeBetweenBadges;
}
