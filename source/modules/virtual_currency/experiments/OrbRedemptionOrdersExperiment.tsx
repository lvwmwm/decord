// Module ID: 8656
// Function ID: 68775
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 8656 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-12-orb-redemption-thru-orders", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/virtual_currency/experiments/OrbRedemptionOrdersExperiment.tsx");

export default apexExperiment;
