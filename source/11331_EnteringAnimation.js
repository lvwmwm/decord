// Module ID: 11331
// Function ID: 88127
// Name: EnteringAnimation
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0]
// Exports: AppLauncherOnboardingChatInputButtonAnimation

// Module 11331 (EnteringAnimation)
import "result";
import result from "result";
import closure_5 from "result";
import result from "result";
import result from "result";
import result from "result";

({ View: closure_3, StyleSheet: closure_4 } = result);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = result);
let closure_9 = result.createStyles(() => {
  const sum = arg1(dependencyMap[5]).SMALL_BUTTON_HEIGHT + arg1(dependencyMap[5]).SMALL_BUTTON_PADDING + 2;
  let obj = {};
  obj = { withGuildMembers: false, withAffinitySuggestions: false, withFriends: false, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[6]).radii.round, width: sum, height: sum, marginLeft: 4 };
  obj.fakeButton = obj;
  obj = { borderRadius: importDefault(dependencyMap[6]).radii.round, width: sum, height: sum, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, marginLeft: 4 };
  obj.glowMask = obj;
  obj.glowLottie = {};
  obj.trinketsLottie = {};
  obj.glowAnimation = { pointerEvents: "none" };
  return obj;
});
let closure_10 = { code: "function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
let closure_11 = () => {
  class EnteringAnimation {
    constructor() {
      obj = { initialValues: { opacity: 0 } };
      obj = {};
      obj3 = closure_0(closure_2[7]);
      obj.opacity = obj3.withTiming(1, closure_0(closure_2[8]).timingStandard);
      obj.animations = obj;
      return obj;
    }
  }
  EnteringAnimation.__closure = { withTiming: arg1(dependencyMap[7]).withTiming, timingStandard: arg1(dependencyMap[8]).timingStandard };
  EnteringAnimation.__workletHash = 2327377243473;
  EnteringAnimation.__initData = closure_10;
  return EnteringAnimation;
}();
let closure_12 = { code: "function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
let closure_13 = () => {
  class ExitingAnimation {
    constructor() {
      obj = { initialValues: { opacity: 1 } };
      obj = {};
      obj3 = closure_0(closure_2[7]);
      obj.opacity = obj3.withTiming(0, closure_0(closure_2[8]).timingStandard);
      obj.animations = obj;
      return obj;
    }
  }
  ExitingAnimation.__closure = { withTiming: arg1(dependencyMap[7]).withTiming, timingStandard: arg1(dependencyMap[8]).timingStandard };
  ExitingAnimation.__workletHash = 1065249287738;
  ExitingAnimation.__initData = closure_12;
  return ExitingAnimation;
}();
result = result.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx");

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export const AppLauncherOnboardingChatInputButtonAnimation = function AppLauncherOnboardingChatInputButtonAnimation(channelId) {
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = arg1(dependencyMap[10]);
  const gradientBottom = obj1.useGradientBottom();
  importDefault(dependencyMap[11])({ channelId: channelId.channelId });
  obj = {};
  obj = { entering: closure_11, exiting: closure_13, style: items1, collapsable: false };
  const items1 = [absoluteFill.absoluteFill, tmp.glowAnimation];
  obj1 = { collapsable: false, style: tmp.glowLottie, source: arg1(dependencyMap[14]), autoPlay: !stateFromStores };
  const items2 = [callback(importDefault(dependencyMap[13]), obj1), , ];
  const items3 = [tmp.glowMask, gradientBottom];
  items2[1] = callback(closure_3, { collapsable: false, style: items3 });
  items2[2] = callback(closure_3, { collapsable: false, style: tmp.fakeButton });
  obj.children = items2;
  const items4 = [callback2(importDefault(dependencyMap[12]).View, obj), ];
  const obj3 = { collapsable: false, style: tmp.trinketsLottie };
  const obj2 = { collapsable: false, style: tmp.fakeButton };
  const tmp5 = importDefault(dependencyMap[13]);
  obj3.source = arg1(dependencyMap[15]);
  obj3.autoPlay = !stateFromStores;
  items4[1] = callback(importDefault(dependencyMap[13]), obj3);
  obj.children = items4;
  return callback2(closure_8, obj);
};
