// Module ID: 4534
// Function ID: 39816
// Name: useVisualEffectViewOverrides
// Dependencies: [621, 682, 2]
// Exports: clearVisualEffectViewOverrides, getVisualEffectViewOverrides, setVisualEffectViewOverides, useVisualEffectViewOverrides

// Module 4534 (useVisualEffectViewOverrides)
import keys from "keys";

let closure_2 = {};
let closure_3 = keys.create(() => closure_2);
const result = require("set").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export const useVisualEffectViewOverrides = function useVisualEffectViewOverrides() {
  return state();
};
export const getVisualEffectViewOverrides = function getVisualEffectViewOverrides() {
  return state.getState();
};
export const setVisualEffectViewOverides = function setVisualEffectViewOverides(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_3.setState(closure_0));
};
export const clearVisualEffectViewOverrides = function clearVisualEffectViewOverrides() {
  require(682) /* batchUpdates */.batchUpdates(() => outer1_3.setState(outer1_2));
};
