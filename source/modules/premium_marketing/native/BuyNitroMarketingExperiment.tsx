// Module ID: 13236
// Function ID: 13237
// Name: getMobileNitroMarketingRedesignExperiment
// Dependencies: [1468, 2]
// Exports: getMobileNitroMarketingRedesignExperiment

// Module 13236 (getMobileNitroMarketingRedesignExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-nitro-visual-ux", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingExperiment.tsx");

export const getMobileNitroMarketingRedesignExperiment = function getMobileNitroMarketingRedesignExperiment(location) {
  return config.getConfig({ location: location.location }).enabled;
};
