// Module ID: 4530
// Function ID: 39784
// Name: useVisualEffectViewOverrides
// Dependencies: []
// Exports: clearVisualEffectViewOverrides, getVisualEffectViewOverrides, setVisualEffectViewOverides, useVisualEffectViewOverrides

// Module 4530 (useVisualEffectViewOverrides)
let closure_2 = {};
const _module = require(dependencyMap[0]);
let closure_3 = _module.create(() => closure_2);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export const useVisualEffectViewOverrides = function useVisualEffectViewOverrides() {
  return state();
};
export const getVisualEffectViewOverrides = function getVisualEffectViewOverrides() {
  return state.getState();
};
export const setVisualEffectViewOverides = function setVisualEffectViewOverides(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState(arg0));
};
export const clearVisualEffectViewOverrides = function clearVisualEffectViewOverrides() {
  require(dependencyMap[1]).batchUpdates(() => state.setState(closure_2));
};
