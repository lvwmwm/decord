// Module ID: 9035
// Function ID: 9036
// Name: OrbRedemptionOrdersExperiment
// Dependencies: [1452, 2]

// Module 9035 (OrbRedemptionOrdersExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-12-orb-redemption-thru-orders", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/experiments/OrbRedemptionOrdersExperiment.tsx");

export default apexExperiment;
