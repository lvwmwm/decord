// Module ID: 8133
// Function ID: 64375
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [38, 110, 42]

// Module 8133 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "RNSVGForeignObject", directEventTypes: { topSvgLayout: { registrationName: "onSvgLayout" } } };
obj = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: null, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, fontSize: true, fontWeight: true, font: true, x: true, y: true, height: true, width: true };
obj = { process: require("processColor").default };
obj.color = obj;
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onSvgLayout: true }));

export default get.get("RNSVGForeignObject", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
