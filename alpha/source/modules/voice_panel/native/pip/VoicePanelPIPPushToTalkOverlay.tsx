// Module ID: 19230
// Function ID: 19231
// Name: VoicePanelPIPPushToTalkOverlay
// Dependencies: [32, 19, 17, 2007, 11204, 21, 5090, 6954, 1188, 5009, 575, 11192, 19146, 5632, 19058, 5298, 19231, 2]
// Exports: default

// Module 19230 (VoicePanelPIPPushToTalkOverlay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5090 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import spring from "spring" /* 5632 */;
import NativeViewDefault from "NativeView" /* 6954 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11204 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport_mod = ReanimatedRexport2;
let dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let tmp;
const VoicePanelPIPUtils = tmp(19058);
const StyleSheet = react_native.StyleSheet;
const PUSH_TO_TALK_PIP_PHYSICS = VoicePanelConstants.PUSH_TO_TALK_PIP_PHYSICS;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
const NativeView = ReanimatedRexport.createAnimatedComponent(NativeViewDefault);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_11 = ReanimatedRexport.createAnimatedComponent(native.Icon);
const hitSlop = { top: 6, bottom: 6, left: 6, right: 6 };
let createStyles = createStyles_mod;
let obj = { iconContainer: size, overlay: obj2 };
size = { position: "absolute", width: 32, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BLACK };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_13 = createStyles(obj);
const __initData = { code: "function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}" };
const __initData2 = { code: "function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}" };
const __initData3 = { code: "function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_17 = { code: "function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}" };
let closure_18 = { code: "function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}" };
let closure_19 = { code: "function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default function VoicePanelPIPPushToTalkOverlay() {
  let BLACK;
  let WHITE;
  let handlePushToTalk;
  let items3;
  let items4;
  let items5;
  let mediaEngine;
  let obj12;
  let obj13;
  let pIPState;
  let obj = pIPState(19146);
  pIPState = obj.usePIPState();
  const tmp2 = closure_13();
  let obj2 = pIPState(5090);
  const sharedValue = obj2.useSharedValue(false);
  BLACK.useRef(false);
  let items = [sharedValue];
  const items1 = [
    sharedValue,
    BLACK.useCallback((current) => {
      if (current !== ref.current) {
        ref.current = current;
        const obj = pIPState(handlePushToTalk[11]);
        obj.setPushToTalkState(mediaEngine.getMediaEngine(), current);
        const result = sharedValue.set(current);
      }
    }, items)
  ];
  const tmp4 = WHITE(items1, 2);
  const isPushingToTalk = tmp4[0];
  dependencyMap = tmp6;
  WHITE = isPushingToTalk(575).unsafe_rawColors.WHITE;
  BLACK = isPushingToTalk(575).unsafe_rawColors.BLACK;
  let obj3 = pIPState(5090);
  let fn = function o() {
    let items;
    let obj3;
    let obj4;
    let str;
    let withSpring2;
    let num = 8;
    if (first.get()) {
      num = 20;
    }
    const rect = { right: obj3.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), bottom: obj4.withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), transform: items, backgroundColor: withSpring2(str, PUSH_TO_TALK_PIP_PHYSICS) };
    obj3 = spring;
    obj4 = spring;
    const withSpring = spring.withSpring;
    let num2 = 1;
    spring;
    if (first.get()) {
      num2 = 1.5;
    }
    items = [{ scale: withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) }];
    ({ scale: withSpring(num2, PUSH_TO_TALK_PIP_PHYSICS) });
    withSpring2 = tmp(5632).withSpring;
    str = "rgba(0, 0, 0, 0.54)";
    spring;
    if (first.get()) {
      str = WHITE;
    }
    return rect;
  };
  let obj4 = { isPushingToTalk, EXPANDED_ICON_SIZE: 48, BASE_ICON_SIZE: 32, withSpring: pIPState(5632).withSpring, PUSH_TO_TALK_PIP_PHYSICS, white: WHITE };
  fn.__closure = obj4;
  fn.__workletHash = 3936373516983;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let fn2 = function l() {
    const obj = spring;
    const obj2 = { tintColor: obj.withSpring(first.get() ? BLACK : WHITE, PUSH_TO_TALK_PIP_PHYSICS) };
    return obj2;
  };
  const obj5 = pIPState(5090);
  fn2.__closure = { withSpring: pIPState(5632).withSpring, isPushingToTalk, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS };
  fn2.__workletHash = 11469896791985;
  fn2.__initData = __initData2;
  ({ withSpring: pIPState(5632).withSpring, isPushingToTalk, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS });
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  let fn3 = function f() {
    let tmpResult;
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (first.get()) {
      num = 0.5;
    }
    const obj = { opacity: withSpring(num, PUSH_TO_TALK_PIP_PHYSICS), borderRadius: tmpResult.getVoicePanelPIPBorderRadius(pIPState.width, pIPState.height) };
    tmpResult = VoicePanelPIPUtils;
    return obj;
  };
  const obj7 = pIPState(5090);
  fn3.__closure = { withSpring: pIPState(5632).withSpring, isPushingToTalk, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: pIPState(19058).getVoicePanelPIPBorderRadius, pipState: pIPState };
  fn3.__workletHash = 450590017248;
  fn3.__initData = __initData3;
  const items2 = [tmp4[1]];
  ({ withSpring: pIPState(5632).withSpring, isPushingToTalk, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: pIPState(19058).getVoicePanelPIPBorderRadius, pipState: pIPState });
  const animatedStyle2 = obj7.useAnimatedStyle(fn3);
  const obj10 = { pointerEvents: "none", style: items3 };
  items3 = [tmp2.overlay, animatedStyle2];
  const obj9 = { children: items4 };
  const memo = BLACK.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Exclusive = Gesture.Exclusive;
    const Gesture2 = LegacyBaseButton.Gesture;
    const fn = function o(arg0, arg1) {
      const tmp = arg1;
      if (tmp) {
        const obj = pIPState(closure_2[6]);
        obj.runOnJS(closure_1_2)(false);
      }
    };
    const TapResult = Gesture2.Tap();
    const maxDistanceResult = TapResult.maxDistance(30);
    let obj = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn.__closure = obj;
    fn.__workletHash = 13736796804739;
    fn.__initData = __initData;
    const onEndResult = maxDistanceResult.onEnd(fn);
    const Gesture3 = LegacyBaseButton.Gesture;
    const PanResult = Gesture3.Pan();
    const maxPointersResult = PanResult.maxPointers(1);
    const result = maxPointersResult.shouldCancelWhenOutside(false);
    const fn2 = function t() {
      const obj = pIPState(closure_2[6]);
      obj.runOnJS(closure_1_2)(true);
    };
    fn2.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn2.__workletHash = 246779667986;
    fn2.__initData = __initData3;
    ({ runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk });
    const fn3 = function n() {
      const obj = pIPState(closure_2[6]);
      obj.runOnJS(closure_1_2)(false);
    };
    const onBeginResult = result.onBegin(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk };
    fn3.__workletHash = 12223608557562;
    fn3.__initData = __initData2;
    ({ runOnJS: ReanimatedRexport2.runOnJS, handlePushToTalk });
    return Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
  }, items2);
  items4 = [closure_7(NativeView, obj10), ];
  const obj11 = { gesture: memo, children: closure_7(NativeView, obj12) };
  obj12 = { style: items5, hitSlop, children: closure_7(closure_11, obj13) };
  items5 = [tmp2.iconContainer, animatedStyle];
  obj13 = { style: animatedStyle1, size: pIPState(1188).Icon.Sizes.SMALL_20, source: isPushingToTalk(19231), disableColor: true };
  const GestureDetector = pIPState(5298).GestureDetector;
  items4[1] = closure_7(GestureDetector, obj11);
  return closure_9(closure_8, obj9);
};
