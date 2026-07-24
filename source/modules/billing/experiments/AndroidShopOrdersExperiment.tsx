// Module ID: 8779
// Function ID: 69343
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useAndroidShopOrdersEnabled

// Module 8779 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-android-shop-orders", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/billing/experiments/AndroidShopOrdersExperiment.tsx");

export default apexExperiment;
export const useAndroidShopOrdersEnabled = function useAndroidShopOrdersEnabled(location) {
  return apexExperiment.useConfig(location).enabled;
};
