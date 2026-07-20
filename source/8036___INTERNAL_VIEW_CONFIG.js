// Module ID: 8036
// Function ID: 63818
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 8036 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "RNSVGCircle", directEventTypes: { topSvgLayout: { registrationName: "onSvgLayout" } } };
obj = {};
obj = { process: require(dependencyMap[0]).default };
obj.color = obj;
const _module = require(dependencyMap[1]);
obj.validAttributes = Object.assign(obj, _module.ConditionallyIgnoredEventHandlers({ onSvgLayout: true }));
const _module1 = require(dependencyMap[2]);

export default _module1.get("RNSVGCircle", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
