// Module ID: 1619
// Function ID: 1620
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 1619 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "RNCSafeAreaView", validAttributes: { mode: true, edges: true } };

export default setRuntimeConfigProvider.get("RNCSafeAreaView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
