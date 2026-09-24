// Module ID: 7865
// Function ID: 7866
// Name: LayerActionCreators
// Dependencies: [577, 2]
// Exports: popAllLayers, popLayer, pushLayer

// Module 7865 (LayerActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  DispatcherDefault.dispatch({ type: "LAYER_PUSH", component });
};
export const popLayer = function popLayer() {
  DispatcherDefault.dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  DispatcherDefault.dispatch({ type: "LAYER_POP_ALL" });
};
