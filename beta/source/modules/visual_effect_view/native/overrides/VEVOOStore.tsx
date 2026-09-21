// Module ID: 5177
// Function ID: 5178
// Name: VEVOOStore
// Dependencies: [562, 558, 1252, 2]
// Exports: clearVisualEffectViewOverrides, getVisualEffectViewOverrides, setVisualEffectViewOverides, useVisualEffectViewOverrides

// Module 5177 (VEVOOStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1252 */;
import module_562 from "module_562" /* 562 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = {};
const state = module_562.create(() => closure_2);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export const useVisualEffectViewOverrides = () => state();
export const getVisualEffectViewOverrides = function getVisualEffectViewOverrides() {
  return state.getState();
};
export const setVisualEffectViewOverides = function setVisualEffectViewOverides(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => state.setState(closure_0));
};
export const clearVisualEffectViewOverrides = function clearVisualEffectViewOverrides() {
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_2));
};
