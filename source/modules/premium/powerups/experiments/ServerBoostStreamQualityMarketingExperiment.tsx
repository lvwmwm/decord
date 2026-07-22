// Module ID: 12409
// Function ID: 94841
// Name: CONTROL_RESOLUTION
// Dependencies: []
// Exports: getServerBoostStreamQualityMarketingResolution

// Module 12409 (CONTROL_RESOLUTION)
const obj = { y: false, DateToSystemTimezoneSetter: false, defaultConfig: { streamQualityMarketingResolution: "1080p" }, variations: { [1]: { streamQualityMarketingResolution: "1440p" } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx");

export default tmp2;
export const CONTROL_RESOLUTION = "1080p";
export const getServerBoostStreamQualityMarketingResolution = function getServerBoostStreamQualityMarketingResolution(GuildBoostingMarketingTierCards) {
  return tmp2.getConfig({ location: GuildBoostingMarketingTierCards }).streamQualityMarketingResolution;
};
