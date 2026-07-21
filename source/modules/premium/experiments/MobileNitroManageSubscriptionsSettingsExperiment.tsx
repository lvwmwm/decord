// Module ID: 7415
// Function ID: 59596
// Name: apexExperiment
// Dependencies: []
// Exports: getMobileNitroManageSubscriptionsSettingsExperiment, useMobileNitroManageSubscriptionsSettingsExperiment

// Module 7415 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "<string:296327975>", 0: "/assets/modules/premium/native/images/perks", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
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
