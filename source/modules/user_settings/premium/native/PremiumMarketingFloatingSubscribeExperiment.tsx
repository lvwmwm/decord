// Module ID: 12473
// Function ID: 96609
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12473 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-nitro-floating-subscribe", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx");

export default apexExperiment;
