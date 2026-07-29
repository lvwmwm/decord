// Module ID: 25
// Function ID: 26
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [26, 65]

// Module 25 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "AndroidProgressBar", validAttributes: null };
obj = { styleAttr: true, typeAttr: true, indeterminate: true, progress: true, animating: true, color: require("result").colorAttribute, testID: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("AndroidProgressBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
