// Module ID: 4513
// Function ID: 39693
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 4513 (__INTERNAL_VIEW_CONFIG)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
let obj = { uiViewClassName: "RNSTabsHost", directEventTypes: { topNativeFocusChange: { registrationName: "onNativeFocusChange" } } };
obj = { <string:1565636193>: "row", <string:1660641953>: "center", <string:1420597585>: "center", <string:3606007299>: "hidden", <string:1699272432>: 100, <string:4182856402>: 45, <string:1946706542>: null, <string:1388132689>: "text-sm/semibold" };
obj = { process: require(dependencyMap[1]).default };
obj.nativeContainerBackgroundColor = obj;
obj.tabBarBackgroundColor = { process: require(dependencyMap[1]).default };
const obj1 = { process: require(dependencyMap[1]).default };
obj.tabBarItemTitleFontColor = { process: require(dependencyMap[1]).default };
const obj2 = { process: require(dependencyMap[1]).default };
obj.tabBarItemTitleFontColorActive = { process: require(dependencyMap[1]).default };
const obj3 = { process: require(dependencyMap[1]).default };
obj.tabBarItemIconColor = { process: require(dependencyMap[1]).default };
const obj4 = { process: require(dependencyMap[1]).default };
obj.tabBarItemIconColorActive = { process: require(dependencyMap[1]).default };
const obj5 = { process: require(dependencyMap[1]).default };
obj.tabBarItemActiveIndicatorColor = { process: require(dependencyMap[1]).default };
obj.tabBarItemActiveIndicatorEnabled = true;
const obj6 = { process: require(dependencyMap[1]).default };
obj.tabBarItemRippleColor = { process: require(dependencyMap[1]).default };
obj.tabBarItemLabelVisibilityMode = true;
const obj7 = { process: require(dependencyMap[1]).default };
obj.tabBarTintColor = { process: require(dependencyMap[1]).default };
obj.tabBarMinimizeBehavior = true;
obj.tabBarControllerMode = true;
obj.controlNavigationStateInJS = true;
const _module = require(dependencyMap[2]);
obj.validAttributes = Object.assign(obj, _module.ConditionallyIgnoredEventHandlers({ onNativeFocusChange: true }));
const _module1 = require(dependencyMap[3]);

export default _module1.get("RNSTabsHost", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
