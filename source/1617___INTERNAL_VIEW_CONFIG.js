// Module ID: 1617
// Function ID: 1618
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 1617 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNCSafeAreaView", validAttributes: { mode: true, edges: true } };

export default setRuntimeConfigProvider.get("RNCSafeAreaView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
