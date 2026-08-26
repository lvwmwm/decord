// Module ID: 4505
// Function ID: 4506
// Name: isClipsEnabled
// Dependencies: [4501, 4506, 589, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 4505 (isClipsEnabled)
import apexExperiment from "apexExperiment" /* 4506 */;
import closure_2 from "_migrateDefaultStorage" /* 4501 */;

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
