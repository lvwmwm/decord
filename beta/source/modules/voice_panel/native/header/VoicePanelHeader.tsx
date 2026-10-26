// Module ID: 18499
// Function ID: 18500
// Name: VoicePanelHeader
// Dependencies: [32, 19, 17, 6772, 5190, 11522, 502, 4823, 2014, 4913, 6685, 1392, 10900, 10903, 10898, 5632, 1098, 21, 4971, 587, 558, 576, 5052, 5247, 5585, 6886, 7168, 10899, 11689, 504, 11524, 1128, 11533, 8461, 11534, 18476, 5267, 18477, 18500, 5604, 5252, 10906, 5206, 18501, 18502, 18503, 6930, 18504, 5851, 9215, 9177, 17974, 18505, 11080, 18531, 14178, 1108, 18542, 18551, 10860, 18553, 18554, 5037, 2]

// Module 18499 (VoicePanelHeader)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import intl5 from "intl" /* 1128 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import timing from "timing" /* 5206 */;
import spring from "spring" /* 5247 */;
import useChannelName from "useChannelName" /* 5604 */;
import CallConstants from "CallConstants" /* 5632 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 10898 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 10903 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 10906 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 11534 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 11689 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 18476 */;
import useStableParticipant from "useStableParticipant" /* 18504 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import ExperimentStore from "ExperimentStore" /* 5190 */;
import StageMusicStore from "StageMusicStore" /* 11522 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import SpeakingStore from "SpeakingStore" /* 6685 */;
import UserStore from "UserStore" /* 1392 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10900 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_0, str3;

let closure_16;
let closure_17;
let closure_18;
let closure_23;
let closure_24;
let obj2;
let obj3;
let size;
let size1;
const StyleSheet = react_native.StyleSheet;
let AuthenticationStore = AuthenticationStore_mod;
let MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = VoicePanelConstants);
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ParticipantTypes = CallConstants.ParticipantTypes;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_23, jsxs: closure_24 } = Fragment);
const OPACITY_TIMING = { duration: 300 };
let createStyles = createStyles_mod;
let obj = { headerWrapper: { zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%" }, headerSurface: obj2, blurStyles: obj3, leftWrapper: { position: "relative", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: 12 }, rightWrapper: { flexDirection: "row", alignItems: "center", gap: 12, paddingLeft: 12 }, headerOuter: { flexDirection: "row", alignItems: "center" }, headerInner: { flexDirection: "row", alignItems: "center", flexShrink: 1, flexGrow: 1 }, headerContentWrapper: { position: "relative" }, stroke: { height: StyleSheet.hairlineWidth, opacity: 0.2 }, strokeAlt: { height: StyleSheet.hairlineWidth, opacity: 0.8 }, strokeContainer: { position: "absolute", left: 0, right: 0, bottom: 0, height: StyleSheet.hairlineWidth }, focusedSpeakingDotWrapper: size, focusedSpeakingDot: size1, shieldIconMargin: { marginLeft: -8 } };
obj2 = { paddingBottom: EDGE_GUTTER, overflow: "hidden" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { opacity: 0.7 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, padding: 2 };
size1 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
let closure_26 = createStyles(obj);
const constants = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj4 = { overshootClamping: true };
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
const __initData = { code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
const __initData2 = { code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
const __initData3 = { code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
const __initData4 = { code: "function VoicePanelHeaderTsx4(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
const __initData5 = { code: "function VoicePanelHeaderTsx5(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
const __initData6 = { code: "function VoicePanelHeaderTsx6(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderBlur(isHeaderHidden) {
  let focused;
  let items1;
  let items2;
  let tmp7;
  const tmp = focused;
  let obj = isHeaderHidden(focused[21]);
  const cResult = obj.c(17);
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  focused = isHeaderHidden.focused;
  const tmp3 = closure_26();
  const fn = function n() {
    const value = isHeaderHidden.get();
    let tmp2 = !value;
    if (tmp2) {
      tmp2 = null != focused.get() || scrollPosition.get() > 0;
      const tmp5 = null != focused.get() || scrollPosition.get() > 0;
    }
    return tmp2;
  };
  fn.__closure = { isHeaderHidden, focused, scrollPosition };
  fn.__workletHash = 8127245112238;
  fn.__initData = __initData;
  const obj2 = isHeaderHidden(focused[22]);
  const derivedValue = obj2.useDerivedValue(fn);
  const fn2 = function o() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (derivedValue.get()) {
      num = 0.3;
    }
    const obj = { blurAmount: withSpring(num) };
    return obj;
  };
  const obj3 = isHeaderHidden(focused[22]);
  obj4 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
  fn2.__closure = obj4;
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
  const animatedProps = obj3.useAnimatedProps(fn2);
  const fn3 = function c() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (derivedValue.get()) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, obj4) };
    return obj;
  };
  const obj5 = isHeaderHidden(focused[22]);
  fn3.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  ({ withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 });
  const animatedStyle = obj5.useAnimatedStyle(fn3);
  if (cResult[0] !== animatedStyle) {
    const items = [StyleSheet.absoluteFill, animatedStyle];
    let num = 0;
    cResult[0] = animatedStyle;
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === animatedProps) {
    let tmp9;
    let tmp11;
    let tmp15;
    if (cResult[3] === tmp3.blurStyles) {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== tmp3.stroke) {
      const obj7 = { style: tmp3.stroke };
      const tmp14 = closure_23(scrollPosition(tmp[25]), obj7);
      cResult[5] = tmp3.stroke;
      cResult[6] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp3.strokeAlt) {
      const obj8 = { style: tmp3.strokeAlt };
      const tmp18 = closure_23(scrollPosition(tmp[25]), obj8);
      cResult[7] = tmp3.strokeAlt;
      cResult[8] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp3.strokeContainer) {
      if (cResult[10] === tmp11) {
        let tmp19;
        if (cResult[11] === tmp15) {
          tmp19 = cResult[12];
        }
        if (cResult[13] === tmp7) {
          if (cResult[14] === tmp9) {
            let tmp23;
            if (cResult[15] === tmp19) {
              tmp23 = cResult[16];
            }
            return tmp23;
          }
        }
        const obj9 = { style: tmp7, pointerEvents: "none", children: items1 };
        items1 = [tmp9, tmp19];
        const tmp26 = closure_24(scrollPosition(tmp[26]), obj9);
        cResult[13] = tmp7;
        cResult[14] = tmp9;
        cResult[15] = tmp19;
        cResult[16] = tmp26;
        tmp23 = tmp26;
      }
    }
    const obj10 = { style: tmp3.strokeContainer, children: items2 };
    items2 = [tmp11, tmp15];
    const tmp22 = closure_24(scrollPosition(tmp[25]), obj10);
    cResult[9] = tmp3.strokeContainer;
    cResult[10] = tmp11;
    cResult[11] = tmp15;
    cResult[12] = tmp22;
    tmp19 = tmp22;
  }
  const obj11 = { style: tmp3.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  const tmp10 = closure_23(scrollPosition(tmp[24]), obj11);
  cResult[2] = animatedProps;
  cResult[3] = tmp3.blurStyles;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function HeaderBlur(isHeaderHidden) {
  let items;
  let items1;
  let items2;
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = closure_26();
  let obj = isHeaderHidden(focused[22]);
  const fn = function c() {
    const value = isHeaderHidden.get();
    let tmp2 = !value;
    if (tmp2) {
      tmp2 = null != focused.get() || scrollPosition.get() > 0;
      const tmp5 = null != focused.get() || scrollPosition.get() > 0;
    }
    return tmp2;
  };
  fn.__closure = { isHeaderHidden, focused, scrollPosition };
  fn.__workletHash = 17400658237995;
  fn.__initData = __initData4;
  const derivedValue = obj.useDerivedValue(fn);
  const fn2 = function l() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (derivedValue.get()) {
      num = 0.3;
    }
    const obj = { blurAmount: withSpring(num) };
    return obj;
  };
  const obj2 = isHeaderHidden(focused[22]);
  fn2.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
  fn2.__workletHash = 850837345455;
  fn2.__initData = __initData5;
  ({ withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue });
  const animatedProps = obj2.useAnimatedProps(fn2);
  obj4 = isHeaderHidden(focused[22]);
  const fn3 = function u() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (derivedValue.get()) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, obj4) };
    return obj;
  };
  fn3.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  fn3.__workletHash = 6395364000396;
  fn3.__initData = __initData6;
  ({ withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 });
  const animatedStyle = obj4.useAnimatedStyle(fn3);
  const obj6 = { style: items, pointerEvents: "none", children: items1 };
  items = [StyleSheet.absoluteFill, animatedStyle];
  let tmp5 = scrollPosition(focused[26]);
  items1 = [, ];
  const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  items1[0] = closure_23(scrollPosition(focused[24]), obj7);
  const obj8 = { style: tmp.strokeContainer, children: items2 };
  items2 = [, ];
  const obj9 = { style: tmp.stroke };
  const tmp6 = scrollPosition(focused[25]);
  items2[0] = closure_23(scrollPosition(focused[25]), obj9);
  const obj10 = { style: tmp.strokeAlt };
  items2[1] = closure_23(scrollPosition(focused[25]), obj10);
  items1[1] = closure_24(tmp6, obj8);
  return closure_24(tmp5, obj6);
}));
const __initData7 = { code: "function VoicePanelHeaderTsx7(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
const __initData8 = { code: "function VoicePanelHeaderTsx8(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
const __initData9 = { code: "function VoicePanelHeaderTsx9(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
const __initData10 = { code: "function VoicePanelHeaderTsx10(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function FocusedSpeakingDot() {
  let controlsSpecs;
  let derivedValue;
  let focused;
  let id;
  const obj = id(controlsSpecs[21]);
  const cResult = obj.c(12);
  id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[27]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const obj3 = id(controlsSpecs[22]);
  const sharedValue = obj3.useSharedValue(SpeakingStore.isSpeaking(id));
  const obj2 = derivedValue;
  if (cResult[0] === id) {
    let tmp8;
    let tmp9;
    if (cResult[1] === sharedValue) {
      tmp8 = cResult[2];
      tmp9 = cResult[3];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp8, tmp9);
    const tmp12 = closure_26();
    const tmpResult = id(controlsSpecs[22]);
    class S {
      constructor() {
        const value = null != focused.get() && controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN && sharedValue.get();
        return value;
      }
    }
    obj4 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
    S.__closure = obj4;
    S.__workletHash = 297593450050;
    S.__initData = __initData7;
    derivedValue = tmpResult.useDerivedValue(S);
    const tmpResult2 = id(controlsSpecs[22]);
    class H {
      constructor() {
        let opacity = 0;
        if (derivedValue.get()) {
          opacity = 1;
        }
        return { opacity };
      }
    }
    const obj5 = { showSpeakingIndicator: derivedValue };
    H.__closure = obj5;
    H.__workletHash = 10090467727535;
    H.__initData = __initData8;
    const animatedStyle = tmpResult2.useAnimatedStyle(H);
    if (cResult[4] === animatedStyle) {
      let tmp18;
      let tmp19;
      if (cResult[5] === tmp12.focusedSpeakingDotWrapper) {
        tmp18 = cResult[6];
      }
      if (cResult[7] !== tmp12.focusedSpeakingDot) {
        const obj6 = { style: tmp12.focusedSpeakingDot };
        const tmp21 = closure_23(focused(controlsSpecs[26]), obj6);
        class S {
          constructor() {
            const value = null != focused.get() && controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN && sharedValue.get();
            return value;
          }
        }
        cResult[8] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === tmp18) {
        let tmp22;
        if (cResult[10] === tmp19) {
          tmp22 = cResult[11];
        }
        return tmp22;
      }
      const obj7 = { style: null, pointerEvents: "none", children: tmp19 };
      class S {
        constructor() {
          const value = null != focused.get() && controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN && sharedValue.get();
          return value;
        }
      }
      const tmp24 = closure_23(focused(controlsSpecs[26]), obj7);
      cResult[9] = tmp18;
      cResult[10] = tmp19;
      cResult[11] = tmp24;
      tmp22 = tmp24;
    }
    const items = [tmp12.focusedSpeakingDotWrapper, animatedStyle];
    cResult[4] = animatedStyle;
    cResult[5] = tmp12.focusedSpeakingDotWrapper;
    cResult[6] = items;
    tmp18 = items;
  }
  const fn = function t() {
    function handleChange() {
      const result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    }
    let result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  };
  const items1 = [id, sharedValue];
  cResult[0] = id;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : (function FocusedSpeakingDot() {
  let controlsSpecs;
  let derivedValue;
  let focused;
  let items1;
  let obj6;
  const id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[27]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const obj = id(controlsSpecs[22]);
  const sharedValue = obj.useSharedValue(SpeakingStore.isSpeaking(id));
  const items = [id, sharedValue];
  const layoutEffect = derivedValue.useLayoutEffect(() => {
    function handleChange() {
      const result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    }
    let result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  }, items);
  const tmp5 = closure_26();
  const fn = function u() {
    const value = null != focused.get() && controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN && sharedValue.get();
    return value;
  };
  const obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  fn.__closure = obj3;
  fn.__workletHash = 4860356878028;
  fn.__initData = __initData9;
  const obj2 = id(controlsSpecs[22]);
  derivedValue = obj2.useDerivedValue(fn);
  const fn2 = function h() {
    let opacity = 0;
    if (derivedValue.get()) {
      opacity = 1;
    }
    return { opacity };
  };
  fn2.__closure = { showSpeakingIndicator: derivedValue };
  fn2.__workletHash = 898986210230;
  fn2.__initData = __initData10;
  obj4 = id(controlsSpecs[22]);
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const obj5 = { style: items1, pointerEvents: "none", children: closure_23(focused(controlsSpecs[26]), obj6) };
  items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  obj6 = { style: tmp5.focusedSpeakingDot };
  const tmp8 = focused(controlsSpecs[26]);
  return closure_23(tmp8, obj5);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_41 = ReactCompilerGating.isReactCompilerEnabled() ? (function MusicMuteButton(channelId) {
  let muted;
  let speaker;
  let stateFromStores;
  let tmp6;
  let tmp7;
  let obj = stateFromStores(576);
  const cResult = obj.c(10);
  channelId = channelId.channelId;
  const tmp5 = useMyCurrentStageChannelRoleDefault(channelId);
  if (tmp5 != null) {
    speaker = tmp5.speaker;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageMusicStore];
    const fn = function o() {
      return muted.isMuted();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const tmpResult2 = stateFromStores(11524);
  if (tmpResult2.useShowStageMusicMuteButton(channelId)) {
    if (speaker) {
      let tmp10;
      let tmp13;
      if (cResult[2] !== stateFromStores) {
        let stringResult;
        const intl = tmp(1128).intl;
        const string = intl.string;
        const t = tmp(1128).t;
        if (stateFromStores) {
          stringResult = string(t.ScHlfl);
        } else {
          stringResult = string(t.zqxfrf);
        }
        cResult[2] = stateFromStores;
        cResult[3] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      const tmp4Result = importDefault(stateFromStores ? 11533 : 8461);
      if (cResult[4] !== stateFromStores) {
        const fn2 = function p() {
          const obj = StageMusicActionCreators;
          return obj.updateStageMusicMuted(!stateFromStores);
        };
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp10) {
        if (cResult[7] === tmp4Result) {
          let tmp14;
          if (cResult[8] === tmp13) {
            tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj2 = { accessibilityLabel: tmp10, icon: tmp4Result, onPress: tmp13 };
      const tmp16 = closure_23(VoicePanelIconButtonDefault, obj2);
      cResult[6] = tmp10;
      cResult[7] = tmp4Result;
      cResult[8] = tmp13;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    }
  }
  return null;
}) : (function MusicMuteButton(channelId) {
  let muted;
  let speaker;
  channelId = channelId.channelId;
  let stateFromStores;
  const tmp3 = useMyCurrentStageChannelRoleDefault(channelId);
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  let obj = stateFromStores(504);
  const items = [StageMusicStore];
  stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  let tmp7Result = null;
  const obj2 = stateFromStores(11524);
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    tmp7Result = null;
    if (speaker) {
      let stringResult;
      const tmpResult = VoicePanelIconButtonDefault;
      const intl = tmp4(1128).intl;
      const string = intl.string;
      const t = tmp4(1128).t;
      const tmp7 = closure_23;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 11533 : 8461),
        onPress() {
              const obj = StageMusicActionCreators;
              return obj.updateStageMusicMuted(!stateFromStores);
            }
      };
      tmp7Result = tmp7(tmpResult, obj3);
    }
  }
  return tmp7Result;
});
const __initData11 = { code: "function VoicePanelHeaderTsx11(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData12 = { code: "function VoicePanelHeaderTsx12(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData13 = { code: "function VoicePanelHeaderTsx13(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
const __initData14 = { code: "function VoicePanelHeaderTsx14(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{height:!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height};}" };
const __initData15 = { code: "function VoicePanelHeaderTsx15(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_1=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;return{paddingTop:!connected.get()?EDGE_GUTTER:specs_1.paddingTop,paddingLeft:specs_1.paddingLeft,paddingRight:specs_1.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData16 = { code: "function VoicePanelHeaderTsx16(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData17 = { code: "function VoicePanelHeaderTsx17(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData18 = { code: "function VoicePanelHeaderTsx18(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?\"none\":\"box-none\",importantForAccessibility:isHeaderHidden.get()?\"no-hide-descendants\":\"auto\",accessibilityElementsHidden:isHeaderHidden.get()};}" };
const __initData19 = { code: "function VoicePanelHeaderTsx19(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData20 = { code: "function VoicePanelHeaderTsx20(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData21 = { code: "function VoicePanelHeaderTsx21(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
const __initData22 = { code: "function VoicePanelHeaderTsx22(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{height:!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height};}" };
const __initData23 = { code: "function VoicePanelHeaderTsx23(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_1=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;return{paddingTop:!connected.get()?EDGE_GUTTER:specs_1.paddingTop,paddingLeft:specs_1.paddingLeft,paddingRight:specs_1.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData24 = { code: "function VoicePanelHeaderTsx24(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData25 = { code: "function VoicePanelHeaderTsx25(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData26 = { code: "function VoicePanelHeaderTsx26(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelHeader(wrapperOffset) {
  let DOWN;
  let channelId;
  let channelType;
  let closure_15;
  let controlsSpecs;
  let derivedValue1;
  let first;
  let focused;
  let guildId;
  let scrollPosition;
  let stringResult;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp26;
  let tmp39;
  let tmp62;
  let tmp65;
  let token;
  let tmp = wrapperOffset;
  let tmp2 = channelId;
  let obj = wrapperOffset(channelId[21]);
  const cResult = obj.c(113);
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const tmp4 = closure_26();
  let obj2 = controlsSpecs;
  const tmp5 = gestureState;
  const context = controlsSpecs.useContext(gestureState(channelId[27]));
  channelId = context.channelId;
  ({ channelType, focused } = context);
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  ({ scrollPosition, guildId } = context);
  let obj3 = wrapperOffset(channelId[36]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    let num2 = 1;
    cResult[1] = channelId;
    let num3 = 2;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp11 = items1;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  let tmpResult = tmp(tmp2[29]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp10, tmp11);
  const tmp13 = tmp5(tmp2[37])(channelId);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    obj4 = { location: "VoicePanelHeader" };
    cResult[4] = obj4;
    tmp14 = obj4;
  } else {
    tmp14 = cResult[4];
  }
  const tmp5Result = tmp5(tmp2[38]);
  const treatment = tmp5Result.useConfig(tmp14).treatment;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [derivedValue1, token, ChannelStore, connected];
    cResult[5] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== channelId) {
    function le() {
      const channel = ChannelStore.getChannel(channelId);
      let channelName;
      if (null != channel) {
        const obj = useChannelName;
        channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
      }
      if (channelName == null) {
        const intl = intl5.intl;
        channelName = intl.string(intl5.t.zLZPmk);
      }
      return channelName;
    }
    const items3 = [channelId];
    cResult[6] = channelId;
    cResult[7] = le;
    cResult[8] = items3;
    tmp21 = items3;
    tmp20 = le;
  } else {
    tmp20 = cResult[7];
    tmp21 = cResult[8];
  }
  const tmpResult17 = tmp(tmp2[29]);
  const stateFromStores1 = tmpResult17.useStateFromStores(tmp15, tmp20, tmp21);
  [tmp24, AuthenticationStore] = focused(obj2.useState(undefined), 2);
  focused(obj2.useState(undefined), 2);
  [tmp26, ChannelStore] = focused(obj2.useState(null), 2);
  function handleFocusChange(arg0) {
    let tmp3 = null;
    const tmp = ChannelStore;
    if (null != arg0) {
      const participant = ChannelRTCStore.getParticipant(tmp2, arg0);
      let type = null;
      if (null != participant) {
        type = participant.type;
      }
      tmp3 = type;
    }
    tmp(tmp3);
    AuthenticationStore(arg0);
  }
  focused(obj2.useState(null), 2);
  function _e() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  }
  _e.__closure = { focused };
  _e.__workletHash = 8016082904457;
  _e.__initData = __initData11;
  function ge(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(handleFocusChange)(arg0);
    }
  }
  const tmpResult18 = tmp(tmp2[22]);
  ge.__closure = { runOnJS: tmp(tmp2[22]).runOnJS, handleFocusChange };
  ge.__workletHash = 9918394343352;
  ge.__initData = __initData12;
  ({ runOnJS: tmp(tmp2[22]).runOnJS, handleFocusChange });
  const animatedReaction = tmpResult18.useAnimatedReaction(_e, ge);
  const tmpResult19 = tmp(tmp2[40]);
  token = tmpResult19.useToken(tmp5(tmp2[19]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmpResult20 = tmp(tmp2[22]);
  class Te {
    constructor() {
      let num;
      const tmp = calculateVoicePanelHeaderSpecsDefault;
      const obj = mode;
      const tmpResult = tmp(safeArea.get(), token);
      if (mode.get() === constants.PIP) {
        num = -tmpResult.height + EDGE_GUTTER;
      } else {
        num = 0;
        if (obj.get() === tmp3.DISMISSED) {
          num = 0;
        }
      }
      return num;
    }
  }
  Te.__closure = { calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  Te.__workletHash = 2737204369147;
  Te.__initData = __initData13;
  ({ calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER });
  const derivedValue = tmpResult20.useDerivedValue(Te);
  const tmpResult21 = tmp(tmp2[22]);
  class Ce {
    constructor() {
      let height1;
      const tmp = calculateVoicePanelHeaderSpecsDefault;
      const tmpResult = tmp(safeArea.get(), token);
      const height = tmpResult.height;
      if (connected.get()) {
        height1 = height;
      } else {
        height1 = height - tmpResult.paddingTop + EDGE_GUTTER;
      }
      return { height: height1 };
    }
  }
  Ce.__closure = { calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, connected, EDGE_GUTTER };
  Ce.__workletHash = 9724674813169;
  Ce.__initData = __initData14;
  ({ calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, connected, EDGE_GUTTER });
  const animatedStyle = tmpResult21.useAnimatedStyle(Ce);
  const tmpResult22 = tmp(tmp2[22]);
  class De {
    constructor() {
      let num;
      let num2;
      let num3;
      let withTiming;
      const tmp2 = calculateVoicePanelHeaderSpecsDefault;
      const tmp2Result = tmp2(safeArea.get(), token);
      const value = mode.get();
      const PIP = constants.PIP;
      const obj3 = { paddingTop: connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER, paddingLeft: tmp2Result.paddingLeft, paddingRight: tmp2Result.paddingRight, borderTopLeftRadius: num2, borderTopRightRadius: num, opacity: withTiming(num3, OPACITY_TIMING), transform: null };
      num = 24;
      num2 = 24;
      if (connected.get()) {
        num2 = 0;
      }
      if (connected.get()) {
        num = 0;
      }
      withTiming = timing.withTiming;
      timing;
      if (value === PIP) {
        num3 = 0;
      } else {
        num3 = 1;
      }
      const withSpring = tmp6(5247).withSpring;
      spring;
      const value2 = derivedValue.get();
      if (!connected.get()) {
        let tmp11;
        if (wrapperOffset.get().gestureActive) {
          tmp11 = closure_18;
        }
        const items = [{ translateY: withSpring(value2, tmp11) }];
        obj3.transform = items;
        obj4 = { translateY: withSpring(value2, tmp11) };
        return obj3;
      }
      tmp11 = closure_16;
    }
  }
  De.__closure = { calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: tmp(tmp2[42]).withTiming, OPACITY_TIMING, withSpring: tmp(tmp2[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  De.__workletHash = 2433528387381;
  De.__initData = __initData15;
  ({ calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: tmp(tmp2[42]).withTiming, OPACITY_TIMING, withSpring: tmp(tmp2[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS });
  const animatedStyle1 = tmpResult22.useAnimatedStyle(De);
  function ye() {
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
    return tmp;
  }
  const obj9 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  ye.__closure = obj9;
  ye.__workletHash = 15015047770436;
  ye.__initData = __initData16;
  const tmpResult23 = tmp(tmp2[22]);
  derivedValue1 = tmpResult23.useDerivedValue(ye);
  function be() {
    let items;
    const tmp2 = calculateVoicePanelHeaderSpecsDefault;
    const height = tmp2(safeArea.get(), token).height;
    const withTiming = timing.withTiming;
    let num = 1;
    timing;
    const obj = derivedValue1;
    if (derivedValue1.get()) {
      num = 0;
    }
    const obj2 = { opacity: withTiming(num, OPACITY_TIMING), transform: items };
    const withSpring = tmp3(5247).withSpring;
    let num2 = 0;
    spring;
    if (obj.get()) {
      num2 = -height;
    }
    items = [{ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) }];
    ({ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) });
    return obj2;
  }
  const tmpResult24 = tmp(tmp2[22]);
  be.__closure = { calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, withTiming: tmp(tmp2[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: tmp(tmp2[23]).withSpring, MODE_CHANGE_PHYSICS };
  be.__workletHash = 27171065880;
  be.__initData = __initData17;
  ({ calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, withTiming: tmp(tmp2[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: tmp(tmp2[23]).withSpring, MODE_CHANGE_PHYSICS });
  const animatedStyle2 = tmpResult24.useAnimatedStyle(be);
  function ve() {
    let str2;
    let str = "box-none";
    if (derivedValue1.get()) {
      str = "none";
    }
    const obj2 = { pointerEvents: str, importantForAccessibility: str2, accessibilityElementsHidden: derivedValue1.get() };
    str2 = "auto";
    if (derivedValue1.get()) {
      str2 = "no-hide-descendants";
    }
    return obj2;
  }
  ve.__closure = { isHeaderHidden: derivedValue1 };
  ve.__workletHash = 5001013322077;
  ve.__initData = __initData18;
  const tmpResult25 = tmp(tmp2[22]);
  const animatedProps = tmpResult25.useAnimatedProps(ve);
  const tmpResult26 = tmp(tmp2[43]);
  const canInviteMembers = tmpResult26.useCanInviteMembers(channelId);
  const tmpResult27 = tmp(tmp2[44]);
  tmpResult27.useInviteMembersCallback(channelId);
  const tmp37 = tmp5(tmp2[45])();
  const tmpResult28 = tmp(tmp2[46]);
  tmpResult28.useNavigatorBackPressHandler(tmp37);
  if (null != tmp26) {
    DOWN = constants.LEFT;
    tmp39 = constants;
  } else {
    tmp39 = constants;
    DOWN = constants.DOWN;
  }
  if (cResult[9] === tmp13) {
    let tmp44;
    let tmp48;
    let tmp51;
    let tmp50;
    let tmp57;
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      let id = AuthenticationStore.getId();
      cResult[12] = id;
      tmp44 = id;
    } else {
      tmp44 = cResult[12];
    }
    const tmp47 = tmp5(tmp2[47])(tmp44, channelId, guildId);
    MODE_CHANGE_PHYSICS = tmp47;
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [handleFocusChange];
      cResult[13] = items4;
      tmp48 = items4;
    } else {
      tmp48 = cResult[13];
    }
    if (cResult[14] !== tmp47) {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
      const items5 = [tmp47];
      cResult[14] = tmp47;
      cResult[15] = Be;
      cResult[16] = items5;
      tmp51 = items5;
      tmp50 = Be;
    } else {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
      tmp51 = cResult[16];
    }
    const tmpResult29 = tmp(tmp2[29]);
    const stateFromStores2 = tmpResult29.useStateFromStores(tmp48, tmp50, tmp51);
    const _Symbol3 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
      cResult[17] = tmp54;
    } else {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
    }
    let str = "0deg";
    if (DOWN === tmp39.LEFT) {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
    }
    if (cResult[18] !== str) {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
      const items6 = [{ rotateZ: str }];
      const obj11 = { rotateZ: str };
      tmp56[0] = items6;
      cResult[18] = str;
      cResult[19] = tmp56;
    } else {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
    }
    if (cResult[20] !== channelId) {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
      tmp58[0] = channelId;
      cResult[20] = channelId;
      cResult[21] = tmp58;
      tmp57 = tmp58;
    } else {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
    }
    const tmpResult30 = tmp(tmp2[49]);
    const isSecureFramesUIEnabled = tmpResult30.useIsSecureFramesUIEnabled(tmp57);
    if (tmp26 === ParticipantTypes.USER) {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
      if (null != tmp24) {
        class Be {
          constructor() {
            tmp = closure_15;
            if (null != closure_15) {
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj3 = closure_0(closure_2[47]);
              if (obj3.isStableUserParticipant(tmp)) {
                tmp10Result = tmp10(tmp11[47]);
                if (tmp10Result.stableParticipantHasVideo(tmp)) {
                  obj2 = closure_11;
                  videoDevices = closure_11.getVideoDevices();
                  tmp3 = globalThis;
                  _Object = Object;
                  keys = Object.keys(videoDevices);
                  num = 2;
                  if (keys.length >= 2) {
                    videoDeviceId = obj2.getVideoDeviceId();
                    closure_0 = videoDeviceId;
                    tmp13 = videoDevices[videoDeviceId];
                    facing = undefined;
                    if (tmp13 != null) {
                      facing = tmp13.facing;
                    }
                    found = keys.find((item) => item !== videoDeviceId);
                    if (null != found) {
                      tmp7 = videoDevices[found];
                      facing1 = undefined;
                      if (tmp7 != null) {
                        facing1 = tmp7.facing;
                      }
                      tmp6 = facing1;
                    }
                    if (null != facing) {
                      if (null != tmp6) {
                        str3 = "back";
                        if ("back" === facing) {
                          str = "front";
                          if ("front" === tmp6) {
                            intl3 = tmp10(tmp11[31]).intl;
                            stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                          }
                        }
                        str2 = "front";
                        if ("front" === facing) {
                          if ("back" === tmp6) {
                            intl2 = tmp10(tmp11[31]).intl;
                            stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                          }
                        }
                        intl = tmp10(tmp11[31]).intl;
                        stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                      }
                      return stringResult;
                    }
                    intl4 = tmp10(tmp11[31]).intl;
                    stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                  }
                }
              }
            }
            return;
          }
        }
      }
    }
    if (cResult[22] === channelId) {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
      const tmpResult31 = tmp(tmp2[50]);
      const isUserSecureFramesVerified = tmpResult31.useIsUserSecureFramesVerified(tmp62);
      if (tmp26 === ParticipantTypes.STREAM) {
        class Be {
          constructor() {
            tmp = closure_15;
            if (null != closure_15) {
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj3 = closure_0(closure_2[47]);
              if (obj3.isStableUserParticipant(tmp)) {
                tmp10Result = tmp10(tmp11[47]);
                if (tmp10Result.stableParticipantHasVideo(tmp)) {
                  obj2 = closure_11;
                  videoDevices = closure_11.getVideoDevices();
                  tmp3 = globalThis;
                  _Object = Object;
                  keys = Object.keys(videoDevices);
                  num = 2;
                  if (keys.length >= 2) {
                    videoDeviceId = obj2.getVideoDeviceId();
                    closure_0 = videoDeviceId;
                    tmp13 = videoDevices[videoDeviceId];
                    facing = undefined;
                    if (tmp13 != null) {
                      facing = tmp13.facing;
                    }
                    found = keys.find((item) => item !== videoDeviceId);
                    if (null != found) {
                      tmp7 = videoDevices[found];
                      facing1 = undefined;
                      if (tmp7 != null) {
                        facing1 = tmp7.facing;
                      }
                      tmp6 = facing1;
                    }
                    if (null != facing) {
                      if (null != tmp6) {
                        str3 = "back";
                        if ("back" === facing) {
                          str = "front";
                          if ("front" === tmp6) {
                            intl3 = tmp10(tmp11[31]).intl;
                            stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                          }
                        }
                        str2 = "front";
                        if ("front" === facing) {
                          if ("back" === tmp6) {
                            intl2 = tmp10(tmp11[31]).intl;
                            stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                          }
                        }
                        intl = tmp10(tmp11[31]).intl;
                        stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                      }
                      return stringResult;
                    }
                    intl4 = tmp10(tmp11[31]).intl;
                    stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                  }
                }
              }
            }
            return;
          }
        }
        if (null != tmp24) {
          class Be {
            constructor() {
              tmp = closure_15;
              if (null != closure_15) {
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj3 = closure_0(closure_2[47]);
                if (obj3.isStableUserParticipant(tmp)) {
                  tmp10Result = tmp10(tmp11[47]);
                  if (tmp10Result.stableParticipantHasVideo(tmp)) {
                    obj2 = closure_11;
                    videoDevices = closure_11.getVideoDevices();
                    tmp3 = globalThis;
                    _Object = Object;
                    keys = Object.keys(videoDevices);
                    num = 2;
                    if (keys.length >= 2) {
                      videoDeviceId = obj2.getVideoDeviceId();
                      closure_0 = videoDeviceId;
                      tmp13 = videoDevices[videoDeviceId];
                      facing = undefined;
                      if (tmp13 != null) {
                        facing = tmp13.facing;
                      }
                      found = keys.find((item) => item !== videoDeviceId);
                      if (null != found) {
                        tmp7 = videoDevices[found];
                        facing1 = undefined;
                        if (tmp7 != null) {
                          facing1 = tmp7.facing;
                        }
                        tmp6 = facing1;
                      }
                      if (null != facing) {
                        if (null != tmp6) {
                          str3 = "back";
                          if ("back" === facing) {
                            str = "front";
                            if ("front" === tmp6) {
                              intl3 = tmp10(tmp11[31]).intl;
                              stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                            }
                          }
                          str2 = "front";
                          if ("front" === facing) {
                            if ("back" === tmp6) {
                              intl2 = tmp10(tmp11[31]).intl;
                              stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                            }
                          }
                          intl = tmp10(tmp11[31]).intl;
                          stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                        return stringResult;
                      }
                      intl4 = tmp10(tmp11[31]).intl;
                      stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                  }
                }
              }
              return;
            }
          }
        }
      }
      if (cResult[25] === channelId) {
        class Be {
          constructor() {
            tmp = closure_15;
            if (null != closure_15) {
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj3 = closure_0(closure_2[47]);
              if (obj3.isStableUserParticipant(tmp)) {
                tmp10Result = tmp10(tmp11[47]);
                if (tmp10Result.stableParticipantHasVideo(tmp)) {
                  obj2 = closure_11;
                  videoDevices = closure_11.getVideoDevices();
                  tmp3 = globalThis;
                  _Object = Object;
                  keys = Object.keys(videoDevices);
                  num = 2;
                  if (keys.length >= 2) {
                    videoDeviceId = obj2.getVideoDeviceId();
                    closure_0 = videoDeviceId;
                    tmp13 = videoDevices[videoDeviceId];
                    facing = undefined;
                    if (tmp13 != null) {
                      facing = tmp13.facing;
                    }
                    found = keys.find((item) => item !== videoDeviceId);
                    if (null != found) {
                      tmp7 = videoDevices[found];
                      facing1 = undefined;
                      if (tmp7 != null) {
                        facing1 = tmp7.facing;
                      }
                      tmp6 = facing1;
                    }
                    if (null != facing) {
                      if (null != tmp6) {
                        str3 = "back";
                        if ("back" === facing) {
                          str = "front";
                          if ("front" === tmp6) {
                            intl3 = tmp10(tmp11[31]).intl;
                            stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                          }
                        }
                        str2 = "front";
                        if ("front" === facing) {
                          if ("back" === tmp6) {
                            intl2 = tmp10(tmp11[31]).intl;
                            stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                          }
                        }
                        intl = tmp10(tmp11[31]).intl;
                        stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                      }
                      return stringResult;
                    }
                    intl4 = tmp10(tmp11[31]).intl;
                    stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                  }
                }
              }
            }
            return;
          }
        }
        const tmpResult32 = tmp(tmp2[50]);
        const isStreamSecureFramesVerified = tmpResult32.useIsStreamSecureFramesVerified(tmp65);
        if (ParticipantTypes.STREAM !== tmp26) {
          class Be {
            constructor() {
              tmp = closure_15;
              if (null != closure_15) {
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj3 = closure_0(closure_2[47]);
                if (obj3.isStableUserParticipant(tmp)) {
                  tmp10Result = tmp10(tmp11[47]);
                  if (tmp10Result.stableParticipantHasVideo(tmp)) {
                    obj2 = closure_11;
                    videoDevices = closure_11.getVideoDevices();
                    tmp3 = globalThis;
                    _Object = Object;
                    keys = Object.keys(videoDevices);
                    num = 2;
                    if (keys.length >= 2) {
                      videoDeviceId = obj2.getVideoDeviceId();
                      closure_0 = videoDeviceId;
                      tmp13 = videoDevices[videoDeviceId];
                      facing = undefined;
                      if (tmp13 != null) {
                        facing = tmp13.facing;
                      }
                      found = keys.find((item) => item !== videoDeviceId);
                      if (null != found) {
                        tmp7 = videoDevices[found];
                        facing1 = undefined;
                        if (tmp7 != null) {
                          facing1 = tmp7.facing;
                        }
                        tmp6 = facing1;
                      }
                      if (null != facing) {
                        if (null != tmp6) {
                          str3 = "back";
                          if ("back" === facing) {
                            str = "front";
                            if ("front" === tmp6) {
                              intl3 = tmp10(tmp11[31]).intl;
                              stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                            }
                          }
                          str2 = "front";
                          if ("front" === facing) {
                            if ("back" === tmp6) {
                              intl2 = tmp10(tmp11[31]).intl;
                              stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                            }
                          }
                          intl = tmp10(tmp11[31]).intl;
                          stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                        return stringResult;
                      }
                      intl4 = tmp10(tmp11[31]).intl;
                      stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                  }
                }
              }
              return;
            }
          }
          if (ParticipantTypes.USER !== tmp26) {
            class Be {
              constructor() {
                tmp = closure_15;
                if (null != closure_15) {
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj3 = closure_0(closure_2[47]);
                  if (obj3.isStableUserParticipant(tmp)) {
                    tmp10Result = tmp10(tmp11[47]);
                    if (tmp10Result.stableParticipantHasVideo(tmp)) {
                      obj2 = closure_11;
                      videoDevices = closure_11.getVideoDevices();
                      tmp3 = globalThis;
                      _Object = Object;
                      keys = Object.keys(videoDevices);
                      num = 2;
                      if (keys.length >= 2) {
                        videoDeviceId = obj2.getVideoDeviceId();
                        closure_0 = videoDeviceId;
                        tmp13 = videoDevices[videoDeviceId];
                        facing = undefined;
                        if (tmp13 != null) {
                          facing = tmp13.facing;
                        }
                        found = keys.find((item) => item !== videoDeviceId);
                        if (null != found) {
                          tmp7 = videoDevices[found];
                          facing1 = undefined;
                          if (tmp7 != null) {
                            facing1 = tmp7.facing;
                          }
                          tmp6 = facing1;
                        }
                        if (null != facing) {
                          if (null != tmp6) {
                            str3 = "back";
                            if ("back" === facing) {
                              str = "front";
                              if ("front" === tmp6) {
                                intl3 = tmp10(tmp11[31]).intl;
                                stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                              }
                            }
                            str2 = "front";
                            if ("front" === facing) {
                              if ("back" === tmp6) {
                                intl2 = tmp10(tmp11[31]).intl;
                                stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                              }
                            }
                            intl = tmp10(tmp11[31]).intl;
                            stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                          }
                          return stringResult;
                        }
                        intl4 = tmp10(tmp11[31]).intl;
                        stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                      }
                    }
                  }
                }
                return;
              }
            }
          }
        }
        if (tmp13) {
          class Be {
            constructor() {
              tmp = closure_15;
              if (null != closure_15) {
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj3 = closure_0(closure_2[47]);
                if (obj3.isStableUserParticipant(tmp)) {
                  tmp10Result = tmp10(tmp11[47]);
                  if (tmp10Result.stableParticipantHasVideo(tmp)) {
                    obj2 = closure_11;
                    videoDevices = closure_11.getVideoDevices();
                    tmp3 = globalThis;
                    _Object = Object;
                    keys = Object.keys(videoDevices);
                    num = 2;
                    if (keys.length >= 2) {
                      videoDeviceId = obj2.getVideoDeviceId();
                      closure_0 = videoDeviceId;
                      tmp13 = videoDevices[videoDeviceId];
                      facing = undefined;
                      if (tmp13 != null) {
                        facing = tmp13.facing;
                      }
                      found = keys.find((item) => item !== videoDeviceId);
                      if (null != found) {
                        tmp7 = videoDevices[found];
                        facing1 = undefined;
                        if (tmp7 != null) {
                          facing1 = tmp7.facing;
                        }
                        tmp6 = facing1;
                      }
                      if (null != facing) {
                        if (null != tmp6) {
                          str3 = "back";
                          if ("back" === facing) {
                            str = "front";
                            if ("front" === tmp6) {
                              intl3 = tmp10(tmp11[31]).intl;
                              stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                            }
                          }
                          str2 = "front";
                          if ("front" === facing) {
                            if ("back" === tmp6) {
                              intl2 = tmp10(tmp11[31]).intl;
                              stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                            }
                          }
                          intl = tmp10(tmp11[31]).intl;
                          stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                        return stringResult;
                      }
                      intl4 = tmp10(tmp11[31]).intl;
                      stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                  }
                }
              }
              return;
            }
          }
          const ONYX = ThemeTypes.ONYX;
        }
        if (cResult[28] === animatedStyle) {
          class Be {
            constructor() {
              tmp = closure_15;
              if (null != closure_15) {
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj3 = closure_0(closure_2[47]);
                if (obj3.isStableUserParticipant(tmp)) {
                  tmp10Result = tmp10(tmp11[47]);
                  if (tmp10Result.stableParticipantHasVideo(tmp)) {
                    obj2 = closure_11;
                    videoDevices = closure_11.getVideoDevices();
                    tmp3 = globalThis;
                    _Object = Object;
                    keys = Object.keys(videoDevices);
                    num = 2;
                    if (keys.length >= 2) {
                      videoDeviceId = obj2.getVideoDeviceId();
                      closure_0 = videoDeviceId;
                      tmp13 = videoDevices[videoDeviceId];
                      facing = undefined;
                      if (tmp13 != null) {
                        facing = tmp13.facing;
                      }
                      found = keys.find((item) => item !== videoDeviceId);
                      if (null != found) {
                        tmp7 = videoDevices[found];
                        facing1 = undefined;
                        if (tmp7 != null) {
                          facing1 = tmp7.facing;
                        }
                        tmp6 = facing1;
                      }
                      if (null != facing) {
                        if (null != tmp6) {
                          str3 = "back";
                          if ("back" === facing) {
                            str = "front";
                            if ("front" === tmp6) {
                              intl3 = tmp10(tmp11[31]).intl;
                              stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                            }
                          }
                          str2 = "front";
                          if ("front" === facing) {
                            if ("back" === tmp6) {
                              intl2 = tmp10(tmp11[31]).intl;
                              stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                            }
                          }
                          intl = tmp10(tmp11[31]).intl;
                          stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                        return stringResult;
                      }
                      intl4 = tmp10(tmp11[31]).intl;
                      stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                  }
                }
              }
              return;
            }
          }
          if (cResult[31] === animatedStyle1) {
            class Be {
              constructor() {
                tmp = closure_15;
                if (null != closure_15) {
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj3 = closure_0(closure_2[47]);
                  if (obj3.isStableUserParticipant(tmp)) {
                    tmp10Result = tmp10(tmp11[47]);
                    if (tmp10Result.stableParticipantHasVideo(tmp)) {
                      obj2 = closure_11;
                      videoDevices = closure_11.getVideoDevices();
                      tmp3 = globalThis;
                      _Object = Object;
                      keys = Object.keys(videoDevices);
                      num = 2;
                      if (keys.length >= 2) {
                        videoDeviceId = obj2.getVideoDeviceId();
                        closure_0 = videoDeviceId;
                        tmp13 = videoDevices[videoDeviceId];
                        facing = undefined;
                        if (tmp13 != null) {
                          facing = tmp13.facing;
                        }
                        found = keys.find((item) => item !== videoDeviceId);
                        if (null != found) {
                          tmp7 = videoDevices[found];
                          facing1 = undefined;
                          if (tmp7 != null) {
                            facing1 = tmp7.facing;
                          }
                          tmp6 = facing1;
                        }
                        if (null != facing) {
                          if (null != tmp6) {
                            str3 = "back";
                            if ("back" === facing) {
                              str = "front";
                              if ("front" === tmp6) {
                                intl3 = tmp10(tmp11[31]).intl;
                                stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                              }
                            }
                            str2 = "front";
                            if ("front" === facing) {
                              if ("back" === tmp6) {
                                intl2 = tmp10(tmp11[31]).intl;
                                stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                              }
                            }
                            intl = tmp10(tmp11[31]).intl;
                            stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                          }
                          return stringResult;
                        }
                        intl4 = tmp10(tmp11[31]).intl;
                        stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                      }
                    }
                  }
                }
                return;
              }
            }
            if (cResult[34] === focused) {
              class Be {
                constructor() {
                  tmp = closure_15;
                  if (null != closure_15) {
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj3 = closure_0(closure_2[47]);
                    if (obj3.isStableUserParticipant(tmp)) {
                      tmp10Result = tmp10(tmp11[47]);
                      if (tmp10Result.stableParticipantHasVideo(tmp)) {
                        obj2 = closure_11;
                        videoDevices = closure_11.getVideoDevices();
                        tmp3 = globalThis;
                        _Object = Object;
                        keys = Object.keys(videoDevices);
                        num = 2;
                        if (keys.length >= 2) {
                          videoDeviceId = obj2.getVideoDeviceId();
                          closure_0 = videoDeviceId;
                          tmp13 = videoDevices[videoDeviceId];
                          facing = undefined;
                          if (tmp13 != null) {
                            facing = tmp13.facing;
                          }
                          found = keys.find((item) => item !== videoDeviceId);
                          if (null != found) {
                            tmp7 = videoDevices[found];
                            facing1 = undefined;
                            if (tmp7 != null) {
                              facing1 = tmp7.facing;
                            }
                            tmp6 = facing1;
                          }
                          if (null != facing) {
                            if (null != tmp6) {
                              str3 = "back";
                              if ("back" === facing) {
                                str = "front";
                                if ("front" === tmp6) {
                                  intl3 = tmp10(tmp11[31]).intl;
                                  stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                                }
                              }
                              str2 = "front";
                              if ("front" === facing) {
                                if ("back" === tmp6) {
                                  intl2 = tmp10(tmp11[31]).intl;
                                  stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                                }
                              }
                              intl = tmp10(tmp11[31]).intl;
                              stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                            }
                            return stringResult;
                          }
                          intl4 = tmp10(tmp11[31]).intl;
                          stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                        }
                      }
                    }
                  }
                  return;
                }
              }
            }
            const obj12 = { isHeaderHidden: derivedValue1, scrollPosition, focused };
            cResult[34] = focused;
            cResult[35] = derivedValue1;
            cResult[36] = scrollPosition;
            cResult[37] = closure_23(closure_35, obj12);
            const tmp72 = closure_23(closure_35, obj12);
          }
          const items7 = [tmp4.headerSurface, animatedStyle1];
          cResult[31] = animatedStyle1;
          cResult[32] = tmp4.headerSurface;
          cResult[33] = items7;
        }
        const items8 = [tmp4.headerWrapper, animatedStyle];
        cResult[28] = animatedStyle;
        cResult[29] = tmp4.headerWrapper;
        cResult[30] = items8;
      }
      const obj13 = { streamKey: null, channelId };
      cResult[25] = channelId;
      cResult[26] = null;
      cResult[27] = obj13;
      tmp65 = obj13;
    }
    const obj14 = { userId: null, channelId };
    cResult[22] = channelId;
    cResult[23] = null;
    cResult[24] = obj14;
    tmp62 = obj14;
  }
  if (DOWN === tmp39.LEFT) {
    class Be {
      constructor() {
        tmp = closure_15;
        if (null != closure_15) {
          tmp10 = closure_0;
          tmp11 = closure_2;
          obj3 = closure_0(closure_2[47]);
          if (obj3.isStableUserParticipant(tmp)) {
            tmp10Result = tmp10(tmp11[47]);
            if (tmp10Result.stableParticipantHasVideo(tmp)) {
              obj2 = closure_11;
              videoDevices = closure_11.getVideoDevices();
              tmp3 = globalThis;
              _Object = Object;
              keys = Object.keys(videoDevices);
              num = 2;
              if (keys.length >= 2) {
                videoDeviceId = obj2.getVideoDeviceId();
                closure_0 = videoDeviceId;
                tmp13 = videoDevices[videoDeviceId];
                facing = undefined;
                if (tmp13 != null) {
                  facing = tmp13.facing;
                }
                found = keys.find((item) => item !== videoDeviceId);
                if (null != found) {
                  tmp7 = videoDevices[found];
                  facing1 = undefined;
                  if (tmp7 != null) {
                    facing1 = tmp7.facing;
                  }
                  tmp6 = facing1;
                }
                if (null != facing) {
                  if (null != tmp6) {
                    str3 = "back";
                    if ("back" === facing) {
                      str = "front";
                      if ("front" === tmp6) {
                        intl3 = tmp10(tmp11[31]).intl;
                        stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                      }
                    }
                    str2 = "front";
                    if ("front" === facing) {
                      if ("back" === tmp6) {
                        intl2 = tmp10(tmp11[31]).intl;
                        stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                      }
                    }
                    intl = tmp10(tmp11[31]).intl;
                    stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                  }
                  return stringResult;
                }
                intl4 = tmp10(tmp11[31]).intl;
                stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
              }
            }
          }
        }
        return;
      }
    }
    stringResult = obj25.string(tmp(tmp2[31]).t["9M6OdC"]);
  } else {
    class Be {
      constructor() {
        tmp = closure_15;
        if (null != closure_15) {
          tmp10 = closure_0;
          tmp11 = closure_2;
          obj3 = closure_0(closure_2[47]);
          if (obj3.isStableUserParticipant(tmp)) {
            tmp10Result = tmp10(tmp11[47]);
            if (tmp10Result.stableParticipantHasVideo(tmp)) {
              obj2 = closure_11;
              videoDevices = closure_11.getVideoDevices();
              tmp3 = globalThis;
              _Object = Object;
              keys = Object.keys(videoDevices);
              num = 2;
              if (keys.length >= 2) {
                videoDeviceId = obj2.getVideoDeviceId();
                closure_0 = videoDeviceId;
                tmp13 = videoDevices[videoDeviceId];
                facing = undefined;
                if (tmp13 != null) {
                  facing = tmp13.facing;
                }
                found = keys.find((item) => item !== videoDeviceId);
                if (null != found) {
                  tmp7 = videoDevices[found];
                  facing1 = undefined;
                  if (tmp7 != null) {
                    facing1 = tmp7.facing;
                  }
                  tmp6 = facing1;
                }
                if (null != facing) {
                  if (null != tmp6) {
                    str3 = "back";
                    if ("back" === facing) {
                      str = "front";
                      if ("front" === tmp6) {
                        intl3 = tmp10(tmp11[31]).intl;
                        stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                      }
                    }
                    str2 = "front";
                    if ("front" === facing) {
                      if ("back" === tmp6) {
                        intl2 = tmp10(tmp11[31]).intl;
                        stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                      }
                    }
                    intl = tmp10(tmp11[31]).intl;
                    stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                  }
                  return stringResult;
                }
                intl4 = tmp10(tmp11[31]).intl;
                stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
              }
            }
          }
        }
        return;
      }
    }
    const string = tmp42.string;
    const t = tmp(tmp2[31]).t;
    if (tmp13) {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
    } else {
      class Be {
        constructor() {
          tmp = closure_15;
          if (null != closure_15) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj3 = closure_0(closure_2[47]);
            if (obj3.isStableUserParticipant(tmp)) {
              tmp10Result = tmp10(tmp11[47]);
              if (tmp10Result.stableParticipantHasVideo(tmp)) {
                obj2 = closure_11;
                videoDevices = closure_11.getVideoDevices();
                tmp3 = globalThis;
                _Object = Object;
                keys = Object.keys(videoDevices);
                num = 2;
                if (keys.length >= 2) {
                  videoDeviceId = obj2.getVideoDeviceId();
                  closure_0 = videoDeviceId;
                  tmp13 = videoDevices[videoDeviceId];
                  facing = undefined;
                  if (tmp13 != null) {
                    facing = tmp13.facing;
                  }
                  found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    tmp7 = videoDevices[found];
                    facing1 = undefined;
                    if (tmp7 != null) {
                      facing1 = tmp7.facing;
                    }
                    tmp6 = facing1;
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      str3 = "back";
                      if ("back" === facing) {
                        str = "front";
                        if ("front" === tmp6) {
                          intl3 = tmp10(tmp11[31]).intl;
                          stringResult = intl3.string(tmp10(tmp11[31]).t["/R1SBx"]);
                        }
                      }
                      str2 = "front";
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          intl2 = tmp10(tmp11[31]).intl;
                          stringResult = intl2.string(tmp10(tmp11[31]).t["7YZ/Si"]);
                        }
                      }
                      intl = tmp10(tmp11[31]).intl;
                      stringResult = intl.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  intl4 = tmp10(tmp11[31]).intl;
                  stringResult = intl4.string(tmp10(tmp11[31]).t["t9eQ/g"]);
                }
              }
            }
          }
          return;
        }
      }
    }
  }
  cResult[9] = tmp13;
  cResult[10] = DOWN;
  cResult[11] = stringResult;
}) : (function VoicePanelHeader(wrapperOffset) {
  let _undefined;
  let c10;
  let c9;
  let channelType;
  let closure_16;
  let guildId;
  let intl3;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items8;
  let items9;
  let obj24;
  let obj25;
  let obj38;
  let scrollPosition;
  let stringResult;
  let tmp11;
  let tmp13;
  let tmp27;
  let tmp2Result12;
  let tmp2Result13;
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const layout = wrapperOffset.layout;
  let channelId;
  let controlsSpecs;
  AuthenticationStore = undefined;
  c10 = undefined;
  let token;
  let derivedValue1;
  let DOWN;
  UI_SHOW_HIDE_PHYSICS = undefined;
  let tmp = closure_26();
  let obj = controlsSpecs;
  let tmp2 = gestureState;
  let tmp3 = channelId;
  const context = controlsSpecs.useContext(gestureState(channelId[27]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  const tmp5 = wrapperOffset;
  ({ guildId, channelType, scrollPosition } = context);
  let obj2 = wrapperOffset(channelId[36]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = wrapperOffset(channelId[29]);
  let items = [c10];
  const items1 = [channelId];
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp42Result12 = gestureState(channelId[37])(channelId);
  obj4 = gestureState(channelId[38]);
  const treatment = obj4.useConfig({ location: "VoicePanelHeader" }).treatment;
  const items2 = [derivedValue1, token, c10, connected];
  const items3 = [channelId];
  const obj5 = wrapperOffset(channelId[29]);
  const stateFromStores1 = obj5.useStateFromStores(items2, () => {
    const channel = ChannelStore.getChannel(channelId);
    let channelName;
    if (null != channel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
    }
    if (channelName == null) {
      const intl = intl5.intl;
      channelName = intl.string(intl5.t.zLZPmk);
    }
    return channelName;
  }, items3);
  const tmp10 = focused(controlsSpecs.useState(undefined), 2);
  [tmp11, c9] = tmp10;
  [tmp13, c10] = focused(controlsSpecs.useState(null), 2);
  const items4 = [channelId];
  focused(controlsSpecs.useState(null), 2);
  const handleFocusChange = controlsSpecs.useCallback((arg0) => {
    let tmp3 = null;
    const tmp = c10;
    if (null != arg0) {
      const participant = ChannelRTCStore.getParticipant(tmp2, arg0);
      let type = null;
      if (null != participant) {
        type = participant.type;
      }
      tmp3 = type;
    }
    tmp(tmp3);
    _undefined(arg0);
  }, items4);
  const fn = function f() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 13360529041025;
  fn.__initData = __initData19;
  const fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)(arg0);
    }
  };
  const obj6 = wrapperOffset(channelId[22]);
  fn2.__closure = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
  fn2.__workletHash = 3863557916793;
  fn2.__initData = __initData20;
  ({ runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange });
  const animatedReaction = obj6.useAnimatedReaction(fn, fn2);
  const obj8 = wrapperOffset(channelId[40]);
  token = obj8.useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  function pe() {
    let num;
    const tmp = calculateVoicePanelHeaderSpecsDefault;
    const obj = mode;
    const tmpResult = tmp(safeArea.get(), token);
    if (mode.get() === constants.PIP) {
      num = -tmpResult.height + EDGE_GUTTER;
    } else {
      num = 0;
      if (obj.get() === tmp3.DISMISSED) {
        num = 0;
      }
    }
    return num;
  }
  const obj9 = wrapperOffset(channelId[22]);
  pe.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  pe.__workletHash = 4432667021114;
  pe.__initData = __initData21;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER });
  const derivedValue = obj9.useDerivedValue(pe);
  const obj11 = wrapperOffset(channelId[22]);
  class Se {
    constructor() {
      let height1;
      const tmp = calculateVoicePanelHeaderSpecsDefault;
      const tmpResult = tmp(safeArea.get(), token);
      const height = tmpResult.height;
      if (connected.get()) {
        height1 = height;
      } else {
        height1 = height - tmpResult.paddingTop + EDGE_GUTTER;
      }
      return { height: height1 };
    }
  }
  Se.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, connected, EDGE_GUTTER };
  Se.__workletHash = 13652046153012;
  Se.__initData = __initData22;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, connected, EDGE_GUTTER });
  const animatedStyle = obj11.useAnimatedStyle(Se);
  function fe() {
    let num;
    let num2;
    let num3;
    let withTiming;
    const tmp2 = calculateVoicePanelHeaderSpecsDefault;
    const tmp2Result = tmp2(safeArea.get(), token);
    const value = mode.get();
    const PIP = constants.PIP;
    const obj3 = { paddingTop: connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER, paddingLeft: tmp2Result.paddingLeft, paddingRight: tmp2Result.paddingRight, borderTopLeftRadius: num2, borderTopRightRadius: num, opacity: withTiming(num3, OPACITY_TIMING), transform: null };
    num = 24;
    num2 = 24;
    if (connected.get()) {
      num2 = 0;
    }
    if (connected.get()) {
      num = 0;
    }
    withTiming = timing.withTiming;
    timing;
    if (value === PIP) {
      num3 = 0;
    } else {
      num3 = 1;
    }
    const withSpring = tmp6(5247).withSpring;
    spring;
    const value2 = derivedValue.get();
    if (!connected.get()) {
      let tmp11;
      if (wrapperOffset.get().gestureActive) {
        tmp11 = closure_18;
      }
      const items = [{ translateY: withSpring(value2, tmp11) }];
      obj3.transform = items;
      obj4 = { translateY: withSpring(value2, tmp11) };
      return obj3;
    }
    tmp11 = closure_16;
  }
  const obj13 = wrapperOffset(channelId[22]);
  fe.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[42]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  fe.__workletHash = 15844160278128;
  fe.__initData = __initData23;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[42]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS });
  const animatedStyle1 = obj13.useAnimatedStyle(fe);
  const obj15 = wrapperOffset(channelId[22]);
  class He {
    constructor() {
      const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
      return tmp;
    }
  }
  const obj16 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  He.__closure = obj16;
  He.__workletHash = 7957810318213;
  He.__initData = __initData24;
  derivedValue1 = obj15.useDerivedValue(He);
  const obj17 = wrapperOffset(channelId[22]);
  class Ee {
    constructor() {
      let items;
      const tmp2 = calculateVoicePanelHeaderSpecsDefault;
      const height = tmp2(safeArea.get(), token).height;
      const withTiming = timing.withTiming;
      let num = 1;
      timing;
      const obj = derivedValue1;
      if (derivedValue1.get()) {
        num = 0;
      }
      const obj2 = { opacity: withTiming(num, OPACITY_TIMING), transform: items };
      const withSpring = tmp3(5247).withSpring;
      let num2 = 0;
      spring;
      if (obj.get()) {
        num2 = -height;
      }
      items = [{ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) }];
      ({ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) });
      return obj2;
    }
  }
  Ee.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  Ee.__workletHash = 10565055547481;
  Ee.__initData = __initData25;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, MODE_CHANGE_PHYSICS: DOWN });
  const animatedStyle2 = obj17.useAnimatedStyle(Ee);
  const obj19 = wrapperOffset(channelId[22]);
  class Ie {
    constructor() {
      let str2;
      let str = "box-none";
      if (derivedValue1.get()) {
        str = "none";
      }
      const obj2 = { pointerEvents: str, importantForAccessibility: str2, accessibilityElementsHidden: derivedValue1.get() };
      str2 = "auto";
      if (derivedValue1.get()) {
        str2 = "no-hide-descendants";
      }
      return obj2;
    }
  }
  Ie.__closure = { isHeaderHidden: derivedValue1 };
  Ie.__workletHash = 1667970934768;
  Ie.__initData = __initData26;
  const animatedProps = obj19.useAnimatedProps(Ie);
  const obj20 = wrapperOffset(channelId[43]);
  let canInviteMembers = obj20.useCanInviteMembers(channelId);
  const obj21 = wrapperOffset(channelId[44]);
  const inviteMembersCallback = obj21.useInviteMembersCallback(channelId);
  const tmp25 = gestureState(channelId[45])();
  const obj22 = wrapperOffset(channelId[46]);
  obj22.useNavigatorBackPressHandler(tmp25);
  if (null != tmp13) {
    DOWN = constants.LEFT;
    tmp27 = constants;
  } else {
    tmp27 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp27.LEFT) {
    let intl2 = tmp5(tmp3[31]).intl;
    stringResult = intl2.string(tmp5(tmp3[31]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[31]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[31]).t;
    if (tmp42Result12) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  let tmp2Result = tmp2(tmp3[47]);
  const tmp2ResultResult = tmp2Result(AuthenticationStore.getId(), channelId, guildId);
  UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
  const items5 = [handleFocusChange];
  const items6 = [tmp2ResultResult];
  const tmp5Result = tmp5(tmp3[29]);
  const stateFromStores2 = tmp5Result.useStateFromStores(items5, () => {
    if (null != closure_16) {
      const obj3 = useStableParticipant;
      if (obj3.isStableUserParticipant(closure_16)) {
        const tmp10Result = useStableParticipant;
        if (tmp10Result.stableParticipantHasVideo(closure_16)) {
          const videoDevices = MediaEngineStore.getVideoDevices();
          const _Object = Object;
          const keys = Object.keys(videoDevices);
          const obj2 = MediaEngineStore;
          if (keys.length >= 2) {
            const videoDeviceId = obj2.getVideoDeviceId();
            let facing;
            if (videoDevices[videoDeviceId] != null) {
              facing = tmp13.facing;
            }
            const found = keys.find((item) => item !== videoDeviceId);
            if (null != found) {
              let facing1;
              if (videoDevices[found] != null) {
                facing1 = tmp7.facing;
              }
            }
            if (null != facing) {
              let stringResult;
              if (null != tmp6) {
                if ("back" === facing) {
                  if ("front" === tmp6) {
                    const intl3 = tmp10(1128).intl;
                    stringResult = intl3.string(tmp10(1128).t["/R1SBx"]);
                  }
                }
                if ("front" === facing) {
                  if ("back" === tmp6) {
                    const intl2 = tmp10(1128).intl;
                    stringResult = intl2.string(tmp10(1128).t["7YZ/Si"]);
                  }
                }
                const intl = tmp10(1128).intl;
                stringResult = intl.string(tmp10(1128).t["t9eQ/g"]);
              }
              return stringResult;
            }
            const intl4 = tmp10(1128).intl;
            stringResult = intl4.string(tmp10(1128).t["t9eQ/g"]);
          }
        }
      }
    }
  }, items6);
  const items7 = [DOWN];
  const callback1 = obj.useCallback(() => {
    const videoDeviceId = callback.getVideoDeviceId();
    const keys = Object.keys(callback.getVideoDevices());
    const found = keys.find((item) => item !== closure_0);
    if (null != found) {
      const obj = gestureState(channelId[48]);
      obj.setVideoDevice(found);
    }
  }, []);
  const memo = obj.useMemo(() => {
    let items;
    let str = "0deg";
    if (DOWN === constants.LEFT) {
      str = "90deg";
    }
    const obj = { transform: items };
    items = [{ rotateZ: str }];
    return obj;
  }, items7);
  const tmp5Result4 = tmp5(tmp3[49]);
  const isSecureFramesUIEnabled = tmp5Result4.useIsSecureFramesUIEnabled({ channelId });
  let tmp38 = null;
  const useIsUserSecureFramesVerified = tmp5(tmp3[50]).useIsUserSecureFramesVerified;
  tmp5(tmp3[50]);
  if (tmp13 === ParticipantTypes.USER) {
    tmp38 = null;
    if (null != tmp11) {
      tmp38 = tmp11;
    }
  }
  const isUserSecureFramesVerified = useIsUserSecureFramesVerified({ userId: tmp38, channelId });
  let tmp41 = null;
  const useIsStreamSecureFramesVerified = tmp5(tmp3[50]).useIsStreamSecureFramesVerified;
  tmp5(tmp3[50]);
  if (tmp13 === ParticipantTypes.STREAM) {
    tmp41 = null;
    if (null != tmp11) {
      tmp41 = tmp11;
    }
  }
  let flag = useIsStreamSecureFramesVerified({ streamKey: tmp41, channelId });
  if (ParticipantTypes.STREAM !== tmp13) {
    flag = false;
    if (ParticipantTypes.USER === tmp13) {
      flag = isUserSecureFramesVerified;
    }
  }
  let ONYX;
  const ThemeContextProvider = tmp5(tmp3[62]).ThemeContextProvider;
  if (tmp42Result12) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj23 = { theme: ONYX, children: closure_23(tmp2Result12, obj24) };
  obj24 = { style: items8, pointerEvents: "box-none", layout, children: closure_24(tmp2Result13, obj25) };
  items8 = [tmp.headerWrapper, animatedStyle];
  obj25 = { style: items9, pointerEvents: "box-none", children: items10 };
  items9 = [tmp.headerSurface, animatedStyle1];
  items10 = [, , ];
  tmp2Result12 = tmp2(tmp3[26]);
  tmp2Result13 = tmp2(tmp3[26]);
  items10[0] = closure_23(closure_35, { isHeaderHidden: derivedValue1, scrollPosition, focused });
  let tmp42Result = tmp42Result12;
  if (tmp42Result) {
    const obj26 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
    const tmp2Result14 = tmp2(tmp3[51]);
    tmp42Result = tmp42(tmp2Result14, obj26);
  }
  items10[1] = tmp42Result;
  let tmp42Result7 = null;
  const obj27 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: items11 };
  const tmp2Result15 = tmp2(tmp3[26]);
  if (tmp13 === ParticipantTypes.USER) {
    const obj28 = { isHeaderHidden: derivedValue1 };
    tmp42Result7 = tmp42(tmp2(tmp3[52]), obj28);
  }
  items11 = [tmp42Result7, ];
  const obj29 = { style: items12, animatedProps, children: items15 };
  items12 = [tmp.headerOuter, animatedStyle2];
  const obj30 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: items13 };
  const tmp2Result16 = tmp2(tmp3[26]);
  const obj31 = { icon: tmp2(tmp3[53]), accessibilityLabel: stringResult, onPress: tmp25, style: memo };
  const tmp2Result17 = tmp2(tmp3[25]);
  const tmp2Result18 = tmp2(tmp3[35]);
  items13 = [closure_23(tmp2Result18, obj31), ];
  const obj32 = { style: tmp.headerInner, children: items14 };
  items14 = [, ];
  const tmp2Result19 = tmp2(tmp3[26]);
  items14[0] = closure_23(tmp2(tmp3[54]), {});
  let tmp42Result8 = null;
  if (isSecureFramesUIEnabled) {
    tmp42Result8 = null;
    if (flag) {
      const obj33 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      const ShieldLockIcon = tmp5(tmp3[55]).ShieldLockIcon;
      tmp42Result8 = tmp42(ShieldLockIcon, obj33);
    }
  }
  items14[1] = tmp42Result8;
  items13[1] = closure_24(tmp2Result19, obj32);
  items15 = [closure_24(tmp2Result17, obj30), ];
  const obj34 = { style: tmp.rightWrapper, layout, children: items16 };
  items16 = [, , , , , , ];
  const tmp2Result20 = tmp2(tmp3[26]);
  items16[0] = closure_23(closure_40, {});
  let tmp42Result9 = channelType === tmp5(tmp3[56]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp42Result9) {
    const obj35 = { channelId };
    tmp42Result9 = tmp42(closure_41, obj35);
  }
  items16[1] = tmp42Result9;
  items16[2] = closure_23(tmp2(tmp3[57]), { isConnectedToVoiceChannel: tmp42Result12, channelId });
  let tmp42Result10 = null;
  if (null != stateFromStores) {
    const obj36 = { channel: stateFromStores, inCall: tmp42Result12 };
    tmp42Result10 = tmp42(tmp2(tmp3[58]), obj36);
  }
  items16[3] = tmp42Result10;
  if (canInviteMembers) {
    const obj37 = { icon: tmp2(tmp3[59]), accessibilityLabel: intl3.formatToPlainString(tmp5(tmp3[31]).t["dHHb/2"], obj38), onPress: inviteMembersCallback };
    const tmp2Result21 = tmp2(tmp3[35]);
    intl3 = tmp5(tmp3[31]).intl;
    obj38 = { channelName: stateFromStores1 };
    canInviteMembers = tmp42(tmp2Result21, obj37);
  }
  items16[4] = canInviteMembers;
  let tmp42Result11 = null;
  if (null != stateFromStores2) {
    const obj39 = { icon: tmp2(tmp3[60]), onPress: callback1, accessibilityLabel: stateFromStores2 };
    const tmp2Result22 = tmp2(tmp3[35]);
    tmp42Result11 = tmp42(tmp2Result22, obj39);
  }
  items16[5] = tmp42Result11;
  if (tmp42Result12) {
    tmp42Result12 = treatment === tmp5(tmp3[38]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp42Result12) {
    const obj40 = { channelId };
    tmp42Result12 = tmp42(tmp2(tmp3[61]), obj40);
  }
  items16[6] = tmp42Result12;
  items15[1] = closure_24(tmp2Result20, obj34);
  items11[1] = closure_24(tmp2Result16, obj29);
  items10[2] = closure_24(tmp2Result15, obj27);
  return closure_23(ThemeContextProvider, obj23);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
