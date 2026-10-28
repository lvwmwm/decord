// Module ID: 16077
// Function ID: 16078
// Name: CollectiblesMarketingCacheExperiment
// Dependencies: [1452, 2]
// Exports: getCollectiblesMarketingCacheTTL

// Module 16077 (CollectiblesMarketingCacheExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-collectibles-marketing-client-cache", kind: "user", defaultConfig: { ttlMs: null }, variations: { 0: { ttlMs: null }, 1: { ttlMs: 3600000 }, 2: { ttlMs: 10800000 }, 3: { ttlMs: 21600000 }, 4: { ttlMs: 86400000 } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesMarketingCacheExperiment.tsx");

export const getCollectiblesMarketingCacheTTL = function getCollectiblesMarketingCacheTTL(CollectiblesMarketingManager) {
  const obj = { location: CollectiblesMarketingManager };
  return config.getConfig(obj).ttlMs;
};
