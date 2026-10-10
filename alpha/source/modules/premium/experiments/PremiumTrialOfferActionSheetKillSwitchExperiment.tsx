// Module ID: 17672
// Function ID: 17673
// Name: PremiumTrialOfferActionSheetKillSwitchExperiment
// Dependencies: [1453, 2]

// Module 17672 (PremiumTrialOfferActionSheetKillSwitchExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-09-premium-trial-offer-action-sheet-ks", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx");

export const PremiumTrialOfferActionSheetKillSwitchExperiment = apexExperiment;
