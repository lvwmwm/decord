// Module ID: 13308
// Function ID: 13309
// Name: getMobileNitroMarketingRedesignExperiment
// Dependencies: [1433, 2]
// Exports: getMobileNitroMarketingRedesignExperiment

// Module 13308 (getMobileNitroMarketingRedesignExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-nitro-visual-ux", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingExperiment.tsx");

export const getMobileNitroMarketingRedesignExperiment = function getMobileNitroMarketingRedesignExperiment(location) {
  return config.getConfig({ location: location.location }).enabled;
};
