// Module ID: 12936
// Function ID: 12937
// Name: MobileNitroManageSubscriptionsSettingsExperiment
// Dependencies: [1435, 2]
// Exports: getMobileNitroManageSubscriptionsSettingsExperiment, useMobileNitroManageSubscriptionsSettingsExperiment

// Module 12936 (MobileNitroManageSubscriptionsSettingsExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-macaron", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx");

export default apexExperiment;
export const useMobileNitroManageSubscriptionsSettingsExperiment = function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj).enabled;
};
export const getMobileNitroManageSubscriptionsSettingsExperiment = function getMobileNitroManageSubscriptionsSettingsExperiment(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj).enabled;
};
