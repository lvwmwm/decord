// Module ID: 15681
// Function ID: 120889
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 15681 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-09-premium-trial-offer-action-sheet-ks", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx");

export const PremiumTrialOfferActionSheetKillSwitchExperiment = apexExperiment;
