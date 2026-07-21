// Module ID: 1563
// Function ID: 17621
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 1563 (__INTERNAL_VIEW_CONFIG)
const obj = { uiViewClassName: "RNCSafeAreaProvider", directEventTypes: { topInsetsChange: { registrationName: "onInsetsChange" } } };
const _module = require(dependencyMap[0]);
obj.validAttributes = Object.assign({}, _module.ConditionallyIgnoredEventHandlers({ onInsetsChange: true }));
const _module1 = require(dependencyMap[1]);

export default _module1.get("RNCSafeAreaProvider", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
