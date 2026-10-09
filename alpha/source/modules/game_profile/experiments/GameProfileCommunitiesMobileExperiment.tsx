// Module ID: 12960
// Function ID: 12961
// Name: GameProfileCommunitiesMobileExperiment
// Dependencies: [1453, 558, 576, 2]

// Module 12960 (GameProfileCommunitiesMobileExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { enabled: false };
let obj2 = { name: "2026-10-game-profiles-v3-communities-tab-mobile", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj2);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGameProfileCommunitiesMobileEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsGameProfileCommunitiesMobileEnabled(location) {
  const obj = { location: location.location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/game_profile/experiments/GameProfileCommunitiesMobileExperiment.tsx");

export const useIsGameProfileCommunitiesMobileEnabled = tmp2;
