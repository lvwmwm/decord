// Module ID: 4479
// Function ID: 39572
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 4479 (__INTERNAL_VIEW_CONFIG)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
let obj = { uiViewClassName: "RNSScreen", directEventTypes: { topAppear: { registrationName: "onAppear" }, topDisappear: { registrationName: "onDisappear" }, topDismissed: { registrationName: "onDismissed" }, topNativeDismissCancelled: { registrationName: "onNativeDismissCancelled" }, topWillAppear: { registrationName: "onWillAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topHeaderHeightChange: { registrationName: "onHeaderHeightChange" }, topTransitionProgress: { registrationName: "onTransitionProgress" }, topGestureCancel: { registrationName: "onGestureCancel" }, topHeaderBackButtonClicked: { registrationName: "onHeaderBackButtonClicked" }, topSheetDetentChanged: { registrationName: "onSheetDetentChanged" } } };
obj = { borderWidth: true, flex: true, width: true, height: true, aspectRatio: true, tabBarHidden: true, nativeContainerBackgroundColor: true, tabBarBackgroundColor: true, tabBarItemTitleFontFamily: true, tabBarItemTitleFontSize: true, tabBarItemTitleFontSizeActive: true, tabBarItemTitleFontWeight: true, tabBarItemTitleFontStyle: true, position: true, flex: true, width: true, height: true, isFocused: true, tabKey: true, title: true, isTitleUndefined: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, orientation: true, drawableIconResourceName: true, imageIconResource: true, tabBarItemBadgeTextColor: true, tabBarItemBadgeBackgroundColor: true, standardAppearance: true, scrollEdgeAppearance: true, iconType: true, onLifecycleStateChange: true, onWillAppear: true, onDidAppear: true, onWillDisappear: true, onDidDisappear: true, dialogKey: true, onDismiss: true, zIndex: true, accessibilityViewIsModal: true };
obj = { process: require(dependencyMap[1]).default };
obj.statusBarColor = obj;
obj.navigationBarColor = { process: require(dependencyMap[1]).default };
const _module = require(dependencyMap[2]);
obj.validAttributes = Object.assign(obj, _module.ConditionallyIgnoredEventHandlers({ "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false }));
const _module1 = require(dependencyMap[3]);

export default _module1.get("RNSScreen", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
