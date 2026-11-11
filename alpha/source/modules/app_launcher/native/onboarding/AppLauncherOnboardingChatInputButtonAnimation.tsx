// Module ID: 14541
// Function ID: 14542
// Name: AppLauncherOnboardingChatInputButtonAnimation
// Dependencies: [19, 17, 5244, 21, 5243, 5879, 575, 5485, 5488, 504, 8994, 13270, 1652, 5860, 14542, 13295, 2]
// Exports: AppLauncherOnboardingChatInputButtonAnimation

// Module 14541 (AppLauncherOnboardingChatInputButtonAnimation)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5860 */;
import ButtonConstants from "ButtonConstants" /* 5879 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 8994 */;
import useAppLauncherOnboardingContentDefault from "useAppLauncherOnboardingContent" /* 13270 */;
import _mod13295 from "module_13295" /* 13295 */;
import _mod14542 from "module_14542" /* 14542 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp10;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
({ View: c3, StyleSheet: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  let size1;
  const sum = ButtonConstants.SMALL_BUTTON_HEIGHT + ButtonConstants.SMALL_BUTTON_PADDING + 2;
  const obj = { fakeButton: size, glowMask: size1, glowLottie: { width: "150%", height: "150%", position: "absolute", top: "-25%", left: "-25%", zIndex: 0, opacity: 0.8 }, trinketsLottie: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-43%", left: "-38%" }, glowAnimation: { pointerEvents: "none" } };
  size = { zIndex: 3, borderWidth: 1.5, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", width: sum, height: sum, marginLeft: 4 };
  size1 = { zIndex: 1, position: "absolute", borderRadius: nativeDefault.radii.round, top: 0, left: 0, width: sum, height: sum, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginLeft: 4 };
  return obj;
});
let items = [{ code: "(function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){let[withTiming,timingStandard]=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};})" }, timing_timing.withTiming, timingPresets.timingStandard];
let c0;
let c1;
[tmp5, tmp6, tmp7] = items;
class EnteringAnimation {
  constructor() {
    const obj = { initialValues: { opacity: 0 }, animations: { opacity: _undefined(1, c1) } };
    ({ opacity: _undefined(1, c1) });
    return obj;
  }
}
let items1 = [tmp6, tmp7];
EnteringAnimation.__closure = items1;
EnteringAnimation.__workletHash = 5247795390408;
EnteringAnimation.__initData = tmp5;
let items2 = [{ code: "(function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){let[withTiming,timingStandard]=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};})" }, timing_timing.withTiming, timingPresets.timingStandard];
c0 = undefined;
c1 = undefined;
[tmp8, tmp9, tmp10] = items2;
class ExitingAnimation {
  constructor() {
    const obj = { initialValues: { opacity: 1 }, animations: { opacity: _undefined(0, c1) } };
    ({ opacity: _undefined(0, c1) });
    return obj;
  }
}
let items3 = [tmp9, tmp10];
ExitingAnimation.__closure = items3;
ExitingAnimation.__workletHash = 15961020653347;
ExitingAnimation.__initData = tmp8;
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx");

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export function AppLauncherOnboardingChatInputButtonAnimation(channelId) {
  let items1;
  let items2;
  let items3;
  let items4;
  let useReducedMotion;
  channelId = channelId.channelId;
  const tmp = closure_9();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = ClientThemesOverrides;
  const gradientBottom = obj2.useGradientBottom();
  useAppLauncherOnboardingContentDefault({ channelId });
  const obj4 = { entering: EnteringAnimation, exiting: ExitingAnimation, style: items1, collapsable: false, children: items2 };
  items1 = [absoluteFill.absoluteFill, tmp.glowAnimation];
  const obj3 = { children: items4 };
  const View = _modDef1652.View;
  const obj5 = { collapsable: false, style: tmp.glowLottie, source: _mod14542, autoPlay: !stateFromStores };
  const tmp5 = LottieAnimationViewDefault;
  items2 = [metroRequire(tmp5, obj5), , ];
  const obj6 = { collapsable: false, style: items3 };
  items3 = [tmp.glowMask, gradientBottom];
  items2[1] = metroRequire(_false, obj6);
  const obj7 = { collapsable: false, style: tmp.fakeButton };
  items2[2] = metroRequire(_false, obj7);
  items4 = [metroImportDefault(View, obj4), ];
  const obj8 = { collapsable: false, style: tmp.trinketsLottie, source: _mod13295, autoPlay: !stateFromStores };
  const tmp6 = LottieAnimationViewDefault;
  items4[1] = metroRequire(tmp6, obj8);
  return metroImportDefault(metroImportAll, obj3);
}
