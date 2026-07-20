// Module ID: 11659
// Function ID: 90416
// Name: useDerivedColors
// Dependencies: []

// Module 11659 (useDerivedColors)
function useDerivedColors(voiceMessageAnimationState, BRAND_600, RED_500, BRAND_6002, BRAND_6003) {
  BRAND_600 = voiceMessageAnimationState;
  const importDefault = BRAND_600;
  const dependencyMap = RED_500;
  let closure_3 = BRAND_6002;
  let obj = BRAND_600(dependencyMap[11]);
  const fn = function u() {
    let obj = arg0(arg2[25]);
    obj = { easing: arg0(arg2[11]).Easing.linear, duration: 150 };
    return obj.withTiming(arg0.get()[1], obj);
  };
  obj = { voiceMessageAnimationState, withTiming: BRAND_600(dependencyMap[25]).withTiming, Easing: BRAND_600(dependencyMap[11]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 7432526131204;
  fn.__initData = closure_34;
  const derivedValue = obj.useDerivedValue(fn);
  const fn2 = function _() {
    const tmp = arg3(arg0.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [arg1, arg1, arg3, arg4];
      let items1 = items;
    } else {
      items1 = [arg1, arg2, arg3, arg4];
    }
    return arg0(arg2[11]).interpolateColor(derivedValue.get(), closure_25, items1);
  };
  obj = { voiceMessageAnimationState, sendingColor: BRAND_600, lockingColor: BRAND_6002, lockedColor: BRAND_6003, cancelingColor: RED_500, interpolateColor: BRAND_600(dependencyMap[11]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__closure = obj;
  fn2.__workletHash = 8474040050475;
  fn2.__initData = closure_35;
  return BRAND_600(dependencyMap[11]).useDerivedValue(fn2);
}
function LockPill(safeAreaBottom) {
  let chevonStyle;
  let lockContainerStyle;
  let lockIconStyle;
  let lockParentContainerStyle;
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  const arg1 = safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  const importDefault = initialAnimation;
  const voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  const dependencyMap = voiceMessageAnimationState;
  let obj = arg1(dependencyMap[21]);
  const tmp2 = callback5(obj.useToken(importDefault(dependencyMap[18]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const tmp3 = callback(importAllResult.useState(false), 2);
  const callback = tmp4;
  let obj1 = arg1(dependencyMap[11]);
  const fn = function u() {
    let tmp = voiceMessageAnimationState.get()[1] === constants.LOCKED;
    if (!tmp) {
      tmp = voiceMessageAnimationState.get()[1] === constants.LOCKING;
    }
    return tmp;
  };
  obj = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__closure = obj;
  fn.__workletHash = 16672558304670;
  fn.__initData = closure_42;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      const tmp4 = safeAreaBottom(voiceMessageAnimationState[11]).runOnJS(tmp4)(arg0);
      const obj = safeAreaBottom(voiceMessageAnimationState[11]);
    }
  };
  obj = { runOnJS: arg1(dependencyMap[11]).runOnJS, setLocked: tmp4 };
  fn2.__closure = obj;
  fn2.__workletHash = 10857258354778;
  fn2.__initData = closure_43;
  const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
  ({ lockParentContainerStyle, lockContainerStyle, lockIconStyle, chevonStyle } = function useLockStyles(voiceMessageAnimationState) {
    const safeAreaBottom = voiceMessageAnimationState;
    const tmp = initialAnimation(voiceMessageAnimationState[26])();
    let obj = safeAreaBottom(voiceMessageAnimationState[21]);
    let token = obj.useToken(initialAnimation(voiceMessageAnimationState[18]).colors.BACKGROUND_BASE_LOWEST);
    const WHITE = initialAnimation(voiceMessageAnimationState[18]).unsafe_rawColors.WHITE;
    let obj1 = safeAreaBottom(voiceMessageAnimationState[27]);
    let tmp4 = token;
    if (obj1.isThemeLight(tmp)) {
      tmp4 = WHITE;
    }
    let obj2 = safeAreaBottom(voiceMessageAnimationState[27]);
    if (obj2.isThemeLight(tmp)) {
      token = WHITE;
    }
    const tmp3Result = callback(voiceMessageAnimationState, tmp4, token, WHITE, WHITE);
    const initialAnimation = tmp3Result;
    let obj3 = safeAreaBottom(voiceMessageAnimationState[21]);
    let obj4 = safeAreaBottom(voiceMessageAnimationState[27]);
    const colors = initialAnimation(voiceMessageAnimationState[18]).colors;
    const token1 = obj3.useToken(obj4.isThemeLight(tmp) ? colors.INTERACTIVE_TEXT_DEFAULT : colors.INTERACTIVE_TEXT_ACTIVE);
    let obj5 = safeAreaBottom(voiceMessageAnimationState[21]);
    const token2 = obj5.useToken(initialAnimation(voiceMessageAnimationState[18]).colors.STATUS_POSITIVE);
    const tmp9 = callback(voiceMessageAnimationState, token1, token1, token2, token2);
    voiceMessageAnimationState = tmp9;
    const isThemeLightResult = obj4.isThemeLight(tmp);
    const tmp3 = callback;
    const fn = function n() {
      let obj = arg0(tmp9[25]);
      obj = { easing: arg0(tmp9[11]).Easing.linear, duration: 150 };
      return obj.withTiming(arg0.get()[1], obj);
    };
    obj = { voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[25]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[11]).Easing };
    fn.__closure = obj;
    fn.__workletHash = 11385805572554;
    fn.__initData = closure_36;
    const derivedValue = safeAreaBottom(voiceMessageAnimationState[11]).useDerivedValue(fn);
    tmp4 = derivedValue;
    const obj7 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn2 = function s() {
      const tmp = derivedValue(arg0.get(), 2);
      return arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, tmp[0] + tmp[1] === 2 ? [] : ["nedadvendt pil mod h\u00F8jre", "pil", "retning", "syd\u00F8st"]);
    };
    obj = { voiceMessageAnimationState, interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25 };
    fn2.__closure = obj;
    fn2.__workletHash = 13564673991122;
    fn2.__initData = closure_37;
    const derivedValue1 = safeAreaBottom(voiceMessageAnimationState[11]).useDerivedValue(fn2);
    obj1 = {};
    const obj9 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn3 = function l() {
      const obj = { height: arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []) };
      return obj;
    };
    obj2 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25 };
    fn3.__closure = obj2;
    fn3.__workletHash = 16239675884614;
    fn3.__initData = closure_38;
    obj1.lockParentContainerStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn3);
    const obj12 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn4 = function c() {
      const obj = { width: arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []) };
      const obj2 = arg0(tmp9[11]);
      obj.height = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []);
      obj.opacity = derivedValue1.get();
      obj.backgroundColor = tmp3Result.get();
      const obj3 = arg0(tmp9[11]);
      const items = [1390895572, -255068174, -8, -8];
      obj.marginHorizontal = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, items);
      const obj4 = arg0(tmp9[11]);
      obj.marginBottom = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []);
      return obj;
    };
    obj3 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp3Result };
    fn4.__closure = obj3;
    fn4.__workletHash = 16191961901595;
    fn4.__initData = closure_39;
    obj1.lockContainerStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn4);
    const obj14 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn5 = function u() {
      const obj = { width: arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []) };
      const obj2 = arg0(tmp9[11]);
      obj.height = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []);
      const obj3 = arg0(tmp9[11]);
      obj.marginTop = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []);
      obj.tintColor = tmp9.get();
      return obj;
    };
    obj4 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25, lockIconColor: tmp9 };
    fn5.__closure = obj4;
    fn5.__workletHash = 10256653077678;
    fn5.__initData = closure_40;
    obj1.lockIconStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn5);
    const obj16 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn6 = function _() {
      const obj = { opacity: arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []) };
      return obj;
    };
    obj5 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25 };
    fn6.__closure = obj5;
    fn6.__workletHash = 13143453012261;
    fn6.__initData = closure_41;
    obj1.chevonStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn6);
    return obj1;
  }(voiceMessageAnimationState));
  if (tmp3[0]) {
    let tmp8 = tmp7[28];
  } else {
    tmp8 = tmp7[29];
  }
  const tmp = importDefault;
  const tmp6 = function useLockStyles(voiceMessageAnimationState) {
    const safeAreaBottom = voiceMessageAnimationState;
    const tmp = initialAnimation(voiceMessageAnimationState[26])();
    let obj = safeAreaBottom(voiceMessageAnimationState[21]);
    let token = obj.useToken(initialAnimation(voiceMessageAnimationState[18]).colors.BACKGROUND_BASE_LOWEST);
    const WHITE = initialAnimation(voiceMessageAnimationState[18]).unsafe_rawColors.WHITE;
    let obj1 = safeAreaBottom(voiceMessageAnimationState[27]);
    let tmp4 = token;
    if (obj1.isThemeLight(tmp)) {
      tmp4 = WHITE;
    }
    let obj2 = safeAreaBottom(voiceMessageAnimationState[27]);
    if (obj2.isThemeLight(tmp)) {
      token = WHITE;
    }
    const tmp3Result = callback(voiceMessageAnimationState, tmp4, token, WHITE, WHITE);
    const initialAnimation = tmp3Result;
    let obj3 = safeAreaBottom(voiceMessageAnimationState[21]);
    let obj4 = safeAreaBottom(voiceMessageAnimationState[27]);
    const colors = initialAnimation(voiceMessageAnimationState[18]).colors;
    const token1 = obj3.useToken(obj4.isThemeLight(tmp) ? colors.INTERACTIVE_TEXT_DEFAULT : colors.INTERACTIVE_TEXT_ACTIVE);
    let obj5 = safeAreaBottom(voiceMessageAnimationState[21]);
    const token2 = obj5.useToken(initialAnimation(voiceMessageAnimationState[18]).colors.STATUS_POSITIVE);
    const tmp9 = callback(voiceMessageAnimationState, token1, token1, token2, token2);
    voiceMessageAnimationState = tmp9;
    const isThemeLightResult = obj4.isThemeLight(tmp);
    const tmp3 = callback;
    const fn = function n() {
      let obj = arg0(tmp9[25]);
      obj = { easing: arg0(tmp9[11]).Easing.linear, duration: 150 };
      return obj.withTiming(arg0.get()[1], obj);
    };
    obj = { voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[25]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[11]).Easing };
    fn.__closure = obj;
    fn.__workletHash = 11385805572554;
    fn.__initData = closure_36;
    const derivedValue = safeAreaBottom(voiceMessageAnimationState[11]).useDerivedValue(fn);
    tmp4 = derivedValue;
    const obj7 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn2 = function s() {
      const tmp = derivedValue(arg0.get(), 2);
      return arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, tmp[0] + tmp[1] === 2 ? [] : ["nedadvendt pil mod h\u00F8jre", "pil", "retning", "syd\u00F8st"]);
    };
    obj = { voiceMessageAnimationState, interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25 };
    fn2.__closure = obj;
    fn2.__workletHash = 13564673991122;
    fn2.__initData = closure_37;
    const derivedValue1 = safeAreaBottom(voiceMessageAnimationState[11]).useDerivedValue(fn2);
    obj1 = {};
    const obj9 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn3 = function l() {
      const obj = { height: arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []) };
      return obj;
    };
    obj2 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25 };
    fn3.__closure = obj2;
    fn3.__workletHash = 16239675884614;
    fn3.__initData = closure_38;
    obj1.lockParentContainerStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn3);
    const obj12 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn4 = function c() {
      const obj = { width: arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []) };
      const obj2 = arg0(tmp9[11]);
      obj.height = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []);
      obj.opacity = derivedValue1.get();
      obj.backgroundColor = tmp3Result.get();
      const obj3 = arg0(tmp9[11]);
      const items = [1390895572, -255068174, -8, -8];
      obj.marginHorizontal = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, items);
      const obj4 = arg0(tmp9[11]);
      obj.marginBottom = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []);
      return obj;
    };
    obj3 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp3Result };
    fn4.__closure = obj3;
    fn4.__workletHash = 16191961901595;
    fn4.__initData = closure_39;
    obj1.lockContainerStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn4);
    const obj14 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn5 = function u() {
      const obj = { width: arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []) };
      const obj2 = arg0(tmp9[11]);
      obj.height = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []);
      const obj3 = arg0(tmp9[11]);
      obj.marginTop = arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []);
      obj.tintColor = tmp9.get();
      return obj;
    };
    obj4 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25, lockIconColor: tmp9 };
    fn5.__closure = obj4;
    fn5.__workletHash = 10256653077678;
    fn5.__initData = closure_40;
    obj1.lockIconStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn5);
    const obj16 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn6 = function _() {
      const obj = { opacity: arg0(tmp9[11]).interpolate(derivedValue.get(), closure_25, []) };
      return obj;
    };
    obj5 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: closure_25 };
    fn6.__closure = obj5;
    fn6.__workletHash = 13143453012261;
    fn6.__initData = closure_41;
    obj1.chevonStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn6);
    return obj1;
  }(voiceMessageAnimationState);
  let obj4 = arg1(dependencyMap[11]);
  const fn3 = function f() {
    const sum = safeAreaBottom + closure_14 + 24;
    return { opacity: initialAnimation.get(), bottom: sum + 8 * initialAnimation.get() };
  };
  obj1 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT: closure_14, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  fn3.__closure = obj1;
  fn3.__workletHash = 601776335657;
  fn3.__initData = closure_44;
  const animatedStyle = obj4.useAnimatedStyle(fn3);
  const obj2 = { style: items };
  const items = [tmp2.lockParentContainer, lockParentContainerStyle, animatedStyle];
  const obj3 = { style: items1 };
  const items1 = [tmp2.lockContainer, lockContainerStyle];
  const items2 = [callback2(closure_19, { style: lockIconStyle, source: importDefault(tmp8) }), ];
  obj4 = { style: items3, source: importDefault(dependencyMap[30]) };
  const items3 = [tmp2.chevon, chevonStyle];
  items2[1] = callback2(closure_19, obj4);
  obj3.children = items2;
  obj2.children = callback3(importDefault(dependencyMap[11]).View, obj3);
  return callback2(importDefault(dependencyMap[11]).View, obj2);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6, AppState: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const useVoiceMessagesUIStore = arg1(dependencyMap[5]).useVoiceMessagesUIStore;
