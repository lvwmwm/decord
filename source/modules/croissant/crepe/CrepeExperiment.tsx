// Module ID: 6936
// Function ID: 6937
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: getIsCrepeEnabled, useIsCrepeEnabled

// Module 6936 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-crepe", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/croissant/crepe/CrepeExperiment.tsx");

export default apexExperiment;
export const useIsCrepeEnabled = function useIsCrepeEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsCrepeEnabled = function getIsCrepeEnabled(canUseMonthlyOrbs) {
  return apexExperiment.getConfig({ location: canUseMonthlyOrbs }).enabled;
};
