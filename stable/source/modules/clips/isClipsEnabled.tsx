// Module ID: 13764
// Function ID: 13765
// Name: isClipsEnabled
// Dependencies: [1914, 13765, 504, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 13764 (isClipsEnabled)
import ClipsExperiment from "ClipsExperiment" /* 13765 */;
import ClipsStore from "ClipsStore" /* 1914 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = ClipsExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = ClipsStore.getState().clipsSettings.clipsEnabled;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = ClipsExperiment.useIsClipsAvailable();
  const items = [ClipsStore];
  if (isClipsAvailable) {
    isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
  }
  return isClipsAvailable;
};
