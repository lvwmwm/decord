// Module ID: 12800
// Function ID: 12801
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 12800 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-nitro-floating-subscribe", kind: "user", defaultConfig: { enabled: false, showAfterLastCard: false }, variations: { 0: { enabled: false, showAfterLastCard: false }, 1: { enabled: true, showAfterLastCard: false }, 2: { enabled: true, showAfterLastCard: true } } });
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx");

export default apexExperiment;
