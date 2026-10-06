// Module ID: 13132
// Function ID: 13133
// Name: ServerBoostStreamQualityMarketingExperiment
// Dependencies: [1442, 2]
// Exports: getServerBoostStreamQualityMarketingResolution

// Module 13132 (ServerBoostStreamQualityMarketingExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1442 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-04-server-boost-copy-1440p", kind: "user", defaultConfig: { streamQualityMarketingResolution: "1080p" }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { streamQualityMarketingResolution: "1440p" };
const tmp2 = apex_ApexExperimentDefault(obj);
const config = tmp2;
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx");

export default tmp2;
export const CONTROL_RESOLUTION = "1080p";
export const getServerBoostStreamQualityMarketingResolution = function getServerBoostStreamQualityMarketingResolution(GuildBoostingMarketingTierCards) {
  const obj = { location: GuildBoostingMarketingTierCards };
  return config.getConfig(obj).streamQualityMarketingResolution;
};
