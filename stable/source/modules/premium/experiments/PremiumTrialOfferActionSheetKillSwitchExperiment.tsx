// Module ID: 17066
// Function ID: 17067
// Name: PremiumTrialOfferActionSheetKillSwitchExperiment
// Dependencies: [1433, 2]

// Module 17066 (PremiumTrialOfferActionSheetKillSwitchExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2025-09-premium-trial-offer-action-sheet-ks", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx");

export const PremiumTrialOfferActionSheetKillSwitchExperiment = apexExperiment;
