// Module ID: 18552
// Function ID: 18553
// Name: VoicePanelCard
// Dependencies: [32, 19, 17, 6006, 6642, 5714, 6685, 10897, 10895, 18442, 10900, 1087, 5632, 10898, 21, 5052, 5234, 5258, 1202, 4971, 587, 558, 576, 504, 7829, 6645, 6886, 1128, 5244, 10896, 11421, 5739, 14319, 11423, 11420, 18553, 11429, 18438, 5206, 5247, 9419, 5669, 7168, 5252, 18555, 12070, 9976, 5037, 7253, 18487, 18499, 18441, 18556, 8668, 18557, 5826, 5297, 18558, 10899, 18559, 18560, 18561, 18562, 18563, 18573, 2]

// Module 18552 (VoicePanelCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import native from "native" /* 1202 */;
import native2 from "native" /* 5037 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5052 */;
import timing from "timing" /* 5206 */;
import Text_Text from "Text/Text" /* 5234 */;
import spring from "spring" /* 5247 */;
import LinearGradientDefault from "LinearGradient" /* 5258 */;
import CallConstants from "CallConstants" /* 5632 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6645 */;
import StreamActionCreators from "StreamActionCreators" /* 7829 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8668 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9976 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 10895 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10898 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 10900 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12070 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 18441 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 18442 */;
import computeCardBorderRadiusDefault from "computeCardBorderRadius" /* 18555 */;
import calculateContentCenterOffsetDefault from "calculateContentCenterOffset" /* 18556 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import SoundboardStore_mod from "SoundboardStore" /* 6006 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;
import SpeakingStore from "SpeakingStore" /* 6685 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10897 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport_mod = ReanimatedRexport2;
let _require, currentUserActiveStream, dependencyMap, importDefault, set;

let c10;
let closure_12;
let closure_14;
let closure_21;
let closure_22;
let closure_23;
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
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
let SoundboardStore = SoundboardStore_mod;
({ VoicePanelCTACard: c10, VoicePanelModes: unpackModuleId, MODE_CHANGE_PHYSICS: closure_12, SPEAKING_PHYSICS: map1, VoicePanelCardItemType: closure_14 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const ParticipantTypes = CallConstants.ParticipantTypes;
const SCALE_PHYSICS = MorphablePanelConstants.SCALE_PHYSICS;
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let scale = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
ReanimatedRexport = ReanimatedRexport_mod;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let tmp4 = native.AVATAR_SIZE_MAP[native.AvatarSizes.XXLARGE];
let __closure = { stiffness: 150 };
let merged = Object.assign(SCALE_PHYSICS);
let closure_27 = { duration: 200 };
let closure_28 = { duration: 0 };
let c29 = 0.75;
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
size1 = { width: tmp4, height: tmp4, borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(0,0,0,0.3)" };
obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { overflow: "hidden" };
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = { borderColor: nativeDefault.colors.BLACK };
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
let closure_30 = createStyles(obj2);
let __initData = { code: "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:\"center\",paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?\"auto\":sharedCoords.get().width};}" };
const __initData2 = { code: "function VoicePanelCardTsx2(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelfStreamCard(sharedCoords) {
  let intl3;
  let isFocused;
  let items1;
  let items2;
  let string2Result;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = sharedCoords;
  let obj = sharedCoords(isFocused[22]);
  const cResult = obj.c(23);
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  isFocused = sharedCoords.isFocused;
  const tmp4 = closure_30();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore];
    const fn = function n() {
      currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
      let state;
      if (currentUserActiveStream != null) {
        state = currentUserActiveStream.state;
      }
      return state === constants.PAUSED;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(isFocused[23]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stream) {
    const fn2 = function p() {
      if (null != stream) {
        const stopStream = StreamActionCreators.stopStream;
        StreamActionCreators;
        const obj = StreamKeyUtils;
        stopStream(obj.encodeStreamKey(tmp));
      }
    };
    cResult[2] = stream;
    cResult[3] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[3];
  }
  const fn3 = function f() {
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
  fn3.__closure = { isFocused, sharedCoords };
  fn3.__workletHash = 1330083185339;
  fn3.__initData = __initData;
  const tmpResult2 = tmp(isFocused[15]);
  const animatedStyle = tmpResult2.useAnimatedStyle(fn3);
  if (cResult[4] === isFocused) {
    let tmp11;
    let tmp15;
    if (cResult[5] === tmp4.blackBackground) {
      tmp11 = cResult[6];
    }
    let str = "text-sm/semibold";
    if (isFocused) {
      str = "text-lg/semibold";
    }
    if (cResult[7] !== stateFromStores) {
      let stringResult;
      const intl = tmp(tmp2[27]).intl;
      const string = intl.string;
      const t = tmp(tmp2[27]).t;
      if (stateFromStores) {
        stringResult = string(t["5q17w5"]);
      } else {
        stringResult = string(t.gMOwov);
      }
      cResult[7] = stateFromStores;
      cResult[8] = stringResult;
      tmp15 = stringResult;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === str) {
      if (cResult[10] === tmp15) {
        let tmp17;
        if (cResult[11] === animatedStyle) {
          tmp17 = cResult[12];
        }
        if (cResult[13] === tmp9) {
          if (cResult[14] === isFocused) {
            if (cResult[15] === stateFromStores) {
              let tmp21;
              if (cResult[16] === tmp4.selfStreamFocusedSubtitle) {
                tmp21 = cResult[17];
              }
              if (cResult[18] === tmp4.nonUserRoundedCard) {
                if (cResult[19] === tmp11) {
                  if (cResult[20] === tmp17) {
                    let tmp27;
                    if (cResult[21] === tmp21) {
                      tmp27 = cResult[22];
                    }
                    return tmp27;
                  }
                }
              }
              const obj2 = { style: tmp4.nonUserRoundedCard, children: items1 };
              items1 = [tmp11, tmp17, tmp21];
              const tmp30 = closure_23(stream(isFocused[26]), obj2);
              cResult[18] = tmp4.nonUserRoundedCard;
              cResult[19] = tmp11;
              cResult[20] = tmp17;
              cResult[21] = tmp21;
              cResult[22] = tmp30;
              tmp27 = tmp30;
            }
          }
        }
        let tmp23Result = null;
        if (isFocused) {
          const obj3 = { style: tmp4.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: string2Result };
          const Text = tmp(tmp2[16]).Text;
          const intl2 = tmp(tmp2[27]).intl;
          const string2 = intl2.string;
          const t2 = tmp(tmp2[27]).t;
          const tmp23 = closure_23;
          const tmp24 = closure_22;
          if (stateFromStores) {
            string2Result = string2(t2.LV1NSN);
          } else {
            string2Result = string2(t2.dKeLGt);
          }
          const obj4 = { children: items2 };
          items2 = [closure_21(Text, obj3), ];
          const obj5 = { size: "lg", variant: "primary-overlay", onPress: tmp9, text: intl3.string(tmp(isFocused[27]).t.CpkXwZ) };
          const Button = tmp(tmp2[28]).Button;
          intl3 = tmp(tmp2[27]).intl;
          items2[1] = closure_21(Button, obj5);
          tmp23Result = tmp23(tmp24, obj4);
        }
        cResult[13] = tmp9;
        cResult[14] = isFocused;
        cResult[15] = stateFromStores;
        cResult[16] = tmp4.selfStreamFocusedSubtitle;
        cResult[17] = tmp23Result;
        tmp21 = tmp23Result;
      }
    }
    const obj6 = { style: animatedStyle, variant: str, color: "text-overlay-light", children: tmp15 };
    const tmp20 = closure_21(closure_24, obj6);
    cResult[9] = str;
    cResult[10] = tmp15;
    cResult[11] = animatedStyle;
    cResult[12] = tmp20;
    tmp17 = tmp20;
  }
  let tmp12 = isFocused;
  if (tmp12) {
    const obj7 = { style: tmp4.blackBackground };
    tmp12 = closure_21(stream(tmp2[26]), obj7);
  }
  cResult[4] = isFocused;
  cResult[5] = tmp4.blackBackground;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : (function SelfStreamCard(sharedCoords) {
  let intl3;
  let items2;
  let items3;
  let str;
  let string2Result;
  let stringResult;
  sharedCoords = sharedCoords.sharedCoords;
  const stream = sharedCoords.stream;
  const isFocused = sharedCoords.isFocused;
  const tmp = closure_30();
  let obj = sharedCoords(isFocused[23]);
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
  const fn = function c() {
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
  fn.__workletHash = 4905346923512;
  fn.__initData = __initData2;
  const obj2 = sharedCoords(isFocused[15]);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let tmp10 = isFocused;
  const obj3 = { style: tmp.nonUserRoundedCard, children: items2 };
  const tmp8 = stream;
  const tmp9 = stream(isFocused[26]);
  if (isFocused) {
    const obj4 = { style: tmp.blackBackground };
    tmp10 = closure_21(tmp8(tmp3[26]), obj4);
  }
  items2 = [tmp10, , ];
  const obj5 = { style: animatedStyle, variant: str, color: "text-overlay-light", children: stringResult };
  str = "text-sm/semibold";
  const tmp13 = closure_24;
  if (isFocused) {
    str = "text-lg/semibold";
  }
  const intl = tmp2(tmp3[27]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[27]).t;
  if (stateFromStores) {
    stringResult = string(t["5q17w5"]);
  } else {
    stringResult = string(t.gMOwov);
  }
  items2[1] = closure_21(tmp13, obj5);
  let tmp7Result = null;
  if (isFocused) {
    const obj6 = { style: tmp.selfStreamFocusedSubtitle, variant: "text-sm/medium", color: "text-overlay-light", children: string2Result };
    const Text = tmp2(tmp3[16]).Text;
    const intl2 = tmp2(tmp3[27]).intl;
    const string2 = intl2.string;
    const t2 = tmp2(tmp3[27]).t;
    const tmp16 = closure_22;
    if (stateFromStores) {
      string2Result = string2(t2.LV1NSN);
    } else {
      string2Result = string2(t2.dKeLGt);
    }
    const obj7 = { children: items3 };
    items3 = [closure_21(Text, obj6), ];
    const obj8 = { size: "lg", variant: "primary-overlay", onPress: callback, text: intl3.string(sharedCoords(isFocused[27]).t.CpkXwZ) };
    const Button = tmp2(tmp3[28]).Button;
    intl3 = tmp2(tmp3[27]).intl;
    items3[1] = closure_21(Button, obj8);
    tmp7Result = tmp7(tmp16, obj7);
  }
  items2[2] = tmp7Result;
  return closure_23(tmp9, obj3);
});
__initData = { code: "function VoicePanelCardTsx3(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData3 = { code: "function VoicePanelCardTsx4(isFocused_0,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused_0!==lastIsFocused){runOnJS(setIsFocused)(isFocused_0);}}" };
const __initData4 = { code: "function VoicePanelCardTsx5(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}" };
const __initData5 = { code: "function VoicePanelCardTsx6(isFocused_0,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused_0!==lastIsFocused){runOnJS(setIsFocused)(isFocused_0);}}" };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedStreamCard(id) {
  let closure_6;
  let first;
  let intl3;
  let isScrollVisible;
  let layout;
  let mode;
  let setFocused;
  let sharedCoords;
  let streamGuildId;
  let streamId;
  let tmp14;
  let tmp15;
  let userNick;
  let obj = id(streamGuildId[22]);
  const cResult = obj.c(44);
  id = id.id;
  const userId = id.userId;
  ({ streamId, streamGuildId } = id);
  ({ userNick, sharedCoords, isScrollVisible, layout } = id);
  let obj2 = setFocused;
  const isSelf = id.isSelf;
  const context = setFocused.useContext(userId(streamGuildId[29]));
  const focused = context.focused;
  ({ mode, setFocused } = context);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === streamGuildId) {
    let tmp8;
    let tmp9;
    if (cResult[2] === userId) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = id(streamGuildId[23]);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
    const stream = stateFromStoresObject.stream;
    const activeStream = stateFromStoresObject.activeStream;
    if (cResult[5] === setFocused) {
      let tmp11;
      if (cResult[6] === stream) {
        tmp11 = cResult[7];
      }
      [tmp14, tmp15] = focused(obj2.useState(false), 2);
      const SoundboardStore = tmp15;
      focused(obj2.useState(false), 2);
      const tmpResult3 = id(streamGuildId[15]);
      class G {
        constructor() {
          const value = focused.get();
          id = undefined;
          if (value != null) {
            id = value.id;
          }
          return id === id;
        }
      }
      const obj3 = { focused, id };
      G.__closure = obj3;
      G.__workletHash = 15599603386177;
      G.__initData = __initData;
      class Y {
        constructor(arg0, arg1) {
          if (arg0 !== arg1) {
            const obj = ReanimatedRexport2;
            obj.runOnJS(defaultBorderRadius)(arg0);
          }
        }
      }
      const useAnimatedReaction = tmpResult3.useAnimatedReaction;
      Y.__closure = { runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp15 };
      Y.__workletHash = 16381883582731;
      Y.__initData = __initData3;
      const obj4 = { runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp15 };
      const animatedReaction = useAnimatedReaction(G, Y);
      const tmp4Result = userId(streamGuildId[30]);
      const tmp4ResultResult = tmp4Result(id(streamGuildId[31]).MediaEngineContextTypes.STREAM, userId);
      if (isSelf) {
        if (cResult[8] === tmp14) {
          if (cResult[9] === sharedCoords) {
            let tmp60;
            if (cResult[10] === stream) {
              tmp60 = cResult[11];
            }
            return tmp60;
          }
        }
        const obj5 = { sharedCoords, stream, isFocused: tmp14 };
        const tmp63 = closure_21(closure_33, obj5);
        class G {
          constructor() {
            const value = focused.get();
            id = undefined;
            if (value != null) {
              id = value.id;
            }
            return id === id;
          }
        }
        cResult[9] = sharedCoords;
        cResult[10] = stream;
        cResult[11] = tmp63;
        tmp60 = tmp63;
      } else if (null == activeStream) {
        if (cResult[12] === tmp11) {
          if (cResult[13] === layout) {
            if (cResult[14] === mode) {
              let tmp57;
              if (cResult[15] === stream) {
                tmp57 = cResult[16];
              }
              return tmp57;
            }
          }
        }
        const obj6 = { mode, stream, onPress: tmp11, disabled: false, layout };
        const tmp59 = closure_21(id(streamGuildId[32]).VoicePanelStreamPreview, obj6);
        class G {
          constructor() {
            const value = focused.get();
            id = undefined;
            if (value != null) {
              id = value.id;
            }
            return id === id;
          }
        }
        cResult[13] = layout;
        cResult[14] = mode;
        cResult[15] = stream;
        cResult[16] = tmp59;
        class Y {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport2;
              obj.runOnJS(defaultBorderRadius)(arg0);
            }
          }
        }
      } else {
        if (null == tmp4ResultResult) {
          if (activeStream.state !== ApplicationStreamStates.FAILED) {
            if (activeStream.state === ApplicationStreamStates.ENDED) {
              if (cResult[21] === activeStream) {
                let tmp46;
                if (cResult[22] === !tmp14) {
                  tmp46 = cResult[23];
                }
                return tmp46;
              }
              const obj7 = { stream: activeStream, removeSplashImage: !tmp14, type: id(streamGuildId[33]).VideoEmptyTypes.STREAM_ENDED, style: null };
              const tmp4Result4 = userId(streamGuildId[33]);
              class G {
                constructor() {
                  const value = focused.get();
                  id = undefined;
                  if (value != null) {
                    id = value.id;
                  }
                  return id === id;
                }
              }
              const tmp50 = closure_21(tmp4Result4, obj7);
              cResult[21] = activeStream;
              cResult[22] = !tmp14;
              cResult[23] = tmp50;
              tmp46 = tmp50;
            } else {
              let tmp30;
              let tmp34;
              if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
                let tmp31;
                const _Symbol = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj8 = { title: intl3.string(id(streamGuildId[27]).t["pdFFK+"]) };
                  const StreamTextOverlay = tmp(tmp2[34]).StreamTextOverlay;
                  intl3 = tmp(tmp2[27]).intl;
                  cResult[24] = closure_21(StreamTextOverlay, obj8);
                  closure_21(StreamTextOverlay, obj8);
                  class G {
                    constructor() {
                      const value = focused.get();
                      id = undefined;
                      if (value != null) {
                        id = value.id;
                      }
                      return id === id;
                    }
                  }
                } else {
                  tmp31 = cResult[24];
                }
                tmp30 = tmp31;
              } else {
                tmp30 = null;
                if (activeStream.state === ApplicationStreamStates.PAUSED) {
                  let tmp23;
                  let tmp27;
                  const _Symbol2 = Symbol;
                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[27]).intl;
                    const stringResult = intl.string(id(streamGuildId[27]).t["5q17w5"]);
                    cResult[25] = stringResult;
                    tmp23 = stringResult;
                  } else {
                    tmp23 = cResult[25];
                  }
                  if (cResult[26] !== userNick) {
                    const intl2 = tmp(tmp2[27]).intl;
                    const obj9 = { username: userNick };
                    cResult[26] = userNick;
                    cResult[27] = intl2.formatToPlainString(id(streamGuildId[27]).t.meVVlb, obj9);
                    intl2.formatToPlainString(id(streamGuildId[27]).t.meVVlb, obj9);
                    class G {
                      constructor() {
                        const value = focused.get();
                        id = undefined;
                        if (value != null) {
                          id = value.id;
                        }
                        return id === id;
                      }
                    }
                  }
                  if (cResult[28] !== tmp25) {
                    const obj10 = { title: tmp23, subtext: tmp25 };
                    cResult[28] = tmp25;
                    cResult[29] = closure_21(id(streamGuildId[34]).StreamTextOverlay, obj10);
                    closure_21(id(streamGuildId[34]).StreamTextOverlay, obj10);
                    class G {
                      constructor() {
                        const value = focused.get();
                        id = undefined;
                        if (value != null) {
                          id = value.id;
                        }
                        return id === id;
                      }
                    }
                  } else {
                    tmp27 = cResult[29];
                  }
                  tmp30 = tmp27;
                }
              }
              if (streamId == null) {
                streamId = null;
              }
              if (cResult[30] !== activeStream) {
                const tmpResult4 = id(streamGuildId[25]);
                const encodeStreamKeyResult = tmpResult4.encodeStreamKey(activeStream);
                cResult[30] = activeStream;
                cResult[31] = encodeStreamKeyResult;
                tmp34 = encodeStreamKeyResult;
              } else {
                tmp34 = cResult[31];
              }
              if (cResult[32] === id) {
                if (cResult[33] === isScrollVisible) {
                  if (cResult[34] === layout) {
                    if (cResult[35] === sharedCoords) {
                      if (cResult[36] === streamId) {
                        if (cResult[37] === tmp34) {
                          if (cResult[38] === activeStream.state === ApplicationStreamStates.PAUSED) {
                            let tmp37;
                            if (cResult[39] === userId) {
                              tmp37 = cResult[40];
                            }
                            if (cResult[41] === tmp30) {
                              let tmp41;
                              if (cResult[42] === tmp37) {
                                tmp41 = cResult[43];
                              }
                              return tmp41;
                            }
                            const items1 = [, ];
                            items1[0] = tmp37;
                            items1[1] = tmp30;
                            class G {
                              constructor() {
                                const value = focused.get();
                                id = undefined;
                                if (value != null) {
                                  id = value.id;
                                }
                                return id === id;
                              }
                            }
                            cResult[41] = tmp30;
                            cResult[42] = tmp37;
                            cResult[43] = tmp44;
                            tmp41 = tmp44;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj12 = { layout, id, streamId: null, userId, streamKey: tmp34, isScrollVisible, videoSpinnerContext: id(streamGuildId[36]).VideoSpinnerContext.REMOTE_STREAM, sharedCoords, isCamera: false, paused: activeStream.state === ApplicationStreamStates.PAUSED };
              class G {
                constructor() {
                  const value = focused.get();
                  id = undefined;
                  if (value != null) {
                    id = value.id;
                  }
                  return id === id;
                }
              }
              const tmp4Result5 = userId(streamGuildId[35]);
              const tmp40 = closure_21(tmp4Result5, obj12);
              class Y {
                constructor(arg0, arg1) {
                  if (arg0 !== arg1) {
                    const obj = ReanimatedRexport2;
                    obj.runOnJS(defaultBorderRadius)(arg0);
                  }
                }
              }
              cResult[32] = id;
              cResult[33] = isScrollVisible;
              cResult[34] = layout;
              cResult[35] = sharedCoords;
              cResult[36] = streamId;
              cResult[37] = tmp34;
              cResult[38] = activeStream.state === ApplicationStreamStates.PAUSED;
              cResult[39] = userId;
              cResult[40] = tmp40;
              tmp37 = tmp40;
            }
          }
        }
        if (cResult[17] === activeStream) {
          if (cResult[18] === !tmp14) {
            let tmp52;
            if (cResult[19] === tmp4ResultResult) {
              tmp52 = cResult[20];
            }
            return tmp52;
          }
        }
        const obj13 = { avError: tmp4ResultResult, stream: activeStream, removeSplashImage: !tmp14, type: null, style: stream.absoluteFill };
        const tmp4Result6 = userId(streamGuildId[33]);
        class G {
          constructor() {
            const value = focused.get();
            id = undefined;
            if (value != null) {
              id = value.id;
            }
            return id === id;
          }
        }
        const tmp56 = closure_21(tmp4Result6, obj13);
        cResult[17] = activeStream;
        cResult[18] = !tmp14;
        class Y {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport2;
              obj.runOnJS(defaultBorderRadius)(arg0);
            }
          }
        }
        cResult[20] = tmp56;
        tmp52 = tmp56;
      }
    }
    const fn2 = function x() {
      if (null != stream) {
        const obj = StreamActionCreators;
        obj.watchStream(stream, { forceMultiple: true });
        const obj2 = StreamKeyUtils;
        setFocused(obj2.encodeStreamKey(stream));
      }
    };
    cResult[6] = stream;
    cResult[7] = fn2;
    tmp11 = fn2;
  }
  const fn = function u() {
    const obj = { stream: ApplicationStreamingStore.getStreamForUser(userId, streamGuildId), activeStream: ApplicationStreamingStore.getActiveStreamForUser(userId, streamGuildId) };
    return obj;
  };
  const items2 = [userId, streamGuildId];
  cResult[1] = streamGuildId;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp9 = items2;
  tmp8 = fn;
}) : (function AnimatedStreamCard(id) {
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
  const context = setFocused.useContext(userId(streamGuildId[29]));
  const focused = context.focused;
  setFocused = context.setFocused;
  const mode = context.mode;
  let obj = id(streamGuildId[23]);
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
  C.__workletHash = 720082375367;
  C.__initData = __initData4;
  class I {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        obj.runOnJS(c6)(arg0);
      }
    }
  }
  I.__closure = { runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp9 };
  I.__workletHash = 1640804275081;
  I.__initData = __initData5;
  ({ runOnJS: id(streamGuildId[15]).runOnJS, setIsFocused: tmp9 });
  const animatedReaction = obj2.useAnimatedReaction(C, I);
  const tmp11 = userId(streamGuildId[30]);
  const tmp11Result = tmp11(id(streamGuildId[31]).MediaEngineContextTypes.STREAM, userId);
  if (isSelf) {
    const obj4 = { sharedCoords, stream, isFocused: tmp8 };
    return closure_21(closure_33, obj4);
  } else if (null == activeStream) {
    const obj5 = { mode, stream, onPress: callback, disabled: false, layout };
    return closure_21(id(streamGuildId[32]).VoicePanelStreamPreview, obj5);
  } else {
    if (null == tmp11Result) {
      if (activeStream.state !== ApplicationStreamStates.FAILED) {
        if (activeStream.state === ApplicationStreamStates.ENDED) {
          const obj6 = { stream: activeStream, removeSplashImage: !tmp8, type: id(streamGuildId[33]).VideoEmptyTypes.STREAM_ENDED, style: stream.absoluteFill };
          const tmpResult = userId(streamGuildId[33]);
          return closure_21(tmpResult, obj6);
        } else {
          let tmp15;
          if (activeStream.state === ApplicationStreamStates.RECONNECTING) {
            const obj7 = { title: intl.string(id(streamGuildId[27]).t["pdFFK+"]) };
            const StreamTextOverlay = tmp4(tmp2[34]).StreamTextOverlay;
            intl = tmp4(tmp2[27]).intl;
            tmp15 = closure_21(StreamTextOverlay, obj7);
          } else {
            tmp15 = null;
            if (activeStream.state === ApplicationStreamStates.PAUSED) {
              const obj8 = { title: intl2.string(id(streamGuildId[27]).t["5q17w5"]), subtext: intl3.formatToPlainString(id(streamGuildId[27]).t.meVVlb, obj9) };
              const StreamTextOverlay2 = tmp4(tmp2[34]).StreamTextOverlay;
              intl2 = tmp4(tmp2[27]).intl;
              intl3 = tmp4(tmp2[27]).intl;
              obj9 = { username: userNick };
              tmp15 = closure_21(StreamTextOverlay2, obj8);
            }
          }
          const obj10 = { layout, id, streamId, userId, streamKey: tmp4Result.encodeStreamKey(activeStream), isScrollVisible, videoSpinnerContext: id(streamGuildId[36]).VideoSpinnerContext.REMOTE_STREAM, sharedCoords, isCamera: false, paused: activeStream.state === ApplicationStreamStates.PAUSED };
          const tmp16 = closure_23;
          const tmp17 = closure_22;
          const tmp18 = closure_21;
          const tmpResult3 = userId(streamGuildId[35]);
          if (streamId == null) {
            streamId = null;
          }
          const obj11 = { children: items3 };
          tmp4Result = id(streamGuildId[25]);
          items3 = [tmp18(tmpResult3, obj10), tmp15];
          return tmp16(tmp17, obj11);
        }
      }
    }
    const obj12 = { avError: tmp11Result, stream: activeStream, removeSplashImage: !tmp8, type: id(streamGuildId[33]).VideoEmptyTypes.STREAM_FAILED, style: stream.absoluteFill };
    const tmpResult4 = userId(streamGuildId[33]);
    return closure_21(tmpResult4, obj12);
  }
}));
const __initData6 = { code: "function VoicePanelCardTsx7(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},\"animate-always\"),backgroundColor:backgroundColor};}" };
const __initData7 = { code: "function VoicePanelCardTsx8(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?0.8:1,layoutPhysics)}]};}" };
const __initData8 = { code: "function VoicePanelCardTsx9(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}" };
const __initData9 = { code: "function VoicePanelCardTsx10(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_43 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedUserCardInner(isRinging) {
  let avatarDecoration;
  let avatarURI;
  let backgroundColor;
  let gradientStops;
  let guildId;
  let items1;
  let layout;
  let layoutPhysics;
  let mode;
  let userId;
  const tmp = isRinging;
  let obj = isRinging(mode[22]);
  const cResult = obj.c(36);
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  ({ userId, guildId } = isRinging);
  const tmp4 = closure_30();
  mode = react.useContext(layoutPhysics(mode[29])).mode;
  if (cResult[0] === avatarURI) {
    if (cResult[1] === guildId) {
      let tmp6;
      let tmp16;
      if (cResult[2] === userId) {
        tmp6 = cResult[3];
      }
      ({ gradientStops, backgroundColor } = layoutPhysics(mode[37])(tmp6));
      layoutPhysics(mode[37])(tmp6);
      const fn = function v() {
        let num = 1;
        const withTiming = timing.withTiming;
        timing;
        if (isRinging) {
          num = c29;
        }
        const obj = { opacity: withTiming(num, { duration: 100 }, "animate-always"), backgroundColor };
        return obj;
      };
      const obj2 = { withTiming: tmp(mode[38]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor };
      const useAnimatedStyle = tmp(mode[15]).useAnimatedStyle;
      tmp(mode[15]);
      fn.__closure = obj2;
      let num = 13655669649054;
      fn.__workletHash = 13655669649054;
      fn.__initData = __initData6;
      const animatedStyle = useAnimatedStyle(fn);
      const fn2 = function w() {
        let items;
        const withSpring = spring.withSpring;
        let num = 1;
        spring;
        if (mode.get() === unpackModuleId.PIP) {
          num = 0.8;
        }
        const obj = { transform: items };
        items = [{ scale: withSpring(num, layoutPhysics) }];
        ({ scale: withSpring(num, layoutPhysics) });
        return obj;
      };
      const obj3 = { withSpring: tmp(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
      const useAnimatedStyle2 = tmp(mode[15]).useAnimatedStyle;
      tmp(mode[15]);
      fn2.__closure = obj3;
      fn2.__workletHash = 1926256435326;
      fn2.__initData = __initData7;
      const animatedStyle2 = useAnimatedStyle2(fn2);
      if (cResult[4] !== avatarURI) {
        let cachedSourceFromURI;
        if (null != avatarURI) {
          const tmpResult4 = tmp(mode[40]);
          cachedSourceFromURI = tmpResult4.getCachedSourceFromURI(avatarURI);
        }
        cResult[4] = avatarURI;
        cResult[5] = cachedSourceFromURI;
        tmp16 = cachedSourceFromURI;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        let tmp20;
        if (cResult[7] === tmp4.userRoundedCardContent) {
          tmp20 = cResult[8];
        }
        if (cResult[9] === gradientStops) {
          let tmp21;
          let tmp27;
          if (cResult[10] === layout) {
            tmp21 = cResult[11];
          }
          if (null != tmp16) {
            let prop;
            if (null == avatarDecoration) {
              prop = tmp4.avatarImageMaskStyles;
            }
            if (cResult[14] === animatedStyle2) {
              let tmp32;
              let tmp34Result;
              if (cResult[15] === prop) {
                tmp32 = cResult[16];
              }
              if (cResult[17] === avatarDecoration) {
                if (cResult[18] === tmp16) {
                  if (cResult[19] === null != avatarDecoration) {
                    let tmp33;
                    if (cResult[20] === tmp4.image) {
                      tmp33 = cResult[21];
                    }
                    if (cResult[22] === tmp32) {
                      let tmp36;
                      if (cResult[23] === tmp33) {
                        tmp36 = cResult[24];
                      }
                      if (cResult[25] === layout) {
                        let tmp39;
                        if (cResult[26] === tmp36) {
                          tmp39 = cResult[27];
                        }
                        tmp27 = tmp39;
                      }
                      const obj4 = { layout, children: tmp36 };
                      const tmp41 = closure_21(layoutPhysics(mode[42]), obj4);
                      cResult[25] = layout;
                      cResult[26] = tmp36;
                      cResult[27] = tmp41;
                      tmp39 = tmp41;
                    }
                    const obj5 = { style: tmp32, children: tmp33 };
                    const tmp38 = closure_21(layoutPhysics(mode[42]), obj5);
                    cResult[22] = tmp32;
                    cResult[23] = tmp33;
                    cResult[24] = tmp38;
                    tmp36 = tmp38;
                  }
                }
              }
              if (null != avatarDecoration) {
                const obj6 = { source: tmp16, size: tmp(mode[18]).AvatarSizes.XXLARGE, avatarDecoration };
                const Avatar = tmp(tmp2[18]).Avatar;
                tmp34Result = tmp34(Avatar, obj6);
              } else {
                size = { source: tmp16, resizeMode: "stretch", width: 80, height: 80, style: tmp4.image };
                tmp34Result = tmp34(tmp5(tmp2[41]), size);
              }
              cResult[17] = avatarDecoration;
              cResult[18] = tmp16;
              cResult[19] = null != avatarDecoration;
              cResult[20] = tmp4.image;
              cResult[21] = tmp34Result;
              tmp33 = tmp34Result;
            }
            let items = [prop, animatedStyle2];
            cResult[14] = animatedStyle2;
            cResult[15] = prop;
            cResult[16] = items;
            tmp32 = items;
          } else if (cResult[12] !== tmp4.avatarPlaceholder) {
            const obj7 = { style: tmp4.avatarPlaceholder };
            const tmp29 = closure_21(layoutPhysics(mode[26]), obj7);
            cResult[12] = tmp4.avatarPlaceholder;
            cResult[13] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[13];
          }
          if (cResult[28] === tmp20) {
            if (cResult[29] === tmp21) {
              let tmp42;
              if (cResult[30] === tmp27) {
                tmp42 = cResult[31];
              }
              if (cResult[32] === layout) {
                if (cResult[33] === tmp4.userRoundedCard) {
                  let tmp45;
                  if (cResult[34] === tmp42) {
                    tmp45 = cResult[35];
                  }
                  return tmp45;
                }
              }
              const obj8 = { style: tmp19, layout, children: tmp42 };
              const tmp47 = closure_21(layoutPhysics(mode[42]), obj8);
              cResult[32] = layout;
              cResult[33] = tmp4.userRoundedCard;
              cResult[34] = tmp42;
              cResult[35] = tmp47;
              tmp45 = tmp47;
            }
          }
          const obj9 = { style: tmp20, children: items1 };
          items1 = [tmp21, tmp27];
          const tmp44 = closure_23(layoutPhysics(mode[42]), obj9);
          cResult[28] = tmp20;
          cResult[29] = tmp21;
          cResult[30] = tmp27;
          cResult[31] = tmp44;
          tmp42 = tmp44;
        }
        let tmp22 = null;
        if (null != gradientStops) {
          const obj10 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
          tmp22 = closure_21(LinearGradient, obj10);
        }
        cResult[9] = gradientStops;
        cResult[10] = layout;
        cResult[11] = tmp22;
        tmp21 = tmp22;
      }
      const items2 = [tmp4.userRoundedCardContent, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp4.userRoundedCardContent;
      cResult[8] = items2;
      tmp20 = items2;
    }
  }
  const obj11 = { userId, guildId, avatarURI, location: "VoicePanelCard-native" };
  cResult[0] = avatarURI;
  cResult[1] = guildId;
  cResult[2] = userId;
  cResult[3] = obj11;
  tmp6 = obj11;
}) : (function AnimatedUserCardInner(isRinging) {
  let avatarDecoration;
  let avatarURI;
  let backgroundColor;
  let gradientStops;
  let guildId;
  let items;
  let items1;
  let items2;
  let layout;
  let layoutPhysics;
  let obj10;
  let obj6;
  let tmp11;
  let tmp2Result4;
  let tmp2Result6;
  let tmp9Result3;
  let tmp9Result4;
  let userId;
  isRinging = isRinging.isRinging;
  ({ layout, avatarURI, avatarDecoration, layoutPhysics } = isRinging);
  let mode;
  backgroundColor = undefined;
  ({ userId, guildId } = isRinging);
  const tmp = closure_30();
  mode = react.useContext(layoutPhysics(mode[29])).mode;
  ({ gradientStops, backgroundColor } = layoutPhysics(mode[37])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" }));
  layoutPhysics(mode[37])({ userId, guildId, avatarURI, location: "VoicePanelCard-native" });
  let obj = isRinging(mode[15]);
  const fn = function _() {
    let num = 1;
    const withTiming = timing.withTiming;
    timing;
    if (isRinging) {
      num = c29;
    }
    const obj = { opacity: withTiming(num, { duration: 100 }, "animate-always"), backgroundColor };
    return obj;
  };
  const obj2 = { withTiming: isRinging(mode[38]).withTiming, isRinging, CONNECTING_OPACITY, backgroundColor };
  fn.__closure = obj2;
  fn.__workletHash = 12115732984752;
  fn.__initData = __initData8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const fn2 = function f() {
    let items;
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (mode.get() === unpackModuleId.PIP) {
      num = 0.8;
    }
    const obj = { transform: items };
    items = [{ scale: withSpring(num, layoutPhysics) }];
    ({ scale: withSpring(num, layoutPhysics) });
    return obj;
  };
  const obj3 = isRinging(mode[15]);
  fn2.__closure = { withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics };
  fn2.__workletHash = 10965423163748;
  fn2.__initData = __initData9;
  let cachedSourceFromURI;
  ({ withSpring: isRinging(mode[39]).withSpring, mode, VoicePanelModes, layoutPhysics });
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  if (null != avatarURI) {
    const tmp5Result = isRinging(mode[40]);
    cachedSourceFromURI = tmp5Result.getCachedSourceFromURI(avatarURI);
  }
  const obj5 = { style: tmp.userRoundedCard, layout, children: tmp11(tmp2Result4, obj6) };
  obj6 = { style: items, children: items1 };
  items = [tmp.userRoundedCardContent, animatedStyle];
  let tmp9Result = null;
  const tmp2Result = layoutPhysics(mode[42]);
  tmp11 = closure_23;
  tmp2Result4 = layoutPhysics(mode[42]);
  if (null != gradientStops) {
    const obj7 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout, pointerEvents: "none" };
    tmp9Result = tmp9(LinearGradient, obj7);
  }
  items1 = [tmp9Result, ];
  if (null == cachedSourceFromURI) {
    const obj8 = { style: tmp.avatarPlaceholder };
    tmp9Result3 = tmp9(tmp2(tmp3[26]), obj8);
  } else {
    let prop;
    const obj9 = { layout, children: closure_21(tmp2Result6, obj10) };
    const tmp2Result5 = layoutPhysics(mode[42]);
    tmp2Result6 = layoutPhysics(mode[42]);
    if (null == avatarDecoration) {
      prop = tmp.avatarImageMaskStyles;
    }
    obj10 = { style: items2, children: tmp9Result4 };
    items2 = [prop, animatedStyle1];
    if (null != avatarDecoration) {
      const obj11 = { source: cachedSourceFromURI, size: isRinging(mode[18]).AvatarSizes.XXLARGE, avatarDecoration };
      const Avatar = tmp5(tmp3[18]).Avatar;
      tmp9Result4 = tmp9(Avatar, obj11);
    } else {
      size = { source: cachedSourceFromURI, resizeMode: "stretch", width: 80, height: 80, style: tmp.image };
      tmp9Result4 = tmp9(tmp2(tmp3[41]), size);
    }
    tmp9Result3 = tmp9(tmp2Result5, obj9);
  }
  items1[1] = tmp9Result3;
  return closure_21(tmp2Result, obj5);
}));
const __initData10 = { code: "function VoicePanelCardTsx11(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?\"animate-always\":\"animate-never\")};}" };
const __initData11 = { code: "function VoicePanelCardTsx12(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable_0=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_0?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_0?\"animate-always\":\"animate-never\"),borderWidth:withSpring(!disable_0&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable_0?\"animate-always\":\"animate-never\")};}" };
const __initData12 = { code: "function VoicePanelCardTsx13(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable_1=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_1?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_1?\"animate-always\":\"animate-never\"),borderWidth:withSpring(!disable_1&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable_1?\"animate-always\":\"animate-never\")};}" };
const __initData13 = { code: "function VoicePanelCardTsx14(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}" };
const __initData14 = { code: "function VoicePanelCardTsx15(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable_0=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_0?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_0?'animate-always':'animate-never'),borderWidth:withSpring(!disable_0&&speakingOrPlayingSoundboard.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable_0?'animate-always':'animate-never')};}" };
const __initData15 = { code: "function VoicePanelCardTsx16(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,defaultBorderRadius,SPEAKING_PHYSICS,speakingOrPlayingSoundboard,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable_1=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable_1?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}):0,SPEAKING_PHYSICS,!disable_1?'animate-always':'animate-never'),borderWidth:withSpring(!disable_1&&speakingOrPlayingSoundboard.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable_1?'animate-always':'animate-never')};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_50 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpeakingIndicator(id) {
  let first;
  let isSelf;
  let items1;
  let mode;
  let tmp11;
  let tmp = id;
  let obj = id(isSelf[22]);
  const cResult = obj.c(30);
  id = id.id;
  const userId = id.userId;
  isSelf = id.isSelf;
  const speakingOrPlayingSoundboard = id.speakingOrPlayingSoundboard;
  const layout = id.layout;
  const context = mode.useContext(userId(isSelf[29]));
  mode = context.mode;
  const focused = context.focused;
  const tmp6 = closure_30();
  let obj2 = id(isSelf[43]);
  const token = obj2.useToken(userId(isSelf[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj3 = id(isSelf[43]);
  const token1 = obj3.useToken(userId(isSelf[20]).colors.REDESIGN_INPUT_CONTROL_SELECTED);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = token;
    const items = [token];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function l() {
      return SoundboardStore.isUserPlayingSounds(userId);
    };
    let num2 = 1;
    cResult[1] = userId;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  const tmpResult = tmp(isSelf[23]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
  const tmpResult4 = tmp(isSelf[15]);
  class T {
    constructor() {
      let id1;
      let num2;
      let str;
      let tmp18;
      let withSpring;
      let tmp = mode.get() !== unpackModuleId.PIP;
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
      tmp18 = map1;
      if (tmp) {
        str = "animate-never";
      }
      return obj2;
    }
  }
  T.__closure = { mode, VoicePanelModes, focused, id, withSpring: tmp(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  T.__workletHash = 11554900074499;
  T.__initData = __initData10;
  ({ mode, VoicePanelModes, focused, id, withSpring: tmp(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS });
  const animatedStyle = tmpResult4.useAnimatedStyle(T);
  const tmpResult5 = tmp(isSelf[15]);
  class A {
    constructor() {
      let id1;
      let num2;
      let withSpring2;
      let tmp = mode.get() === unpackModuleId.PIP;
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
      const obj3 = { borderRadius: withSpring(num, map1, str2), borderWidth: withSpring2(num2, map1, str) };
      num2 = 0;
      withSpring2 = tmp7(5247).withSpring;
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
  A.__closure = { mode, VoicePanelModes, focused, id, withSpring: tmp(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: userId(isSelf[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  A.__workletHash = 17414722144995;
  A.__initData = __initData11;
  ({ mode, VoicePanelModes, focused, id, withSpring: tmp(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: userId(isSelf[45]), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 });
  const animatedStyle1 = tmpResult5.useAnimatedStyle(A);
  const tmpResult6 = tmp(isSelf[15]);
  class V {
    constructor() {
      let id1;
      let num2;
      let withSpring2;
      let tmp = mode.get() === unpackModuleId.PIP;
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
      const obj3 = { borderRadius: withSpring(num, map1, str2), borderWidth: withSpring2(num2, map1, str) };
      num2 = 0;
      withSpring2 = tmp7(5247).withSpring;
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
    }
  }
  V.__closure = { mode, VoicePanelModes, focused, id, withSpring: tmp(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 };
  V.__workletHash = 10337106009897;
  V.__initData = __initData12;
  ({ mode, VoicePanelModes, focused, id, withSpring: tmp(isSelf[39]).withSpring, computeCardBorderRadius: userId(isSelf[44]), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 });
  const animatedStyle2 = tmpResult6.useAnimatedStyle(V);
  if (cResult[3] === tmp6.speakingIndicatorClip) {
    let tmp16;
    if (cResult[4] === animatedStyle) {
      tmp16 = cResult[5];
    }
    if (cResult[6] === tmp6.speakingIndicatorUnderlay) {
      let tmp17;
      if (cResult[7] === animatedStyle1) {
        tmp17 = cResult[8];
      }
      if (cResult[9] === layout) {
        let tmp18;
        if (cResult[10] === tmp17) {
          tmp18 = cResult[11];
        }
        if (cResult[12] === stateFromStores) {
          let tmp21;
          if (cResult[13] === token1) {
            tmp21 = cResult[14];
          }
          if (cResult[15] === animatedStyle2) {
            if (cResult[16] === tmp6.speakingIndicatorBar) {
              let tmp23;
              if (cResult[17] === tmp21) {
                tmp23 = cResult[18];
              }
              if (cResult[19] === layout) {
                let tmp24;
                if (cResult[20] === tmp23) {
                  tmp24 = cResult[21];
                }
                if (cResult[22] === tmp16) {
                  if (cResult[23] === tmp18) {
                    let tmp27;
                    if (cResult[24] === tmp24) {
                      tmp27 = cResult[25];
                    }
                    if (cResult[26] === layout) {
                      if (cResult[27] === tmp6.speakingIndicatorWrapper) {
                        let tmp30;
                        if (cResult[28] === tmp27) {
                          tmp30 = cResult[29];
                        }
                        return tmp30;
                      }
                    }
                    const obj7 = { style: tmp6.speakingIndicatorWrapper, layout, pointerEvents: "none", children: tmp27 };
                    const tmp32 = closure_21(userId(isSelf[42]), obj7);
                    cResult[26] = layout;
                    cResult[27] = tmp6.speakingIndicatorWrapper;
                    cResult[28] = tmp27;
                    cResult[29] = tmp32;
                    tmp30 = tmp32;
                  }
                }
                const obj8 = { style: tmp16, children: items1 };
                items1 = [tmp18, tmp24];
                const tmp29 = closure_23(userId(isSelf[42]), obj8);
                cResult[22] = tmp16;
                cResult[23] = tmp18;
                cResult[24] = tmp24;
                cResult[25] = tmp29;
                tmp27 = tmp29;
              }
              const obj9 = { style: tmp23, layout };
              const tmp26 = closure_21(userId(isSelf[42]), obj9);
              cResult[19] = layout;
              cResult[20] = tmp23;
              cResult[21] = tmp26;
              tmp24 = tmp26;
            }
          }
          const items2 = [tmp6.speakingIndicatorBar, tmp21, animatedStyle2];
          cResult[15] = animatedStyle2;
          cResult[16] = tmp6.speakingIndicatorBar;
          cResult[17] = tmp21;
          cResult[18] = items2;
          tmp23 = items2;
        }
        let tmp22 = null;
        if (stateFromStores) {
          tmp22 = { borderColor: token1 };
          const obj10 = { borderColor: token1 };
        }
        cResult[12] = stateFromStores;
        cResult[13] = token1;
        cResult[14] = tmp22;
        tmp21 = tmp22;
      }
      const obj11 = { style: tmp17, layout };
      const tmp20 = closure_21(userId(isSelf[42]), obj11);
      cResult[9] = layout;
      cResult[10] = tmp17;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    }
    const items3 = [tmp6.speakingIndicatorUnderlay, animatedStyle1];
    cResult[6] = tmp6.speakingIndicatorUnderlay;
    cResult[7] = animatedStyle1;
    cResult[8] = items3;
    tmp17 = items3;
  }
  const items4 = [tmp6.speakingIndicatorClip, animatedStyle];
  cResult[3] = tmp6.speakingIndicatorClip;
  cResult[4] = animatedStyle;
  cResult[5] = items4;
  tmp16 = items4;
}) : (function SpeakingIndicator(id) {
  let isSelf;
  let items1;
  let items2;
  let items3;
  let obj11;
  let tmp11;
  let tmp12;
  id = id.id;
  ({ userId: importDefault, isSelf } = id);
  const speakingOrPlayingSoundboard = id.speakingOrPlayingSoundboard;
  const layout = id.layout;
  let mode;
  const context = mode.useContext(require("VoicePanelStateContext"));
  mode = context.mode;
  const focused = context.focused;
  const tmp2 = closure_30();
  let obj = id(isSelf[43]);
  const token = obj.useToken(require("native").modules.mobile.VOICE_TILE_BORDER_RADIUS);
  let obj2 = id(isSelf[43]);
  const token1 = obj2.useToken(require("native").colors.REDESIGN_INPUT_CONTROL_SELECTED);
  let obj3 = id(isSelf[23]);
  const items = [token];
  const stateFromStores = obj3.useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(importDefault));
  const obj4 = id(isSelf[15]);
  class S {
    constructor() {
      let id1;
      let num2;
      let str;
      let tmp18;
      let withSpring;
      let tmp = mode.get() !== unpackModuleId.PIP;
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
      tmp18 = map1;
      if (tmp) {
        str = "animate-never";
      }
      return obj2;
    }
  }
  S.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS };
  S.__workletHash = 10993051977798;
  S.__initData = __initData13;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS });
  const animatedStyle = obj4.useAnimatedStyle(S);
  const fn = function h() {
    let id1;
    let num2;
    let withSpring2;
    let tmp = mode.get() === unpackModuleId.PIP;
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
    const obj3 = { borderRadius: withSpring(num, map1, str2), borderWidth: withSpring2(num2, map1, str) };
    num2 = 0;
    withSpring2 = tmp7(5247).withSpring;
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
  };
  const obj6 = id(isSelf[15]);
  fn.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: require("roundToNearestPixel"), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 };
  fn.__workletHash = 10981366572356;
  fn.__initData = __initData14;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, roundToNearestPixel: require("roundToNearestPixel"), SPEAKING_BORDER_SIZE: 3, SPEAKING_INSET: 2 });
  const animatedStyle1 = obj6.useAnimatedStyle(fn);
  const fn2 = function _() {
    let id1;
    let num2;
    let withSpring2;
    let tmp = mode.get() === unpackModuleId.PIP;
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
    const obj3 = { borderRadius: withSpring(num, map1, str2), borderWidth: withSpring2(num2, map1, str) };
    num2 = 0;
    withSpring2 = tmp7(5247).withSpring;
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
  const obj8 = id(isSelf[15]);
  fn2.__closure = { mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 };
  fn2.__workletHash = 7340222275404;
  fn2.__initData = __initData15;
  const tmp9 = closure_21;
  ({ mode, VoicePanelModes, focused, id, withSpring: id(isSelf[39]).withSpring, computeCardBorderRadius: require("computeCardBorderRadius"), isSelf, defaultBorderRadius: token, SPEAKING_PHYSICS, speakingOrPlayingSoundboard, SPEAKING_BORDER_SIZE: 3 });
  const animatedStyle2 = obj8.useAnimatedStyle(fn2);
  const obj10 = { style: tmp2.speakingIndicatorWrapper, layout, pointerEvents: "none", children: tmp11(tmp12, obj11) };
  let tmp10 = require("ReanimatedNativeView");
  tmp11 = closure_23;
  obj11 = { style: items1, children: items3 };
  items1 = [tmp2.speakingIndicatorClip, animatedStyle];
  const obj12 = { style: items2, layout };
  items2 = [tmp2.speakingIndicatorUnderlay, animatedStyle1];
  tmp12 = require("ReanimatedNativeView");
  items3 = [closure_21(require("ReanimatedNativeView"), obj12), ];
  const items4 = [tmp2.speakingIndicatorBar, , ];
  let tmp14 = null;
  const tmp13 = require("ReanimatedNativeView");
  if (stateFromStores) {
    tmp14 = { borderColor: token1 };
    const obj13 = { borderColor: token1 };
  }
  items4[1] = tmp14;
  items4[2] = animatedStyle2;
  items3[1] = tmp9(tmp13, { style: items4, layout });
  return tmp9(tmp10, obj10);
});
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_51 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function LazySpeakingIndicator(id) {
  let closure_2;
  let speaking;
  let tmp2;
  let userPlayingSounds;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] !== id.id) {
    const fn = function l() {
      let isSpeakingResult = SpeakingStore.isSpeaking(id.id);
      const tmp = id;
      if (!isSpeakingResult) {
        isSpeakingResult = SoundboardStore.isUserPlayingSounds(tmp.id);
      }
      return isSpeakingResult;
    };
    cResult[0] = id.id;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = id(react.useState(tmp2), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  id = id.id;
  const obj2 = react;
  if (cResult[2] === id) {
    let tmp5;
    let tmp6;
    if (cResult[3] === first) {
      tmp5 = cResult[4];
      tmp6 = cResult[5];
    }
    const effect = obj2.useEffect(tmp5, tmp6);
    if (cResult[6] === id) {
      let tmp8;
      if (cResult[7] === first) {
        tmp8 = cResult[8];
      }
      return tmp8;
    }
    let tmp9 = null;
    if (first) {
      const obj3 = {};
      const merged = Object.assign(id);
      tmp9 = closure_21(closure_50, obj3);
    }
    cResult[6] = id;
    cResult[7] = first;
    cResult[8] = tmp9;
    tmp8 = tmp9;
  }
  class S {
    constructor() {
      tmp = closure_1;
      if (!tmp) {
        tmp2 = closure_9;
        flag = false;
        result = closure_9.addConditionalChangeListener(() => {
          const isSpeakingResult = speaking.isSpeaking(id);
          let flag = !isSpeakingResult;
          if (isSpeakingResult) {
            closure_1_2(true);
            flag = false;
          }
          return flag;
        }, false);
        tmp4 = closure_6;
        result1 = closure_6.addConditionalChangeListener(() => {
          const isUserPlayingSoundsResult = userPlayingSounds.isUserPlayingSounds(id);
          let flag = !isUserPlayingSoundsResult;
          if (isUserPlayingSoundsResult) {
            closure_1_2(true);
            flag = false;
          }
          return flag;
        }, false);
      }
      return;
    }
  }
  const items = [first, id];
  cResult[2] = id;
  cResult[3] = first;
  cResult[4] = S;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = S;
}) : (function LazySpeakingIndicator(id) {
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
    tmp4 = closure_21(closure_50, obj);
  }
  return tmp4;
}));
const __initData16 = { code: "function VoicePanelCardTsx17(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData17 = { code: "function VoicePanelCardTsx18(focusedId_0,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId_0===previous){return;}runOnJS(handleFocusedParticipantChange)(focusedId_0);}" };
const __initData18 = { code: "function VoicePanelCardTsx19(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}" };
const __initData19 = { code: "function VoicePanelCardTsx20(props,previous_0){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous_0!==null&&previous_0!==void 0?previous_0:undefined)){return;}const{mode:mode_0,focused:focused_0,transitionState:transitionState_0}=props;const isPIPMode=mode_0===VoicePanelModes.PIP;const manuallyFocusedId=focused_0===null||focused_0===void 0?void 0:focused_0.id;if(previous_0==null&&transitionState_0!==TransitionStates.YEETED){sharedVisible.set(1);}else{if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{if((previous_0===null||previous_0===void 0?void 0:previous_0.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else{if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}}}}" };
const __initData20 = { code: "function VoicePanelCardTsx21(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData21 = { code: "function VoicePanelCardTsx22(focusedId_0,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId_0===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId_0);}" };
const __initData22 = { code: "function VoicePanelCardTsx23(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}" };
const __initData23 = { code: "function VoicePanelCardTsx24(props,previous_0){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous_0!==null&&previous_0!==void 0?previous_0:undefined))return;const{mode:mode_0,focused:focused_0,transitionState:transitionState_0}=props;const isPIPMode=mode_0===VoicePanelModes.PIP;const manuallyFocusedId=focused_0===null||focused_0===void 0?void 0:focused_0.id;if(previous_0==null&&transitionState_0!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous_0===null||previous_0===void 0?void 0:previous_0.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_60 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSharedTransitionState(id) {
  let tmp4;
  let transitionState;
  let type;
  let obj = id(transitionState[22]);
  const cResult = obj.c(6);
  id = id.id;
  ({ participant: importDefault, transitionState } = id);
  const cleanUp = id.cleanUp;
  let mode = id.mode;
  const focused = id.focused;
  const isScrollVisible = id.isScrollVisible;
  const sharedVisible = id.sharedVisible;
  const obj2 = id(transitionState[15]);
  const sharedValue = obj2.useSharedValue(transitionState);
  const tmp3 = cleanUp(mode.useState(true), 2);
  [tmp4, SpeakingStore] = tmp3;
  function handleFocusedParticipantChange(arg0) {
    importDefault = undefined;
    if (importDefault != null) {
      importDefault = importDefault.type;
    }
    if (importDefault === ParticipantTypes.ACTIVITY) {
      SpeakingStore(arg0 !== id);
    }
  }
  const fn = function l() {
    const value = focused.get();
    id = undefined;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 11657970594532;
  fn.__initData = __initData16;
  const fn2 = function o(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(handleFocusedParticipantChange)(arg0);
    }
  };
  const obj4 = id(transitionState[15]);
  fn2.__closure = { runOnJS: id(transitionState[15]).runOnJS, handleFocusedParticipantChange };
  fn2.__workletHash = 17532866120556;
  fn2.__initData = __initData17;
  ({ runOnJS: id(transitionState[15]).runOnJS, handleFocusedParticipantChange });
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const fn3 = function u() {
    const obj = { mode: mode.get(), focused: focused.get(), transitionState: sharedValue.get() };
    return obj;
  };
  fn3.__closure = { mode, focused, sharedTransitionState: sharedValue };
  fn3.__workletHash = 16460342773567;
  fn3.__initData = __initData18;
  const fn4 = function c(mode, transitionState) {
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = transitionState;
    if (!cheapWorkletShallowEqual(mode, tmp4)) {
      ({ focused, transitionState } = mode);
      mode = mode.mode;
      const PIP = unpackModuleId.PIP;
      if (focused != null) {
        id = focused.id;
      }
      if (null == transitionState) {
        if (transitionState !== native2.TransitionStates.YEETED) {
          const result = sharedVisible.set(1);
        }
      }
      if (transitionState === native2.TransitionStates.YEETED) {
        const obj = sharedVisible;
        if (1 === sharedVisible.get()) {
          if (isScrollVisible.get()) {
            const result1 = obj.set(0);
          }
        }
        const tmpResult = ReanimatedRexport2;
        tmpResult.runOnJS(cleanUp)();
      } else {
        let transitionState1;
        if (transitionState != null) {
          transitionState1 = transitionState.transitionState;
        }
        if (transitionState1 === native2.TransitionStates.YEETED) {
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
  const obj6 = id(transitionState[15]);
  fn4.__closure = { cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[15]).runOnJS, cleanUp, id };
  fn4.__workletHash = 14989414495662;
  fn4.__initData = __initData19;
  ({ cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[15]).runOnJS, cleanUp, id });
  const animatedReaction1 = obj6.useAnimatedReaction(fn3, fn4);
  const obj3 = mode;
  if (cResult[0] === sharedValue) {
    let tmp7;
    if (cResult[1] === transitionState) {
      tmp7 = cResult[2];
    }
    const layoutEffect = obj3.useLayoutEffect(tmp7);
    if (cResult[3] === tmp4) {
      let tmp9;
      if (cResult[4] === sharedValue) {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
    const obj8 = { sharedTransitionState: sharedValue, cardGestureEnabled: tmp4 };
    cResult[3] = tmp4;
    cResult[4] = sharedValue;
    cResult[5] = obj8;
    tmp9 = obj8;
  }
  class S {
    constructor() {
      const result = sharedValue.set(transitionState);
    }
  }
  cResult[0] = sharedValue;
  cResult[1] = transitionState;
  cResult[2] = S;
  tmp7 = S;
}) : (function useSharedTransitionState(id) {
  id = id.id;
  const participant = id.participant;
  const transitionState = id.transitionState;
  const cleanUp = id.cleanUp;
  let mode = id.mode;
  const focused = id.focused;
  const isScrollVisible = id.isScrollVisible;
  const sharedVisible = id.sharedVisible;
  let handleFocusedParticipantChange;
  let obj = id(transitionState[15]);
  const sharedTransitionState = obj.useSharedValue(transitionState);
  let tmp4 = cleanUp(mode.useState(true), 2);
  let closure_9 = tmp4[1];
  let type;
  const cardGestureEnabled = tmp4[0];
  const obj2 = mode;
  const useCallback = mode.useCallback;
  if (participant != null) {
    type = participant.type;
  }
  const items = [type, id];
  handleFocusedParticipantChange = useCallback((arg0) => {
    let type;
    if (participant != null) {
      type = participant.type;
    }
    if (type === ParticipantTypes.ACTIVITY) {
      closure_9(arg0 !== id);
    }
  }, items);
  let tmpResult = tmp(tmp2[15]);
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
  P.__workletHash = 14565336493281;
  P.__initData = __initData20;
  const fn = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(callback)(arg0);
    }
  };
  fn.__closure = { runOnJS: id(transitionState[15]).runOnJS, handleFocusedParticipantChange };
  fn.__workletHash = 9126813650947;
  fn.__initData = __initData21;
  ({ runOnJS: id(transitionState[15]).runOnJS, handleFocusedParticipantChange });
  const animatedReaction = tmpResult.useAnimatedReaction(P, fn);
  const tmpResult2 = id(transitionState[15]);
  class C {
    constructor() {
      const obj = { mode: mode.get(), focused: focused.get(), transitionState: sharedTransitionState.get() };
      return obj;
    }
  }
  C.__closure = { mode, focused, sharedTransitionState };
  C.__workletHash = 653803491766;
  C.__initData = __initData22;
  class I {
    constructor(mode, transitionState) {
      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp4 = transitionState;
      if (!cheapWorkletShallowEqual(mode, tmp4)) {
        ({ focused, transitionState } = mode);
        mode = mode.mode;
        const PIP = unpackModuleId.PIP;
        if (focused != null) {
          id = focused.id;
        }
        if (null == transitionState) {
          if (transitionState !== native2.TransitionStates.YEETED) {
            const result = sharedVisible.set(1);
          }
        }
        if (transitionState === native2.TransitionStates.YEETED) {
          const obj = sharedVisible;
          if (1 === sharedVisible.get()) {
            if (isScrollVisible.get()) {
              const result1 = obj.set(0);
            }
          }
          const tmpResult = ReanimatedRexport2;
          tmpResult.runOnJS(cleanUp)();
        } else {
          let transitionState1;
          if (transitionState != null) {
            transitionState1 = transitionState.transitionState;
          }
          if (transitionState1 === native2.TransitionStates.YEETED) {
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
    }
  }
  I.__closure = { cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[15]).runOnJS, cleanUp, id };
  I.__workletHash = 751243994154;
  I.__initData = __initData23;
  ({ cheapWorkletShallowEqual: id(transitionState[46]).cheapWorkletShallowEqual, VoicePanelModes, TransitionStates: id(transitionState[47]).TransitionStates, sharedVisible, isScrollVisible, runOnJS: id(transitionState[15]).runOnJS, cleanUp, id });
  const animatedReaction1 = tmpResult2.useAnimatedReaction(C, I);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const result = sharedTransitionState.set(transitionState);
  });
  return { sharedTransitionState, cardGestureEnabled };
});
let closure_61 = { isSelf: false, hasVideo: false, user: { id: "r" } };
function layoutTransitionFunction(originX, SUBTLE_SPRING, scale, sharedValue1, flag) {
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let closure_0 = scale;
  let closure_1 = sharedValue1;
  if (flag === undefined) {
    flag = false;
  }
  const value = scale.get();
  let result = value / sharedValue1.get();
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
layoutTransitionFunction.__workletHash = 14607823135698;
layoutTransitionFunction.__initData = { code: "function layoutTransitionFunction_VoicePanelCardTsx25(values,physics,scale,lastScale,disableAnimation=false){const{withSpring}=this.__closure;const scaleAdjustment=scale.get()/lastScale.get();const shouldAnimate=!disableAnimation?'respect-motion-settings':'animate-never';return{animations:{originX:withSpring(values.targetOriginX,physics,shouldAnimate),originY:withSpring(values.targetOriginY,physics,shouldAnimate),width:withSpring(values.targetWidth,physics,shouldAnimate),height:withSpring(values.targetHeight,physics,shouldAnimate)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment},callback:function(){lastScale.set(scale.get());}};}" };
const __initData24 = { code: "function VoicePanelCardTsx26(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData25 = { code: "function VoicePanelCardTsx27(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData26 = { code: "function VoicePanelCardTsx28(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData27 = { code: "function VoicePanelCardTsx29(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else{if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x=x+xOffset.get();y=y+calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y=y+height/4;}}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?\"animate-always\":\"animate-never\",function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,\"respect-motion-settings\")},{translateY:gestureActive?y:withSpring(y,layoutPhysics,\"respect-motion-settings\")},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
let closure_67 = { code: "function VoicePanelCardTsx30(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData28 = { code: "function VoicePanelCardTsx31(finished_0){const{runOnJS,reportPIPArrival}=this.__closure;if(finished_0===true){runOnJS(reportPIPArrival)();}}" };
const __initData29 = { code: "function VoicePanelCardTsx32(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,\"respect-motion-settings\"),originY:withSpring(values.targetOriginY,layoutPhysics,\"respect-motion-settings\"),width:withSpring(values.targetWidth,layoutPhysics,\"respect-motion-settings\"),height:withSpring(values.targetHeight,layoutPhysics,\"respect-motion-settings\")},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
const __initData30 = { code: "function VoicePanelCardTsx33(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}" };
const __initData31 = { code: "function VoicePanelCardTsx34(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}" };
const __initData32 = { code: "function VoicePanelCardTsx35(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}" };
const __initData33 = { code: "function VoicePanelCardTsx36(){const{coords,focused,id,isPIP,pipState,getScaledPIPContainerHeight,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,defaultBorderRadius,sharedVisible,isRTCConnected,CONNECTING_OPACITY,wrapperOffset,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,layoutPhysics,CARD_SCALE_PHYSICS,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3,_focused$get4;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){const pipScale=pipState.scale.get();width=pipState.width*pipScale;height=pipState.height*pipScale;const pipHeight=getScaledPIPContainerHeight({height:pipState.height,containerHeight:pipState.containerHeight,showSecondaryPIP:pipState.showSecondaryPIP,scale:pipScale});const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;const gestureActive=wrapperOffset.get().gestureActive;const scaleTarget=sharedVisible.get()===1||((_focused$get4=focused.get())===null||_focused$get4===void 0?void 0:_focused$get4.id)===id?1:0.8;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,transform:[{translateX:gestureActive?x:withSpring(x,layoutPhysics,'respect-motion-settings')},{translateY:gestureActive?y:withSpring(y,layoutPhysics,'respect-motion-settings')},{scale:withSpring(scaleTarget,CARD_SCALE_PHYSICS)}],borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}" };
let closure_74 = { code: "function VoicePanelCardTsx37(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_75 = { code: "function VoicePanelCardTsx38(finished_0){const{runOnJS,reportPIPArrival}=this.__closure;if(finished_0===true){runOnJS(reportPIPArrival)();}}" };
const __initData34 = { code: "function VoicePanelCardTsx39(values){const{pipState,lastPIPScale,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const scaleAdjustment=pipState.scale.get()/lastPIPScale.get();const initialValues={originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth*scaleAdjustment,height:values.currentHeight*scaleAdjustment};return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'respect-motion-settings'),originY:withSpring(values.targetOriginY,layoutPhysics,'respect-motion-settings'),width:withSpring(values.targetWidth,layoutPhysics,'respect-motion-settings'),height:withSpring(values.targetHeight,layoutPhysics,'respect-motion-settings')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}lastPIPScale.set(pipState.scale.get());}};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_77 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedWrapper(coords) {
  let children;
  let cleanUp;
  let id;
  let mountedCards;
  let pipAvoidanceSpecs;
  let sharedTransitionState;
  let sharedVisible;
  let tmp9;
  let transitionState;
  let tmp = cleanUp;
  const tmp2 = id;
  let obj = cleanUp(id[22]);
  const cResult = obj.c(67);
  ({ children, cleanUp } = coords);
  coords = coords.coords;
  id = coords.id;
  const isRTCConnected = coords.isRTCConnected;
  const isScrollVisible = coords.isScrollVisible;
  const layoutPhysics = coords.layoutPhysics;
  ({ transitionState, sharedVisible } = coords);
  const tmp4 = coords;
  const analyticsLocations = coords(id[48])().analyticsLocations;
  const tmp5 = sharedTransitionState();
  let obj2 = isScrollVisible;
  const context = isScrollVisible.useContext(coords(id[29]));
  const channelId = context.channelId;
  const connected = context.connected;
  const contentDimensions = context.contentDimensions;
  const controlsSpecs = context.controlsSpecs;
  const focused = context.focused;
  const hideControls = context.hideControls;
  const mode = context.mode;
  ({ mountedCards, pipAvoidanceSpecs } = context);
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  const setFocused = context.setFocused;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const pipHandoff = context.pipHandoff;
  const guildId = context.guildId;
  const obj3 = cleanUp(id[49]);
  const pIPState = obj3.usePIPState();
  const tmp8 = coords(id[50])(id, channelId, guildId);
  if (cResult[0] !== tmp8) {
    let tmp10 = tmp8;
    const tmpResult = tmp(tmp2[50]);
    if (!tmpResult.isStableParticipantWithUser(tmp8)) {
      tmp10 = closure_61;
    }
    let num = 0;
    cResult[0] = tmp8;
    let num2 = 1;
    cResult[1] = tmp10;
    tmp9 = tmp10;
  } else {
    tmp9 = cResult[1];
  }
  const isSelf = tmp9.isSelf;
  let id2 = tmp9.user.id;
  function ee() {
    const tmp = id === pIPState.id && mode.get() === unpackModuleId.PIP;
    return tmp;
  }
  let obj4 = { id, pipState: pIPState, mode, VoicePanelModes: controlsSpecs };
  ee.__closure = obj4;
  ee.__workletHash = 13055769514275;
  ee.__initData = __initData24;
  const tmpResult9 = tmp(tmp2[15]);
  const derivedValue = tmpResult9.useDerivedValue(ee);
  function te() {
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
  te.__closure = { focused, id, mode, VoicePanelModes: controlsSpecs, scrollPosition };
  te.__workletHash = 17164022773012;
  te.__initData = __initData25;
  const tmpResult10 = tmp(tmp2[15]);
  const derivedValue1 = tmpResult10.useDerivedValue(te);
  function ie() {
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
  let obj5 = { connected, EDGE_GUTTER: scrollPosition, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  ie.__closure = obj5;
  ie.__workletHash = 4094014471347;
  ie.__initData = __initData26;
  const tmpResult11 = tmp(tmp2[15]);
  const derivedValue2 = tmpResult11.useDerivedValue(ie);
  if (cResult[2] === cleanUp) {
    if (cResult[3] === focused) {
      if (cResult[4] === id) {
        if (cResult[5] === isScrollVisible) {
          if (cResult[6] === mode) {
            if (cResult[7] === mountedCards) {
              if (cResult[8] === tmp8) {
                if (cResult[9] === sharedVisible) {
                  let tmp14;
                  if (cResult[10] === transitionState) {
                    tmp14 = cResult[11];
                  }
                  const tmp16 = closure_60(tmp14);
                  sharedTransitionState = tmp16.sharedTransitionState;
                  const cardGestureEnabled = tmp16.cardGestureEnabled;
                  const tmp18 = pIPState.mode === safeArea.IN_APP;
                  let closure_31 = tmp18;
                  const tmpResult12 = tmp(tmp2[43]);
                  const token = tmpResult12.useToken(tmp4(tmp2[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
                  function ce() {
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
                    const tmp6 = closure_31;
                    if (tmp6) {
                      scale = pIPState.scale;
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
                      const value9 = sharedTransitionState.get();
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
                          num5 = c29;
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
                    const size1 = { zIndex: withDelay(num7, obj9.withTiming(num2, closure_28)), opacity: withTiming(num3, tmp35, str, fn), width: width2, height: height2, transform: items, borderRadius: obj15.withSpring(tmp24Result, SCALE_PHYSICS) };
                    obj9 = timing;
                    withTiming = timing.withTiming;
                    str = "animate-never";
                    timing;
                    tmp35 = closure_27;
                    if (isScrollVisible.get()) {
                      str = "animate-always";
                    }
                    fn = function y(arg0) {
                      let tmp = arg0 && 0 === sharedVisible.get();
                      if (tmp) {
                        const value = sharedTransitionState.get();
                        tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
                      }
                      if (tmp) {
                        const obj = cleanUp(id[15]);
                        obj.runOnJS(closure_1_0)();
                      }
                    };
                    fn.__closure = { sharedVisible, sharedTransitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
                    fn.__workletHash = 13155030685943;
                    fn.__initData = __initData;
                    ({ sharedVisible, sharedTransitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp });
                    let withSpringResult = num;
                    if (!gestureActive) {
                      const obj11 = spring;
                      withSpringResult = obj11.withSpring(num, layoutPhysics, "respect-motion-settings");
                    }
                    items = [{ translateX: withSpringResult }, , ];
                    let withSpringResult1 = sum;
                    if (!gestureActive) {
                      const obj12 = spring;
                      withSpringResult1 = obj12.withSpring(sum, layoutPhysics, "respect-motion-settings");
                    }
                    items[1] = { translateY: withSpringResult1 };
                    const obj13 = { scale: obj14.withSpring(num6, obj) };
                    items[2] = obj13;
                    obj14 = spring;
                    obj15 = spring;
                    return size1;
                  }
                  let obj6 = { coords, focused, id, isPIP: tmp18, pipState: pIPState, getScaledPIPContainerHeight: tmp(tmp2[51]).getScaledPIPContainerHeight, getClampedPIPPosition: tmp(tmp2[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: tmp4(tmp2[52]), contentDimensions, sharedTransitionState, TransitionStates: tmp(tmp2[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: tmp4(tmp2[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue2, wrapperOffset, withDelay: tmp(tmp2[15]).withDelay, withTiming: tmp(tmp2[38]).withTiming, ZINDEX_TIMING: derivedValue1, OPACITY_TIMING: derivedValue, isScrollVisible, runOnJS: tmp(tmp2[15]).runOnJS, cleanUp, withSpring: tmp(tmp2[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: id2, SCALE_PHYSICS: windowDimensions };
                  const useAnimatedStyle = tmp(tmp2[15]).useAnimatedStyle;
                  tmp(tmp2[15]);
                  let tmp24 = id2;
                  ce.__closure = obj6;
                  let num3 = 7444094303589;
                  ce.__workletHash = 7444094303589;
                  ce.__initData = __initData27;
                  const animatedStyle = useAnimatedStyle(ce);
                  if (cResult[12] === controlsSpecs) {
                    if (cResult[13] === hideControls) {
                      let tmp28;
                      if (cResult[14] === showControls) {
                        tmp28 = cResult[15];
                      }
                      if (cResult[16] === focused) {
                        if (cResult[17] === id) {
                          if (cResult[18] === isSelf) {
                            if (cResult[19] === tmp8) {
                              let tmp29;
                              let fn;
                              if (cResult[20] === setFocused) {
                                tmp29 = cResult[21];
                              }
                              if (cResult[22] === analyticsLocations) {
                                if (cResult[23] === channelId) {
                                  let tmp32;
                                  if (cResult[24] === id2) {
                                    tmp32 = cResult[25];
                                  }
                                  if (cResult[26] === cardGestureEnabled) {
                                    if (cResult[27] === tmp28) {
                                      if (cResult[28] === tmp29) {
                                        let tmp34;
                                        if (cResult[29] === tmp32) {
                                          tmp34 = cResult[30];
                                        }
                                        let tmp35 = tmp4(tmp2[54])(tmp34);
                                        if (cResult[31] === id) {
                                          if (cResult[32] === tmp18) {
                                            let tmp36;
                                            let tmp37;
                                            if (cResult[33] === pipHandoff) {
                                              tmp36 = cResult[34];
                                              tmp37 = cResult[35];
                                            }
                                            const layoutEffect = obj2.useLayoutEffect(tmp36, tmp37);
                                            if (cResult[36] === id) {
                                              let tmp39;
                                              let tmp40;
                                              if (cResult[37] === pipHandoff) {
                                                tmp39 = cResult[38];
                                                tmp40 = cResult[39];
                                              }
                                              const effect = obj2.useEffect(tmp39, tmp40);
                                              const tmpResult14 = tmp(tmp2[15]);
                                              class Oe {
                                                constructor() {
                                                  return () => pipHandoff.removeCard(id);
                                                }
                                              }
                                              const sharedValue = tmpResult14.useSharedValue(0);
                                              if (cResult[40] === id) {
                                                let tmp43;
                                                if (cResult[41] === pipHandoff) {
                                                  tmp43 = cResult[42];
                                                }
                                                reportPIPArrival = tmp43;
                                                if (cResult[43] === tmp18) {
                                                  if (cResult[44] === layoutPhysics) {
                                                    if (cResult[45] === sharedValue) {
                                                      let tmp44;
                                                      let tmp45;
                                                      if (cResult[46] === tmp43) {
                                                        tmp44 = cResult[47];
                                                        tmp45 = cResult[48];
                                                      }
                                                      const effect1 = obj2.useEffect(tmp44, tmp45);
                                                      const tmpResult15 = tmp(tmp2[15]);
                                                      class Ye {
                                                        constructor() {
                                                          const tmp = closure_31;
                                                          if (tmp) {
                                                            const result = sharedValue.set(0);
                                                            set = sharedValue.set;
                                                            const fn = function t(arg0) {
                                                              if (true === arg0) {
                                                                const obj = cleanUp(id[15]);
                                                                obj.runOnJS(reportPIPArrival)();
                                                              }
                                                            };
                                                            const tmp6 = spring;
                                                            __closure = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival };
                                                            const withSpring = tmp6.withSpring;
                                                            fn.__closure = __closure;
                                                            fn.__workletHash = 10819702965315;
                                                            fn.__initData = __initData2;
                                                            const result1 = set(withSpring(1, layoutPhysics, "animate-always", fn));
                                                            return () => {
                                                              const obj = cleanUp(id[15]);
                                                              return obj.cancelAnimation(sharedValue);
                                                            };
                                                          }
                                                        }
                                                      }
                                                      const sharedValue1 = tmpResult15.useSharedValue(obj16.get());
                                                      class Ne {
                                                        constructor() {
                                                          return pipHandoff.setCardArrivedInPIP(id);
                                                        }
                                                      }
                                                      class Fe {
                                                        constructor(currentOriginX) {
                                                          let obj4;
                                                          let obj5;
                                                          let obj6;
                                                          let obj7;
                                                          let size1;
                                                          scale = pIPState.scale;
                                                          let value = scale.get();
                                                          let result = value / sharedValue1.get();
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
                                                              const result1 = sharedValue1.set(scale.get());
                                                            }
                                                          };
                                                          size1 = { originX: obj4.withSpring(currentOriginX.targetOriginX, layoutPhysics, "respect-motion-settings"), originY: obj5.withSpring(currentOriginX.targetOriginY, layoutPhysics, "respect-motion-settings"), width: obj6.withSpring(currentOriginX.targetWidth, layoutPhysics, "respect-motion-settings"), height: obj7.withSpring(currentOriginX.targetHeight, layoutPhysics, "respect-motion-settings") };
                                                          obj4 = spring;
                                                          obj5 = spring;
                                                          obj6 = spring;
                                                          obj7 = spring;
                                                          return obj;
                                                        }
                                                      }
                                                      let obj7 = { pipState: pIPState, lastPIPScale: sharedValue1, withSpring: tmp(tmp2[39]).withSpring, layoutPhysics, wrapperOffset };
                                                      Fe.__closure = obj7;
                                                      Fe.__workletHash = 1978895565164;
                                                      Fe.__initData = __initData29;
                                                      cResult[49] = sharedValue1;
                                                      cResult[50] = layoutPhysics;
                                                      cResult[51] = pIPState.scale;
                                                      cResult[52] = wrapperOffset;
                                                      cResult[53] = Fe;
                                                      let tmp48 = Fe;
                                                    }
                                                  }
                                                }
                                                class Ye {
                                                  constructor() {
                                                    const tmp = closure_31;
                                                    if (tmp) {
                                                      const result = sharedValue.set(0);
                                                      set = sharedValue.set;
                                                      const fn = function t(arg0) {
                                                        if (true === arg0) {
                                                          const obj = cleanUp(id[15]);
                                                          obj.runOnJS(reportPIPArrival)();
                                                        }
                                                      };
                                                      const tmp6 = spring;
                                                      __closure = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival };
                                                      const withSpring = tmp6.withSpring;
                                                      fn.__closure = __closure;
                                                      fn.__workletHash = 10819702965315;
                                                      fn.__initData = __initData2;
                                                      const result1 = set(withSpring(1, layoutPhysics, "animate-always", fn));
                                                      return () => {
                                                        const obj = cleanUp(id[15]);
                                                        return obj.cancelAnimation(sharedValue);
                                                      };
                                                    }
                                                  }
                                                }
                                                let items = [tmp18, layoutPhysics, , ];
                                                class Ne {
                                                  constructor() {
                                                    return pipHandoff.setCardArrivedInPIP(id);
                                                  }
                                                }
                                                cResult[43] = tmp18;
                                                cResult[44] = layoutPhysics;
                                                cResult[45] = sharedValue;
                                                cResult[46] = tmp43;
                                                cResult[47] = Ye;
                                                cResult[48] = items;
                                                tmp45 = items;
                                                tmp44 = Ye;
                                              }
                                              class Ne {
                                                constructor() {
                                                  return pipHandoff.setCardArrivedInPIP(id);
                                                }
                                              }
                                              cResult[40] = id;
                                              cResult[41] = pipHandoff;
                                              cResult[42] = Ne;
                                              tmp43 = Ne;
                                            }
                                            class Oe {
                                              constructor() {
                                                return () => pipHandoff.removeCard(id);
                                              }
                                            }
                                            const items1 = [pipHandoff, id];
                                            cResult[37] = pipHandoff;
                                            cResult[38] = Oe;
                                            cResult[39] = items1;
                                            tmp40 = items1;
                                            tmp39 = Oe;
                                          }
                                        }
                                        class Ve {
                                          constructor() {
                                            pipHandoff.syncCardPIPLayout(id, closure_31);
                                          }
                                        }
                                        const items2 = [pipHandoff, id, ];
                                        cResult[31] = id;
                                        cResult[32] = tmp18;
                                        cResult[33] = pipHandoff;
                                        cResult[34] = Ve;
                                        cResult[35] = items2;
                                        tmp37 = items2;
                                        tmp36 = Ve;
                                      }
                                    }
                                  }
                                  let obj8 = { gesturesEnabled: null, onSingleTap: tmp28, onDoubleTap: tmp29, onLongPress: tmp32 };
                                  cResult[27] = tmp28;
                                  cResult[28] = tmp29;
                                  cResult[29] = tmp32;
                                  cResult[30] = obj8;
                                  tmp34 = obj8;
                                }
                              }
                              if (null != id2) {
                                fn = () => {
                                  const obj = { userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
                                  return showUserProfileActionSheetDefault(obj);
                                };
                              }
                              cResult[22] = analyticsLocations;
                              cResult[24] = id2;
                              cResult[25] = fn;
                              tmp32 = fn;
                            }
                          }
                        }
                      }
                      tmp(tmp2[50]);
                      cResult[16] = focused;
                      cResult[18] = isSelf;
                      cResult[19] = tmp8;
                      cResult[20] = setFocused;
                      cResult[21] = tmp31;
                      tmp29 = tmp31;
                    }
                  }
                  function ue() {
                    if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
                      showControls({ debounce: true });
                    } else {
                      hideControls({ debounce: true });
                    }
                  }
                  cResult[12] = controlsSpecs;
                  let num5 = 13;
                  cResult[13] = hideControls;
                  let num6 = 14;
                  cResult[14] = showControls;
                  let num7 = 15;
                  cResult[15] = ue;
                  tmp28 = ue;
                }
              }
            }
          }
        }
      }
    }
  }
  let obj9 = { id, participant: tmp8, transitionState, cleanUp, mountedCards, mode, focused, isScrollVisible, sharedVisible };
  cResult[2] = cleanUp;
  cResult[3] = focused;
  cResult[4] = id;
  cResult[5] = isScrollVisible;
  cResult[6] = mode;
  cResult[7] = mountedCards;
  cResult[8] = tmp8;
  cResult[9] = sharedVisible;
  cResult[10] = transitionState;
  cResult[11] = obj9;
  tmp14 = obj9;
}) : (function AnimatedWrapper(cleanUp) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c11;
  let c13;
  let c18;
  let c19;
  let children;
  let fn4;
  let fn5;
  let focused;
  let guildId;
  let items5;
  let mode;
  let mountedCards;
  let obj10;
  let tmp5Result18;
  let tmpResult2;
  let transitionState;
  let windowDimensions;
  cleanUp = cleanUp.cleanUp;
  const coords = cleanUp.coords;
  let id = cleanUp.id;
  const isRTCConnected = cleanUp.isRTCConnected;
  const isScrollVisible = cleanUp.isScrollVisible;
  const layoutPhysics = cleanUp.layoutPhysics;
  const sharedVisible = cleanUp.sharedVisible;
  VoicePanelModes = undefined;
  focused = undefined;
  c13 = undefined;
  mode = undefined;
  c18 = undefined;
  c19 = undefined;
  windowDimensions = undefined;
  let isSelf;
  let id2;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let sharedTransitionState;
  let closure_31;
  let token;
  let sharedValue;
  reportPIPArrival = undefined;
  let sharedValue1;
  let tmp = coords;
  const tmp2 = id;
  ({ children, transitionState } = cleanUp);
  const analyticsLocations = coords(id[48])().analyticsLocations;
  let obj = isScrollVisible;
  const tmp3 = sharedTransitionState();
  const context = isScrollVisible.useContext(coords(id[29]));
  const channelId = context.channelId;
  const connected = context.connected;
  const contentDimensions = context.contentDimensions;
  ({ controlsSpecs: c11, focused } = context);
  ({ hideControls: c13, mode } = context);
  const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  const safeArea = context.safeArea;
  const scrollPosition = context.scrollPosition;
  ({ setFocused: c18, showControls: c19, windowDimensions } = context);
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  const pipHandoff = context.pipHandoff;
  const tmp5 = cleanUp;
  ({ guildId, mountedCards } = context);
  let obj2 = cleanUp(id[49]);
  const pIPState = obj2.usePIPState();
  const tmp7 = coords(id[50])(id, channelId, guildId);
  const obj3 = cleanUp(id[50]);
  let tmp8 = tmp7;
  if (!obj3.isStableParticipantWithUser(tmp7)) {
    tmp8 = closure_61;
  }
  isSelf = tmp8.isSelf;
  id2 = tmp8.user.id;
  let fn = function f() {
    const tmp = id === pIPState.id && mode.get() === unpackModuleId.PIP;
    return tmp;
  };
  let obj4 = { id, pipState: pIPState, mode, VoicePanelModes };
  fn.__closure = obj4;
  fn.__workletHash = 14658609388807;
  fn.__initData = __initData30;
  const tmp5Result = tmp5(tmp2[15]);
  derivedValue = tmp5Result.useDerivedValue(fn);
  const tmp5Result10 = tmp5(tmp2[15]);
  class P {
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
  P.__closure = { focused, id, mode, VoicePanelModes, scrollPosition };
  P.__workletHash = 1094240470006;
  P.__initData = __initData31;
  derivedValue1 = tmp5Result10.useDerivedValue(P);
  const fn2 = function w() {
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
  let obj5 = { connected, EDGE_GUTTER: scrollPosition, safeArea, windowDimensions, contentDimensions, wrapperDimensions };
  fn2.__closure = obj5;
  fn2.__workletHash = 12954455503263;
  fn2.__initData = __initData32;
  const tmp5Result11 = tmp5(tmp2[15]);
  derivedValue2 = tmp5Result11.useDerivedValue(fn2);
  const tmp12 = closure_60({ id, participant: tmp7, transitionState, cleanUp, mountedCards, mode, focused, isScrollVisible, sharedVisible });
  sharedTransitionState = tmp12.sharedTransitionState;
  closure_31 = tmp13;
  const cardGestureEnabled = tmp12.cardGestureEnabled;
  const tmp5Result12 = tmp5(tmp2[43]);
  token = tmp5Result12.useToken(tmp(tmp2[20]).modules.mobile.VOICE_TILE_BORDER_RADIUS);
  const fn3 = function y() {
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
    const tmp6 = closure_31;
    if (tmp6) {
      scale = pIPState.scale;
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
      const value9 = sharedTransitionState.get();
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
          num5 = c29;
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
    const size1 = { zIndex: withDelay(num7, obj9.withTiming(num2, closure_28)), opacity: withTiming(num3, tmp35, str, fn), width: width2, height: height2, transform: items, borderRadius: obj15.withSpring(tmp24Result, SCALE_PHYSICS) };
    obj9 = timing;
    withTiming = timing.withTiming;
    str = "animate-never";
    timing;
    tmp35 = closure_27;
    if (isScrollVisible.get()) {
      str = "animate-always";
    }
    fn = function y(arg0) {
      let tmp = arg0 && 0 === sharedVisible.get();
      if (tmp) {
        const value = sharedTransitionState.get();
        tmp = value === cleanUp(id[47]).TransitionStates.YEETED;
      }
      if (tmp) {
        const obj = cleanUp(id[15]);
        obj.runOnJS(closure_1_0)();
      }
    };
    fn.__closure = { sharedVisible, sharedTransitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp };
    fn.__workletHash = 1424486009360;
    fn.__initData = __initData;
    ({ sharedVisible, sharedTransitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport2.runOnJS, cleanUp });
    let withSpringResult = num;
    if (!gestureActive) {
      const obj11 = spring;
      withSpringResult = obj11.withSpring(num, layoutPhysics, "respect-motion-settings");
    }
    items = [{ translateX: withSpringResult }, , ];
    let withSpringResult1 = sum;
    if (!gestureActive) {
      const obj12 = spring;
      withSpringResult1 = obj12.withSpring(sum, layoutPhysics, "respect-motion-settings");
    }
    items[1] = { translateY: withSpringResult1 };
    const obj13 = { scale: obj14.withSpring(num6, obj) };
    items[2] = obj13;
    obj14 = spring;
    obj15 = spring;
    return size1;
  };
  const tmp5Result13 = tmp5(tmp2[15]);
  let obj6 = { coords, focused, id, isPIP: tmp13, pipState: pIPState, getScaledPIPContainerHeight: tmp5(tmp2[51]).getScaledPIPContainerHeight, getClampedPIPPosition: tmp5(tmp2[51]).getClampedPIPPosition, wrapperDimensions, windowDimensions, safeArea, pipAvoidanceSpecs, derivedScrollValue: derivedValue1, xOffset: derivedValue2, calculateContentCenterOffset: tmp(tmp2[52]), contentDimensions, sharedTransitionState, TransitionStates: tmp5(tmp2[47]).TransitionStates, zIndexOverride: derivedValue, computeCardBorderRadius: tmp(tmp2[44]), mode, isSelf, defaultBorderRadius: token, sharedVisible, isRTCConnected, CONNECTING_OPACITY: derivedValue2, wrapperOffset, withDelay: tmp5(tmp2[15]).withDelay, withTiming: tmp5(tmp2[38]).withTiming, ZINDEX_TIMING: derivedValue1, OPACITY_TIMING: derivedValue, isScrollVisible, runOnJS: tmp5(tmp2[15]).runOnJS, cleanUp, withSpring: tmp5(tmp2[39]).withSpring, layoutPhysics, CARD_SCALE_PHYSICS: id2, SCALE_PHYSICS: windowDimensions };
  fn3.__closure = obj6;
  fn3.__workletHash = 12967186727989;
  fn3.__initData = __initData33;
  const animatedStyle = tmp5Result13.useAnimatedStyle(fn3);
  let obj7 = {
    gesturesEnabled: cardGestureEnabled,
    onSingleTap() {
      if (_undefined.get().mode === VoicePanelControlsModes.HIDDEN) {
        _undefined4({ debounce: true });
      } else {
        _undefined2({ debounce: true });
      }
    },
    onDoubleTap: fn4,
    onLongPress: fn5
  };
  const tmpResult = tmp(tmp2[54]);
  const tmp5Result14 = tmp5(tmp2[50]);
  if (tmp5Result14.isStableActivityParticipant(tmp7)) {
    fn4 = () => {
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
    tmp5(tmp2[50]);
  }
  fn5 = undefined;
  if (null != id2) {
    fn5 = () => {
      const obj = { userId: id2, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      return showUserProfileActionSheetDefault(obj);
    };
  }
  let items = [pipHandoff, id, tmp13];
  const tmpResultResult = tmpResult(obj7);
  const layoutEffect = obj.useLayoutEffect(() => {
    pipHandoff.syncCardPIPLayout(id, closure_31);
  }, items);
  const items1 = [pipHandoff, id];
  const effect = obj.useEffect(() => () => pipHandoff.removeCard(id), items1);
  const tmp5Result16 = tmp5(tmp2[15]);
  sharedValue = tmp5Result16.useSharedValue(0);
  const items2 = [pipHandoff, id];
  reportPIPArrival = obj.useCallback(() => pipHandoff.setCardArrivedInPIP(id), items2);
  const items3 = [tmp13, layoutPhysics, sharedValue, reportPIPArrival];
  const effect1 = obj.useEffect(() => {
    const tmp = closure_31;
    if (tmp) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const fn = function t(arg0) {
        if (true === arg0) {
          const obj = cleanUp(id[15]);
          obj.runOnJS(reportPIPArrival)();
        }
      };
      const tmp6 = spring;
      __closure = { runOnJS: ReanimatedRexport2.runOnJS, reportPIPArrival };
      const withSpring = tmp6.withSpring;
      fn.__closure = __closure;
      fn.__workletHash = 7717924685354;
      fn.__initData = __initData2;
      const result1 = set(withSpring(1, layoutPhysics, "animate-always", fn));
      return () => {
        const obj = cleanUp(id[15]);
        return obj.cancelAnimation(sharedValue);
      };
    }
  }, items3);
  scale = pIPState.scale;
  const tmp5Result17 = tmp5(tmp2[15]);
  sharedValue1 = tmp5Result17.useSharedValue(scale.get());
  function me(currentOriginX) {
    let obj4;
    let obj5;
    let obj6;
    let obj7;
    let size1;
    scale = pIPState.scale;
    let value = scale.get();
    let result = value / sharedValue1.get();
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
        const result1 = sharedValue1.set(scale.get());
      }
    };
    size1 = { originX: obj4.withSpring(currentOriginX.targetOriginX, layoutPhysics, "respect-motion-settings"), originY: obj5.withSpring(currentOriginX.targetOriginY, layoutPhysics, "respect-motion-settings"), width: obj6.withSpring(currentOriginX.targetWidth, layoutPhysics, "respect-motion-settings"), height: obj7.withSpring(currentOriginX.targetHeight, layoutPhysics, "respect-motion-settings") };
    obj4 = spring;
    obj5 = spring;
    obj6 = spring;
    obj7 = spring;
    return obj;
  }
  let obj8 = { pipState: pIPState, lastPIPScale: sharedValue1, withSpring: tmp5(tmp2[39]).withSpring, layoutPhysics, wrapperOffset };
  me.__closure = obj8;
  me.__workletHash = 12776532702151;
  me.__initData = __initData34;
  const items4 = [layoutPhysics, wrapperOffset, sharedValue1, pIPState.scale];
  const callback1 = obj.useCallback(me, items4);
  let obj9 = { gesture: tmpResultResult, children: wrapperDimensions(tmpResult2, obj10) };
  const GestureDetector = tmp5(tmp2[56]).GestureDetector;
  obj10 = { nativeID: tmp5Result18.getExternalPipTileNativeId("card", id), style: items5, layout: callback1, children };
  tmpResult2 = tmp(tmp2[42]);
  items5 = [tmp3.positionWrapper, animatedStyle];
  tmp5Result18 = tmp5(tmp2[55]);
  return wrapperDimensions(GestureDetector, obj9);
});
const __initData35 = { code: "function VoicePanelCardTsx40(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
const __initData36 = { code: "function layoutTransition_VoicePanelCardTsx41(values,t10){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;const disableAnimation=t10===undefined?false:t10;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
const __initData37 = { code: "function VoicePanelCardTsx42(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}" };
let closure_81 = { code: "function layoutTransition_VoicePanelCardTsx43(values,disableAnimation=false){const{layoutTransitionFunction,physics,pipState,lastPipScale}=this.__closure;return layoutTransitionFunction(values,physics,pipState.scale,lastPipScale,disableAnimation);}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelCard(arg0) {
  let DEFAULT;
  let channelId;
  let cleanUp;
  let closure_4;
  let connected;
  let guildId;
  let id2;
  let id3;
  let id4;
  let isCall;
  let item;
  let items1;
  let layoutManager;
  let layoutTransition;
  let layoutTransition2;
  let mountedCards;
  let num7;
  let physics;
  let scrollPosition;
  let sharedValue1;
  let streamGuildId;
  let streamId;
  let tmp10;
  let tmp13;
  let tmp43;
  let tmp7;
  let tmp70Result;
  let tmp75;
  let tmp9;
  let transitionState;
  let user;
  let user2;
  let userNick1;
  let windowDimensions;
  let tmp = scrollPosition;
  let tmp2 = id2;
  let obj = scrollPosition(id2[22]);
  const cResult = obj.c(80);
  ({ item, transitionState, cleanUp } = arg0);
  const id = item.id;
  const tmp4 = windowDimensions;
  const context = react.useContext(windowDimensions(id2[29]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp6 = windowDimensions(id2[50])(id, channelId, guildId);
  const obj2 = react;
  if (cResult[0] !== tmp6) {
    let tmp8 = tmp6;
    const tmpResult = tmp(tmp2[50]);
    if (!tmpResult.isStableParticipantWithUser(tmp6)) {
      tmp8 = closure_61;
    }
    cResult[0] = tmp6;
    cResult[1] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[1];
  }
  const isSelf = tmp7.isSelf;
  id2 = tmp7.user.id;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    class H {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[2] = items;
    cResult[3] = H;
    tmp10 = H;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult11 = tmp(tmp2[23]);
  const stateFromStores = tmpResult11.useStateFromStores(tmp9, tmp10);
  if (cResult[4] !== tmp6) {
    const tmpResult12 = tmp(tmp2[50]);
    const tmp14 = tmpResult12.isStableUserParticipant(tmp6) && tmp6.ringing;
    class H {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[5] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[5];
  }
  let str = "";
  if (null != tmp6) {
    str = "";
    if ("user" in tmp6) {
      str = tmp6.user.id;
    }
  }
  let type1;
  const tmp4Result = tmp4(tmp2[30]);
  if (tmp6 != null) {
    type1 = tmp6.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    DEFAULT = tmp(tmp2[31]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp(tmp2[31]).MediaEngineContextTypes.DEFAULT;
  }
  tmp4Result(DEFAULT, str);
  tmp4(tmp2[57])(str);
  const useSharedValue = tmp(tmp2[15]).useSharedValue;
  tmp(tmp2[15]);
  if (transitionState === tmp(tmp2[47]).TransitionStates.MOUNTED) {
    num7 = 1;
  } else {
    num7 = 0;
  }
  const sharedValue = useSharedValue(num7);
  const useSharedValue2 = tmp(tmp2[15]).useSharedValue;
  tmp(tmp2[15]);
  if (null != id2) {
    let isSpeakingResult = SpeakingStore.isSpeaking(id2) || sharedValue1.isUserPlayingSounds(id2);
    class H {
      constructor() {
        return connected.isConnected();
      }
    }
  }
  const sharedValue2 = useSharedValue2(tmp23);
  if (cResult[6] === sharedValue2) {
    let tmp28;
    let tmp29;
    let tmp38;
    if (cResult[7] === id2) {
      tmp28 = cResult[8];
      tmp29 = cResult[9];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp28, tmp29);
    tmp(tmp2[58]);
    class H {
      constructor() {
        return connected.isConnected();
      }
    }
    react = tmp32;
    const fn2 = function q() {
      const sum = EDGE_GUTTER + react.get().y;
      const value = scrollPosition.get();
      let tmp3 = sum > value - react.get().height;
      const obj = scrollPosition;
      if (tmp3) {
        const value2 = obj.get();
        tmp3 = sum < value2 + windowDimensions.get().height;
      }
      return tmp3;
    };
    const obj3 = { EDGE_GUTTER, coords: tmp32, scrollPosition, windowDimensions };
    fn2.__closure = obj3;
    fn2.__workletHash = 2901522095465;
    fn2.__initData = __initData35;
    const tmpResult16 = tmp(tmp2[15]);
    const derivedValue = tmpResult16.useDerivedValue(fn2);
    const tmpResult17 = tmp(tmp2[49]);
    const pIPState = tmpResult17.usePIPState();
    scale = pIPState.scale;
    const tmpResult18 = tmp(tmp2[15]);
    sharedValue1 = tmpResult18.useSharedValue(scale.get());
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { mass: closure_12.mass, damping: tmp4(tmp2[59])(closure_12.damping - 2, closure_12.damping + 2), stiffness: tmp4(tmp2[59])(closure_12.stiffness - 20, closure_12.stiffness + 20) };
      class H {
        constructor() {
          return connected.isConnected();
        }
      }
      cResult[10] = obj4;
      tmp38 = obj4;
    } else {
      tmp38 = cResult[10];
    }
    let closure_7 = tmp38;
    if (cResult[11] === sharedValue1) {
      let tmp40;
      if (cResult[12] === pIPState.scale) {
        tmp40 = cResult[13];
      }
      ({ physics, layoutTransition: layoutTransition2 } = tmp40);
      class H {
        constructor() {
          return connected.isConnected();
        }
      }
      if (item.type === constants2.CTA) {
        const id5 = item.id;
        if (constants.NO_VIDEO_PARTICIPANTS === id5) {
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            closure_21(tmp4(tmp2[60]), {});
            class H {
              constructor() {
                return connected.isConnected();
              }
            }
          }
          class H {
            constructor() {
              return connected.isConnected();
            }
          }
        } else if (tmp57.CALLER_DISCONNECTED === id5) {
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            closure_21(tmp4(tmp2[61]), {});
            class H {
              constructor() {
                return connected.isConnected();
              }
            }
          }
          class H {
            constructor() {
              return connected.isConnected();
            }
          }
        }
        if (cResult[58] === tmp13) {
          if (cResult[59] === layoutTransition2) {
            let tmp68;
            if (cResult[60] === tmp6) {
              tmp68 = cResult[61];
            }
            if (cResult[62] === id) {
              if (cResult[63] === isSelf) {
                if (cResult[64] === layoutTransition2) {
                  if (cResult[65] === tmp6) {
                    let tmp73;
                    if (cResult[66] === sharedValue2) {
                      tmp73 = cResult[67];
                    }
                    if (cResult[68] === tmp43) {
                      if (cResult[69] === cleanUp) {
                        if (cResult[70] === tmp32) {
                          if (cResult[71] === id) {
                            if (cResult[72] === stateFromStores) {
                              if (cResult[73] === derivedValue) {
                                if (cResult[74] === physics) {
                                  if (cResult[75] === sharedValue) {
                                    if (cResult[76] === tmp68) {
                                      if (cResult[77] === tmp73) {
                                        let tmp78;
                                        if (cResult[78] === transitionState) {
                                          tmp78 = cResult[79];
                                        }
                                        return tmp78;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    class H {
                      constructor() {
                        return connected.isConnected();
                      }
                    }
                    const obj5 = { cleanUp, coords: tmp32, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: items1 };
                    items1 = [tmp43, tmp68, tmp73];
                    const tmp80 = closure_23(closure_77, obj5);
                    cResult[68] = tmp43;
                    cResult[69] = cleanUp;
                    cResult[70] = tmp32;
                    cResult[71] = id;
                    cResult[72] = stateFromStores;
                    cResult[73] = derivedValue;
                    cResult[74] = physics;
                    cResult[75] = sharedValue;
                    cResult[76] = tmp68;
                    cResult[77] = tmp73;
                    cResult[78] = transitionState;
                    cResult[79] = tmp80;
                    tmp78 = tmp80;
                  }
                }
              }
            }
            tmp(tmp2[50]);
            class H {
              constructor() {
                return connected.isConnected();
              }
            }
            if (tmp75) {
              const obj6 = { speakingOrPlayingSoundboard: null, id, userId: tmp6.user.id, isSelf, layout: layoutTransition2 };
              class H {
                constructor() {
                  return connected.isConnected();
                }
              }
              tmp75 = closure_21(closure_51, obj6);
            }
            cResult[62] = id;
            cResult[63] = isSelf;
            cResult[64] = layoutTransition2;
            cResult[65] = tmp6;
            cResult[66] = sharedValue2;
            cResult[67] = tmp75;
            tmp73 = tmp75;
          }
        }
        class H {
          constructor() {
            return connected.isConnected();
          }
        }
        if (tmp70Result) {
          const obj7 = { isRinging: tmp13, participant: null, label: userNick1, layout: layoutTransition2 };
          const tmp70 = closure_21;
          class H {
            constructor() {
              return connected.isConnected();
            }
          }
          userNick1 = undefined;
          const tmp4Result2 = tmp4(tmp2[64]);
          const tmpResult20 = tmp(tmp2[50]);
          if (tmpResult20.isStableParticipantWithUser(tmp6)) {
            userNick1 = tmp6.userNick;
          }
          tmp70Result = tmp70(tmp4Result2, obj7);
        }
        cResult[58] = tmp13;
        cResult[59] = layoutTransition2;
        cResult[60] = tmp6;
        cResult[61] = tmp70Result;
        tmp68 = tmp70Result;
      } else if (null != tmp6) {
        const type = tmp6.type;
        if (ParticipantTypes.USER === type) {
          ({ id: id4, streamId, user: user2 } = tmp6);
          class H {
            constructor() {
              return connected.isConnected();
            }
          }
          if (cResult[28] === guildId) {
            let tmp51;
            if (cResult[29] === user2) {
              tmp51 = cResult[30];
            }
            const userAvatarDecoration = tmp6.userAvatarDecoration;
            class H {
              constructor() {
                return connected.isConnected();
              }
            }
            const obj8 = { isRinging: tmp13, avatarURI: tmp51, avatarDecoration: userAvatarDecoration, layout: layoutTransition2, layoutPhysics: physics, userId: user2.id, guildId };
            cResult[31] = guildId;
            cResult[32] = tmp13;
            cResult[33] = layoutTransition2;
            cResult[34] = physics;
            cResult[35] = tmp51;
            cResult[36] = userAvatarDecoration;
            cResult[37] = user2.id;
            cResult[38] = closure_21(closure_43, obj8);
            const tmp56 = closure_21(closure_43, obj8);
          }
          const avatarURL = user2.getAvatarURL(guildId, 80, false);
          cResult[28] = guildId;
          cResult[29] = user2;
          cResult[30] = avatarURL;
          tmp51 = avatarURL;
        } else if (ParticipantTypes.STREAM === type) {
          ({ user, id: id3, streamGuildId } = tmp6);
          class H {
            constructor() {
              return connected.isConnected();
            }
          }
          const userNick = tmp6.userNick;
          if (cResult[39] === tmp32) {
            if (cResult[40] === id3) {
              if (cResult[41] === derivedValue) {
                if (cResult[42] === isSelf) {
                  if (cResult[43] === layoutTransition2) {
                    if (cResult[44] === streamGuildId) {
                      if (cResult[45] === tmp46) {
                        if (cResult[46] === user.id) {
                          let tmp47;
                          if (cResult[47] === userNick) {
                            tmp47 = cResult[48];
                          }
                          tmp43 = tmp47;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj9 = { userId: user.id, id: id3, streamGuildId, streamId: tmp46, userNick, isSelf, sharedCoords: tmp32, isScrollVisible: derivedValue, layout: layoutTransition2 };
          const tmp50 = closure_21(closure_38, obj9);
          cResult[39] = tmp32;
          cResult[40] = id3;
          cResult[41] = derivedValue;
          cResult[42] = isSelf;
          cResult[43] = layoutTransition2;
          cResult[44] = streamGuildId;
          cResult[45] = tmp46;
          cResult[46] = user.id;
          cResult[47] = userNick;
          cResult[48] = tmp50;
          tmp47 = tmp50;
        } else if (ParticipantTypes.ACTIVITY === type) {
          if (cResult[49] === layoutTransition2) {
            if (cResult[50] === tmp6.applicationId) {
              if (cResult[51] === tmp6.id) {
                if (cResult[52] === sharedValue) {
                  tmp43 = cResult[53];
                }
              }
            }
          }
          const obj10 = { sharedVisible: null, applicationId: tmp6.applicationId, layout: layoutTransition2 };
          class H {
            constructor() {
              return connected.isConnected();
            }
          }
          const tmp45 = closure_21(tmp4(tmp2[63]), obj10, tmp6.id);
          cResult[49] = layoutTransition2;
          cResult[50] = tmp6.applicationId;
          cResult[51] = tmp6.id;
          cResult[52] = sharedValue;
          cResult[53] = tmp45;
          tmp43 = tmp45;
        }
      }
      if (cResult[54] === tmp13) {
        if (cResult[55] === layoutTransition2) {
          let tmp58;
          if (cResult[56] === physics) {
            tmp58 = cResult[57];
          }
          tmp43 = tmp58;
        }
      }
      const obj11 = { isRinging: tmp13, avatarURI: "r", avatarDecoration: "toCharArray$esjava$1", layout: layoutTransition2, layoutPhysics: physics };
      const tmp61 = closure_21(closure_43, obj11);
      cResult[54] = tmp13;
      cResult[55] = layoutTransition2;
      cResult[56] = physics;
      cResult[57] = tmp61;
      tmp58 = tmp61;
    }
    const obj12 = { physics: tmp38, layoutTransition };
    layoutTransition = function layoutTransition(originX, arg1) {
      const tmp = undefined !== arg1 && arg1;
      return layoutTransitionFunction(originX, closure_7, pIPState.scale, sharedValue1, tmp);
    };
    const obj13 = { layoutTransitionFunction, physics: tmp38, pipState: pIPState, lastPipScale: sharedValue1 };
    layoutTransition.__closure = obj13;
    layoutTransition.__workletHash = 5354393718549;
    layoutTransition.__initData = __initData36;
    cResult[11] = sharedValue1;
    cResult[12] = pIPState.scale;
    cResult[13] = obj12;
    tmp40 = obj12;
  }
  const fn = function $() {
    function handleChange() {
      let tmp3 = null != id2;
      if (tmp3) {
        tmp3 = SpeakingStore.isSpeaking(tmp2) || sharedValue1.isUserPlayingSounds(tmp2);
        const isSpeakingResult = SpeakingStore.isSpeaking(tmp2) || sharedValue1.isUserPlayingSounds(tmp2);
      }
      const result = set(tmp3);
    }
    const tmp2 = id2;
    let tmp3 = null != id2;
    set = sharedValue2.set;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
      if (!isSpeakingResult) {
        isSpeakingResult = sharedValue1.isUserPlayingSounds(tmp2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = sharedValue1.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  };
  const items2 = [id2, sharedValue2];
  cResult[6] = sharedValue2;
  cResult[7] = id2;
  cResult[8] = fn;
  cResult[9] = items2;
  tmp29 = items2;
  tmp28 = fn;
}) : (function VoicePanelCard(cleanUp) {
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
  let tmp30;
  let tmp31;
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
  let tmp2 = id2;
  cleanUp = cleanUp.cleanUp;
  const context = cardLayoutCoordsSubscription.useContext(windowDimensions(id2[29]));
  ({ guildId, isCall, mountedCards, scrollPosition } = context);
  windowDimensions = context.windowDimensions;
  ({ channelId, layoutManager } = context);
  const tmp4 = windowDimensions(id2[50])(id, channelId, guildId);
  let obj2 = scrollPosition(id2[50]);
  let tmp6 = tmp4;
  if (!obj2.isStableParticipantWithUser(tmp4)) {
    tmp6 = closure_61;
  }
  const isSelf = tmp6.isSelf;
  id2 = tmp6.user.id;
  const items = [RTCConnectionStore];
  const tmp5Result = scrollPosition(tmp2[23]);
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
  const tmpResult = tmp(tmp2[30]);
  if (tmp4 != null) {
    type1 = tmp4.type;
  }
  if (type1 === ParticipantTypes.STREAM) {
    DEFAULT = tmp5(tmp2[31]).MediaEngineContextTypes.STREAM;
  } else {
    DEFAULT = tmp5(tmp2[31]).MediaEngineContextTypes.DEFAULT;
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
    let isSpeakingResult = SpeakingStore.isSpeaking(id2) || sharedValue1.isUserPlayingSounds(id2);
    tmp17 = isSpeakingResult;
  }
  sharedValue2 = useSharedValue2(tmp17);
  const items1 = [id2, sharedValue2];
  const layoutEffect = obj.useLayoutEffect(() => {
    function handleChange() {
      let tmp3 = null != id2;
      if (tmp3) {
        tmp3 = SpeakingStore.isSpeaking(tmp2) || sharedValue1.isUserPlayingSounds(tmp2);
        const isSpeakingResult = SpeakingStore.isSpeaking(tmp2) || sharedValue1.isUserPlayingSounds(tmp2);
      }
      const result = set(tmp3);
    }
    const tmp2 = id2;
    let tmp3 = null != id2;
    set = sharedValue2.set;
    if (tmp3) {
      let isSpeakingResult = SpeakingStore.isSpeaking(tmp2);
      if (!isSpeakingResult) {
        isSpeakingResult = sharedValue1.isUserPlayingSounds(tmp2);
      }
      tmp3 = isSpeakingResult;
    }
    let result = set(tmp3);
    let result1 = SpeakingStore.addReactChangeListener(handleChange);
    const result2 = sharedValue1.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
      const result1 = SoundboardStore.removeReactChangeListener(handleChange);
    };
  }, items1);
  const tmp5Result13 = scrollPosition(tmp2[58]);
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
  fn.__workletHash = 4524381131947;
  fn.__initData = __initData37;
  const tmp5Result14 = scrollPosition(tmp2[15]);
  const derivedValue = tmp5Result14.useDerivedValue(fn);
  const tmp5Result15 = scrollPosition(tmp2[49]);
  pIPState = tmp5Result15.usePIPState();
  scale = pIPState.scale;
  const tmp5Result16 = scrollPosition(tmp2[15]);
  sharedValue1 = tmp5Result16.useSharedValue(scale.get());
  const items2 = [pIPState.scale, sharedValue1];
  const memo = obj.useMemo(() => {
    let layoutTransition;
    const physics = { mass: closure_1_12.mass, damping: windowDimensions(id2[59])(closure_1_12.damping - 2, closure_1_12.damping + 2), stiffness: windowDimensions(id2[59])(closure_1_12.stiffness - 20, closure_1_12.stiffness + 20) };
    const obj2 = { physics, layoutTransition };
    layoutTransition = function layoutTransition(originX, flag) {
      if (flag === undefined) {
        flag = false;
      }
      return layoutTransitionFunction(originX, obj, pIPState.scale, sharedValue1, flag);
    };
    const obj3 = { layoutTransitionFunction, physics, pipState: pIPState, lastPipScale: sharedValue1 };
    layoutTransition.__closure = obj3;
    layoutTransition.__workletHash = 3971511316222;
    layoutTransition.__initData = __initData;
    return obj2;
  }, items2);
  ({ physics, layoutTransition } = memo);
  if (item.type === constants2.CTA) {
    const id3 = item.id;
    if (constants.NO_VIDEO_PARTICIPANTS === id3) {
      tmp30 = closure_21(tmp(tmp2[60]), {});
      tmp31 = closure_21;
    } else if (tmp41.CALLER_DISCONNECTED === id3) {
      tmp30 = closure_21(tmp(tmp2[61]), {});
      tmp31 = closure_21;
    }
    const obj4 = { cleanUp, coords: cardLayoutCoordsSubscription, id, isRTCConnected: stateFromStores, isScrollVisible: derivedValue, layoutPhysics: physics, transitionState, sharedVisible: sharedValue, children: items3 };
    items3 = [tmp30, , ];
    let tmp31Result = null != tmp4;
    const tmp44 = closure_23;
    const tmp45 = closure_77;
    if (tmp31Result) {
      const obj5 = { isRinging: tmp8, participant: tmp4, label: userNick, layout: layoutTransition };
      userNick = undefined;
      const tmpResult3 = tmp(tmp2[64]);
      const tmp5Result17 = scrollPosition(tmp2[50]);
      if (tmp5Result17.isStableParticipantWithUser(tmp4)) {
        userNick = tmp4.userNick;
      }
      tmp31Result = tmp31(tmpResult3, obj5);
    }
    items3[1] = tmp31Result;
    const tmp5Result18 = scrollPosition(tmp2[50]);
    let result = tmp5Result18.isStableParticipantWithUser(tmp4);
    if (result) {
      const obj6 = { speakingOrPlayingSoundboard: sharedValue2, id, userId: tmp4.user.id, isSelf, layout: layoutTransition };
      result = tmp31(closure_51, obj6);
    }
    items3[2] = result;
    return tmp44(tmp45, obj4);
  } else if (null != tmp4) {
    const type = item.type;
    const type2 = tmp4.type;
    if (ParticipantTypes.USER === type2) {
      let tmp33;
      ({ streamId, user } = tmp4);
      if (tmp4.hasVideo) {
        if (stateFromStores) {
          let tmp33Result;
          if (tmp4.canRenderVideo) {
            let tmp36;
            if (null != tmpResultResult) {
              let tmp36Result;
              if (null == tmp13) {
                const obj7 = { avError: tmpResultResult, userId: user.id, style: pIPState.absoluteFill };
                tmp36Result = closure_21(tmp(tmp2[62]), obj7);
                tmp36 = closure_21;
              }
              tmp33 = tmp36;
              tmp33Result = tmp36Result;
            }
            tmp36 = closure_21;
            const obj8 = { id: tmp32, userId: user.id, streamId, isScrollVisible: derivedValue, videoSpinnerContext: isSelf ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, sharedCoords: cardLayoutCoordsSubscription, isCamera: true, focusOnReady: isCall, layout: layoutTransition };
            const tmpResult4 = tmp(tmp2[35]);
            if (streamId == null) {
              streamId = null;
            }
            VideoSpinnerContext = tmp5(tmp2[36]).VideoSpinnerContext;
            if (isCall) {
              isCall = !isSelf;
            }
            tmp36Result = tmp36(tmpResult4, obj8);
          }
          tmp31 = tmp33;
          tmp30 = tmp33Result;
        }
      }
      tmp33 = closure_21;
      let flag = false;
      const obj9 = { isRinging: tmp8, avatarURI: user.getAvatarURL(guildId, 80, false), avatarDecoration: userAvatarDecoration, layout: layoutTransition, layoutPhysics: physics, userId: user.id, guildId };
      userAvatarDecoration = tmp4.userAvatarDecoration;
      tmp33Result = tmp33(closure_43, obj9);
    } else if (ParticipantTypes.STREAM === type2) {
      const obj11 = { userId: tmp4.user.id, id: null, streamGuildId: null, streamId: null, userNick: null, isSelf, sharedCoords: cardLayoutCoordsSubscription, isScrollVisible: derivedValue, layout: layoutTransition };
      ({ id: obj10.id, streamGuildId: obj10.streamGuildId, streamId: obj10.streamId, userNick: obj10.userNick } = tmp4);
      tmp30 = closure_21(closure_38, obj11);
      tmp31 = closure_21;
    } else if (ParticipantTypes.ACTIVITY === type2) {
      const obj12 = { sharedVisible: sharedValue, applicationId: tmp4.applicationId, layout: layoutTransition };
      tmp30 = closure_21(tmp(tmp2[63]), obj12, tmp4.id);
      tmp31 = closure_21;
    }
  }
  const obj13 = { isRinging: tmp8, avatarURI: "r", avatarDecoration: "toCharArray$esjava$1", layout: layoutTransition, layoutPhysics: physics };
  tmp30 = closure_21(closure_43, obj13);
  tmp31 = closure_21;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCard.tsx");

export default memoResult;
