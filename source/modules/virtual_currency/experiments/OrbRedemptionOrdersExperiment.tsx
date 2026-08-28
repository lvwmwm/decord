// Module ID: 11287
// Function ID: 11288
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 11287 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-12-orb-redemption-thru-orders", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/virtual_currency/experiments/OrbRedemptionOrdersExperiment.tsx");

export default apexExperiment;
