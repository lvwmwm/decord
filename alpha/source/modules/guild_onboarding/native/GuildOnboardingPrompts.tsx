// Module ID: 7427
// Function ID: 7428
// Name: GuildOnboardingPrompts
// Dependencies: [32, 5, 19, 17, 5142, 7083, 4990, 5012, 5044, 7404, 7405, 7401, 1072, 21, 1099, 5141, 5722, 575, 1490, 5138, 5851, 5723, 1092, 504, 1627, 1499, 1652, 7409, 7410, 1411, 2021, 1252, 5894, 5378, 7139, 7428, 7429, 1380, 5755, 5761, 1113, 2]
// Exports: default

// Module 7427 (GuildOnboardingPrompts)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ColorUtils from "ColorUtils" /* 5138 */;
import NavigatorConstants from "NavigatorConstants" /* 5722 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import FastImageDefault from "FastImage" /* 5851 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5894 */;
import NavigatorHeader from "NavigatorHeader" /* 7139 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7401 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 7405 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7409 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7410 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 7083 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildStore from "GuildStore" /* 5012 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7404 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let absoluteFill, channel, constants, constants2, navigation;

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
            obj3 = require("ImageUtils");
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
  color = color.color;
  const splashUrl = color.splashUrl;
  const tmp = closure_22();
  obj = { children: items };
  items = [, ];
  const obj2 = { source: { uri: splashUrl }, style: tmp.backgroundImage, resizeMode: "cover" };
  items[0] = closure_19(FastImageDefault, obj2);
  const obj3 = { style: tmp.backgroundColorGradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: items1 };
  items1 = [, ];
  const tmp2 = LinearGradientDefault;
  const obj4 = ColorUtils;
  items1[0] = obj4.hexWithOpacity(color, 0.16);
  items1[1] = color;
  items[1] = closure_19(tmp2, obj3);
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
let closure_25 = { code: "(function GuildOnboardingPromptsTsx1(){let[showPrompts,withTiming,Easing,useReducedMotion]=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};})" };
let closure_26 = { code: "(function GuildOnboardingPromptsTsx2(){let[showPrompts,withDelay,withTiming,Easing,useReducedMotion]=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};})" };
let closure_27 = { code: "(function GuildOnboardingPromptsTsx3(){let[showPrompts,withDelay,withTiming,Easing]=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};})" };
let closure_28 = { code: "(function GuildOnboardingPromptsTsx4(){let[showPrompts]=this.__closure;return{pointerEvents:showPrompts.get()?'none':'auto'};})" };
let closure_29 = { code: "(function GuildOnboardingPromptsTsx5(){let[showPrompts,withDelay,withTiming,Easing]=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};})" };
let closure_30 = { code: "(function GuildOnboardingPromptsTsx6(){let[showPrompts,withDelay,withTiming,Easing,useReducedMotion]=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};})" };
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompts.tsx");

export default function GuildOnboardingPrompt(guildId) {
  let O2bQlD;
  let Text3;
  let View;
  let backShouldLeaveGuild;
  let closure_17;
  let closure_6;
  let format;
  let intl2;
  let intl3;
  let isFirstOpen;
  let items25;
  let items26;
  let items27;
  let items28;
  let items29;
  let items30;
  let items31;
  let items32;
  let items33;
  let items34;
  let items35;
  let items36;
  let items37;
  let obj17;
  let obj22;
  let obj23;
  let obj7;
  let onClose;
  let selectOption;
  let str;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp51;
  let tmp52;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp72Result;
  guildId = guildId.guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  const prompts = guildId.prompts;
  ({ selectOption, onClose } = guildId);
  ({ isFirstOpen, backShouldLeaveGuild } = guildId);
  isFirstOpen = undefined;
  navigation = undefined;
  let skipped;
  let closure_10;
  let sharedValue;
  let callback;
  let stateFromStores2;
  let stateFromStoresArray;
  let required;
  constants = undefined;
  constants2 = undefined;
  let guildSplashURL;
  let required2;
  const landingAnimation = guildId.landingAnimation;
  let tmp = closure_22();
  let tmp2 = guildId;
  let tmp3 = prompts;
  obj = guildId(prompts[23]);
  let items = [skipped];
  const stateFromStores = obj.useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj2 = guildId(prompts[23]);
  const items1 = [navigation];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => navigation.useReducedMotion);
  let tmp6 = currentPromptIdx;
  const bottom = currentPromptIdx(prompts[24])().bottom;
  let obj3 = guildId(prompts[23]);
  const items2 = [stateFromStores2];
  let tmp8 = obj3.useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId)).length > 0;
  absoluteFill = tmp8;
  const tmp7 = stateFromStores2;
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
  closure_10 = tmp11;
  const tmp2Result13 = tmp2(tmp3[26]);
  sharedValue = tmp2Result13.useSharedValue(!isFirstOpen);
  let obj6 = stateFromStores;
  const items3 = [guildId, prompts];
  callback = stateFromStores.useCallback(() => {
    obj = GuildOnboardingActionCreatorsDefault;
    obj.completeOnboarding(guildId, prompts);
  }, items3);
  const items4 = [sharedValue];
  const tmp2Result14 = tmp2(tmp3[23]);
  stateFromStores2 = tmp2Result14.useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const items5 = [tmp7];
  const items6 = [guildId, tmp11];
  const tmp2Result15 = tmp2(tmp3[23]);
  stateFromStoresArray = tmp2Result15.useStateFromStoresArray(items5, () => {
    let onboardingResponsesForPrompt;
    if (null != closure_10) {
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
    const tmp2Result16 = tmp2(tmp3[28]);
    tmp18 = !tmp2Result16.showRulesInOnboarding(stateFromStores2, stateFromStores);
  }
  constants = tmp18;
  const tmp19 = onClose(obj6.useState(tmp6(tmp3[17]).unsafe_rawColors.PRIMARY_800), 2);
  constants2 = tmp19[1];
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
        closure_1_17(result);
      });
    }
  }, items7);
  const items8 = [guildId, tmp10, stateFromStores, isFirstOpen];
  const effect1 = obj6.useEffect(() => {
    const tmp = isFirstOpen;
    if (tmp) {
      obj = { step: -1, required: true };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_VIEWED = constants.GUILD_ONBOARDING_STEP_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
      const track2 = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_COMPLETED = constants.GUILD_ONBOARDING_STEP_COMPLETED;
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
  required2 = tmp27;
  const items11 = [guildId, tmp27, currentPromptIdx];
  const effect4 = obj6.useEffect(() => {
    if (0 === currentPromptIdx) {
      obj = { step: 0, required: required2 };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_VIEWED = constants.GUILD_ONBOARDING_STEP_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
    }
  }, items11);
  const items12 = [closure_25, sharedValue, , , ];
  const useAnimatedStyle = tmp2(tmp3[26]).useAnimatedStyle;
  tmp2(tmp3[26]);
  items12[2] = tmp2(tmp3[33]).withTiming;
  items12[3] = tmp2(tmp3[26]).Easing;
  items12[4] = stateFromStores1;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp30, tmp31, tmp32, tmp33, tmp34] = items12;
  class GuildOnboardingPromptsTsx1 {
    constructor() {
      let items;
      let obj6;
      let num = 1;
      obj = _undefined;
      if (_undefined.get()) {
        num = 0;
      }
      let num2 = 0;
      const obj2 = { duration: 300, easing: _undefined3.out(_undefined3.ease) };
      const tmp = _undefined2;
      const tmp2 = _undefined2(num, obj2);
      if (!c3) {
        num2 = 0;
        if (obj.get()) {
          num2 = -80;
        }
      }
      const obj4 = { opacity: tmp2, transform: items };
      const obj5 = { translateY: tmp(num2, obj6) };
      items = [obj5];
      obj6 = { duration: 300, easing: _undefined3.out(_undefined3.ease) };
      return obj4;
    }
  }
  const items13 = [tmp31, tmp32, tmp33, tmp34];
  GuildOnboardingPromptsTsx1.__closure = items13;
  GuildOnboardingPromptsTsx1.__workletHash = 4968831838677;
  GuildOnboardingPromptsTsx1.__initData = tmp30;
  const animatedStyle = useAnimatedStyle(GuildOnboardingPromptsTsx1);
  const items14 = [closure_26, sharedValue, , , , ];
  const useAnimatedStyle2 = tmp2(tmp3[26]).useAnimatedStyle;
  tmp2(tmp3[26]);
  items14[2] = tmp2(tmp3[26]).withDelay;
  items14[3] = tmp2(tmp3[33]).withTiming;
  items14[4] = tmp2(tmp3[26]).Easing;
  items14[5] = stateFromStores1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items14;
  class GuildOnboardingPromptsTsx2 {
    constructor() {
      let items;
      let obj6;
      let num = 1;
      obj = _undefined;
      if (_undefined.get()) {
        num = 0;
      }
      let num2 = 0;
      const obj2 = { duration: 300, easing: _undefined4.out(_undefined4.ease) };
      const tmp = _undefined2;
      const tmp2 = _undefined3;
      const tmp3 = _undefined2(200, _undefined3(num, obj2));
      if (!c4) {
        num2 = 0;
        if (obj.get()) {
          num2 = -80;
        }
      }
      const obj4 = { opacity: tmp3, transform: items };
      const obj5 = { translateY: tmp(200, tmp2(num2, obj6)) };
      items = [obj5];
      obj6 = { duration: 300, easing: _undefined4.out(_undefined4.ease) };
      return obj4;
    }
  }
  const items15 = [tmp38, tmp39, tmp40, tmp41, tmp42];
  GuildOnboardingPromptsTsx2.__closure = items15;
  GuildOnboardingPromptsTsx2.__workletHash = 15352699765229;
  GuildOnboardingPromptsTsx2.__initData = tmp37;
  const animatedStyle2 = useAnimatedStyle2(GuildOnboardingPromptsTsx2);
  const items16 = [closure_27, sharedValue, , , ];
  const useAnimatedStyle3 = tmp2(tmp3[26]).useAnimatedStyle;
  tmp2(tmp3[26]);
  items16[2] = tmp2(tmp3[26]).withDelay;
  items16[3] = tmp2(tmp3[33]).withTiming;
  items16[4] = tmp2(tmp3[26]).Easing;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp45, tmp46, tmp47, tmp48, tmp49] = items16;
  class GuildOnboardingPromptsTsx3 {
    constructor() {
      let obj2;
      let num = 1;
      if (_undefined.get()) {
        num = 0;
      }
      obj = { opacity: _undefined2(200, _undefined3(num, obj2)) };
      obj2 = { duration: 300, easing: _undefined4.out(_undefined4.ease) };
      return obj;
    }
  }
  const items17 = [tmp46, tmp47, tmp48, tmp49];
  GuildOnboardingPromptsTsx3.__closure = items17;
  GuildOnboardingPromptsTsx3.__workletHash = 7281893132057;
  GuildOnboardingPromptsTsx3.__initData = tmp45;
  const animatedStyle3 = useAnimatedStyle3(GuildOnboardingPromptsTsx3);
  const items18 = [closure_28, sharedValue];
  c0 = undefined;
  [tmp51, tmp52] = items18;
  const tmp2Result20 = tmp2(tmp3[26]);
  class GuildOnboardingPromptsTsx4 {
    constructor() {
      let pointerEvents = "auto";
      if (_undefined.get()) {
        pointerEvents = "none";
      }
      return { pointerEvents };
    }
  }
  const items19 = [tmp52];
  GuildOnboardingPromptsTsx4.__closure = items19;
  GuildOnboardingPromptsTsx4.__workletHash = 7888519317763;
  GuildOnboardingPromptsTsx4.__initData = tmp51;
  const animatedProps = tmp2Result20.useAnimatedProps(GuildOnboardingPromptsTsx4);
  const items20 = [closure_29, sharedValue, , , ];
  const useAnimatedStyle4 = tmp2(tmp3[26]).useAnimatedStyle;
  tmp2(tmp3[26]);
  items20[2] = tmp2(tmp3[26]).withDelay;
  items20[3] = tmp2(tmp3[33]).withTiming;
  items20[4] = tmp2(tmp3[26]).Easing;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp55, tmp56, tmp57, tmp58, tmp59] = items20;
  class GuildOnboardingPromptsTsx5 {
    constructor() {
      let obj2;
      let num = 1;
      if (_undefined.get()) {
        num = 0;
      }
      obj = { opacity: _undefined2(200, _undefined3(num, obj2)) };
      obj2 = { duration: 300, easing: _undefined4.out(_undefined4.ease) };
      return obj;
    }
  }
  const items21 = [tmp56, tmp57, tmp58, tmp59];
  GuildOnboardingPromptsTsx5.__closure = items21;
  GuildOnboardingPromptsTsx5.__workletHash = 16271494377695;
  GuildOnboardingPromptsTsx5.__initData = tmp55;
  const animatedStyle4 = useAnimatedStyle4(GuildOnboardingPromptsTsx5);
  const items22 = [closure_30, sharedValue, , , , ];
  const useAnimatedStyle5 = tmp2(tmp3[26]).useAnimatedStyle;
  tmp2(tmp3[26]);
  items22[2] = tmp2(tmp3[26]).withDelay;
  items22[3] = tmp2(tmp3[33]).withTiming;
  items22[4] = tmp2(tmp3[26]).Easing;
  items22[5] = stateFromStores1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67] = items22;
  class GuildOnboardingPromptsTsx6 {
    constructor() {
      let items;
      let num2;
      let obj6;
      let num = 0;
      if (_undefined.get()) {
        num = 1;
      }
      const obj2 = { duration: 300, easing: _undefined4.out(_undefined4.ease) };
      const tmp = _undefined2;
      const tmp2 = _undefined3;
      const tmp3 = _undefined2(600, _undefined3(num, obj2));
      if (c4) {
        num2 = 0;
      } else {
        num2 = 80;
      }
      const obj4 = { opacity: tmp3, transform: items };
      const obj5 = { translateY: tmp(600, tmp2(num2, obj6)) };
      items = [obj5];
      obj6 = { duration: 300, easing: _undefined4.out(_undefined4.ease) };
      return obj4;
    }
  }
  const items23 = [tmp63, tmp64, tmp65, tmp66, tmp67];
  GuildOnboardingPromptsTsx6.__closure = items23;
  GuildOnboardingPromptsTsx6.__workletHash = 7666305678501;
  GuildOnboardingPromptsTsx6.__initData = tmp62;
  const items24 = [navigation, currentPromptIdx, stateFromStoresArray, guildId, prompts, onClose, backShouldLeaveGuild, tmp8];
  const animatedStyle5 = useAnimatedStyle5(GuildOnboardingPromptsTsx6);
  const layoutEffect = obj6.useLayoutEffect(() => {
    let headerCloseButton;
    let step;
    const tmp = currentPromptIdx;
    if (0 === currentPromptIdx) {
      const tmp2 = closure_6;
      if (!tmp2) {
        let tmp4 = dependencyMap;
        obj = NavigatorHeader;
        headerCloseButton = obj.getHeaderCloseButton(() => {
          obj = { step: 0, skipped: true, back: false, options_selected: 0, in_onboarding: true, is_final_step: false };
          const track = currentPromptIdx(prompts[31]).track;
          const GUILD_ONBOARDING_STEP_COMPLETED = constants.GUILD_ONBOARDING_STEP_COMPLETED;
          currentPromptIdx(prompts[31]);
          const obj2 = guildId(prompts[32]);
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
          track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
          const tmp4 = closure_1_0;
          if (backShouldLeaveGuild) {
            channel = channel.getChannel(callback.getLastSelectedChannelId());
            if (null != channel) {
              if (channel.guild_id !== tmp4) {
                const tmp3Result = guildId(prompts[14]);
                tmp3Result.transitionTo(guildSplashURL.CHANNEL(channel.guild_id, channel.id));
              }
              onClose();
            }
            const tmp3Result2 = guildId(prompts[14]);
            tmp3Result2.transitionTo(guildSplashURL.ME, { navigationReplace: true });
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
      const tmp6 = closure_6;
      if (tmp6) {
        let obj3 = NavigatorHeader;
        headerBackButton = obj3.getHeaderBackButton(() => {
          obj = { step: 0, skipped: false, back: true, options_selected: stateFromStoresArray.length, in_onboarding: true, is_final_step: false };
          const track = currentPromptIdx(prompts[31]).track;
          const GUILD_ONBOARDING_STEP_COMPLETED = constants.GUILD_ONBOARDING_STEP_COMPLETED;
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
      const GUILD_ONBOARDING_STEP_COMPLETED = constants.GUILD_ONBOARDING_STEP_COMPLETED;
      currentPromptIdx(prompts[31]);
      const obj2 = guildId(prompts[32]);
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
      track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
      const obj3 = { step: step - 1, required: closure_1_2[step - 1].required };
      const track2 = currentPromptIdx(prompts[31]).track;
      const GUILD_ONBOARDING_STEP_VIEWED = constants.GUILD_ONBOARDING_STEP_VIEWED;
      currentPromptIdx(prompts[31]);
      const obj4 = guildId(prompts[32]);
      const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(closure_1_0));
      track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
      navigation.pop();
    }, true);
  }, items24);
  let obj5 = { style: tmp.flex, children: items27 };
  const rect = { top: true, bottom: true, style: items25, children: required2(View, obj7) };
  items25 = [, ];
  ({ flex: arr28[0], container: arr28[1] } = tmp);
  const SafeAreaPaddingView = tmp2(tmp3[35]).SafeAreaPaddingView;
  obj7 = { style: items26, children: tmp72Result };
  items26 = [tmp.flex, animatedStyle5];
  tmp72Result = null;
  View = tmp6(tmp3[26]).View;
  if (tmp10) {
    tmp72Result = null;
    if (null != tmp11) {
      function handleOnPress() {
        const tmp = required;
        if (!tmp) {
          const tmp2 = constants;
          if (tmp2) {
            navigation.push(required.COMPLETED);
          } else {
            obj = { step: currentPromptIdx, options_selected: stateFromStoresArray.length, skipped: 0 === stateFromStoresArray.length, back: false, in_onboarding: true, is_final_step: false };
            const track = AnalyticsUtilsDefault.track;
            const GUILD_ONBOARDING_STEP_COMPLETED = constants.GUILD_ONBOARDING_STEP_COMPLETED;
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
            const tmp6 = constants;
            const tmp8 = guildId;
            if (currentPromptIdx < prompts.length - 1) {
              const obj3 = { step: currentPromptIdx + 1, required: prompts[currentPromptIdx + 1].required };
              const track2 = tmp3(1252).track;
              const GUILD_ONBOARDING_STEP_VIEWED = tmp6.GUILD_ONBOARDING_STEP_VIEWED;
              AnalyticsUtilsDefault;
              const tmp7Result = AppAnalyticsUtils;
              const merged1 = Object.assign(tmp7Result.collectGuildAnalyticsMetadata(tmp8));
              track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
            }
            if (currentPromptIdx + 1 < prompts.length) {
              const obj4 = { currentPrompt: currentPromptIdx + 1 };
              navigation.push(required.PROMPT, obj4);
            } else {
              const tmp7Result2 = GuildOnboardingUtils;
              if (tmp7Result2.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
                navigation.push(required.RULES);
              }
            }
          }
        }
      }
      const type = tmp11.type;
      if (stateFromStoresArray.MULTIPLE_CHOICE === type) {
        const obj8 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp72Result = tmp72(tmp2(tmp3[36]).MultipleChoicePrompt, obj8);
      } else if (tmp74.DROPDOWN === type) {
        const obj9 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp72Result = tmp72(tmp2(tmp3[36]).DropdownPrompt, obj9);
      } else {
        const tmp2Result23 = tmp2(tmp3[37]);
        tmp2Result23.assertNever(tmp11.type);
      }
    }
  }
  items27 = [required2(SafeAreaPaddingView, rect), ];
  const obj12 = { style: items28, pointerEvents: "none", children: items32 };
  items28 = [, ];
  const obj11 = { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: items36 };
  ({ flex: arr31[0], landingOverlay: arr31[1] } = tmp);
  const obj13 = { style: items29, children: items30 };
  items29 = [tmp.landingOverlay, animatedStyle4];
  let tmp72Result2 = null;
  const View2 = tmp6(tmp3[26]).View;
  if (null != guildSplashURL) {
    const obj14 = { splashUrl: guildSplashURL, color: first };
    tmp72Result2 = tmp72(BackgroundImageGradient, obj14);
  }
  items30 = [tmp72Result2, ];
  const obj15 = { style: tmp.darkColorGradient, start: tmp2(tmp3[22]).VerticalGradient.START, end: tmp2(tmp3[22]).VerticalGradient.END, colors: items31 };
  items31 = [, ];
  const tmp6Result2 = tmp6(tmp3[21]);
  const tmp2Result24 = tmp2(tmp3[19]);
  items31[0] = tmp2Result24.hexWithOpacity(tmp6(tmp3[17]).unsafe_rawColors.PRIMARY_800, 0.5);
  items31[1] = tmp6(tmp3[17]).unsafe_rawColors.PRIMARY_800;
  items30[1] = required2(tmp6Result2, obj15);
  items32 = [closure_21(View2, obj13), , ];
  const obj16 = { style: items33, children: required2(tmp6(tmp3[38]), obj17) };
  items33 = [tmp.artWrapper, animatedStyle];
  const View3 = tmp6(tmp3[26]).View;
  obj17 = { source: landingAnimation, autoPlay: !stateFromStores1, style: { width: "100%" } };
  items32[1] = required2(View3, obj16);
  const obj18 = { style: items34, children: items35 };
  items34 = [tmp.landingBody, animatedStyle2];
  const View4 = tmp6(tmp3[26]).View;
  const obj19 = { style: tmp.subtitle, variant: "body-md/semibold", color: "text-overlay-light", children: format(O2bQlD, { guildName: str }) };
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
  items35 = [required2(Text, obj19), ];
  const obj20 = { style: tmp.onboardingTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "text-overlay-light", children: intl2.string(tmp2(tmp3[40]).t["Alcl/e"]) };
  const Text2 = tmp2(tmp3[39]).Text;
  intl2 = tmp2(tmp3[40]).intl;
  items35[1] = required2(Text2, obj20);
  items32[2] = closure_21(View4, obj18);
  items36 = [closure_21(isFirstOpen, obj12), ];
  const obj21 = { style: items37, animatedProps, children: required2(Text3, obj22) };
  items37 = [tmp.onboardingPolicy, animatedStyle3, { bottom }];
  const View5 = tmp6(tmp3[26]).View;
  obj22 = { style: tmp.onboardingPolicyText, variant: "heading-xs/medium", color: "text-default", children: intl3.format(tmp2(tmp3[40]).t.kI6UoD, obj23) };
  Text3 = tmp2(tmp3[39]).Text;
  intl3 = tmp2(tmp3[40]).intl;
  obj23 = { privacyLink: constants2.PRIVACY };
  items36[1] = required2(View5, obj21);
  items27[1] = closure_21(isFirstOpen, obj11);
  return closure_21(isFirstOpen, obj5);
};
