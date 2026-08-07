// Module ID: 7535
// Function ID: 7536
// Name: getMobileNitroMarketingRedesignExperiment
// Dependencies: [1452, 2]
// Exports: getMobileNitroMarketingRedesignExperiment

// Module 7535 (getMobileNitroMarketingRedesignExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-nitro-visual-ux", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingExperiment.tsx");

export const getMobileNitroMarketingRedesignExperiment = function getMobileNitroMarketingRedesignExperiment(location) {
  return config.getConfig({ location: location.location }).enabled;
};
