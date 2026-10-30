// Module ID: 17106
// Function ID: 17107
// Name: BountiesAndroidQuestBarSmokeAnimationExperiment
// Dependencies: [1448, 2]
// Exports: useIsBountiesAndroidQuestBarSmokeAnimationEnabled

// Module 17106 (BountiesAndroidQuestBarSmokeAnimationExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-09-bounties-android-quest-bar-smoke-animation", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesAndroidQuestBarSmokeAnimationExperiment.tsx");

export const BountiesAndroidQuestBarSmokeAnimationExperiment = apexExperiment;
export function useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QUESTS_BAR_MOBILE) {
  const obj = { location: QUESTS_BAR_MOBILE };
  return apexExperiment.useConfig(obj).enabled;
}
