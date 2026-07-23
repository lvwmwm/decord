// Module ID: 37
// Function ID: 1273
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [38, 42]

// Module 37 (__INTERNAL_VIEW_CONFIG)
import get from "get";

let obj = { uiViewClassName: "AndroidProgressBar" };
obj = { styleAttr: true, typeAttr: true, indeterminate: true, progress: true, animating: true, color: null, testID: true };
obj = { process: require("processColor").default };
obj.color = obj;
obj.validAttributes = obj;

export default get.get("AndroidProgressBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
