// Module ID: 4492
// Function ID: 39629
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 4492 (__INTERNAL_VIEW_CONFIG)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
let obj = { uiViewClassName: "RNSScreenStackHeaderConfig", directEventTypes: { topAttached: { registrationName: "onAttached" }, topDetached: { registrationName: "onDetached" }, topPressHeaderBarButtonItem: { registrationName: "onPressHeaderBarButtonItem" }, topPressHeaderBarButtonMenuItem: { registrationName: "onPressHeaderBarButtonMenuItem" } } };
obj = {};
obj = { process: require(dependencyMap[1]).default };
obj.backgroundColor = obj;
obj.color = { process: require(dependencyMap[1]).default };
const obj1 = { process: require(dependencyMap[1]).default };
obj.largeTitleBackgroundColor = { process: require(dependencyMap[1]).default };
const obj2 = { process: require(dependencyMap[1]).default };
obj.largeTitleColor = { process: require(dependencyMap[1]).default };
obj.translucent = true;
obj.title = true;
obj.titleFontFamily = true;
obj.titleFontSize = true;
obj.titleFontWeight = true;
const obj3 = { process: require(dependencyMap[1]).default };
obj.titleColor = { process: require(dependencyMap[1]).default };
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
const _module = require(dependencyMap[2]);
obj.validAttributes = Object.assign(obj, _module.ConditionallyIgnoredEventHandlers({}));
const _module1 = require(dependencyMap[3]);

export default _module1.get("RNSScreenStackHeaderConfig", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
