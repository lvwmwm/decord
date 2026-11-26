// Module ID: 11617
// Function ID: 11618
// Name: MobileOrbRedemptionOrdersExperiment
// Dependencies: [1451, 2]

// Module 11617 (MobileOrbRedemptionOrdersExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-mobile-orb-redemption-thru-orders", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/MobileOrbRedemptionOrdersExperiment.tsx");

export default apexExperiment;
