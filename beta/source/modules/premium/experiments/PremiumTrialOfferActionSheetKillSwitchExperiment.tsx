// Module ID: 19462
// Function ID: 19463
// Name: PremiumTrialOfferActionSheetKillSwitchExperiment
// Dependencies: [1449, 2]

// Module 19462 (PremiumTrialOfferActionSheetKillSwitchExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-09-premium-trial-offer-action-sheet-ks", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx");

export const PremiumTrialOfferActionSheetKillSwitchExperiment = apexExperiment;
