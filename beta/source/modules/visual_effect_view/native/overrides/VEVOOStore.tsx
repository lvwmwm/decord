// Module ID: 5601
// Function ID: 5602
// Name: VEVOOStore
// Dependencies: [560, 1259, 2]
// Exports: clearVisualEffectViewOverrides, getVisualEffectViewOverrides, setVisualEffectViewOverides, useVisualEffectViewOverrides

// Module 5601 (VEVOOStore)
import react_native from "react-native" /* 1259 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_2 = {};
const state = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

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
