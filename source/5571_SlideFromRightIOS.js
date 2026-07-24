// Module ID: 5571
// Function ID: 47360
// Name: SlideFromRightIOS
// Dependencies: [27, 5572, 5569, 5549]

// Module 5571 (SlideFromRightIOS)
import { Platform } from "get ActivityIndicator";

let obj = { gestureDirection: "horizontal" };
obj = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj.transitionSpec = obj;
obj.cardStyleInterpolator = require("Animated").forHorizontalIOS;
obj.headerStyleInterpolator = require("forUIKit").forFade;
obj = { gestureDirection: "vertical", transitionSpec: { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec }, cardStyleInterpolator: require("Animated").forVerticalIOS, headerStyleInterpolator: require("forUIKit").forFade };
const obj2 = { gestureDirection: "vertical" };
const obj1 = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj2.transitionSpec = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj2.cardStyleInterpolator = require("Animated").forModalPresentationIOS;
obj2.headerStyleInterpolator = require("forUIKit").forFade;
const obj4 = { gestureDirection: "vertical" };
const obj3 = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj4.transitionSpec = { open: require("TransitionIOSSpec").FadeInFromBottomAndroidSpec, close: require("TransitionIOSSpec").FadeOutToBottomAndroidSpec };
obj4.cardStyleInterpolator = require("Animated").forFadeFromBottomAndroid;
obj4.headerStyleInterpolator = require("forUIKit").forFade;
const obj6 = { gestureDirection: "vertical" };
const obj5 = { open: require("TransitionIOSSpec").FadeInFromBottomAndroidSpec, close: require("TransitionIOSSpec").FadeOutToBottomAndroidSpec };
obj6.transitionSpec = { open: require("TransitionIOSSpec").RevealFromBottomAndroidSpec, close: require("TransitionIOSSpec").RevealFromBottomAndroidSpec };
obj6.cardStyleInterpolator = require("Animated").forRevealFromBottomAndroid;
obj6.headerStyleInterpolator = require("forUIKit").forFade;
const obj8 = { gestureDirection: "horizontal" };
const obj7 = { open: require("TransitionIOSSpec").RevealFromBottomAndroidSpec, close: require("TransitionIOSSpec").RevealFromBottomAndroidSpec };
obj8.transitionSpec = { open: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec, close: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec };
obj8.cardStyleInterpolator = require("Animated").forScaleFromCenterAndroid;
obj8.headerStyleInterpolator = require("forUIKit").forFade;
const obj10 = { gestureDirection: "vertical" };
const obj9 = { open: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec, close: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec };
obj10.transitionSpec = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj10.cardStyleInterpolator = require("Animated").forBottomSheetAndroid;
obj10.headerStyleInterpolator = require("forUIKit").forFade;
const obj12 = { gestureDirection: "vertical" };
const obj11 = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj12.transitionSpec = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj12.cardStyleInterpolator = require("Animated").forFadeFromCenter;
obj12.headerStyleInterpolator = require("forUIKit").forFade;
let tmp2 = obj8;
if (Platform.Version < 29) {
  let tmp3 = obj4;
  if (Platform.Version >= 28) {
    tmp3 = obj6;
  }
  tmp2 = tmp3;
}

export const SlideFromRightIOS = obj;
export const ModalSlideFromBottomIOS = obj;
export const ModalPresentationIOS = obj2;
export const FadeFromBottomAndroid = obj4;
export const RevealFromBottomAndroid = obj6;
export const ScaleFromCenterAndroid = obj8;
export const BottomSheetAndroid = obj10;
export const ModalFadeTransition = obj12;
export const DefaultTransition = tmp2;
export const ModalTransition = obj10;
