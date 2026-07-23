// Module ID: 4496
// Function ID: 39669
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [27, 38, 110, 42]

// Module 4496 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "RNSScreenStackHeaderConfig", directEventTypes: { topAttached: { registrationName: "onAttached" }, topDetached: { registrationName: "onDetached" }, topPressHeaderBarButtonItem: { registrationName: "onPressHeaderBarButtonItem" }, topPressHeaderBarButtonMenuItem: { registrationName: "onPressHeaderBarButtonMenuItem" } } };
obj = { backgroundColor: null, backTitle: true, backTitleFontFamily: true, backTitleFontSize: true, backTitleVisible: true, color: null, direction: true, hidden: true, hideShadow: true, largeTitle: true, largeTitleFontFamily: true, largeTitleFontSize: true, largeTitleFontWeight: true, largeTitleBackgroundColor: null, largeTitleHideShadow: true };
obj = { process: require("processColor").default };
obj.backgroundColor = obj;
obj.color = { process: require("processColor").default };
const obj1 = { process: require("processColor").default };
obj.largeTitleBackgroundColor = { process: require("processColor").default };
const obj2 = { process: require("processColor").default };
obj.largeTitleColor = { process: require("processColor").default };
obj.translucent = true;
obj.title = true;
obj.titleFontFamily = true;
obj.titleFontSize = true;
obj.titleFontWeight = true;
const obj3 = { process: require("processColor").default };
obj.titleColor = { process: require("processColor").default };
obj.disableBackButtonMenu = true;
obj.backButtonDisplayMode = true;
obj.hideBackButton = true;
obj.backButtonInCustomView = true;
obj.blurEffect = true;
obj.topInsetEnabled = true;
obj.consumeLeftInset = true;
obj.consumeRightInset = true;
obj.consumeBottomInset = true;
obj.headerLeftBarButtonItems = true;
obj.headerRightBarButtonItems = true;
obj.synchronousShadowStateUpdatesEnabled = true;
obj.userInterfaceStyle = true;
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onAttached: true, onDetached: true, onPressHeaderBarButtonItem: true, onPressHeaderBarButtonMenuItem: true }));

export default get.get("RNSScreenStackHeaderConfig", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
