// Module ID: 12535
// Function ID: 96307
// Name: PremiumRewardsOrbsTreatment
// Dependencies: []
// Exports: getPremiumRewardsOrbsExperiment, usePremiumRewardsOrbsExperiment

// Module 12535 (PremiumRewardsOrbsTreatment)
let obj = { CONTROL: "control", TREATMENT_A: "treatment_a", TREATMENT_B: "treatment_b", TREATMENT_C: "treatment_c", TREATMENT_D: "treatment_d" };
let closure_1 = { [obj.CONTROL]: 0, [obj.TREATMENT_A]: 250, [obj.TREATMENT_B]: 500, [obj.TREATMENT_C]: 250, [obj.TREATMENT_D]: 500 };
obj = { treatment: obj.CONTROL };
obj = { treatment: obj.CONTROL };
const tmp2 = importDefault(dependencyMap[0])({ defaultConfig: obj, variations: { [0]: obj, [1]: { treatment: obj.TREATMENT_A }, [2]: { treatment: obj.TREATMENT_B }, [3]: { treatment: obj.TREATMENT_C }, [4]: { treatment: obj.TREATMENT_D } } });
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx");

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
  obj.orbsRewardAmount = closure_1[CONTROL];
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
  obj.orbsRewardAmount = closure_1[CONTROL];
  return obj;
};
