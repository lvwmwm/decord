// Module ID: 15696
// Function ID: 15697
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: getIsYouBarGuildTagEnabled, useIsYouBarGuildTagEnabled

// Module 15696 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-you-bar-guild-tag", kind: "user", defaultConfig: { showGuildTag: false }, variations: { 0: { showGuildTag: false }, 1: { showGuildTag: true } } });
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarGuildTagExperiment.tsx");

export default apexExperiment;
export const useIsYouBarGuildTagEnabled = function useIsYouBarGuildTagEnabled(YouBar) {
  return apexExperiment.useConfig({ location: YouBar }).showGuildTag;
};
export const getIsYouBarGuildTagEnabled = function getIsYouBarGuildTagEnabled(location) {
  return apexExperiment.getConfig({ location }).showGuildTag;
};
