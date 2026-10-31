// Module ID: 13787
// Function ID: 13788
// Name: AppLauncherOnboardingChatInputButtonAnimation
// Dependencies: [19, 17, 5015, 21, 5014, 5640, 575, 5254, 5257, 504, 9821, 12225, 5095, 5618, 13788, 12250, 2]
// Exports: AppLauncherOnboardingChatInputButtonAnimation

// Module 13787 (AppLauncherOnboardingChatInputButtonAnimation)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import timingPresets from "timingPresets" /* 5257 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5618 */;
import ButtonConstants from "ButtonConstants" /* 5640 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9821 */;
import useAppLauncherOnboardingContentDefault from "useAppLauncherOnboardingContent" /* 12225 */;
import _mod12250 from "module_12250" /* 12250 */;
import _mod13788 from "module_13788" /* 13788 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
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
class EnteringAnimation {
  constructor() {
    let obj2;
    let obj3;
    const obj = { initialValues: { opacity: 0 }, animations: obj2 };
    obj2 = { opacity: obj3.withTiming(1, timingPresets.timingStandard) };
    obj3 = timing;
    return obj;
  }
}
let obj = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
EnteringAnimation.__closure = obj;
EnteringAnimation.__workletHash = 2327377243473;
EnteringAnimation.__initData = { code: "function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
class ExitingAnimation {
  constructor() {
    let obj2;
    let obj3;
    const obj = { initialValues: { opacity: 1 }, animations: obj2 };
    obj2 = { opacity: obj3.withTiming(0, timingPresets.timingStandard) };
    obj3 = timing;
    return obj;
  }
}
let obj2 = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
ExitingAnimation.__closure = obj2;
ExitingAnimation.__workletHash = 1065249287738;
ExitingAnimation.__initData = { code: "function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
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
  const View = ReanimatedRexportDefault.View;
  const obj5 = { collapsable: false, style: tmp.glowLottie, source: _mod13788, autoPlay: !stateFromStores };
  const tmp5 = LottieAnimationViewDefault;
  items2 = [metroRequire(tmp5, obj5), , ];
  const obj6 = { collapsable: false, style: items3 };
  items3 = [tmp.glowMask, gradientBottom];
  items2[1] = metroRequire(_false, obj6);
  const obj7 = { collapsable: false, style: tmp.fakeButton };
  items2[2] = metroRequire(_false, obj7);
  items4 = [metroImportDefault(View, obj4), ];
  const obj8 = { collapsable: false, style: tmp.trinketsLottie, source: _mod12250, autoPlay: !stateFromStores };
  const tmp6 = LottieAnimationViewDefault;
  items4[1] = metroRequire(tmp6, obj8);
  return metroImportDefault(metroImportAll, obj3);
}
