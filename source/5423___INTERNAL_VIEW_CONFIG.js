// Module ID: 5423
// Function ID: 5424
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 5423 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNGestureHandlerRootView", validAttributes: { unstable_forceActive: true } };

export default setRuntimeConfigProvider.get("RNGestureHandlerRootView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
