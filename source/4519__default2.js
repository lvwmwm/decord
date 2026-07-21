// Module ID: 4519
// Function ID: 39714
// Name: _default2
// Dependencies: []

// Module 4519 (_default2)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
let obj = { uiViewClassName: "RNSTabsScreen", directEventTypes: { topLifecycleStateChange: { registrationName: "onLifecycleStateChange" }, topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } } };
obj = { 1424122126: "text-sm/semibold", 97643270: "text-link", -1909058881: "True", 70031429: "True", 74495232: "true", 80104704: 424, 80088832: 424, 75965184: 100, 175853824: "2026-03-soundmoji-rendering", 784101458: "user", "Null": "2025-12-proportional-vad-indicator", "Null": "text", "Null": "", "Null": 255, "Null": 0 };
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
obj.validAttributes = Object.assign(obj, _module3.ConditionallyIgnoredEventHandlers({ body: "LIGHT", id: "<string:4227858432>", accessibilityRole: "<string:2731364671>", hash: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z", data: "<string:24183040>" }));
const _module4 = require(dependencyMap[4]);

export default _module4.get("RNSTabsScreen", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
