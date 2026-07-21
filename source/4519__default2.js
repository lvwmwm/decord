// Module ID: 4519
// Function ID: 39722
// Name: _default2
// Dependencies: []

// Module 4519 (_default2)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
let obj = { uiViewClassName: "RNSTabsScreen", directEventTypes: { topLifecycleStateChange: { registrationName: "onLifecycleStateChange" }, topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } } };
obj = { "Bool(false)": "computeFrecency", "Bool(false)": "uniqueDwelledCount", "Bool(false)": "uniqueDwelledCount", "Bool(false)": "uniqueDwelledCount", "Bool(false)": "partnerId", "Bool(false)": "GuildEventDescription", "Bool(false)": "AggregateError", "Bool(false)": "generateIdFn", "Bool(false)": 73294138347815640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667261458271609, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000012163345147351224, "Bool(false)": 241979899612687240000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667261426588719, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008546159629620068, "Bool(false)": 0.6 };
obj = {};
const _module = require(dependencyMap[1]);
let _default = _module;
if ("default" in _module) {
  _default = _module.default;
}
obj.process = _default;
obj.imageIconResource = obj;
obj.tabBarItemBadgeTextColor = { process: require(dependencyMap[2]).default };
const obj1 = { process: require(dependencyMap[2]).default };
obj.tabBarItemBadgeBackgroundColor = { process: require(dependencyMap[2]).default };
const obj3 = {};
const _module1 = require(dependencyMap[1]);
let _default2 = _module1;
if ("default" in _module1) {
  _default2 = _module1.default;
}
obj3.process = _default2;
obj.iconImageSource = obj3;
obj.iconResourceName = true;
const obj4 = {};
const _module2 = require(dependencyMap[1]);
let _default3 = _module2;
if ("default" in _module2) {
  _default3 = _module2.default;
}
obj4.process = _default3;
obj.selectedIconImageSource = obj4;
obj.selectedIconResourceName = true;
obj.systemItem = true;
obj.specialEffects = true;
obj.overrideScrollViewContentInsetAdjustmentBehavior = true;
obj.bottomScrollEdgeEffect = true;
obj.leftScrollEdgeEffect = true;
obj.rightScrollEdgeEffect = true;
obj.topScrollEdgeEffect = true;
obj.userInterfaceStyle = true;
const _module3 = require(dependencyMap[3]);
obj.validAttributes = Object.assign(obj, _module3.ConditionallyIgnoredEventHandlers({}));
const _module4 = require(dependencyMap[4]);

export default _module4.get("RNSTabsScreen", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
