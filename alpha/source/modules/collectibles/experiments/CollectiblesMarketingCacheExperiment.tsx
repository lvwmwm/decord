// Module ID: 15813
// Function ID: 15814
// Name: CollectiblesMarketingCacheExperiment
// Dependencies: [1455, 2]
// Exports: getCollectiblesMarketingCacheTTL

// Module 15813 (CollectiblesMarketingCacheExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-collectibles-marketing-client-cache", kind: "user", defaultConfig: { ttlMs: null }, variations: { 0: { ttlMs: null }, 1: { ttlMs: 3600000 }, 2: { ttlMs: 10800000 }, 3: { ttlMs: 21600000 }, 4: { ttlMs: 86400000 } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesMarketingCacheExperiment.tsx");

export const getCollectiblesMarketingCacheTTL = function getCollectiblesMarketingCacheTTL(CollectiblesMarketingManager) {
  const obj = { location: CollectiblesMarketingManager };
  return config.getConfig(obj).ttlMs;
};
