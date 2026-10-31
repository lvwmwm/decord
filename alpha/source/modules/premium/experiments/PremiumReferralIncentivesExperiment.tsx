// Module ID: 15319
// Function ID: 15320
// Name: PremiumReferralIncentivesExperiment
// Dependencies: [1447, 2]
// Exports: usePremiumReferralIncentivesVariant

// Module 15319 (PremiumReferralIncentivesExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { ORBS: "orbs", DISCOUNT: "discount" };
const obj2 = { name: "2026-07-premium-referral-incentives", kind: "user", defaultConfig: { referralRewardType: null, useAltReferralCardArt: false }, variations: obj3 };
obj3 = { 0: { referralRewardType: null, useAltReferralCardArt: false }, 1: { referralRewardType: obj.ORBS, useAltReferralCardArt: false }, 2: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: false }, 3: { referralRewardType: obj.ORBS, useAltReferralCardArt: true }, 4: { referralRewardType: obj.DISCOUNT, useAltReferralCardArt: true } };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumReferralIncentivesExperiment.tsx");

export default apexExperiment;
export const ReferralRewardType = obj;
export function usePremiumReferralIncentivesVariant(_location) {
  const obj = { location: _location };
  const config = apexExperiment.useConfig(obj);
  return { referralRewardType: config.referralRewardType, useAltReferralCardArt: config.useAltReferralCardArt, isInReferralIncentivesTreatment: null != config.referralRewardType };
}
