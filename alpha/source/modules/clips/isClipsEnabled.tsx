// Module ID: 13947
// Function ID: 13948
// Name: isClipsEnabled
// Dependencies: [1998, 13948, 504, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 13947 (isClipsEnabled)
import ClipsExperiment from "ClipsExperiment" /* 13948 */;
import ClipsStore from "ClipsStore" /* 1998 */;

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
