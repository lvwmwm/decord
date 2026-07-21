// Module ID: 5354
// Function ID: 45806
// Name: _getBackgroundGradientColor
// Dependencies: []
// Exports: default

// Module 5354 (_getBackgroundGradientColor)
async function _getBackgroundGradientColor(emojiURL, arg1) {
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = callback(closure_2[18]);
  [tmp2, tmp3, tmp4] = callback2(yield callback(closure_2[18]).getPaletteForAvatar(emojiURL)[0], 3);
  const tmp = callback2(yield callback(closure_2[18]).getPaletteForAvatar(emojiURL)[0], 3);
  return callback(closure_2[19]).rgbToHex(tmp2, tmp3, tmp4);
}
function BackgroundImageGradient(uri) {
  const color = uri.color;
  const tmp = callback5();
  let obj = {};
  const items = [tmp.backgroundImage];
  const items1 = [callback3(importDefault(dependencyMap[20]), { source: { uri: uri.splashUrl }, style: items, resizeMode: "cover" }), ];
  obj = { style: tmp.backgroundColorGradient, start: arg1(dependencyMap[22]).VerticalGradient.START, end: arg1(dependencyMap[22]).VerticalGradient.END };
  const tmp2 = importDefault(dependencyMap[21]);
  const items2 = [arg1(dependencyMap[19]).hexWithOpacity(color, 0.16), color];
  obj.colors = items2;
  items1[1] = callback3(tmp2, obj);
  obj.children = items1;
  return callback4(closure_20, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ StyleSheet: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const OnboardingPromptType = arg1(dependencyMap[10]).OnboardingPromptType;
let closure_15 = arg1(dependencyMap[11]).GuildOnboardingModalStates;
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_16, MarketingURLs: closure_17, Routes: closure_18 } = arg1(dependencyMap[12]));
const tmp3 = arg1(dependencyMap[12]);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = arg1(dependencyMap[13]));
let obj = arg1(dependencyMap[15]);
obj = { flex: { flex: 1 } };
obj = { marginTop: arg1(dependencyMap[16]).NAV_BAR_HEIGHT, marginBottom: importDefault(dependencyMap[17]).space.PX_16, backgroundColor: importDefault(dependencyMap[17]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
const tmp4 = arg1(dependencyMap[13]);
obj.subtitle = { marginBottom: importDefault(dependencyMap[17]).space.PX_16, opacity: 0.8 };
obj.onboardingTitle = { textAlign: "center" };
const obj1 = { marginBottom: importDefault(dependencyMap[17]).space.PX_16, opacity: 0.8 };
obj.onboardingPolicy = { paddingHorizontal: importDefault(dependencyMap[17]).space.PX_16, marginBottom: importDefault(dependencyMap[17]).space.PX_16 };
obj.onboardingPolicyText = { textAlign: "center" };
obj.landingOverlay = {};
obj.artWrapper = {};
const obj2 = { paddingHorizontal: importDefault(dependencyMap[17]).space.PX_16, marginBottom: importDefault(dependencyMap[17]).space.PX_16 };
obj.landingBody = { paddingHorizontal: importDefault(dependencyMap[17]).space.PX_16 };
obj.backgroundImage = { renderMode: 1627390377, sourceName: 1379557817, sourceJson: 1166868933, sourceURL: 487682 };
obj.backgroundColorGradient = { renderMode: null, sourceName: null, sourceJson: null, sourceURL: null };
obj.darkColorGradient = { renderMode: null, sourceName: null, sourceJson: null, sourceURL: null };
let closure_22 = obj.createStyles(obj);
let closure_23 = { code: "function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let closure_24 = { code: "function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
let closure_25 = { code: "function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
let closure_26 = { code: "function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}" };
let closure_27 = { code: "function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}" };
const obj3 = { paddingHorizontal: importDefault(dependencyMap[17]).space.PX_16 };
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompts.tsx");

export default function GuildOnboardingPrompt(guildId) {
  let backShouldLeaveGuild;
  let isFirstOpen;
  let onClose;
  let selectOption;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  const importDefault = currentPromptIdx;
  const prompts = guildId.prompts;
  const dependencyMap = prompts;
  ({ selectOption, onClose } = guildId);
  let callback = onClose;
  ({ isFirstOpen, backShouldLeaveGuild } = guildId);
  let closure_4 = backShouldLeaveGuild;
  let React;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let OnboardingPromptType;
  let closure_15;
  let tmp11;
  let tmp14;
  let closure_18;
  let guildSplashURL;
  let required;
  function handleOnPress() {
    if (!tmp11) {
      if (tmp14) {
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
        obj.track(stateFromStoresArray.GUILD_ONBOARDING_STEP_COMPLETED, obj);
        if (currentPromptIdx < prompts.length - 1) {
          obj = {};
          const obj4 = currentPromptIdx(prompts[31]);
          const merged1 = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
          obj["step"] = currentPromptIdx + 1;
          obj["required"] = prompts[closure_1 + 1].required;
          obj4.track(tmp11.GUILD_ONBOARDING_STEP_VIEWED, obj);
          const obj6 = guildId(prompts[32]);
        }
        if (currentPromptIdx + 1 < prompts.length) {
          const obj1 = { currentPrompt: currentPromptIdx + 1 };
          navigation.push(stateFromStoresArray.PROMPT, obj1);
        } else {
          if (obj7.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
            navigation.push(stateFromStoresArray.RULES);
          }
          const obj7 = guildId(prompts[28]);
        }
        const obj3 = guildId(prompts[32]);
      }
    }
  }
  const tmp = callback5();
  let obj = arg1(dependencyMap[23]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => navigation.getRulesPrompt(guildId));
  React = stateFromStores;
  let obj1 = arg1(dependencyMap[23]);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => isFirstOpen.useReducedMotion);
  let obj2 = arg1(dependencyMap[23]);
  const items2 = [closure_13];
  const tmp4 = obj2.useStateFromStores(items2, () => callback.getOnboardingConnections(guildId)).length > 0;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp4;
  }
  closure_8 = isFirstOpen;
  let obj3 = arg1(dependencyMap[25]);
  const navigation = obj3.useNavigation();
  closure_9 = navigation;
  closure_10 = tmp6;
  closure_11 = tmp7;
  let obj4 = arg1(dependencyMap[26]);
  const sharedValue = obj4.useSharedValue(!isFirstOpen);
  closure_12 = sharedValue;
  const items3 = [guildId, prompts];
  callback = React.useCallback(() => {
    currentPromptIdx(prompts[27]).completeOnboarding(guildId, prompts);
  }, items3);
  closure_13 = callback;
  let obj5 = arg1(dependencyMap[23]);
  const items4 = [closure_11];
  const stateFromStores2 = obj5.useStateFromStores(items4, () => tmp7.getGuild(guildId));
  OnboardingPromptType = stateFromStores2;
  let obj6 = arg1(dependencyMap[23]);
  const items5 = [closure_13];
  const items6 = [guildId, prompts[currentPromptIdx]];
  const stateFromStoresArray = obj6.useStateFromStoresArray(items5, () => {
    if (null != tmp7) {
      let onboardingResponsesForPrompt = callback.getOnboardingResponsesForPrompt(guildId, tmp7.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items6);
  closure_15 = stateFromStoresArray;
  tmp11 = 0 === stateFromStoresArray.length;
  if (tmp11) {
    required = undefined;
    if (null != tmp7) {
      required = tmp7.required;
    }
    tmp11 = required;
  }
  tmp14 = currentPromptIdx + 1 >= prompts.length;
  if (tmp14) {
    let obj7 = arg1(dependencyMap[28]);
    tmp14 = !obj7.showRulesInOnboarding(stateFromStores2, stateFromStores);
  }
  const tmp17 = callback(React.useState(importDefault(dependencyMap[17]).unsafe_rawColors.PRIMARY_800), 2);
  closure_18 = tmp17[1];
  guildSplashURL = null;
  if (null != stateFromStores2) {
    let obj8 = importDefault(dependencyMap[29]);
    obj = {};
    ({ id: obj10.id, splash: obj10.splash } = stateFromStores2);
    obj.size = 400 * importDefault(dependencyMap[30])();
    guildSplashURL = obj8.getGuildSplashURL(obj);
  }
  const items7 = [guildSplashURL];
  const effect = React.useEffect(() => {
    if (null != guildSplashURL) {
      function getBackgroundGradientColor(guildSplashURL) {
        return callback2(...arguments);
      }(guildSplashURL).then((arg0) => {
        callback(arg0);
      });
      const promise = function getBackgroundGradientColor(guildSplashURL) {
        return callback2(...arguments);
      }(guildSplashURL);
    }
  }, items7);
  const items8 = [guildId, prompts.length > 0, stateFromStores, isFirstOpen];
  const effect1 = React.useEffect(() => {
    if (isFirstOpen) {
      let obj = currentPromptIdx(prompts[31]);
      obj = {};
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj["step"] = -1;
      obj["required"] = true;
      obj.track(tmp11.GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = guildId(prompts[32]);
      obj = {};
      const obj4 = currentPromptIdx(prompts[31]);
      const merged1 = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj["step"] = -1;
      obj["skipped"] = obj;
      obj["is_final_step"] = false;
      obj["in_onboarding"] = true;
      obj4.track(obj.GUILD_ONBOARDING_STEP_COMPLETED, obj);
      const obj6 = guildId(prompts[32]);
    }
  }, items8);
  const items9 = [sharedValue, isFirstOpen, prompts.length > 0, tmp4, onClose, callback, guildId];
  const effect2 = React.useEffect(() => {
    if (isFirstOpen) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (closure_10) {
          const result = closure_12.set(true);
        } else {
          callback();
          callback2();
        }
      }, 2000);
    }
  }, items9);
  const items10 = [isFirstOpen, prompts.length > 0, onClose];
  const effect3 = React.useEffect(() => {
    let tmp = isFirstOpen;
    if (!isFirstOpen) {
      tmp = tmp6;
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
  const effect4 = React.useEffect(() => {
    if (0 === currentPromptIdx) {
      let obj = currentPromptIdx(prompts[31]);
      obj = {};
      const merged = Object.assign(guildId(prompts[32]).collectGuildAnalyticsMetadata(guildId));
      obj["step"] = 0;
      obj["required"] = required;
      obj.track(tmp11.GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = guildId(prompts[32]);
    }
  }, items11);
  let obj10 = arg1(dependencyMap[26]);
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
  obj = { showPrompts: sharedValue, withTiming: arg1(dependencyMap[33]).withTiming, Easing: arg1(dependencyMap[26]).Easing, useReducedMotion: stateFromStores1 };
  st.__closure = obj;
  st.__workletHash = 6820086589932;
  st.__initData = closure_23;
  const animatedStyle = obj10.useAnimatedStyle(st);
  let obj12 = arg1(dependencyMap[26]);
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
  obj1 = { showPrompts: sharedValue, withDelay: arg1(dependencyMap[26]).withDelay, withTiming: arg1(dependencyMap[33]).withTiming, Easing: arg1(dependencyMap[26]).Easing, useReducedMotion: stateFromStores1 };
  rt.__closure = obj1;
  rt.__workletHash = 3034833873876;
  rt.__initData = closure_24;
  const animatedStyle1 = obj12.useAnimatedStyle(rt);
  let obj14 = arg1(dependencyMap[26]);
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
  obj2 = { showPrompts: sharedValue, withDelay: arg1(dependencyMap[26]).withDelay, withTiming: arg1(dependencyMap[33]).withTiming, Easing: arg1(dependencyMap[26]).Easing };
  lt.__closure = obj2;
  lt.__workletHash = 2795589385440;
  lt.__initData = closure_25;
  const animatedStyle2 = obj14.useAnimatedStyle(lt);
  let obj16 = arg1(dependencyMap[26]);
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
  obj3 = { showPrompts: sharedValue, withDelay: arg1(dependencyMap[26]).withDelay, withTiming: arg1(dependencyMap[33]).withTiming, Easing: arg1(dependencyMap[26]).Easing };
  ct.__closure = obj3;
  ct.__workletHash = 13481450530727;
  ct.__initData = closure_26;
  const animatedStyle3 = obj16.useAnimatedStyle(ct);
  let obj18 = arg1(dependencyMap[26]);
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
  obj4 = { showPrompts: sharedValue, withDelay: arg1(dependencyMap[26]).withDelay, withTiming: arg1(dependencyMap[33]).withTiming, Easing: arg1(dependencyMap[26]).Easing, useReducedMotion: stateFromStores1 };
  dt.__closure = obj4;
  dt.__workletHash = 14018549800735;
  dt.__initData = closure_27;
  const items12 = [navigation, currentPromptIdx, stateFromStoresArray, guildId, prompts, onClose, backShouldLeaveGuild, tmp4];
  const animatedStyle4 = obj18.useAnimatedStyle(dt);
  const layoutEffect = React.useLayoutEffect(() => {
    if (0 === currentPromptIdx) {
      if (!tmp4) {
        let obj = guildId(prompts[34]);
        obj = {};
        obj.headerLeft = obj.getHeaderCloseButton(() => {
          let obj = callback2(closure_2[31]);
          obj = {};
          const merged = Object.assign(callback(closure_2[32]).collectGuildAnalyticsMetadata(callback));
          obj["step"] = 0;
          obj["skipped"] = true;
          obj["back"] = false;
          obj["options_selected"] = 0;
          obj["in_onboarding"] = true;
          obj["is_final_step"] = false;
          obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
          if (closure_4) {
            let tmp6 = callback3;
            let channel = channel.getChannel(lastSelectedChannelId.getLastSelectedChannelId());
            if (null == channel) {
              obj = { navigationReplace: true };
              callback(closure_2[14]).transitionTo(closure_18.ME, obj);
              tmp6 = tmp6();
              const obj4 = callback(closure_2[14]);
            }
            channel = callback(closure_2[14]).transitionTo(closure_18.CHANNEL(channel.guild_id, channel.id));
            const obj6 = callback(closure_2[14]);
            const tmp5 = callback;
          } else {
            callback3();
          }
        });
        navigation.setOptions(obj);
      }
    }
    if (0 !== currentPromptIdx) {
      let headerBackButton = guildId(prompts[34]).getHeaderBackButton(() => {
        let obj = callback2(closure_2[31]);
        obj = {};
        const merged = Object.assign(callback(closure_2[32]).collectGuildAnalyticsMetadata(callback));
        obj["step"] = callback2;
        obj["skipped"] = false;
        obj["back"] = true;
        obj["options_selected"] = closure_15.length;
        obj["in_onboarding"] = true;
        obj["is_final_step"] = false;
        obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
        const obj3 = callback(closure_2[32]);
        obj = {};
        const obj4 = callback2(closure_2[31]);
        const merged1 = Object.assign(callback(closure_2[32]).collectGuildAnalyticsMetadata(callback));
        obj["step"] = callback2 - 1;
        obj["required"] = closure_2[closure_1 - 1].required;
        obj4.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
        const obj6 = callback(closure_2[32]);
      }, true);
      const obj2 = guildId(prompts[34]);
    }
    headerBackButton = guildId(prompts[34]).getHeaderBackButton(() => {
      let obj = callback2(closure_2[31]);
      obj = {};
      const merged = Object.assign(callback(closure_2[32]).collectGuildAnalyticsMetadata(callback));
      obj["step"] = 0;
      obj["skipped"] = false;
      obj["back"] = true;
      obj["options_selected"] = closure_15.length;
      obj["in_onboarding"] = true;
      obj["is_final_step"] = false;
      obj.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
      const obj3 = callback(closure_2[32]);
    }, true);
  }, items12);
  obj5 = { style: tmp.flex };
  obj6 = { <string:2958189153>: null, <string:1661207664>: null };
  const items13 = [, ];
  ({ flex: arr16[0], container: arr16[1] } = tmp);
  obj6.style = items13;
  obj7 = { style: items14 };
  const items14 = [tmp.flex, animatedStyle4];
  let tmp38 = null;
  if (prompts.length > 0) {
    tmp38 = null;
    if (null != tmp7) {
      const type = tmp7.type;
      if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
        obj8 = { guildId, currentPrompt: tmp7, lastPrompt: tmp14, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp38 = guildSplashURL(arg1(dependencyMap[36]).MultipleChoicePrompt, obj8);
      } else if (OnboardingPromptType.DROPDOWN === type) {
        const obj9 = { guildId, currentPrompt: tmp7, lastPrompt: tmp14, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp38 = guildSplashURL(arg1(dependencyMap[36]).DropdownPrompt, obj9);
      } else {
        let obj23 = arg1(dependencyMap[37]);
        obj23.assertNever(tmp7.type);
      }
    }
  }
  obj7.children = tmp38;
  obj6.children = guildSplashURL(importDefault(dependencyMap[26]).View, obj7);
  const items15 = [guildSplashURL(arg1(dependencyMap[35]).SafeAreaPaddingView, obj6), ];
  obj10 = { style: stateFromStores1.absoluteFill, pointerEvents: "none" };
  const obj11 = { style: items16, pointerEvents: "none" };
  const items16 = [, ];
  ({ flex: arr19[0], landingOverlay: arr19[1] } = tmp);
  obj12 = { style: items17 };
  const items17 = [tmp.landingOverlay, animatedStyle3];
  let tmp52 = null;
  if (null != guildSplashURL) {
    const obj13 = { splashUrl: guildSplashURL, color: tmp17[0] };
    tmp52 = guildSplashURL(BackgroundImageGradient, obj13);
  }
  const items18 = [tmp52, ];
  obj14 = { style: tmp.darkColorGradient, start: arg1(dependencyMap[22]).VerticalGradient.START, end: arg1(dependencyMap[22]).VerticalGradient.END };
  const tmp33 = closure_21;
  const tmp35 = guildSplashURL;
  const tmp36 = guildSplashURL;
  const tmp49 = closure_21;
  const tmp50 = closure_21;
  const tmp51 = closure_21;
  const tmp55 = importDefault(dependencyMap[21]);
  const items19 = [arg1(dependencyMap[19]).hexWithOpacity(importDefault(dependencyMap[17]).unsafe_rawColors.PRIMARY_800, 0.5), importDefault(dependencyMap[17]).unsafe_rawColors.PRIMARY_800];
  obj14.colors = items19;
  items18[1] = guildSplashURL(tmp55, obj14);
  obj12.children = items18;
  const items20 = [tmp51(importDefault(dependencyMap[26]).View, obj12), , ];
  const obj15 = { style: items21 };
  const items21 = [tmp.artWrapper, animatedStyle];
  obj16 = { source: guildId.landingAnimation, autoPlay: !stateFromStores1, style: { width: "100%" } };
  obj15.children = guildSplashURL(importDefault(dependencyMap[38]), obj16);
  items20[1] = guildSplashURL(importDefault(dependencyMap[26]).View, obj15);
  const obj17 = { style: items22 };
  const items22 = [tmp.landingBody, animatedStyle1];
  obj18 = { "Null": false, "Null": false, "Null": false, style: tmp.subtitle };
  const intl = arg1(dependencyMap[40]).intl;
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
  obj18.children = intl.format(arg1(dependencyMap[40]).t.O2bQlD, obj19);
  const items23 = [guildSplashURL(arg1(dependencyMap[39]).Text, obj18), ];
  const obj20 = { 1501064855: "Array", -1267889981: "firstVisibleItemKey", -1145697943: "Array", -1266241916: "gradientTop", style: tmp.onboardingTitle };
  const intl2 = arg1(dependencyMap[40]).intl;
  obj20.children = intl2.string(arg1(dependencyMap[40]).t.Alcl/e);
  items23[1] = guildSplashURL(arg1(dependencyMap[39]).Text, obj20);
  obj17.children = items23;
  items20[2] = closure_21(importDefault(dependencyMap[26]).View, obj17);
  obj11.children = items20;
  const items24 = [tmp50(importDefault(dependencyMap[26]).View, obj11), ];
  const obj21 = { style: items25, pointerEvents: "auto" };
  const items25 = [tmp.onboardingPolicy, animatedStyle2, { bottom: importDefault(dependencyMap[24])().bottom }];
  const obj22 = { "Null": "/assets/../node_modules/.pnpm/@react-navigation+elements@1.3.30_pai5gyheycjh643xsf3bglag4a/node_modules/@react-navigation/elements/src/assets", "Null": 50, "Null": 85, style: tmp.onboardingPolicyText };
  const intl3 = arg1(dependencyMap[40]).intl;
  obj23 = { privacyLink: tmp14.PRIVACY };
  obj22.children = intl3.format(arg1(dependencyMap[40]).t.kI6UoD, obj23);
  obj21.children = guildSplashURL(arg1(dependencyMap[41]).TextWithIOSLinkWorkaround, obj22);
  items24[1] = guildSplashURL(importDefault(dependencyMap[26]).View, obj21);
  obj10.children = items24;
  items15[1] = tmp49(tmp4, obj10);
  obj5.children = items15;
  return tmp33(tmp4, obj5);
};
