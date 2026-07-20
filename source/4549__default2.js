// Module ID: 4549
// Function ID: 39839
// Name: _default2
// Dependencies: []

// Module 4549 (_default2)
let obj = { uiViewClassName: "RNLinearGradient" };
obj = {};
obj = {};
const _module = require(dependencyMap[0]);
let _default = _module;
if ("default" in _module) {
  _default = _module.default;
}
obj.diff = _default;
obj.startPoint = obj;
const obj1 = {};
const _module1 = require(dependencyMap[0]);
let _default2 = _module1;
if ("default" in _module1) {
  _default2 = _module1.default;
}
obj1.diff = _default2;
obj.endPoint = obj1;
const obj2 = {};
const _module2 = require(dependencyMap[1]);
let _default3 = _module2;
if ("default" in _module2) {
  _default3 = _module2.default;
}
obj2.process = _default3;
obj.colors = obj2;
obj.locations = true;
obj.useAngle = true;
const obj3 = {};
const _module3 = require(dependencyMap[0]);
let _default4 = _module3;
if ("default" in _module3) {
  _default4 = _module3.default;
}
obj3.diff = _default4;
obj.angleCenter = obj3;
obj.angle = true;
obj.borderRadii = true;
obj.validAttributes = obj;
const _module4 = require(dependencyMap[2]);

export default _module4.get("RNLinearGradient", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
