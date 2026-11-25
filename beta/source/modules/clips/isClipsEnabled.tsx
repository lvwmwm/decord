// Module ID: 14888
// Function ID: 14889
// Name: isClipsEnabled
// Dependencies: [2138, 14564, 504, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 14888 (isClipsEnabled)
import get_initialized from "get initialized" /* 504 */;
import ClipsExperiment from "ClipsExperiment" /* 14564 */;
import ClipsStore from "ClipsStore" /* 2138 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export function isClipsEnabled() {
  const obj = ClipsExperiment;
  const clipsEnabled = obj.areClipsAvailable() && ClipsStore.getState().clipsSettings.clipsEnabled;
  return clipsEnabled;
}
export function useIsClipsEnabled() {
  let state;
  const obj = ClipsExperiment;
  let isClipsAvailable = obj.useIsClipsAvailable();
  const items = [ClipsStore];
  const obj2 = get_initialized;
  if (isClipsAvailable) {
    isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
  }
  return isClipsAvailable;
}
