// Module ID: 8993
// Function ID: 8994
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: useIsProfileFramesEnabled

// Module 8993 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-collectibles-profile-frames", kind: "user", defaultConfig: { enableProfileFrames: false }, variations: { 0: { enableProfileFrames: false }, 1: { enableProfileFrames: true } } });
const result = set.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};
