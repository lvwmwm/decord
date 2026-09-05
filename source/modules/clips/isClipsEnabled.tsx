// Module ID: 13674
// Function ID: 13675
// Name: isClipsEnabled
// Dependencies: [1914, 13675, 504, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 13674 (isClipsEnabled)
import apexExperiment from "apexExperiment" /* 13675 */;
import closure_2 from "_migrateDefaultStorage" /* 1914 */;

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
