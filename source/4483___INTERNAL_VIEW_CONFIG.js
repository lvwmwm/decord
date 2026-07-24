// Module ID: 4483
// Function ID: 39605
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [27, 38, 110, 42]

// Module 4483 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "RNSScreen", directEventTypes: { topAppear: { registrationName: "onAppear" }, topDisappear: { registrationName: "onDisappear" }, topDismissed: { registrationName: "onDismissed" }, topNativeDismissCancelled: { registrationName: "onNativeDismissCancelled" }, topWillAppear: { registrationName: "onWillAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topHeaderHeightChange: { registrationName: "onHeaderHeightChange" }, topTransitionProgress: { registrationName: "onTransitionProgress" }, topGestureCancel: { registrationName: "onGestureCancel" }, topHeaderBackButtonClicked: { registrationName: "onHeaderBackButtonClicked" }, topSheetDetentChanged: { registrationName: "onSheetDetentChanged" } } };
obj = { screenId: true, sheetAllowedDetents: true, sheetLargestUndimmedDetent: true, sheetGrabberVisible: true, sheetCornerRadius: true, sheetExpandsWhenScrolledToEdge: true, sheetInitialDetent: true, sheetElevation: true, sheetShouldOverflowTopInset: true, sheetDefaultResizeAnimationEnabled: true, customAnimationOnSwipe: true, fullScreenSwipeEnabled: true, fullScreenSwipeShadowEnabled: true, homeIndicatorHidden: true, preventNativeDismiss: true, gestureEnabled: true, statusBarColor: null, statusBarHidden: true, screenOrientation: true, statusBarAnimation: true, statusBarStyle: true, statusBarTranslucent: true, gestureResponseDistance: true, stackPresentation: true, stackAnimation: true, transitionDuration: true, replaceAnimation: true, swipeDirection: true, hideKeyboardOnSwipe: true, activityState: true, navigationBarColor: null, navigationBarTranslucent: true, navigationBarHidden: true, nativeBackButtonDismissalEnabled: true, bottomScrollEdgeEffect: true, leftScrollEdgeEffect: true, rightScrollEdgeEffect: true, topScrollEdgeEffect: true, synchronousShadowStateUpdatesEnabled: true, androidResetScreenShadowStateOnOrientationChangeEnabled: true, ios26AllowInteractionsDuringTransition: true };
obj = { process: require("processColor").default };
obj.statusBarColor = obj;
obj.navigationBarColor = { process: require("processColor").default };
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onAppear: true, onDisappear: true, onDismissed: true, onNativeDismissCancelled: true, onWillAppear: true, onWillDisappear: true, onHeaderHeightChange: true, onTransitionProgress: true, onGestureCancel: true, onHeaderBackButtonClicked: true, onSheetDetentChanged: true }));

export default get.get("RNSScreen", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
