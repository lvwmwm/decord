// Module ID: 1615
// Function ID: 1616
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65]

// Module 1615 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNCSafeAreaProvider", directEventTypes: { topInsetsChange: { registrationName: "onInsetsChange" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onInsetsChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNCSafeAreaProvider", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
