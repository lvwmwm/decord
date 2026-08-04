// Module ID: 5384
// Function ID: 5385
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 5384 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNGestureHandlerRootView", validAttributes: { unstable_forceActive: true } };

export default setRuntimeConfigProvider.get("RNGestureHandlerRootView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
