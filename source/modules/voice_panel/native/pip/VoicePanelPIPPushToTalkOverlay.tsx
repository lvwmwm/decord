// Module ID: 15844
// Function ID: 122454
// Name: VoicePanelPIPPushToTalkOverlay
// Dependencies: [57, 31, 27, 10015, 33, 3991, 5517, 1273, 4130, 689, 10385, 15774, 4542, 15769, 5217, 15845, 2]
// Exports: default

// Module 15844 (VoicePanelPIPPushToTalkOverlay)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { PUSH_TO_TALK_PIP_PHYSICS } from "VoicePanelModes";
import jsxProd from "jsxProd";
import set from "set";
import importDefaultResult from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult1 from "module_3991";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let closure_10 = require("module_3991").createAnimatedComponent(require("Button").Icon);
let closure_11 = { top: 6, bottom: 6, left: 6, right: 6 };
let obj = {};
obj = { position: "absolute", width: 32, height: 32, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.iconContainer = obj;
let obj1 = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj1["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BLACK;
obj.overlay = obj1;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = { code: "function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}" };
let closure_14 = { code: "function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}" };
let closure_15 = { code: "function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_16 = { code: "function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}" };
let closure_17 = { code: "function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}" };
let closure_18 = { code: "function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default function VoicePanelPIPPushToTalkOverlay() {
  let obj = pIPState(15774);
  pIPState = obj.usePIPState();
  const tmp2 = callback3();
  const tmp3 = WHITE((function usePushToTalk() {
    const sharedValue = pIPState(tmp5[5]).useSharedValue(false);
    let closure_1 = BLACK.useRef(false);
    const items = [sharedValue];
    const items1 = [
      sharedValue,
      BLACK.useCallback((current) => {
        if (current !== ref.current) {
          ref.current = current;
          pIPState(table[10]).setPushToTalkState(current);
          const result = sharedValue.set(current);
          const obj = pIPState(table[10]);
        }
      }, items)
    ];
    return items1;
  })(), 2);
  const first = tmp3[0];
  const dependencyMap = tmp5;
  WHITE = first(689).unsafe_rawColors.WHITE;
  const BLACK = first(689).unsafe_rawColors.BLACK;
  let obj1 = pIPState(3991);
  let fn = function o() {
    let num = 8;
    if (first.get()) {
      num = 20;
    }
    let obj = { right: pIPState(tmp5[12]).withSpring(num, outer1_5) };
    const obj2 = pIPState(tmp5[12]);
    obj.bottom = pIPState(tmp5[12]).withSpring(num, outer1_5);
    obj = {};
    const obj3 = pIPState(tmp5[12]);
    let num2 = 1;
    if (first.get()) {
      num2 = 1.5;
    }
    obj.scale = pIPState(tmp5[12]).withSpring(num2, outer1_5);
    const items = [obj];
    obj.transform = items;
    const obj5 = pIPState(tmp5[12]);
    let str = "rgba(0, 0, 0, 0.54)";
    if (first.get()) {
      str = WHITE;
    }
    obj.backgroundColor = pIPState(tmp5[12]).withSpring(str, outer1_5);
    return obj;
  };
  obj = { isPushingToTalk: first, EXPANDED_ICON_SIZE: 48, BASE_ICON_SIZE: 32, withSpring: pIPState(4542).withSpring, PUSH_TO_TALK_PIP_PHYSICS, white: WHITE };
  fn.__closure = obj;
  fn.__workletHash = 3936373516983;
  fn.__initData = closure_13;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = pIPState(3991);
  class P {
    constructor() {
      obj = {};
      obj2 = outer1_0(outer1_2[12]);
      obj.tintColor = obj2.withSpring(closure_1.get() ? BLACK : WHITE, outer1_5);
      return obj;
    }
  }
  obj = { withSpring: pIPState(4542).withSpring, isPushingToTalk: first, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS };
  P.__closure = obj;
  P.__workletHash = 11469896791985;
  P.__initData = closure_14;
  const animatedStyle1 = obj3.useAnimatedStyle(P);
  let obj5 = pIPState(3991);
  class H {
    constructor() {
      obj = {};
      obj2 = outer1_0(outer1_2[12]);
      num = 0;
      if (closure_1.get()) {
        num = 0.5;
      }
      obj.opacity = obj2.withSpring(num, outer1_5);
      obj3 = outer1_0(outer1_2[13]);
      obj.borderRadius = obj3.getVoicePanelPIPBorderRadius(closure_0.width, closure_0.height);
      return obj;
    }
  }
  obj1 = { withSpring: pIPState(4542).withSpring, isPushingToTalk: first, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: pIPState(15769).getVoicePanelPIPBorderRadius, pipState: pIPState };
  H.__closure = obj1;
  H.__workletHash = 450590017248;
  H.__initData = closure_15;
  let items = [tmp3[1]];
  const animatedStyle2 = obj5.useAnimatedStyle(H);
  let obj2 = {};
  let items1 = [tmp2.overlay, animatedStyle2];
  const memo = BLACK.useMemo(() => {
    const Gesture = pIPState(tmp5[14]).Gesture;
    const Gesture2 = pIPState(tmp5[14]).Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function o(arg0, arg1) {
      if (arg1) {
        pIPState(3991).runOnJS(outer1_2)(false);
        const obj = pIPState(3991);
      }
    };
    let obj = { runOnJS: pIPState(tmp5[5]).runOnJS, handlePushToTalk: tmp5 };
    fn.__closure = obj;
    fn.__workletHash = 13736796804739;
    fn.__initData = outer1_16;
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    const Gesture3 = pIPState(tmp5[14]).Gesture;
    const onEndResult = Gesture2.Tap().maxDistance(30).onEnd(fn);
    const PanResult = Gesture3.Pan();
    const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
    const fn2 = function t() {
      pIPState(3991).runOnJS(outer1_2)(true);
    };
    obj = { runOnJS: pIPState(tmp5[5]).runOnJS, handlePushToTalk: tmp5 };
    fn2.__closure = obj;
    fn2.__workletHash = 246779667986;
    fn2.__initData = outer1_18;
    const maxPointersResult = Gesture3.Pan().maxPointers(1);
    const fn3 = function n() {
      pIPState(3991).runOnJS(outer1_2)(false);
    };
    const onBeginResult = result.onBegin(fn2);
    fn3.__closure = { runOnJS: pIPState(tmp5[5]).runOnJS, handlePushToTalk: tmp5 };
    fn3.__workletHash = 12223608557562;
    fn3.__initData = outer1_17;
    return Gesture.Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
  }, items);
  const items2 = [callback(set, { pointerEvents: "none", style: items1 }), ];
  obj3 = { gesture: memo };
  const obj4 = { style: items3, hitSlop: closure_11 };
  items3 = [tmp2.iconContainer, animatedStyle];
  obj5 = { style: animatedStyle1, size: pIPState(1273).Icon.Sizes.SMALL_20, source: first(15845), disableColor: true };
  obj4.children = callback(closure_10, obj5);
  obj3.children = callback(set, obj4);
  items2[1] = callback(pIPState(5217).GestureDetector, obj3);
  obj2.children = items2;
  return callback2(closure_7, obj2);
};
