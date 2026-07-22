// Module ID: 15727
// Function ID: 120281
// Name: VoicePanelPIPPushToTalkOverlay
// Dependencies: []
// Exports: default

// Module 15727 (VoicePanelPIPPushToTalkOverlay)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const PUSH_TO_TALK_PIP_PHYSICS = arg1(dependencyMap[3]).PUSH_TO_TALK_PIP_PHYSICS;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]).createAnimatedComponent(importDefault(dependencyMap[6]));
const importDefaultResult = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[5]).createAnimatedComponent(arg1(dependencyMap[7]).Icon);
let closure_11 = {};
const importDefaultResult1 = importDefault(dependencyMap[5]);
let obj = {};
obj = { status: "r", constructor: "6MwJo/", borderRadius: importDefault(dependencyMap[9]).radii.round, position: null, top: null };
obj.iconContainer = obj;
const obj1 = {};
const merged = Object.assign(arg1(dependencyMap[2]).StyleSheet.absoluteFillObject);
obj1["backgroundColor"] = importDefault(dependencyMap[9]).colors.BLACK;
obj.overlay = obj1;
let closure_12 = arg1(dependencyMap[8]).createStyles(obj);
let closure_13 = { code: "function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}" };
let closure_14 = { code: "function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}" };
let closure_15 = { code: "function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}" };
let closure_16 = { code: "function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}" };
let closure_17 = { code: "function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}" };
let closure_18 = { code: "function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}" };
const obj3 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx");

