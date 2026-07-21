// Module ID: 8732
// Function ID: 69075
// Name: apexExperiment
// Dependencies: []
// Exports: useAndroidShopOrdersEnabled

// Module 8732 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: "BILLING_IP_LOCATION_FETCH_ERROR", 1387159956: "<string:2659074560>", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/billing/experiments/AndroidShopOrdersExperiment.tsx");

export default apexExperiment;
export const useAndroidShopOrdersEnabled = function useAndroidShopOrdersEnabled(location) {
  return apexExperiment.useConfig(location).enabled;
};
