// Module ID: 8583
// Function ID: 8584
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 8583 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGFeFlood", validAttributes: { x: true, y: true, width: true, height: true, result: true, floodColor: true, floodOpacity: true } };

export default setRuntimeConfigProvider.get("RNSVGFeFlood", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