export default function VoicePanelPIPPushToTalkOverlay() {
  let obj = arg1(dependencyMap[11]);
  const pIPState = obj.usePIPState();
  const arg1 = pIPState;
  const tmp2 = callback4();
  const tmp3 = callback(function usePushToTalk() {
    const sharedValue = pIPState(tmp5[5]).useSharedValue(false);
    const pIPState = sharedValue;
    let closure_1 = BLACK.useRef(false);
    const items = [sharedValue];
    const items1 = [
      sharedValue,
      BLACK.useCallback((current) => {
        if (current !== ref.current) {
          ref.current = current;
          sharedValue(closure_2[10]).setPushToTalkState(current);
          const result = sharedValue.set(current);
          const obj = sharedValue(closure_2[10]);
        }
      }, items)
    ];
    return items1;
  }(), 2);
  const first = tmp3[0];
  const importDefault = first;
  const dependencyMap = tmp5;
  const WHITE = importDefault(dependencyMap[9]).unsafe_rawColors.WHITE;
  const callback = WHITE;
  const BLACK = importDefault(dependencyMap[9]).unsafe_rawColors.BLACK;
  const React = BLACK;
  let obj1 = arg1(dependencyMap[5]);
  const fn = function o() {
    let num = 8;
    if (first.get()) {
      num = 20;
    }
    let obj = { right: pIPState(tmp5[12]).withSpring(num, closure_5) };
    const obj2 = pIPState(tmp5[12]);
    obj.bottom = pIPState(tmp5[12]).withSpring(num, closure_5);
    obj = {};
    const obj3 = pIPState(tmp5[12]);
    let num2 = 1;
    if (first.get()) {
      num2 = 1.5;
    }
    obj.scale = pIPState(tmp5[12]).withSpring(num2, closure_5);
    const items = [obj];
    obj.transform = items;
    const obj5 = pIPState(tmp5[12]);
    let str = "rgba(0, 0, 0, 0.54)";
    if (first.get()) {
      str = WHITE;
    }
    obj.backgroundColor = pIPState(tmp5[12]).withSpring(str, closure_5);
    return obj;
  };
  obj = { isPushingToTalk: first, withSpring: arg1(dependencyMap[12]).withSpring, PUSH_TO_TALK_PIP_PHYSICS, white: WHITE };
  fn.__closure = obj;
  fn.__workletHash = 3936373516983;
  fn.__initData = closure_13;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = arg1(dependencyMap[5]);
  class P {
    constructor() {
      obj = {};
      obj2 = closure_0(closure_2[12]);
      obj.tintColor = obj2.withSpring(closure_1.get() ? BLACK : WHITE, closure_5);
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[12]).withSpring, isPushingToTalk: first, black: BLACK, white: WHITE, PUSH_TO_TALK_PIP_PHYSICS };
  P.__closure = obj;
  P.__workletHash = 11469896791985;
  P.__initData = closure_14;
  const animatedStyle1 = obj3.useAnimatedStyle(P);
  let obj5 = arg1(dependencyMap[5]);
  class H {
    constructor() {
      obj = {};
      obj2 = closure_0(closure_2[12]);
      num = 0;
      if (closure_1.get()) {
        num = 0.5;
      }
      obj.opacity = obj2.withSpring(num, closure_5);
      obj3 = closure_0(closure_2[13]);
      obj.borderRadius = obj3.getVoicePanelPIPBorderRadius(closure_0.width, closure_0.height);
      return obj;
    }
  }
  obj1 = { withSpring: arg1(dependencyMap[12]).withSpring, isPushingToTalk: first, PUSH_TO_TALK_PIP_PHYSICS, getVoicePanelPIPBorderRadius: arg1(dependencyMap[13]).getVoicePanelPIPBorderRadius, pipState: pIPState };
  H.__closure = obj1;
  H.__workletHash = 450590017248;
  H.__initData = closure_15;
  const items = [tmp3[1]];
  const animatedStyle2 = obj5.useAnimatedStyle(H);
  const obj2 = {};
  const items1 = [tmp2.overlay, animatedStyle2];
  const memo = React.useMemo(() => {
    const Gesture = pIPState(tmp5[14]).Gesture;
    const Gesture2 = pIPState(tmp5[14]).Gesture;
    const TapResult = Gesture2.Tap();
    const fn = function o(arg0, arg1) {
      if (arg1) {
        callback(closure_2[5]).runOnJS(closure_2)(false);
        const obj = callback(closure_2[5]);
      }
    };
    let obj = { runOnJS: pIPState(tmp5[5]).runOnJS, handlePushToTalk: tmp5 };
    fn.__closure = obj;
    fn.__workletHash = 13736796804739;
    fn.__initData = closure_16;
    const maxDistanceResult = Gesture2.Tap().maxDistance(30);
    const Gesture3 = pIPState(tmp5[14]).Gesture;
    const onEndResult = Gesture2.Tap().maxDistance(30).onEnd(fn);
    const PanResult = Gesture3.Pan();
    const result = Gesture3.Pan().maxPointers(1).shouldCancelWhenOutside(false);
    const fn2 = function t() {
      callback(closure_2[5]).runOnJS(closure_2)(true);
    };
    obj = { runOnJS: pIPState(tmp5[5]).runOnJS, handlePushToTalk: tmp5 };
    fn2.__closure = obj;
    fn2.__workletHash = 246779667986;
    fn2.__initData = closure_18;
    const maxPointersResult = Gesture3.Pan().maxPointers(1);
    const fn3 = function n() {
      callback(closure_2[5]).runOnJS(closure_2)(false);
    };
    const onBeginResult = result.onBegin(fn2);
    fn3.__closure = { runOnJS: pIPState(tmp5[5]).runOnJS, handlePushToTalk: tmp5 };
    fn3.__workletHash = 12223608557562;
    fn3.__initData = closure_17;
    return Gesture.Exclusive(onEndResult, onBeginResult.onFinalize(fn3));
  }, items);
  const items2 = [callback2(closure_9, { pointerEvents: "none", style: items1 }), ];
  obj3 = { gesture: memo };
  const obj4 = { style: items3, hitSlop: closure_11 };
  const items3 = [tmp2.iconContainer, animatedStyle];
  obj5 = { style: animatedStyle1, size: arg1(dependencyMap[7]).Icon.Sizes.SMALL_20, source: importDefault(dependencyMap[15]), disableColor: true };
  obj4.children = callback2(closure_10, obj5);
  obj3.children = callback2(closure_9, obj4);
  items2[1] = callback2(arg1(dependencyMap[14]).GestureDetector, obj3);
  obj2.children = items2;
  return callback3(closure_7, obj2);
};
