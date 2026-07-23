// Module ID: 4523
// Function ID: 39762
// Name: _default2
// Dependencies: [27, 90, 38, 110, 42]

// Module 4523 (_default2)
import { codegenNativeComponent } from "get ActivityIndicator";
import getSourceCodeScriptURL from "getSourceCodeScriptURL";
import getSourceCodeScriptURL from "getSourceCodeScriptURL";
import getSourceCodeScriptURL from "getSourceCodeScriptURL";
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "RNSTabsScreen", directEventTypes: { topLifecycleStateChange: { registrationName: "onLifecycleStateChange" }, topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } } };
obj = { isFocused: true, tabKey: true, title: true, isTitleUndefined: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, orientation: true, drawableIconResourceName: true, imageIconResource: null, tabBarItemBadgeTextColor: null, tabBarItemBadgeBackgroundColor: null, standardAppearance: true, scrollEdgeAppearance: true, iconType: true };
obj = {};
if ("default" in getSourceCodeScriptURL) {
  getSourceCodeScriptURL = getSourceCodeScriptURL.default;
}
obj.process = getSourceCodeScriptURL;
obj.imageIconResource = obj;
obj.tabBarItemBadgeTextColor = { process: require("processColor").default };
const obj1 = { process: require("processColor").default };
obj.tabBarItemBadgeBackgroundColor = { process: require("processColor").default };
const obj3 = {};
if ("default" in getSourceCodeScriptURL) {
  getSourceCodeScriptURL = getSourceCodeScriptURL.default;
}
obj3.process = getSourceCodeScriptURL;
obj.iconImageSource = obj3;
obj.iconResourceName = true;
const obj4 = {};
if ("default" in getSourceCodeScriptURL) {
  getSourceCodeScriptURL = getSourceCodeScriptURL.default;
}
obj4.process = getSourceCodeScriptURL;
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
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onLifecycleStateChange: true, onWillAppear: true, onDidAppear: true, onWillDisappear: true, onDidDisappear: true }));

export default get.get("RNSTabsScreen", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
