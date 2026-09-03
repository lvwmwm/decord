// Module ID: 7349
// Function ID: 7350
// Name: apexExperiment
// Dependencies: [1467, 2]
// Exports: getIsFamilyCenterV3Enabled, useIsFamilyCenterV3Enabled

// Module 7349 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-family-center-v3", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/parent_tools/FamilyCenterV3Experiment.tsx");

export default apexExperiment;
export const getIsFamilyCenterV3Enabled = function getIsFamilyCenterV3Enabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const useIsFamilyCenterV3Enabled = function useIsFamilyCenterV3Enabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
