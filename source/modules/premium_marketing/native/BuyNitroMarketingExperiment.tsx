// Module ID: 6453
// Function ID: 57934
// Name: getMobileNitroMarketingRedesignExperiment
// Dependencies: [1428, 2]
// Exports: getMobileNitroMarketingRedesignExperiment

// Module 6453 (getMobileNitroMarketingRedesignExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-nitro-visual-ux", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingExperiment.tsx");

export const getMobileNitroMarketingRedesignExperiment = function getMobileNitroMarketingRedesignExperiment(location) {
  return config.getConfig({ location: location.location }).enabled;
};
