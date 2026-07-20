// Module ID: 5570
// Function ID: 47283
// Name: TransitionIOSSpec
// Dependencies: []

// Module 5570 (TransitionIOSSpec)
const Easing = require(dependencyMap[0]).Easing;
let obj = { animation: "timing" };
obj = { duration: 350, easing: Easing.out(require("module_5")) };
obj.config = obj;
obj = { animation: "timing", config: { duration: 150, easing: Easing.in(Easing.linear) } };
const obj2 = { animation: "timing" };
const obj1 = { duration: 150, easing: Easing.in(Easing.linear) };
obj2.config = { duration: 425, easing: Easing.bezier(0.35, 0.45, 0, 1) };
const obj4 = { animation: "timing" };
const obj3 = { duration: 425, easing: Easing.bezier(0.35, 0.45, 0, 1) };
obj4.config = { duration: 400, easing: Easing.bezier(0.35, 0.45, 0, 1) };

export const TransitionIOSSpec = { animation: "spring", config: {} };
export const FadeInFromBottomAndroidSpec = obj;
export const FadeOutToBottomAndroidSpec = obj;
export const RevealFromBottomAndroidSpec = obj2;
export const ScaleFromCenterAndroidSpec = obj4;
export const BottomSheetSlideInSpec = {
  animation: "timing",
  config: {
    duration: 250,
    easing(arg0) {
      return Math.cos((arg0 + 1) * Math.PI) / 2 + 0.5;
    }
  }
};
export const BottomSheetSlideOutSpec = {
  animation: "timing",
  config: {
    duration: 200,
    easing(result) {
      let num = 1;
      if (1 !== result) {
        const _Math = Math;
        num = Math.pow(result, 2);
      }
      return num;
    }
  }
};
