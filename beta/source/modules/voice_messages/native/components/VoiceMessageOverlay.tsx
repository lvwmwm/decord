// Module ID: 12142
// Function ID: 12143
// Name: VoiceMessageOverlay
// Dependencies: [32, 19, 17, 4825, 2045, 11442, 11443, 1074, 11444, 21, 4566, 1177, 4832, 12, 7909, 4836, 576, 5753, 504, 4531, 5898, 1115, 4837, 5383, 9712, 12143, 6402, 11900, 5266, 5275, 1110, 11352, 8919, 11743, 12144, 7363, 4791, 11738, 11721, 4777, 9465, 2]

// Module 12142 (VoiceMessageOverlay)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import intl7 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import useRefValueDefault from "useRefValue" /* 5898 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 11442 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 11443 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import module_12 from "module_12" /* 12 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport_mod = ReanimatedRexport2;
let _require, channelId, dependencyMap, set, set2;

let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp;
const react_native = tmp(5275);
function LockPill(safeAreaBottom) {
  let View2;
  let closure_3;
  let first;
  let items1;
  let items2;
  let items3;
  let obj31;
  let tmp4;
  safeAreaBottom = safeAreaBottom.safeAreaBottom;
  const initialAnimation = safeAreaBottom.initialAnimation;
  const voiceMessageAnimationState = safeAreaBottom.voiceMessageAnimationState;
  let tmp = closure_21();
  [first, tmp4] = react.useState(false);
  _slicedToArray = tmp4;
  let obj = safeAreaBottom(voiceMessageAnimationState[10]);
  const fn = function _() {
    const tmp2 = voiceMessageAnimationState.get()[1] === VoiceMessageAnimationState.LOCKED || voiceMessageAnimationState.get()[1] === tmp.LOCKING;
    return tmp2;
  };
  let obj2 = { voiceMessageAnimationState, VoiceMessageAnimationState };
  fn.__closure = obj2;
  fn.__workletHash = 11711445602143;
  fn.__initData = __initData14;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(closure_3)(arg0);
    }
  };
  let obj3 = { runOnJS: safeAreaBottom(voiceMessageAnimationState[10]).runOnJS, setLocked: tmp4 };
  fn2.__closure = obj3;
  fn2.__workletHash = 7476668458521;
  fn2.__initData = __initData15;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let obj4 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token = obj4.useToken(initialAnimation(voiceMessageAnimationState[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_DEFAULT);
  let obj5 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token1 = obj5.useToken(initialAnimation(voiceMessageAnimationState[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_BACKGROUND_ACTIVE);
  const fn3 = function _() {
    const tmp = voiceMessageAnimationState.get()[1];
    const obj = radius(offsetThreshold[22]);
    const obj2 = { easing: radius(offsetThreshold[10]).Easing.linear, duration: 150 };
    return obj.withTiming(tmp, obj2);
  };
  const obj6 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn3.__closure = { voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing };
  fn3.__workletHash = 8516919791077;
  fn3.__initData = __initData6;
  ({ voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing });
  const derivedValue = obj6.useDerivedValue(fn3);
  const fn4 = function u() {
    let items1;
    const tmp = stateFromStores(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [token, token, token, token];
      items1 = items;
    } else {
      items1 = [token, RED_400, token, token];
    }
    const obj = radius(offsetThreshold[10]);
    return obj.interpolateColor(derivedValue1.get(), closure_2_22, items1);
  };
  const obj8 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn4.__closure = { voiceMessageAnimationState, sendingColor: token, lockingColor: token1, lockedColor: token1, cancelingColor: token, interpolateColor: safeAreaBottom(voiceMessageAnimationState[10]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn4.__workletHash = 4463544053380;
  fn4.__initData = __initData7;
  ({ voiceMessageAnimationState, sendingColor: token, lockingColor: token1, lockedColor: token1, cancelingColor: token, interpolateColor: safeAreaBottom(voiceMessageAnimationState[10]).interpolateColor, timing: derivedValue, VOICE_MESSAGE_ANIMATION_STATES: items });
  const derivedValue1 = obj8.useDerivedValue(fn4);
  const obj10 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token2 = obj10.useToken(initialAnimation(voiceMessageAnimationState[16]).modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH);
  const result = -v56 - token2 / 2;
  let c3 = result;
  const obj11 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token3 = obj11.useToken(initialAnimation(voiceMessageAnimationState[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_DEFAULT);
  const obj12 = safeAreaBottom(voiceMessageAnimationState[19]);
  const token4 = obj12.useToken(initialAnimation(voiceMessageAnimationState[16]).colors.MOBILE_VOICE_MESSAGE_RECORDING_LOCK_ICON_ACTIVE);
  const fn5 = function _() {
    const tmp = voiceMessageAnimationState.get()[1];
    const obj = radius(offsetThreshold[22]);
    const obj2 = { easing: radius(offsetThreshold[10]).Easing.linear, duration: 150 };
    return obj.withTiming(tmp, obj2);
  };
  const obj13 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn5.__closure = { voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing };
  fn5.__workletHash = 8516919791077;
  fn5.__initData = __initData6;
  ({ voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing });
  const derivedValue2 = obj13.useDerivedValue(fn5);
  const fn6 = function u() {
    let items1;
    const tmp = stateFromStores(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [token, token, token, token];
      items1 = items;
    } else {
      items1 = [token, RED_400, token, token];
    }
    const obj = radius(offsetThreshold[10]);
    return obj.interpolateColor(derivedValue1.get(), closure_2_22, items1);
  };
  const obj15 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn6.__closure = { voiceMessageAnimationState, sendingColor: token3, lockingColor: token4, lockedColor: token4, cancelingColor: token3, interpolateColor: safeAreaBottom(voiceMessageAnimationState[10]).interpolateColor, timing: derivedValue2, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn6.__workletHash = 4463544053380;
  fn6.__initData = __initData7;
  ({ voiceMessageAnimationState, sendingColor: token3, lockingColor: token4, lockedColor: token4, cancelingColor: token3, interpolateColor: safeAreaBottom(voiceMessageAnimationState[10]).interpolateColor, timing: derivedValue2, VOICE_MESSAGE_ANIMATION_STATES: items });
  const derivedValue3 = obj15.useDerivedValue(fn6);
  const fn7 = function o() {
    const tmp = voiceMessageAnimationState.get()[1];
    const obj = safeAreaBottom(voiceMessageAnimationState[22]);
    const obj2 = { easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing.linear, duration: 150 };
    return obj.withTiming(tmp, obj2);
  };
  const obj17 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn7.__closure = { voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing };
  fn7.__workletHash = 11443022128299;
  fn7.__initData = __initData8;
  ({ voiceMessageAnimationState, withTiming: safeAreaBottom(voiceMessageAnimationState[22]).withTiming, Easing: safeAreaBottom(voiceMessageAnimationState[10]).Easing });
  const derivedValue4 = obj17.useDerivedValue(fn7);
  const fn8 = function s() {
    const tmp = _undefined(voiceMessageAnimationState.get(), 2);
    const tmp2 = tmp[0] + tmp[1] === 2 ? [1, 1, 1, 0] : [1, 0, 1, 0];
    const obj = safeAreaBottom(voiceMessageAnimationState[10]);
    return obj.interpolate(derivedValue4.get(), items, tmp2);
  };
  const obj19 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn8.__closure = { voiceMessageAnimationState, interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn8.__workletHash = 467806088074;
  fn8.__initData = __initData9;
  ({ voiceMessageAnimationState, interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items });
  const derivedValue5 = obj19.useDerivedValue(fn8);
  const fn9 = function l() {
    let obj2;
    const obj = { height: obj2.interpolate(derivedValue4.get(), closure_2_22, items) };
    items = [v68, v68, 104, 104];
    obj2 = safeAreaBottom(voiceMessageAnimationState[10]);
    return obj;
  };
  const obj21 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn9.__closure = { interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 };
  fn9.__workletHash = 1225730432489;
  fn9.__initData = __initData10;
  ({ interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, LOCK_PILL_RESTING_HEIGHT: v68 });
  const animatedStyle = obj21.useAnimatedStyle(fn9);
  const fn10 = function c() {
    let items1;
    let items2;
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    size = { width: obj2.interpolate(derivedValue4.get(), closure_2_22, items), height: obj3.interpolate(derivedValue4.get(), closure_2_22, items1), opacity: derivedValue5.get(), backgroundColor: derivedValue1.get(), marginHorizontal: obj4.interpolate(derivedValue4.get(), closure_2_22, items2), marginBottom: obj5.interpolate(derivedValue4.get(), closure_2_22, [0, 0, 36, 36]) };
    items = [token2, token2, v56, v56];
    items1 = [v68, v68, v56, v56];
    obj2 = safeAreaBottom(voiceMessageAnimationState[10]);
    items2 = [0, 0, c3, c3];
    obj3 = safeAreaBottom(voiceMessageAnimationState[10]);
    obj4 = safeAreaBottom(voiceMessageAnimationState[10]);
    obj5 = safeAreaBottom(voiceMessageAnimationState[10]);
    return size;
  };
  const obj23 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn10.__closure = { interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue5, lockedBackgroundColor: derivedValue1, lockPillLockedOverhang: result };
  fn10.__workletHash = 12418415107450;
  fn10.__initData = __initData11;
  ({ interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockPillWidth: token2, LOCK_PILL_LOCKED_SIZE: v56, LOCK_PILL_RESTING_HEIGHT: v68, lockContainerOpacity: derivedValue5, lockedBackgroundColor: derivedValue1, lockPillLockedOverhang: result });
  const animatedStyle1 = obj23.useAnimatedStyle(fn10);
  const fn11 = function _() {
    let obj2;
    let obj3;
    let obj4;
    size = { width: obj2.interpolate(derivedValue4.get(), items, [24, 24, 32, 32]), height: obj3.interpolate(derivedValue4.get(), items, [24, 24, 32, 32]), marginTop: obj4.interpolate(derivedValue4.get(), items, [12, 12, 10, 10]), tintColor: derivedValue3.get() };
    obj2 = safeAreaBottom(voiceMessageAnimationState[10]);
    obj3 = safeAreaBottom(voiceMessageAnimationState[10]);
    obj4 = safeAreaBottom(voiceMessageAnimationState[10]);
    return size;
  };
  const obj25 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn11.__closure = { interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: derivedValue3 };
  fn11.__workletHash = 10749462388463;
  fn11.__initData = __initData12;
  ({ interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items, lockIconColor: derivedValue3 });
  const animatedStyle2 = obj25.useAnimatedStyle(fn11);
  const fn12 = function u() {
    let obj2;
    const obj = { opacity: obj2.interpolate(derivedValue4.get(), items, [1, 1, 0, 0]) };
    obj2 = safeAreaBottom(voiceMessageAnimationState[10]);
    return obj;
  };
  const obj27 = safeAreaBottom(voiceMessageAnimationState[10]);
  fn12.__closure = { interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn12.__workletHash = 8995549322978;
  fn12.__initData = __initData13;
  ({ interpolate: safeAreaBottom(voiceMessageAnimationState[10]).interpolate, timing: derivedValue4, VOICE_MESSAGE_ANIMATION_STATES: items });
  const animatedStyle3 = obj27.useAnimatedStyle(fn12);
  const tmp8Result = initialAnimation(first ? voiceMessageAnimationState[23] : voiceMessageAnimationState[24]);
  const tmp5Result = safeAreaBottom(voiceMessageAnimationState[10]);
  class M {
    constructor() {
      let sum;
      const obj = { opacity: initialAnimation.get(), bottom: sum + 8 * initialAnimation.get() };
      sum = safeAreaBottom + CHAT_INPUT_HEIGHT + 24;
      return obj;
    }
  }
  const obj29 = { initialAnimation, safeAreaBottom, CHAT_INPUT_HEIGHT, LOCK_PILL_BOTTOM_OFFSET: 32, INITIAL_SHIFT: 8 };
  M.__closure = obj29;
  M.__workletHash = 17067557493480;
  M.__initData = __initData16;
  const animatedStyle4 = tmp5Result.useAnimatedStyle(M);
  const obj30 = { style: items, children: closure_14(View2, obj31) };
  items = [tmp.lockParentContainer, animatedStyle, animatedStyle4];
  const View = tmp8(tmp6[10]).View;
  obj31 = { style: items1, children: items2 };
  items1 = [tmp.lockContainer, animatedStyle1];
  View2 = tmp8(tmp6[10]).View;
  items2 = [closure_13(closure_16, { style: animatedStyle2, source: tmp8Result }), ];
  const obj32 = { style: items3, source: initialAnimation(voiceMessageAnimationState[25]) };
  items3 = [tmp.chevon, animatedStyle3];
  items2[1] = closure_13(closure_16, obj32);
  return closure_13(View, obj30);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, AppState: metroRequire } = react_native2);
const useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
const VoiceMessageAnimationState = VoiceMessageConstants.VoiceMessageAnimationState;
const ComponentActionsKeyed = Constants.ComponentActionsKeyed;
const CHAT_INPUT_HEIGHT = ChatInputConstants.CHAT_INPUT_HEIGHT;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_16 = ReanimatedRexport.createAnimatedComponent(native.Icon);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_17 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let closure_18 = module_12.memoize(() => {
  const obj = ReanimatedRexport;
  return obj.createAnimatedComponent(inlineStyles.Ellipse);
});
let c19 = 68;
let c20 = 56;
let closure_21 = createStyles.createStyles(() => {
  let size1;
  let size2;
  const obj = { innerContainer: { flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM }, contentContainer: { position: "absolute", bottom: 0, width: "100%", alignItems: "center", overflow: "hidden" }, contentContainerFloating: { justifyContent: "flex-end", overflow: "visible" }, floatingSendButton: size, floatingSendButtonActive: { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND }, floatingSendButtonIconActive: { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT }, voiceChatContainer: { flex: 1, height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" }, lockContainer: size1, lockParentContainer: { position: "absolute", right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH }, chevon: size2 };
  ({ flexDirection: "row", alignItems: "flex-end", paddingTop: 8, paddingHorizontal: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL, paddingBottom: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM });
  size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
  ({ backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND });
  ({ tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT });
  ({ flex: 1, height: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT, marginRight: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT, alignItems: "flex-end" });
  size1 = { height, width, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, display: "flex", alignItems: "center", flexDirection: "column", elevation: 12, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.12, shadowRadius: 36, borderWidth: LegacyTokens.DARK_0_LIGHT_1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)" };
  ({ position: "absolute", right: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT, width: nativeDefault.modules.mobile.VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH });
  size2 = { height: 16, width: 16, marginTop: 8, tintColor: nativeDefault.colors.ICON_SUBTLE };
  return obj;
});
let items = [, , , ];
({ SENDING: arr[0], CANCELLING: arr[1], LOCKING: arr[2], LOCKED: arr[3] } = VoiceMessageAnimationState);
const __initData = { code: "function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}" };
const __initData2 = { code: "function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}" };
const __initData3 = { code: "function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}" };
const __initData4 = { code: "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}" };
const __initData5 = { code: "function VoiceMessageOverlayTsx5(){const{initialAnimation,recordingAnimation}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue};}" };
const memoResult = react.memo((radius) => {
  let Svg;
  let obj12;
  radius = radius.radius;
  height = radius.height;
  const offsetThreshold = radius.offsetThreshold;
  const voiceMessageAnimationState = radius.voiceMessageAnimationState;
  let derivedValue3;
  const opacity = radius.opacity;
  let obj = radius(offsetThreshold[18]);
  items = [derivedValue3];
  const stateFromStores = obj.useStateFromStores(items, () => derivedValue3.useReducedMotion, []);
  const tmp2 = useVoiceMessagesUIStore((currWaveHeight) => currWaveHeight.currWaveHeight);
  let closure_4 = tmp2;
  let obj2 = radius(offsetThreshold[10]);
  const fn = function _() {
    let num = 0.5;
    if (!stateFromStores) {
      let num2;
      const obj = closure_4;
      if (closure_4 != null) {
        num2 = obj.get();
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    return num;
  };
  fn.__closure = { useReducedMotion: stateFromStores, currWaveHeight: tmp2 };
  fn.__workletHash = 2925868096827;
  fn.__initData = __initData;
  const derivedValue = obj2.useDerivedValue(fn);
  const obj3 = radius(offsetThreshold[19]);
  const token = obj3.useToken(height(offsetThreshold[16]).colors.BACKGROUND_BRAND);
  const RED_400 = height(offsetThreshold[16]).unsafe_rawColors.RED_400;
  const fn2 = function _() {
    const tmp = voiceMessageAnimationState.get()[1];
    const obj = radius(offsetThreshold[22]);
    const obj2 = { easing: radius(offsetThreshold[10]).Easing.linear, duration: 150 };
    return obj.withTiming(tmp, obj2);
  };
  const obj4 = radius(offsetThreshold[10]);
  fn2.__closure = { voiceMessageAnimationState, withTiming: radius(offsetThreshold[22]).withTiming, Easing: radius(offsetThreshold[10]).Easing };
  fn2.__workletHash = 8516919791077;
  fn2.__initData = __initData6;
  ({ voiceMessageAnimationState, withTiming: radius(offsetThreshold[22]).withTiming, Easing: radius(offsetThreshold[10]).Easing });
  const derivedValue1 = obj4.useDerivedValue(fn2);
  const fn3 = function u() {
    let items1;
    const tmp = stateFromStores(voiceMessageAnimationState.get(), 2);
    if (tmp[0] + tmp[1] === 2) {
      items = [token, token, token, token];
      items1 = items;
    } else {
      items1 = [token, RED_400, token, token];
    }
    const obj = radius(offsetThreshold[10]);
    return obj.interpolateColor(derivedValue1.get(), closure_2_22, items1);
  };
  const obj6 = radius(offsetThreshold[10]);
  fn3.__closure = { voiceMessageAnimationState, sendingColor: token, lockingColor: token, lockedColor: token, cancelingColor: RED_400, interpolateColor: radius(offsetThreshold[10]).interpolateColor, timing: derivedValue1, VOICE_MESSAGE_ANIMATION_STATES: items };
  fn3.__workletHash = 4463544053380;
  fn3.__initData = __initData7;
  ({ voiceMessageAnimationState, sendingColor: token, lockingColor: token, lockedColor: token, cancelingColor: RED_400, interpolateColor: radius(offsetThreshold[10]).interpolateColor, timing: derivedValue1, VOICE_MESSAGE_ANIMATION_STATES: items });
  const derivedValue2 = obj6.useDerivedValue(fn3);
  const obj8 = radius(offsetThreshold[10]);
  class E {
    constructor() {
      return derivedValue.get() * offsetThreshold;
    }
  }
  E.__closure = { derivedCurrWaveHeight: derivedValue, offsetThreshold };
  E.__workletHash = 7278593580538;
  E.__initData = __initData2;
  derivedValue3 = obj8.useDerivedValue(E);
  const obj9 = radius(offsetThreshold[10]);
  class S {
    constructor() {
      const obj = { fill: derivedValue2.get(), ry: radius + derivedValue3.get(), rx: radius, cy: radius + derivedValue3.get(), cx: radius };
      return obj;
    }
  }
  S.__closure = { voiceMessageEllipseBgColor: derivedValue2, radius, offset: derivedValue3 };
  S.__workletHash = 12489173275515;
  S.__initData = __initData3;
  const animatedProps = obj9.useAnimatedProps(S);
  const obj10 = radius(offsetThreshold[10]);
  class I {
    constructor() {
      let value;
      size = { position: "absolute", width: 2 * radius, height: value + derivedValue3.get(), bottom: 0 };
      value = height.get();
      return size;
    }
  }
  I.__closure = { radius, height, offset: derivedValue3 };
  I.__workletHash = 16593476434034;
  I.__initData = __initData4;
  const animatedStyle = obj10.useAnimatedStyle(I);
  const obj11 = { style: animatedStyle, children: closure_13(Svg, obj12) };
  const tmp10 = closure_18();
  const View = height(offsetThreshold[10]).View;
  obj12 = { children: closure_13(tmp10, { animatedProps, opacity }) };
  Svg = radius(offsetThreshold[14]).Svg;
  return closure_13(View, obj11);
});
let closure_28 = react.memo((initialAnimation) => {
  let stringResult;
  initialAnimation = initialAnimation.initialAnimation;
  const recordingAnimation = initialAnimation.recordingAnimation;
  const voiceMessageState = initialAnimation.voiceMessageState;
  let stringResult5;
  const exiting = initialAnimation.exiting;
  const tmp = useVoiceMessagesUIStore((isUsingHoldGesture) => isUsingHoldGesture.isUsingHoldGesture);
  let tmp2 = useVoiceMessagesUIStore((savedVoiceMessageUploadData) => null != savedVoiceMessageUploadData.savedVoiceMessageUploadData);
  let obj = react;
  const ref = react.useRef(undefined);
  const tmp5 = useRefValueDefault(ref);
  if (exiting) {
    stringResult5 = tmp5;
    stringResult = tmp5;
  } else {
    if (tmp2) {
      if (!tmp) {
        const intl = intl7.intl;
        stringResult = intl.string(intl7.t["m+sRVL"]);
        stringResult5 = stringResult;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl6 = intl7.intl;
        const stringResult1 = intl6.string(intl7.t["zPxm/X"]);
        stringResult5 = stringResult1;
        stringResult = stringResult1;
      }
    }
    if (tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl5 = intl7.intl;
        const stringResult2 = intl5.string(intl7.t.sB81Bo);
        stringResult5 = stringResult2;
        stringResult = stringResult2;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.SENDING) {
        const intl2 = intl7.intl;
        const stringResult3 = intl2.string(intl7.t.cyL7DJ);
        stringResult5 = stringResult3;
        stringResult = stringResult3;
      }
    }
    if (!tmp2) {
      if (voiceMessageState === VoiceMessageAnimationState.CANCELLING) {
        const intl3 = intl7.intl;
        const stringResult4 = intl3.string(intl7.t["a+A3+f"]);
        stringResult5 = stringResult4;
        stringResult = stringResult4;
      }
    }
    if (!tmp2) {
      tmp2 = voiceMessageState !== VoiceMessageAnimationState.LOCKING;
    }
    if (!tmp2) {
      const intl4 = intl7.intl;
      stringResult5 = intl4.string(intl7.t["3qvtks"]);
      stringResult = stringResult5;
    }
  }
  items = [stringResult];
  const effect = obj.useEffect(() => {
    ref.current = stringResult5;
  }, items);
  ReanimatedRexport2;
  class C {
    constructor() {
      let min;
      let value;
      const obj = { opacity: min(value, recordingAnimation.get()) };
      min = Math.min;
      value = initialAnimation.get();
      return obj;
    }
  }
  C.__closure = { initialAnimation, recordingAnimation };
  C.__workletHash = 792702950481;
  C.__initData = __initData5;
  let tmp26 = null;
  if (null != stringResult) {
    const obj2 = { style: tmp25, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: 2, children: stringResult };
    tmp26 = map1(closure_17, obj2);
  }
  return tmp26;
});
const __initData6 = { code: "function VoiceMessageOverlayTsx6(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
const __initData7 = { code: "function VoiceMessageOverlayTsx7(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}" };
const __initData8 = { code: "function VoiceMessageOverlayTsx8(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}" };
const __initData9 = { code: "function VoiceMessageOverlayTsx9(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}" };
const __initData10 = { code: "function VoiceMessageOverlayTsx10(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,LOCK_PILL_RESTING_HEIGHT}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,104,104])};}" };
const __initData11 = { code: "function VoiceMessageOverlayTsx11(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_RESTING_HEIGHT,lockContainerOpacity,lockedBackgroundColor,lockPillLockedOverhang}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[lockPillWidth,lockPillWidth,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_RESTING_HEIGHT,LOCK_PILL_LOCKED_SIZE,LOCK_PILL_LOCKED_SIZE]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,lockPillLockedOverhang,lockPillLockedOverhang]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}" };
const __initData12 = { code: "function VoiceMessageOverlayTsx12(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}" };
const __initData13 = { code: "function VoiceMessageOverlayTsx13(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}" };
const __initData14 = { code: "function VoiceMessageOverlayTsx14(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}" };
const __initData15 = { code: "function VoiceMessageOverlayTsx15(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}" };
const __initData16 = { code: "function VoiceMessageOverlayTsx16(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}" };
const __initData17 = { code: "function VoiceMessageOverlayTsx17(){const{voiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1];}" };
const __initData18 = { code: "function VoiceMessageOverlayTsx18(state,previous){const{runOnJS,setVoiceMessageState}=this.__closure;if(state!==previous){runOnJS(setVoiceMessageState)(state);}}" };
const __initData19 = { code: "function VoiceMessageOverlayTsx19(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}" };
let closure_44 = react.memo((channelId) => {
  let IconButton;
  let c3;
  let intl;
  let items4;
  let items7;
  let obj13;
  let str;
  let tmp15;
  let tmp16;
  let tmp29;
  channelId = channelId.channelId;
  const voiceMessageAnimationState = channelId.voiceMessageAnimationState;
  const exiting = channelId.exiting;
  let sharedValue;
  _slicedToArray = undefined;
  let ref;
  let tmp = channelId;
  let obj = channelId(sharedValue[19]);
  const token = obj.useToken(voiceMessageAnimationState(sharedValue[16]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmp5 = closure_21();
  const bottom = voiceMessageAnimationState(sharedValue[26])({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets.bottom;
  let obj2 = channelId(sharedValue[27]);
  const keyboardOpenPaddingStyle = obj2.useKeyboardOpenPaddingStyle();
  const tmp7 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  _require = tmp7;
  sharedValue = undefined;
  const obj3 = channelId(sharedValue[10]);
  sharedValue = obj3.useSharedValue(0);
  let closure_3 = ref.useRef(performance.now());
  items = [sharedValue];
  const effect = ref.useEffect(() => {
    set = sharedValue.set;
    const withDelay = channelId(sharedValue[10]).withDelay;
    channelId(sharedValue[10]);
    const obj = channelId(sharedValue[22]);
    const obj2 = { easing: channelId(sharedValue[10]).Easing.quad, duration: 250 };
    const result = set(withDelay(500, obj.withTiming(1, obj2)));
  }, items);
  const items1 = [sharedValue, exiting];
  const effect1 = ref.useEffect(() => {
    const tmp = exiting;
    if (tmp) {
      set = sharedValue.set;
      const obj = { easing: channelId(sharedValue[10]).Easing.quad, duration: 100 };
      const withTiming = channelId(sharedValue[22]).withTiming;
      channelId(sharedValue[22]);
      const result = set(withTiming(0, obj));
    }
  }, items1);
  const obj4 = channelId(sharedValue[10]);
  const sharedValue1 = obj4.useSharedValue(0);
  const items2 = [sharedValue, sharedValue1, tmp7];
  const effect2 = ref.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      set = sharedValue1.set;
      const obj = { easing: channelId(sharedValue[10]).Easing.quad, duration: 200 };
      const withTiming = channelId(sharedValue[22]).withTiming;
      channelId(sharedValue[22]);
      const result = set(withTiming(1, obj));
      const _performance = performance;
      if (performance.now() - ref.current < 500) {
        set2 = sharedValue.set;
        const obj2 = { easing: channelId(sharedValue[10]).Easing.quad, duration: 250 };
        const withTiming2 = channelId(sharedValue[22]).withTiming;
        channelId(sharedValue[22]);
        set2(withTiming2(1, obj2));
      }
    }
  }, items2);
  [tmp15, tmp16] = ref.useState(VoiceMessageAnimationState.SENDING);
  _slicedToArray(ref.useState(VoiceMessageAnimationState.SENDING), 2);
  _slicedToArray = tmp16;
  const obj5 = channelId(sharedValue[10]);
  const tmp3 = voiceMessageAnimationState;
  class A {
    constructor() {
      return voiceMessageAnimationState.get()[1];
    }
  }
  A.__closure = { voiceMessageAnimationState };
  A.__workletHash = 2001586726975;
  A.__initData = __initData17;
  class I {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        obj.runOnJS(c3)(arg0);
      }
    }
  }
  I.__closure = { runOnJS: channelId(sharedValue[10]).runOnJS, setVoiceMessageState: tmp16 };
  I.__workletHash = 3332201719722;
  I.__initData = __initData18;
  ({ runOnJS: channelId(sharedValue[10]).runOnJS, setVoiceMessageState: tmp16 });
  const animatedReaction = obj5.useAnimatedReaction(A, I);
  ref = ref.useRef(null);
  const effect3 = ref.useEffect(() => {
    const obj = useIsScreenReaderEnabled;
    if (obj.getIsScreenReaderEnabled()) {
      const obj2 = { ref };
      const tmpResult = react_native;
      const result = tmpResult.setAccessibilityFocus(obj2);
    }
  }, []);
  const items3 = [channelId];
  const effect4 = ref.useEffect(() => {
    let closure_0 = closure_1_6.addEventListener("change", (event) => {
      const tmp = "inactive" !== event && "background" !== event;
      if (!tmp) {
        const ComponentDispatch = channelId(sharedValue[30]).ComponentDispatch;
        const dispatchKeyed = ComponentDispatch.dispatchKeyed;
        const VOICE_MESSAGE_SEND = constants.VOICE_MESSAGE_SEND;
        const obj = { isCancelling: true, cancelReason: channelId(sharedValue[31]).VoiceMessageRecordingResult.CANCELLED_ON_BACKGROUND };
        dispatchKeyed(VOICE_MESSAGE_SEND, closure_0, obj);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items3);
  const obj7 = channelId(sharedValue[10]);
  class K {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  K.__closure = { initialAnimation: sharedValue };
  K.__workletHash = 14041876681603;
  K.__initData = __initData19;
  const animatedStyle = obj7.useAnimatedStyle(K);
  const obj8 = channelId(sharedValue[32]);
  const wakeLock = obj8.useWakeLock("VoiceMessageOverlay");
  const obj9 = { style: items4, children: null };
  items4 = [tmp5.contentContainer, { bottom }, animatedStyle, ];
  const items5 = [tmp5.contentContainerFloating, keyboardOpenPaddingStyle];
  items4[3] = items5;
  const View = voiceMessageAnimationState(sharedValue[10]).View;
  const items6 = [closure_13(channelId(sharedValue[33]).ChatInputScrimGradient, { gradientHeight: token, inline: true }), closure_13(closure_28, { initialAnimation: sharedValue, recordingAnimation: sharedValue1, voiceMessageState: tmp15, exiting }), ];
  const obj10 = { style: tmp5.innerContainer, children: null };
  const obj11 = { style: tmp5.voiceChatContainer, children: null };
  const View2 = voiceMessageAnimationState(sharedValue[10]).View;
  const obj12 = { isRecording: tmp7, initialAnimation: sharedValue, leftAccessory: closure_13(IconButton, obj13), rightAccessory: null };
  obj13 = {
    icon: voiceMessageAnimationState(sharedValue[36]),
    variant: str,
    size: "sm",
    maxFontSizeMultiplier: 2,
    accessibilityLabel: intl.string(tmp(sharedValue[21]).t.RdK9sV),
    onPressIn() {
      const obj = channelId(sharedValue[37]);
      return obj.triggerHaptic();
    },
    onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: true });
    }
  };
  const tmp27 = voiceMessageAnimationState(sharedValue[34]);
  IconButton = channelId(sharedValue[35]).IconButton;
  str = "tertiary";
  const tmp24 = closure_15;
  const tmp26 = closure_5;
  if (tmp15 === VoiceMessageAnimationState.CANCELLING) {
    str = "destructive";
  }
  intl = tmp(tmp2[21]).intl;
  const obj15 = { ref, active: tmp29, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null };
  tmp29 = tmp15 === tmp13.SENDING;
  const tmp3Result = tmp3(tmp2[38]);
  if (!tmp29) {
    tmp29 = tmp15 === tmp13.LOCKED;
  }
  ({ floatingSendButton: obj14.style, floatingSendButtonActive: obj14.activeStyle, floatingSendButtonIconActive: obj14.activeIconStyle } = tmp5);
  if (!tmp7) {
    let SendMessageIcon;
    if (!exiting) {
      SendMessageIcon = tmp(tmp2[40]).MicrophoneIcon;
    }
    const obj16 = { children: items7 };
    obj15.IconComponent = SendMessageIcon;
    const intl2 = tmp(tmp2[21]).intl;
    obj15.accessibilityLabel = intl2.string(tmp(sharedValue[21]).t["+8GStU"]);
    obj15.onPress = function onPress() {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatchKeyed(ComponentActionsKeyed.VOICE_MESSAGE_SEND, channelId, { isCancelling: false });
    };
    obj12.rightAccessory = closure_13(tmp3Result, obj15);
    obj11.children = closure_13(tmp27, obj12);
    obj10.children = closure_13(View2, obj11);
    items6[2] = closure_13(tmp26, obj10);
    obj9.children = items6;
    items7 = [closure_14(View, obj9), ];
    const obj25 = { safeAreaBottom: bottom, initialAnimation: sharedValue, voiceMessageAnimationState };
    items7[1] = closure_13(LockPill, obj25);
    return closure_14(tmp24, obj16);
  }
  SendMessageIcon = tmp(tmp2[39]).SendMessageIcon;
});
const memoResult1 = react.memo((channelId) => {
  let closure_2;
  let first;
  channelId = channelId.channelId;
  dependencyMap = undefined;
  let tmp = useVoiceMessagesUIStore((showRecordingOverlay) => showRecordingOverlay.showRecordingOverlay);
  let closure_1 = tmp;
  items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp2 = useVoiceMessagesUIStore((voiceMessageAnimationState) => voiceMessageAnimationState.voiceMessageAnimationState);
  [first, dependencyMap] = react.useState(tmp);
  const items1 = [tmp];
  const effect = react.useEffect(() => {
    let closure_0;
    const tmp = closure_1;
    if (tmp) {
      closure_2(true);
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), 100);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items1);
  let isForumLikeChannelResult;
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp7 = null;
  if (!isForumLikeChannelResult) {
    let tmp8 = null;
    if (null != tmp2) {
      tmp8 = null;
      if (first) {
        const obj2 = { channelId, voiceMessageAnimationState: tmp2, exiting: !tmp };
        tmp8 = closure_13(closure_44, obj2);
      }
    }
    tmp7 = tmp8;
  }
  return tmp7;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_messages/native/components/VoiceMessageOverlay.tsx");

export default memoResult1;
export const VoiceMessageEllipse = memoResult;
