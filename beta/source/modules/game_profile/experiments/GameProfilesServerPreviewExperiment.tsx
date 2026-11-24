// Module ID: 15199
// Function ID: 15200
// Name: GameProfilesServerPreviewExperiment
// Dependencies: [1450, 2]
// Exports: useIsGameProfilesServerPreviewEnabled

// Module 15199 (GameProfilesServerPreviewExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { enabled: false };
const obj2 = { name: "2026-10-game-profiles-server-preview", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/game_profile/experiments/GameProfilesServerPreviewExperiment.tsx");

export function useIsGameProfilesServerPreviewEnabled(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
