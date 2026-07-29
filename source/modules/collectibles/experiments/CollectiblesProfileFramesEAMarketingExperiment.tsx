// Module ID: 15775
// Function ID: 15776
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: getIsProfileFramesEAMarketingEnabled, useIsProfileFramesEAMarketingEnabled

// Module 15775 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-profile-frames-ea-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesEAMarketingExperiment.tsx");

export default apexExperiment;
export const getIsProfileFramesEAMarketingEnabled = function getIsProfileFramesEAMarketingEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
export const useIsProfileFramesEAMarketingEnabled = function useIsProfileFramesEAMarketingEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
