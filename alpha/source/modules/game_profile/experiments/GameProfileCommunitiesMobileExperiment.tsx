// Module ID: 14718
// Function ID: 14719
// Name: GameProfileCommunitiesMobileExperiment
// Dependencies: [1447, 2]
// Exports: useIsGameProfileCommunitiesMobileEnabled

// Module 14718 (GameProfileCommunitiesMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { enabled: false };
const obj2 = { name: "2026-10-game-profiles-v3-communities-tab-mobile", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/game_profile/experiments/GameProfileCommunitiesMobileExperiment.tsx");

export function useIsGameProfileCommunitiesMobileEnabled(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
