// Module ID: 11713
// Function ID: 90651
// Name: useDerivedColors
// Dependencies: [57, 31, 27, 4157, 1348, 11129, 11130, 653, 1277, 11131, 33, 4026, 1273, 4695, 4161, 22, 8507, 4165, 689, 5008, 566, 3869, 1324, 5156, 1212, 4166, 4101, 4011, 4663, 10346, 11714, 5193, 1557, 4563, 4574, 1207, 11040, 1450, 10635, 11715, 11716, 4125, 11392, 4112, 10776, 2]

// Module 11713 (useDerivedColors)
import _slicedToArray from "_slicedToArray";
import importAllResult from "useSafeAreaInsetsKeyboardAware";
import get_ActivityIndicator from "AccessibilityAnnouncer";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus";
import { VoiceMessageAnimationState } from "VoiceMessageAnimationState";
import { ComponentActionsKeyed } from "ME";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import TextAreaCta from "TextAreaCta";
import jsxProd from "SCREEN_READER_ENABLED_GETTER";
import importDefaultResult from "module_4026";
import importDefaultResult1 from "module_4026";
import importDefaultResult2 from "module_4026";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult3 from "useIsMobileVisualRefreshExperimentEnabled";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function useDerivedColors(voiceMessageAnimationState, BRAND_600, RED_500, BRAND_6002, BRAND_6003) {
  const _require = voiceMessageAnimationState;
  let closure_1 = BRAND_600;
  const dependencyMap = RED_500;
  let _slicedToArray = BRAND_6002;
  let closure_4 = BRAND_6003;
  let obj = _require(4026);
  const fn = function _() {
    let obj = voiceMessageAnimationState(RED_500[25]);
    obj = { easing: voiceMessageAnimationState(RED_500[11]).Easing.linear, duration: 150 };
    return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
  };
  obj = { voiceMessageAnimationState, withTiming: _require(4166).withTiming, Easing: _require(4026).Easing };
  fn.__closure = obj;
  fn.__workletHash = 7432526131204;
  fn.__initData = closure_34;
  const derivedValue = obj.useDerivedValue(fn);
  const fn2 = function u() {
    const tmp = BRAND_6002(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      const items = [closure_1, closure_1, BRAND_6002, closure_4];
      let items1 = items;
    } else {
      items1 = [closure_1, RED_500, BRAND_6002, closure_4];
    }
    return voiceMessageAnimationState(RED_500[11]).interpolateColor(derivedValue.get(), outer1_25, items1);
  };
  obj = { voiceMessageAnimationState, sendingColor: BRAND_600, lockingColor: BRAND_6002, lockedColor: BRAND_6003, cancelingColor: RED_500, interpolateColor: _require(4026).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn2.__closure = obj;
  fn2.__workletHash = 8474040050475;
  fn2.__initData = closure_35;
  return _require(4026).useDerivedValue(fn2);
}
function LockPill(safeAreaBottom) {
  let chevonStyle;
  let lockContainerStyle;
  let lockIconStyle;
  let lockParentContainerStyle;
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  let initialAnimation = safeAreaBottom.initialAnimation;
  let voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  let obj = safeAreaBottom(voiceMessageAnimationState[21]);
  const tmp2 = callback5(obj.useToken(initialAnimation(voiceMessageAnimationState[18]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  let tmp3 = callback(importAllResult.useState(false), 2);
  callback = tmp4;
  let obj1 = safeAreaBottom(voiceMessageAnimationState[11]);
  let fn = function _() {
    let tmp = voiceMessageAnimationState.get()[1] === outer1_11.LOCKED;
    if (!tmp) {
      tmp = voiceMessageAnimationState.get()[1] === outer1_11.LOCKING;
    }
    return tmp;
  };
  obj = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__closure = obj;
  fn.__workletHash = 16672558304670;
  fn.__initData = closure_42;
  let fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      safeAreaBottom(voiceMessageAnimationState[11]).runOnJS(_slicedToArray)(arg0);
      const obj = safeAreaBottom(voiceMessageAnimationState[11]);
    }
  };
  obj = { runOnJS: safeAreaBottom(voiceMessageAnimationState[11]).runOnJS, setLocked: tmp4 };
  fn2.__closure = obj;
  fn2.__workletHash = 10857258354778;
  fn2.__initData = closure_43;
  const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
  ({ lockParentContainerStyle, lockContainerStyle, lockIconStyle, chevonStyle } = (function useLockStyles(voiceMessageAnimationState) {
    let closure_0 = voiceMessageAnimationState;
    let tmp = initialAnimation(voiceMessageAnimationState[26])();
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
    const tmp3Result = outer1_54(voiceMessageAnimationState, tmp4, token, WHITE, WHITE);
    initialAnimation = tmp3Result;
    let obj3 = safeAreaBottom(voiceMessageAnimationState[21]);
    let obj4 = safeAreaBottom(voiceMessageAnimationState[27]);
    const colors = initialAnimation(voiceMessageAnimationState[18]).colors;
    const token1 = obj3.useToken(obj4.isThemeLight(tmp) ? colors.INTERACTIVE_TEXT_DEFAULT : colors.INTERACTIVE_TEXT_ACTIVE);
    let obj5 = safeAreaBottom(voiceMessageAnimationState[21]);
    const token2 = obj5.useToken(initialAnimation(voiceMessageAnimationState[18]).colors.STATUS_POSITIVE);
    const tmp9 = outer1_54(voiceMessageAnimationState, token1, token1, token2, token2);
    voiceMessageAnimationState = tmp9;
    const isThemeLightResult = obj4.isThemeLight(tmp);
    const tmp3 = outer1_54;
    const fn = function n() {
      let obj = safeAreaBottom(voiceMessageAnimationState[25]);
      obj = { easing: safeAreaBottom(voiceMessageAnimationState[11]).Easing.linear, duration: 150 };
      return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
    };
    obj = { voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[25]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[11]).Easing };
    fn.__closure = obj;
    fn.__workletHash = 11385805572554;
    fn.__initData = outer1_36;
    const derivedValue = safeAreaBottom(voiceMessageAnimationState[11]).useDerivedValue(fn);
    const obj7 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn2 = function s() {
      const tmp = derivedValue(voiceMessageAnimationState.get(), 2);
      return safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0]);
    };
    obj = { voiceMessageAnimationState, interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25 };
    fn2.__closure = obj;
    fn2.__workletHash = 13564673991122;
    fn2.__initData = outer1_37;
    const derivedValue1 = safeAreaBottom(voiceMessageAnimationState[11]).useDerivedValue(fn2);
    obj1 = {};
    const obj9 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn3 = function l() {
      const obj = { height: safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [68, 68, 104, 104]) };
      return obj;
    };
    obj2 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25 };
    fn3.__closure = obj2;
    fn3.__workletHash = 16239675884614;
    fn3.__initData = outer1_38;
    obj1.lockParentContainerStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn3);
    const obj12 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn4 = function c() {
      const obj = { width: safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [40, 40, 56, 56]) };
      const obj2 = safeAreaBottom(voiceMessageAnimationState[11]);
      obj.height = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [68, 68, 56, 56]);
      obj.opacity = derivedValue1.get();
      obj.backgroundColor = tmp3Result.get();
      const obj3 = safeAreaBottom(voiceMessageAnimationState[11]);
      const items = [0, 0, -8, -8];
      obj.marginHorizontal = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, items);
      const obj4 = safeAreaBottom(voiceMessageAnimationState[11]);
      obj.marginBottom = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [0, 0, 36, 36]);
      return obj;
    };
    obj3 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp3Result };
    fn4.__closure = obj3;
    fn4.__workletHash = 16191961901595;
    fn4.__initData = outer1_39;
    obj1.lockContainerStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn4);
    const obj14 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn5 = function _() {
      const obj = { width: safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [24, 24, 32, 32]) };
      const obj2 = safeAreaBottom(voiceMessageAnimationState[11]);
      obj.height = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [24, 24, 32, 32]);
      const obj3 = safeAreaBottom(voiceMessageAnimationState[11]);
      obj.marginTop = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [12, 12, 10, 10]);
      obj.tintColor = tmp9.get();
      return obj;
    };
    obj4 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25, lockIconColor: tmp9 };
    fn5.__closure = obj4;
    fn5.__workletHash = 10256653077678;
    fn5.__initData = outer1_40;
    obj1.lockIconStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn5);
    const obj16 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn6 = function u() {
      const obj = { opacity: safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [1, 1, 0, 0]) };
      return obj;
    };
    obj5 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25 };
    fn6.__closure = obj5;
    fn6.__workletHash = 13143453012261;
    fn6.__initData = outer1_41;
    obj1.chevonStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn6);
    return obj1;
  })(voiceMessageAnimationState));
  if (tmp3[0]) {
    let tmp8 = tmp7[28];
  } else {
    tmp8 = tmp7[29];
  }
  let tmp = initialAnimation;
  const tmp6 = (function useLockStyles(voiceMessageAnimationState) {
    let closure_0 = voiceMessageAnimationState;
    let tmp = initialAnimation(voiceMessageAnimationState[26])();
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
    const tmp3Result = outer1_54(voiceMessageAnimationState, tmp4, token, WHITE, WHITE);
    initialAnimation = tmp3Result;
    let obj3 = safeAreaBottom(voiceMessageAnimationState[21]);
    let obj4 = safeAreaBottom(voiceMessageAnimationState[27]);
    const colors = initialAnimation(voiceMessageAnimationState[18]).colors;
    const token1 = obj3.useToken(obj4.isThemeLight(tmp) ? colors.INTERACTIVE_TEXT_DEFAULT : colors.INTERACTIVE_TEXT_ACTIVE);
    let obj5 = safeAreaBottom(voiceMessageAnimationState[21]);
    const token2 = obj5.useToken(initialAnimation(voiceMessageAnimationState[18]).colors.STATUS_POSITIVE);
    const tmp9 = outer1_54(voiceMessageAnimationState, token1, token1, token2, token2);
    voiceMessageAnimationState = tmp9;
    const isThemeLightResult = obj4.isThemeLight(tmp);
    const tmp3 = outer1_54;
    const fn = function n() {
      let obj = safeAreaBottom(voiceMessageAnimationState[25]);
      obj = { easing: safeAreaBottom(voiceMessageAnimationState[11]).Easing.linear, duration: 150 };
      return obj.withTiming(voiceMessageAnimationState.get()[1], obj);
    };
    obj = { voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[25]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[11]).Easing };
    fn.__closure = obj;
    fn.__workletHash = 11385805572554;
    fn.__initData = outer1_36;
    const derivedValue = safeAreaBottom(voiceMessageAnimationState[11]).useDerivedValue(fn);
    const obj7 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn2 = function s() {
      const tmp = derivedValue(voiceMessageAnimationState.get(), 2);
      return safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0]);
    };
    obj = { voiceMessageAnimationState, interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25 };
    fn2.__closure = obj;
    fn2.__workletHash = 13564673991122;
    fn2.__initData = outer1_37;
    const derivedValue1 = safeAreaBottom(voiceMessageAnimationState[11]).useDerivedValue(fn2);
    obj1 = {};
    const obj9 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn3 = function l() {
      const obj = { height: safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [68, 68, 104, 104]) };
      return obj;
    };
    obj2 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25 };
    fn3.__closure = obj2;
    fn3.__workletHash = 16239675884614;
    fn3.__initData = outer1_38;
    obj1.lockParentContainerStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn3);
    const obj12 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn4 = function c() {
      const obj = { width: safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [40, 40, 56, 56]) };
      const obj2 = safeAreaBottom(voiceMessageAnimationState[11]);
      obj.height = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [68, 68, 56, 56]);
      obj.opacity = derivedValue1.get();
      obj.backgroundColor = tmp3Result.get();
      const obj3 = safeAreaBottom(voiceMessageAnimationState[11]);
      const items = [0, 0, -8, -8];
      obj.marginHorizontal = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, items);
      const obj4 = safeAreaBottom(voiceMessageAnimationState[11]);
      obj.marginBottom = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [0, 0, 36, 36]);
      return obj;
    };
    obj3 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25, lockContainerOpacity: derivedValue1, lockedBackgroundColor: tmp3Result };
    fn4.__closure = obj3;
    fn4.__workletHash = 16191961901595;
    fn4.__initData = outer1_39;
    obj1.lockContainerStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn4);
    const obj14 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn5 = function _() {
      const obj = { width: safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [24, 24, 32, 32]) };
      const obj2 = safeAreaBottom(voiceMessageAnimationState[11]);
      obj.height = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [24, 24, 32, 32]);
      const obj3 = safeAreaBottom(voiceMessageAnimationState[11]);
      obj.marginTop = safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [12, 12, 10, 10]);
      obj.tintColor = tmp9.get();
      return obj;
    };
    obj4 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25, lockIconColor: tmp9 };
    fn5.__closure = obj4;
    fn5.__workletHash = 10256653077678;
    fn5.__initData = outer1_40;
    obj1.lockIconStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn5);
    const obj16 = safeAreaBottom(voiceMessageAnimationState[11]);
    const fn6 = function u() {
      const obj = { opacity: safeAreaBottom(voiceMessageAnimationState[11]).interpolate(derivedValue.get(), outer2_25, [1, 1, 0, 0]) };
      return obj;
    };
    obj5 = { interpolate: safeAreaBottom(voiceMessageAnimationState[11]).interpolate, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: outer1_25 };
    fn6.__closure = obj5;
    fn6.__workletHash = 13143453012261;
    fn6.__initData = outer1_41;
    obj1.chevonStyle = safeAreaBottom(voiceMessageAnimationState[11]).useAnimatedStyle(fn6);
    return obj1;
  })(voiceMessageAnimationState);
  let obj4 = safeAreaBottom(voiceMessageAnimationState[11]);
  let fn3 = function f() {
    const sum = safeAreaBottom + outer1_14 + 24;
    return { opacity: initialAnimation.get(), bottom: sum + 8 * initialAnimation.get() };
  };
  obj1 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT: closure_14, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  fn3.__closure = obj1;
  fn3.__workletHash = 601776335657;
  fn3.__initData = closure_44;
  const animatedStyle = obj4.useAnimatedStyle(fn3);
  let obj2 = { style: items };
  items = [tmp2.lockParentContainer, lockParentContainerStyle, animatedStyle];
  let obj3 = { style: items1 };
  items1 = [tmp2.lockContainer, lockContainerStyle];
  const items2 = [callback2(closure_19, { style: lockIconStyle, source: initialAnimation(tmp8) }), ];
  obj4 = { style: items3, source: initialAnimation(voiceMessageAnimationState[30]) };
  items3 = [tmp2.chevon, chevonStyle];
  items2[1] = callback2(closure_19, obj4);
  obj3.children = items2;
  obj2.children = callback3(initialAnimation(voiceMessageAnimationState[11]).View, obj3);
  return callback2(initialAnimation(voiceMessageAnimationState[11]).View, obj2);
}
({ View: closure_5, StyleSheet: closure_6, AppState: closure_7 } = get_ActivityIndicator);
({ CHAT_INPUT_HEIGHT: closure_14, CHAT_INPUT_HORIZONTAL_PADDING: closure_15 } = TextAreaCta);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let closure_19 = require("module_4026").createAnimatedComponent(require("Button").Icon);
let closure_20 = require("module_4026").createAnimatedComponent(require("PressableBase").PressableOpacity);
let closure_21 = require("module_4026").createAnimatedComponent(require("Text").Text);
let closure_22 = require("useIsMobileVisualRefreshExperimentEnabled").memoize(() => importDefault(4026).createAnimatedComponent(require(8507) /* inlineStyles */.Ellipse));
let closure_23 = _createForOfIteratorHelperLoose.createStyles((width) => {
  let obj = {};
  obj = { alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["overflow"] = "hidden";
  obj.container = obj;
  obj = { flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: importDefault(689).modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: importDefault(689).modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM };
  obj.innerContainer = obj;
  obj.contentContainer = { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" };
  obj.trashContainer = { width, height: width, borderRadius: importDefault(689).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  const obj1 = { width, height: width, borderRadius: importDefault(689).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj.sendContainer = { width, height: width, borderRadius: importDefault(689).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  const obj2 = { width, height: width, borderRadius: importDefault(689).modules.button.BORDER_RADIUS, alignItems: "center", justifyContent: "center" };
  obj.voiceChatContainer = { flex: 1, height: importDefault(689).modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: importDefault(689).modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" };
  const obj4 = { height: 68, width, borderRadius: importDefault(689).modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: importDefault(689).colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: require(5008) /* result */.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  obj.lockContainer = obj4;
  obj.lockParentContainer = { position: "absolute", right: closure_15, width };
  const obj6 = { height: 16, width: 16, marginTop: 8, tintColor: importDefault(689).colors.ICON_SUBTLE };
  obj.chevon = obj6;
  return obj;
});
const PLUM_13 = require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_13;
let items = [, , , ];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
let closure_26 = { code: "function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}" };
let closure_27 = { code: "function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}" };
let closure_28 = { code: "function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}" };
let closure_29 = { code: "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}" };
const memoResult = importAllResult.memo((opacity) => {
  const radius = opacity.radius;
  const height = opacity.height;
  const offsetThreshold = opacity.offsetThreshold;
  let obj = radius(offsetThreshold[20]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.useReducedMotion, []);
  const tmp2 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  let closure_4 = tmp2;
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
  const derivedValue = radius(offsetThreshold[11]).useDerivedValue(fn);
  const obj2 = radius(offsetThreshold[11]);
  const token = radius(offsetThreshold[21]).useToken(height(offsetThreshold[18]).colors.BACKGROUND_BRAND);
  const tmp5 = useDerivedColors(opacity.voiceMessageAnimationState, token, height(offsetThreshold[18]).unsafe_rawColors.RED_400, token, token);
  let closure_6 = tmp5;
  const obj3 = radius(offsetThreshold[21]);
  const fn2 = function u() {
    return derivedValue.get() * offsetThreshold;
  };
  fn2.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  fn2.__workletHash = 7278593580538;
  fn2.__initData = closure_27;
  const derivedValue1 = radius(offsetThreshold[11]).useDerivedValue(fn2);
  const obj4 = radius(offsetThreshold[11]);
  class T {
    constructor() {
      obj = { fill: closure_6.get(), ry: radius + offsetThreshold.get(), rx: radius, cy: radius + offsetThreshold.get(), cx: radius };
      return obj;
    }
  }
  T.__closure = { voiceMessageEllipseBgColor: tmp5, radius, offset: derivedValue1 };
  T.__workletHash = 12489173275515;
  T.__initData = closure_28;
  const animatedProps = radius(offsetThreshold[11]).useAnimatedProps(T);
  const obj5 = radius(offsetThreshold[11]);
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
  const animatedStyle = radius(offsetThreshold[11]).useAnimatedStyle(I);
  const obj6 = radius(offsetThreshold[11]);
  obj = { style: animatedStyle };
  obj = { children: callback2(callback4(), { animatedProps, opacity: opacity.opacity }) };
  obj.children = callback2(radius(offsetThreshold[16]).Svg, obj);
  return callback2(height(offsetThreshold[11]).View, obj);
});
let closure_31 = { code: "function VoiceMessageOverlayTsx5(){const{voiceMessageAnimationState,runOnJS,setVoiceMessageState}=this.__closure;if(voiceMessageAnimationState.get()==null)return;runOnJS(setVoiceMessageState)(voiceMessageAnimationState.get()[1]);return voiceMessageAnimationState.get();}" };
let closure_32 = { code: "function VoiceMessageOverlayTsx6(){const{initialAnimation,recordingAnimation,INITIAL_SHIFT}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue,marginBottom:-INITIAL_SHIFT*(1-animationValue)};}" };
let closure_33 = importAllResult.memo((initialAnimation) => {
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  let stringResult5;
  const tmp = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  const dependencyMap = tmp;
  const tmp3 = callback(stringResult5.useState(VoiceMessageAnimationState.SENDING), 2);
  const first = tmp3[0];
  callback = tmp5;
  let tmp6 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  let obj = initialAnimation(1324);
  let obj1 = initialAnimation(4026);
  const fn = function c() {
    if (null != tmp.get()) {
      const obj = initialAnimation(initialAnimation[11]);
      initialAnimation(initialAnimation[11]).runOnJS(_slicedToArray)(initialAnimation.get()[1]);
      return initialAnimation.get();
    }
  };
  obj = { voiceMessageAnimationState: tmp, runOnJS: initialAnimation(4026).runOnJS, setVoiceMessageState: tmp5 };
  fn.__closure = obj;
  fn.__workletHash = 8577984959763;
  fn.__initData = closure_31;
  const derivedValue = obj1.useDerivedValue(fn);
  const ref = stringResult5.useRef(undefined);
  const tmp9 = recordingAnimation(5156)(ref);
  if (initialAnimation.exiting) {
    stringResult5 = tmp9;
    let stringResult = tmp9;
  } else {
    if (tmp6) {
      if (!tmp2) {
        const intl = initialAnimation(1212).intl;
        stringResult = intl.string(initialAnimation(1212).t["m+sRVL"]);
        stringResult5 = stringResult;
      }
    }
    if (tmp6) {
      if (first === VoiceMessageAnimationState.SENDING) {
        const intl6 = initialAnimation(1212).intl;
        const stringResult1 = intl6.string(initialAnimation(1212).t["zPxm/X"]);
        stringResult5 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp6) {
      if (first === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = initialAnimation(1212).intl;
        const stringResult2 = intl5.string(initialAnimation(1212).t.sB81Bo);
        stringResult5 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp6) {
      if (first === VoiceMessageAnimationState.SENDING) {
        const intl2 = initialAnimation(1212).intl;
        const stringResult3 = intl2.string(initialAnimation(1212).t.cyL7DJ);
        stringResult5 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp6) {
      if (first === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = initialAnimation(1212).intl;
        const stringResult4 = intl3.string(initialAnimation(1212).t["a+A3+f"]);
        stringResult5 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp6) {
      tmp6 = first !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp6) {
      const intl4 = initialAnimation(1212).intl;
      stringResult5 = intl4.string(initialAnimation(1212).t["3qvtks"]);
      stringResult = stringResult5;
    }
  }
  const items = [stringResult];
  const effect = stringResult5.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  initialAnimation(4026);
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
    obj = { style: tmp35, variant: "text-sm/medium", color: "text-overlay-light" };
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
  ({ voiceMessageAnimationState, exiting } = channelId);
  let obj = channelId(3869);
  const token = obj.useToken(exiting(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp2 = callback5(token);
  const insets = exiting(5193)({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets;
  const tmp3 = exiting(1557)();
  const dependencyMap = tmp3;
  const diff = insets.bottom - tmp3.bottom;
  const bottom = insets.bottom;
  const tmp5 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  const tmp6 = (function useEntryAnimationValues(arg0, exiting) {
    let closure_0 = arg0;
    let closure_1 = exiting;
    const initialAnimation = channelId(tmp3[11]).useSharedValue(0);
    let _slicedToArray = initialAnimation.useRef(performance.now());
    const items = [initialAnimation];
    const effect = initialAnimation.useEffect(() => {
      let obj = channelId(initialAnimation[11]);
      obj = { easing: channelId(initialAnimation[11]).Easing.quad, duration: 250 };
      const result = initialAnimation.set(obj.withDelay(500, channelId(initialAnimation[25]).withTiming(1, obj)));
    }, items);
    const items1 = [initialAnimation, exiting];
    const effect1 = initialAnimation.useEffect(() => {
      if (closure_1) {
        let obj = channelId(initialAnimation[25]);
        obj = { easing: channelId(initialAnimation[11]).Easing.quad, duration: 100 };
        const result = initialAnimation.set(obj.withTiming(0, obj));
      }
    }, items1);
    let obj = channelId(tmp3[11]);
    const recordingAnimation = channelId(tmp3[11]).useSharedValue(0);
    const items2 = [initialAnimation, recordingAnimation, arg0];
    const effect2 = initialAnimation.useEffect(() => {
      if (closure_0) {
        let obj = channelId(initialAnimation[25]);
        obj = { easing: channelId(initialAnimation[11]).Easing.quad, duration: 200 };
        const result = recordingAnimation.set(obj.withTiming(1, obj));
        const _performance = performance;
        if (performance.now() - ref.current < 500) {
          obj = { easing: channelId(initialAnimation[11]).Easing.quad, duration: 250 };
          const result1 = initialAnimation.set(channelId(initialAnimation[25]).withTiming(1, obj));
          const obj3 = channelId(initialAnimation[25]);
        }
      }
    }, items2);
    return { initialAnimation, recordingAnimation };
  })(tmp5, exiting);
  let initialAnimation = tmp6.initialAnimation;
  let recordingAnimation = tmp6.recordingAnimation;
  const ref = initialAnimation.useRef(null);
  let effect = initialAnimation.useEffect(() => {
    let obj = channelId(tmp3[33]);
    if (obj.getIsScreenReaderEnabled()) {
      obj = { ref };
      const result = channelId(tmp3[34]).setAccessibilityFocus(obj);
      const obj2 = channelId(tmp3[34]);
    }
  }, []);
  let items = [channelId];
  let effect1 = initialAnimation.useEffect(() => {
    let closure_0 = tmp16.addEventListener("change", (arg0) => {
      let tmp = "inactive" !== arg0;
      if (tmp) {
        tmp = "background" !== arg0;
      }
      if (!tmp) {
        const ComponentDispatch = channelId(1207).ComponentDispatch;
        const obj = { isCancelling: true, cancelReason: channelId(11040).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
        ComponentDispatch.dispatchKeyed(outer2_12.VOICE_MESSAGE_SEND, closure_0, obj);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items);
  let obj1 = channelId(1324);
  let result = 5 * exiting(1450)().width / 2;
  let obj2 = channelId(3869);
  const token1 = obj2.useToken(exiting(689).colors.ICON_DEFAULT);
  let obj3 = channelId(3869);
  let string = obj3.useToken(exiting(689).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj4 = channelId(3869);
  let token2 = obj4.useToken(exiting(689).modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE);
  let obj5 = channelId(3869);
  let token3 = obj5.useToken(exiting(689).colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND);
  let obj6 = channelId(3869);
  let intl = obj6.useToken(exiting(689).colors.CONTROL_PRIMARY_BORDER_DEFAULT);
  let obj7 = channelId(3869);
  const token4 = obj7.useToken(exiting(689).colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT);
  const tmp16 = useDerivedColors(voiceMessageAnimationState, exiting(689).unsafe_rawColors.BRAND_600, exiting(689).unsafe_rawColors.WHITE, exiting(689).unsafe_rawColors.BRAND_600, exiting(689).unsafe_rawColors.BRAND_600);
  let closure_7 = tmp16;
  let obj8 = channelId(4026);
  class R {
    constructor() {
      obj = { marginLeft: 16 * (1 - initialAnimation.get()), marginRight: 8 - 16 * (1 - initialAnimation.get()), backgroundColor: closure_7.get() };
      return obj;
    }
  }
  R.__closure = { INITIAL_SHIFT: 8, initialAnimation, trashContainerBgColor: tmp16 };
  R.__workletHash = 16442762939311;
  R.__initData = closure_45;
  const animatedStyle = obj8.useAnimatedStyle(R);
  const tmp18 = useDerivedColors(voiceMessageAnimationState, exiting(689).unsafe_rawColors.WHITE, exiting(689).unsafe_rawColors.RED_500, exiting(689).unsafe_rawColors.WHITE, exiting(689).unsafe_rawColors.WHITE);
  let _isNativeReflectConstruct = tmp18;
  let obj9 = channelId(4026);
  class G {
    constructor() {
      obj = { tintColor: _isNativeReflectConstruct.get() };
      return obj;
    }
  }
  G.__closure = { trashIconColor: tmp18 };
  G.__workletHash = 4758994609248;
  G.__initData = closure_46;
  const animatedStyle1 = obj9.useAnimatedStyle(G);
  const tmp20 = useDerivedColors(voiceMessageAnimationState, exiting(689).unsafe_rawColors.WHITE, exiting(689).unsafe_rawColors.RED_500, exiting(689).unsafe_rawColors.BRAND_600, exiting(689).unsafe_rawColors.WHITE);
  let closure_9 = tmp20;
  let obj10 = channelId(4026);
  const fn = function x() {
    return { opacity: 0.5 + 0.5 * recordingAnimation.get(), backgroundColor: tmp20.get() };
  };
  fn.__closure = { recordingAnimation, sendContainerBgColor: tmp20 };
  fn.__workletHash = 2463646995928;
  fn.__initData = closure_47;
  const animatedStyle2 = obj10.useAnimatedStyle(fn);
  const tmp22 = useDerivedColors(voiceMessageAnimationState, PLUM_13, exiting(689).unsafe_rawColors.WHITE, exiting(689).unsafe_rawColors.WHITE, PLUM_13);
  useVoiceMessagesUIStore = tmp22;
  let obj11 = channelId(4026);
  class B {
    constructor() {
      obj = { tintColor: useEffect.get() };
      return obj;
    }
  }
  B.__closure = { sendIconColor: tmp22 };
  B.__workletHash = 13732877930795;
  B.__initData = closure_48;
  const animatedStyle3 = obj11.useAnimatedStyle(B);
  let obj12 = channelId(4026);
  class U {
    constructor() {
      obj = { opacity: initialAnimation.get() };
      return obj;
    }
  }
  U.__closure = { initialAnimation };
  U.__workletHash = 11009128299499;
  U.__initData = closure_49;
  const animatedStyle4 = obj12.useAnimatedStyle(U);
  let obj13 = channelId(4026);
  class F {
    constructor() {
      num = 12;
      if (exiting) {
        num = 24;
      }
      obj = { opacity: initialAnimation.get() };
      obj.bottom = _slicedToArray - num * (1 - initialAnimation.get());
      return obj;
    }
  }
  F.__closure = { exiting, INITIAL_SHIFT: 8, initialAnimation, keyboardHeight: diff };
  F.__workletHash = 4588671012938;
  F.__initData = closure_50;
  const animatedStyle5 = obj13.useAnimatedStyle(F);
  let obj14 = channelId(10635);
  const wakeLock = obj14.useWakeLock("VoiceMessageOverlay");
  let obj15 = channelId(4026);
  class Ie {
    constructor() {
      return closure_2.bottom + outer1_14 * (1.6 + 0.3 * recordingAnimation.get());
    }
  }
  obj = { insetsNoKeyboard: tmp3, CHAT_INPUT_HEIGHT: closure_14, recordingAnimation };
  Ie.__closure = obj;
  Ie.__workletHash = 14315468936108;
  Ie.__initData = closure_51;
  const derivedValue = obj15.useDerivedValue(Ie);
  let obj17 = channelId(4026);
  function me() {
    return tmp3.bottom + 1.6 * outer1_14;
  }
  obj = { insetsNoKeyboard: tmp3, CHAT_INPUT_HEIGHT: closure_14 };
  me.__closure = obj;
  me.__workletHash = 5416150236821;
  me.__initData = closure_52;
  obj1 = {};
  const derivedValue1 = obj17.useDerivedValue(me);
  obj2 = { style: items1, pointerEvents: "none" };
  items1 = [tmp2.container, animatedStyle5];
  obj3 = { height: derivedValue, offsetThreshold: 60, opacity: 0.24, radius: result, voiceMessageAnimationState };
  let items2 = [callback2(closure_30, obj3), callback2(closure_30, { height: derivedValue1, offsetThreshold: 30, radius: result, voiceMessageAnimationState })];
  obj2.children = items2;
  const items3 = [callback3(exiting(4026).View, obj2), , ];
  obj4 = { style: items4 };
  items4 = [tmp2.contentContainer, { bottom }, animatedStyle4];
  const items5 = [callback2(closure_33, { initialAnimation, recordingAnimation, exiting }), ];
  obj5 = { style: tmp2.innerContainer };
  if (obj1.useMobileVisualRefreshConfig({ location: "VoiceMessageOverlay" }).chatInputFloating) {
    obj6 = { style: tmp2.voiceChatContainer };
    obj7 = { isRecording: tmp5, initialAnimation };
    obj8 = {};
    const tmp53 = callback2;
    const tmp54 = exiting;
    const tmp56 = callback2;
    const tmp57 = exiting(11715);
    obj8.icon = exiting(4125);
    obj8.tintColor = token1;
    obj8.boxSize = token;
    obj8.iconSize = token2;
    const intl4 = channelId(1212).intl;
    obj8.accessibilityLabel = intl4.string(channelId(1212).t.RdK9sV);
    obj8.onPressIn = function onPressIn() {
      return channelId(tmp3[42]).triggerHaptic();
    };
    obj8.onPress = function onPress() {
      const ComponentDispatch = channelId(tmp3[35]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, channelId, { isCancelling: true });
    };
    obj7.leftAccessory = callback2(exiting(11716), obj8);
    obj9 = { ref };
    const tmp59 = exiting(11716);
    const tmp61 = callback2;
    if (tmp5) {
      let tmp64 = 4112;
    } else {
      tmp64 = 10776;
    }
    obj9.icon = tmp54(tmp64);
    obj9.tintColor = token4;
    obj9.backgroundColor = token3;
    obj9.borderColor = intl;
    obj9.boxSize = string;
    obj9.iconSize = token2;
    token3 = channelId;
    intl = channelId(1212).intl;
    string = intl.string;
    token2 = string(channelId(1212).t["+8GStU"]);
    obj9.accessibilityLabel = token2;
    obj9.onPress = function onPress() {
      const ComponentDispatch = channelId(tmp3[35]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, channelId, { isCancelling: false });
    };
    obj9 = tmp61(exiting(11716), obj9);
    obj7.rightAccessory = obj9;
    obj7 = tmp56(tmp57, obj7);
    obj6.children = obj7;
    tmp53(exiting(4026).View, obj6);
    const tmp62 = exiting(11716);
  } else {
    obj10 = {};
    obj11 = {};
    const items6 = [tmp2.trashContainer, animatedStyle];
    obj11.style = items6;
    obj11.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
    obj11.accessibilityRole = "button";
    const intl2 = channelId(1212).intl;
    obj11.accessibilityLabel = intl2.string(channelId(1212).t.RdK9sV);
    obj11.onPressIn = function onPressIn() {
      return channelId(tmp3[42]).triggerHaptic();
    };
    obj11.onPress = function onPress() {
      const ComponentDispatch = channelId(tmp3[35]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, channelId, { isCancelling: true });
    };
    obj12 = { style: animatedStyle1, source: exiting(4125), size: channelId(1273).Icon.Sizes.MEDIUM };
    obj11.children = callback2(closure_19, obj12);
    const items7 = [callback2(closure_20, obj11), , ];
    obj13 = { style: tmp2.voiceChatContainer };
    obj14 = { isRecording: tmp5, initialAnimation, backgroundColor: tmp15 };
    obj13.children = callback2(exiting(11715), obj14);
    items7[1] = callback2(exiting(4026).View, obj13);
    obj15 = { ref };
    const items8 = [tmp2.sendContainer, animatedStyle2];
    obj15.style = items8;
    obj15.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
    obj15.accessibilityRole = "button";
    const intl3 = channelId(1212).intl;
    obj15.accessibilityLabel = intl3.string(channelId(1212).t["+8GStU"]);
    obj15.onPress = function onPress() {
      const ComponentDispatch = channelId(tmp3[35]).ComponentDispatch;
      ComponentDispatch.dispatchKeyed(outer1_12.VOICE_MESSAGE_SEND, channelId, { isCancelling: false });
    };
    const obj16 = { style: animatedStyle3 };
    if (tmp5) {
      let tmp50 = 4112;
    } else {
      tmp50 = 10776;
    }
    obj16.source = exiting(tmp50);
    obj16.size = channelId(1273).Icon.Sizes.MEDIUM;
    obj15.children = callback2(closure_19, obj16);
    items7[2] = callback2(closure_20, obj15);
    obj10.children = items7;
    obj5.children = callback3(closure_18, obj10);
    items5[1] = tmp32(tmp33, obj5);
    obj4.children = items5;
    items3[1] = callback3(exiting(4026).View, obj4);
    obj17 = { safeAreaBottom: bottom, initialAnimation, voiceMessageAnimationState };
    items3[2] = callback2(LockPill, obj17);
    obj1.children = items3;
    return callback3(closure_18, obj1);
  }
});
const memoResult1 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  const importDefault = tmp;
  let obj = channelId(566);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  const tmp3 = callback(importAllResult.useState(tmp), 2);
  const dependencyMap = tmp3[1];
  const items1 = [tmp];
  const effect = importAllResult.useEffect(() => {
    if (closure_1) {
      callback(true);
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => outer1_2(false), 100);
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default memoResult1;
export const VoiceMessageEllipse = memoResult;
