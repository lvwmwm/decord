// Module ID: 13543
// Function ID: 13544
// Name: isClipsEnabled
// Dependencies: [2018, 13544, 558, 576, 504, 2]
// Exports: isClipsEnabled

// Module 13543 (isClipsEnabled)
import react from "react" /* 576 */;
import ClipsExperiment from "ClipsExperiment" /* 13544 */;
import ClipsStore from "ClipsStore" /* 2018 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsClipsEnabled() {
  let state;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = ClipsExperiment;
  let isClipsAvailable = obj2.useIsClipsAvailable();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ClipsStore];
    const fn = function t() {
      return state.getState().clipsSettings.clipsEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  if (isClipsAvailable) {
    isClipsAvailable = tmpResult.useStateFromStores(tmp5, tmp6);
  }
  return isClipsAvailable;
}) : (function useIsClipsEnabled() {
  let state;
  const obj = ClipsExperiment;
  let isClipsAvailable = obj.useIsClipsAvailable();
  const items = [ClipsStore];
  const obj2 = get_initialized;
  if (isClipsAvailable) {
    isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
  }
  return isClipsAvailable;
});
const result = size.fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  const obj = ClipsExperiment;
  const clipsEnabled = obj.areClipsAvailable() && ClipsStore.getState().clipsSettings.clipsEnabled;
  return clipsEnabled;
};
export const useIsClipsEnabled = tmp2;
