// Module ID: 4517
// Function ID: 39742
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [27, 38, 110, 42]

// Module 4517 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "RNSTabsHost", directEventTypes: { topNativeFocusChange: { registrationName: "onNativeFocusChange" } } };
obj = { tabBarHidden: true, nativeContainerBackgroundColor: null, tabBarBackgroundColor: null, tabBarItemTitleFontFamily: true, tabBarItemTitleFontSize: true, tabBarItemTitleFontSizeActive: true, tabBarItemTitleFontWeight: true, tabBarItemTitleFontStyle: true };
obj = { process: require("processColor").default };
obj.nativeContainerBackgroundColor = obj;
obj.tabBarBackgroundColor = { process: require("processColor").default };
const obj1 = { process: require("processColor").default };
obj.tabBarItemTitleFontColor = { process: require("processColor").default };
const obj2 = { process: require("processColor").default };
obj.tabBarItemTitleFontColorActive = { process: require("processColor").default };
const obj3 = { process: require("processColor").default };
obj.tabBarItemIconColor = { process: require("processColor").default };
const obj4 = { process: require("processColor").default };
obj.tabBarItemIconColorActive = { process: require("processColor").default };
const obj5 = { process: require("processColor").default };
obj.tabBarItemActiveIndicatorColor = { process: require("processColor").default };
obj.tabBarItemActiveIndicatorEnabled = true;
const obj6 = { process: require("processColor").default };
obj.tabBarItemRippleColor = { process: require("processColor").default };
obj.tabBarItemLabelVisibilityMode = true;
const obj7 = { process: require("processColor").default };
obj.tabBarTintColor = { process: require("processColor").default };
obj.tabBarMinimizeBehavior = true;
obj.tabBarControllerMode = true;
obj.controlNavigationStateInJS = true;
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onNativeFocusChange: true }));

export default get.get("RNSTabsHost", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
