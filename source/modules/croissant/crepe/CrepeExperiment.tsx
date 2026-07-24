// Module ID: 6788
// Function ID: 53613
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getIsCrepeEnabled, useIsCrepeEnabled

// Module 6788 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-crepe", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/croissant/crepe/CrepeExperiment.tsx");

export default apexExperiment;
export const useIsCrepeEnabled = function useIsCrepeEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsCrepeEnabled = function getIsCrepeEnabled(canUseMonthlyOrbs) {
  return apexExperiment.getConfig({ location: canUseMonthlyOrbs }).enabled;
};
