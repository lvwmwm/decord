// Module ID: 6823
// Function ID: 53784
// Name: apexExperiment
// Dependencies: []
// Exports: getIsFamilyCenterV3Enabled, useIsFamilyCenterV3Enabled

// Module 6823 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/parent_tools/FamilyCenterV3Experiment.tsx");

export default apexExperiment;
export const getIsFamilyCenterV3Enabled = function getIsFamilyCenterV3Enabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const useIsFamilyCenterV3Enabled = function useIsFamilyCenterV3Enabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
