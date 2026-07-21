// Module ID: 13371
// Function ID: 101652
// Name: apexExperiment
// Dependencies: []
// Exports: useManaTypeConsolidationExperiment

// Module 13371 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: true, 1387159956: true, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(RootThemeContextProvider) {
  return apexExperiment.useConfig({ location: RootThemeContextProvider }).enabled;
};
