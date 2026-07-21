// Module ID: 8732
// Function ID: 69064
// Name: apexExperiment
// Dependencies: []
// Exports: useAndroidShopOrdersEnabled

// Module 8732 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/billing/experiments/AndroidShopOrdersExperiment.tsx");

export default apexExperiment;
export const useAndroidShopOrdersEnabled = function useAndroidShopOrdersEnabled(location) {
  return apexExperiment.useConfig(location).enabled;
};
