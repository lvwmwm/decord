// Module ID: 15443
// Function ID: 15444
// Name: isClipsEnabled
// Dependencies: [2141, 15444, 504, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 15443 (isClipsEnabled)
import get_initialized from "get initialized" /* 504 */;
import ClipsExperiment from "ClipsExperiment" /* 15444 */;
import ClipsStore from "ClipsStore" /* 2141 */;
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
