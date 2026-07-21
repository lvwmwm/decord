// Module ID: 12404
// Function ID: 94813
// Name: CONTROL_RESOLUTION
// Dependencies: []
// Exports: getServerBoostStreamQualityMarketingResolution

// Module 12404 (CONTROL_RESOLUTION)
const obj = { 844175713: false, 1387159956: false, defaultConfig: { streamQualityMarketingResolution: "1080p" }, variations: { [1]: { streamQualityMarketingResolution: "1440p" } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx");

export default tmp2;
export const CONTROL_RESOLUTION = "1080p";
export const getServerBoostStreamQualityMarketingResolution = function getServerBoostStreamQualityMarketingResolution(GuildBoostingMarketingTierCards) {
  return tmp2.getConfig({ location: GuildBoostingMarketingTierCards }).streamQualityMarketingResolution;
};
