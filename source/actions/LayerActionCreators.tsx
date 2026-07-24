// Module ID: 6821
// Function ID: 53814
// Name: pushLayer
// Dependencies: [686, 2]
// Exports: popAllLayers, popLayer, pushLayer

// Module 6821 (pushLayer)
const result = require("set").fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  let obj = importDefault(686);
  obj = { type: "LAYER_PUSH", component };
  obj.dispatch(obj);
};
export const popLayer = function popLayer() {
  importDefault(686).dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  importDefault(686).dispatch({ type: "LAYER_POP_ALL" });
};
