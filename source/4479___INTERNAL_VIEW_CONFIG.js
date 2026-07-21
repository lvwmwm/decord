// Module ID: 4479
// Function ID: 39564
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 4479 (__INTERNAL_VIEW_CONFIG)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
let obj = { uiViewClassName: "RNSScreen", directEventTypes: { topAppear: { registrationName: "onAppear" }, topDisappear: { registrationName: "onDisappear" }, topDismissed: { registrationName: "onDismissed" }, topNativeDismissCancelled: { registrationName: "onNativeDismissCancelled" }, topWillAppear: { registrationName: "onWillAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topHeaderHeightChange: { registrationName: "onHeaderHeightChange" }, topTransitionProgress: { registrationName: "onTransitionProgress" }, topGestureCancel: { registrationName: "onGestureCancel" }, topHeaderBackButtonClicked: { registrationName: "onHeaderBackButtonClicked" }, topSheetDetentChanged: { registrationName: "onSheetDetentChanged" } } };
obj = {};
obj = { process: require(dependencyMap[1]).default };
obj.statusBarColor = obj;
obj.navigationBarColor = { process: require(dependencyMap[1]).default };
const _module = require(dependencyMap[2]);
obj.validAttributes = Object.assign(obj, _module.ConditionallyIgnoredEventHandlers({}));
const _module1 = require(dependencyMap[3]);

export default _module1.get("RNSScreen", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
