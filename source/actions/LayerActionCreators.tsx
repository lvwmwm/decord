// Module ID: 7520
// Function ID: 7521
// Name: pushLayer
// Dependencies: [706, 2]
// Exports: popAllLayers, popLayer, pushLayer

// Module 7520 (pushLayer)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  let obj = dispatcherDefault;
  obj = { type: "LAYER_PUSH", component };
  obj.dispatch(obj);
};
export const popLayer = function popLayer() {
  dispatcherDefault.dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  dispatcherDefault.dispatch({ type: "LAYER_POP_ALL" });
};
