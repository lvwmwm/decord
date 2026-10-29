// Module ID: 5624
// Function ID: 5625
// Name: VEVOOStore
// Dependencies: [570, 558, 1271, 2]
// Exports: clearVisualEffectViewOverrides, getVisualEffectViewOverrides, setVisualEffectViewOverides, useVisualEffectViewOverrides

// Module 5624 (VEVOOStore)
import react_native from "react-native" /* 1271 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_2 = {};
const state = module_570.create(() => closure_2);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export function useVisualEffectViewOverrides() {
  return state();
}
export function getVisualEffectViewOverrides() {
  return state.getState();
}
export function setVisualEffectViewOverides(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("react-native");
  obj.batchUpdates(() => state.setState(closure_0));
}
export function clearVisualEffectViewOverrides() {
  const obj = react_native;
  obj.batchUpdates(() => state.setState(closure_1_2));
}
