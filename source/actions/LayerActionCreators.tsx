// Module ID: 6817
// Function ID: 53773
// Name: pushLayer
// Dependencies: []
// Exports: popAllLayers, popLayer, pushLayer

// Module 6817 (pushLayer)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "LAYER_PUSH", component };
  obj.dispatch(obj);
};
export const popLayer = function popLayer() {
  importDefault(dependencyMap[0]).dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  importDefault(dependencyMap[0]).dispatch({ type: "LAYER_POP_ALL" });
};
