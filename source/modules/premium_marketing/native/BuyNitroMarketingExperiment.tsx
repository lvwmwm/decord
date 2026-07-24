// Module ID: 7377
// Function ID: 59515
// Name: getMobileNitroMarketingRedesignExperiment
// Dependencies: [1428, 2]
// Exports: getMobileNitroMarketingRedesignExperiment

// Module 7377 (getMobileNitroMarketingRedesignExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-nitro-visual-ux", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingExperiment.tsx");

export const getMobileNitroMarketingRedesignExperiment = function getMobileNitroMarketingRedesignExperiment(location) {
  return config.getConfig({ location: location.location }).enabled;
};
