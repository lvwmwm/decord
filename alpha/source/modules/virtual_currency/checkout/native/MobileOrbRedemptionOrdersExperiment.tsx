// Module ID: 14152
// Function ID: 14153
// Name: MobileOrbRedemptionOrdersExperiment
// Dependencies: [1452, 2]

// Module 14152 (MobileOrbRedemptionOrdersExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-mobile-orb-redemption-thru-orders", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/MobileOrbRedemptionOrdersExperiment.tsx");

export default apexExperiment;
