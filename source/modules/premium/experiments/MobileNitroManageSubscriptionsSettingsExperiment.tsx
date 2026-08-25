// Module ID: 12892
// Function ID: 12893
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: getMobileNitroManageSubscriptionsSettingsExperiment, useMobileNitroManageSubscriptionsSettingsExperiment

// Module 12892 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-macaron", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx");

export default apexExperiment;
export const useMobileNitroManageSubscriptionsSettingsExperiment = function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
export const getMobileNitroManageSubscriptionsSettingsExperiment = function getMobileNitroManageSubscriptionsSettingsExperiment(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
