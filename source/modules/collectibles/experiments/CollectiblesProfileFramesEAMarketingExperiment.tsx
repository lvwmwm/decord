// Module ID: 15688
// Function ID: 121043
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getIsProfileFramesEAMarketingEnabled, useIsProfileFramesEAMarketingEnabled

// Module 15688 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-profile-frames-ea-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesEAMarketingExperiment.tsx");

export default apexExperiment;
export const getIsProfileFramesEAMarketingEnabled = function getIsProfileFramesEAMarketingEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
export const useIsProfileFramesEAMarketingEnabled = function useIsProfileFramesEAMarketingEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
