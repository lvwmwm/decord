// Module ID: 8252
// Function ID: 65123
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useIsProfileFramesEnabled

// Module 8252 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-collectibles-profile-frames", kind: "user", defaultConfig: { enableProfileFrames: false }, variations: { [0]: { enableProfileFrames: false }, [1]: { enableProfileFrames: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};
