// Module ID: 19677
// Function ID: 19678
// Name: VoicePanelCard
// Dependencies: [32, 19, 17, 6223, 6801, 5925, 6844, 11395, 11393, 19524, 11398, 1072, 5837, 11396, 21, 1652, 5783, 5747, 1187, 5170, 575, 504, 8011, 6804, 7056, 1113, 5790, 11394, 1705, 11953, 5950, 15158, 11955, 11952, 19678, 11962, 19520, 15136, 5402, 5793, 9639, 19679, 5874, 5756, 19681, 12646, 10242, 5231, 7420, 19613, 19657, 19523, 19682, 19683, 8854, 5452, 6037, 19684, 11397, 19685, 19686, 19687, 19688, 19689, 19690, 19700, 2]

// Module 19677 (VoicePanelCard)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import LinearGradientDefault from "LinearGradient" /* 5747 */;
import useToken from "useToken" /* 5756 */;
import Text_Text from "Text/Text" /* 5783 */;
import spring_spring from "spring/spring" /* 5793 */;
import CallConstants from "CallConstants" /* 5837 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6804 */;
import NativeViewDefault from "NativeView" /* 7056 */;
import StreamActionCreators from "StreamActionCreators" /* 8011 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8854 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11393 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11396 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11398 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19524 */;
import VoicePanelUserActionCreators from "VoicePanelUserActionCreators" /* 19679 */;
import computeCardBorderRadiusDefault from "computeCardBorderRadius" /* 19681 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardStore from "SoundboardStore" /* 6223 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5925 */;
import SpeakingStore from "SpeakingStore" /* 6844 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const module_1652_mod = _mod1652;
let PANEL, currentUserActiveStream, importDefault, set;

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
let tmp;
let tmp14;
let tmp15;
let unpackModuleId;
const roundToNearestPixelDefault = tmp(12646);
function SelfStreamCard(stream) {
  let intl3;
  let items4;
  let items5;
  let str;
  let string2Result;
  let stringResult;
  let tmp6;
  let tmp7;
  let tmp8;
  stream = stream.stream;
  const isFocused = stream.isFocused;
  const sharedCoords = stream.sharedCoords;
  const tmp = closure_30();
  obj = stream(504);
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
      obj = StreamKeyUtils;
      stopStream(obj.encodeStreamKey(tmp));
    }
  }, items1);
  const items2 = [closure_31, isFocused, sharedCoords];
  let c0;
  let c1;
  [tmp6, tmp7, tmp8] = items2;
  const obj2 = stream(1652);
  class VoicePanelCardTsx1 {
    constructor() {
      let str;
      let num = 16;
      if (c0) {
        num = 0;
      }
      obj = { textAlign: "center", paddingHorizontal: 16, paddingVertical: num, width: str };
      str = "auto";
      if (!c0) {
        str = _undefined.get().width;
      }
      return obj;
    }
  }
  const items3 = [tmp7, tmp8];
  VoicePanelCardTsx1.__closure = items3;
  VoicePanelCardTsx1.__workletHash = 10409373046786;
  VoicePanelCardTsx1.__initData = tmp6;
  const animatedStyle = obj2.useAnimatedStyle(VoicePanelCardTsx1);
  let tmp13 = isFocused;
  const obj3 = { style: tmp.nonUserRoundedCard, children: items4 };
  const tmp12 = NativeViewDefault;
  if (isFocused) {
    const obj4 = { style: tmp.blackBackground };
    tmp13 = closure_22(NativeViewDefault, obj4);
  }
  items4 = [tmp13, , ];
  const obj5 = { style: animatedStyle, variant: str, color: "text-overlay-light", children: stringResult };
  str = "body-sm/semibold";
  const tmp16 = closure_25;
  if (isFocused) {
    str = "body-lg/semibold";
  }
  const intl = tmp2(1113).intl;
  const string = intl.string;
  const t = tmp2(1113).t;
  if (stateFromStores) {
    stringResult = string(t["5q17w5"]);
  } else {
    stringResult = string(t.gMOwov);
  }
  items4[1] = closure_22(tmp16, obj5);
  let tmp10Result = null;
  if (isFocused) {
    const obj6 = { style: tmp.selfStreamFocusedSubtitle, variant: "body-sm/medium", color: "text-overlay-light", children: string2Result };
    const Text = tmp2(5783).Text;
    const intl2 = tmp2(1113).intl;
    const string2 = intl2.string;
    const t2 = tmp2(1113).t;
    const tmp19 = closure_23;
    if (stateFromStores) {
      string2Result = string2(t2.LV1NSN);
    } else {
      string2Result = string2(t2.dKeLGt);
    }
    const obj7 = { children: items5 };
    items5 = [closure_22(Text, obj6), ];
    const obj8 = { size: "lg", variant: "primary-overlay", onPress: callback, text: intl3.string(stream(1113).t.CpkXwZ) };
    const Button = tmp2(5790).Button;
    intl3 = tmp2(1113).intl;
    items5[1] = closure_22(Button, obj8);
    tmp10Result = tmp10(tmp19, obj7);
  }
  items4[2] = tmp10Result;
  return closure_24(tmp12, obj3);
}
function useCardPanelMode() {
  let isDockEnabled;
  let mode;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ mode, isDockEnabled } = context);
  const items = [closure_36, isDockEnabled, mode, authStore2];
  let c0;
  let c1;
  let c2;
  [tmp2, tmp3, tmp4, tmp5] = items;
  obj = _mod1652;
  class VoicePanelCardTsx4 {
    constructor() {
      tmp = closure_0;
      if (tmp) {
        tmp2 = closure_1;
        if (closure_1.get() === closure_2.PIP) {
          PANEL = closure_2.PANEL;
        }
        return PANEL;
      }
      PANEL = closure_1.get();
      return;
    }
  }
  const items1 = [tmp3, tmp4, tmp5];
  VoicePanelCardTsx4.__closure = items1;
  VoicePanelCardTsx4.__workletHash = 6106186389117;
  VoicePanelCardTsx4.__initData = tmp2;
  return obj.useDerivedValue(VoicePanelCardTsx4);
}
function SpeakingIndicator(arg0) {
  let View2;
  let id;
  let items7;
  let items8;
  let items9;
  let layout;
  let obj5;
  let require;
  let speakingOrPlayingSoundboard;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp54;
  ({ id, userId: require, isSelf, speakingOrPlayingSoundboard, layout } = arg0);
  let tmp = importDefault;
  const focused = react.useContext(VoicePanelStateContextDefault).focused;
  const tmp3 = useCardPanelMode();
  const tmp4 = closure_30();
  obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED);
  let obj3 = get_initialized;
  const items = [SoundboardStore];
  const stateFromStores = obj3.useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(_require));
  const items1 = [closure_41, tmp3, , , , , , , , ];
  items1[2] = closure_12;
  items1[3] = focused;
  items1[4] = id;
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items1[5] = spring_spring.withSpring;
  items1[6] = computeCardBorderRadiusDefault;
  items1[7] = isSelf;
  items1[8] = token;
  items1[9] = closure_14;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
  class VoicePanelCardTsx7 {
    constructor() {
      let id1;
      let num2;
      let str;
      let tmp16;
      let tmp7;
      let tmp = _undefined.get() !== _undefined2.PIP;
      obj = _undefined;
      if (tmp) {
        const value = _undefined3.get();
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
      const obj2 = { opacity: num, borderRadius: tmp7(num2, tmp16, str) };
      num2 = 0;
      tmp7 = c4;
      if (!tmp) {
        const obj3 = { id, mode: obj.get(), focused: id1, isSelf, defaultBorderRadius };
        const value2 = _undefined3.get();
        id1 = undefined;
        const tmp8 = c5;
        if (value2 != null) {
          id1 = value2.id;
        }
        num2 = tmp8(obj3);
      }
      str = "animate-always";
      tmp16 = c8;
      if (tmp) {
        str = "animate-never";
      }
      return obj2;
    }
  }
  const items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  VoicePanelCardTsx7.__closure = items2;
  VoicePanelCardTsx7.__workletHash = 2180139685709;
  VoicePanelCardTsx7.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(VoicePanelCardTsx7);
  const items3 = [closure_42, tmp3, tmp10, focused, id, , , , , , , , , ];
  const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
  _mod1652;
  items3[5] = spring_spring.withSpring;
  items3[6] = computeCardBorderRadiusDefault;
  items3[7] = isSelf;
  items3[8] = token;
  items3[9] = closure_14;
  items3[10] = speakingOrPlayingSoundboard;
  items3[11] = roundToNearestPixelDefault;
  items3[12] = 3;
  items3[13] = 2;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let c9;
  let c10;
  let c11;
  let c12;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items3;
  class VoicePanelCardTsx8 {
    constructor() {
      let id1;
      let num2;
      let tmp = _undefined.get() === _undefined2.PIP;
      obj = _undefined;
      if (!tmp) {
        const value = _undefined3.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp = id === id;
      }
      let num = 0;
      if (!tmp) {
        const obj2 = { id, mode: obj.get(), focused: id1, isSelf, defaultBorderRadius };
        const value2 = _undefined3.get();
        id1 = undefined;
        const tmp8 = c5;
        if (value2 != null) {
          id1 = value2.id;
        }
        num = tmp8(obj2);
      }
      let str = "animate-always";
      let str2 = "animate-always";
      if (tmp) {
        str2 = "animate-never";
      }
      const obj3 = { borderRadius: _undefined(num, c8, str2), borderWidth: _undefined(num2, c8, str) };
      num2 = 0;
      if (!tmp) {
        num2 = 0;
        if (_undefined4.get()) {
          num2 = _undefined5(c11 + c12);
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      return obj3;
    }
  }
  const items4 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  VoicePanelCardTsx8.__closure = items4;
  VoicePanelCardTsx8.__workletHash = 14127200655182;
  VoicePanelCardTsx8.__initData = tmp24;
  const animatedStyle2 = useAnimatedStyle2(VoicePanelCardTsx8);
  const items5 = [closure_43, tmp3, tmp10, focused, id, , , , , , , ];
  const useAnimatedStyle3 = _mod1652.useAnimatedStyle;
  _mod1652;
  items5[5] = spring_spring.withSpring;
  items5[6] = computeCardBorderRadiusDefault;
  items5[7] = isSelf;
  items5[8] = token;
  items5[9] = closure_14;
  items5[10] = speakingOrPlayingSoundboard;
  items5[11] = 3;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items5;
  class VoicePanelCardTsx9 {
    constructor() {
      let id1;
      let num2;
      let tmp = _undefined.get() === _undefined2.PIP;
      obj = _undefined;
      if (!tmp) {
        const value = _undefined3.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp = id === id;
      }
      let num = 0;
      if (!tmp) {
        const obj2 = { id, mode: obj.get(), focused: id1, isSelf, defaultBorderRadius };
        const value2 = _undefined3.get();
        id1 = undefined;
        const tmp8 = c5;
        if (value2 != null) {
          id1 = value2.id;
        }
        num = tmp8(obj2);
      }
      let str = "animate-always";
      let str2 = "animate-always";
      if (tmp) {
        str2 = "animate-never";
      }
      const obj3 = { borderRadius: _undefined(num, c8, str2), borderWidth: _undefined(num2, c8, str) };
      num2 = 0;
      if (!tmp) {
        num2 = 0;
        if (_undefined4.get()) {
          num2 = c10;
        }
      }
      if (tmp) {
        str = "animate-never";
      }
      return obj3;
    }
  }
  const items6 = [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
  VoicePanelCardTsx9.__closure = items6;
  VoicePanelCardTsx9.__workletHash = 6036845509381;
  VoicePanelCardTsx9.__initData = tmp40;
  const animatedStyle3 = useAnimatedStyle3(VoicePanelCardTsx9);
  const obj4 = { style: tmp4.speakingIndicatorWrapper, layout, pointerEvents: "none", children: tmp54(View2, obj5) };
  const View = module_1652.View;
  obj5 = { style: items7, children: items9 };
  items7 = [tmp4.speakingIndicatorClip, animatedStyle];
  View2 = module_1652.View;
  const obj6 = { style: items8, layout };
  items8 = [tmp4.speakingIndicatorUnderlay, animatedStyle2];
  items9 = [closure_22(module_1652.View, obj6), ];
  const items10 = [tmp4.speakingIndicatorBar, , ];
  let tmp55 = null;
  const View3 = module_1652.View;
  tmp54 = closure_24;
  if (stateFromStores) {
    tmp55 = { borderColor: token1 };
    const obj7 = { borderColor: token1 };
  }
  items10[1] = tmp55;
  items10[2] = animatedStyle3;
  items9[1] = closure_22(View3, { style: items10, layout });
  return closure_22(View, obj4);
}
function AnimatedWrapper(arg0) {
  let View;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c4;
  let c6;
  let c7;
  let c8;
  let children;
  let cleanUp;
  let connected;
  let contentDimensions;
  let coords;
  let fn;
  let fn2;
  let focused;
  let guildId;
  let id;
  let isDockEnabled;
  let isRTCConnected;
  let isScrollVisible;
  let items24;
  let layoutPhysics;
  let mountedCards;
  let obj6;
  let pipAvoidanceSpecs;
  let pipHandoff;
  let safeArea;
  let scrollPosition;
  let sharedVisible;
  let tmp100;
  let tmp101;
  let tmp102;
  let tmp103;
  let tmp104;
  let tmp114;
  let tmp115;
  let tmp116;
  let tmp117;
  let tmp118;
  let tmp119;
  let tmp12;
  let tmp120;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp6Result24;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let tmp94;
  let tmp95;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  let transitionState;
  let windowDimensions;
  let wrapperDimensions;
  let wrapperOffset;
  ({ cleanUp, id } = arg0);
  ({ isRTCConnected, isScrollVisible, layoutPhysics } = arg0);
  ({ transitionState, sharedVisible } = arg0);
  let analyticsLocations;
  react = undefined;
  focused = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  pipHandoff = undefined;
  let id2;
  let closure_11;
  let sharedValue1;
  let callback1;
  let tmp = layoutPhysics;
  let tmp2 = analyticsLocations;
  ({ children, coords } = arg0);
  analyticsLocations = layoutPhysics(analyticsLocations[48])().analyticsLocations;
  obj = react;
  const tmp3 = closure_30();
  const context = react.useContext(layoutPhysics(analyticsLocations[27]));
  const channelId = context.channelId;
  ({ contentDimensions, controlsSpecs: c4, focused } = context);
  ({ hideControls: c6, isDockEnabled, mountedCards, safeArea, setFocused: c7, showControls: c8, windowDimensions, wrapperDimensions, wrapperOffset, pipHandoff } = context);
  ({ connected, guildId, pipAvoidanceSpecs, scrollPosition } = context);
  const tmp5 = useCardPanelMode();
  let tmp6 = id;
  const obj2 = id(analyticsLocations[49]);
  const pIPState = obj2.usePIPState();
  const tmp8 = layoutPhysics(analyticsLocations[50])(id, channelId, guildId);
  let obj3 = id(analyticsLocations[50]);
  let tmp9 = tmp8;
  if (!obj3.isStableParticipantWithUser(tmp8)) {
    tmp9 = closure_50;
  }
  isSelf = tmp9.isSelf;
  id2 = tmp9.user.id;
  let items = [closure_52, id, pIPState, tmp5, ];
  const tmp11 = sharedValue1;
  items[4] = sharedValue1;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  const tmp6Result = tmp6(tmp2[15]);
  class VoicePanelCardTsx15 {
    constructor() {
      const tmp = c0 === _undefined.id && _undefined2.get() === _undefined3.PIP;
      return tmp;
    }
  }
  let items1 = [tmp13, tmp14, tmp15, tmp16];
  VoicePanelCardTsx15.__closure = items1;
  VoicePanelCardTsx15.__workletHash = 15256278978202;
  VoicePanelCardTsx15.__initData = tmp12;
  const derivedValue = tmp6Result.useDerivedValue(VoicePanelCardTsx15);
  let items2 = [closure_53, focused, id, tmp5, tmp11, scrollPosition];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  react = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items2;
  const tmp6Result13 = tmp6(tmp2[15]);
  class VoicePanelCardTsx16 {
    constructor() {
      let num;
      const value = _undefined.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      if (id === c1) {
        num = _undefined4.get();
      } else {
        num = 0;
      }
      return num;
    }
  }
  const items3 = [tmp19, tmp20, tmp21, tmp22, tmp23];
  VoicePanelCardTsx16.__closure = items3;
  VoicePanelCardTsx16.__workletHash = 11655933282959;
  VoicePanelCardTsx16.__initData = tmp18;
  const derivedValue1 = tmp6Result13.useDerivedValue(VoicePanelCardTsx16);
  const items4 = [closure_54, connected, EDGE_GUTTER, safeArea, windowDimensions, contentDimensions, wrapperDimensions];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  react = undefined;
  let c5;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items4;
  const tmp6Result14 = tmp6(tmp2[15]);
  class VoicePanelCardTsx17 {
    constructor() {
      let maxResult;
      if (_undefined.get()) {
        const _Math = Math;
        const left = _undefined2.get().left;
        maxResult = max(c1, left, (_undefined3.get().width - _undefined4.get().width) / 2);
      } else {
        maxResult = _undefined5.get().drawerWidth / 2;
      }
      return maxResult;
    }
  }
  const items5 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
  VoicePanelCardTsx17.__closure = items5;
  VoicePanelCardTsx17.__workletHash = 15075734874118;
  VoicePanelCardTsx17.__initData = tmp25;
  importDefault = tmp8;
  const derivedValue2 = tmp6Result14.useDerivedValue(VoicePanelCardTsx17);
  const tmp6Result15 = tmp6(tmp2[15]);
  const sharedValue = tmp6Result15.useSharedValue(transitionState);
  const tmp34 = channelId(obj.useState(true), 2);
  react = tmp34[1];
  let type;
  const first = tmp34[0];
  const useCallback = obj.useCallback;
  if (tmp8 != null) {
    type = tmp8.type;
  }
  const items6 = [type, id];
  const callback = useCallback((arg0) => {
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    if (type === constants.ACTIVITY) {
      closure_4(arg0 !== id);
    }
  }, items6);
  const items7 = [closure_46, focused];
  c0 = undefined;
  [tmp39, tmp40] = items7;
  const tmp6Result16 = tmp6(tmp2[15]);
  class VoicePanelCardTsx10 {
    constructor() {
      const value = _undefined.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  const items8 = [tmp40];
  VoicePanelCardTsx10.__closure = items8;
  VoicePanelCardTsx10.__workletHash = 13460061917882;
  VoicePanelCardTsx10.__initData = tmp39;
  const items9 = [closure_47, , ];
  const useAnimatedReaction = tmp6Result16.useAnimatedReaction;
  items9[1] = tmp6(tmp2[28]).scheduleOnRN;
  items9[2] = callback;
  c0 = undefined;
  c1 = undefined;
  [tmp41, tmp42, tmp43] = items9;
  class VoicePanelCardTsx11 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items10 = [tmp42, tmp43];
  VoicePanelCardTsx11.__closure = items10;
  VoicePanelCardTsx11.__workletHash = 15970315567352;
  VoicePanelCardTsx11.__initData = tmp41;
  const animatedReaction = useAnimatedReaction(VoicePanelCardTsx10, VoicePanelCardTsx11);
  const items11 = [closure_48, tmp5, focused, sharedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp46, tmp47, tmp48, tmp49] = items11;
  const tmp6Result17 = tmp6(tmp2[15]);
  class VoicePanelCardTsx12 {
    constructor() {
      obj = { mode: _undefined.get(), focused: _undefined2.get(), transitionState: _undefined3.get() };
      return obj;
    }
  }
  const items12 = [tmp47, tmp48, tmp49];
  VoicePanelCardTsx12.__closure = items12;
  VoicePanelCardTsx12.__workletHash = 13478324363917;
  VoicePanelCardTsx12.__initData = tmp46;
  const items13 = [closure_49, , , , , , , , ];
  const useAnimatedReaction2 = tmp6Result17.useAnimatedReaction;
  items13[1] = tmp6(tmp2[46]).cheapWorkletShallowEqual;
  items13[2] = tmp11;
  items13[3] = tmp6(tmp2[47]).TransitionStates;
  items13[4] = sharedVisible;
  items13[5] = isScrollVisible;
  items13[6] = tmp6(tmp2[28]).scheduleOnRN;
  items13[7] = cleanUp;
  items13[8] = id;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58] = items13;
  class VoicePanelCardTsx13 {
    constructor(mode, transitionState) {
      const tmp = c0;
      const tmp2 = transitionState;
      if (!tmp(mode, tmp2)) {
        ({ focused, transitionState } = mode);
        mode = mode.mode;
        const PIP = _undefined.PIP;
        if (focused != null) {
          id = focused.id;
        }
        if (null == transitionState) {
          if (transitionState !== _undefined2.YEETED) {
            const result = _undefined3.set(1);
          }
        }
        if (transitionState === _undefined2.YEETED) {
          obj = _undefined3;
          if (1 === _undefined3.get()) {
            if (_undefined4.get()) {
              const result1 = obj.set(0);
            }
          }
          _undefined5(c6);
        } else {
          let transitionState1;
          if (transitionState != null) {
            transitionState1 = transitionState.transitionState;
          }
          if (transitionState1 === tmp5.YEETED) {
            const result2 = _undefined3.set(1);
          } else if (mode !== PIP) {
            if (null == id) {
              const result3 = _undefined3.set(1);
            } else if (id !== c7) {
              const result4 = _undefined3.set(0);
            } else {
              const result5 = _undefined3.set(1);
            }
          }
        }
      }
    }
  }
  const items14 = [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58];
  VoicePanelCardTsx13.__closure = items14;
  VoicePanelCardTsx13.__workletHash = 3146139627673;
  VoicePanelCardTsx13.__initData = tmp50;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelCardTsx12, VoicePanelCardTsx13);
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = sharedValue.set(transitionState);
  });
  closure_11 = tmp61;
  const tmp6Result18 = tmp6(tmp2[43]);
  const token = tmp6Result18.useToken(tmp(tmp2[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const items15 = [closure_56, coords, focused, id, tmp61, pIPState, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const useAnimatedStyle = tmp6(tmp2[15]).useAnimatedStyle;
  tmp6(tmp2[15]);
  items15[6] = tmp6(tmp2[51]).getScaledPIPContainerHeight;
  items15[7] = tmp6(tmp2[51]).getClampedPIPPosition;
  items15[8] = wrapperDimensions;
  items15[9] = windowDimensions;
  items15[10] = safeArea;
  items15[11] = pipAvoidanceSpecs;
  items15[12] = derivedValue1;
  items15[13] = derivedValue2;
  items15[14] = tmp(tmp2[52]);
  items15[15] = contentDimensions;
  items15[16] = sharedValue;
  items15[17] = tmp6(tmp2[47]).TransitionStates;
  items15[18] = derivedValue;
  items15[19] = tmp(tmp2[44]);
  items15[20] = tmp5;
  items15[21] = isSelf;
  items15[22] = token;
  items15[23] = sharedVisible;
  items15[24] = isRTCConnected;
  items15[25] = 0.75;
  items15[26] = wrapperOffset;
  items15[27] = tmp6(tmp2[15]).withDelay;
  items15[28] = tmp6(tmp2[38]).withTiming;
  items15[29] = closure_29;
  items15[30] = closure_28;
  items15[31] = isScrollVisible;
  items15[32] = closure_55;
  items15[33] = tmp6(tmp2[28]).scheduleOnRN;
  items15[34] = cleanUp;
  items15[35] = isDockEnabled && !isRTCConnected;
  items15[36] = tmp6(tmp2[39]).withSpring;
  items15[37] = layoutPhysics;
  items15[38] = obj;
  items15[39] = SCALE_PHYSICS;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c16;
  let c17;
  let c18;
  let c19;
  let c20;
  let c21;
  let c22;
  let c23;
  let c24;
  let c25;
  let c26;
  let c27;
  let c28;
  let c29;
  let c30;
  let c31;
  let c32;
  let c33;
  let c34;
  let c35;
  let c36;
  let c37;
  let c38;
  [tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104] = items15;
  class VoicePanelCardTsx19 {
    constructor() {
      let height;
      let height2;
      let id1;
      let items2;
      let num;
      let num2;
      let num3;
      let num6;
      let str;
      let sum;
      let tmp14;
      let tmp31;
      let tmp32;
      let tmp33;
      let tmp34;
      let tmp35;
      let tmp36;
      let tmp37;
      let tmp38;
      let width;
      let width2;
      let x;
      let y;
      let zIndex;
      const value = _undefined.get();
      ({ zIndex, width, height, x, y } = value);
      const value6 = _undefined2.get();
      id = undefined;
      if (value6 != null) {
        id = value6.id;
      }
      const tmp4 = c2;
      const tmp6 = c3;
      if (tmp6) {
        const scale = _undefined5.scale;
        const value7 = scale.get();
        const result = _undefined5.width * value7;
        height2 = _undefined5.height * value7;
        const obj3 = { height: null, containerHeight: null, showSecondaryPIP: null, scale: value7 };
        ({ height: obj2.height, containerHeight: obj2.containerHeight, showSecondaryPIP: obj2.showSecondaryPIP } = _undefined5);
        size = { pipX: _undefined8.get().pipX, pipY: _undefined8.get().pipY, width: result, height: tmp14, windowDimensions: _undefined9.get(), safeArea: _undefined10.get(), bottomAvoidanceRegion: _undefined11.get().bottom, topAvoidanceRegion: _undefined11.get().top };
        tmp14 = _undefined6(obj3);
        const point = _undefined7(size);
        num = point.x;
        sum = _undefined12.get() + point.y;
        width2 = result;
        num2 = zIndex;
      } else if (null != _undefined2.get()) {
        sum = y;
        num = x;
        height2 = height;
        width2 = width;
        num2 = 0;
        if (id === c2) {
          width2 = _undefined9.get().width;
          height2 = _undefined9.get().height;
          sum = _undefined12.get();
          num2 = 1;
          num = 0;
        }
      } else {
        const sum1 = x + _undefined13.get();
        const obj5 = { contentHeight: _undefined15.get().height, windowHeight: _undefined9.get().height, safeArea: _undefined10.get() };
        const sum2 = y + _undefined14(obj5);
        sum = sum2;
        num = sum1;
        height2 = height;
        width2 = width;
        num2 = zIndex;
        if (_undefined16.get() === _undefined17.YEETED) {
          sum = sum2 + height / 4;
          num = sum1;
          height2 = height;
          width2 = width;
          num2 = zIndex;
        }
      }
      const obj4 = _undefined18;
      if (_undefined18.get()) {
        num2 = 9001;
      }
      const obj7 = { id: tmp4, mode: _undefined19.get(), focused: id1, isSelf, defaultBorderRadius };
      const value8 = obj.get();
      id1 = undefined;
      const tmp21 = c18;
      if (value8 != null) {
        id1 = value8.id;
      }
      const tmp21Result = tmp21(obj7);
      if (0 !== _undefined20.get()) {
        let num5 = 1;
        if (id !== c2) {
          num5 = 1;
          if (!c23) {
            num5 = c24;
          }
        }
        num3 = num5;
      } else {
        const value9 = obj.get();
        id2 = undefined;
        if (value9 != null) {
          id2 = value9.id;
        }
        num3 = 0;
      }
      const gestureActive = _undefined21.get().gestureActive;
      if (1 === _undefined20.get()) {
        num6 = 1;
      } else {
        const value10 = obj.get();
        let id3;
        if (value10 != null) {
          id3 = value10.id;
        }
        num6 = 0.8;
      }
      let num7 = 100;
      const tmp30 = c26;
      if (obj4.get()) {
        num7 = 0;
      }
      const size1 = { zIndex: tmp30(num7, _undefined22(num2, c28)), opacity: tmp31(num3, tmp32, str, VoicePanelCardTsx18), width: width2, height: height2, transform: items2, borderRadius: _undefined24(tmp21Result, c38) };
      str = "animate-never";
      tmp31 = _undefined22;
      tmp32 = c29;
      if (_undefined23.get()) {
        str = "animate-always";
      }
      const items = [c31, _undefined20, _undefined16, _undefined17, c32, c33];
      [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items;
      class VoicePanelCardTsx18 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            num = 0;
            tmp = 0 === closure_0.get();
          }
          if (tmp) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp = closure_1.get() === closure_2.YEETED;
          }
          if (tmp) {
            tmp5 = closure_3;
            tmp6 = closure_4;
            tmp7 = closure_3(closure_4);
          }
          return;
        }
      }
      const items1 = [tmp34, tmp35, tmp36, tmp37, tmp38];
      VoicePanelCardTsx18.__closure = items1;
      VoicePanelCardTsx18.__workletHash = 5099113999013;
      VoicePanelCardTsx18.__initData = tmp33;
      let tmp39 = num;
      if (!gestureActive) {
        tmp39 = num;
        if (!c34) {
          tmp39 = _undefined24(num, c36, "respect-motion-settings");
        }
      }
      items2 = [{ translateX: tmp39 }, , ];
      let tmp43 = sum;
      if (!gestureActive) {
        tmp43 = sum;
        if (!c34) {
          tmp43 = _undefined24(sum, c36, "respect-motion-settings");
        }
      }
      items2[1] = { translateY: tmp43 };
      items2[2] = { scale: _undefined24(num6, c37) };
      ({ scale: _undefined24(num6, c37) });
      return size1;
    }
  }
  const items16 = [tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104];
  VoicePanelCardTsx19.__closure = items16;
  VoicePanelCardTsx19.__workletHash = 9981854611383;
  VoicePanelCardTsx19.__initData = tmp65;
  const animatedStyle = useAnimatedStyle(VoicePanelCardTsx19);
  let obj4 = {
    gesturesEnabled: first,
    onSingleTap() {
      if (_undefined.get().mode === VoicePanelControlsModes.HIDDEN) {
        _undefined4({ debounce: true });
      } else {
        _undefined2({ debounce: true });
      }
    },
    onDoubleTap: fn,
    onLongPress: fn2
  };
  const tmpResult = tmp(tmp2[53]);
  const tmp6Result20 = tmp6(tmp2[50]);
  if (tmp6Result20.isStableActivityParticipant(tmp8)) {
    fn = () => {
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
  fn2 = undefined;
  if (null != id2) {
    fn2 = () => {
      obj = { userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      return showUserProfileActionSheetDefault(obj);
    };
  }
  const items17 = [pipHandoff, id, tmp61];
  const tmpResultResult = tmpResult(obj4);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_11);
  }, items17);
  const items18 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items18);
  const tmp6Result22 = tmp6(tmp2[15]);
  sharedValue1 = tmp6Result22.useSharedValue(0);
  const items19 = [pipHandoff, id];
  callback1 = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items19);
  const items20 = [tmp61, layoutPhysics, sharedValue1, callback1];
  const effect1 = obj.useEffect(() => {
    let tmp11;
    let tmp12;
    let tmp13;
    const tmp = closure_11;
    if (tmp) {
      const result = sharedValue1.set(0);
      set = sharedValue1.set;
      const items = [closure_57, , ];
      const withSpring = spring_spring.withSpring;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = callback1;
      let c0;
      let c1;
      [tmp11, tmp12, tmp13] = items;
      class VoicePanelCardTsx20 {
        constructor(arg0) {
          if (true === arg0) {
            _undefined(c1);
          }
        }
      }
      const items1 = [tmp12, tmp13];
      VoicePanelCardTsx20.__closure = items1;
      VoicePanelCardTsx20.__workletHash = 1749161961019;
      VoicePanelCardTsx20.__initData = tmp11;
      const result1 = set(withSpring(1, tmp7, "animate-always", VoicePanelCardTsx20));
      return () => {
        obj = id(analyticsLocations[15]);
        return obj.cancelAnimation(sharedValue1);
      };
    }
  }, items20);
  let scale = pIPState.scale;
  const tmp6Result23 = tmp6(tmp2[15]);
  const sharedValue2 = tmp6Result23.useSharedValue(scale.get());
  const items21 = [closure_58, pIPState, sharedValue2, tmp10, , , ];
  const useCallback2 = obj.useCallback;
  items21[4] = tmp6(tmp2[39]).withSpring;
  items21[5] = layoutPhysics;
  items21[6] = wrapperOffset;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  react = undefined;
  c5 = undefined;
  [tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120] = items21;
  class VoicePanelCardTsx21 {
    constructor(currentOriginX) {
      let size1;
      let scale = _undefined.scale;
      let value = scale.get();
      let result = value / _undefined2.get();
      size = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth * result, height: currentOriginX.currentHeight * result };
      let str = "respect-motion-settings";
      if (c2) {
        str = "animate-never";
      }
      obj = {
        animations: size1,
        initialValues: size,
        callback() {
          const value = closure_1_5.get();
          let gestureActive = value.gestureActive;
          obj = closure_1_5;
          if (!gestureActive) {
            gestureActive = 0 === value.y;
          }
          if (!gestureActive) {
            const result = obj.set({ gestureActive: false, x: 0, y: 0 });
          }
          scale = scale.scale;
          const result1 = _undefined2.set(scale.get());
        }
      };
      size1 = { originX: _undefined3(currentOriginX.targetOriginX, c4, str), originY: _undefined3(currentOriginX.targetOriginY, c4, str), width: _undefined3(currentOriginX.targetWidth, c4, str), height: _undefined3(currentOriginX.targetHeight, c4, str) };
      return obj;
    }
  }
  const items22 = [tmp115, tmp116, tmp117, tmp118, tmp119, tmp120];
  VoicePanelCardTsx21.__closure = items22;
  VoicePanelCardTsx21.__workletHash = 15285426827618;
  VoicePanelCardTsx21.__initData = tmp114;
  const items23 = [tmp10, layoutPhysics, wrapperOffset, sharedValue2, pIPState.scale];
  const callback2 = useCallback2(VoicePanelCardTsx21, items23);
  let obj5 = { gesture: tmpResultResult, children: closure_22(View, obj6) };
  const GestureDetector = tmp6(tmp2[55]).GestureDetector;
  obj6 = { nativeID: tmp6Result24.getExternalPipTileNativeId("card", id), style: items24, layout: callback2, children };
  View = tmp(tmp2[15]).View;
  items24 = [tmp3.positionWrapper, animatedStyle];
  tmp6Result24 = tmp6(tmp2[56]);
  return closure_22(GestureDetector, obj5);
}
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
const Pressable = react_native.Pressable;
({ VoicePanelCTACard: unpackModuleId, VoicePanelModes: closure_12, MODE_CHANGE_PHYSICS: map1, SPEAKING_PHYSICS: closure_14, VoicePanelCardItemType: closure_15 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const ParticipantTypes = CallConstants.ParticipantTypes;
const SCALE_PHYSICS = MorphablePanelConstants.SCALE_PHYSICS;
({ jsx: closure_22, Fragment: closure_23, jsxs: closure_24 } = Fragment);
let module_1652 = module_1652_mod;
let closure_25 = module_1652.createAnimatedComponent(Text_Text.Text);
module_1652 = module_1652_mod;
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
let tmp5 = native.AVATAR_SIZE_MAP[native.AvatarSizes.XXLARGE];
let obj = { stiffness: 150 };
let merged = Object.assign(SCALE_PHYSICS);
let closure_28 = { duration: 200 };
let closure_29 = { duration: 0 };
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
let closure_30 = createStyles(obj2);
let closure_31 = { code: "(function VoicePanelCardTsx1(){let[isFocused,sharedCoords]=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};})" };
let closure_33 = { code: "(function VoicePanelCardTsx2(){let[focused,id]=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;})" };
let closure_34 = { code: "(function VoicePanelCardTsx3(isFocused,lastIsFocused){let[scheduleOnRN,setIsFocused]=this.__closure;if(isFocused!==lastIsFocused){scheduleOnRN(setIsFocused,isFocused);}})" };
let closure_35 = react.memo(function AnimatedStreamCard(arg0) {
  let focused;
  let id;
  let intl;
  let intl2;
  let intl3;
  let isScrollVisible;
  let items7;
  let layout;
  let mode;
  let obj7;
  let sharedCoords;
  let streamGuildId;
  let streamId;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp4Result;
  let tmp8;
  let tmp9;
  let userId;
  let userNick;
  ({ id, userId } = arg0);
  ({ streamId, streamGuildId } = arg0);
  ({ sharedCoords, layout } = arg0);
  let setFocused;
  ({ userNick, isSelf, isScrollVisible } = arg0);
  const context = react.useContext(streamGuildId(setFocused[27]));
  setFocused = context.setFocused;
  ({ focused, mode } = context);
  obj = userId(setFocused[21]);
  const items = [ApplicationStreamingStore];
  const items1 = [userId, streamGuildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    obj = { stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId), activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId) };
    return obj;
  }, items1);
  const stream = stateFromStoresObject.stream;
  const activeStream = stateFromStoresObject.activeStream;
  const items2 = [stream, setFocused];
  const callback = react.useCallback(() => {
    if (null != stream) {
      obj = StreamActionCreators;
      obj.watchStream(stream, { forceMultiple: true });
      const obj2 = StreamKeyUtils;
      setFocused(obj2.encodeStreamKey(stream));
    }
  }, items2);
  [tmp8, tmp9] = stream(react.useState(false), 2);
  stream(react.useState(false), 2);
  const items3 = [closure_33, focused, id];
  let c0;
  let c1;
  [tmp11, tmp12, tmp13] = items3;
  const tmp10 = userId(setFocused[15]);
  class VoicePanelCardTsx2 {
    constructor() {
      const value = _undefined.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      return id === c1;
    }
  }
  const items4 = [tmp12, tmp13];
  VoicePanelCardTsx2.__closure = items4;
  VoicePanelCardTsx2.__workletHash = 10075488097657;
  VoicePanelCardTsx2.__initData = tmp11;
  const items5 = [closure_34, , ];
  const useAnimatedReaction = tmp10.useAnimatedReaction;
  items5[1] = userId(setFocused[28]).scheduleOnRN;
  items5[2] = tmp9;
  c0 = undefined;
  c1 = undefined;
  [tmp14, tmp15, tmp16] = items5;
  class VoicePanelCardTsx3 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items6 = [tmp15, tmp16];
  VoicePanelCardTsx3.__closure = items6;
  VoicePanelCardTsx3.__workletHash = 10405109597495;
  VoicePanelCardTsx3.__initData = tmp14;
  const animatedReaction = useAnimatedReaction(VoicePanelCardTsx2, VoicePanelCardTsx3);
  const tmpResult = streamGuildId(setFocused[29]);
  const tmpResultResult = tmpResult(userId(setFocused[30]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    let obj2 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_22(SelfStreamCard, obj2);
  } else if (null == activeStream) {
    const obj3 = { mode, stream, onPress: callback, disabled: false, layout };
    return closure_22(userId(setFocused[31]).VoicePanelStreamPreview, obj3);
  } else {
    if (null == tmpResultResult) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj4 = { stream: activeStream, removeSplashImage: !tmp8, type: userId(setFocused[32]).VideoEmptyTypes.STREAM_ENDED, style: StyleSheet.absoluteFill };
          const tmpResult4 = streamGuildId(setFocused[32]);
          return closure_22(tmpResult4, obj4);
        } else {
          let tmp22;
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj5 = { title: intl.string(userId(setFocused[25]).t["pdFFK+"]) };
            const StreamTextOverlay = tmp4(tmp2[33]).StreamTextOverlay;
            intl = tmp4(tmp2[25]).intl;
            tmp22 = closure_22(StreamTextOverlay, obj5);
          } else {
            tmp22 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj6 = { title: intl2.string(userId(setFocused[25]).t["5q17w5"]), subtext: intl3.formatToPlainString(userId(setFocused[25]).t.meVVlb, obj7) };
              const StreamTextOverlay2 = tmp4(tmp2[33]).StreamTextOverlay;
              intl2 = tmp4(tmp2[25]).intl;
              intl3 = tmp4(tmp2[25]).intl;
              obj7 = { username: userNick };
              tmp22 = closure_22(StreamTextOverlay2, obj6);
            }
          }
          const obj8 = { layout, id, streamId, userId, streamKey: tmp4Result.encodeStreamKey(activeStream), isScrollVisible, videoSpinnerContext: userId(setFocused[35]).VideoSpinnerContext.REMOTE_STREAM, sharedCoords, isCamera: false, paused: activeStream.state === ApplicationStreamStates.PAUSED };
          const tmp23 = closure_24;
          const tmp24 = closure_23;
          const tmp25 = closure_22;
          const tmpResult5 = streamGuildId(setFocused[34]);
          if (streamId == null) {
            streamId = null;
          }
          const obj9 = { children: items7 };
          tmp4Result = userId(setFocused[23]);
          items7 = [tmp25(tmpResult5, obj8), tmp22];
          return tmp23(tmp24, obj9);
        }
      }
    }
    const obj10 = { avError: tmpResultResult, stream: activeStream, removeSplashImage: !tmp8, type: userId(setFocused[32]).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill };
    const tmpResult6 = streamGuildId(setFocused[32]);
    return closure_22(tmpResult6, obj10);
  }
});
let closure_36 = { code: "(function VoicePanelCardTsx4(){let[isDockEnabled,mode,VoicePanelModes]=this.__closure;return isDockEnabled&&mode.get()===VoicePanelModes.PIP?VoicePanelModes.PANEL:mode.get();})" };
let closure_38 = { code: "(function VoicePanelCardTsx5(){let[withTiming,isRinging,CONNECTING_OPACITY,backgroundColor]=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};})" };
let closure_39 = { code: "(function VoicePanelCardTsx6(){let[withSpring,mode,VoicePanelModes,layoutPhysics]=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};})" };
let closure_40 = react.memo(function AnimatedUserCardInner(guildId) {
  let View2;
  let View4;
  let avatarDecoration;
  let avatarURI;
  let isRinging;
  let items5;
  let items6;
  let items7;
  let layout;
  let layoutPhysics;
  let obj4;
  let obj8;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp23Result;
  let tmp27;
  let tmp27Result3;
  let tmp27Result4;
  let tmp29;
  let tmp8;
  let tmp9;
  let userId;
  ({ layout, avatarURI, avatarDecoration, userId } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ isRinging, layoutPhysics } = guildId);
  let tmp = closure_30();
  obj = react;
  let tmp2 = guildId;
  const controlsSpecs = react.useContext(guildId(channelId[27])).controlsSpecs;
  const tmp4 = useCardPanelMode();
  const tmp5 = guildId(channelId[36])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" });
  const gradientStops = tmp5.gradientStops;
  const backgroundColor = tmp5.backgroundColor;
  const MobileRequestToStreamExperiment = userId(channelId[37]).MobileRequestToStreamExperiment;
  let str = guildId;
  const useConfig = MobileRequestToStreamExperiment.useConfig;
  if (guildId == null) {
    str = "";
  }
  const enabled = useConfig({ guildId: str, location: "VoicePanelCard" }).enabled;
  let items = [closure_38, , , , ];
  const useAnimatedStyle = tmp6(tmp3[15]).useAnimatedStyle;
  userId(channelId[15]);
  items[1] = userId(channelId[38]).withTiming;
  items[2] = isRinging;
  items[3] = 0.75;
  items[4] = backgroundColor;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class VoicePanelCardTsx5 {
    constructor() {
      let num = 1;
      const tmp = c0;
      if (c1) {
        num = c2;
      }
      obj = { opacity: tmp(num, { duration: 100 }, "animate-always"), backgroundColor };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12];
  VoicePanelCardTsx5.__closure = items1;
  VoicePanelCardTsx5.__workletHash = 3534867939077;
  VoicePanelCardTsx5.__initData = tmp8;
  const animatedStyle = useAnimatedStyle(VoicePanelCardTsx5);
  const items2 = [closure_39, , , , ];
  const useAnimatedStyle2 = tmp6(tmp3[15]).useAnimatedStyle;
  userId(channelId[15]);
  items2[1] = userId(channelId[39]).withSpring;
  items2[2] = tmp4;
  items2[3] = closure_12;
  items2[4] = layoutPhysics;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19] = items2;
  class VoicePanelCardTsx6 {
    constructor() {
      let items;
      let num = 1;
      if (_undefined.get() === _undefined2.PIP) {
        num = 0.8;
      }
      obj = { transform: items };
      items = [{ scale: tmp(num, c3) }];
      ({ scale: _undefined(num, c3) });
      return obj;
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19];
  VoicePanelCardTsx6.__closure = items3;
  VoicePanelCardTsx6.__workletHash = 9535486944330;
  VoicePanelCardTsx6.__initData = tmp15;
  let cachedSourceFromURI;
  const animatedStyle2 = useAnimatedStyle2(VoicePanelCardTsx6);
  if (null != avatarURI) {
    const tmp6Result4 = userId(channelId[40]);
    cachedSourceFromURI = tmp6Result4.getCachedSourceFromURI(avatarURI);
  }
  const items4 = [guildId, channelId, userId, controlsSpecs];
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
      obj = VoicePanelUserActionCreators;
      const result = obj.openVoicePanelUserActionSheet(tmp, channelId, userId);
    }
  }, items4);
  if (null != avatarDecoration) {
    const obj2 = { source: cachedSourceFromURI, size: tmp6(tmp3[18]).AvatarSizes.XXLARGE, avatarDecoration };
    const Avatar = tmp6(tmp3[18]).Avatar;
    tmp23Result = closure_22(Avatar, obj2);
    tmp27 = closure_22;
  } else {
    size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
    const tmp2Result = tmp2(channelId[42]);
    tmp23Result = tmp23(tmp2Result, size);
    tmp27 = tmp23;
  }
  const obj3 = { style: tmp.userRoundedCard, layout, children: tmp29(View2, obj4) };
  const View = tmp2(tmp3[15]).View;
  obj4 = { style: items5, children: items6 };
  items5 = [tmp.userRoundedCardContent, animatedStyle];
  let tmp27Result = null;
  View2 = tmp2(tmp3[15]).View;
  tmp29 = closure_24;
  if (null != gradientStops) {
    const obj5 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
    tmp27Result = tmp27(LinearGradient, obj5);
  }
  items6 = [tmp27Result, ];
  if (null == cachedSourceFromURI) {
    const obj6 = { style: tmp.avatarPlaceholder };
    tmp27Result3 = tmp27(tmp2(tmp3[24]), obj6);
  } else {
    const obj7 = { layout, children: tmp27(View4, obj8) };
    const View3 = tmp2(tmp3[15]).View;
    let prop;
    View4 = tmp2(tmp3[15]).View;
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    obj8 = { style: items7, children: tmp27Result4 };
    items7 = [prop, animatedStyle2];
    tmp27Result4 = tmp23Result;
    if (enabled) {
      const obj9 = { onPress: callback, children: tmp23Result };
      tmp27Result4 = tmp27(Pressable, obj9);
    }
    tmp27Result3 = tmp27(View3, obj7);
  }
  items6[1] = tmp27Result3;
  return tmp27(View, obj3);
});
let closure_41 = { code: "(function VoicePanelCardTsx7(){let[mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS]=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};})" };
let closure_42 = { code: "(function VoicePanelCardTsx8(){let[mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET]=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};})" };
let closure_43 = { code: "(function VoicePanelCardTsx9(){let[mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE]=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};})" };
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
    obj = {};
    const merged = Object.assign(id);
    tmp4 = closure_22(SpeakingIndicator, obj);
  }
  return tmp4;
});
let closure_46 = { code: "(function VoicePanelCardTsx10(){let[focused]=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;})" };
let closure_47 = { code: "(function VoicePanelCardTsx11(focusedId,previous){let[scheduleOnRN,handleFocusedParticipantChange]=this.__closure;if(focusedId===previous)return;scheduleOnRN(handleFocusedParticipantChange,focusedId);})" };
let closure_48 = { code: "(function VoicePanelCardTsx12(){let[mode,focused,sharedTransitionState]=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};})" };
let closure_49 = { code: "(function VoicePanelCardTsx13(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,scheduleOnRN,cleanUp,id]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{scheduleOnRN(cleanUp);}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}})" };
let closure_50 = { isSelf: false, hasVideo: false, user: { id: "r" } };
let items = [{ code: "(function layoutTransitionFunction_VoicePanelCardTsx14(values,physics,scale,lastScale,disableAnimation=false){let[withSpring]=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();const shouldAnimate=!disableAnimation?'respect-motion-settings':'animate-never';return{animations:{originX:withSpring(values.targetOriginX,physics,shouldAnimate),originY:withSpring(values.targetOriginY,physics,shouldAnimate),width:withSpring(values.targetWidth,physics,shouldAnimate),height:withSpring(values.targetHeight,physics,shouldAnimate)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};})" }, spring_spring.withSpring];
let c0;
[tmp14, tmp15] = items;
function layoutTransitionFunction(originX, arg1, get, get2) {
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
  obj = {
    animations: size,
    initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth * result, height: originX.currentHeight * result },
    callback() {
      const result = closure_1.set(closure_0.get());
    }
  };
  size = { originX: _undefined(originX.targetOriginX, arg1, str), originY: _undefined(originX.targetOriginY, arg1, str), width: _undefined(originX.targetWidth, arg1, str), height: _undefined(originX.targetHeight, arg1, str) };
  return obj;
}
let items1 = [tmp15];
layoutTransitionFunction.__closure = items1;
layoutTransitionFunction.__workletHash = 17158796626665;
layoutTransitionFunction.__initData = tmp14;
let closure_52 = { code: "(function VoicePanelCardTsx15(){let[id,pipState,mode,VoicePanelModes]=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;})" };
let closure_53 = { code: "(function VoicePanelCardTsx16(){let[focused,id,mode,VoicePanelModes,scrollPosition]=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;})" };
let closure_54 = { code: "(function VoicePanelCardTsx17(){let[connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions]=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;})" };
let closure_55 = { code: "(function VoicePanelCardTsx18(finished){let[sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_56 = { code: "(function VoicePanelCardTsx19(){let[coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,_worklet_5099113999013_init_data,scheduleOnRN,cleanUp,holdPosition,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS]=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function VoicePanelCardTsx18Factory([_worklet_5099113999013_init_data,sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp]){const VoicePanelCardTsx18=function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};VoicePanelCardTsx18.__closure=[sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp];VoicePanelCardTsx18.__workletHash=5099113999013;VoicePanelCardTsx18.__initData=_worklet_5099113999013_init_data;return VoicePanelCardTsx18;}([_worklet_5099113999013_init_data,sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp])),width:width,height:height,transform:[{translateX:gestureActive||holdPosition?x:withSpring(x,layoutPhysics,'respect-motion-settings')},{translateY:gestureActive||holdPosition?y:withSpring(y,layoutPhysics,'respect-motion-settings')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};})" };
let closure_57 = { code: "(function VoicePanelCardTsx20(finished){let[scheduleOnRN,reportPIPArrival]=this.__closure;if(finished===true){scheduleOnRN(reportPIPArrival);}})" };
let closure_58 = { code: "(function VoicePanelCardTsx21(values){let[pipState,lastPIPScale,holdPosition,withSpring,layoutPhysics,wrapperOffset]=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};const motion=holdPosition?'animate-never':'respect-motion-settings';return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,motion),originY:withSpring(values.targetOriginY,layoutPhysics,motion),width:withSpring(values.targetWidth,layoutPhysics,motion),height:withSpring(values.targetHeight,layoutPhysics,motion)},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};})" };
let closure_60 = { code: "(function VoicePanelCardTsx22(){let[EDGE_GUTTER,coords,scrollPosition,windowDimensions]=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;})" };
let closure_61 = { code: "(function VoicePanelCardTsx23(values,disableAnimation=false){let[layoutTransitionFunction,physics,pipState,lastPipScale,holdPosition]=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation||holdPosition);})" };
const memoResult = react.memo(function VoicePanelCard(cleanUp) {
  let DEFAULT;
  let VideoSpinnerContext;
  let channelId;
  let connected;
  let guildId;
  let isCall;
  let isDockEnabled;
  let item;
  let items7;
  let layoutManager;
  let mountedCards;
  let num;
  let scrollPosition;
  let streamId;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp42;
  let tmp43;
  let transitionState;
  let user;
  let userAvatarDecoration;
  let userNick;
  let windowDimensions;
  ({ item, transitionState } = cleanUp);
  let id2;
  let sharedValue2;
  const id = item.id;
  obj = react;
  let tmp = sharedValue2;
  let tmp2 = dependencyMap;
  cleanUp = cleanUp.cleanUp;
  const context = react.useContext(sharedValue2(11394));
  ({ channelId, guildId, isCall, isDockEnabled, mountedCards, layoutManager, scrollPosition, windowDimensions } = context);
  const tmp4 = sharedValue2(19657)(id, channelId, guildId);
  let tmp6 = tmp4;
  const obj2 = id2(19657);
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_50;
  }
  isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  const items = [RTCConnectionStore];
  const tmp5Result = id2(504);
  const stateFromStores = tmp5Result.useStateFromStores(items, () => connected.isConnected());
  const tmp5Result10 = id2(19657);
  const tmp8 = tmp5Result10.isStableUserParticipant(tmp4) && tmp4.ringing;
  let str = "";
  if (null != tmp4) {
    str = "";
    if ("user" in tmp4) {
      str = tmp4.user.id;
    }
  }
  let type1;
  const tmpResult = tmp(11953);
  if (tmp4 != null) {
    type1 = tmp4.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    DEFAULT = tmp5(5950).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(5950).MediaEngineContextTypes.DEFAULT;
  }
  const tmpResultResult = tmpResult(DEFAULT, str);
  const tmp13 = tmp(19684)(str);
  const useSharedValue = tmp5(1652).useSharedValue;
  id2(1652);
  if (transitionState === id2(5231).TransitionStates.MOUNTED) {
    num = 1;
  } else {
    num = 0;
  }
  const sharedValue = useSharedValue(num);
  let tmp17 = null != id2;
  const useSharedValue2 = tmp5(1652).useSharedValue;
  id2(1652);
  if (tmp17) {
    let isSpeakingResult = SpeakingStore.isSpeaking(id2) || SoundboardStore.isUserPlayingSounds(id2);
    tmp17 = isSpeakingResult;
  }
  sharedValue2 = useSharedValue2(tmp17);
  const items1 = [id2, sharedValue2];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      let tmp3 = null != handleChange;
      if (tmp3) {
        tmp3 = SpeakingStore.isSpeaking(tmp2) || defaultBorderRadius.isUserPlayingSounds(tmp2);
        const isSpeakingResult = SpeakingStore.isSpeaking(tmp2) || defaultBorderRadius.isUserPlayingSounds(tmp2);
      }
      const result = set(tmp3);
    }
    const tmp2 = handleChange;
    let tmp3 = null != handleChange;
    set = sharedValue2.set;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
      if (!isSpeakingResult) {
        isSpeakingResult = defaultBorderRadius.isUserPlayingSounds(tmp2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = defaultBorderRadius.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result13 = id2(11397);
  const cardLayoutCoordsSubscription = tmp5Result13.useCardLayoutCoordsSubscription(id, layoutManager);
  const items2 = [closure_60, EDGE_GUTTER, cardLayoutCoordsSubscription, scrollPosition, windowDimensions];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
  const tmp5Result14 = id2(1652);
  class VoicePanelCardTsx22 {
    constructor() {
      const sum = c0 + _undefined.get().y;
      const value = _undefined2.get();
      let tmp3 = sum > value - _undefined.get().height;
      obj = _undefined2;
      if (tmp3) {
        const value2 = obj.get();
        tmp3 = sum < value2 + _undefined3.get().height;
      }
      return tmp3;
    }
  }
  const items3 = [tmp25, tmp26, tmp27, tmp28];
  VoicePanelCardTsx22.__closure = items3;
  VoicePanelCardTsx22.__workletHash = 8849523770324;
  VoicePanelCardTsx22.__initData = tmp24;
  const derivedValue = tmp5Result14.useDerivedValue(VoicePanelCardTsx22);
  const tmp5Result15 = id2(19613);
  const pIPState = tmp5Result15.usePIPState();
  let scale = pIPState.scale;
  const tmp5Result16 = id2(1652);
  const sharedValue1 = tmp5Result16.useSharedValue(scale.get());
  if (isDockEnabled) {
    isDockEnabled = !stateFromStores;
  }
  const memo = obj.useMemo(() => {
    obj = { mass: closure_1_13.mass, damping: sharedValue2(dependencyMap[59])(closure_1_13.damping - 2, closure_1_13.damping + 2), stiffness: sharedValue2(dependencyMap[59])(closure_1_13.stiffness - 20, closure_1_13.stiffness + 20) };
    return obj;
  }, []);
  const items4 = [closure_61, layoutTransitionFunction, memo, pIPState, sharedValue1, isDockEnabled];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items4;
  class VoicePanelCardTsx23 {
    constructor(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      const scale = _undefined.scale;
      const tmp = c0;
      const tmp2 = c1;
      const tmp3 = c3;
      if (!flag) {
        flag = c4;
      }
      return tmp(arg0, tmp2, scale, tmp3, flag);
    }
  }
  const items5 = [tmp34, tmp35, tmp36, tmp37, tmp38];
  VoicePanelCardTsx23.__closure = items5;
  VoicePanelCardTsx23.__workletHash = 8963961843367;
  VoicePanelCardTsx23.__initData = tmp33;
  const items6 = [isDockEnabled, memo, pIPState.scale, sharedValue1];
  const callback = obj.useCallback(VoicePanelCardTsx23, items6);
  if (item.type === closure_15.CTA) {
    const id3 = item.id;
    if (closure_11.NO_VIDEO_PARTICIPANTS === id3) {
      tmp42 = closure_22(tmp(19686), {});
      tmp43 = closure_22;
    } else if (closure_11.CALLER_DISCONNECTED === id3) {
      tmp42 = closure_22(tmp(19687), {});
      tmp43 = closure_22;
    } else if (closure_11.NO_STAGE_SPEAKERS === id3) {
      tmp42 = closure_22(tmp(19688), {});
      tmp43 = closure_22;
    }
    const obj3 = { cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: memo, transitionState, sharedVisible: sharedValue, children: items7 };
    items7 = [tmp42, , ];
    let tmp43Result = null != tmp4;
    const tmp57 = closure_24;
    const tmp58 = AnimatedWrapper;
    if (tmp43Result) {
      const obj4 = { isRinging: tmp8, participant: tmp4, label: userNick, layout: callback };
      userNick = undefined;
      const tmpResult3 = tmp(19700);
      const tmp5Result17 = id2(19657);
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      tmp43Result = tmp43(tmpResult3, obj4);
    }
    items7[1] = tmp43Result;
    const tmp5Result18 = id2(19657);
    let result = tmp5Result18.isStableParticipantWithUser(tmp4);
    if (result) {
      const obj5 = { speakingOrPlayingSoundboard: sharedValue2, id, userId: tmp4.user.id, isSelf, layout: callback };
      result = tmp43(closure_45, obj5);
    }
    items7[2] = result;
    return tmp57(tmp58, obj3);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      let tmp45;
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          let tmp45Result;
          if (tmp4.canRenderVideo) {
            let tmp48;
            if (null != tmpResultResult) {
              let tmp48Result;
              if (null == tmp13) {
                const obj6 = { avError: tmpResultResult, userId: user.id, style: StyleSheet.absoluteFill };
                tmp48Result = closure_22(tmp(19689), obj6);
                tmp48 = closure_22;
              }
              tmp45 = tmp48;
              tmp45Result = tmp48Result;
            }
            tmp48 = closure_22;
            const obj7 = { id: tmp44, userId: user.id, streamId, isScrollVisible: derivedValue, videoSpinnerContext: isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, sharedCoords: cardLayoutCoordsSubscription, isCamera: true, focusOnReady: isCall, layout: callback };
            const tmpResult4 = tmp(19678);
            if (streamId == null) {
              streamId = null;
            }
            VideoSpinnerContext = tmp5(11962).VideoSpinnerContext;
            if (isCall) {
              isCall = !isSelf;
            }
            tmp48Result = tmp48(tmpResult4, obj7);
          }
          tmp43 = tmp45;
          tmp42 = tmp45Result;
        }
      }
      tmp45 = closure_22;
      let flag = false;
      const obj8 = { isRinging: tmp8, avatarURI: user.getAvatarURL(guildId, 80, false), avatarDecoration: userAvatarDecoration, layout: callback, layoutPhysics: memo, userId: user.id, guildId, channelId };
      userAvatarDecoration = tmp4.userAvatarDecoration;
      tmp45Result = tmp45(closure_40, obj8);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj10 = { userId: tmp4.user.id, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf, sharedCoords: cardLayoutCoordsSubscription, isScrollVisible: derivedValue, layout: callback };
      ({ id: obj9.id, streamGuildId: obj9.streamGuildId, streamId: obj9.streamId, userNick: obj9.userNick } = tmp4);
      tmp42 = closure_22(closure_35, obj10);
      tmp43 = closure_22;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj11 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: callback };
      tmp42 = closure_22(tmp(19690), obj11, tmp4.id);
      tmp43 = closure_22;
    }
  }
  const obj12 = { isRinging: tmp8, avatarURI: "a", avatarDecoration: "isArray", layout: callback, layoutPhysics: memo, channelId };
  tmp42 = closure_22(closure_40, obj12);
  tmp43 = closure_22;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default memoResult;
