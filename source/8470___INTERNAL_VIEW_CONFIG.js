// Module ID: 8470
// Function ID: 8471
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 8470 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGDefs", validAttributes: { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true } };

export default setRuntimeConfigProvider.get("RNSVGDefs", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
