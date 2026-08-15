// Module ID: 15628
// Function ID: 15629
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: getIsYouBarGuildTagEnabled, useIsYouBarGuildTagEnabled

// Module 15628 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-you-bar-guild-tag", kind: "user", defaultConfig: { showGuildTag: false }, variations: { 0: { showGuildTag: false }, 1: { showGuildTag: true } } });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarGuildTagExperiment.tsx");

export default apexExperiment;
export const useIsYouBarGuildTagEnabled = function useIsYouBarGuildTagEnabled(YouBar) {
  return apexExperiment.useConfig({ location: YouBar }).showGuildTag;
};
export const getIsYouBarGuildTagEnabled = function getIsYouBarGuildTagEnabled(location) {
  return apexExperiment.getConfig({ location }).showGuildTag;
};
