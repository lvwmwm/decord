// Module ID: 16956
// Function ID: 16957
// Name: VoicePanelCard
// Dependencies: [32, 19, 17, 4858, 4859, 5731, 11755, 11753, 16913, 11758, 1074, 4857, 11756, 21, 4566, 4832, 5293, 1177, 4836, 576, 4978, 4888, 5901, 1115, 5281, 11754, 504, 8873, 4891, 12612, 8876, 8872, 16957, 8883, 8289, 7697, 4837, 5280, 6494, 5899, 4531, 8902, 16958, 10456, 8853, 4540, 6583, 16916, 16929, 16912, 16959, 16960, 7624, 6073, 16961, 11757, 16962, 16963, 16964, 16965, 16966, 16976, 2]

// Module 16956 (VoicePanelCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import native2 from "native" /* 4540 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import CallConstants from "CallConstants" /* 4857 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import spring from "spring" /* 5280 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11758 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 16912 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 16913 */;
import computeCardBorderRadiusDefault from "computeCardBorderRadius" /* 16958 */;
import calculateContentCenterOffsetDefault from "calculateContentCenterOffset" /* 16959 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import SpeakingStore from "SpeakingStore" /* 5731 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport_mod = ReanimatedRexport2;
let importDefault, set;

let c10;
let c9;
let closure_12;
let closure_20;
let closure_21;
let closure_22;
let map1;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let rect1;
let size;
let size1;
let unpackModuleId;
function SelfStreamCard(sharedCoords) {
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let str;
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = closure_29();
  const items = [stream];
  const tmp4 = isFocused;
  const callback = react.useCallback(() => {
    if (null != stream) {
      const stopStream = StreamActionCreators.stopStream;
      StreamActionCreators;
      const obj = StreamKeyUtils;
      stopStream(obj.encodeStreamKey(tmp));
    }
  }, items);
  let obj = sharedCoords(isFocused[14]);
  const fn = function l() {
    let str;
    let num = 16;
    if (isFocused) {
      num = 0;
    }
    const obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: str };
    str = "auto";
    if (!isFocused) {
      str = sharedCoords.get().width;
    }
    return obj;
  };
  fn.__closure = { isFocused, sharedCoords };
  fn.__workletHash = 4561576173627;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let tmp9 = isFocused;
  const obj2 = { style: tmp.nonUserRoundedCard, children: items1 };
  const tmp7 = stream;
  const tmp8 = stream(isFocused[22]);
  if (isFocused) {
    const obj3 = { style: tmp.blackBackground };
    tmp9 = closure_20(tmp7(tmp4[22]), obj3);
  }
  items1 = [tmp9, , ];
  const obj4 = { style: animatedStyle, variant: str, color: "text-overlay-light", children: intl.string(sharedCoords(tmp4[23]).t.gMOwov) };
  str = "text-sm/semibold";
  const tmp12 = closure_23;
  if (isFocused) {
    str = "text-lg/semibold";
  }
  intl = tmp3(tmp4[23]).intl;
  items1[1] = closure_20(tmp12, obj4);
  let tmp6Result = null;
  if (isFocused) {
    const obj5 = { children: items2 };
    const obj6 = { style: tmp.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: intl2.string(sharedCoords(tmp4[23]).t.dKeLGt) };
    const Text = tmp3(tmp4[15]).Text;
    intl2 = tmp3(tmp4[23]).intl;
    items2 = [closure_20(Text, obj6), ];
    const obj7 = { size: "lg", variant: "primary-overlay", onPress: callback, text: intl3.string(sharedCoords(tmp4[23]).t.CpkXwZ) };
    const Button = tmp3(tmp4[24]).Button;
    intl3 = tmp3(tmp4[23]).intl;
    items2[1] = closure_20(Button, obj7);
    tmp6Result = tmp6(closure_21, obj5);
  }
  items1[2] = tmp6Result;
  return closure_22(tmp8, obj2);
}
function SpeakingIndicator(id) {
  let items;
  let items1;
  let items2;
  let items3;
  id = id.id;
  const isSelf = id.isSelf;
  const speaking = id.speaking;
  const layout = id.layout;
  let focused;
  const userId = id.userId;
  const context = focused.useContext(isSelf(speaking[25]));
  const mode = context.mode;
  focused = context.focused;
  const guildId = context.guildId;
  const tmp2 = closure_29();
  let obj = id(speaking[40]);
  const token = obj.useToken(isSelf(speaking[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj2 = id(speaking[41]);
  const avatarSpeakingColor = obj2.useAvatarSpeakingColor({ userId, guildId });
  let obj3 = id(speaking[14]);
  const fn = function c() {
    let id1;
    let num2;
    let str;
    let tmp18;
    let withSpring;
    let tmp = mode.get() !== constants.PIP;
    const obj = mode;
    if (tmp) {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 1;
    if (tmp) {
      num = 0;
    }
    const obj2 = { opacity: num, borderRadius: withSpring(num2, tmp18, str) };
    num2 = 0;
    withSpring = spring.withSpring;
    spring;
    if (!tmp) {
      const obj3 = { id, mode: obj.get(), focused: id1, isSelf, defaultBorderRadius: token };
      const tmp10 = computeCardBorderRadiusDefault;
      const value2 = focused.get();
      id1 = undefined;
      if (value2 != null) {
        id1 = value2.id;
      }
      num2 = tmp10(obj3);
    }
    str = "animate-always";
    tmp18 = closure_12;
    if (tmp) {
      str = "animate-never";
    }
    return obj2;
  };
  fn.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[37]).withSpring, computeCardBorderRadius: isSelf(speaking[42]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  fn.__workletHash = 5111620492405;
  fn.__initData = __initData4;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(speaking[37]).withSpring, computeCardBorderRadius: isSelf(speaking[42]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const fn2 = function h() {
    let id1;
    let num2;
    let withSpring2;
    let tmp = mode.get() === constants.PIP;
    const obj = mode;
    if (!tmp) {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (!tmp) {
      const obj2 = { id, mode: obj.get(), focused: id1, isSelf, defaultBorderRadius: token };
      const tmp11 = computeCardBorderRadiusDefault;
      const value2 = focused.get();
      id1 = undefined;
      if (value2 != null) {
        id1 = value2.id;
      }
      num = tmp11(obj2);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    const obj3 = { borderRadius: withSpring(num, closure_12, str2), borderWidth: withSpring2(num2, closure_12, str) };
    num2 = 0;
    withSpring2 = tmp7(5280).withSpring;
    spring;
    if (!tmp) {
      num2 = 0;
      if (speaking.get()) {
        num2 = roundToNearestPixelDefault(5);
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    return obj3;
  };
  const obj5 = id(speaking[14]);
  fn2.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[37]).withSpring, computeCardBorderRadius: isSelf(speaking[42]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(speaking[43]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  fn2.__workletHash = 13144186988728;
  fn2.__initData = __initData5;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(speaking[37]).withSpring, computeCardBorderRadius: isSelf(speaking[42]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, roundToNearestPixel: isSelf(speaking[43]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 });
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const fn3 = function p() {
    let id1;
    let num2;
    let withSpring2;
    let tmp = mode.get() === constants.PIP;
    const obj = mode;
    if (!tmp) {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      tmp = id === id;
    }
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (!tmp) {
      const obj2 = { id, mode: obj.get(), focused: id1, isSelf, defaultBorderRadius: token };
      const tmp11 = computeCardBorderRadiusDefault;
      const value2 = focused.get();
      id1 = undefined;
      if (value2 != null) {
        id1 = value2.id;
      }
      num = tmp11(obj2);
    }
    let str = "animate-always";
    let str2 = "animate-always";
    if (tmp) {
      str2 = "animate-never";
    }
    const obj3 = { borderRadius: withSpring(num, closure_12, str2), borderWidth: withSpring2(num2, closure_12, str) };
    num2 = 0;
    withSpring2 = tmp7(5280).withSpring;
    spring;
    if (!tmp) {
      num2 = 0;
      if (speaking.get()) {
        num2 = 3;
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    return obj3;
  };
  const obj7 = id(speaking[14]);
  fn3.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(speaking[37]).withSpring, computeCardBorderRadius: isSelf(speaking[42]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, SPEAKING_BORDER_SIZE: 3 };
  fn3.__workletHash = 2850608131549;
  fn3.__initData = __initData6;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(speaking[37]).withSpring, computeCardBorderRadius: isSelf(speaking[42]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speaking, SPEAKING_BORDER_SIZE: 3 });
  const animatedStyle2 = obj7.useAnimatedStyle(fn3);
  const obj9 = { style: items, layout, pointerEvents: "none", children: items2 };
  items = [tmp2.speakingIndicatorWrapper, animatedStyle];
  const tmp8 = isSelf(speaking[38]);
  const obj10 = { style: items1, layout };
  items1 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  items2 = [closure_20(isSelf(speaking[38]), obj10), ];
  const obj11 = { style: items3, layout };
  items3 = [tmp2.speakingIndicatorBar, { borderColor: avatarSpeakingColor }, animatedStyle2];
  items2[1] = closure_20(isSelf(speaking[38]), obj11);
  return closure_22(tmp8, obj9);
}
function AnimatedWrapper(cleanUp) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c11;
  let c13;
  let c18;
  let c19;
  let fn5;
  let fn6;
  let focused;
  let items6;
  let mode;
  let mountedCards;
  let obj11;
  let pipAvoidanceSpecs;
  let sharedVisible;
  let transitionState;
  let windowDimensions;
  cleanUp = cleanUp.cleanUp;
  const coords = cleanUp.coords;
  let id = cleanUp.id;
  const isRTCConnected = cleanUp.isRTCConnected;
  const isScrollVisible = cleanUp.isScrollVisible;
  const layoutPhysics = cleanUp.layoutPhysics;
  ({ transitionState, sharedVisible } = cleanUp);
  c11 = undefined;
  focused = undefined;
  c13 = undefined;
  mode = undefined;
  pipAvoidanceSpecs = undefined;
  c18 = undefined;
  SCALE_PHYSICS = undefined;
  windowDimensions = undefined;
  let isSelf;
  let id2;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let sharedValue;
  let closure_31;
  let token;
  let sharedValue1;
  let callback1;
  let sharedValue2;
  let tmp = coords;
  const tmp2 = id;
  const children = cleanUp.children;
  const analyticsLocations = coords(id[46])().analyticsLocations;
  let obj = isScrollVisible;
  const tmp3 = derivedValue2();
  const context = isScrollVisible.useContext(coords(id[25]));
  const channelId = context.channelId;
  const connected = context.connected;
  const contentDimensions = context.contentDimensions;
  ({ controlsSpecs: c11, focused } = context);
  ({ hideControls: c13, mode } = context);
  ({ mountedCards, pipAvoidanceSpecs } = context);
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  ({ setFocused: c18, showControls: c19, windowDimensions } = context);
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const pipHandoff = context.pipHandoff;
  const tmp5 = cleanUp;
  const guildId = context.guildId;
  let obj2 = cleanUp(id[47]);
  const pIPState = obj2.usePIPState();
  const tmp7 = coords(id[48])(id, channelId, guildId);
  const obj3 = cleanUp(id[48]);
  let tmp8 = tmp7;
  if (!obj3.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_47;
  }
  isSelf = tmp8.isSelf;
  id2 = tmp8.user.id;
  let fn = function v() {
    const tmp = id === pIPState.id && mode.get() === contentDimensions.PIP;
    return tmp;
  };
  fn.__closure = { id, pipState: pIPState, mode, VoicePanelModes: contentDimensions };
  fn.__workletHash = 4773864088866;
  fn.__initData = __initData11;
  const tmp9 = contentDimensions;
  const tmp5Result = tmp5(tmp2[14]);
  derivedValue = tmp5Result.useDerivedValue(fn);
  const tmp5Result12 = tmp5(tmp2[14]);
  class E {
    constructor() {
      let num;
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === id) {
        num = scrollPosition.get();
      } else {
        num = 0;
      }
      return num;
    }
  }
  E.__closure = { focused, id, mode, VoicePanelModes: contentDimensions, scrollPosition };
  E.__workletHash = 8770947887509;
  E.__initData = __initData12;
  derivedValue1 = tmp5Result12.useDerivedValue(E);
  const fn2 = function b() {
    let maxResult;
    if (connected.get()) {
      const _Math = Math;
      const left = safeArea.get().left;
      maxResult = max(EDGE_GUTTER, left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
    } else {
      maxResult = wrapperDimensions.get().drawerWidth / 2;
    }
    return maxResult;
  };
  let obj4 = { connected, EDGE_GUTTER: safeArea, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  fn2.__closure = obj4;
  fn2.__workletHash = 15078431132990;
  fn2.__initData = __initData13;
  const tmp5Result13 = tmp5(tmp2[14]);
  derivedValue2 = tmp5Result13.useDerivedValue(fn2);
  importDefault = tmp7;
  let callback;
  const tmp5Result14 = tmp5(tmp2[14]);
  sharedValue = tmp5Result14.useSharedValue(transitionState);
  const tmp14 = isRTCConnected(obj.useState(true), 2);
  let closure_9 = tmp14[1];
  let type;
  const first = tmp14[0];
  const useCallback = obj.useCallback;
  if (tmp7 != null) {
    type = tmp7.type;
  }
  let items = [type, id];
  callback = useCallback((arg0) => {
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    if (type === constants.ACTIVITY) {
      closure_9(arg0 !== id);
    }
  }, items);
  const tmp5Result15 = tmp5(tmp2[14]);
  class P {
    constructor() {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  P.__closure = { focused };
  P.__workletHash = 12145773243163;
  P.__initData = __initData7;
  const fn3 = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = cleanUp(id[14]);
      obj.runOnJS(callback)(arg0);
    }
  };
  let obj5 = { runOnJS: tmp5(tmp2[14]).runOnJS, handleFocusedParticipantChange: callback };
  fn3.__closure = obj5;
  fn3.__workletHash = 9304160478829;
  fn3.__initData = __initData8;
  const animatedReaction = tmp5Result15.useAnimatedReaction(P, fn3);
  const tmp5Result16 = tmp5(tmp2[14]);
  class I {
    constructor() {
      const obj = { mode: mode.get(), focused: focused.get(), transitionState: sharedValue.get() };
      return obj;
    }
  }
  I.__closure = { mode, focused, sharedTransitionState: sharedValue };
  I.__workletHash = 13570020810295;
  I.__initData = __initData9;
  const fn4 = function w(mode, transitionState) {
    const cheapWorkletShallowEqual = cleanUp(id[44]).cheapWorkletShallowEqual;
    cleanUp(id[44]);
    const tmp4 = transitionState;
    if (!cheapWorkletShallowEqual(mode, tmp4)) {
      ({ focused, transitionState } = mode);
      mode = mode.mode;
      const PIP = contentDimensions.PIP;
      if (focused != null) {
        id = focused.id;
      }
      if (null == transitionState) {
        if (transitionState !== cleanUp(id[45]).TransitionStates.YEETED) {
          const result = sharedVisible.set(1);
        }
      }
      if (transitionState === cleanUp(id[45]).TransitionStates.YEETED) {
        const obj = sharedVisible;
        if (1 === sharedVisible.get()) {
          if (isScrollVisible.get()) {
            const result1 = obj.set(0);
          }
        }
        const tmpResult = cleanUp(id[14]);
        tmpResult.runOnJS(cleanUp)();
      } else {
        let transitionState1;
        if (transitionState != null) {
          transitionState1 = transitionState.transitionState;
        }
        if (transitionState1 === cleanUp(id[45]).TransitionStates.YEETED) {
          const result2 = sharedVisible.set(1);
        } else if (mode !== PIP) {
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
  let obj6 = { cheapWorkletShallowEqual: tmp5(tmp2[44]).cheapWorkletShallowEqual, VoicePanelModes: tmp9, TransitionStates: tmp5(tmp2[45]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: tmp5(tmp2[14]).runOnJS, cleanUp, id };
  fn4.__closure = obj6;
  fn4.__workletHash = 17099686269568;
  fn4.__initData = __initData10;
  const animatedReaction1 = tmp5Result16.useAnimatedReaction(I, fn4);
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = sharedValue.set(transitionState);
  });
  closure_31 = tmp21;
  const tmp5Result17 = tmp5(tmp2[40]);
  token = tmp5Result17.useToken(tmp(tmp2[19]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp5Result18 = tmp5(tmp2[14]);
  class A {
    constructor() {
      let height;
      let height2;
      let id1;
      let items;
      let num;
      let num2;
      let num3;
      let num6;
      let obj14;
      let obj15;
      let obj9;
      let str;
      let sum;
      let tmp35;
      let width;
      let width2;
      let withTiming;
      let x;
      let y;
      let zIndex;
      let value = coords.get();
      ({ zIndex, width, height, x, y } = value);
      let obj = focused;
      const value7 = focused.get();
      id = undefined;
      if (value7 != null) {
        id = value7.id;
      }
      const tmp6 = closure_31;
      if (tmp6) {
        const scale = pIPState.scale;
        const value8 = scale.get();
        const result = pIPState.width * value8;
        height2 = pIPState.height * value8;
        const obj4 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: value8 };
        ({ height: obj3.height, containerHeight: obj3.containerHeight, showSecondaryPIP: obj3.showSecondaryPIP } = pIPState);
        const obj2 = VoicePanelPIPUtils;
        const scaledPIPContainerHeight = obj2.getScaledPIPContainerHeight(obj4);
        size = { pipX: wrapperDimensions.get().pipX, pipY: wrapperDimensions.get().pipY, width: result, height: scaledPIPContainerHeight, windowDimensions: windowDimensions.get(), safeArea: safeArea.get(), bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
        const getClampedPIPPosition = VoicePanelPIPUtils.getClampedPIPPosition;
        VoicePanelPIPUtils;
        const point = getClampedPIPPosition(size);
        num = point.x;
        sum = derivedValue1.get() + point.y;
        width2 = result;
        num2 = zIndex;
      } else if (null != obj.get()) {
        sum = y;
        num = x;
        height2 = height;
        width2 = width;
        num2 = 0;
        if (id === id) {
          width2 = windowDimensions.get().width;
          height2 = windowDimensions.get().height;
          sum = derivedValue1.get();
          num2 = 1;
          num = 0;
        }
      } else {
        const sum1 = x + derivedValue2.get();
        const obj6 = { contentHeight: contentDimensions.get().height, windowHeight: windowDimensions.get().height, safeArea: safeArea.get() };
        const tmp48 = calculateContentCenterOffsetDefault;
        const sum2 = y + tmp48(obj6);
        const value9 = sharedValue.get();
        sum = sum2;
        num = sum1;
        height2 = height;
        width2 = width;
        num2 = zIndex;
        if (value9 === native2.TransitionStates.YEETED) {
          sum = sum2 + height / 4;
          num = sum1;
          height2 = height;
          width2 = width;
          num2 = zIndex;
        }
      }
      const obj5 = derivedValue;
      if (derivedValue.get()) {
        num2 = 9001;
      }
      const obj8 = { id, mode: mode.get(), focused: id1, isSelf, defaultBorderRadius: token };
      const tmp24 = computeCardBorderRadiusDefault;
      const value10 = obj.get();
      id1 = undefined;
      if (value10 != null) {
        id1 = value10.id;
      }
      const tmp24Result = tmp24(obj8);
      if (0 !== sharedVisible.get()) {
        let num5 = 1;
        if (id !== id) {
          num5 = 1;
          if (!isRTCConnected) {
            num5 = c28;
          }
        }
        num3 = num5;
      } else {
        const value11 = obj.get();
        id2 = undefined;
        if (value11 != null) {
          id2 = value11.id;
        }
        num3 = 0;
      }
      const gestureActive = wrapperOffset.get().gestureActive;
      if (1 === sharedVisible.get()) {
        num6 = 1;
      } else {
        const value12 = obj.get();
        let id3;
        if (value12 != null) {
          id3 = value12.id;
        }
        num6 = 0.8;
      }
      const withDelay = ReanimatedRexport2.withDelay;
      let num7 = 100;
      ReanimatedRexport2;
      if (obj5.get()) {
        num7 = 0;
      }
      const size1 = { zIndex: withDelay(num7, obj9.withTiming(num2, closure_27)), opacity: withTiming(num3, tmp35, str, E), width: width2, height: height2, transform: items, borderRadius: obj15.withSpring(tmp24Result, SCALE_PHYSICS) };
      obj9 = timing;
      withTiming = timing.withTiming;
      str = "animate-never";
      timing;
      tmp35 = closure_26;
      if (isScrollVisible.get()) {
        str = "animate-always";
      }
      class E {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_1_6;
            num = 0;
            tmp = 0 === closure_1_6.get();
          }
          if (tmp) {
            tmp3 = closure_1_30;
            tmp5 = cleanUp;
            tmp6 = id;
            value = closure_1_30.get();
            tmp = value === cleanUp(id[45]).TransitionStates.YEETED;
          }
          if (tmp) {
            tmp7 = cleanUp;
            tmp8 = id;
            obj = cleanUp(id[14]);
            tmp9 = closure_1_0;
            tmp10 = obj.runOnJS(closure_1_0)();
          }
          return;
        }
      }
      E.__closure = { sharedVisible, sharedTransitionState: sharedValue, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
      E.__workletHash = 6571273005437;
      E.__initData = __initData;
      ({ sharedVisible, sharedTransitionState: sharedValue, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp });
      let withSpringResult = num;
      if (!gestureActive) {
        const obj11 = spring;
        withSpringResult = obj11.withSpring(num, layoutPhysics, "animate-always");
      }
      items = [{ translateX: withSpringResult }, , ];
      let withSpringResult1 = sum;
      if (!gestureActive) {
        const obj12 = spring;
        withSpringResult1 = obj12.withSpring(sum, layoutPhysics, "animate-always");
      }
      items[1] = { translateY: withSpringResult1 };
      const obj13 = { scale: obj14.withSpring(num6, obj) };
      items[2] = obj13;
      obj14 = spring;
      obj15 = spring;
      return size1;
    }
  }
  let obj7 = { coords, focused, id, isPIP: tmp21, pipState: pIPState, getScaledPIPContainerHeight: tmp5(tmp2[49]).getScaledPIPContainerHeight, getClampedPIPPosition: tmp5(tmp2[49]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: tmp(tmp2[50]), contentDimensions, sharedTransitionState: sharedValue, TransitionStates: tmp5(tmp2[45]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: tmp(tmp2[42]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue1, wrapperOffset, withDelay: tmp5(tmp2[14]).withDelay, withTiming: tmp5(tmp2[36]).withTiming, ZINDEX_TIMING: derivedValue, OPACITY_TIMING: id2, isScrollVisible, runOnJS: tmp5(tmp2[14]).runOnJS, cleanUp, withSpring: tmp5(tmp2[37]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: isSelf, SCALE_PHYSICS };
  A.__closure = obj7;
  A.__workletHash = 17181555398390;
  A.__initData = __initData14;
  const animatedStyle = tmp5Result18.useAnimatedStyle(A);
  let obj8 = {
    gesturesEnabled: first,
    onSingleTap() {
      if (_undefined.get().mode === VoicePanelControlsModes.HIDDEN) {
        _undefined4({ debounce: true });
      } else {
        _undefined2({ debounce: true });
      }
    },
    onDoubleTap: fn5,
    onLongPress: fn6
  };
  let tmpResult = tmp(tmp2[51]);
  const tmp5Result19 = tmp5(tmp2[48]);
  if (tmp5Result19.isStableActivityParticipant(tmp7)) {
    fn5 = () => {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id !== id) {
        _undefined3(tmp3);
      } else {
        _undefined3(null);
      }
    };
  } else if (isSelf) {
    tmp5(tmp2[48]);
  }
  fn6 = undefined;
  if (null != id2) {
    fn6 = () => {
      const obj = { userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      return showUserProfileActionSheetDefault(obj);
    };
  }
  const items1 = [pipHandoff, id, tmp21];
  const tmpResultResult = tmpResult(obj8);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_31);
  }, items1);
  const items2 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items2);
  const tmp5Result21 = tmp5(tmp2[14]);
  sharedValue1 = tmp5Result21.useSharedValue(0);
  const items3 = [pipHandoff, id];
  callback1 = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items3);
  const items4 = [tmp21, layoutPhysics, sharedValue1, callback1];
  const effect1 = obj.useEffect(() => {
    const tmp = closure_31;
    if (tmp) {
      const result = sharedValue1.set(0);
      set = sharedValue1.set;
      const fn = function t(arg0) {
        if (true === arg0) {
          const obj = cleanUp(id[14]);
          obj.runOnJS(callback1)();
        }
      };
      const tmp6 = spring;
      __closure = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival: callback1 };
      const withSpring = tmp6.withSpring;
      fn.__closure = __closure;
      fn.__workletHash = 6072722765065;
      fn.__initData = __initData2;
      const result1 = set(withSpring(1, layoutPhysics, "animate-always", fn));
      return () => {
        const obj = cleanUp(id[14]);
        return obj.cancelAnimation(sharedValue1);
      };
    }
  }, items4);
  let scale = pIPState.scale;
  const tmp5Result22 = tmp5(tmp2[14]);
  sharedValue2 = tmp5Result22.useSharedValue(scale.get());
  class De {
    constructor(currentOriginX) {
      let obj4;
      let obj5;
      let obj6;
      let obj7;
      let size1;
      let scale = pIPState.scale;
      let value = scale.get();
      let result = value / sharedValue2.get();
      size = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth * result, height: currentOriginX.currentHeight * result };
      let obj = {
        animations: size1,
        initialValues: size,
        callback() {
          const value = wrapperOffset.get();
          let gestureActive = value.gestureActive;
          const obj = wrapperOffset;
          if (!gestureActive) {
            gestureActive = 0 === value.y;
          }
          if (!gestureActive) {
            const result = obj.set({ gestureActive: false, x: 0, y: 0 });
          }
          scale = scale.scale;
          const result1 = sharedValue2.set(scale.get());
        }
      };
      size1 = { originX: obj4.withSpring(currentOriginX.targetOriginX, layoutPhysics, "animate-always"), originY: obj5.withSpring(currentOriginX.targetOriginY, layoutPhysics, "animate-always"), width: obj6.withSpring(currentOriginX.targetWidth, layoutPhysics, "animate-always"), height: obj7.withSpring(currentOriginX.targetHeight, layoutPhysics, "animate-always") };
      obj4 = spring;
      obj5 = spring;
      obj6 = spring;
      obj7 = spring;
      return obj;
    }
  }
  let obj9 = { pipState: pIPState, lastPIPScale: sharedValue2, withSpring: tmp5(tmp2[37]).withSpring, layoutPhysics, wrapperOffset };
  De.__closure = obj9;
  De.__workletHash = 956032729711;
  De.__initData = __initData16;
  const items5 = [layoutPhysics, wrapperOffset, sharedValue2, pIPState.scale];
  const callback2 = obj.useCallback(De, items5);
  const obj10 = { gesture: tmpResultResult, children: windowDimensions(tmp(tmp2[38]), obj11) };
  const GestureDetector = tmp5(tmp2[53]).GestureDetector;
  obj11 = { style: items6, layout: callback2, children };
  items6 = [tmp3.positionWrapper, animatedStyle];
  return windowDimensions(GestureDetector, obj10);
}
const StyleSheet = react_native.StyleSheet;
({ VoicePanelCTACard: c9, VoicePanelModes: c10, MODE_CHANGE_PHYSICS: unpackModuleId, SPEAKING_PHYSICS: closure_12, VoicePanelCardItemType: map1 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const ParticipantTypes = CallConstants.ParticipantTypes;
let SCALE_PHYSICS = MorphablePanelConstants.SCALE_PHYSICS;
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_23 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let tmp4 = native.AVATAR_SIZE_MAP[native.AvatarSizes.XXLARGE];
let __closure = { stiffness: 150 };
let merged = Object.assign(SCALE_PHYSICS);
let closure_26 = { duration: 200 };
let closure_27 = { duration: 0 };
let c28 = 0.75;
let createStyles = createStyles_mod;
let obj2 = { positionWrapper: rect, userRoundedCard: rect1, nonUserRoundedCard: size, blackBackground: obj3, selfStreamFocusedSubtitle: { textAlign: "center", marginTop: 4, marginBottom: 40 }, avatarImageMaskStyles: obj4, avatarPlaceholder: size1, image: { maxWidth: 80, maxHeight: 80 }, speakingIndicatorWrapper: obj5, speakingIndicatorUnderlay: obj6, speakingIndicatorBar: obj7 };
rect = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: -4, left: -4, bottom: -4, right: -4, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj3 = { backgroundColor: "black" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
size1 = { width: tmp4, height: tmp4, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj5 = { overflow: "hidden" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { borderColor: nativeDefault.colors.BLACK };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
let closure_29 = createStyles(obj2);
let __initData = { code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}" };
__initData = { code: "function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
__initData = { code: "function VoicePanelCardTsx3(isFocused,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused!==lastIsFocused){runOnJS(setIsFocused)(isFocused);}}" };
let closure_34 = react.memo((id) => {
  let intl;
  let intl2;
  let intl3;
  let isScrollVisible;
  let isSelf;
  let items3;
  let layout;
  let obj9;
  let sharedCoords;
  let streamGuildId;
  let streamId;
  let tmp4Result;
  let tmp8;
  let tmp9;
  let userNick;
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ sharedCoords, layout } = id);
  let setFocused;
  let c6;
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[25]));
  const focused = context.focused;
  setFocused = context.setFocused;
  const mode = context.mode;
  let obj = id(streamGuildId[26]);
  const items = [c6];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId), activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId) };
    return obj;
  }, items1);
  const stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = setFocused.useCallback(() => {
    if (null != stream) {
      const obj = StreamActionCreators;
      obj.watchStream(stream, { forceMultiple: true });
      const obj2 = StreamKeyUtils;
      setFocused(obj2.encodeStreamKey(stream));
    }
  }, items2);
  [tmp8, tmp9] = focused(setFocused.useState(false), 2);
  c6 = tmp9;
  focused(setFocused.useState(false), 2);
  let obj2 = id(streamGuildId[14]);
  class I {
    constructor() {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  I.__closure = { focused, id };
  I.__workletHash = 13061544667904;
  I.__initData = __initData;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(c6)(arg0);
    }
  };
  fn.__closure = { runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 };
  fn.__workletHash = 8824446489251;
  fn.__initData = __initData;
  ({ runOnJS: id(streamGuildId[14]).runOnJS, setIsFocused: tmp9 });
  const animatedReaction = obj2.useAnimatedReaction(I, fn);
  const tmp11 = userId(streamGuildId[27]);
  const tmp11Result = tmp11(id(streamGuildId[28]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj4 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_20(SelfStreamCard, obj4);
  } else if (null == activeStream) {
    const obj5 = { mode, stream, onPress: callback, disabled: false, layout };
    return closure_20(id(streamGuildId[29]).VoicePanelStreamPreview, obj5);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj6 = { stream: activeStream, removeSplashImage: !tmp8, type: id(streamGuildId[30]).VideoEmptyTypes.STREAM_ENDED, style: stream.absoluteFill };
          const tmpResult = userId(streamGuildId[30]);
          return closure_20(tmpResult, obj6);
        } else {
          let tmp15;
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj7 = { title: intl.string(id(streamGuildId[23]).t["pdFFK+"]) };
            const StreamTextOverlay = tmp4(tmp2[31]).StreamTextOverlay;
            intl = tmp4(tmp2[23]).intl;
            tmp15 = closure_20(StreamTextOverlay, obj7);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj8 = { title: intl2.string(id(streamGuildId[23]).t["5q17w5"]), subtext: intl3.formatToPlainString(id(streamGuildId[23]).t.meVVlb, obj9) };
              const StreamTextOverlay2 = tmp4(tmp2[31]).StreamTextOverlay;
              intl2 = tmp4(tmp2[23]).intl;
              intl3 = tmp4(tmp2[23]).intl;
              obj9 = { username: userNick };
              tmp15 = closure_20(StreamTextOverlay2, obj8);
            }
          }
          const obj10 = { layout, id, streamId, userId, streamKey: tmp4Result.encodeStreamKey(activeStream), isScrollVisible, videoSpinnerContext: id(streamGuildId[33]).VideoSpinnerContext.REMOTE_STREAM, sharedCoords, isCamera: false, paused: activeStream.state === ApplicationStreamStates.PAUSED };
          const tmp16 = closure_22;
          const tmp17 = closure_21;
          const tmp18 = closure_20;
          const tmpResult3 = userId(streamGuildId[32]);
          if (streamId == null) {
            streamId = null;
          }
          const obj11 = { children: items3 };
          tmp4Result = id(streamGuildId[21]);
          items3 = [tmp18(tmpResult3, obj10), tmp15];
          return tmp16(tmp17, obj11);
        }
      }
    }
    const obj12 = { avError: tmp11Result, stream: activeStream, removeSplashImage: !tmp8, type: id(streamGuildId[30]).VideoEmptyTypes.STREAM_FAILED, style: stream.absoluteFill };
    const tmpResult4 = userId(streamGuildId[30]);
    return closure_20(tmpResult4, obj12);
  }
});
const __initData2 = { code: "function VoicePanelCardTsx4(){const{withTiming,isRinging,CONNECTING_OPACITY,solidBackgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:solidBackgroundColor};}" };
const __initData3 = { code: "function VoicePanelCardTsx5(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}" };
let closure_37 = react.memo(function AnimatedUserCardInner(isRinging) {
  let avatarDecoration;
  let avatarURI;
  let guildId;
  let items;
  let items1;
  let items2;
  let layout;
  let layoutPhysics;
  let tmp21Result;
  let tmp21Result2;
  let userId;
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  let mode;
  ({ userId, guildId } = isRinging);
  const tmp = closure_29();
  mode = react.useContext(layoutPhysics(mode[25])).mode;
  let obj = isRinging(mode[34]);
  const dominantColorFromImage = obj.useDominantColorFromImage(avatarURI);
  const tmp6 = layoutPhysics(mode[35])({ userId, guildId, location: "VoicePanelCard-native" });
  let str = "transparent";
  if (null == tmp6) {
    str = dominantColorFromImage;
  }
  const fn = function f() {
    let num = 1;
    const withTiming = timing.withTiming;
    timing;
    if (isRinging) {
      num = c28;
    }
    const obj = { opacity: withTiming(num, { duration: 100 }, "animate-always"), backgroundColor: str };
    return obj;
  };
  const tmp4Result = isRinging(mode[14]);
  const obj2 = { withTiming: tmp4(tmp3[36]).withTiming, isRinging, CONNECTING_OPACITY, solidBackgroundColor: str };
  fn.__closure = obj2;
  fn.__workletHash = 15279139669693;
  fn.__initData = __initData2;
  const animatedStyle = tmp4Result.useAnimatedStyle(fn);
  const fn2 = function _() {
    let items;
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (mode.get() === constants.PIP) {
      num = 0.8;
    }
    const obj = { transform: items };
    items = [{ scale: withSpring(num, layoutPhysics) }];
    ({ scale: withSpring(num, layoutPhysics) });
    return obj;
  };
  const tmp4Result3 = isRinging(mode[14]);
  fn2.__closure = { withSpring: isRinging(mode[37]).withSpring, mode, VoicePanelModes, layoutPhysics };
  fn2.__workletHash = 5040632730576;
  fn2.__initData = __initData3;
  let cachedSourceFromURI;
  ({ withSpring: isRinging(mode[37]).withSpring, mode, VoicePanelModes, layoutPhysics });
  const animatedStyle1 = tmp4Result3.useAnimatedStyle(fn2);
  if (null != avatarURI) {
    const tmp4Result4 = isRinging(mode[34]);
    cachedSourceFromURI = tmp4Result4.getCachedSourceFromURI(avatarURI);
  }
  const obj4 = { style: items, layout, children: items1 };
  items = [tmp.userRoundedCard, animatedStyle];
  let tmp12 = null;
  const tmp10 = closure_22;
  const tmp2Result = layoutPhysics(mode[38]);
  if (null != tmp6) {
    const obj5 = { colors: tmp6, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
    tmp12 = closure_20(LinearGradient, obj5);
  }
  items1 = [tmp12, ];
  if (null == cachedSourceFromURI) {
    const obj6 = { style: tmp.avatarPlaceholder };
    tmp21Result2 = closure_20(tmp2(tmp3[22]), obj6);
  } else {
    let prop;
    const tmp2Result2 = layoutPhysics(mode[38]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    const obj7 = { style: items2, layout, children: tmp21Result };
    items2 = [prop, animatedStyle1];
    if (null != avatarDecoration) {
      const obj8 = { source: cachedSourceFromURI, size: isRinging(mode[17]).AvatarSizes.XXLARGE, avatarDecoration };
      const Avatar = tmp4(tmp3[17]).Avatar;
      tmp21Result = tmp21(Avatar, obj8);
    } else {
      size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
      tmp21Result = tmp21(tmp2(tmp3[39]), size);
    }
    tmp21Result2 = tmp21(tmp2Result2, obj7);
  }
  items1[1] = tmp21Result2;
  return tmp10(tmp2Result, obj4);
});
const __initData4 = { code: "function VoicePanelCardTsx6(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
const __initData5 = { code: "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
const __initData6 = { code: "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
let closure_42 = react.memo((id) => {
  let speaking;
  let tmp = id(react.useState(() => SpeakingStore.isSpeaking(id.id)), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  id = id.id;
  const items = [first, id];
  const effect = react.useEffect(() => {
    const tmp = first;
    if (!tmp) {
      let flag = false;
      const result = SpeakingStore.addConditionalChangeListener(() => {
        const isSpeakingResult = speaking.isSpeaking(id);
        let flag = !isSpeakingResult;
        if (isSpeakingResult) {
          closure_1_2(true);
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
    tmp4 = closure_20(SpeakingIndicator, obj);
  }
  return tmp4;
});
const __initData7 = { code: "function VoicePanelCardTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData8 = { code: "function VoicePanelCardTsx10(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}" };
const __initData9 = { code: "function VoicePanelCardTsx11(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}" };
const __initData10 = { code: "function VoicePanelCardTsx12(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}" };
let closure_47 = { isSelf: false, hasVideo: false, user: { id: "Path" } };
function layoutTransitionFunction(originX, SUBTLE_SPRING, scale, sharedValue1, flag) {
  let str3;
  let str4;
  let targetHeight;
  let targetOriginY;
  let targetWidth;
  let withSpring2;
  let withSpring3;
  let withSpring4;
  let closure_0 = scale;
  let closure_1 = sharedValue1;
  if (flag === undefined) {
    flag = false;
  }
  const value = scale.get();
  let result = value / sharedValue1.get();
  let str = "animate-always";
  let str2 = "animate-always";
  const withSpring = spring.withSpring;
  const targetOriginX = originX.targetOriginX;
  spring;
  if (flag) {
    str2 = "animate-never";
  }
  size = { originX: withSpring(targetOriginX, SUBTLE_SPRING, str2), originY: withSpring2(targetOriginY, SUBTLE_SPRING, str3), width: withSpring3(targetWidth, SUBTLE_SPRING, str4), height: withSpring4(targetHeight, SUBTLE_SPRING, str) };
  str3 = str;
  withSpring2 = spring.withSpring;
  targetOriginY = originX.targetOriginY;
  spring;
  if (flag) {
    str3 = "animate-never";
  }
  str4 = str;
  withSpring3 = spring.withSpring;
  targetWidth = originX.targetWidth;
  spring;
  if (flag) {
    str4 = "animate-never";
  }
  withSpring4 = spring.withSpring;
  targetHeight = originX.targetHeight;
  spring;
  if (flag) {
    str = "animate-never";
  }
  return {
    animations: size,
    initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth * result, height: originX.currentHeight * result },
    callback() {
      const result = closure_1.set(closure_0.get());
    }
  };
}
let obj8 = { withSpring: spring.withSpring };
layoutTransitionFunction.__closure = obj8;
layoutTransitionFunction.__workletHash = 7623737347361;
layoutTransitionFunction.__initData = { code: "function layoutTransitionFunction_VoicePanelCardTsx13(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();return{animations:{originX:withSpring(values.targetOriginX,physics,!disableAnimation?'animate-always':'animate-never'),originY:withSpring(values.targetOriginY,physics,!disableAnimation?'animate-always':'animate-never'),width:withSpring(values.targetWidth,physics,!disableAnimation?'animate-always':'animate-never'),height:withSpring(values.targetHeight,physics,!disableAnimation?'animate-always':'animate-never')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}" };
const __initData11 = { code: "function VoicePanelCardTsx14(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData12 = { code: "function VoicePanelCardTsx15(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData13 = { code: "function VoicePanelCardTsx16(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData14 = { code: "function VoicePanelCardTsx17(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'animate-always')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'animate-always')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
const __initData15 = { code: "function VoicePanelCardTsx18(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_54 = { code: "function VoicePanelCardTsx19(finished){const{runOnJS,reportPIPArrival}=this.__closure;if(finished===true){runOnJS(reportPIPArrival)();}}" };
const __initData16 = { code: "function VoicePanelCardTsx20(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'animate-always'),originY:withSpring(values.targetOriginY,layoutPhysics,'animate-always'),width:withSpring(values.targetWidth,layoutPhysics,'animate-always'),height:withSpring(values.targetHeight,layoutPhysics,'animate-always')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
const __initData17 = { code: "function VoicePanelCardTsx21(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
let closure_58 = { code: "function layoutTransition_VoicePanelCardTsx22(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
const memoResult = react.memo(function VoicePanelCard(cleanUp) {
  let DEFAULT;
  let VideoSpinnerContext;
  let channelId;
  let connected;
  let guildId;
  let isCall;
  let item;
  let items3;
  let layoutManager;
  let layoutTransition;
  let mountedCards;
  let num;
  let physics;
  let scrollPosition;
  let streamId;
  let tmp28;
  let tmp29;
  let transitionState;
  let user;
  let userAvatarDecoration;
  let userNick;
  ({ item, transitionState } = cleanUp);
  scrollPosition = undefined;
  let windowDimensions;
  let id2;
  let sharedValue2;
  let cardLayoutCoordsSubscription;
  let pIPState;
  let sharedValue1;
  const id = item.id;
  let obj = cardLayoutCoordsSubscription;
  const tmp = windowDimensions;
  const tmp2 = id2;
  cleanUp = cleanUp.cleanUp;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[25]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp4 = windowDimensions(id2[48])(id, channelId, guildId);
  let obj2 = scrollPosition(id2[48]);
  let tmp6 = tmp4;
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_47;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  const items = [RTCConnectionStore];
  const tmp5Result = scrollPosition(tmp2[26]);
  const stateFromStores = tmp5Result.useStateFromStores(items, () => connected.isConnected());
  const tmp5Result10 = scrollPosition(tmp2[48]);
  const tmp8 = tmp5Result10.isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type1;
  const tmpResult = tmp(tmp2[27]);
  if (tmp4 != null) {
    type1 = tmp4.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    DEFAULT = tmp5(tmp2[28]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[28]).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = tmpResult(DEFAULT, str);
  const tmp13 = tmp(tmp2[54])(str);
  const useSharedValue = tmp5(tmp2[14]).useSharedValue;
  scrollPosition(tmp2[14]);
  if (transitionState === scrollPosition(tmp2[45]).TransitionStates.MOUNTED) {
    num = 1;
  } else {
    num = 0;
  }
  const sharedValue = useSharedValue(num);
  let isSpeakingResult = null != id2;
  const useSharedValue2 = tmp5(tmp2[14]).useSharedValue;
  scrollPosition(tmp2[14]);
  if (isSpeakingResult) {
    isSpeakingResult = SpeakingStore.isSpeaking(id2);
  }
  sharedValue2 = useSharedValue2(isSpeakingResult);
  const items1 = [id2, sharedValue2];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      const isSpeakingResult = null != id2 && SpeakingStore.isSpeaking(tmp2);
      const result = set(isSpeakingResult);
    }
    let isSpeakingResult = null != id2;
    set = sharedValue2.set;
    if (isSpeakingResult) {
      isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
    }
    let result = set(isSpeakingResult);
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result13 = scrollPosition(tmp2[55]);
  cardLayoutCoordsSubscription = tmp5Result13.useCardLayoutCoordsSubscription(id, layoutManager);
  const fn = function $() {
    const sum = EDGE_GUTTER + cardLayoutCoordsSubscription.get().y;
    const value = scrollPosition.get();
    let tmp3 = sum > value - cardLayoutCoordsSubscription.get().height;
    const obj = scrollPosition;
    if (tmp3) {
      const value2 = obj.get();
      tmp3 = sum < value2 + windowDimensions.get().height;
    }
    return tmp3;
  };
  let obj3 = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  fn.__closure = obj3;
  fn.__workletHash = 11720551113486;
  fn.__initData = __initData17;
  const tmp5Result14 = scrollPosition(tmp2[14]);
  const derivedValue = tmp5Result14.useDerivedValue(fn);
  const tmp5Result15 = scrollPosition(tmp2[47]);
  pIPState = tmp5Result15.usePIPState();
  const scale = pIPState.scale;
  const tmp5Result16 = scrollPosition(tmp2[14]);
  sharedValue1 = tmp5Result16.useSharedValue(scale.get());
  const items2 = [pIPState.scale, sharedValue1];
  const memo = obj.useMemo(() => {
    let layoutTransition;
    const physics = { mass: closure_1_11.mass, damping: windowDimensions(id2[56])(closure_1_11.damping - 2, closure_1_11.damping + 2), stiffness: windowDimensions(id2[56])(closure_1_11.stiffness - 20, closure_1_11.stiffness + 20) };
    const obj2 = { physics, layoutTransition };
    layoutTransition = function layoutTransition(originX, flag) {
      if (flag === undefined) {
        flag = false;
      }
      return layoutTransitionFunction(originX, obj, pIPState.scale, sharedValue1, flag);
    };
    const obj3 = { layoutTransitionFunction, physics, pipState: pIPState, lastPipScale: sharedValue1 };
    layoutTransition.__closure = obj3;
    layoutTransition.__workletHash = 5837282634041;
    layoutTransition.__initData = __initData;
    return obj2;
  }, items2);
  ({ physics, layoutTransition } = memo);
  if (item.type === constants2.CTA) {
    const id3 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id3) {
      tmp28 = closure_20(tmp(tmp2[57]), {});
      tmp29 = closure_20;
    } else if (tmp39.CALLER_DISCONNECTED === id3) {
      tmp28 = closure_20(tmp(tmp2[58]), {});
      tmp29 = closure_20;
    }
    const obj4 = { cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: items3 };
    items3 = [tmp28, , ];
    let tmp29Result = null != tmp4;
    const tmp42 = closure_22;
    const tmp43 = AnimatedWrapper;
    if (tmp29Result) {
      const obj5 = { isRinging: tmp8, participant: tmp4, label: userNick, layout: layoutTransition, speaking: sharedValue2 };
      userNick = undefined;
      const tmpResult3 = tmp(tmp2[61]);
      const tmp5Result17 = scrollPosition(tmp2[48]);
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      tmp29Result = tmp29(tmpResult3, obj5);
    }
    items3[1] = tmp29Result;
    const tmp5Result18 = scrollPosition(tmp2[48]);
    let result = tmp5Result18.isStableParticipantWithUser(tmp4);
    if (result) {
      const obj6 = { speaking: sharedValue2, id, userId: tmp4.user.id, isSelf, layout: layoutTransition };
      result = tmp29(closure_42, obj6);
    }
    items3[2] = result;
    return tmp42(tmp43, obj4);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      let tmp31;
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          let tmp31Result;
          if (tmp4.canRenderVideo) {
            let tmp34;
            if (null != tmpResultResult) {
              let tmp34Result;
              if (null == tmp13) {
                const obj7 = { avError: tmpResultResult, userId: user.id, style: pIPState.absoluteFill };
                tmp34Result = closure_20(tmp(tmp2[59]), obj7);
                tmp34 = closure_20;
              }
              tmp31 = tmp34;
              tmp31Result = tmp34Result;
            }
            tmp34 = closure_20;
            const obj8 = { id: tmp30, userId: user.id, streamId, isScrollVisible: derivedValue, videoSpinnerContext: isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, sharedCoords: cardLayoutCoordsSubscription, isCamera: true, focusOnReady: isCall, layout: layoutTransition };
            const tmpResult4 = tmp(tmp2[32]);
            if (streamId == null) {
              streamId = null;
            }
            VideoSpinnerContext = tmp5(tmp2[33]).VideoSpinnerContext;
            if (isCall) {
              isCall = !isSelf;
            }
            tmp34Result = tmp34(tmpResult4, obj8);
          }
          tmp29 = tmp31;
          tmp28 = tmp31Result;
        }
      }
      tmp31 = closure_20;
      let flag = false;
      const obj9 = { isRinging: tmp8, avatarURI: user.getAvatarURL(guildId, 80, false), avatarDecoration: userAvatarDecoration, layout: layoutTransition, layoutPhysics: physics, userId: user.id, guildId };
      userAvatarDecoration = tmp4.userAvatarDecoration;
      tmp31Result = tmp31(closure_37, obj9);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj11 = { userId: tmp4.user.id, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf, sharedCoords: cardLayoutCoordsSubscription, isScrollVisible: derivedValue, layout: layoutTransition };
      ({ id: obj10.id, streamGuildId: obj10.streamGuildId, streamId: obj10.streamId, userNick: obj10.userNick } = tmp4);
      tmp28 = closure_20(closure_34, obj11);
      tmp29 = closure_20;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj12 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: layoutTransition };
      tmp28 = closure_20(tmp(tmp2[60]), obj12, tmp4.id);
      tmp29 = closure_20;
    }
  }
  const obj13 = { isRinging: tmp8, avatarURI: "r", avatarDecoration: "paddingHorizontal", layout: layoutTransition, layoutPhysics: physics };
  tmp28 = closure_20(closure_37, obj13);
  tmp29 = closure_20;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default memoResult;
