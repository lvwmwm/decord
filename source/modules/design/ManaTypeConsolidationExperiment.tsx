// Module ID: 13369
// Function ID: 101630
// Name: apexExperiment
// Dependencies: []
// Exports: useManaTypeConsolidationExperiment

// Module 13369 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "Array", 0: "isArray", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(RootThemeContextProvider) {
  return apexExperiment.useConfig({ location: RootThemeContextProvider }).enabled;
};
