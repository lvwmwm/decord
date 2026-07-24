// Module ID: 12401
// Function ID: 96412
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getMobileNitroManageSubscriptionsSettingsExperiment, useMobileNitroManageSubscriptionsSettingsExperiment

// Module 12401 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-macaron", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx");

export default apexExperiment;
export const useMobileNitroManageSubscriptionsSettingsExperiment = function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
export const getMobileNitroManageSubscriptionsSettingsExperiment = function getMobileNitroManageSubscriptionsSettingsExperiment(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
