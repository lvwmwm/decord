// Module ID: 5083
// Function ID: 44247
// Name: _getBackgroundGradientColor
// Dependencies: [57, 5, 31, 27, 4122, 5082, 1348, 1838, 1906, 5058, 5059, 5055, 653, 33, 1198, 4130, 5084, 689, 1447, 3974, 5085, 4554, 668, 566, 1557, 1456, 3991, 5063, 5065, 1392, 1825, 675, 4324, 4131, 5087, 5121, 5123, 1327, 5453, 4126, 1212, 2]
// Exports: default

// Module 5083 (_getBackgroundGradientColor)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import expandLocation from "expandLocation";
import get_ActivityIndicator from "_updateOnboardingResponses";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { OnboardingPromptType } from "_createForOfIteratorHelperLoose";
import { GuildOnboardingModalStates as closure_15 } from "GUILD_ONBOARDING_MODAL_KEY";
import ME from "ME";
import jsxProd from "withTiming";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_6;
let closure_7;
const require = arg1;
async function _getBackgroundGradientColor(arg0, arg1) {
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = outer2_0(outer2_2[18]);
  [tmp2, tmp3, tmp4] = outer2_3(yield outer2_0(outer2_2[18]).getPaletteForAvatar(arg0)[0], 3);
  const tmp = outer2_3(yield outer2_0(outer2_2[18]).getPaletteForAvatar(arg0)[0], 3);
  return outer2_0(outer2_2[19]).rgbToHex(tmp2, tmp3, tmp4);
}
function BackgroundImageGradient(uri) {
  const color = uri.color;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp.backgroundImage];
  const items1 = [callback2(importDefault(5085), { source: { uri: uri.splashUrl }, style: items, resizeMode: "cover" }), ];
  obj = { style: tmp.backgroundColorGradient, start: require(668) /* keys */.VerticalGradient.START, end: require(668) /* keys */.VerticalGradient.END };
  const tmp2 = importDefault(4554);
  const items2 = [require(3974) /* hexToRgb */.hexWithOpacity(color, 0.16), color];
  obj.colors = items2;
  items1[1] = callback2(tmp2, obj);
  obj.children = items1;
  return callback3(closure_20, obj);
}
({ StyleSheet: closure_6, View: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_16, MarketingURLs: closure_17, Routes: closure_18 } = ME);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { display: "flex", flex: 1, flexGrow: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subtitle = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, opacity: 0.8 };
_createForOfIteratorHelperLoose.onboardingTitle = { textAlign: "center" };
let obj2 = { position: "absolute", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, display: "flex", justifyContent: "center", width: "100%", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.onboardingPolicy = obj2;
_createForOfIteratorHelperLoose.onboardingPolicyText = { textAlign: "center" };
_createForOfIteratorHelperLoose.landingOverlay = { position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center" };
_createForOfIteratorHelperLoose.artWrapper = { height: 350, position: "relative", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" };
let obj3 = { alignItems: "center", marginTop: -24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.landingBody = obj3;
_createForOfIteratorHelperLoose.backgroundImage = { position: "absolute", height: "50%", width: "100%", top: 0 };
_createForOfIteratorHelperLoose.backgroundColorGradient = { position: "absolute", height: "100%", width: "100%", top: 0 };
_createForOfIteratorHelperLoose.darkColorGradient = { position: "absolute", height: "100%", width: "100%", top: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_23 = { code: "function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let closure_24 = { code: "function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let closure_25 = { code: "function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
let closure_26 = { code: "function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
let closure_27 = { code: "function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, opacity: 0.8 };
let result = require("result").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompts.tsx");

export default function GuildOnboardingPrompt(guildId) {
  let backShouldLeaveGuild;
  let isFirstOpen;
  let onClose;
  let selectOption;
  guildId = guildId.guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  const prompts = guildId.prompts;
  ({ selectOption, onClose } = guildId);
  ({ isFirstOpen, backShouldLeaveGuild } = guildId);
  let stateFromStores;
  isFirstOpen = undefined;
  let navigation;
  let c10;
  let c11;
  let sharedValue;
  let callback;
  let stateFromStores2;
  let stateFromStoresArray;
  let c16;
  let constants;
  let closure_18;
  let guildSplashURL;
  let required;
  function handleOnPress() {
    if (!_undefined2) {
      if (c17) {
        navigation.push(stateFromStoresArray.COMPLETED);
      } else {
        let obj = currentPromptIdx(prompts[31]);
        obj = {};
        const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
        obj["step"] = currentPromptIdx;
        obj["options_selected"] = stateFromStoresArray.length;
        obj["skipped"] = 0 === stateFromStoresArray.length;
        obj["back"] = false;
        obj["in_onboarding"] = true;
        obj["is_final_step"] = false;
        obj.track(_undefined2.GUILD_ONBOARDING_STEP_COMPLETED, obj);
        if (currentPromptIdx < prompts.length - 1) {
          obj = {};
          const obj4 = currentPromptIdx(prompts[31]);
          const merged1 = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
          obj["step"] = currentPromptIdx + 1;
          obj["required"] = prompts[currentPromptIdx + 1].required;
          obj4.track(_undefined2.GUILD_ONBOARDING_STEP_VIEWED, obj);
          const obj6 = guildId(prompts[32]);
        }
        if (currentPromptIdx + 1 < prompts.length) {
          const obj1 = { currentPrompt: currentPromptIdx + 1 };
          navigation.push(stateFromStoresArray.PROMPT, obj1);
        } else {
          if (obj7.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
            navigation.push(stateFromStoresArray.RULES);
          }
          obj7 = guildId(prompts[28]);
        }
        const obj3 = guildId(prompts[32]);
      }
    }
  }
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(prompts[23]);
  let items = [navigation];
  stateFromStores = obj.useStateFromStores(items, () => navigation.getRulesPrompt(guildId));
  let obj1 = guildId(prompts[23]);
  const items1 = [isFirstOpen];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => isFirstOpen.useReducedMotion);
  let obj2 = guildId(prompts[23]);
  const items2 = [callback];
  const tmp4 = obj2.useStateFromStores(items2, () => callback.getOnboardingConnections(guildId)).length > 0;
  let closure_7 = tmp4;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp4;
  }
  let obj3 = guildId(prompts[25]);
  navigation = obj3.useNavigation();
  c10 = tmp6;
  c11 = tmp7;
  let obj4 = guildId(prompts[26]);
  sharedValue = obj4.useSharedValue(!isFirstOpen);
  const items3 = [guildId, prompts];
  callback = stateFromStores.useCallback(() => {
    currentPromptIdx(prompts[27]).completeOnboarding(guildId, prompts);
  }, items3);
  let obj5 = guildId(prompts[23]);
  const items4 = [c11];
  stateFromStores2 = obj5.useStateFromStores(items4, () => _undefined.getGuild(guildId));
  let obj6 = guildId(prompts[23]);
  const items5 = [callback];
  const items6 = [guildId, prompts[currentPromptIdx]];
  stateFromStoresArray = obj6.useStateFromStoresArray(items5, () => {
    if (null != _undefined) {
      let onboardingResponsesForPrompt = callback.getOnboardingResponsesForPrompt(guildId, _undefined.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items6);
  let tmp11 = 0 === stateFromStoresArray.length;
  if (tmp11) {
    required = undefined;
    if (null != tmp7) {
      required = tmp7.required;
    }
    tmp11 = required;
  }
  c16 = tmp11;
  let tmp14 = currentPromptIdx + 1 >= prompts.length;
  if (tmp14) {
    let obj7 = guildId(prompts[28]);
    tmp14 = !obj7.showRulesInOnboarding(stateFromStores2, stateFromStores);
  }
  constants = tmp14;
  const tmp17 = onClose(stateFromStores.useState(currentPromptIdx(prompts[17]).unsafe_rawColors.PRIMARY_800), 2);
  closure_18 = tmp17[1];
  guildSplashURL = null;
  if (null != stateFromStores2) {
    let obj8 = currentPromptIdx(prompts[29]);
    obj = {};
    ({ id: obj10.id, splash: obj10.splash } = stateFromStores2);
    obj.size = 400 * currentPromptIdx(prompts[30])();
    guildSplashURL = obj8.getGuildSplashURL(obj);
  }
  const items7 = [guildSplashURL];
  const effect = stateFromStores.useEffect(() => {
    if (null != guildSplashURL) {
      (function getBackgroundGradientColor(guildSplashURL) {
        return outer2_28(...arguments);
      })(guildSplashURL).then((arg0) => {
        outer1_18(arg0);
      });
      const promise = (function getBackgroundGradientColor(guildSplashURL) {
        return outer2_28(...arguments);
      })(guildSplashURL);
    }
  }, items7);
  const items8 = [guildId, prompts.length > 0, stateFromStores, isFirstOpen];
  const effect1 = stateFromStores.useEffect(() => {
    if (isFirstOpen) {
      let obj = currentPromptIdx(prompts[31]);
      obj = {};
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj["step"] = -1;
      obj["required"] = true;
      obj.track(_undefined2.GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = guildId(prompts[32]);
      obj = {};
      const obj4 = currentPromptIdx(prompts[31]);
      const merged1 = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj["step"] = -1;
      obj["skipped"] = c10;
      obj["is_final_step"] = false;
      obj["in_onboarding"] = true;
      obj4.track(_undefined2.GUILD_ONBOARDING_STEP_COMPLETED, obj);
      const obj6 = guildId(prompts[32]);
    }
  }, items8);
  const items9 = [sharedValue, isFirstOpen, prompts.length > 0, tmp4, onClose, callback, guildId];
  const effect2 = stateFromStores.useEffect(() => {
    if (isFirstOpen) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (outer1_10) {
          const result = outer1_12.set(true);
        } else {
          outer1_3();
          outer1_13();
        }
      }, 2000);
    }
  }, items9);
  const items10 = [isFirstOpen, prompts.length > 0, onClose];
  const effect3 = stateFromStores.useEffect(() => {
    let tmp = isFirstOpen;
    if (!isFirstOpen) {
      tmp = c10;
    }
    if (!tmp) {
      onClose();
    }
  }, items10);
  required = tmp6;
  if (prompts.length > 0) {
    required = prompts[0].required;
  }
  const items11 = [guildId, required, currentPromptIdx];
  const effect4 = stateFromStores.useEffect(() => {
    if (0 === currentPromptIdx) {
      let obj = currentPromptIdx(prompts[31]);
      obj = {};
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj["step"] = 0;
      obj["required"] = required;
      obj.track(_undefined2.GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = guildId(prompts[32]);
    }
  }, items11);
  let obj10 = guildId(prompts[26]);
  function st() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = guildId(prompts[33]);
    obj = { duration: 300 };
    const Easing = guildId(prompts[26]).Easing;
    obj.easing = Easing.out(guildId(prompts[26]).Easing.ease);
    let num2 = 0;
    if (!stateFromStores1) {
      num2 = 0;
      if (sharedValue.get()) {
        num2 = -80;
      }
    }
    obj = { opacity: obj.withTiming(num, obj) };
    const obj1 = {};
    const withTimingResult = obj.withTiming(num, obj);
    const obj2 = { duration: 300 };
    const Easing2 = guildId(prompts[26]).Easing;
    obj2.easing = Easing2.out(guildId(prompts[26]).Easing.ease);
    obj1.translateY = guildId(prompts[33]).withTiming(num2, obj2);
    const items = [obj1];
    obj.transform = items;
    return obj;
  }
  obj = { showPrompts: sharedValue, withTiming: guildId(prompts[33]).withTiming, Easing: guildId(prompts[26]).Easing, useReducedMotion: stateFromStores1 };
  st.__closure = obj;
  st.__workletHash = 6820086589932;
  st.__initData = closure_23;
  const animatedStyle = obj10.useAnimatedStyle(st);
  let obj12 = guildId(prompts[26]);
  function rt() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = guildId(prompts[26]);
    let obj1 = guildId(prompts[33]);
    obj = { duration: 300 };
    const Easing = guildId(prompts[26]).Easing;
    obj.easing = Easing.out(guildId(prompts[26]).Easing.ease);
    let num2 = 0;
    if (!stateFromStores1) {
      num2 = 0;
      if (sharedValue.get()) {
        num2 = -80;
      }
    }
    obj = { opacity: obj.withDelay(200, obj1.withTiming(num, obj)) };
    obj1 = {};
    const withDelayResult = obj.withDelay(200, obj1.withTiming(num, obj));
    const obj6 = guildId(prompts[26]);
    const obj2 = { duration: 300 };
    const Easing2 = guildId(prompts[26]).Easing;
    obj2.easing = Easing2.out(guildId(prompts[26]).Easing.ease);
    obj1.translateY = obj6.withDelay(200, guildId(prompts[33]).withTiming(num2, obj2));
    const items = [obj1];
    obj.transform = items;
    return obj;
  }
  obj1 = { showPrompts: sharedValue, withDelay: guildId(prompts[26]).withDelay, withTiming: guildId(prompts[33]).withTiming, Easing: guildId(prompts[26]).Easing, useReducedMotion: stateFromStores1 };
  rt.__closure = obj1;
  rt.__workletHash = 3034833873876;
  rt.__initData = closure_24;
  const animatedStyle1 = obj12.useAnimatedStyle(rt);
  let obj14 = guildId(prompts[26]);
  function lt() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = {};
    const obj2 = guildId(prompts[26]);
    obj = { duration: 300 };
    const Easing = guildId(prompts[26]).Easing;
    obj.easing = Easing.out(guildId(prompts[26]).Easing.ease);
    obj.opacity = obj2.withDelay(200, guildId(prompts[33]).withTiming(num, obj));
    return obj;
  }
  obj2 = { showPrompts: sharedValue, withDelay: guildId(prompts[26]).withDelay, withTiming: guildId(prompts[33]).withTiming, Easing: guildId(prompts[26]).Easing };
  lt.__closure = obj2;
  lt.__workletHash = 2795589385440;
  lt.__initData = closure_25;
  const animatedStyle2 = obj14.useAnimatedStyle(lt);
  let obj16 = guildId(prompts[26]);
  function ct() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = {};
    const obj2 = guildId(prompts[26]);
    obj = { duration: 300 };
    const Easing = guildId(prompts[26]).Easing;
    obj.easing = Easing.out(guildId(prompts[26]).Easing.ease);
    obj.opacity = obj2.withDelay(200, guildId(prompts[33]).withTiming(num, obj));
    return obj;
  }
  obj3 = { showPrompts: sharedValue, withDelay: guildId(prompts[26]).withDelay, withTiming: guildId(prompts[33]).withTiming, Easing: guildId(prompts[26]).Easing };
  ct.__closure = obj3;
  ct.__workletHash = 13481450530727;
  ct.__initData = closure_26;
  const animatedStyle3 = obj16.useAnimatedStyle(ct);
  let obj18 = guildId(prompts[26]);
  function dt() {
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    let obj = guildId(prompts[26]);
    let obj1 = guildId(prompts[33]);
    obj = { duration: 300 };
    const Easing = guildId(prompts[26]).Easing;
    obj.easing = Easing.out(guildId(prompts[26]).Easing.ease);
    if (stateFromStores1) {
      let num2 = 0;
    } else {
      num2 = 80;
    }
    obj = { opacity: obj.withDelay(600, obj1.withTiming(num, obj)) };
    obj1 = {};
    const withDelayResult = obj.withDelay(600, obj1.withTiming(num, obj));
    const obj6 = guildId(prompts[26]);
    const obj2 = { duration: 300 };
    const Easing2 = guildId(prompts[26]).Easing;
    obj2.easing = Easing2.out(guildId(prompts[26]).Easing.ease);
    obj1.translateY = obj6.withDelay(600, guildId(prompts[33]).withTiming(num2, obj2));
    const items = [obj1];
    obj.transform = items;
    return obj;
  }
  obj4 = { showPrompts: sharedValue, withDelay: guildId(prompts[26]).withDelay, withTiming: guildId(prompts[33]).withTiming, Easing: guildId(prompts[26]).Easing, useReducedMotion: stateFromStores1 };
  dt.__closure = obj4;
  dt.__workletHash = 14018549800735;
  dt.__initData = closure_27;
  const items12 = [navigation, currentPromptIdx, stateFromStoresArray, guildId, prompts, onClose, backShouldLeaveGuild, tmp4];
  const animatedStyle4 = obj18.useAnimatedStyle(dt);
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    if (0 === currentPromptIdx) {
      if (!closure_7) {
        let obj = guildId(prompts[34]);
        obj = {};
        obj.headerLeft = obj.getHeaderCloseButton(() => {
          let obj = currentPromptIdx(prompts[31]);
          obj = {};
          const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(outer1_0));
          obj["step"] = 0;
          obj["skipped"] = true;
          obj["back"] = false;
          obj["options_selected"] = 0;
          obj["in_onboarding"] = true;
          obj["is_final_step"] = false;
          obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
          if (outer1_4) {
            let tmp6 = outer1_3;
            channel = channel.getChannel(sharedValue.getLastSelectedChannelId());
            if (null == channel) {
              obj = { navigationReplace: true };
              guildId(prompts[14]).transitionTo(closure_18.ME, obj);
              tmp6 = tmp6();
              const obj4 = guildId(prompts[14]);
            }
            channel = guildId(prompts[14]).transitionTo(closure_18.CHANNEL(channel.guild_id, channel.id));
            const obj6 = guildId(prompts[14]);
            const tmp5 = outer1_0;
          } else {
            outer1_3();
          }
        });
        navigation.setOptions(obj);
      }
    }
    if (0 !== currentPromptIdx) {
      let headerBackButton = guildId(prompts[34]).getHeaderBackButton(() => {
        let obj = currentPromptIdx(prompts[31]);
        obj = {};
        const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(outer1_0));
        obj["step"] = outer1_1;
        obj["skipped"] = false;
        obj["back"] = true;
        obj["options_selected"] = outer1_15.length;
        obj["in_onboarding"] = true;
        obj["is_final_step"] = false;
        obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
        const obj3 = guildId(prompts[32]);
        obj = {};
        const obj4 = currentPromptIdx(prompts[31]);
        const merged1 = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(outer1_0));
        obj["step"] = outer1_1 - 1;
        obj["required"] = outer1_2[outer1_1 - 1].required;
        obj4.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
        outer1_9.pop();
      }, true);
      const obj2 = guildId(prompts[34]);
    }
    headerBackButton = guildId(prompts[34]).getHeaderBackButton(() => {
      let obj = currentPromptIdx(prompts[31]);
      obj = {};
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(outer1_0));
      obj["step"] = 0;
      obj["skipped"] = false;
      obj["back"] = true;
      obj["options_selected"] = outer1_15.length;
      obj["in_onboarding"] = true;
      obj["is_final_step"] = false;
      obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
      outer1_9.pop();
    }, true);
  }, items12);
  obj5 = { style: tmp.flex };
  obj6 = { top: true, bottom: true };
  const items13 = [, ];
  ({ flex: arr16[0], container: arr16[1] } = tmp);
  obj6.style = items13;
  obj7 = { style: items14 };
  items14 = [tmp.flex, animatedStyle4];
  let tmp38 = null;
  if (prompts.length > 0) {
    tmp38 = null;
    if (null != tmp7) {
      const type = tmp7.type;
      if (stateFromStores2.MULTIPLE_CHOICE === type) {
        obj8 = { guildId, currentPrompt: tmp7, lastPrompt: tmp14, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp38 = guildSplashURL(guildId(prompts[36]).MultipleChoicePrompt, obj8);
      } else if (stateFromStores2.DROPDOWN === type) {
        const obj9 = { guildId, currentPrompt: tmp7, lastPrompt: tmp14, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp38 = guildSplashURL(guildId(prompts[36]).DropdownPrompt, obj9);
      } else {
        let obj23 = guildId(prompts[37]);
        obj23.assertNever(tmp7.type);
      }
    }
  }
  obj7.children = tmp38;
  obj6.children = guildSplashURL(currentPromptIdx(prompts[26]).View, obj7);
  const items15 = [guildSplashURL(guildId(prompts[35]).SafeAreaPaddingView, obj6), ];
  obj10 = { style: stateFromStores1.absoluteFill, pointerEvents: "none" };
  const obj11 = { style: items16, pointerEvents: "none" };
  items16 = [, ];
  ({ flex: arr19[0], landingOverlay: arr19[1] } = tmp);
  obj12 = { style: items17 };
  items17 = [tmp.landingOverlay, animatedStyle3];
  let tmp52 = null;
  if (null != guildSplashURL) {
    const obj13 = { splashUrl: guildSplashURL, color: tmp17[0] };
    tmp52 = guildSplashURL(BackgroundImageGradient, obj13);
  }
  const items18 = [tmp52, ];
  obj14 = { style: tmp.darkColorGradient, start: guildId(prompts[22]).VerticalGradient.START, end: guildId(prompts[22]).VerticalGradient.END };
  const tmp33 = closure_21;
  const tmp35 = guildSplashURL;
  const tmp36 = guildSplashURL;
  const tmp49 = closure_21;
  const tmp50 = closure_21;
  const tmp51 = closure_21;
  const tmp55 = currentPromptIdx(prompts[21]);
  const items19 = [guildId(prompts[19]).hexWithOpacity(currentPromptIdx(prompts[17]).unsafe_rawColors.PRIMARY_800, 0.5), currentPromptIdx(prompts[17]).unsafe_rawColors.PRIMARY_800];
  obj14.colors = items19;
  items18[1] = guildSplashURL(tmp55, obj14);
  obj12.children = items18;
  const items20 = [tmp51(currentPromptIdx(prompts[26]).View, obj12), , ];
  const obj15 = { style: items21 };
  items21 = [tmp.artWrapper, animatedStyle];
  obj16 = { source: guildId.landingAnimation, autoPlay: !stateFromStores1, style: { width: "100%" } };
  obj15.children = guildSplashURL(currentPromptIdx(prompts[38]), obj16);
  items20[1] = guildSplashURL(currentPromptIdx(prompts[26]).View, obj15);
  const obj17 = { style: items22 };
  items22 = [tmp.landingBody, animatedStyle1];
  obj18 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light" };
  const intl = guildId(prompts[40]).intl;
  const obj19 = {};
  let name;
  if (null != stateFromStores2) {
    name = stateFromStores2.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj19.guildName = str;
  obj18.children = intl.format(guildId(prompts[40]).t.O2bQlD, obj19);
  const items23 = [guildSplashURL(guildId(prompts[39]).Text, obj18), ];
  const obj20 = { style: tmp.onboardingTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "text-overlay-light" };
  const intl2 = guildId(prompts[40]).intl;
  obj20.children = intl2.string(guildId(prompts[40]).t["Alcl/e"]);
  items23[1] = guildSplashURL(guildId(prompts[39]).Text, obj20);
  obj17.children = items23;
  items20[2] = closure_21(currentPromptIdx(prompts[26]).View, obj17);
  obj11.children = items20;
  const items24 = [tmp50(currentPromptIdx(prompts[26]).View, obj11), ];
  const obj21 = { style: items25, pointerEvents: "auto" };
  items25 = [tmp.onboardingPolicy, animatedStyle2, { bottom: currentPromptIdx(prompts[24])().bottom }];
  const obj22 = { style: tmp.onboardingPolicyText, variant: "heading-sm/normal", color: "text-default" };
  const intl3 = guildId(prompts[40]).intl;
  obj23 = { privacyLink: constants.PRIVACY };
  obj22.children = intl3.format(guildId(prompts[40]).t.kI6UoD, obj23);
  obj21.children = guildSplashURL(guildId(prompts[39]).Text, obj22);
  items24[1] = guildSplashURL(currentPromptIdx(prompts[26]).View, obj21);
  obj10.children = items24;
  items15[1] = tmp49(closure_7, obj10);
  obj5.children = items15;
  return tmp33(closure_7, obj5);
};
