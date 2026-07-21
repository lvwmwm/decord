// Module ID: 8084
// Function ID: 64107
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 8084 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "RNSVGImage", directEventTypes: { topLoad: { registrationName: "onLoad" }, topSvgLayout: { registrationName: "onSvgLayout" } } };
obj = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null };
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
