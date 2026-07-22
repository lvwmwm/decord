// Module ID: 7416
// Function ID: 59619
// Name: apexExperiment
// Dependencies: []
// Exports: getMobileNitroManageSubscriptionsSettingsExperiment, useMobileNitroManageSubscriptionsSettingsExperiment

// Module 7416 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: -7827869909676475000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, DateToSystemTimezoneSetter: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000035595744996881006, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx");

export default apexExperiment;
export const useMobileNitroManageSubscriptionsSettingsExperiment = function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
export const getMobileNitroManageSubscriptionsSettingsExperiment = function getMobileNitroManageSubscriptionsSettingsExperiment(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
