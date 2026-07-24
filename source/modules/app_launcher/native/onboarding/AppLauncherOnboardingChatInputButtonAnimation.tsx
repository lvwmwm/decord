// Module ID: 11377
// Function ID: 88465
// Name: EnteringAnimation
// Dependencies: [31, 27, 4122, 33, 4130, 4547, 689, 4131, 4134, 566, 8868, 11187, 3991, 5453, 11378, 11212, 2]
// Exports: AppLauncherOnboardingChatInputButtonAnimation

// Module 11377 (EnteringAnimation)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_3, StyleSheet: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles(() => {
  const sum = require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT + require(4547) /* getButtonPadding */.SMALL_BUTTON_PADDING + 2;
  let obj = {};
  obj = { zIndex: 3, borderWidth: 1.5, borderColor: importDefault(689).colors.BACKGROUND_BRAND, borderRadius: importDefault(689).radii.round, alignItems: "center", justifyContent: "center", width: sum, height: sum, marginLeft: 4 };
  obj.fakeButton = obj;
  obj = { zIndex: 1, position: "absolute", borderRadius: importDefault(689).radii.round, top: 0, left: 0, width: sum, height: sum, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, marginLeft: 4 };
  obj.glowMask = obj;
  obj.glowLottie = { width: "150%", height: "150%", position: "absolute", top: "-25%", left: "-25%", zIndex: 0, opacity: 0.8 };
  obj.trinketsLottie = { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-43%", left: "-38%" };
  obj.glowAnimation = { pointerEvents: "none" };
  return obj;
});
let closure_10 = { code: "function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
let closure_11 = (() => {
  class EnteringAnimation {
    constructor() {
      obj = { initialValues: { opacity: 0 } };
      obj = {};
      obj3 = outer1_0(outer1_2[7]);
      obj.opacity = obj3.withTiming(1, outer1_0(outer1_2[8]).timingStandard);
      obj.animations = obj;
      return obj;
    }
  }
  EnteringAnimation.__closure = { withTiming: require(4131) /* withTiming */.withTiming, timingStandard: require(4134) /* timingNone */.timingStandard };
  EnteringAnimation.__workletHash = 2327377243473;
  EnteringAnimation.__initData = closure_10;
  return EnteringAnimation;
})();
let closure_12 = { code: "function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
let closure_13 = (() => {
  class ExitingAnimation {
    constructor() {
      obj = { initialValues: { opacity: 1 } };
      obj = {};
      obj3 = outer1_0(outer1_2[7]);
      obj.opacity = obj3.withTiming(0, outer1_0(outer1_2[8]).timingStandard);
      obj.animations = obj;
      return obj;
    }
  }
  ExitingAnimation.__closure = { withTiming: require(4131) /* withTiming */.withTiming, timingStandard: require(4134) /* timingNone */.timingStandard };
  ExitingAnimation.__workletHash = 1065249287738;
  ExitingAnimation.__initData = closure_12;
  return ExitingAnimation;
})();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx");

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export const AppLauncherOnboardingChatInputButtonAnimation = function AppLauncherOnboardingChatInputButtonAnimation(channelId) {
  const tmp = callback3();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  let obj1 = require(8868) /* useGradientBottom */;
  const gradientBottom = obj1.useGradientBottom();
  importDefault(11187)({ channelId: channelId.channelId });
  obj = {};
  obj = { entering: closure_11, exiting: closure_13, style: items1, collapsable: false };
  items1 = [absoluteFill.absoluteFill, tmp.glowAnimation];
  obj1 = { collapsable: false, style: tmp.glowLottie, source: require(11378) /* items */, autoPlay: !stateFromStores };
  const items2 = [callback(importDefault(5453), obj1), , ];
  const items3 = [tmp.glowMask, gradientBottom];
  items2[1] = callback(closure_3, { collapsable: false, style: items3 });
  items2[2] = callback(closure_3, { collapsable: false, style: tmp.fakeButton });
  obj.children = items2;
  const items4 = [callback2(importDefault(3991).View, obj), ];
  const obj3 = { collapsable: false, style: tmp.trinketsLottie };
  const obj2 = { collapsable: false, style: tmp.fakeButton };
  const tmp5 = importDefault(5453);
  obj3.source = require(11212) /* items1 */;
  obj3.autoPlay = !stateFromStores;
  items4[1] = callback(importDefault(5453), obj3);
  obj.children = items4;
  return callback2(closure_8, obj);
};
