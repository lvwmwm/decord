// Module ID: 13274
// Function ID: 13275
// Name: PremiumRewardsOrbsExperiment
// Dependencies: [1436, 2]
// Exports: getPremiumRewardsOrbsExperiment, usePremiumRewardsOrbsExperiment

// Module 13274 (PremiumRewardsOrbsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj3;
const PremiumRewardsOrbsTreatment = { CONTROL: "control", TREATMENT_A: "treatment_a", TREATMENT_B: "treatment_b", TREATMENT_C: "treatment_c", TREATMENT_D: "treatment_d" };
let closure_1 = { [PremiumRewardsOrbsTreatment.CONTROL]: 0, [PremiumRewardsOrbsTreatment.TREATMENT_A]: 250, [PremiumRewardsOrbsTreatment.TREATMENT_B]: 500, [PremiumRewardsOrbsTreatment.TREATMENT_C]: 250, [PremiumRewardsOrbsTreatment.TREATMENT_D]: 500 };
const obj2 = { name: "2025-12-nitro-s-rewards", kind: "user", defaultConfig: { treatment: PremiumRewardsOrbsTreatment.CONTROL }, variations: obj3 };
obj3 = { 0: { treatment: PremiumRewardsOrbsTreatment.CONTROL }, 1: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_A }, 2: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_B }, 3: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_C }, 4: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_D } };
const tmp2 = apex_ApexExperimentDefault(obj2);
let closure_2 = tmp2;
const result = size.fileFinishedImporting("modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx");

export default tmp2;
export { PremiumRewardsOrbsTreatment };
export const usePremiumRewardsOrbsExperiment = function usePremiumRewardsOrbsExperiment(ProgramRewardsUtils) {
  const obj = { location: ProgramRewardsUtils };
  let CONTROL = closure_2.useConfig(obj).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  return { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: closure_1[CONTROL] };
};
export const getPremiumRewardsOrbsExperiment = function getPremiumRewardsOrbsExperiment(ProgramRewardsUtils) {
  const obj = { location: ProgramRewardsUtils };
  let CONTROL = closure_2.getConfig(obj).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  return { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: closure_1[CONTROL] };
};
