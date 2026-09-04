// Module ID: 4542
// Function ID: 4543
// Name: isClipsEnabled
// Dependencies: [4538, 4543, 586, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 4542 (isClipsEnabled)
import apexExperiment from "apexExperiment" /* 4543 */;
import closure_2 from "_migrateDefaultStorage" /* 4538 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = apexExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = state.getState().clipsSettings.clipsEnabled;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = apexExperiment.useIsClipsAvailable();
  const obj = apexExperiment;
  const items = [closure_2];
  if (isClipsAvailable) {
    isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
  }
  return isClipsAvailable;
};
