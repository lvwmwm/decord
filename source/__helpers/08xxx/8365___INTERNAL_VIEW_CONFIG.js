// Module ID: 8365
// Function ID: 8366
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [26, 65]

// Module 8365 (__INTERNAL_VIEW_CONFIG)
import result from "result" /* 26 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "RNSVGSvgView", validAttributes: null };
obj = { bbWidth: true, bbHeight: true, minX: true, minY: true, vbWidth: true, vbHeight: true, align: true, meetOrSlice: true, color: result.colorAttribute, pointerEvents: true, hitSlop: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNSVGSvgView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
