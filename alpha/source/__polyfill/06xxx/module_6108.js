// Module ID: 6108
// Function ID: 6109
// Dependencies: [106, 65, 114]

// Module 6108
import renderElement from "renderElement" /* 114 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let obj2;
let obj3;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "LottieAnimationView", bubblingEventTypes: obj2, validAttributes: obj3 };
obj2 = { topAnimationFinish: { phasedRegistrationNames: { captured: "onAnimationFinishCapture", bubbled: "onAnimationFinish" } }, topAnimationFailure: { phasedRegistrationNames: { captured: "onAnimationFailureCapture", bubbled: "onAnimationFailure" } }, topAnimationLoaded: { phasedRegistrationNames: { captured: "onAnimationLoadedCapture", bubbled: "onAnimationLoaded" } } };
obj3 = { resizeMode: true, renderMode: true, sourceName: true, sourceJson: true, sourceURL: true, sourceDotLottieURI: true, imageAssetsFolder: true, progress: true, speed: true, loop: true, autoPlay: true, enableMergePathsAndroidForKitKatAndAbove: true, enableSafeModeAndroid: true, hardwareAccelerationAndroid: true, cacheComposition: true, colorFilters: true, dummy: true, textFiltersAndroid: true, textFiltersIOS: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onAnimationFinish: true, onAnimationFailure: true, onAnimationLoaded: true }));
const obj4 = {
  play(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    const obj = renderElement;
    obj.dispatchCommand(arg0, "play", items);
  },
  reset(arg0) {
    const obj = renderElement;
    obj.dispatchCommand(arg0, "reset", []);
  },
  pause(arg0) {
    const obj = renderElement;
    obj.dispatchCommand(arg0, "pause", []);
  },
  resume(arg0) {
    const obj = renderElement;
    obj.dispatchCommand(arg0, "resume", []);
  }
};

export default module_65.get("LottieAnimationView", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj4;
