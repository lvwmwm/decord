// Module ID: 19240
// Function ID: 19241
// Name: VoicePanelCard
// Dependencies: [32, 19, 17, 6058, 6714, 5764, 6756, 11223, 11221, 19108, 11226, 1072, 5681, 11224, 21, 5095, 5624, 5587, 1187, 5014, 575, 504, 7901, 6717, 6960, 1113, 5634, 11222, 11757, 5789, 14890, 11759, 11756, 19241, 11766, 19104, 14868, 5254, 5637, 9522, 19242, 5717, 7241, 5596, 19244, 12271, 10089, 5080, 7326, 19197, 19211, 19107, 19245, 19246, 8750, 5303, 5876, 19247, 11225, 19248, 19249, 19250, 19251, 19252, 19262, 2]

// Module 19240 (VoicePanelCard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import native2 from "native" /* 5080 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import Text_Text from "Text/Text" /* 5624 */;
import spring from "spring" /* 5637 */;
import CallConstants from "CallConstants" /* 5681 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6717 */;
import StreamActionCreators from "StreamActionCreators" /* 7901 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11224 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11226 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12271 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19107 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19108 */;
import VoicePanelUserActionCreators from "VoicePanelUserActionCreators" /* 19242 */;
import computeCardBorderRadiusDefault from "computeCardBorderRadius" /* 19244 */;
import calculateContentCenterOffsetDefault from "calculateContentCenterOffset" /* 19245 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardStore from "SoundboardStore" /* 6058 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import SpeakingStore from "SpeakingStore" /* 6756 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport_mod = ReanimatedRexport2;
let currentUserActiveStream, importDefault, set;

let closure_12;
let closure_14;
let closure_15;
let closure_22;
let closure_23;
let closure_24;
let map1;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
let unpackModuleId;
function SelfStreamCard(sharedCoords) {
  let intl3;
  let items2;
  let items3;
  let str;
  let string2Result;
  let stringResult;
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = sharedTransitionState();
  let obj = sharedCoords(isFocused[21]);
  const items = [ApplicationStreamingStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let state;
    if (currentUserActiveStream != null) {
      state = currentUserActiveStream.state;
    }
    return state === constants.PAUSED;
  });
  const items1 = [stream];
  const callback = react.useCallback(() => {
    if (null != stream) {
      const stopStream = StreamActionCreators.stopStream;
      StreamActionCreators;
      const obj = StreamKeyUtils;
      stopStream(obj.encodeStreamKey(tmp));
    }
  }, items1);
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
  const obj2 = sharedCoords(isFocused[15]);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let tmp10 = isFocused;
  const obj3 = { style: tmp.nonUserRoundedCard, children: items2 };
  const tmp8 = stream;
  const tmp9 = stream(isFocused[24]);
  if (isFocused) {
    const obj4 = { style: tmp.blackBackground };
    tmp10 = closure_22(tmp8(tmp3[24]), obj4);
  }
  items2 = [tmp10, , ];
  const obj5 = { style: animatedStyle, variant: str, color: "text-overlay-light", children: stringResult };
  str = "text-sm/semibold";
  const tmp13 = closure_25;
  if (isFocused) {
    str = "text-lg/semibold";
  }
  const intl = tmp2(tmp3[25]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[25]).t;
  if (stateFromStores) {
    stringResult = string(t["5q17w5"]);
  } else {
    stringResult = string(t.gMOwov);
  }
  items2[1] = closure_22(tmp13, obj5);
  let tmp7Result = null;
  if (isFocused) {
    const obj6 = { style: tmp.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: string2Result };
    const Text = tmp2(tmp3[16]).Text;
    const intl2 = tmp2(tmp3[25]).intl;
    const string2 = intl2.string;
    const t2 = tmp2(tmp3[25]).t;
    const tmp16 = closure_23;
    if (stateFromStores) {
      string2Result = string2(t2.LV1NSN);
    } else {
      string2Result = string2(t2.dKeLGt);
    }
    const obj7 = { children: items3 };
    items3 = [closure_22(Text, obj6), ];
    const obj8 = { size: "lg", variant: "primary-overlay", onPress: callback, text: intl3.string(sharedCoords(isFocused[25]).t.CpkXwZ) };
    const Button = tmp2(tmp3[26]).Button;
    intl3 = tmp2(tmp3[25]).intl;
    items3[1] = closure_22(Button, obj8);
    tmp7Result = tmp7(tmp16, obj7);
  }
  items2[2] = tmp7Result;
  return styles(tmp9, obj3);
}
function SpeakingIndicator(id) {
  let isSelf;
  let items1;
  let items2;
  let items3;
  let obj13;
  let tmp12;
  let tmp13;
  id = id.id;
  ({ userId: importDefault, isSelf } = id);
  const speakingOrPlayingSoundboard = id.speakingOrPlayingSoundboard;
  const layout = id.layout;
  let focused;
  focused = focused.useContext(require("VoicePanelStateContext")).focused;
  const context = focused.useContext(require("VoicePanelStateContext"));
  const mode = context.mode;
  const isDockEnabled = context.isDockEnabled;
  let obj = id(isSelf[15]);
  const fn = function t() {
    const tmp = isDockEnabled;
    if (tmp) {
      let PANEL;
      if (mode.get() === constants.PIP) {
        PANEL = constants.PANEL;
      }
      return PANEL;
    }
    PANEL = mode.get();
  };
  let obj2 = { isDockEnabled, mode, VoicePanelModes };
  fn.__closure = obj2;
  fn.__workletHash = 7246583843780;
  fn.__initData = __initData4;
  const derivedValue = obj.useDerivedValue(fn);
  const tmp3 = sharedTransitionState();
  let obj3 = id(isSelf[43]);
  const token = obj3.useToken(require("native").modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const obj4 = id(isSelf[43]);
  const token1 = obj4.useToken(require("native").colors.REDESIGN_INPUT_CONTROL_SELECTED);
  const items = [SoundboardStore];
  const obj5 = id(isSelf[21]);
  const stateFromStores = obj5.useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(importDefault));
  const fn2 = function h() {
    let id1;
    let num2;
    let str;
    let tmp18;
    let withSpring;
    let tmp = derivedValue.get() !== constants.PIP;
    const obj = derivedValue;
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
    tmp18 = closure_14;
    if (tmp) {
      str = "animate-never";
    }
    return obj2;
  };
  const obj6 = id(isSelf[15]);
  fn2.__closure = { mode: derivedValue, VoicePanelModes, focused, id, withSpring: id(isSelf[38]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  fn2.__workletHash = 9045688677044;
  fn2.__initData = __initData7;
  ({ mode: derivedValue, VoicePanelModes, focused, id, withSpring: id(isSelf[38]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS });
  const animatedStyle = obj6.useAnimatedStyle(fn2);
  const obj8 = id(isSelf[15]);
  class S {
    constructor() {
      let id1;
      let num2;
      let withSpring2;
      let tmp = derivedValue.get() === constants.PIP;
      const obj = derivedValue;
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
      const obj3 = { borderRadius: withSpring(num, closure_14, str2), borderWidth: withSpring2(num2, closure_14, str) };
      num2 = 0;
      withSpring2 = tmp7(5637).withSpring;
      spring;
      if (!tmp) {
        num2 = 0;
        if (speakingOrPlayingSoundboard.get()) {
          num2 = roundToNearestPixelDefault(5);
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      return obj3;
    }
  }
  S.__closure = { mode: derivedValue, VoicePanelModes, focused, id, withSpring: id(isSelf[38]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: require("roundToNearestPixel"), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  S.__workletHash = 3931881669175;
  S.__initData = __initData8;
  ({ mode: derivedValue, VoicePanelModes, focused, id, withSpring: id(isSelf[38]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: require("roundToNearestPixel"), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 });
  const animatedStyle1 = obj8.useAnimatedStyle(S);
  const fn3 = function p() {
    let id1;
    let num2;
    let withSpring2;
    let tmp = derivedValue.get() === constants.PIP;
    const obj = derivedValue;
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
    const obj3 = { borderRadius: withSpring(num, closure_14, str2), borderWidth: withSpring2(num2, closure_14, str) };
    num2 = 0;
    withSpring2 = tmp7(5637).withSpring;
    spring;
    if (!tmp) {
      num2 = 0;
      if (speakingOrPlayingSoundboard.get()) {
        num2 = 3;
      }
    }
    if (tmp) {
      str = "animate-never";
    }
    return obj3;
  };
  const obj10 = id(isSelf[15]);
  fn3.__closure = { mode: derivedValue, VoicePanelModes, focused, id, withSpring: id(isSelf[38]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 };
  fn3.__workletHash = 3815529402364;
  fn3.__initData = __initData9;
  let tmp10 = closure_22;
  ({ mode: derivedValue, VoicePanelModes, focused, id, withSpring: id(isSelf[38]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 });
  const animatedStyle2 = obj10.useAnimatedStyle(fn3);
  const obj12 = { style: tmp3.speakingIndicatorWrapper, layout, pointerEvents: "none", children: tmp12(tmp13, obj13) };
  let tmp11 = require("ReanimatedNativeView");
  obj13 = { style: items1, children: items3 };
  items1 = [tmp3.speakingIndicatorClip, animatedStyle];
  const obj14 = { style: items2, layout };
  items2 = [tmp3.speakingIndicatorUnderlay, animatedStyle1];
  tmp13 = require("ReanimatedNativeView");
  items3 = [closure_22(require("ReanimatedNativeView"), obj14), ];
  const items4 = [tmp3.speakingIndicatorBar, , ];
  let tmp15 = null;
  tmp12 = closure_24;
  const tmp14 = require("ReanimatedNativeView");
  if (stateFromStores) {
    tmp15 = { borderColor: token1 };
    const obj15 = { borderColor: token1 };
  }
  items4[1] = tmp15;
  items4[2] = animatedStyle2;
  items3[1] = tmp10(tmp14, { style: items4, layout });
  return tmp10(tmp11, obj12);
}
function AnimatedWrapper(cleanUp) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c11;
  let c13;
  let c17;
  let c18;
  let closure_27;
  let fn3;
  let fn4;
  let focused;
  let isDockEnabled;
  let items6;
  let mountedCards;
  let obj13;
  let pipAvoidanceSpecs;
  let sharedVisible;
  let tmp24;
  let tmp6Result24;
  let tmpResult2;
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
  pipAvoidanceSpecs = undefined;
  VoicePanelPIPModes = undefined;
  EDGE_GUTTER = undefined;
  windowDimensions = undefined;
  let isSelf;
  let id2;
  CARD_SCALE_PHYSICS = undefined;
  let derivedValue1;
  let derivedValue2;
  let derivedValue3;
  let sharedValue;
  let closure_32;
  let token;
  let sharedValue1;
  let callback1;
  let sharedValue2;
  let tmp = coords;
  const tmp2 = id;
  const children = cleanUp.children;
  const analyticsLocations = coords(id[48])().analyticsLocations;
  let obj = isScrollVisible;
  const tmp3 = sharedValue();
  const context = isScrollVisible.useContext(coords(id[27]));
  const channelId = context.channelId;
  const connected = context.connected;
  const contentDimensions = context.contentDimensions;
  ({ controlsSpecs: c11, focused } = context);
  ({ hideControls: c13, isDockEnabled, mountedCards, pipAvoidanceSpecs } = context);
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  ({ setFocused: c17, showControls: c18, windowDimensions } = context);
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const pipHandoff = context.pipHandoff;
  const guildId = context.guildId;
  const context1 = isScrollVisible.useContext(coords(id[27]));
  const mode = context1.mode;
  const isDockEnabled2 = context1.isDockEnabled;
  let tmp6 = cleanUp;
  let obj2 = cleanUp(id[15]);
  let fn = function t() {
    const tmp = isDockEnabled;
    if (tmp) {
      let PANEL;
      if (mode.get() === constants.PIP) {
        PANEL = constants.PANEL;
      }
      return PANEL;
    }
    PANEL = mode.get();
  };
  const obj3 = { isDockEnabled: isDockEnabled2, mode, VoicePanelModes: focused };
  fn.__closure = obj3;
  fn.__workletHash = 7246583843780;
  fn.__initData = __initData4;
  const derivedValue = obj2.useDerivedValue(fn);
  let obj4 = cleanUp(id[49]);
  const pIPState = obj4.usePIPState();
  const tmp10 = coords(id[50])(id, channelId, guildId);
  let obj5 = cleanUp(id[50]);
  let tmp11 = tmp10;
  if (!obj5.isStableParticipantWithUser(tmp10)) {
    tmp11 = closure_50;
  }
  isSelf = tmp11.isSelf;
  id2 = tmp11.user.id;
  CARD_SCALE_PHYSICS = tmp12;
  const tmp6Result = tmp6(tmp2[15]);
  class P {
    constructor() {
      const tmp = id === pIPState.id && derivedValue.get() === focused.PIP;
      return tmp;
    }
  }
  P.__closure = { id, pipState: pIPState, mode: derivedValue, VoicePanelModes: focused };
  P.__workletHash = 11414437284931;
  P.__initData = __initData14;
  derivedValue1 = tmp6Result.useDerivedValue(P);
  const tmp6Result13 = tmp6(tmp2[15]);
  class I {
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
  I.__closure = { focused, id, mode: derivedValue, VoicePanelModes: focused, scrollPosition };
  I.__workletHash = 14557336011446;
  I.__initData = __initData15;
  derivedValue2 = tmp6Result13.useDerivedValue(I);
  const tmp6Result14 = tmp6(tmp2[15]);
  class C {
    constructor() {
      let maxResult;
      if (connected.get()) {
        const _Math = Math;
        const left = safeArea.get().left;
        maxResult = max(EDGE_GUTTER, left, (windowDimensions.get().width - contentDimensions.get().width) / 2);
      } else {
        maxResult = wrapperDimensions.get().drawerWidth / 2;
      }
      return maxResult;
    }
  }
  let obj6 = { connected, EDGE_GUTTER, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  C.__closure = obj6;
  C.__workletHash = 3478345331807;
  C.__initData = __initData16;
  derivedValue3 = tmp6Result14.useDerivedValue(C);
  importDefault = tmp10;
  let callback;
  const tmp6Result15 = tmp6(tmp2[15]);
  sharedValue = tmp6Result15.useSharedValue(transitionState);
  const tmp17 = isRTCConnected(obj.useState(true), 2);
  let closure_9 = tmp17[1];
  let type;
  const first = tmp17[0];
  const useCallback = obj.useCallback;
  if (tmp10 != null) {
    type = tmp10.type;
  }
  let items = [type, id];
  callback = useCallback((arg0) => {
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    if (type === wrapperDimensions.ACTIVITY) {
      closure_9(arg0 !== id);
    }
  }, items);
  tmp21.__closure = { focused };
  tmp21.__workletHash = 8287576325827;
  tmp21.__initData = __initData10;
  const fn2 = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = cleanUp(id[15]);
      obj.runOnJS(callback)(arg0);
    }
  };
  const tmp6Result16 = tmp6(tmp2[15]);
  let obj7 = { runOnJS: tmp6(tmp2[15]).runOnJS, handleFocusedParticipantChange: callback };
  fn2.__closure = obj7;
  fn2.__workletHash = 8776674066892;
  fn2.__initData = __initData11;
  const animatedReaction = tmp6Result16.useAnimatedReaction(tmp21, fn2);
  tmp23.__closure = { mode: derivedValue, focused, sharedTransitionState: sharedValue };
  tmp23.__workletHash = 14556077326932;
  tmp23.__initData = __initData12;
  const tmp6Result17 = tmp6(tmp2[15]);
  let obj8 = { cheapWorkletShallowEqual: tmp6(tmp2[46]).cheapWorkletShallowEqual, VoicePanelModes: tmp7, TransitionStates: tmp6(tmp2[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: tmp6(tmp2[15]).runOnJS, cleanUp, id };
  tmp24.__closure = obj8;
  tmp24.__workletHash = 35144955681;
  tmp24.__initData = __initData13;
  const animatedReaction1 = tmp6Result17.useAnimatedReaction(tmp23, tmp24);
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = sharedValue.set(transitionState);
  });
  closure_32 = tmp27;
  const tmp6Result18 = tmp6(tmp2[43]);
  token = tmp6Result18.useToken(tmp(tmp2[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const tmp6Result19 = tmp6(tmp2[15]);
  class E {
    constructor() {
      let fn;
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
      const tmp6 = closure_32;
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
        sum = derivedValue2.get() + point.y;
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
          sum = derivedValue2.get();
          num2 = 1;
          num = 0;
        }
      } else {
        const sum1 = x + derivedValue3.get();
        const obj6 = { contentHeight: contentDimensions.get().height, windowHeight: windowDimensions.get().height, safeArea: safeArea.get() };
        const tmp50 = calculateContentCenterOffsetDefault;
        const sum2 = y + tmp50(obj6);
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
      const obj5 = derivedValue1;
      if (derivedValue1.get()) {
        num2 = 9001;
      }
      const obj8 = { id, mode: derivedValue.get(), focused: id1, isSelf, defaultBorderRadius: token };
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
            num5 = c30;
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
      const size1 = { zIndex: withDelay(num7, obj9.withTiming(num2, closure_29)), opacity: withTiming(num3, tmp35, str, fn), width: width2, height: height2, transform: items, borderRadius: obj15.withSpring(tmp24Result, SCALE_PHYSICS) };
      obj9 = timing;
      withTiming = timing.withTiming;
      str = "animate-never";
      timing;
      tmp35 = closure_28;
      if (isScrollVisible.get()) {
        str = "animate-always";
      }
      fn = function y(arg0) {
        let tmp = arg0 && 0 === sharedVisible.get();
        if (tmp) {
          const value = sharedValue.get();
          tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
        }
        if (tmp) {
          const obj = cleanUp(id[15]);
          obj.runOnJS(closure_1_0)();
        }
      };
      fn.__closure = { sharedVisible, sharedTransitionState: sharedValue, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
      fn.__workletHash = 10367413568732;
      fn.__initData = __initData;
      ({ sharedVisible, sharedTransitionState: sharedValue, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp });
      let withSpringResult = num;
      if (!gestureActive) {
        withSpringResult = num;
        if (!closure_27) {
          const obj11 = spring;
          withSpringResult = obj11.withSpring(num, layoutPhysics, "respect-motion-settings");
        }
      }
      items = [{ translateX: withSpringResult }, , ];
      let withSpringResult1 = sum;
      if (!gestureActive) {
        withSpringResult1 = sum;
        if (!closure_27) {
          const obj12 = spring;
          withSpringResult1 = obj12.withSpring(sum, layoutPhysics, "respect-motion-settings");
        }
      }
      items[1] = { translateY: withSpringResult1 };
      const obj13 = { scale: obj14.withSpring(num6, obj) };
      items[2] = obj13;
      obj14 = spring;
      obj15 = spring;
      return size1;
    }
  }
  let obj9 = { coords, focused, id, isPIP: tmp27, pipState: pIPState, getScaledPIPContainerHeight: tmp6(tmp2[51]).getScaledPIPContainerHeight, getClampedPIPPosition: tmp6(tmp2[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue2, xOffset: derivedValue3, calculateContentCenterOffset: tmp(tmp2[52]), contentDimensions, sharedTransitionState: sharedValue, TransitionStates: tmp6(tmp2[47]).TransitionStates, zIndexOverride: derivedValue1, computeCardBorderRadius: tmp(tmp2[44]), mode: derivedValue, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue3, wrapperOffset, withDelay: tmp6(tmp2[15]).withDelay, withTiming: tmp6(tmp2[37]).withTiming, ZINDEX_TIMING: derivedValue2, OPACITY_TIMING: derivedValue1, isScrollVisible, runOnJS: tmp6(tmp2[15]).runOnJS, cleanUp, holdPosition: tmp12, withSpring: tmp6(tmp2[38]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS, SCALE_PHYSICS: wrapperOffset };
  E.__closure = obj9;
  E.__workletHash = 2158171222755;
  E.__initData = __initData17;
  const animatedStyle = tmp6Result19.useAnimatedStyle(E);
  const obj10 = {
    gesturesEnabled: first,
    onSingleTap() {
      if (_undefined.get().mode === VoicePanelControlsModes.HIDDEN) {
        _undefined4({ debounce: true });
      } else {
        _undefined2({ debounce: true });
      }
    },
    onDoubleTap: fn3,
    onLongPress: fn4
  };
  const tmpResult = tmp(tmp2[53]);
  const tmp6Result20 = tmp6(tmp2[50]);
  if (tmp6Result20.isStableActivityParticipant(tmp10)) {
    fn3 = () => {
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
    tmp6(tmp2[50]);
  }
  fn4 = undefined;
  if (null != id2) {
    fn4 = () => {
      const obj = { userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      return showUserProfileActionSheetDefault(obj);
    };
  }
  const items1 = [pipHandoff, id, tmp27];
  const tmpResultResult = tmpResult(obj10);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_32);
  }, items1);
  const items2 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items2);
  const tmp6Result22 = tmp6(tmp2[15]);
  sharedValue1 = tmp6Result22.useSharedValue(0);
  const items3 = [pipHandoff, id];
  callback1 = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items3);
  const items4 = [tmp27, layoutPhysics, sharedValue1, callback1];
  const effect1 = obj.useEffect(() => {
    const tmp = closure_32;
    if (tmp) {
      const result = sharedValue1.set(0);
      set = sharedValue1.set;
      const fn = function t(arg0) {
        if (true === arg0) {
          const obj = cleanUp(id[15]);
          obj.runOnJS(callback1)();
        }
      };
      const tmp6 = spring;
      let obj = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival: callback1 };
      const withSpring = tmp6.withSpring;
      fn.__closure = obj;
      fn.__workletHash = 11713677248803;
      fn.__initData = __initData2;
      const result1 = set(withSpring(1, layoutPhysics, "animate-always", fn));
      return () => {
        const obj = cleanUp(id[15]);
        return obj.cancelAnimation(sharedValue1);
      };
    }
  }, items4);
  let scale = pIPState.scale;
  const tmp6Result23 = tmp6(tmp2[15]);
  sharedValue2 = tmp6Result23.useSharedValue(scale.get());
  class Oe {
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
      let str = "respect-motion-settings";
      if (closure_27) {
        str = "animate-never";
      }
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
      size1 = { originX: obj4.withSpring(currentOriginX.targetOriginX, layoutPhysics, str), originY: obj5.withSpring(currentOriginX.targetOriginY, layoutPhysics, str), width: obj6.withSpring(currentOriginX.targetWidth, layoutPhysics, str), height: obj7.withSpring(currentOriginX.targetHeight, layoutPhysics, str) };
      obj4 = spring;
      obj5 = spring;
      obj6 = spring;
      obj7 = spring;
      return obj;
    }
  }
  let obj11 = { pipState: pIPState, lastPIPScale: sharedValue2, holdPosition: tmp12, withSpring: tmp6(tmp2[38]).withSpring, layoutPhysics, wrapperOffset };
  Oe.__closure = obj11;
  Oe.__workletHash = 10427322198811;
  Oe.__initData = __initData19;
  const items5 = [isDockEnabled && !isRTCConnected, layoutPhysics, wrapperOffset, sharedValue2, pIPState.scale];
  const callback2 = obj.useCallback(Oe, items5);
  let obj12 = { gesture: tmpResultResult, children: pipHandoff(tmpResult2, obj13) };
  const GestureDetector = tmp6(tmp2[55]).GestureDetector;
  obj13 = { nativeID: tmp6Result24.getExternalPipTileNativeId("card", id), style: items6, layout: callback2, children };
  tmpResult2 = tmp(tmp2[42]);
  items6 = [tmp3.positionWrapper, animatedStyle];
  tmp6Result24 = tmp6(tmp2[56]);
  return pipHandoff(GestureDetector, obj12);
}
const StyleSheet = react_native.StyleSheet;
const Pressable = react_native.Pressable;
({ VoicePanelCTACard: unpackModuleId, VoicePanelModes: closure_12, MODE_CHANGE_PHYSICS: map1, SPEAKING_PHYSICS: closure_14, VoicePanelCardItemType: closure_15 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
let EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const ParticipantTypes = CallConstants.ParticipantTypes;
const SCALE_PHYSICS = MorphablePanelConstants.SCALE_PHYSICS;
({ jsx: closure_22, Fragment: closure_23, jsxs: closure_24 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_25 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const tmp5 = native.AVATAR_SIZE_MAP[native.AvatarSizes.XXLARGE];
let obj = { stiffness: 150 };
let merged = Object.assign(SCALE_PHYSICS);
let closure_28 = { duration: 200 };
let closure_29 = { duration: 0 };
let c30 = 0.75;
let createStyles = createStyles_mod;
let obj2 = { positionWrapper: rect, userRoundedCard: { position: "absolute", top: -4, left: -4, bottom: -4, right: -4 }, userRoundedCardContent: obj3, nonUserRoundedCard: size, blackBackground: obj4, selfStreamFocusedSubtitle: { textAlign: "center", marginTop: 4, marginBottom: 40 }, avatarImageMaskStyles: obj5, avatarPlaceholder: size1, image: { maxWidth: 80, maxHeight: 80 }, speakingIndicatorWrapper: obj6, speakingIndicatorClip: obj7, speakingIndicatorUnderlay: obj8, speakingIndicatorBar: obj9 };
rect = { position: "absolute", top: 0, left: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj4 = { backgroundColor: "black" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { position: "relative", borderRadius: nativeDefault.radii.round, overflow: "hidden" };
size1 = { width: tmp5, height: tmp5, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { overflow: "hidden" };
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = { borderColor: nativeDefault.colors.BLACK };
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
const sharedTransitionState = createStyles(obj2);
const __initData = { code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}" };
const __initData2 = { code: "function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData3 = { code: "function VoicePanelCardTsx3(isFocused,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused!==lastIsFocused){runOnJS(setIsFocused)(isFocused);}}" };
let closure_36 = react.memo(function AnimatedStreamCard(id) {
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
  ({ userNick, isSelf, isScrollVisible } = id);
  const context = setFocused.useContext(userId(streamGuildId[27]));
  const focused = context.focused;
  setFocused = context.setFocused;
  const mode = context.mode;
  let obj = id(streamGuildId[21]);
  const items = [ApplicationStreamingStore];
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
  let c6 = tmp9;
  focused(setFocused.useState(false), 2);
  let obj2 = id(streamGuildId[15]);
  class C {
    constructor() {
      const value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id === id;
    }
  }
  C.__closure = { focused, id };
  C.__workletHash = 13061544667904;
  C.__initData = __initData2;
  class I {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        obj.runOnJS(c6)(arg0);
      }
    }
  }
  I.__closure = { runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp9 };
  I.__workletHash = 8824446489251;
  I.__initData = __initData3;
  ({ runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp9 });
  const animatedReaction = obj2.useAnimatedReaction(C, I);
  const tmp11 = userId(streamGuildId[28]);
  const tmp11Result = tmp11(id(streamGuildId[29]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj4 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_22(SelfStreamCard, obj4);
  } else if (null == activeStream) {
    const obj5 = { mode, stream, onPress: callback, disabled: false, layout };
    return closure_22(id(streamGuildId[30]).VoicePanelStreamPreview, obj5);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj6 = { stream: activeStream, removeSplashImage: !tmp8, type: id(streamGuildId[31]).VideoEmptyTypes.STREAM_ENDED, style: stream.absoluteFill };
          const tmpResult = userId(streamGuildId[31]);
          return closure_22(tmpResult, obj6);
        } else {
          let tmp15;
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj7 = { title: intl.string(id(streamGuildId[25]).t["pdFFK+"]) };
            const StreamTextOverlay = tmp4(tmp2[32]).StreamTextOverlay;
            intl = tmp4(tmp2[25]).intl;
            tmp15 = closure_22(StreamTextOverlay, obj7);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj8 = { title: intl2.string(id(streamGuildId[25]).t["5q17w5"]), subtext: intl3.formatToPlainString(id(streamGuildId[25]).t.meVVlb, obj9) };
              const StreamTextOverlay2 = tmp4(tmp2[32]).StreamTextOverlay;
              intl2 = tmp4(tmp2[25]).intl;
              intl3 = tmp4(tmp2[25]).intl;
              obj9 = { username: userNick };
              tmp15 = closure_22(StreamTextOverlay2, obj8);
            }
          }
          const obj10 = { layout, id, streamId, userId, streamKey: tmp4Result.encodeStreamKey(activeStream), isScrollVisible, videoSpinnerContext: id(streamGuildId[34]).VideoSpinnerContext.REMOTE_STREAM, sharedCoords, isCamera: false, paused: activeStream.state === ApplicationStreamStates.PAUSED };
          const tmp16 = closure_24;
          const tmp17 = closure_23;
          const tmp18 = closure_22;
          const tmpResult3 = userId(streamGuildId[33]);
          if (streamId == null) {
            streamId = null;
          }
          const obj11 = { children: items3 };
          tmp4Result = id(streamGuildId[23]);
          items3 = [tmp18(tmpResult3, obj10), tmp15];
          return tmp16(tmp17, obj11);
        }
      }
    }
    const obj12 = { avError: tmp11Result, stream: activeStream, removeSplashImage: !tmp8, type: id(streamGuildId[31]).VideoEmptyTypes.STREAM_FAILED, style: stream.absoluteFill };
    const tmpResult4 = userId(streamGuildId[31]);
    return closure_22(tmpResult4, obj12);
  }
});
const __initData4 = { code: "function VoicePanelCardTsx4(){const{isDockEnabled,mode,VoicePanelModes}=this.__closure;return isDockEnabled&&mode.get()===VoicePanelModes.PIP?VoicePanelModes.PANEL:mode.get();}" };
const __initData5 = { code: "function VoicePanelCardTsx5(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}" };
const __initData6 = { code: "function VoicePanelCardTsx6(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}" };
let closure_40 = react.memo(function AnimatedUserCardInner(isRinging) {
  let avatarDecoration;
  let avatarURI;
  let backgroundColor;
  let gradientStops;
  let items1;
  let items2;
  let items3;
  let layout;
  let layoutPhysics;
  let obj11;
  let obj7;
  let tmp13Result;
  let tmp17;
  let tmp17Result3;
  let tmp17Result4;
  let tmp20;
  let tmp2Result6;
  let tmp2Result8;
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  const userId = isRinging.userId;
  const guildId = isRinging.guildId;
  const channelId = isRinging.channelId;
  backgroundColor = undefined;
  let tmp = sharedTransitionState();
  let obj = channelId;
  let tmp2 = layoutPhysics;
  const controlsSpecs = channelId.useContext(layoutPhysics(userId[27])).controlsSpecs;
  const context = channelId.useContext(layoutPhysics(userId[27]));
  const mode = context.mode;
  const isDockEnabled = context.isDockEnabled;
  const obj2 = isRinging(userId[15]);
  const fn = function t() {
    const tmp = isDockEnabled;
    if (tmp) {
      let PANEL;
      if (mode.get() === constants.PIP) {
        PANEL = constants.PANEL;
      }
      return PANEL;
    }
    PANEL = mode.get();
  };
  fn.__closure = { isDockEnabled, mode, VoicePanelModes };
  fn.__workletHash = 7246583843780;
  fn.__initData = __initData4;
  const derivedValue = obj2.useDerivedValue(fn);
  ({ gradientStops, backgroundColor } = layoutPhysics(userId[35])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" }));
  const tmp8 = layoutPhysics(userId[35])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" });
  const MobileRequestToStreamExperiment = isRinging(userId[36]).MobileRequestToStreamExperiment;
  let str = guildId;
  const useConfig = MobileRequestToStreamExperiment.useConfig;
  if (guildId == null) {
    str = "";
  }
  const enabled = useConfig({ guildId: str, location: "VoicePanelCard" }).enabled;
  const tmp5Result = isRinging(userId[15]);
  class P {
    constructor() {
      let num = 1;
      const withTiming = timing.withTiming;
      timing;
      if (isRinging) {
        num = c30;
      }
      const obj = { opacity: withTiming(num, { duration: 100 }, "animate-always"), backgroundColor };
      return obj;
    }
  }
  P.__closure = { withTiming: isRinging(userId[37]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor };
  P.__workletHash = 10129795862716;
  P.__initData = __initData5;
  ({ withTiming: isRinging(userId[37]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor });
  const animatedStyle = tmp5Result.useAnimatedStyle(P);
  const tmp5Result3 = isRinging(userId[15]);
  class I {
    constructor() {
      let items;
      const withSpring = spring.withSpring;
      let num = 1;
      spring;
      if (derivedValue.get() === constants.PIP) {
        num = 0.8;
      }
      const obj = { transform: items };
      items = [{ scale: withSpring(num, layoutPhysics) }];
      ({ scale: withSpring(num, layoutPhysics) });
      return obj;
    }
  }
  I.__closure = { withSpring: isRinging(userId[38]).withSpring, mode: derivedValue, VoicePanelModes, layoutPhysics };
  I.__workletHash = 5893936613267;
  I.__initData = __initData6;
  let cachedSourceFromURI;
  ({ withSpring: isRinging(userId[38]).withSpring, mode: derivedValue, VoicePanelModes, layoutPhysics });
  const animatedStyle1 = tmp5Result3.useAnimatedStyle(I);
  if (null != avatarURI) {
    const tmp5Result4 = isRinging(userId[39]);
    cachedSourceFromURI = tmp5Result4.getCachedSourceFromURI(avatarURI);
  }
  let items = [guildId, channelId, userId, controlsSpecs];
  const callback = obj.useCallback(() => {
    let tmp2 = null != guildId;
    const tmp = guildId;
    if (tmp2) {
      tmp2 = null != channelId;
    }
    if (tmp2) {
      tmp2 = null != userId;
    }
    if (tmp2) {
      tmp2 = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
    }
    if (tmp2) {
      const obj = VoicePanelUserActionCreators;
      const result = obj.openVoicePanelUserActionSheet(tmp, channelId, userId);
    }
  }, items);
  if (null != avatarDecoration) {
    const obj5 = { source: cachedSourceFromURI, size: isRinging(userId[18]).AvatarSizes.XXLARGE, avatarDecoration };
    const Avatar = tmp5(tmp3[18]).Avatar;
    tmp13Result = closure_22(Avatar, obj5);
    tmp17 = closure_22;
  } else {
    size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
    const tmp2Result = tmp2(userId[41]);
    tmp13Result = tmp13(tmp2Result, size);
    tmp17 = tmp13;
  }
  const obj6 = { style: tmp.userRoundedCard, layout, children: tmp20(tmp2Result6, obj7) };
  obj7 = { style: items1, children: items2 };
  items1 = [tmp.userRoundedCardContent, animatedStyle];
  let tmp17Result = null;
  const tmp2Result5 = tmp2(userId[42]);
  tmp20 = closure_24;
  tmp2Result6 = tmp2(userId[42]);
  if (null != gradientStops) {
    const obj8 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: controlsSpecs.absoluteFill, layout, pointerEvents: "none" };
    tmp17Result = tmp17(LinearGradient, obj8);
  }
  items2 = [tmp17Result, ];
  if (null == cachedSourceFromURI) {
    const obj9 = { style: tmp.avatarPlaceholder };
    tmp17Result3 = tmp17(tmp2(tmp3[24]), obj9);
  } else {
    let prop;
    const obj10 = { layout, children: tmp17(tmp2Result8, obj11) };
    const tmp2Result7 = tmp2(userId[42]);
    tmp2Result8 = tmp2(userId[42]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    obj11 = { style: items3, children: tmp17Result4 };
    items3 = [prop, animatedStyle1];
    tmp17Result4 = tmp13Result;
    if (enabled) {
      const obj12 = { onPress: callback, children: tmp13Result };
      tmp17Result4 = tmp17(derivedValue, obj12);
    }
    tmp17Result3 = tmp17(tmp2Result7, obj10);
  }
  items2[1] = tmp17Result3;
  return tmp17(tmp2Result5, obj6);
});
const __initData7 = { code: "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
const __initData8 = { code: "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
const __initData9 = { code: "function VoicePanelCardTsx9(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
let closure_45 = react.memo(function LazySpeakingIndicator(id) {
  let speaking;
  let userPlayingSounds;
  let tmp = id(react.useState(() => {
    let isSpeakingResult = SpeakingStore.isSpeaking(id.id);
    const tmp = id;
    if (!isSpeakingResult) {
      isSpeakingResult = SoundboardStore.isUserPlayingSounds(tmp.id);
    }
    return isSpeakingResult;
  }), 2);
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
      const result1 = SoundboardStore.addConditionalChangeListener(() => {
        const isUserPlayingSoundsResult = userPlayingSounds.isUserPlayingSounds(id);
        let flag = !isUserPlayingSoundsResult;
        if (isUserPlayingSoundsResult) {
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
    tmp4 = closure_22(SpeakingIndicator, obj);
  }
  return tmp4;
});
const __initData10 = { code: "function VoicePanelCardTsx10(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData11 = { code: "function VoicePanelCardTsx11(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}" };
const __initData12 = { code: "function VoicePanelCardTsx12(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}" };
const __initData13 = { code: "function VoicePanelCardTsx13(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}" };
let closure_50 = { isSelf: false, hasVideo: false, user: { id: "Array" } };
function layoutTransitionFunction(originX, SUBTLE_SPRING, get, get2) {
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let closure_0 = get;
  let closure_1 = get2;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  const value = get.get();
  let result = value / get2.get();
  let str = "respect-motion-settings";
  if (flag) {
    str = "animate-never";
  }
  const obj = {
    animations: size,
    initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth * result, height: originX.currentHeight * result },
    callback() {
      const result = closure_1.set(closure_0.get());
    }
  };
  size = { originX: obj3.withSpring(originX.targetOriginX, SUBTLE_SPRING, str), originY: obj4.withSpring(originX.targetOriginY, SUBTLE_SPRING, str), width: obj5.withSpring(originX.targetWidth, SUBTLE_SPRING, str), height: obj6.withSpring(originX.targetHeight, SUBTLE_SPRING, str) };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
let obj10 = { withSpring: spring.withSpring };
layoutTransitionFunction.__closure = obj10;
layoutTransitionFunction.__workletHash = 12759305802032;
layoutTransitionFunction.__initData = { code: "function layoutTransitionFunction_VoicePanelCardTsx14(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();const shouldAnimate=!disableAnimation?'respect-motion-settings':'animate-never';return{animations:{originX:withSpring(values.targetOriginX,physics,shouldAnimate),originY:withSpring(values.targetOriginY,physics,shouldAnimate),width:withSpring(values.targetWidth,physics,shouldAnimate),height:withSpring(values.targetHeight,physics,shouldAnimate)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}" };
const __initData14 = { code: "function VoicePanelCardTsx15(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData15 = { code: "function VoicePanelCardTsx16(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData16 = { code: "function VoicePanelCardTsx17(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData17 = { code: "function VoicePanelCardTsx18(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,holdPosition,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive||holdPosition?x:withSpring(x,layoutPhysics,'respect-motion-settings')},{translateY:gestureActive||holdPosition?y:withSpring(y,layoutPhysics,'respect-motion-settings')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
const __initData18 = { code: "function VoicePanelCardTsx19(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_57 = { code: "function VoicePanelCardTsx20(finished){const{runOnJS,reportPIPArrival}=this.__closure;if(finished===true){runOnJS(reportPIPArrival)();}}" };
const __initData19 = { code: "function VoicePanelCardTsx21(values){const{pipState,lastPIPScale,holdPosition,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};const motion=holdPosition?'animate-never':'respect-motion-settings';return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,motion),originY:withSpring(values.targetOriginY,layoutPhysics,motion),width:withSpring(values.targetWidth,layoutPhysics,motion),height:withSpring(values.targetHeight,layoutPhysics,motion)},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
const __initData20 = { code: "function VoicePanelCardTsx22(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
const __initData21 = { code: "function VoicePanelCardTsx23(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale,holdPosition}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation||holdPosition);}" };
const memoResult = react.memo(function VoicePanelCard(cleanUp) {
  let DEFAULT;
  let VideoSpinnerContext;
  let channelId;
  let connected;
  let guildId;
  let isCall;
  let isDockEnabled;
  let item;
  let items3;
  let mountedCards;
  let num;
  let scrollPosition;
  let streamId;
  let tmp31;
  let tmp32;
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
  isDockEnabled = undefined;
  let memo;
  const id = item.id;
  let obj = cardLayoutCoordsSubscription;
  let tmp = windowDimensions;
  let tmp2 = id2;
  cleanUp = cleanUp.cleanUp;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[27]));
  ({ channelId, guildId, isCall, isDockEnabled, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  const layoutManager = context.layoutManager;
  const tmp4 = windowDimensions(id2[50])(id, channelId, guildId);
  let tmp6 = tmp4;
  const obj2 = scrollPosition(id2[50]);
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_50;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  const items = [RTCConnectionStore];
  const tmp5Result = scrollPosition(tmp2[21]);
  const stateFromStores = tmp5Result.useStateFromStores(items, () => connected.isConnected());
  const tmp5Result10 = scrollPosition(tmp2[50]);
  const tmp8 = tmp5Result10.isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type1;
  const tmpResult = tmp(tmp2[28]);
  if (tmp4 != null) {
    type1 = tmp4.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    DEFAULT = tmp5(tmp2[29]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[29]).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = tmpResult(DEFAULT, str);
  const tmp13 = tmp(tmp2[57])(str);
  const useSharedValue = tmp5(tmp2[15]).useSharedValue;
  scrollPosition(tmp2[15]);
  if (transitionState === scrollPosition(tmp2[47]).TransitionStates.MOUNTED) {
    num = 1;
  } else {
    num = 0;
  }
  const sharedValue = useSharedValue(num);
  let tmp17 = null != id2;
  const useSharedValue2 = tmp5(tmp2[15]).useSharedValue;
  scrollPosition(tmp2[15]);
  if (tmp17) {
    let isSpeakingResult = SpeakingStore.isSpeaking(id2) || isDockEnabled.isUserPlayingSounds(id2);
    tmp17 = isSpeakingResult;
  }
  sharedValue2 = useSharedValue2(tmp17);
  const items1 = [id2, sharedValue2];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      let tmp3 = null != id2;
      if (tmp3) {
        tmp3 = SpeakingStore.isSpeaking(tmp2) || isDockEnabled.isUserPlayingSounds(tmp2);
        const isSpeakingResult = SpeakingStore.isSpeaking(tmp2) || isDockEnabled.isUserPlayingSounds(tmp2);
      }
      const result = set(tmp3);
    }
    const tmp2 = id2;
    let tmp3 = null != id2;
    set = sharedValue2.set;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
      if (!isSpeakingResult) {
        isSpeakingResult = isDockEnabled.isUserPlayingSounds(tmp2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = isDockEnabled.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result13 = scrollPosition(tmp2[58]);
  cardLayoutCoordsSubscription = tmp5Result13.useCardLayoutCoordsSubscription(id, layoutManager);
  const tmp5Result14 = scrollPosition(tmp2[15]);
  class L {
    constructor() {
      const sum = EDGE_GUTTER + cardLayoutCoordsSubscription.get().y;
      const value = scrollPosition.get();
      let tmp3 = sum > value - cardLayoutCoordsSubscription.get().height;
      const obj = scrollPosition;
      if (tmp3) {
        const value2 = obj.get();
        tmp3 = sum < value2 + windowDimensions.get().height;
      }
      return tmp3;
    }
  }
  const obj3 = { EDGE_GUTTER, coords: cardLayoutCoordsSubscription, scrollPosition, windowDimensions };
  L.__closure = obj3;
  L.__workletHash = 5334204469805;
  L.__initData = __initData20;
  const derivedValue = tmp5Result14.useDerivedValue(L);
  const tmp5Result15 = scrollPosition(tmp2[49]);
  pIPState = tmp5Result15.usePIPState();
  let scale = pIPState.scale;
  const tmp5Result16 = scrollPosition(tmp2[15]);
  sharedValue1 = tmp5Result16.useSharedValue(scale.get());
  if (isDockEnabled) {
    isDockEnabled = !stateFromStores;
  }
  memo = obj.useMemo(() => {
    const obj = { mass: closure_1_13.mass, damping: windowDimensions(id2[59])(closure_1_13.damping - 2, closure_1_13.damping + 2), stiffness: windowDimensions(id2[59])(closure_1_13.stiffness - 20, closure_1_13.stiffness + 20) };
    return obj;
  }, []);
  class K {
    constructor(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      const scale = pIPState.scale;
      const tmp = layoutTransitionFunction;
      const tmp2 = memo;
      const tmp3 = sharedValue1;
      if (!flag) {
        flag = isDockEnabled;
      }
      return tmp(arg0, tmp2, scale, tmp3, flag);
    }
  }
  const obj4 = { layoutTransitionFunction, physics: memo, pipState: pIPState, lastPipScale: sharedValue1, holdPosition: isDockEnabled };
  K.__closure = obj4;
  K.__workletHash = 3609659598750;
  K.__initData = __initData21;
  const items2 = [isDockEnabled, memo, pIPState.scale, sharedValue1];
  const callback = obj.useCallback(K, items2);
  if (item.type === constants2.CTA) {
    const id3 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id3) {
      tmp31 = closure_22(tmp(tmp2[60]), {});
      tmp32 = closure_22;
    } else if (tmp42.CALLER_DISCONNECTED === id3) {
      tmp31 = closure_22(tmp(tmp2[61]), {});
      tmp32 = closure_22;
    }
    const obj5 = { cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: memo, transitionState, sharedVisible: sharedValue, children: items3 };
    items3 = [tmp31, , ];
    let tmp32Result = null != tmp4;
    const tmp45 = closure_24;
    const tmp46 = AnimatedWrapper;
    if (tmp32Result) {
      const obj6 = { isRinging: tmp8, participant: tmp4, label: userNick, layout: callback };
      userNick = undefined;
      const tmpResult3 = tmp(tmp2[64]);
      const tmp5Result17 = scrollPosition(tmp2[50]);
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      tmp32Result = tmp32(tmpResult3, obj6);
    }
    items3[1] = tmp32Result;
    const tmp5Result18 = scrollPosition(tmp2[50]);
    let result = tmp5Result18.isStableParticipantWithUser(tmp4);
    if (result) {
      const obj7 = { speakingOrPlayingSoundboard: sharedValue2, id, userId: tmp4.user.id, isSelf, layout: callback };
      result = tmp32(closure_45, obj7);
    }
    items3[2] = result;
    return tmp45(tmp46, obj5);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      let tmp34;
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          let tmp34Result;
          if (tmp4.canRenderVideo) {
            let tmp37;
            if (null != tmpResultResult) {
              let tmp37Result;
              if (null == tmp13) {
                const obj8 = { avError: tmpResultResult, userId: user.id, style: pIPState.absoluteFill };
                tmp37Result = closure_22(tmp(tmp2[62]), obj8);
                tmp37 = closure_22;
              }
              tmp34 = tmp37;
              tmp34Result = tmp37Result;
            }
            tmp37 = closure_22;
            const obj9 = { id: tmp33, userId: user.id, streamId, isScrollVisible: derivedValue, videoSpinnerContext: isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, sharedCoords: cardLayoutCoordsSubscription, isCamera: true, focusOnReady: isCall, layout: callback };
            const tmpResult4 = tmp(tmp2[33]);
            if (streamId == null) {
              streamId = null;
            }
            VideoSpinnerContext = tmp5(tmp2[34]).VideoSpinnerContext;
            if (isCall) {
              isCall = !isSelf;
            }
            tmp37Result = tmp37(tmpResult4, obj9);
          }
          tmp32 = tmp34;
          tmp31 = tmp34Result;
        }
      }
      tmp34 = closure_22;
      let flag = false;
      const obj10 = { isRinging: tmp8, avatarURI: user.getAvatarURL(guildId, 80, false), avatarDecoration: userAvatarDecoration, layout: callback, layoutPhysics: memo, userId: user.id, guildId, channelId };
      userAvatarDecoration = tmp4.userAvatarDecoration;
      tmp34Result = tmp34(closure_40, obj10);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj12 = { userId: tmp4.user.id, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf, sharedCoords: cardLayoutCoordsSubscription, isScrollVisible: derivedValue, layout: callback };
      ({ id: obj11.id, streamGuildId: obj11.streamGuildId, streamId: obj11.streamId, userNick: obj11.userNick } = tmp4);
      tmp31 = closure_22(closure_36, obj12);
      tmp32 = closure_22;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj13 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: callback };
      tmp31 = closure_22(tmp(tmp2[63]), obj13, tmp4.id);
      tmp32 = closure_22;
    }
  }
  const obj14 = { isRinging: tmp8, avatarURI: "a", avatarDecoration: "isArray", layout: callback, layoutPhysics: memo, channelId };
  tmp31 = closure_22(closure_40, obj14);
  tmp32 = closure_22;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default memoResult;
