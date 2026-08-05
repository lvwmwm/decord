// Module ID: 8442
// Function ID: 8443
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 8442 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGDefs", validAttributes: { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true } };

export default setRuntimeConfigProvider.get("RNSVGDefs", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
