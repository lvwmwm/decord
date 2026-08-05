// Module ID: 8477
// Function ID: 8478
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 8477 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGFilter", validAttributes: { name: true, x: true, y: true, height: true, width: true, filterUnits: true, primitiveUnits: true } };

export default setRuntimeConfigProvider.get("RNSVGFilter", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
