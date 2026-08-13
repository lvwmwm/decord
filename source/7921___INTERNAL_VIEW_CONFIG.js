// Module ID: 7921
// Function ID: 7922
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 7921 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGFeColorMatrix", validAttributes: { x: true, y: true, width: true, height: true, result: true, in1: true, type: true, values: true } };

export default setRuntimeConfigProvider.get("RNSVGFeColorMatrix", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
