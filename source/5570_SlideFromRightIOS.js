// Module ID: 5570
// Function ID: 47340
// Name: SlideFromRightIOS
// Dependencies: []

// Module 5570 (SlideFromRightIOS)
const Platform = require(dependencyMap[0]).Platform;
let obj = { gestureDirection: "horizontal" };
obj = { open: require(dependencyMap[1]).TransitionIOSSpec, close: require(dependencyMap[1]).TransitionIOSSpec };
obj.transitionSpec = obj;
obj.cardStyleInterpolator = require(dependencyMap[2]).forHorizontalIOS;
obj.headerStyleInterpolator = require(dependencyMap[3]).forFade;
obj = { gestureDirection: "vertical", transitionSpec: { open: require(dependencyMap[1]).TransitionIOSSpec, close: require(dependencyMap[1]).TransitionIOSSpec }, cardStyleInterpolator: require(dependencyMap[2]).forVerticalIOS, headerStyleInterpolator: require(dependencyMap[3]).forFade };
const obj2 = { gestureDirection: "vertical" };
const obj1 = { open: require(dependencyMap[1]).TransitionIOSSpec, close: require(dependencyMap[1]).TransitionIOSSpec };
obj2.transitionSpec = { open: require(dependencyMap[1]).TransitionIOSSpec, close: require(dependencyMap[1]).TransitionIOSSpec };
obj2.cardStyleInterpolator = require(dependencyMap[2]).forModalPresentationIOS;
obj2.headerStyleInterpolator = require(dependencyMap[3]).forFade;
const obj4 = { gestureDirection: "vertical" };
const obj3 = { open: require(dependencyMap[1]).TransitionIOSSpec, close: require(dependencyMap[1]).TransitionIOSSpec };
obj4.transitionSpec = { open: require(dependencyMap[1]).FadeInFromBottomAndroidSpec, close: require(dependencyMap[1]).FadeOutToBottomAndroidSpec };
obj4.cardStyleInterpolator = require(dependencyMap[2]).forFadeFromBottomAndroid;
obj4.headerStyleInterpolator = require(dependencyMap[3]).forFade;
const obj6 = { gestureDirection: "vertical" };
const obj5 = { open: require(dependencyMap[1]).FadeInFromBottomAndroidSpec, close: require(dependencyMap[1]).FadeOutToBottomAndroidSpec };
obj6.transitionSpec = { open: require(dependencyMap[1]).RevealFromBottomAndroidSpec, close: require(dependencyMap[1]).RevealFromBottomAndroidSpec };
obj6.cardStyleInterpolator = require(dependencyMap[2]).forRevealFromBottomAndroid;
obj6.headerStyleInterpolator = require(dependencyMap[3]).forFade;
const obj8 = { gestureDirection: "horizontal" };
const obj7 = { open: require(dependencyMap[1]).RevealFromBottomAndroidSpec, close: require(dependencyMap[1]).RevealFromBottomAndroidSpec };
obj8.transitionSpec = { open: require(dependencyMap[1]).ScaleFromCenterAndroidSpec, close: require(dependencyMap[1]).ScaleFromCenterAndroidSpec };
obj8.cardStyleInterpolator = require(dependencyMap[2]).forScaleFromCenterAndroid;
obj8.headerStyleInterpolator = require(dependencyMap[3]).forFade;
const obj10 = { gestureDirection: "vertical" };
const obj9 = { open: require(dependencyMap[1]).ScaleFromCenterAndroidSpec, close: require(dependencyMap[1]).ScaleFromCenterAndroidSpec };
obj10.transitionSpec = { open: require(dependencyMap[1]).BottomSheetSlideInSpec, close: require(dependencyMap[1]).BottomSheetSlideOutSpec };
obj10.cardStyleInterpolator = require(dependencyMap[2]).forBottomSheetAndroid;
obj10.headerStyleInterpolator = require(dependencyMap[3]).forFade;
const obj12 = { gestureDirection: "vertical" };
const obj11 = { open: require(dependencyMap[1]).BottomSheetSlideInSpec, close: require(dependencyMap[1]).BottomSheetSlideOutSpec };
obj12.transitionSpec = { open: require(dependencyMap[1]).BottomSheetSlideInSpec, close: require(dependencyMap[1]).BottomSheetSlideOutSpec };
obj12.cardStyleInterpolator = require(dependencyMap[2]).forFadeFromCenter;
obj12.headerStyleInterpolator = require(dependencyMap[3]).forFade;
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
