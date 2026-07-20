// Module ID: 4511
// Function ID: 39649
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 4511 (__INTERNAL_VIEW_CONFIG)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
const obj = { uiViewClassName: "RNSTabsBottomAccessory", directEventTypes: { topEnvironmentChange: { registrationName: "onEnvironmentChange" } } };
const _module = require(dependencyMap[1]);
obj.validAttributes = Object.assign({}, _module.ConditionallyIgnoredEventHandlers({ onEnvironmentChange: true }));
const _module1 = require(dependencyMap[2]);

export default _module1.get("RNSTabsBottomAccessory", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
