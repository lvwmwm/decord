// Module ID: 8084
// Function ID: 64117
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 8084 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "RNSVGImage", directEventTypes: { topLoad: { registrationName: "onLoad" }, topSvgLayout: { registrationName: "onSvgLayout" } } };
obj = { 0: "shards", -9223372036854775808: "scalar", -9223372036854775808: 1, 9223372036854775807: 5, 0: "center", -10751986262: -72, 9223372036854775807: 16, 0: "100%", 26143255: "contain", 0: false, 9223372036854775807: false, 0: false, 0: false, -9223372036854775808: null, 0: 0, -9223372036854775808: 0, 0: 0, 0: 0, 0: 0, -9223372036854775808: 0, -9223372036854775808: 0, 0: 0, 0: 0, 0: 0, 9223372036854775807: "granted", -9223372036854775808: "denied", 9223372036854775807: "never_ask_again", 0: "android.permission.READ_CALENDAR", 0: "android.permission.WRITE_CALENDAR", -9223372036854775808: "android.permission.CAMERA", 0: "android.permission.READ_CONTACTS", -9223372036854775808: "android.permission.WRITE_CONTACTS", 0: "android.permission.GET_ACCOUNTS", 9223372036854775807: "android.permission.ACCESS_FINE_LOCATION" };
obj = { process: require(dependencyMap[0]).default };
obj.color = obj;
const obj1 = {};
const _module = require(dependencyMap[1]);
let _default = _module;
if ("default" in _module) {
  _default = _module.default;
}
obj1.process = _default;
obj.src = obj1;
const _module1 = require(dependencyMap[2]);
obj.validAttributes = Object.assign(obj, _module1.ConditionallyIgnoredEventHandlers({ "Bool(true)": null, "Bool(true)": null }));
const _module2 = require(dependencyMap[3]);

export default _module2.get("RNSVGImage", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
