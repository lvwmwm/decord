// Module ID: 13378
// Function ID: 101685
// Name: apexExperiment
// Dependencies: []
// Exports: useManaTypeConsolidationExperiment

// Module 13378 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(RootThemeContextProvider) {
  return apexExperiment.useConfig({ location: RootThemeContextProvider }).enabled;
};
