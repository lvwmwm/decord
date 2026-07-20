// Module ID: 13362
// Function ID: 101607
// Name: apexExperiment
// Dependencies: []
// Exports: useManaTypeConsolidationExperiment

// Module 13362 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "paths", -1845285747: "Array", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(RootThemeContextProvider) {
  return apexExperiment.useConfig({ location: RootThemeContextProvider }).enabled;
};
