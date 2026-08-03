// Module ID: 6950
// Function ID: 6951
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: getIsFamilyCenterV3Enabled, useIsFamilyCenterV3Enabled

// Module 6950 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-family-center-v3", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterV3Experiment.tsx");

export default apexExperiment;
export const getIsFamilyCenterV3Enabled = function getIsFamilyCenterV3Enabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const useIsFamilyCenterV3Enabled = function useIsFamilyCenterV3Enabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