const VoiceMessageAnimationState = arg1(dependencyMap[6]).VoiceMessageAnimationState;
const ComponentActionsKeyed = arg1(dependencyMap[7]).ComponentActionsKeyed;
const ANDROID_FOREGROUND_RIPPLE = arg1(dependencyMap[8]).ANDROID_FOREGROUND_RIPPLE;
const tmp2 = arg1(dependencyMap[2]);
({ CHAT_INPUT_HEIGHT: closure_14, CHAT_INPUT_HORIZONTAL_PADDING: closure_15 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = arg1(dependencyMap[10]));
const tmp4 = arg1(dependencyMap[10]);
let closure_19 = importDefault(dependencyMap[11]).createAnimatedComponent(arg1(dependencyMap[12]).Icon);
const importDefaultResult = importDefault(dependencyMap[11]);
let closure_20 = importDefault(dependencyMap[11]).createAnimatedComponent(arg1(dependencyMap[13]).PressableOpacity);
const importDefaultResult1 = importDefault(dependencyMap[11]);
let closure_21 = importDefault(dependencyMap[11]).createAnimatedComponent(arg1(dependencyMap[14]).Text);
const importDefaultResult2 = importDefault(dependencyMap[11]);
let closure_22 = importDefault(dependencyMap[15]).memoize(() => importDefault(dependencyMap[11]).createAnimatedComponent(arg1(dependencyMap[16]).Ellipse));
const importDefaultResult3 = importDefault(dependencyMap[15]);
let closure_23 = arg1(dependencyMap[17]).createStyles((width) => {
  let obj = {};
  obj = { alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["overflow"] = "hidden";
  obj.container = obj;
  obj = { paddingHorizontal: closure_15 };
  obj.innerContainer = obj;
  obj.contentContainer = {};
  obj.trashContainer = { width, height: width, borderRadius: importDefault(dependencyMap[18]).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  const obj1 = { width, height: width, borderRadius: importDefault(dependencyMap[18]).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj.sendContainer = { width, height: width, borderRadius: importDefault(dependencyMap[18]).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj.voiceChatContainer = { height: width };
  const obj2 = { width, height: width, borderRadius: importDefault(dependencyMap[18]).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj.lockContainer = { width, borderRadius: importDefault(dependencyMap[18]).modules.button.BORDER_RADIUS, shadowColor: importDefault(dependencyMap[18]).colors.BLACK, shadowOffset: {}, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: arg1(dependencyMap[19]).DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  obj.lockParentContainer = { position: "absolute", right: closure_15, width };
  const obj4 = { flexGrow: "Text", justifyContent: "round", marginBottom: "window", tintColor: importDefault(dependencyMap[18]).colors.ICON_SUBTLE };
  obj.chevon = obj4;
  return obj;
});
const PLUM_13 = importDefault(dependencyMap[18]).unsafe_rawColors.PLUM_13;
const items = [, , , ];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
let closure_26 = { code: "function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}" };
let closure_27 = { code: "function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}" };
let closure_28 = { code: "function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}" };
let closure_29 = { code: "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}" };
const memoResult = importAllResult.memo((opacity) => {
  const radius = opacity.radius;
  const arg1 = radius;
  const height = opacity.height;
  const importDefault = height;
  const offsetThreshold = opacity.offsetThreshold;
  const dependencyMap = offsetThreshold;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  let closure_3 = stateFromStores;
  const tmp2 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  const fn = function c() {
    let num = 0.5;
    if (!stateFromStores) {
      let value;
      if (null != null) {
        value = tmp2.get();
      }
      let num2 = 0;
      if (null != value) {
        num2 = value;
      }
      num = num2;
    }
    return num;
  };
  fn.__closure = { useReducedMotion: stateFromStores, currWaveHeight: tmp2 };
  fn.__workletHash = 2925868096827;
  fn.__initData = closure_26;
  const derivedValue = arg1(dependencyMap[11]).useDerivedValue(fn);
  const obj2 = arg1(dependencyMap[11]);
  const token = arg1(dependencyMap[21]).useToken(importDefault(dependencyMap[18]).colors.BACKGROUND_BRAND);
  const tmp5 = useDerivedColors(opacity.voiceMessageAnimationState, token, importDefault(dependencyMap[18]).unsafe_rawColors.RED_400, token, token);
  const obj3 = arg1(dependencyMap[21]);
  const fn2 = function _() {
    return derivedValue.get() * offsetThreshold;
  };
  fn2.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  fn2.__workletHash = 7278593580538;
  fn2.__initData = closure_27;
  const derivedValue1 = arg1(dependencyMap[11]).useDerivedValue(fn2);
  const obj4 = arg1(dependencyMap[11]);
  class T {
    constructor() {
      obj = { fill: closure_6.get(), ry: radius + offsetThreshold.get(), rx: radius, cy: radius + offsetThreshold.get(), cx: radius };
      return obj;
    }
  }
  T.__closure = { voiceMessageEllipseBgColor: tmp5, radius, offset: derivedValue1 };
  T.__workletHash = 12489173275515;
  T.__initData = closure_28;
  const animatedProps = arg1(dependencyMap[11]).useAnimatedProps(T);
  const obj5 = arg1(dependencyMap[11]);
  class I {
    constructor() {
      obj = { position: "absolute", width: 2 * radius };
      value = height.get();
      obj.height = value + offsetThreshold.get();
      obj.bottom = 0;
      return obj;
    }
  }
  I.__closure = { radius, height, offset: derivedValue1 };
  I.__workletHash = 16593476434034;
  I.__initData = closure_29;
  const animatedStyle = arg1(dependencyMap[11]).useAnimatedStyle(I);
  const obj6 = arg1(dependencyMap[11]);
  obj = { style: animatedStyle };
  obj = { children: callback2(callback4(), { animatedProps, opacity: opacity.opacity }) };
  obj.children = callback2(arg1(dependencyMap[16]).Svg, obj);
  return callback2(importDefault(dependencyMap[11]).View, obj);
});
let closure_31 = { code: "function VoiceMessageOverlayTsx5(){const{voiceMessageAnimationState,runOnJS,setVoiceMessageState}=this.__closure;if(voiceMessageAnimationState.get()==null)return;runOnJS(setVoiceMessageState)(voiceMessageAnimationState.get()[1]);return voiceMessageAnimationState.get();}" };
let closure_32 = { code: "function VoiceMessageOverlayTsx6(){const{initialAnimation,recordingAnimation,INITIAL_SHIFT}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue,marginBottom:-INITIAL_SHIFT*(1-animationValue)};}" };
let closure_33 = importAllResult.memo((initialAnimation) => {
  initialAnimation = initialAnimation.initialAnimation;
  const arg1 = initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const importDefault = recordingAnimation;
  let importAllResult;
  const tmp = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  const dependencyMap = tmp;
  const tmp3 = callback(importAllResult.useState(VoiceMessageAnimationState.SENDING), 2);
  const first = tmp3[0];
  const callback = tmp5;
  let tmp6 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  let obj = arg1(dependencyMap[22]);
  let obj1 = arg1(dependencyMap[11]);
  const fn = function c() {
    if (null != tmp.get()) {
      const obj = initialAnimation(initialAnimation[11]);
      initialAnimation(initialAnimation[11]).runOnJS(initialAnimation)(initialAnimation.get()[1]);
      return initialAnimation.get();
    }
  };
  obj = { voiceMessageAnimationState: tmp, runOnJS: arg1(dependencyMap[11]).runOnJS, setVoiceMessageState: tmp5 };
  fn.__closure = obj;
  fn.__workletHash = 8577984959763;
  fn.__initData = closure_31;
  const derivedValue = obj1.useDerivedValue(fn);
  const ref = importAllResult.useRef(undefined);
  const tmp9 = importDefault(dependencyMap[23])(ref);
  if (initialAnimation.exiting) {
    importAllResult = tmp9;
    let stringResult = tmp9;
  } else {
    if (tmp6) {
      if (!tmp2) {
        const intl = arg1(dependencyMap[24]).intl;
        stringResult = intl.string(arg1(dependencyMap[24]).t.m+sRVL);
        importAllResult = stringResult;
      }
    }
    if (tmp6) {
      if (first === VoiceMessageAnimationState.SENDING) {
        const intl6 = arg1(dependencyMap[24]).intl;
        const stringResult1 = intl6.string(arg1(dependencyMap[24]).t.zPxm/X);
        importAllResult = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp6) {
      if (first === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = arg1(dependencyMap[24]).intl;
        const stringResult2 = intl5.string(arg1(dependencyMap[24]).t.sB81Bo);
        importAllResult = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp6) {
      if (first === VoiceMessageAnimationState.SENDING) {
        const intl2 = arg1(dependencyMap[24]).intl;
        const stringResult3 = intl2.string(arg1(dependencyMap[24]).t.cyL7DJ);
        importAllResult = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp6) {
      if (first === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = arg1(dependencyMap[24]).intl;
        const stringResult4 = intl3.string(arg1(dependencyMap[24]).t.a+A3+f);
        importAllResult = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp6) {
      tmp6 = first !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp6) {
      const intl4 = arg1(dependencyMap[24]).intl;
      const stringResult5 = intl4.string(arg1(dependencyMap[24]).t.3qvtks);
      importAllResult = stringResult5;
      stringResult = stringResult5;
    }
  }
  const items = [stringResult];
  const effect = importAllResult.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  arg1(dependencyMap[11]);
  const fn2 = function y() {
    const value = initialAnimation.get();
    const bound = Math.min(value, recordingAnimation.get());
    return { opacity: bound, marginBottom: -8 * (1 - bound) };
  };
  fn2.__closure = { initialAnimation, recordingAnimation, INITIAL_SHIFT: 8 };
  fn2.__workletHash = 60645179998;
  fn2.__initData = closure_32;
  if (null == stringResult) {
    return null;
  } else {
    obj = { style: tmp35 };
    if (obj.useMobileVisualRefreshConfig({ location: "VoiceMessagePrompt" }).enabled) {
      obj1 = { maxFontSizeMultiplier: 2 };
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    const merged = Object.assign(obj2);
    obj["children"] = stringResult;
    closure_16(closure_21, obj);
    const tmp36 = closure_16;
    const tmp37 = closure_21;
  }
});
let closure_34 = { code: "function VoiceMessageOverlayTsx7(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
let closure_35 = { code: "function VoiceMessageOverlayTsx8(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}" };
let closure_36 = { code: "function VoiceMessageOverlayTsx9(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
let closure_37 = { code: "function VoiceMessageOverlayTsx10(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}" };
let closure_38 = { code: "function VoiceMessageOverlayTsx11(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[68,68,104,104])};}" };
let closure_39 = { code: "function VoiceMessageOverlayTsx12(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockContainerOpacity,lockedBackgroundColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[40,40,56,56]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[68,68,56,56]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,-8,-8]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}" };
let closure_40 = { code: "function VoiceMessageOverlayTsx13(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}" };
let closure_41 = { code: "function VoiceMessageOverlayTsx14(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}" };
let closure_42 = { code: "function VoiceMessageOverlayTsx15(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}" };
let closure_43 = { code: "function VoiceMessageOverlayTsx16(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}" };
let closure_44 = { code: "function VoiceMessageOverlayTsx17(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}" };
let closure_45 = { code: "function VoiceMessageOverlayTsx18(){const{INITIAL_SHIFT,initialAnimation,trashContainerBgColor}=this.__closure;return{marginLeft:INITIAL_SHIFT*2*(1-initialAnimation.get()),marginRight:8-INITIAL_SHIFT*2*(1-initialAnimation.get()),backgroundColor:trashContainerBgColor.get()};}" };
let closure_46 = { code: "function VoiceMessageOverlayTsx19(){const{trashIconColor}=this.__closure;return{tintColor:trashIconColor.get()};}" };
let closure_47 = { code: "function VoiceMessageOverlayTsx20(){const{recordingAnimation,sendContainerBgColor}=this.__closure;return{opacity:0.5+0.5*recordingAnimation.get(),backgroundColor:sendContainerBgColor.get()};}" };
let closure_48 = { code: "function VoiceMessageOverlayTsx21(){const{sendIconColor}=this.__closure;return{tintColor:sendIconColor.get()};}" };
let closure_49 = { code: "function VoiceMessageOverlayTsx22(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}" };
let closure_50 = { code: "function VoiceMessageOverlayTsx23(){const{exiting,INITIAL_SHIFT,initialAnimation,keyboardHeight}=this.__closure;const shift=exiting?INITIAL_SHIFT*3:INITIAL_SHIFT*1.5;return{opacity:initialAnimation.get(),bottom:keyboardHeight-shift*(1-initialAnimation.get())};}" };
let closure_51 = { code: "function VoiceMessageOverlayTsx24(){const{insetsNoKeyboard,CHAT_INPUT_HEIGHT,recordingAnimation}=this.__closure;return insetsNoKeyboard.bottom+CHAT_INPUT_HEIGHT*(1.6+0.3*recordingAnimation.get());}" };
let closure_52 = { code: "function VoiceMessageOverlayTsx25(){const{insetsNoKeyboard,CHAT_INPUT_HEIGHT}=this.__closure;return insetsNoKeyboard.bottom+CHAT_INPUT_HEIGHT*1.6;}" };
let closure_53 = importAllResult.memo((channelId) => {
  let exiting;
  let voiceMessageAnimationState;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ voiceMessageAnimationState, exiting } = channelId);
  const importDefault = exiting;
  let obj = arg1(dependencyMap[21]);
  const tmp2 = callback5(obj.useToken(importDefault(dependencyMap[18]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const insets = importDefault(dependencyMap[31])({ renderHeader: null, renderSettingSearchResultItem: null }).insets;
  const tmp3 = importDefault(dependencyMap[32])();
  const dependencyMap = tmp3;
  const diff = insets.bottom - tmp3.bottom;
  let closure_3 = diff;
  const bottom = insets.bottom;
  const tmp5 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  const tmp6 = function useEntryAnimationValues(arg0, exiting) {
    const channelId = arg0;
    let initialAnimation = channelId(tmp3[11]).useSharedValue(0);
    let closure_3 = initialAnimation.useRef(performance.now());
    const items = [initialAnimation];
    const effect = initialAnimation.useEffect(() => {
      let obj = arg0(initialAnimation[11]);
      obj = { easing: arg0(initialAnimation[11]).Easing.quad, duration: 250 };
      const result = initialAnimation.set(obj.withDelay(500, arg0(initialAnimation[25]).withTiming(1, obj)));
    }, items);
    const items1 = [initialAnimation, exiting];
    const effect1 = initialAnimation.useEffect(() => {
      if (arg1) {
        let obj = arg0(initialAnimation[25]);
        obj = { easing: arg0(initialAnimation[11]).Easing.quad, duration: 100 };
        const result = initialAnimation.set(obj.withTiming(0, obj));
      }
    }, items1);
    const obj = channelId(tmp3[11]);
    const recordingAnimation = channelId(initialAnimation[11]).useSharedValue(0);
    initialAnimation = recordingAnimation;
    const items2 = [initialAnimation, recordingAnimation, arg0];
    const effect2 = initialAnimation.useEffect(() => {
      if (arg0) {
        let obj = arg0(initialAnimation[25]);
        obj = { easing: arg0(initialAnimation[11]).Easing.quad, duration: 200 };
        const result = recordingAnimation.set(obj.withTiming(1, obj));
        const _performance = performance;
        if (performance.now() - ref.current < 500) {
          obj = { easing: arg0(initialAnimation[11]).Easing.quad, duration: 250 };
          const result1 = initialAnimation.set(arg0(initialAnimation[25]).withTiming(1, obj));
          const obj3 = arg0(initialAnimation[25]);
        }
      }
    }, items2);
    return { initialAnimation, recordingAnimation };
  }(tmp5, exiting);
  const initialAnimation = tmp6.initialAnimation;
  const recordingAnimation = tmp6.recordingAnimation;
  const ref = importAllResult.useRef(null);
  const effect = importAllResult.useEffect(() => {
    let obj = channelId(tmp3[33]);
    if (obj.getIsScreenReaderEnabled()) {
      obj = { ref };
      const result = channelId(tmp3[34]).setAccessibilityFocus(obj);
      const obj2 = channelId(tmp3[34]);
    }
  }, []);
  const items = [channelId];
  const effect1 = importAllResult.useEffect(() => {
    let closure_0 = tmp12.addEventListener("change", (arg0) => {
      let tmp = "inactive" !== arg0;
      if (tmp) {
        tmp = "background" !== arg0;
      }
      if (!tmp) {
        const ComponentDispatch = lib(closure_2[35]).ComponentDispatch;
        const obj = { isCancelling: true, cancelReason: lib(closure_2[36]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
        ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, lib, obj);
      }
    });
    return () => {
      lib.remove();
    };
  }, items);
  const result = 5 * importDefault(dependencyMap[37])().width / 2;
  const tmp12 = useDerivedColors(voiceMessageAnimationState, importDefault(dependencyMap[18]).unsafe_rawColors.BRAND_600, importDefault(dependencyMap[18]).unsafe_rawColors.WHITE, importDefault(dependencyMap[18]).unsafe_rawColors.BRAND_600, importDefault(dependencyMap[18]).unsafe_rawColors.BRAND_600);
  let obj1 = arg1(dependencyMap[11]);
  class L {
    constructor() {
      obj = { marginLeft: 16 * (1 - initialAnimation.get()), marginRight: 8 - 16 * (1 - initialAnimation.get()), backgroundColor: closure_7.get() };
      return obj;
    }
  }
  L.__closure = { INITIAL_SHIFT: 8, initialAnimation, trashContainerBgColor: tmp12 };
  L.__workletHash = 16442762939311;
  L.__initData = closure_45;
  const animatedStyle = obj1.useAnimatedStyle(L);
  const tmp14 = useDerivedColors(voiceMessageAnimationState, importDefault(dependencyMap[18]).unsafe_rawColors.WHITE, importDefault(dependencyMap[18]).unsafe_rawColors.RED_500, importDefault(dependencyMap[18]).unsafe_rawColors.WHITE, importDefault(dependencyMap[18]).unsafe_rawColors.WHITE);
  let closure_8 = tmp14;
  let obj2 = arg1(dependencyMap[11]);
  const fn = function x() {
    return { tintColor: tmp14.get() };
  };
  fn.__closure = { trashIconColor: tmp14 };
  fn.__workletHash = 4758994609248;
  fn.__initData = closure_46;
  const animatedStyle1 = obj2.useAnimatedStyle(fn);
  const tmp16 = useDerivedColors(voiceMessageAnimationState, importDefault(dependencyMap[18]).unsafe_rawColors.WHITE, importDefault(dependencyMap[18]).unsafe_rawColors.RED_500, importDefault(dependencyMap[18]).unsafe_rawColors.BRAND_600, importDefault(dependencyMap[18]).unsafe_rawColors.WHITE);
  let closure_9 = tmp16;
  let obj3 = arg1(dependencyMap[11]);
  class G {
    constructor() {
      obj = { opacity: 0.5 + 0.5 * recordingAnimation.get(), backgroundColor: closure_9.get() };
      return obj;
    }
  }
  G.__closure = { recordingAnimation, sendContainerBgColor: tmp16 };
  G.__workletHash = 2463646995928;
  G.__initData = closure_47;
  const animatedStyle2 = obj3.useAnimatedStyle(G);
  const tmp18 = useDerivedColors(voiceMessageAnimationState, PLUM_13, importDefault(dependencyMap[18]).unsafe_rawColors.WHITE, importDefault(dependencyMap[18]).unsafe_rawColors.WHITE, PLUM_13);
  const useVoiceMessagesUIStore = tmp18;
  let obj4 = arg1(dependencyMap[11]);
  class B {
    constructor() {
      obj = { tintColor: closure_10.get() };
      return obj;
    }
  }
  B.__closure = { sendIconColor: tmp18 };
  B.__workletHash = 13732877930795;
  B.__initData = closure_48;
  const animatedStyle3 = obj4.useAnimatedStyle(B);
  let obj5 = arg1(dependencyMap[11]);
  class U {
    constructor() {
      obj = { opacity: initialAnimation.get() };
      return obj;
    }
  }
  U.__closure = { initialAnimation };
  U.__workletHash = 11009128299499;
  U.__initData = closure_49;
  const animatedStyle4 = obj5.useAnimatedStyle(U);
  let obj6 = arg1(dependencyMap[11]);
  class F {
    constructor() {
      num = 12;
      if (exiting) {
        num = 24;
      }
      obj = { opacity: initialAnimation.get() };
      obj.bottom = bottom - num * (1 - initialAnimation.get());
      return obj;
    }
  }
  F.__closure = { exiting, INITIAL_SHIFT: 8, initialAnimation, keyboardHeight: diff };
  F.__workletHash = 4588671012938;
  F.__initData = closure_50;
  const animatedStyle5 = obj6.useAnimatedStyle(F);
  let obj7 = arg1(dependencyMap[38]);
  const wakeLock = obj7.useWakeLock("VoiceMessageOverlay");
  let obj8 = arg1(dependencyMap[11]);
  function ce() {
    return tmp3.bottom + closure_14 * (1.6 + 0.3 * recordingAnimation.get());
  }
  obj = { insetsNoKeyboard: tmp3, CHAT_INPUT_HEIGHT: closure_14, recordingAnimation };
  ce.__closure = obj;
  ce.__workletHash = 14315468936108;
  ce.__initData = closure_51;
  const derivedValue = obj8.useDerivedValue(ce);
  const tmp = importDefault;
  const tmp11 = useDerivedColors(voiceMessageAnimationState, importDefault(dependencyMap[18]).unsafe_rawColors.BRAND_600, importDefault(dependencyMap[18]).unsafe_rawColors.RED_500, importDefault(dependencyMap[18]).unsafe_rawColors.BRAND_600, importDefault(dependencyMap[18]).unsafe_rawColors.BRAND_600);
  function ue() {
    return tmp3.bottom + 1.6 * closure_14;
  }
  obj = { insetsNoKeyboard: tmp3, CHAT_INPUT_HEIGHT: closure_14 };
  ue.__closure = obj;
  ue.__workletHash = 5416150236821;
  ue.__initData = closure_52;
  obj1 = {};
  const derivedValue1 = arg1(dependencyMap[11]).useDerivedValue(ue);
  obj2 = { style: items1, pointerEvents: "none" };
  const items1 = [tmp2.container, animatedStyle5];
  const items2 = [callback2(memoResult, { height: derivedValue, radius: result, voiceMessageAnimationState }), callback2(memoResult, { height: derivedValue1, offsetThreshold: 30, radius: result, voiceMessageAnimationState })];
  obj2.children = items2;
  const items3 = [callback3(importDefault(dependencyMap[11]).View, obj2), , ];
  obj3 = { style: items4 };
  const items4 = [tmp2.contentContainer, { bottom }, animatedStyle4];
  const items5 = [callback2(closure_33, { initialAnimation, recordingAnimation, exiting }), ];
  obj4 = { style: tmp2.innerContainer };
  obj5 = { style: items6, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, accessibilityRole: "button" };
  const items6 = [tmp2.trashContainer, animatedStyle];
  const intl = arg1(dependencyMap[24]).intl;
  obj5.accessibilityLabel = intl.string(arg1(dependencyMap[24]).t.RdK9sV);
  obj5.onPressIn = function onPressIn() {
    return channelId(tmp3[39]).triggerHaptic();
  };
  obj5.onPress = function onPress() {
    const ComponentDispatch = channelId(tmp3[35]).ComponentDispatch;
    ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, channelId, { isCancelling: true });
  };
  obj6 = { style: animatedStyle1, source: importDefault(dependencyMap[40]), size: arg1(dependencyMap[12]).Icon.Sizes.MEDIUM };
  obj5.children = callback2(closure_19, obj6);
  const items7 = [callback2(closure_20, obj5), , ];
  obj7 = { style: tmp2.voiceChatContainer, children: callback2(importDefault(dependencyMap[41]), { isRecording: tmp5, initialAnimation, backgroundColor: tmp11 }) };
  items7[1] = callback2(importDefault(dependencyMap[11]).View, obj7);
  obj8 = { ref, style: items8, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, accessibilityRole: "button" };
  const items8 = [tmp2.sendContainer, animatedStyle2];
  const intl2 = arg1(dependencyMap[24]).intl;
  obj8.accessibilityLabel = intl2.string(arg1(dependencyMap[24]).t.+8GStU);
  obj8.onPress = function onPress() {
    const ComponentDispatch = channelId(tmp3[35]).ComponentDispatch;
    ComponentDispatch.dispatchKeyed(constants.VOICE_MESSAGE_SEND, channelId, { isCancelling: false });
  };
  const obj9 = { style: animatedStyle3 };
  if (tmp5) {
    let tmp35 = tmp34[42];
  } else {
    tmp35 = tmp34[43];
  }
  obj9.source = tmp(tmp35);
  obj9.size = arg1(dependencyMap[12]).Icon.Sizes.MEDIUM;
  obj8.children = callback2(closure_19, obj9);
  items7[2] = callback2(closure_20, obj8);
  obj4.children = items7;
  items5[1] = callback3(recordingAnimation, obj4);
  obj3.children = items5;
  items3[1] = callback3(importDefault(dependencyMap[11]).View, obj3);
  items3[2] = callback2(LockPill, { safeAreaBottom: bottom, initialAnimation, voiceMessageAnimationState });
  obj1.children = items3;
  return callback3(closure_18, obj1);
});
const obj6 = arg1(dependencyMap[17]);
const memoResult1 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  const importDefault = tmp;
  let obj = arg1(closure_2[20]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  const tmp3 = callback(importAllResult.useState(tmp), 2);
  closure_2 = tmp3[1];
  const items1 = [tmp];
  const effect = importAllResult.useEffect(() => {
    if (tmp) {
      callback(true);
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => callback(false), 100);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items1);
  if (null == stateFromStores) {
    let tmp6 = null;
    if (null != tmp2) {
      tmp6 = null;
      if (tmp3[0]) {
        obj = { channelId, voiceMessageAnimationState: tmp2, exiting: !tmp };
        tmp6 = callback2(closure_53, obj);
      }
    }
    let tmp5 = tmp6;
  } else {
    tmp5 = null;
  }
  return tmp5;
});
const result = arg1(dependencyMap[44]).fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default memoResult1;
export const VoiceMessageEllipse = memoResult;
