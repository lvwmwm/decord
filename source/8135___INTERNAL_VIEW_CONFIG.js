// Module ID: 8135
// Function ID: 64385
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [38, 90, 110, 42]

// Module 8135 (__INTERNAL_VIEW_CONFIG)
import getSourceCodeScriptURL from "getSourceCodeScriptURL";
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "RNSVGImage", directEventTypes: { topLoad: { registrationName: "onLoad" }, topSvgLayout: { registrationName: "onSvgLayout" } } };
obj = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: null, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, x: true, y: true, width: true, height: true, src: null, align: true, meetOrSlice: true };
obj = { process: require("processColor").default };
obj.color = obj;
const obj1 = {};
if ("default" in getSourceCodeScriptURL) {
  getSourceCodeScriptURL = getSourceCodeScriptURL.default;
}
obj1.process = getSourceCodeScriptURL;
obj.src = obj1;
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onLoad: true, onSvgLayout: true }));

export default get.get("RNSVGImage", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
