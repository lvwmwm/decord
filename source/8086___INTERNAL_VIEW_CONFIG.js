// Module ID: 8086
// Function ID: 64127
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 8086 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "RNSVGLine", directEventTypes: { topSvgLayout: { registrationName: "onSvgLayout" } } };
obj = { "Bool(false)": "shards", "Bool(false)": "scalar", "Bool(false)": 1, "Bool(false)": 5, "Bool(false)": "center", "Bool(false)": -72, "Bool(false)": 16, "Bool(false)": "100%", "Bool(false)": "contain", "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": null, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": "granted", "Bool(false)": "denied", "Bool(false)": "never_ask_again", "Bool(false)": "android.permission.READ_CALENDAR", "Bool(false)": "android.permission.WRITE_CALENDAR", "Bool(false)": "android.permission.CAMERA", "Bool(false)": "android.permission.READ_CONTACTS" };
obj = { process: require(dependencyMap[0]).default };
obj.color = obj;
const _module = require(dependencyMap[1]);
obj.validAttributes = Object.assign(obj, _module.ConditionallyIgnoredEventHandlers({ onSvgLayout: true }));
const _module1 = require(dependencyMap[2]);

export default _module1.get("RNSVGLine", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
