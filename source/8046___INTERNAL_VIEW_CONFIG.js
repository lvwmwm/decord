// Module ID: 8046
// Function ID: 63858
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 8046 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "RNSVGEllipse", directEventTypes: { topSvgLayout: { registrationName: "onSvgLayout" } } };
obj = {};
obj = { process: require(dependencyMap[0]).default };
obj.color = obj;
const _module = require(dependencyMap[1]);
obj.validAttributes = Object.assign(obj, _module.ConditionallyIgnoredEventHandlers({ onSvgLayout: true }));
const _module1 = require(dependencyMap[2]);

export default _module1.get("RNSVGEllipse", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
