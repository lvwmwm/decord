// Module ID: 4509
// Function ID: 39645
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 4509 (__INTERNAL_VIEW_CONFIG)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
let obj = { uiViewClassName: "RNSTabsHost", directEventTypes: { topNativeFocusChange: { registrationName: "onNativeFocusChange" } } };
obj = { accessible: 66184, body: -35230, <string:979545237>: 65535, <string:626741596>: 0, <string:1599231073>: 65536, <string:1634437510>: 0, <string:2712621494>: 0, <string:1365441378>: 324075520 };
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
