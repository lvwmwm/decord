// Module ID: 9290
// Function ID: 9291
// Name: GameProfileMobileReviewsExperiment
// Dependencies: [1455, 558, 576, 2]

// Module 9290 (GameProfileMobileReviewsExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { enabled: false };
let obj2 = { name: "2026-10-game-profile-mobile-reviews", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj2);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGameProfileMobileReviewsEnabled(location) {
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
}) : (function useIsGameProfileMobileReviewsEnabled(location) {
  const obj = { location: location.location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/game_profile/experiments/GameProfileMobileReviewsExperiment.tsx");

export const useIsGameProfileMobileReviewsEnabled = tmp2;
