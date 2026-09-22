// Module ID: 7689
// Function ID: 7690
// Name: LayerActionCreators
// Dependencies: [573, 2]
// Exports: popAllLayers, popLayer, pushLayer

// Module 7689 (LayerActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
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
