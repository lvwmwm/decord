// Module ID: 7753
// Function ID: 7754
// Name: LayerActionCreators
// Dependencies: [572, 2]
// Exports: popAllLayers, popLayer, pushLayer

// Module 7753 (LayerActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/LayerActionCreators.tsx");

export function pushLayer(component) {
  const obj = DispatcherDefault;
  const obj2 = { type: "LAYER_PUSH", component };
  obj.dispatch(obj2);
}
export function popLayer() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "LAYER_POP" });
}
export function popAllLayers() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "LAYER_POP_ALL" });
}
