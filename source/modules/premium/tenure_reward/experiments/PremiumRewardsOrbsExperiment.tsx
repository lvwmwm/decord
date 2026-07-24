// Module ID: 12705
// Function ID: 98812
// Name: PremiumRewardsOrbsTreatment
// Dependencies: [1325, 2]
// Exports: getPremiumRewardsOrbsExperiment, usePremiumRewardsOrbsExperiment

// Module 12705 (PremiumRewardsOrbsTreatment)
let obj = { CONTROL: "control", TREATMENT_A: "treatment_a", TREATMENT_B: "treatment_b", TREATMENT_C: "treatment_c", TREATMENT_D: "treatment_d" };
let closure_1 = { [obj.CONTROL]: 0, [obj.TREATMENT_A]: 250, [obj.TREATMENT_B]: 500, [obj.TREATMENT_C]: 250, [obj.TREATMENT_D]: 500 };
obj = { name: "2025-12-nitro-s-rewards", kind: "user" };
obj.defaultConfig = { treatment: obj.CONTROL };
obj = { treatment: obj.CONTROL };
obj.variations = { [0]: obj, [1]: { treatment: obj.TREATMENT_A }, [2]: { treatment: obj.TREATMENT_B }, [3]: { treatment: obj.TREATMENT_C }, [4]: { treatment: obj.TREATMENT_D } };
const tmp2 = require("getUnitId")(obj);
let closure_2 = tmp2;
const result = require("set").fileFinishedImporting("modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx");

export default tmp2;
export const PremiumRewardsOrbsTreatment = obj;
export const usePremiumRewardsOrbsExperiment = function usePremiumRewardsOrbsExperiment(location) {
  let obj = { location };
  let CONTROL = tmp2.useConfig(obj).treatment;
  if (null == CONTROL) {
    CONTROL = obj.CONTROL;
  }
  obj = { treatment: CONTROL };
  obj.isInTreatment = CONTROL !== obj.CONTROL;
  obj.orbsRewardAmount = dependencyMap[CONTROL];
  return obj;
};
export const getPremiumRewardsOrbsExperiment = function getPremiumRewardsOrbsExperiment(location) {
  let obj = { location };
  let CONTROL = tmp2.getConfig(obj).treatment;
  if (null == CONTROL) {
    CONTROL = obj.CONTROL;
  }
  obj = { treatment: CONTROL };
  obj.isInTreatment = CONTROL !== obj.CONTROL;
  obj.orbsRewardAmount = dependencyMap[CONTROL];
  return obj;
};
