// Module ID: 6543
// Function ID: 6544
// Name: GuildOnboardingPrompts
// Dependencies: [32, 5, 19, 17, 4825, 5884, 2045, 2067, 2099, 6521, 6522, 6518, 1074, 21, 1101, 4836, 5994, 576, 1476, 4683, 5899, 5293, 1094, 504, 1613, 1485, 4566, 6526, 6527, 1397, 1880, 1241, 5016, 4837, 5936, 6544, 6545, 1370, 5841, 4832, 1115, 2]
// Exports: default

// Module 6543 (GuildOnboardingPrompts)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ImageUtils from "ImageUtils" /* 1476 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import timing from "timing" /* 4837 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import FastImageDefault from "FastImage" /* 5899 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6518 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6522 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6526 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6527 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5884 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6521 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3, c4, channel, constants2, navigation;

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj = function _getBackgroundGradientColor() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let obj7;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_1;
        let closure_2;
        let closure_3;
        let closure_4;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj3.getPaletteForAvatar(closure_0), done: false };
            obj3 = ImageUtils;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          closure_1 = closure_130_3(closure_0[0], 3);
          closure_2 = closure_1[0];
          closure_3 = closure_1[1];
          closure_4 = closure_1[2];
          c4 = 3;
          obj = { value: obj7.rgbToHex(closure_2, closure_3, closure_4), done: true };
          obj7 = closure_130_0(closure_130_2[19]);
          return obj;
        }
      } catch (tmp8) {
        c4 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
function BackgroundImageGradient(color) {
  let items;
  let items1;
  let items2;
  color = color.color;
  const splashUrl = color.splashUrl;
  const tmp = closure_22();
  const obj2 = { source: { uri: splashUrl }, style: items, resizeMode: "cover" };
  items = [tmp.backgroundImage];
  obj = { children: items1 };
  items1 = [closure_19(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.backgroundColorGradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: items2 };
  items2 = [, ];
  const tmp2 = LinearGradientDefault;
  const obj4 = ColorUtils;
  items2[0] = obj4.hexWithOpacity(color, 0.16);
  items2[1] = color;
  items1[1] = closure_19(tmp2, obj3);
  return closure_21(closure_20, obj);
}
({ StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const OnboardingPromptType = GuildOnboardingPromptsConstants.OnboardingPromptType;
let closure_15 = GuildOnboardingConstants.GuildOnboardingModalStates;
({ AnalyticEvents: closure_16, MarketingURLs: closure_17, Routes: closure_18 } = Constants);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
let createStyles = createStyles_mod;
obj = { flex: { flex: 1 }, container: obj2, subtitle: obj3, onboardingTitle: { textAlign: "center" }, onboardingPolicy: obj4, onboardingPolicyText: { textAlign: "center" }, landingOverlay: { position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center" }, artWrapper: { height: 350, position: "relative", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }, landingBody: obj5, backgroundImage: { position: "absolute", height: "50%", width: "100%", top: 0 }, backgroundColorGradient: { position: "absolute", height: "100%", width: "100%", top: 0 }, darkColorGradient: { position: "absolute", height: "100%", width: "100%", top: 0 } };
obj2 = { display: "flex", flex: 1, flexGrow: 1, marginTop: NavigatorConstants.NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, opacity: 0.8 };
obj4 = { position: "absolute", paddingHorizontal: nativeDefault.space.PX_16, display: "flex", justifyContent: "center", width: "100%", marginBottom: nativeDefault.space.PX_16 };
obj5 = { alignItems: "center", marginTop: -24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_22 = createStyles(obj);
const __initData = { code: "function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}" };
const __initData2 = { code: "function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
const __initData3 = { code: "function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
const __initData4 = { code: "function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
const __initData5 = { code: "function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompts.tsx");

export default function GuildOnboardingPrompt(guildId) {
  let O2bQlD;
  let Text3;
  let View;
  let backShouldLeaveGuild;
  let closure_17;
  let format;
  let intl2;
  let intl3;
  let isFirstOpen;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let obj13;
  let obj22;
  let obj27;
  let obj28;
  let onClose;
  let selectOption;
  let str;
  let tmp37Result;
  guildId = guildId.guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  const prompts = guildId.prompts;
  ({ selectOption, onClose } = guildId);
  ({ isFirstOpen, backShouldLeaveGuild } = guildId);
  isFirstOpen = undefined;
  navigation = undefined;
  let skipped;
  let closure_11;
  let sharedValue;
  let callback;
  let stateFromStores2;
  let stateFromStoresArray;
  constants2 = undefined;
  let closure_18;
  let guildSplashURL;
  let required;
  const landingAnimation = guildId.landingAnimation;
  let tmp = closure_22();
  let tmp2 = guildId;
  const tmp3 = prompts;
  obj = guildId(prompts[23]);
  let items = [navigation];
  const stateFromStores = obj.useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj2 = guildId(prompts[23]);
  const items1 = [isFirstOpen];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => isFirstOpen.useReducedMotion);
  let tmp6 = currentPromptIdx;
  const bottom = currentPromptIdx(prompts[24])().bottom;
  let obj3 = guildId(prompts[23]);
  const items2 = [callback];
  let tmp8 = obj3.useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId)).length > 0;
  let closure_7 = tmp8;
  const tmp7 = callback;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp8;
  }
  const tmp2Result = tmp2(tmp3[25]);
  navigation = tmp2Result.useNavigation();
  const tmp10 = prompts.length > 0;
  skipped = tmp10;
  const tmp11 = prompts[currentPromptIdx];
  closure_11 = tmp11;
  const tmp2Result12 = tmp2(tmp3[26]);
  sharedValue = tmp2Result12.useSharedValue(!isFirstOpen);
  const items3 = [guildId, prompts];
  callback = stateFromStores.useCallback(() => {
    obj = GuildOnboardingActionCreatorsDefault;
    obj.completeOnboarding(guildId, prompts);
  }, items3);
  const items4 = [closure_11];
  const tmp2Result13 = tmp2(tmp3[23]);
  stateFromStores2 = tmp2Result13.useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const items5 = [tmp7];
  const items6 = [guildId, tmp11];
  const tmp2Result14 = tmp2(tmp3[23]);
  stateFromStoresArray = tmp2Result14.useStateFromStoresArray(items5, () => {
    let onboardingResponsesForPrompt;
    if (null != closure_11) {
      onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items6);
  let tmp15 = 0 === stateFromStoresArray.length;
  if (tmp15) {
    required = undefined;
    if (tmp11 != null) {
      required = tmp11.required;
    }
    tmp15 = required;
  }
  required = tmp15;
  let tmp18 = currentPromptIdx + 1 >= prompts.length;
  if (tmp18) {
    const tmp2Result15 = tmp2(tmp3[28]);
    tmp18 = !tmp2Result15.showRulesInOnboarding(stateFromStores2, stateFromStores);
  }
  constants2 = tmp18;
  const tmp19 = onClose(obj6.useState(tmp6(tmp3[17]).unsafe_rawColors.PRIMARY_800), 2);
  closure_18 = tmp19[1];
  guildSplashURL = null;
  const first = tmp19[0];
  if (null != stateFromStores2) {
    let obj4 = { id: null, splash: null, size: 400 * tmp6(tmp3[30])() };
    ({ id: obj10.id, splash: obj10.splash } = stateFromStores2);
    const getGuildSplashURL = tmp6(tmp3[29]).getGuildSplashURL;
    let num = 400;
    tmp6(tmp3[29]);
    guildSplashURL = getGuildSplashURL(obj4);
  }
  const items7 = [guildSplashURL];
  const effect = obj6.useEffect(() => {
    function getBackgroundGradientColor() {
      return closure_1_23(...arguments);
    }
    if (null != guildSplashURL) {
      const promise = getBackgroundGradientColor(tmp);
      promise.then((result) => {
        closure_1_18(result);
      });
    }
  }, items7);
  const items8 = [guildId, tmp10, stateFromStores, isFirstOpen];
  const effect1 = obj6.useEffect(() => {
    const tmp = isFirstOpen;
    if (tmp) {
      obj = { step: -1, required: true };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_VIEWED = required.GUILD_ONBOARDING_STEP_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
      const track2 = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_COMPLETED = required.GUILD_ONBOARDING_STEP_COMPLETED;
      AnalyticsUtilsDefault;
      const obj4 = AppAnalyticsUtils;
      const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
      track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
    }
  }, items8);
  const items9 = [sharedValue, isFirstOpen, tmp10, tmp8, onClose, callback, guildId];
  const effect2 = obj6.useEffect(() => {
    let tmp = isFirstOpen;
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const tmp = skipped;
        if (tmp) {
          const result = sharedValue.set(true);
        } else {
          onClose();
          callback();
        }
      }, 2000);
    }
  }, items9);
  const items10 = [isFirstOpen, tmp10, onClose];
  const effect3 = obj6.useEffect(() => {
    const tmp = isFirstOpen || skipped;
    if (!tmp) {
      onClose();
    }
  }, items10);
  required = tmp27;
  const items11 = [guildId, tmp27, currentPromptIdx];
  const effect4 = obj6.useEffect(() => {
    if (0 === currentPromptIdx) {
      obj = { step: 0, required };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_VIEWED = required.GUILD_ONBOARDING_STEP_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
    }
  }, items11);
  function ot() {
    let Easing;
    let Easing2;
    let items;
    let obj5;
    let withTiming2;
    let num = 1;
    obj = sharedValue;
    if (sharedValue.get()) {
      num = 0;
    }
    const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    let num2 = 0;
    const withTimingResult = withTiming(num, obj2);
    if (!stateFromStores1) {
      num2 = 0;
      if (obj.get()) {
        num2 = -80;
      }
    }
    const obj3 = { opacity: withTimingResult, transform: items };
    const obj4 = { translateY: withTiming2(num2, obj5) };
    obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    withTiming2 = timing.withTiming;
    timing;
    Easing2 = tmp(4566).Easing;
    items = [obj4];
    return obj3;
  }
  const tmp2Result16 = tmp2(tmp3[26]);
  let obj5 = { showPrompts: sharedValue, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  ot.__closure = obj5;
  ot.__workletHash = 6820086589932;
  ot.__initData = __initData;
  const animatedStyle = tmp2Result16.useAnimatedStyle(ot);
  function st() {
    let Easing;
    let Easing2;
    let items;
    let obj5;
    let withDelay2;
    let withTiming2;
    let num = 1;
    obj = sharedValue;
    if (sharedValue.get()) {
      num = 0;
    }
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    let num2 = 0;
    const withDelayResult = withDelay(200, withTiming(num, obj2));
    if (!stateFromStores1) {
      num2 = 0;
      if (obj.get()) {
        num2 = -80;
      }
    }
    const obj3 = { opacity: withDelayResult, transform: items };
    const obj4 = { translateY: withDelay2(200, withTiming2(num2, obj5)) };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    withTiming2 = timing.withTiming;
    timing;
    Easing2 = tmp(4566).Easing;
    items = [obj4];
    return obj3;
  }
  const tmp2Result17 = tmp2(tmp3[26]);
  st.__closure = { showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  st.__workletHash = 3034833873876;
  st.__initData = __initData2;
  ({ showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing, useReducedMotion: stateFromStores1 });
  const animatedStyle1 = tmp2Result17.useAnimatedStyle(st);
  function rt() {
    let Easing;
    let obj2;
    let withDelay;
    let withTiming;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    obj = { opacity: withDelay(200, withTiming(num, obj2)) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    return obj;
  }
  const tmp2Result18 = tmp2(tmp3[26]);
  rt.__closure = { showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing };
  rt.__workletHash = 2795589385440;
  rt.__initData = __initData3;
  ({ showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing });
  const animatedStyle2 = tmp2Result18.useAnimatedStyle(rt);
  function lt() {
    let Easing;
    let obj2;
    let withDelay;
    let withTiming;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    obj = { opacity: withDelay(200, withTiming(num, obj2)) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    return obj;
  }
  const tmp2Result19 = tmp2(tmp3[26]);
  lt.__closure = { showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing };
  lt.__workletHash = 13481450530727;
  lt.__initData = __initData4;
  ({ showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing });
  const animatedStyle3 = tmp2Result19.useAnimatedStyle(lt);
  function ct() {
    let Easing;
    let Easing2;
    let items;
    let num2;
    let obj5;
    let withDelay2;
    let withTiming2;
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const withDelayResult = withDelay(600, withTiming(num, obj2));
    if (stateFromStores1) {
      num2 = 0;
    } else {
      num2 = 80;
    }
    const obj3 = { opacity: withDelayResult, transform: items };
    const obj4 = { translateY: withDelay2(600, withTiming2(num2, obj5)) };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    withTiming2 = timing.withTiming;
    timing;
    Easing2 = tmp(4566).Easing;
    items = [obj4];
    return obj3;
  }
  const tmp2Result20 = tmp2(tmp3[26]);
  ct.__closure = { showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing, useReducedMotion: stateFromStores1 };
  ct.__workletHash = 14018549800735;
  ct.__initData = __initData5;
  const items12 = [navigation, currentPromptIdx, stateFromStoresArray, guildId, prompts, onClose, backShouldLeaveGuild, tmp8];
  ({ showPrompts: sharedValue, withDelay: tmp2(tmp3[26]).withDelay, withTiming: tmp2(tmp3[33]).withTiming, Easing: tmp2(tmp3[26]).Easing, useReducedMotion: stateFromStores1 });
  const animatedStyle4 = tmp2Result20.useAnimatedStyle(ct);
  const layoutEffect = obj6.useLayoutEffect(() => {
    let headerCloseButton;
    let step;
    const tmp = currentPromptIdx;
    if (0 === currentPromptIdx) {
      const tmp2 = closure_7;
      if (!tmp2) {
        let tmp4 = dependencyMap;
        obj = NavigatorHeader;
        headerCloseButton = obj.getHeaderCloseButton(() => {
          obj = { step: 0, skipped: true, back: false, options_selected: 0, in_onboarding: true, is_final_step: false };
          const track = currentPromptIdx(prompts[31]).track;
          const GUILD_ONBOARDING_STEP_COMPLETED = required.GUILD_ONBOARDING_STEP_COMPLETED;
          currentPromptIdx(prompts[31]);
          const obj2 = guildId(prompts[32]);
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
          track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
          const tmp4 = closure_1_0;
          if (backShouldLeaveGuild) {
            channel = channel.getChannel(sharedValue.getLastSelectedChannelId());
            if (null != channel) {
              if (channel.guild_id !== tmp4) {
                const tmp3Result = guildId(prompts[14]);
                tmp3Result.transitionTo(closure_18.CHANNEL(channel.guild_id, channel.id));
              }
              onClose();
            }
            const tmp3Result2 = guildId(prompts[14]);
            tmp3Result2.transitionTo(closure_18.ME, { navigationReplace: true });
          } else {
            onClose();
          }
        });
      }
      let obj4 = { headerLeft: headerCloseButton };
      navigation.setOptions(obj4);
    }
    if (0 === tmp) {
      let headerBackButton;
      const tmp6 = closure_7;
      if (tmp6) {
        let obj3 = NavigatorHeader;
        headerBackButton = obj3.getHeaderBackButton(() => {
          obj = { step: 0, skipped: false, back: true, options_selected: stateFromStoresArray.length, in_onboarding: true, is_final_step: false };
          const track = currentPromptIdx(prompts[31]).track;
          const GUILD_ONBOARDING_STEP_COMPLETED = required.GUILD_ONBOARDING_STEP_COMPLETED;
          currentPromptIdx(prompts[31]);
          const obj2 = guildId(prompts[32]);
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
          track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
          navigation.pop();
        }, true);
      }
      headerCloseButton = headerBackButton;
    }
    let obj2 = NavigatorHeader;
    headerBackButton = obj2.getHeaderBackButton(() => {
      obj = { step, skipped: false, back: true, options_selected: stateFromStoresArray.length, in_onboarding: true, is_final_step: false };
      const track = currentPromptIdx(prompts[31]).track;
      const GUILD_ONBOARDING_STEP_COMPLETED = required.GUILD_ONBOARDING_STEP_COMPLETED;
      currentPromptIdx(prompts[31]);
      const obj2 = guildId(prompts[32]);
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
      track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
      const obj3 = { step: step - 1, required: closure_1_2[step - 1].required };
      const track2 = currentPromptIdx(prompts[31]).track;
      const GUILD_ONBOARDING_STEP_VIEWED = required.GUILD_ONBOARDING_STEP_VIEWED;
      currentPromptIdx(prompts[31]);
      const obj4 = guildId(prompts[32]);
      const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(closure_1_0));
      track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
      navigation.pop();
    }, true);
  }, items12);
  const obj12 = { style: tmp.flex, children: items15 };
  const rect = { top: true, bottom: true, style: items13, children: guildSplashURL(View, obj13) };
  items13 = [, ];
  ({ flex: arr16[0], container: arr16[1] } = tmp);
  const SafeAreaPaddingView = tmp2(tmp3[35]).SafeAreaPaddingView;
  obj13 = { style: items14, children: tmp37Result };
  items14 = [tmp.flex, animatedStyle4];
  tmp37Result = null;
  View = tmp6(tmp3[26]).View;
  if (tmp10) {
    tmp37Result = null;
    if (null != tmp11) {
      function handleOnPress() {
        const tmp = required;
        if (!tmp) {
          const tmp2 = closure_17;
          if (tmp2) {
            navigation.push(stateFromStoresArray.COMPLETED);
          } else {
            obj = { step: currentPromptIdx, options_selected: stateFromStoresArray.length, skipped: 0 === stateFromStoresArray.length, back: false, in_onboarding: true, is_final_step: false };
            const track = AnalyticsUtilsDefault.track;
            const GUILD_ONBOARDING_STEP_COMPLETED = required.GUILD_ONBOARDING_STEP_COMPLETED;
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
            const tmp6 = required;
            const tmp8 = guildId;
            if (currentPromptIdx < prompts.length - 1) {
              const obj3 = { step: currentPromptIdx + 1, required: prompts[currentPromptIdx + 1].required };
              const track2 = tmp3(1241).track;
              const GUILD_ONBOARDING_STEP_VIEWED = tmp6.GUILD_ONBOARDING_STEP_VIEWED;
              AnalyticsUtilsDefault;
              const tmp7Result = AppAnalyticsUtils;
              const merged1 = Object.assign(tmp7Result.collectGuildAnalyticsMetadata(tmp8));
              track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
            }
            if (currentPromptIdx + 1 < prompts.length) {
              const obj4 = { currentPrompt: currentPromptIdx + 1 };
              navigation.push(stateFromStoresArray.PROMPT, obj4);
            } else {
              const tmp7Result2 = GuildOnboardingUtils;
              if (tmp7Result2.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
                navigation.push(stateFromStoresArray.RULES);
              }
            }
          }
        }
      }
      const type = tmp11.type;
      if (stateFromStores2.MULTIPLE_CHOICE === type) {
        const obj14 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp37Result = tmp37(tmp2(tmp3[36]).MultipleChoicePrompt, obj14);
      } else if (tmp39.DROPDOWN === type) {
        const obj15 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp37Result = tmp37(tmp2(tmp3[36]).DropdownPrompt, obj15);
      } else {
        const tmp2Result21 = tmp2(tmp3[37]);
        tmp2Result21.assertNever(tmp11.type);
      }
    }
  }
  items15 = [guildSplashURL(SafeAreaPaddingView, rect), ];
  const obj17 = { style: items16, pointerEvents: "none", children: items20 };
  items16 = [, ];
  const obj16 = { style: stateFromStores1.absoluteFill, pointerEvents: "none", children: items24 };
  ({ flex: arr19[0], landingOverlay: arr19[1] } = tmp);
  const View2 = tmp6(tmp3[26]).View;
  const obj18 = { style: items17, children: items18 };
  items17 = [tmp.landingOverlay, animatedStyle3];
  let tmp37Result2 = null;
  const View3 = tmp6(tmp3[26]).View;
  if (null != guildSplashURL) {
    const obj19 = { splashUrl: guildSplashURL, color: first };
    tmp37Result2 = tmp37(BackgroundImageGradient, obj19);
  }
  items18 = [tmp37Result2, ];
  const obj20 = { style: tmp.darkColorGradient, start: tmp2(tmp3[22]).VerticalGradient.START, end: tmp2(tmp3[22]).VerticalGradient.END, colors: items19 };
  items19 = [, ];
  const tmp6Result2 = tmp6(tmp3[21]);
  const tmp2Result22 = tmp2(tmp3[19]);
  items19[0] = tmp2Result22.hexWithOpacity(tmp6(tmp3[17]).unsafe_rawColors.PRIMARY_800, 0.5);
  items19[1] = tmp6(tmp3[17]).unsafe_rawColors.PRIMARY_800;
  items18[1] = guildSplashURL(tmp6Result2, obj20);
  items20 = [closure_21(View3, obj18), , ];
  const obj21 = { style: items21, children: guildSplashURL(tmp6(tmp3[38]), obj22) };
  items21 = [tmp.artWrapper, animatedStyle];
  const View4 = tmp6(tmp3[26]).View;
  obj22 = { source: landingAnimation, autoPlay: !stateFromStores1, style: { width: "100%" } };
  items20[1] = guildSplashURL(View4, obj21);
  const obj23 = { style: items22, children: items23 };
  items22 = [tmp.landingBody, animatedStyle1];
  const View5 = tmp6(tmp3[26]).View;
  const obj24 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: format(O2bQlD, { guildName: str }) };
  const Text = tmp2(tmp3[39]).Text;
  const intl = tmp2(tmp3[40]).intl;
  format = intl.format;
  str = undefined;
  O2bQlD = tmp2(tmp3[40]).t.O2bQlD;
  if (stateFromStores2 != null) {
    str = stateFromStores2.name;
  }
  if (str == null) {
    str = "";
  }
  items23 = [guildSplashURL(Text, obj24), ];
  const obj25 = { style: tmp.onboardingTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "text-overlay-light", children: intl2.string(tmp2(tmp3[40]).t["Alcl/e"]) };
  const Text2 = tmp2(tmp3[39]).Text;
  intl2 = tmp2(tmp3[40]).intl;
  items23[1] = guildSplashURL(Text2, obj25);
  items20[2] = closure_21(View5, obj23);
  items24 = [closure_21(View2, obj17), ];
  const obj26 = { style: items25, pointerEvents: "auto", children: guildSplashURL(Text3, obj27) };
  items25 = [tmp.onboardingPolicy, animatedStyle2, { bottom }];
  const View6 = tmp6(tmp3[26]).View;
  obj27 = { style: tmp.onboardingPolicyText, variant: "heading-sm/normal", color: "text-default", children: intl3.format(tmp2(tmp3[40]).t.kI6UoD, obj28) };
  Text3 = tmp2(tmp3[39]).Text;
  intl3 = tmp2(tmp3[40]).intl;
  obj28 = { privacyLink: constants2.PRIVACY };
  items24[1] = guildSplashURL(View6, obj26);
  items15[1] = closure_21(closure_7, obj16);
  return closure_21(closure_7, obj12);
};
