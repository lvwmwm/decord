// Module ID: 15861
// Function ID: 122391
// Name: SelfStreamCard
// Dependencies: [57, 31, 27, 4149, 4202, 4952, 10047, 10045, 15817, 10050, 653, 4148, 10048, 33, 3991, 4126, 1273, 4130, 689, 4309, 4194, 5515, 1212, 4543, 10046, 566, 10594, 4227, 11987, 10596, 10593, 15862, 10606, 8257, 1324, 7974, 7979, 7975, 4131, 4542, 7678, 4554, 5085, 3834, 15863, 9923, 9459, 4476, 5462, 15821, 15833, 15816, 15864, 15865, 8537, 5217, 15866, 10049, 15867, 15868, 15869, 15870, 15871, 15881, 2]

// Module 15861 (SelfStreamCard)
import closure_3 from "_createForOfIteratorHelperLoose";
import importAllResult from "getScaleChangeWithOverscroll";
import { StyleSheet } from "getMediaEngineImpl";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { EDGE_GUTTER } from "CARD_SIZE";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { SCALE_PHYSICS } from "MIN_PAN_GESTURE_MOVE";
import jsxProd from "getCachedSourceFromURI";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_17;
let closure_18;
let closure_21;
let closure_22;
let closure_23;
let closure_9;
const require = arg1;
function SelfStreamCard(sharedCoords) {
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = callback3();
  const items = [stream];
  const callback = importAllResult.useCallback(() => {
    if (null != stream) {
      const obj = sharedCoords(isFocused[19]);
      obj.stopStream(sharedCoords(isFocused[20]).encodeStreamKey(stream));
      const obj2 = sharedCoords(isFocused[20]);
    }
  }, items);
  let obj = sharedCoords(isFocused[14]);
  const fn = function l() {
    const obj = { textAlign: "center", paddingHorizontal: 16 };
    let num = 16;
    if (isFocused) {
      num = 0;
    }
    obj.paddingVertical = num;
    let str = "auto";
    if (!isFocused) {
      str = sharedCoords.get().width;
    }
    obj.width = str;
    return obj;
  };
  fn.__closure = { isFocused, sharedCoords };
  fn.__workletHash = 4561576173627;
  fn.__initData = closure_30;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: tmp.nonUserRoundedCard };
  let tmp6 = isFocused;
  if (isFocused) {
    obj = { style: tmp.blackBackground };
    tmp6 = callback(stream(isFocused[21]), obj);
  }
  const items1 = [tmp6, , ];
  const obj1 = { style: animatedStyle };
  let str = "text-sm/semibold";
  if (isFocused) {
    str = "text-lg/semibold";
  }
  obj1.variant = str;
  obj1.color = "text-overlay-light";
  const intl = sharedCoords(isFocused[22]).intl;
  obj1.children = intl.string(sharedCoords(isFocused[22]).t.gMOwov);
  items1[1] = callback(closure_24, obj1);
  let tmp12 = null;
  if (isFocused) {
    let obj2 = {};
    const obj3 = { style: tmp.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light" };
    const intl2 = sharedCoords(isFocused[22]).intl;
    obj3.children = intl2.string(sharedCoords(isFocused[22]).t.dKeLGt);
    const items2 = [callback(sharedCoords(isFocused[15]).Text, obj3), ];
    const obj4 = { size: "lg", variant: "primary-overlay", onPress: callback };
    const intl3 = sharedCoords(isFocused[22]).intl;
    obj4.text = intl3.string(sharedCoords(isFocused[22]).t.CpkXwZ);
    items2[1] = callback(sharedCoords(isFocused[23]).Button, obj4);
    obj2.children = items2;
    tmp12 = callback2(closure_22, obj2);
  }
  items1[2] = tmp12;
  obj.children = items1;
  return callback2(stream(isFocused[21]), obj);
}
function SpeakingIndicator(id) {
  id = id.id;
  const isSelf = id.isSelf;
  const speaking = id.speaking;
  const layout = id.layout;
  const context = focused.useContext(isSelf(speaking[24]));
  const mode = context.mode;
  focused = context.focused;
  const tmp2 = callback3();
  let obj = id(speaking[43]);
  const token = obj.useToken(isSelf(speaking[18]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj1 = id(speaking[14]);
  const fn = function u() {
    let tmp = mode.get() !== outer1_10.PIP;
    if (tmp) {
      let value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      tmp = id === id;
    }
    let obj = {};
    let num = 1;
    if (tmp) {
      num = 0;
    }
    obj.opacity = num;
    let num2 = 0;
    if (!tmp) {
      obj = { id, mode: mode.get() };
      value = focused.get();
      let id1;
      if (null != value) {
        id1 = value.id;
      }
      obj.focused = id1;
      obj.isSelf = isSelf;
      obj.defaultBorderRadius = token;
      num2 = isSelf(speaking[44])(obj);
      const tmp9 = isSelf(speaking[44]);
    }
    let str = "animate-always";
    if (tmp) {
      str = "animate-never";
    }
    obj.borderRadius = id(speaking[39]).withSpring(num2, outer1_12, str);
    return obj;
  };
  obj = { mode, VoicePanelModes: closure_10, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 5111620492405;
  fn.__initData = closure_37;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const fn2 = function c() {
    let tmp = mode.get() === outer1_10.PIP;
    if (!tmp) {
      let value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      tmp = id === id;
    }
    let obj = {};
    let num = 0;
    if (!tmp) {
      obj = { id, mode: mode.get() };
      value = focused.get();
      let id1;
      if (null != value) {
        id1 = value.id;
      }
      obj.focused = id1;
      obj.isSelf = isSelf;
      obj.defaultBorderRadius = token;
      num = isSelf(speaking[44])(obj);
      const tmp9 = isSelf(speaking[44]);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    obj.borderRadius = id(speaking[39]).withSpring(num, outer1_12, str2);
    const obj2 = id(speaking[39]);
    const tmp18 = outer1_12;
    let num3 = 0;
    if (!tmp) {
      num3 = 0;
      if (speaking.get()) {
        num3 = isSelf(speaking[45])(5);
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj.borderWidth = id(speaking[39]).withSpring(num3, outer1_12, str);
    return obj;
  };
  obj = { mode, VoicePanelModes: closure_10, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS: closure_12, speaking, roundToNearestPixel: isSelf(speaking[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  fn2.__closure = obj;
  fn2.__workletHash = 13144186988728;
  fn2.__initData = closure_38;
  const animatedStyle1 = id(speaking[14]).useAnimatedStyle(fn2);
  const obj4 = id(speaking[14]);
  const fn3 = function h() {
    let tmp = mode.get() === outer1_10.PIP;
    if (!tmp) {
      let value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      tmp = id === id;
    }
    let obj = {};
    let num = 0;
    if (!tmp) {
      obj = { id, mode: mode.get() };
      value = focused.get();
      let id1;
      if (null != value) {
        id1 = value.id;
      }
      obj.focused = id1;
      obj.isSelf = isSelf;
      obj.defaultBorderRadius = token;
      num = isSelf(speaking[44])(obj);
      const tmp9 = isSelf(speaking[44]);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    obj.borderRadius = id(speaking[39]).withSpring(num, outer1_12, str2);
    const obj2 = id(speaking[39]);
    const tmp18 = outer1_12;
    let num3 = 0;
    if (!tmp) {
      num3 = 0;
      if (speaking.get()) {
        num3 = 3;
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    obj.borderWidth = id(speaking[39]).withSpring(num3, outer1_12, str);
    return obj;
  };
  obj1 = { mode, VoicePanelModes: closure_10, focused, id, withSpring: id(speaking[39]).withSpring, computeCardBorderRadius: isSelf(speaking[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS: closure_12, speaking, SPEAKING_BORDER_SIZE: 3 };
  fn3.__closure = obj1;
  fn3.__workletHash = 2850608131549;
  fn3.__initData = closure_39;
  const animatedStyle2 = id(speaking[14]).useAnimatedStyle(fn3);
  let obj2 = { style: items, layout, pointerEvents: "none" };
  items = [tmp2.speakingIndicatorWrapper, animatedStyle];
  const obj6 = id(speaking[14]);
  const items1 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  const items2 = [callback(isSelf(speaking[40]), { style: items1, layout }), ];
  const items3 = [tmp2.speakingIndicatorGreenBar, animatedStyle2];
  items2[1] = callback(isSelf(speaking[40]), { style: items3, layout });
  obj2.children = items2;
  return callback2(isSelf(speaking[40]), obj2);
}
function AnimatedWrapper(cleanUp) {
  let ParticipantTypes;
  let children;
  let closure_11;
  let closure_13;
  let closure_18;
  let focused;
  let guildId;
  let mode;
  let mountedCards;
  let transitionState;
  let windowDimensions;
  cleanUp = cleanUp.cleanUp;
  const coords = cleanUp.coords;
  let id = cleanUp.id;
  const isRTCConnected = cleanUp.isRTCConnected;
  let isScrollVisible = cleanUp.isScrollVisible;
  const layoutPhysics = cleanUp.layoutPhysics;
  let sharedVisible = cleanUp.sharedVisible;
  let isSelf;
  let id2;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let sharedTransitionState;
  let c31;
  let token;
  ({ children, transitionState } = cleanUp);
  const analyticsLocations = coords(id[48])().analyticsLocations;
  const context = isScrollVisible.useContext(coords(id[24]));
  const channelId = context.channelId;
  const connected = context.connected;
  const contentDimensions = context.contentDimensions;
  ({ controlsSpecs: closure_11, focused } = context);
  ({ hideControls: closure_13, mode } = context);
  const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  ({ setFocused: closure_18, showControls: ParticipantTypes, windowDimensions } = context);
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const panelCardStillInPIP = context.panelCardStillInPIP;
  ({ guildId, mountedCards } = context);
  let obj = cleanUp(id[49]);
  const pIPState = obj.usePIPState();
  const tmp4 = coords(id[50])(id, channelId, guildId);
  let obj1 = cleanUp(id[50]);
  let tmp5 = tmp4;
  if (!obj1.isStableParticipantWithUser(tmp4)) {
    tmp5 = obj10;
  }
  isSelf = tmp5.isSelf;
  id2 = tmp5.user.id;
  let obj2 = cleanUp(id[14]);
  let fn = function y() {
    let tmp = id === pIPState.id;
    if (tmp) {
      tmp = mode.get() === contentDimensions.PIP;
    }
    return tmp;
  };
  obj = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  fn.__closure = obj;
  fn.__workletHash = 4773864088866;
  fn.__initData = closure_48;
  derivedValue = obj2.useDerivedValue(fn);
  let obj4 = cleanUp(id[14]);
  class I {
    constructor() {
      value = focused.get();
      id = undefined;
      if (null != value) {
        id = value.id;
      }
      if (id === id) {
        tmp5 = scrollPosition;
        num = scrollPosition.get();
      } else {
        tmp3 = mode;
        tmp4 = contentDimensions;
        num = 0;
      }
      return num;
    }
  }
  obj = { focused, id, mode, VoicePanelModes: contentDimensions, scrollPosition };
  I.__closure = obj;
  I.__workletHash = 8770947887509;
  I.__initData = closure_49;
  derivedValue1 = obj4.useDerivedValue(I);
  let tmp = derivedValue2();
  class C {
    constructor() {
      if (connected.get()) {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = safeArea;
        tmp5 = safeArea;
        tmp6 = windowDimensions;
        tmp7 = contentDimensions;
        num2 = 2;
        bound = Math.max(safeArea, safeArea.get().left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
      } else {
        tmp = wrapperDimensions;
        num = 2;
        bound = wrapperDimensions.get().drawerWidth / 2;
      }
      return bound;
    }
  }
  obj1 = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  C.__closure = obj1;
  C.__workletHash = 15078431132990;
  C.__initData = closure_50;
  derivedValue2 = cleanUp(id[14]).useDerivedValue(C);
  const tmp9 = (function useSharedTransitionState(id) {
    id = id.id;
    const participant = id.participant;
    const transitionState = id.transitionState;
    const cleanUp = id.cleanUp;
    const mode = id.mode;
    const focused = id.focused;
    const isScrollVisible = id.isScrollVisible;
    const sharedVisible = id.sharedVisible;
    let callback;
    let obj = cleanUp(id[14]);
    const sharedTransitionState = obj.useSharedValue(transitionState);
    const cardGestureEnabled = isRTCConnected(isScrollVisible.useState(true), 2);
    let closure_9 = cardGestureEnabled[1];
    let type;
    if (null != participant) {
      type = participant.type;
    }
    const items = [type, id];
    callback = isScrollVisible.useCallback((arg0) => {
      let type;
      if (null != participant) {
        type = participant.type;
      }
      if (type === outer2_19.ACTIVITY) {
        callback(arg0 !== id);
      }
    }, items);
    const fn = function v() {
      const value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      return id;
    };
    fn.__closure = { focused };
    fn.__workletHash = 12145773243163;
    fn.__initData = outer1_41;
    const fn2 = function _(arg0, arg1) {
      if (arg0 !== arg1) {
        cleanUp(id[14]).runOnJS(callback)(arg0);
        const obj = cleanUp(id[14]);
      }
    };
    obj = { runOnJS: cleanUp(id[14]).runOnJS, handleFocusedParticipantChange: callback };
    fn2.__closure = obj;
    fn2.__workletHash = 9304160478829;
    fn2.__initData = outer1_42;
    const animatedReaction = cleanUp(id[14]).useAnimatedReaction(fn, fn2);
    let obj2 = cleanUp(id[14]);
    class P {
      constructor() {
        obj = { mode: mode.get(), focused: focused.get(), transitionState: closure_8.get() };
        return obj;
      }
    }
    P.__closure = { mode, focused, sharedTransitionState };
    P.__workletHash = 13570020810295;
    P.__initData = outer1_43;
    const fn3 = function w(mode, transitionState) {
      let focused;
      let tmp;
      if (null != transitionState) {
        tmp = transitionState;
      }
      if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
        ({ focused, transitionState } = mode);
        if (null != focused) {
          const id = focused.id;
        }
        if (null == transitionState) {
          if (transitionState !== cleanUp(id[47]).TransitionStates.YEETED) {
            const result = sharedVisible.set(1);
          }
        }
        if (transitionState === cleanUp(id[47]).TransitionStates.YEETED) {
          if (1 === sharedVisible.get()) {
            if (isScrollVisible.get()) {
              const result1 = sharedVisible.set(0);
            }
          }
          cleanUp(id[14]).runOnJS(cleanUp)();
          const obj2 = cleanUp(id[14]);
        } else {
          transitionState = undefined;
          if (null != transitionState) {
            transitionState = transitionState.transitionState;
          }
          if (transitionState === cleanUp(id[47]).TransitionStates.YEETED) {
            const result2 = sharedVisible.set(1);
          } else if (mode.mode !== contentDimensions.PIP) {
            if (null == id) {
              const result3 = sharedVisible.set(1);
            } else if (id !== id) {
              const result4 = sharedVisible.set(0);
            } else {
              const result5 = sharedVisible.set(1);
            }
          }
        }
      }
    };
    obj = { cheapWorkletShallowEqual: cleanUp(id[46]).cheapWorkletShallowEqual, VoicePanelModes: contentDimensions, TransitionStates: cleanUp(id[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: cleanUp(id[14]).runOnJS, cleanUp, id };
    fn3.__closure = obj;
    fn3.__workletHash = 17099686269568;
    fn3.__initData = outer1_44;
    const animatedReaction1 = cleanUp(id[14]).useAnimatedReaction(P, fn3);
    const layoutEffect = isScrollVisible.useLayoutEffect(() => {
      const result = sharedTransitionState.set(transitionState);
    });
    return { sharedTransitionState, cardGestureEnabled: cardGestureEnabled[0] };
  })({ id, participant: tmp4, transitionState, cleanUp, mountedCards, mode, focused, isScrollVisible, sharedVisible });
  sharedTransitionState = tmp9.sharedTransitionState;
  c31 = tmp10;
  const obj7 = cleanUp(id[14]);
  token = cleanUp(id[43]).useToken(coords(id[18]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  obj10 = cleanUp(id[14]);
  let fn2 = function b() {
    let height;
    let width;
    let x;
    let y;
    let zIndex;
    let value = coords.get();
    ({ zIndex, width, height, x, y } = value);
    value = focused.get();
    let id;
    if (null != value) {
      id = value.id;
    }
    if (c31) {
      const width3 = pIPState.width;
      let y2 = pIPState;
      let obj = cleanUp(id[51]);
      obj = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: width3, height: pIPState.showSecondaryPIP ? y2.containerHeight : y2.height, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
      const point = obj.getClampedPIPPosition(obj);
      const x2 = point.x;
      y2 = point.y;
      const sum = derivedValue1.get() + y2;
      const height3 = pIPState.height;
      const tmp10 = pIPState.showSecondaryPIP ? y2.containerHeight : y2.height;
    } else {
      if (null != focused.get()) {
        let num = 0;
        let width2 = width;
        let height2 = height;
        let num2 = x;
        let value1 = y;
        if (tmp4) {
          width2 = windowDimensions.get().width;
          height2 = windowDimensions.get().height;
          value1 = derivedValue1.get();
          num = 1;
          num2 = 0;
        }
      } else {
        const sum1 = x + derivedValue2.get();
        obj = { contentHeight: contentDimensions.get().height, windowHeight: windowDimensions.get().height, safeArea: safeArea.get() };
        const sum2 = y + coords(id[52])(obj);
        const value2 = sharedTransitionState.get();
        num = zIndex;
        width2 = width;
        height2 = height;
        num2 = sum1;
        value1 = sum2;
        if (value2 === cleanUp(id[47]).TransitionStates.YEETED) {
          value1 = sum2 + height / 4;
          num = zIndex;
          width2 = width;
          height2 = height;
          num2 = sum1;
        }
        const tmp80 = coords(id[52]);
      }
      if (derivedValue.get()) {
        num = 9001;
      }
      const obj1 = { id, mode: mode.get() };
      const value3 = focused.get();
      let id1;
      if (null != value3) {
        id1 = value3.id;
      }
      obj1.focused = id1;
      obj1.isSelf = isSelf;
      obj1.defaultBorderRadius = token;
      const tmp24 = coords(id[44]);
      if (0 !== sharedVisible.get()) {
        let num8 = 1;
        if (!tmp4) {
          num8 = 1;
          if (!isRTCConnected) {
            num8 = derivedValue1;
          }
        }
        let num6 = num8;
      } else {
        const value4 = focused.get();
        let id2;
        if (null != value4) {
          id2 = value4.id;
        }
        num6 = 0;
      }
      const gestureActive = wrapperOffset.get().gestureActive;
      if (1 === sharedVisible.get()) {
        let num10 = 1;
      } else {
        const value5 = focused.get();
        let id3;
        if (null != value5) {
          id3 = value5.id;
        }
        num10 = 0.8;
      }
      const obj2 = {};
      let obj4 = cleanUp(id[14]);
      let num12 = 100;
      if (derivedValue.get()) {
        num12 = 0;
      }
      let obj5 = cleanUp(id[38]);
      obj2.zIndex = obj4.withDelay(num12, obj5.withTiming(num, derivedValue));
      let obj6 = cleanUp(id[38]);
      let str = "animate-never";
      if (isScrollVisible.get()) {
        str = "animate-always";
      }
      class A {
        constructor(arg0) {
          tmp = arg0;
          if (arg0) {
            tmp2 = outer1_6;
            num = 0;
            tmp = 0 === outer1_6.get();
          }
          if (tmp) {
            tmp3 = outer1_30;
            tmp5 = cleanUp;
            tmp6 = id;
            num2 = 47;
            value = outer1_30.get();
            tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
          }
          if (tmp) {
            tmp7 = cleanUp;
            tmp8 = id;
            num3 = 14;
            obj = cleanUp(id[14]);
            tmp9 = outer1_0;
            tmp10 = obj.runOnJS(outer1_0)();
          }
          return;
        }
      }
      const obj3 = { sharedVisible, sharedTransitionState, TransitionStates: cleanUp(id[47]).TransitionStates, runOnJS: cleanUp(id[14]).runOnJS, cleanUp };
      A.__closure = obj3;
      A.__workletHash = 6571273005437;
      A.__initData = outer1_52;
      obj2.opacity = obj6.withTiming(num6, id2, str, A);
      obj2.width = width2;
      obj2.height = height2;
      obj4 = {};
      let withSpringResult = num2;
      if (!gestureActive) {
        withSpringResult = cleanUp(id[39]).withSpring(num2, layoutPhysics, "animate-always");
        const obj10 = cleanUp(id[39]);
      }
      obj4.translateX = withSpringResult;
      const items = [obj4, , ];
      obj5 = {};
      let withSpringResult1 = value1;
      if (!gestureActive) {
        withSpringResult1 = cleanUp(id[39]).withSpring(value1, layoutPhysics, "animate-always");
        const obj12 = cleanUp(id[39]);
      }
      obj5.translateY = withSpringResult1;
      items[1] = obj5;
      obj6 = {};
      const tmp24Result = coords(id[44])(obj1);
      obj6.scale = cleanUp(id[39]).withSpring(num10, isSelf);
      items[2] = obj6;
      obj2.transform = items;
      const obj14 = cleanUp(id[39]);
      obj2.borderRadius = cleanUp(id[39]).withSpring(tmp24Result, windowDimensions);
      return obj2;
    }
  };
  obj2 = { coords, focused, id, isPIP: tmp10, pipState: pIPState, getClampedPIPPosition: cleanUp(id[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: coords(id[52]), contentDimensions, sharedTransitionState, TransitionStates: cleanUp(id[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: coords(id[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue1, wrapperOffset, withDelay: cleanUp(id[14]).withDelay, withTiming: cleanUp(id[38]).withTiming, ZINDEX_TIMING: derivedValue, OPACITY_TIMING: id2, isScrollVisible, runOnJS: cleanUp(id[14]).runOnJS, cleanUp, withSpring: cleanUp(id[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: isSelf, SCALE_PHYSICS: windowDimensions };
  fn2.__closure = obj2;
  fn2.__workletHash = 9934021851336;
  fn2.__initData = closure_51;
  const animatedStyle = obj10.useAnimatedStyle(fn2);
  let obj3 = {
    gesturesEnabled: tmp9.cardGestureEnabled,
    onSingleTap() {
      if (closure_11.get().mode === mode.HIDDEN) {
        let obj = { debounce: true };
        callback3(obj);
      } else {
        obj = { debounce: true };
        callback(obj);
      }
    }
  };
  const obj9 = cleanUp(id[43]);
  const tmp13 = coords(id[53]);
  if (obj13.isStableActivityParticipant(tmp4)) {
    let fn3 = () => {
      const value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      if (id !== id) {
        callback2(id);
      } else {
        callback2(null);
      }
    };
  } else if (isSelf) {
    let obj14 = cleanUp(id[50]);
  }
  obj3.onDoubleTap = fn3;
  let fn4;
  if (null != id2) {
    fn4 = () => coords(id[54])({ userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }
  obj3.onLongPress = fn4;
  let items = [pIPState.mode === pipAvoidanceSpecs.IN_APP, panelCardStillInPIP];
  obj13 = cleanUp(id[50]);
  let layoutEffect = isScrollVisible.useLayoutEffect(() => {
    const result = panelCardStillInPIP.set(c31);
  }, items);
  function be(currentOriginX) {
    let obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
    obj = {};
    obj = { originX: cleanUp(id[39]).withSpring(currentOriginX.targetOriginX, layoutPhysics, "animate-always") };
    const obj4 = cleanUp(id[39]);
    obj.originY = cleanUp(id[39]).withSpring(currentOriginX.targetOriginY, layoutPhysics, "animate-always");
    const obj5 = cleanUp(id[39]);
    obj.width = cleanUp(id[39]).withSpring(currentOriginX.targetWidth, layoutPhysics, "animate-always");
    const obj6 = cleanUp(id[39]);
    obj.height = cleanUp(id[39]).withSpring(currentOriginX.targetHeight, layoutPhysics, "animate-always");
    obj.animations = obj;
    obj.initialValues = obj;
    obj.callback = function callback() {
      const value = outer1_22.get();
      let gestureActive = value.gestureActive;
      if (!gestureActive) {
        gestureActive = 0 === value.y;
      }
      if (!gestureActive) {
        const result = outer1_22.set({ gestureActive: false, x: 0, y: 0 });
      }
    };
    return obj;
  }
  obj4 = { withSpring: cleanUp(id[39]).withSpring, layoutPhysics, wrapperOffset };
  be.__closure = obj4;
  be.__workletHash = 2693592883668;
  be.__initData = closure_53;
  const items1 = [layoutPhysics, wrapperOffset];
  let callback = isScrollVisible.useCallback(be, items1);
  let obj5 = { gesture: tmp13(obj3) };
  const items2 = [tmp.positionWrapper, animatedStyle];
  obj5.children = wrapperDimensions(coords(id[40]), { style: items2, layout: callback, children });
  return wrapperDimensions(cleanUp(id[55]).GestureDetector, obj5);
}
({ VoicePanelCTACard: closure_9, VoicePanelModes: closure_10, MODE_CHANGE_PHYSICS: closure_11, SPEAKING_PHYSICS: closure_12, VoicePanelCardItemType: closure_13 } = VoicePanelModes);
({ ApplicationStreamStates: closure_17, EMPTY_STRING_SNOWFLAKE_ID: closure_18 } = ME);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let closure_24 = require("module_3991").createAnimatedComponent(require("Text").Text);
let tmp5 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XXLARGE];
let obj = {};
let merged = Object.assign(SCALE_PHYSICS);
obj["stiffness"] = 150;
let closure_26 = { duration: 200 };
let closure_27 = { duration: 0 };
let c28 = 0.75;
obj = {};
let obj1 = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
obj.positionWrapper = obj1;
let obj2 = { position: "absolute", top: -4, left: -4, bottom: -4, right: -4, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_800 };
obj.userRoundedCard = obj2;
_createForOfIteratorHelperLoose = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.nonUserRoundedCard = _createForOfIteratorHelperLoose;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4["backgroundColor"] = "black";
obj.blackBackground = obj4;
obj.selfStreamFocusedSubtitle = { textAlign: "center", marginTop: 4, marginBottom: 40 };
let obj5 = { position: "relative", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, overflow: "hidden" };
obj.avatarImageMaskStyles = obj5;
obj.avatarPlaceholder = { width: tmp5, height: tmp5, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj.image = { maxWidth: 80, maxHeight: 80 };
let obj7 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj7["overflow"] = "hidden";
obj.speakingIndicatorWrapper = obj7;
let obj8 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj8["borderColor"] = require("_createForOfIteratorHelperLoose").colors.BLACK;
obj.speakingIndicatorUnderlay = obj8;
let obj9 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj9["borderColor"] = require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360;
obj.speakingIndicatorGreenBar = obj9;
let closure_29 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_30 = { code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}" };
let closure_31 = { code: "function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
let closure_32 = { code: "function VoicePanelCardTsx3(isFocused,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused!==lastIsFocused){runOnJS(setIsFocused)(isFocused);}}" };
let closure_33 = importAllResult.memo((id) => {
  let isScrollVisible;
  let isSelf;
  let layout;
  let sharedCoords;
  let streamGuildId;
  let streamId;
  let userNick;
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ sharedCoords, layout } = id);
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[24]));
  const focused = context.focused;
  setFocused = context.setFocused;
  let obj = id(streamGuildId[25]);
  const items = [_isNativeReflectConstruct];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ stream: tmp6.getStreamForUser(userId, streamGuildId), activeStream: tmp6.getActiveStreamForUser(userId, streamGuildId) }), items1);
  const stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = setFocused.useCallback(() => {
    if (null != stream) {
      let obj = id(streamGuildId[19]);
      obj = { forceMultiple: true };
      obj.watchStream(stream, obj);
      setFocused(id(streamGuildId[20]).encodeStreamKey(stream));
      const obj3 = id(streamGuildId[20]);
    }
  }, items2);
  const tmp4 = focused(setFocused.useState(false), 2);
  const first = tmp4[0];
  _isNativeReflectConstruct = tmp6;
  let obj1 = id(streamGuildId[14]);
  class P {
    constructor() {
      value = focused.get();
      id = undefined;
      if (null != value) {
        id = value.id;
      }
      return id === id;
    }
  }
  P.__closure = { focused, id };
  P.__workletHash = 13061544667904;
  P.__initData = closure_31;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      id(streamGuildId[14]).runOnJS(_isNativeReflectConstruct)(arg0);
      const obj = id(streamGuildId[14]);
    }
  };
  obj = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp6 };
  fn.__closure = obj;
  fn.__workletHash = 8824446489251;
  fn.__initData = closure_32;
  const animatedReaction = obj1.useAnimatedReaction(P, fn);
  const tmp8Result = userId(streamGuildId[26])(id(streamGuildId[27]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    obj = { sharedCoords, stream, isFocused: first };
    return callback(SelfStreamCard, obj);
  } else if (null == activeStream) {
    obj1 = { mode: context.mode, stream, onPress: callback, disabled: false, layout };
    return callback(id(streamGuildId[28]).VoicePanelStreamPreview, obj1);
  } else {
    if (null == tmp8Result) {
      if (activeStream.state !== constants3.FAILED) {
        if (activeStream.state === constants3.ENDED) {
          const obj2 = { stream: activeStream, removeSplashImage: !first, type: id(streamGuildId[29]).VideoEmptyTypes.STREAM_ENDED, style: stream.absoluteFill };
          return callback(userId(streamGuildId[29]), obj2);
        } else {
          if (activeStream.state === constants3.RECONNECTING) {
            let obj3 = {};
            const intl = id(streamGuildId[22]).intl;
            obj3.title = intl.string(id(streamGuildId[22]).t["pdFFK+"]);
            let tmp14 = callback(id(streamGuildId[30]).StreamTextOverlay, obj3);
          } else {
            tmp14 = null;
            if (activeStream.state === constants3.PAUSED) {
              const obj4 = {};
              const intl2 = id(streamGuildId[22]).intl;
              obj4.title = intl2.string(id(streamGuildId[22]).t["5q17w5"]);
              const intl3 = id(streamGuildId[22]).intl;
              const obj5 = { username: userNick };
              obj4.subtext = intl3.formatToPlainString(id(streamGuildId[22]).t.meVVlb, obj5);
              tmp14 = callback(id(streamGuildId[30]).StreamTextOverlay, obj4);
            }
          }
          let obj6 = {};
          const obj7 = { layout, id };
          let tmp21 = null;
          if (null != streamId) {
            tmp21 = streamId;
          }
          obj7.streamId = tmp21;
          obj7.userId = userId;
          obj6 = id(streamGuildId[20]);
          obj7.streamKey = obj6.encodeStreamKey(activeStream);
          obj7.isScrollVisible = isScrollVisible;
          obj7.videoSpinnerContext = id(streamGuildId[32]).VideoSpinnerContext.REMOTE_STREAM;
          obj7.sharedCoords = sharedCoords;
          obj7.isCamera = false;
          obj7.paused = activeStream.state === constants3.PAUSED;
          const items3 = [callback(userId(streamGuildId[31]), obj7), tmp14];
          obj6.children = items3;
          return closure_23(closure_22, obj6);
        }
      }
    }
    const obj8 = { avError: tmp8Result, stream: activeStream, removeSplashImage: !first, type: id(streamGuildId[29]).VideoEmptyTypes.STREAM_FAILED, style: stream.absoluteFill };
    return callback(userId(streamGuildId[29]), obj8);
  }
  const tmp8 = userId(streamGuildId[26]);
});
let closure_34 = { code: "function VoicePanelCardTsx4(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}" };
let closure_35 = { code: "function VoicePanelCardTsx5(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}" };
let closure_36 = importAllResult.memo(function AnimatedUserCardInner(isRinging) {
  let avatarDecoration;
  let avatarURI;
  let guildId;
  let layout;
  let layoutPhysics;
  let userId;
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  ({ userId, guildId } = isRinging);
  userId = undefined;
  let c6;
  const tmp = callback3();
  mode = importAllResult.useContext(layoutPhysics(mode[24])).mode;
  let obj = isRinging(mode[33]);
  const dominantColorFromImage = obj.useDominantColorFromImage(avatarURI);
  const tmp3 = layoutPhysics(mode[34])("VoicePanelCard-native");
  if (null == userId) {
    userId = closure_18;
  }
  let tmp4;
  if (null != guildId) {
    tmp4 = guildId;
  }
  c6 = tmp4;
  const tmp5 = layoutPhysics(mode[35])(userId, tmp4);
  let first;
  if (null != tmp5) {
    const themeColors = tmp5.themeColors;
    if (null != themeColors) {
      first = themeColors[0];
    }
  }
  let tmp7 = null;
  if (null != first) {
    tmp7 = first;
  }
  let tmp8;
  if (null != tmp5) {
    const themeColors2 = tmp5.themeColors;
    if (null != themeColors2) {
      tmp8 = themeColors2[1];
    }
  }
  let tmp9 = null;
  if (null != tmp8) {
    tmp9 = tmp8;
  }
  let tmp10 = tmp3;
  if (tmp3) {
    tmp10 = null != tmp7;
  }
  if (tmp10) {
    tmp10 = null != tmp9;
  }
  let obj1 = isRinging(mode[36]);
  let tmp11 = null;
  if (tmp10) {
    tmp11 = tmp7;
  }
  let tmp12 = null;
  if (tmp10) {
    tmp12 = tmp9;
  }
  const videoTileGradientColors = obj1.useVideoTileGradientColors(tmp11, tmp12);
  let items = [tmp3, userId, tmp4];
  const effect = importAllResult.useEffect(() => {
    if (tmp) {
      const obj = { guildId: c6, dispatchWait: true };
      layoutPhysics(mode[37])(userId, undefined, obj);
    }
  }, items);
  let obj2 = isRinging(mode[14]);
  class N {
    constructor() {
      obj = {};
      obj2 = isRinging(mode[38]);
      num = 1;
      if (isRinging) {
        num = outer1_28;
      }
      obj.opacity = obj2.withTiming(num, { duration: 100 }, "animate-always");
      obj.backgroundColor = closure_3;
      return obj;
    }
  }
  obj = { withTiming: isRinging(mode[38]).withTiming, isRinging, CONNECTING_OPACITY: c28, backgroundColor: dominantColorFromImage };
  N.__closure = obj;
  N.__workletHash = 6200022645373;
  N.__initData = closure_34;
  const animatedStyle = obj2.useAnimatedStyle(N);
  let obj4 = isRinging(mode[14]);
  class H {
    constructor() {
      obj = {};
      obj = {};
      obj3 = isRinging(mode[39]);
      num = 1;
      if (mode.get() === outer1_10.PIP) {
        num = 0.8;
      }
      obj.scale = obj3.withSpring(num, layoutPhysics);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes: closure_10, layoutPhysics };
  H.__closure = obj;
  H.__workletHash = 5040632730576;
  H.__initData = closure_35;
  let cachedSourceFromURI;
  const animatedStyle1 = obj4.useAnimatedStyle(H);
  if (null != avatarURI) {
    let obj6 = isRinging(mode[33]);
    cachedSourceFromURI = obj6.getCachedSourceFromURI(avatarURI);
  }
  obj1 = { style: items1, layout };
  items1 = [tmp.userRoundedCard, animatedStyle];
  let tmp22 = null;
  if (null != videoTileGradientColors) {
    obj2 = { colors: videoTileGradientColors, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: userId.absoluteFill, pointerEvents: "none" };
    tmp22 = callback(layoutPhysics(mode[41]), obj2);
  }
  const items2 = [tmp22, ];
  if (null == cachedSourceFromURI) {
    const obj3 = { style: tmp.avatarPlaceholder };
    let tmp39Result = callback(layoutPhysics(mode[21]), obj3);
  } else {
    obj4 = {};
    let prop;
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const items3 = [prop, animatedStyle1];
    obj4.style = items3;
    obj4.layout = layout;
    if (null != avatarDecoration) {
      const obj5 = { source: cachedSourceFromURI, size: isRinging(mode[16]).AvatarSizes.XXLARGE, avatarDecoration };
      let tmp28Result = tmp28(isRinging(mode[16]).Avatar, obj5);
    } else {
      obj6 = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
      tmp28Result = tmp28(layoutPhysics(mode[42]), obj6);
    }
    obj4.children = tmp28Result;
    tmp39Result = callback(layoutPhysics(mode[40]), obj4);
    const tmp39 = callback;
    const tmp42 = layoutPhysics(mode[40]);
  }
  items2[1] = tmp39Result;
  obj1.children = items2;
  return closure_23(layoutPhysics(mode[40]), obj1);
});
let closure_37 = { code: "function VoicePanelCardTsx6(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
let closure_38 = { code: "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
let closure_39 = { code: "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
let closure_40 = importAllResult.memo((id) => {
  let closure_0 = id;
  const tmp = id(importAllResult.useState(() => outer1_8.isSpeaking(id.id)), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  id = id.id;
  const items = [first, id];
  const effect = importAllResult.useEffect(() => {
    if (!first) {
      const result = outer1_8.addConditionalChangeListener(() => {
        let flag = !outer2_8.isSpeaking(outer1_3);
        if (!flag) {
          outer1_2(true);
          flag = false;
        }
        return flag;
      }, false);
    }
  }, items);
  let tmp4 = null;
  if (first) {
    const obj = {};
    const merged = Object.assign(id);
    tmp4 = callback(SpeakingIndicator, obj);
  }
  return tmp4;
});
let closure_41 = { code: "function VoicePanelCardTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_42 = { code: "function VoicePanelCardTsx10(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}" };
let closure_43 = { code: "function VoicePanelCardTsx11(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}" };
let closure_44 = { code: "function VoicePanelCardTsx12(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}" };
let obj10 = { isSelf: false, hasVideo: false, user: { id: undefined } };
let closure_46 = { code: "function layoutTransitionFunction_VoicePanelCardTsx13(values,physics,disableAnimation=false){const{withSpring}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,physics,!disableAnimation?'animate-always':'animate-never'),originY:withSpring(values.targetOriginY,physics,!disableAnimation?'animate-always':'animate-never'),width:withSpring(values.targetWidth,physics,!disableAnimation?'animate-always':'animate-never'),height:withSpring(values.targetHeight,physics,!disableAnimation?'animate-always':'animate-never')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let closure_47 = (() => {
  function layoutTransitionFunction(originX, SUBTLE_SPRING) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let obj = {};
    obj = {};
    let str = "animate-always";
    let str2 = "animate-always";
    if (flag) {
      str2 = "animate-never";
    }
    obj.originX = outer1_0(outer1_2[39]).withSpring(originX.targetOriginX, SUBTLE_SPRING, str2);
    const obj3 = outer1_0(outer1_2[39]);
    let str3 = str;
    if (flag) {
      str3 = "animate-never";
    }
    obj.originY = outer1_0(outer1_2[39]).withSpring(originX.targetOriginY, SUBTLE_SPRING, str3);
    const obj4 = outer1_0(outer1_2[39]);
    let str4 = str;
    if (flag) {
      str4 = "animate-never";
    }
    obj.width = outer1_0(outer1_2[39]).withSpring(originX.targetWidth, SUBTLE_SPRING, str4);
    const obj5 = outer1_0(outer1_2[39]);
    if (flag) {
      str = "animate-never";
    }
    obj.height = outer1_0(outer1_2[39]).withSpring(originX.targetHeight, SUBTLE_SPRING, str);
    obj.animations = obj;
    obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
    return obj;
  }
  layoutTransitionFunction.__closure = { withSpring: require(4542) /* withSpring */.withSpring };
  layoutTransitionFunction.__workletHash = 4871152530917;
  layoutTransitionFunction.__initData = closure_46;
  return layoutTransitionFunction;
})();
let closure_48 = { code: "function VoicePanelCardTsx14(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
let closure_49 = { code: "function VoicePanelCardTsx15(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
let closure_50 = { code: "function VoicePanelCardTsx16(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
let closure_51 = { code: "function VoicePanelCardTsx17(){const{coords,focused,id,isPIP,pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){width=pipState.width;height=pipState.height;const pipHeight=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'animate-always')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'animate-always')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
let closure_52 = { code: "function VoicePanelCardTsx18(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_53 = { code: "function VoicePanelCardTsx19(values){const{withSpring,layoutPhysics,wrapperOffset}=this.__closure;const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'animate-always'),originY:withSpring(values.targetOriginY,layoutPhysics,'animate-always'),width:withSpring(values.targetWidth,layoutPhysics,'animate-always'),height:withSpring(values.targetHeight,layoutPhysics,'animate-always')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}}};}" };
let closure_54 = { code: "function VoicePanelCardTsx20(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
let closure_55 = { code: "function layoutTransition_VoicePanelCardTsx21(values,disableAnimation=false){const{layoutTransitionFunction,physics}=this.__closure;return layoutTransitionFunction(values,physics,disableAnimation);}" };
let obj6 = { width: tmp5, height: tmp5, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
const memoResult = importAllResult.memo(function VoicePanelCard(cleanUp) {
  let channelId;
  let focused;
  let guildId;
  let id3;
  let isCall;
  let item;
  let layoutManager;
  let layoutTransition;
  let mountedCards;
  let physics;
  let scrollPosition;
  let streamId;
  let transitionState;
  let user;
  ({ item, transitionState } = cleanUp);
  let id2;
  let sharedValue1;
  let cardLayoutCoordsSubscription;
  let id = item.id;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[24]));
  ({ focused, guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp2 = windowDimensions(id2[50])(id, channelId, guildId);
  let obj = scrollPosition(id2[50]);
  let tmp3 = tmp2;
  if (!obj.isStableParticipantWithUser(tmp2)) {
    tmp3 = obj10;
  }
  const isSelf = tmp3.isSelf;
  id2 = tmp3.user.id;
  let obj1 = scrollPosition(id2[25]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_7.isConnected());
  let obj2 = scrollPosition(id2[50]);
  const tmp5 = obj2.isStableUserParticipant(tmp2) && tmp2.ringing;
  let str = "";
  if (null != tmp2) {
    str = "";
    if ("user" in tmp2) {
      str = tmp2.user.id;
    }
  }
  let type;
  if (null != tmp2) {
    type = tmp2.type;
  }
  if (type === ParticipantTypes.STREAM) {
    let DEFAULT = scrollPosition(id2[27]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = scrollPosition(id2[27]).MediaEngineContextTypes.DEFAULT;
  }
  let tmp6Result = windowDimensions(id2[26])(DEFAULT, str);
  const tmp6 = windowDimensions(id2[26]);
  let obj3 = scrollPosition(id2[14]);
  if (transitionState === scrollPosition(id2[47]).TransitionStates.MOUNTED) {
    let num3 = 1;
  } else {
    num3 = 0;
  }
  const sharedValue = obj3.useSharedValue(num3);
  let obj4 = scrollPosition(id2[14]);
  let isSpeakingResult = null != id2;
  if (isSpeakingResult) {
    isSpeakingResult = speaking.isSpeaking(id2);
  }
  sharedValue1 = obj4.useSharedValue(isSpeakingResult);
  const items1 = [id2, sharedValue1];
  const layoutEffect = cardLayoutCoordsSubscription.useLayoutEffect(() => {
    function handleChange() {
      let isSpeakingResult = null != outer1_2;
      if (isSpeakingResult) {
        isSpeakingResult = outer2_8.isSpeaking(outer1_2);
      }
      const result = outer1_3.set(isSpeakingResult);
    }
    handleChange();
    let result = outer1_8.addReactChangeListener(handleChange);
    return () => {
      const result = outer2_8.removeReactChangeListener(handleChange);
    };
  }, items1);
  let obj5 = scrollPosition(id2[57]);
  cardLayoutCoordsSubscription = obj5.useCardLayoutCoordsSubscription(id, layoutManager);
  let obj6 = scrollPosition(id2[14]);
  class U {
    constructor() {
      sum = outer1_16 + isSpeaking.get().y;
      value = scrollPosition.get();
      tmp3 = sum > value - isSpeaking.get().height;
      if (tmp3) {
        tmp4 = scrollPosition;
        tmp6 = windowDimensions;
        value1 = scrollPosition.get();
        tmp3 = sum < value1 + windowDimensions.get().height;
      }
      return tmp3;
    }
  }
  obj = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  U.__closure = obj;
  U.__workletHash = 16772493240559;
  U.__initData = closure_54;
  const derivedValue = obj6.useDerivedValue(U);
  const memo = cardLayoutCoordsSubscription.useMemo(() => {
    let obj = { mass: outer1_11.mass, damping: windowDimensions(id2[58])(outer1_11.damping - 2, outer1_11.damping + 2), stiffness: windowDimensions(id2[58])(outer1_11.stiffness - 20, outer1_11.stiffness + 20) };
    obj = {
      physics: obj,
      layoutTransition: (() => {
        function layoutTransition(arg0) {
          let flag = arg1;
          if (arg1 === undefined) {
            flag = false;
          }
          return outer3_47(arg0, outer1_0, flag);
        }
        obj = { layoutTransitionFunction: outer2_47, physics: obj };
        layoutTransition.__closure = obj;
        layoutTransition.__workletHash = 12472306522220;
        layoutTransition.__initData = outer2_55;
        return layoutTransition;
      })()
    };
    return obj;
  }, []);
  ({ physics, layoutTransition } = memo);
  if (item.type === constants2.CTA) {
    const id4 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id4) {
      let tmp26Result = callback(windowDimensions(id2[59]), {});
    } else if (constants.CALLER_DISCONNECTED === id4) {
      tmp26Result = callback(windowDimensions(id2[60]), {});
    }
    obj = { cleanUp: cleanUp.cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue };
    const items2 = [tmp26Result, , ];
    let tmp55Result = null != tmp2;
    if (tmp55Result) {
      obj1 = { isRinging: tmp5, participant: tmp2 };
      const tmp55 = callback;
      const tmp58 = windowDimensions(id2[63]);
      let userNick;
      if (obj15.isStableParticipantWithUser(tmp2)) {
        userNick = tmp2.userNick;
      }
      obj1.label = userNick;
      obj1.layout = layoutTransition;
      obj1.speaking = sharedValue1;
      tmp55Result = tmp55(tmp58, obj1);
      obj15 = scrollPosition(id2[50]);
    }
    items2[1] = tmp55Result;
    let result = scrollPosition(id2[50]).isStableParticipantWithUser(tmp2);
    if (result) {
      obj2 = { speaking: sharedValue1, id, isSelf, layout: layoutTransition };
      result = callback(closure_40, obj2);
    }
    items2[2] = result;
    obj.children = items2;
    return closure_23(AnimatedWrapper, obj);
  } else if (null != tmp2) {
    type = item.type;
    const type2 = tmp2.type;
    if (ParticipantTypes.USER === type2) {
      ({ id: id3, streamId, user } = tmp2);
      if (tmp2.hasVideo) {
        if (stateFromStores) {
          if (tmp2.canRenderVideo) {
            if (null == tmp6Result) {
              obj3 = { id: id3, userId: user.id };
              let tmp33 = null;
              if (null != streamId) {
                tmp33 = streamId;
              }
              obj3.streamId = tmp33;
              obj3.isScrollVisible = derivedValue;
              const VideoSpinnerContext = scrollPosition(id2[32]).VideoSpinnerContext;
              obj3.videoSpinnerContext = isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
              obj3.sharedCoords = cardLayoutCoordsSubscription;
              obj3.isCamera = true;
              if (isCall) {
                isCall = !isSelf;
              }
              obj3.focusOnReady = isCall;
              obj3.layout = layoutTransition;
              let tmp37Result = callback(windowDimensions(id2[31]), obj3);
              const tmp29 = callback;
              const tmp32 = windowDimensions(id2[31]);
            }
            obj4 = { avError: tmp6Result };
            focused = focused.get();
            id = undefined;
            if (null != focused) {
              id = focused.id;
            }
            tmp6Result = id !== id3;
            obj4.removeSplashImage = tmp6Result;
            obj4.userId = user.id;
            user = StyleSheet.absoluteFill;
            obj4.style = user;
            tmp37Result = callback(windowDimensions(id2[61]), obj4);
            const tmp37 = callback;
            const tmp40 = windowDimensions(id2[61]);
          }
        }
      }
      obj5 = { isRinging: tmp5, avatarURI: user.getAvatarURL(guildId, 80, false) };
      const userAvatarDecoration = tmp2.userAvatarDecoration;
      let tmp28;
      if (null != userAvatarDecoration) {
        tmp28 = userAvatarDecoration;
      }
      obj5.avatarDecoration = tmp28;
      obj5.layout = layoutTransition;
      obj5.layoutPhysics = physics;
      obj5.userId = user.id;
      obj5.guildId = guildId;
      tmp26Result = callback(closure_36, obj5);
      const tmp26 = callback;
      const tmp27 = closure_36;
    } else if (ParticipantTypes.STREAM === type2) {
      obj6 = { userId: tmp2.user.id };
      ({ id: obj9.id, streamGuildId: obj9.streamGuildId, streamId: obj9.streamId, userNick: obj9.userNick } = tmp2);
      obj6.isSelf = isSelf;
      obj6.sharedCoords = cardLayoutCoordsSubscription;
      obj6.isScrollVisible = derivedValue;
      obj6.layout = layoutTransition;
      tmp26Result = callback(closure_33, obj6);
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj7 = { sharedVisible: sharedValue, applicationId: tmp2.applicationId, layout: layoutTransition };
      tmp26Result = callback(windowDimensions(id2[62]), obj7, tmp2.id);
    }
  }
  tmp26Result = callback(closure_36, { isRinging: tmp5, avatarURI: undefined, avatarDecoration: undefined, layout: layoutTransition, layoutPhysics: physics });
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default memoResult;
