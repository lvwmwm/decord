// Module ID: 8505
// Function ID: 8506
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 8505 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGFilter", validAttributes: { name: true, x: true, y: true, height: true, width: true, filterUnits: true, primitiveUnits: true } };

export default setRuntimeConfigProvider.get("RNSVGFilter", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
