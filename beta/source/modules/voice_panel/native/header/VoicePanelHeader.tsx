// Module ID: 18195
// Function ID: 18196
// Name: VoicePanelHeader
// Dependencies: [32, 19, 17, 6292, 5112, 11369, 502, 2068, 2014, 4855, 6203, 1392, 10680, 10683, 10678, 5214, 1098, 21, 5191, 587, 558, 576, 4945, 5478, 5464, 6439, 7039, 10679, 11536, 504, 11371, 1128, 11380, 8389, 11381, 18169, 5462, 18171, 18196, 5521, 4913, 10686, 5192, 18197, 18198, 18199, 6484, 18200, 5343, 9120, 9082, 17672, 18201, 10860, 18227, 13956, 1108, 18238, 18247, 10640, 18252, 18253, 4922, 2]

// Module 18195 (VoicePanelHeader)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import intl5 from "intl" /* 1128 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4945 */;
import timing from "timing" /* 5192 */;
import CallConstants from "CallConstants" /* 5214 */;
import spring from "spring" /* 5478 */;
import useChannelName from "useChannelName" /* 5521 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 10678 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 10683 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 10686 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 11381 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 11536 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 18169 */;
import useStableParticipant from "useStableParticipant" /* 18200 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6292 */;
import ExperimentStore from "ExperimentStore" /* 5112 */;
import StageMusicStore from "StageMusicStore" /* 11369 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import SpeakingStore from "SpeakingStore" /* 6203 */;
import UserStore from "UserStore" /* 1392 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10680 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_0, setVideoDeviceResult, str3;

let closure_16;
let closure_17;
let closure_18;
let closure_23;
let closure_24;
let obj2;
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
let obj = { headerWrapper: { zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%", paddingBottom: EDGE_GUTTER, overflow: "hidden" }, blurStyles: obj2, leftWrapper: { position: "relative", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: 12 }, rightWrapper: { flexDirection: "row", alignItems: "center", gap: 12, paddingLeft: 12 }, headerOuter: { flexDirection: "row", alignItems: "center" }, headerInner: { flexDirection: "row", alignItems: "center", flexShrink: 1, flexGrow: 1 }, headerContentWrapper: { position: "relative" }, stroke: { height: StyleSheet.hairlineWidth, opacity: 0.2 }, strokeAlt: { height: StyleSheet.hairlineWidth, opacity: 0.8 }, strokeContainer: { position: "absolute", left: 0, right: 0, bottom: 0, height: StyleSheet.hairlineWidth }, focusedSpeakingDotWrapper: size, focusedSpeakingDot: size1, shieldIconMargin: { marginLeft: -8 } };
obj2 = { opacity: 0.7 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, padding: 2 };
size1 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
let closure_26 = createStyles(obj);
const constants = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj3 = { overshootClamping: true };
const merged1 = Object.assign(MODE_CHANGE_PHYSICS);
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
  obj3 = isHeaderHidden(focused[22]);
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
  fn2.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
  ({ withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue });
  const animatedProps = obj3.useAnimatedProps(fn2);
  const fn3 = function c() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (derivedValue.get()) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, obj3) };
    return obj;
  };
  const obj5 = isHeaderHidden(focused[22]);
  fn3.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj3 };
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  ({ withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj3 });
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
  obj3 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
  fn2.__closure = obj3;
  fn2.__workletHash = 850837345455;
  fn2.__initData = __initData5;
  const animatedProps = obj2.useAnimatedProps(fn2);
  const fn3 = function u() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (derivedValue.get()) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, obj3) };
    return obj;
  };
  const obj4 = isHeaderHidden(focused[22]);
  fn3.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj3 };
  fn3.__workletHash = 6395364000396;
  fn3.__initData = __initData6;
  ({ withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj3 });
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
  obj3 = id(controlsSpecs[22]);
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
    const obj4 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
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
  obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  fn.__closure = obj3;
  fn.__workletHash = 4860356878028;
  fn.__initData = __initData9;
  const obj2 = id(controlsSpecs[22]);
  derivedValue = obj2.useDerivedValue(fn);
  const fn2 = function _() {
    let opacity = 0;
    if (derivedValue.get()) {
      opacity = 1;
    }
    return { opacity };
  };
  fn2.__closure = { showSpeakingIndicator: derivedValue };
  fn2.__workletHash = 898986210230;
  fn2.__initData = __initData10;
  const obj4 = id(controlsSpecs[22]);
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
  const tmpResult2 = stateFromStores(11371);
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
      const tmp4Result = importDefault(stateFromStores ? 11380 : 8389);
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
  const obj2 = stateFromStores(11371);
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
      obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 11380 : 8389),
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
const __initData14 = { code: "function VoicePanelHeaderTsx14(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs_0.paddingTop;return{...specs_0,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData15 = { code: "function VoicePanelHeaderTsx15(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData16 = { code: "function VoicePanelHeaderTsx16(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height_0}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height_0:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData17 = { code: "function VoicePanelHeaderTsx17(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?\"none\":\"box-none\",importantForAccessibility:isHeaderHidden.get()?\"no-hide-descendants\":\"auto\",accessibilityElementsHidden:isHeaderHidden.get()};}" };
const __initData18 = { code: "function VoicePanelHeaderTsx18(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData19 = { code: "function VoicePanelHeaderTsx19(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData20 = { code: "function VoicePanelHeaderTsx20(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
const __initData21 = { code: "function VoicePanelHeaderTsx21(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs_0.paddingTop;return{...specs_0,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData22 = { code: "function VoicePanelHeaderTsx22(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData23 = { code: "function VoicePanelHeaderTsx23(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height_0}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height_0:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData24 = { code: "function VoicePanelHeaderTsx24(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
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
  let tmp38;
  let tmp60;
  let tmp63;
  let token;
  let tmp = wrapperOffset;
  let tmp2 = channelId;
  let obj = wrapperOffset(channelId[21]);
  const cResult = obj.c(107);
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
  obj3 = wrapperOffset(channelId[36]);
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
    let obj4 = { location: "VoicePanelHeader" };
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
    function ce() {
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
    cResult[7] = ce;
    cResult[8] = items3;
    tmp21 = items3;
    tmp20 = ce;
  } else {
    tmp20 = cResult[7];
    tmp21 = cResult[8];
  }
  const tmpResult16 = tmp(tmp2[29]);
  const stateFromStores1 = tmpResult16.useStateFromStores(tmp15, tmp20, tmp21);
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
  function ge() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  }
  ge.__closure = { focused };
  ge.__workletHash = 8016082904457;
  ge.__initData = __initData11;
  function ue(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(handleFocusChange)(arg0);
    }
  }
  const tmpResult17 = tmp(tmp2[22]);
  ue.__closure = { runOnJS: tmp(tmp2[22]).runOnJS, handleFocusChange };
  ue.__workletHash = 9918394343352;
  ue.__initData = __initData12;
  ({ runOnJS: tmp(tmp2[22]).runOnJS, handleFocusChange });
  const animatedReaction = tmpResult17.useAnimatedReaction(ge, ue);
  const tmpResult18 = tmp(tmp2[40]);
  token = tmpResult18.useToken(tmp5(tmp2[19]).modules.mobile.VOICE_PANEL_GUTTER);
  function me() {
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
  const tmpResult19 = tmp(tmp2[22]);
  me.__closure = { calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  me.__workletHash = 2737204369147;
  me.__initData = __initData13;
  ({ calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER });
  const derivedValue = tmpResult19.useDerivedValue(me);
  const tmpResult20 = tmp(tmp2[22]);
  class Te {
    constructor() {
      let num;
      let num2;
      let num3;
      let sum;
      let tmp8;
      let withTiming;
      const tmp2 = calculateVoicePanelHeaderSpecsDefault;
      const tmp2Result = tmp2(safeArea.get(), token);
      const value = mode.get();
      const PIP = constants.PIP;
      const height = tmp2Result.height;
      if (connected.get()) {
        sum = height;
      } else {
        sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
      }
      obj3 = { paddingTop: tmp8, borderTopLeftRadius: num2, borderTopRightRadius: num, height: sum, opacity: withTiming(num3, OPACITY_TIMING) };
      tmp8 = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
      const merged = Object.assign(tmp2Result);
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
      const withSpring = tmp10(5478).withSpring;
      spring;
      const value2 = derivedValue.get();
      if (!connected.get()) {
        let tmp15;
        if (wrapperOffset.get().gestureActive) {
          tmp15 = closure_18;
        }
        const items = [{ translateY: withSpring(value2, tmp15) }];
        obj3.transform = items;
        const obj4 = { translateY: withSpring(value2, tmp15) };
        return obj3;
      }
      tmp15 = closure_16;
    }
  }
  Te.__closure = { calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: tmp(tmp2[42]).withTiming, OPACITY_TIMING, withSpring: tmp(tmp2[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  Te.__workletHash = 9971353242678;
  Te.__initData = __initData14;
  ({ calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: tmp(tmp2[42]).withTiming, OPACITY_TIMING, withSpring: tmp(tmp2[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS });
  const animatedStyle = tmpResult20.useAnimatedStyle(Te);
  const tmpResult21 = tmp(tmp2[22]);
  class Ce {
    constructor() {
      const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
      return tmp;
    }
  }
  const obj8 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  Ce.__closure = obj8;
  Ce.__workletHash = 12045427211815;
  Ce.__initData = __initData15;
  derivedValue1 = tmpResult21.useDerivedValue(Ce);
  const tmpResult22 = tmp(tmp2[22]);
  class De {
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
      const withSpring = tmp3(5478).withSpring;
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
  De.__closure = { calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, withTiming: tmp(tmp2[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: tmp(tmp2[23]).withSpring, MODE_CHANGE_PHYSICS };
  De.__workletHash = 11509667866329;
  De.__initData = __initData16;
  ({ calculateVoicePanelHeaderSpecs: tmp5(tmp2[41]), safeArea, edgeGutter: token, withTiming: tmp(tmp2[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: tmp(tmp2[23]).withSpring, MODE_CHANGE_PHYSICS });
  const animatedStyle1 = tmpResult22.useAnimatedStyle(De);
  function be() {
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
  be.__closure = { isHeaderHidden: derivedValue1 };
  be.__workletHash = 13251177319922;
  be.__initData = __initData17;
  const tmpResult23 = tmp(tmp2[22]);
  const animatedProps = tmpResult23.useAnimatedProps(be);
  const tmpResult24 = tmp(tmp2[43]);
  const canInviteMembers = tmpResult24.useCanInviteMembers(channelId);
  const tmpResult25 = tmp(tmp2[44]);
  tmpResult25.useInviteMembersCallback(channelId);
  const tmp36 = tmp5(tmp2[45])();
  const tmpResult26 = tmp(tmp2[46]);
  tmpResult26.useNavigatorBackPressHandler(tmp36);
  if (null != tmp26) {
    DOWN = constants.LEFT;
    tmp38 = constants;
  } else {
    tmp38 = constants;
    DOWN = constants.DOWN;
  }
  if (cResult[9] === tmp13) {
    let tmp43;
    let tmp47;
    let tmp50;
    let tmp49;
    let tmp55;
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      let id = AuthenticationStore.getId();
      cResult[12] = id;
      tmp43 = id;
    } else {
      tmp43 = cResult[12];
    }
    const tmp46 = tmp5(tmp2[47])(tmp43, channelId, guildId);
    MODE_CHANGE_PHYSICS = tmp46;
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [handleFocusChange];
      cResult[13] = items4;
      tmp47 = items4;
    } else {
      tmp47 = cResult[13];
    }
    if (cResult[14] !== tmp46) {
      class Le {
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
      const items5 = [tmp46];
      cResult[14] = tmp46;
      cResult[15] = Le;
      cResult[16] = items5;
      tmp50 = items5;
      tmp49 = Le;
    } else {
      class Le {
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
      tmp50 = cResult[16];
    }
    const tmpResult27 = tmp(tmp2[29]);
    const stateFromStores2 = tmpResult27.useStateFromStores(tmp47, tmp49, tmp50);
    const _Symbol3 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
      cResult[17] = Be;
    } else {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
    }
    let str = "0deg";
    if (DOWN === tmp38.LEFT) {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
    }
    if (cResult[18] !== str) {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
      const items6 = [{ rotateZ: str }];
      const obj10 = { rotateZ: str };
      tmp54[0] = items6;
      cResult[18] = str;
      cResult[19] = tmp54;
    } else {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
    }
    if (cResult[20] !== channelId) {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
      tmp56[0] = channelId;
      cResult[20] = channelId;
      cResult[21] = tmp56;
      tmp55 = tmp56;
    } else {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
    }
    const tmpResult28 = tmp(tmp2[49]);
    const isSecureFramesUIEnabled = tmpResult28.useIsSecureFramesUIEnabled(tmp55);
    if (tmp26 === ParticipantTypes.USER) {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
      if (null != tmp24) {
        class Be {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
      }
    }
    if (cResult[22] === channelId) {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
      const tmpResult29 = tmp(tmp2[50]);
      const isUserSecureFramesVerified = tmpResult29.useIsUserSecureFramesVerified(tmp60);
      if (tmp26 === ParticipantTypes.STREAM) {
        class Be {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
        if (null != tmp24) {
          class Be {
            constructor() {
              closure_0 = handleFocusChange.getVideoDeviceId();
              keys = Object.keys(handleFocusChange.getVideoDevices());
              found = keys.find((item) => item !== closure_0);
              if (null != found) {
                tmp2 = gestureState;
                tmp3 = channelId;
                obj = gestureState(channelId[48]);
                setVideoDeviceResult = obj.setVideoDevice(found);
              }
              return;
            }
          }
        }
      }
      if (cResult[25] === channelId) {
        class Be {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
        const tmpResult30 = tmp(tmp2[50]);
        const isStreamSecureFramesVerified = tmpResult30.useIsStreamSecureFramesVerified(tmp63);
        if (ParticipantTypes.STREAM !== tmp26) {
          class Be {
            constructor() {
              closure_0 = handleFocusChange.getVideoDeviceId();
              keys = Object.keys(handleFocusChange.getVideoDevices());
              found = keys.find((item) => item !== closure_0);
              if (null != found) {
                tmp2 = gestureState;
                tmp3 = channelId;
                obj = gestureState(channelId[48]);
                setVideoDeviceResult = obj.setVideoDevice(found);
              }
              return;
            }
          }
          if (ParticipantTypes.USER !== tmp26) {
            class Be {
              constructor() {
                closure_0 = handleFocusChange.getVideoDeviceId();
                keys = Object.keys(handleFocusChange.getVideoDevices());
                found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  tmp2 = gestureState;
                  tmp3 = channelId;
                  obj = gestureState(channelId[48]);
                  setVideoDeviceResult = obj.setVideoDevice(found);
                }
                return;
              }
            }
          }
        }
        if (tmp13) {
          class Be {
            constructor() {
              closure_0 = handleFocusChange.getVideoDeviceId();
              keys = Object.keys(handleFocusChange.getVideoDevices());
              found = keys.find((item) => item !== closure_0);
              if (null != found) {
                tmp2 = gestureState;
                tmp3 = channelId;
                obj = gestureState(channelId[48]);
                setVideoDeviceResult = obj.setVideoDevice(found);
              }
              return;
            }
          }
          const ONYX = ThemeTypes.ONYX;
        }
        if (cResult[28] === animatedStyle) {
          class Be {
            constructor() {
              closure_0 = handleFocusChange.getVideoDeviceId();
              keys = Object.keys(handleFocusChange.getVideoDevices());
              found = keys.find((item) => item !== closure_0);
              if (null != found) {
                tmp2 = gestureState;
                tmp3 = channelId;
                obj = gestureState(channelId[48]);
                setVideoDeviceResult = obj.setVideoDevice(found);
              }
              return;
            }
          }
          if (cResult[31] === focused) {
            class Be {
              constructor() {
                closure_0 = handleFocusChange.getVideoDeviceId();
                keys = Object.keys(handleFocusChange.getVideoDevices());
                found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  tmp2 = gestureState;
                  tmp3 = channelId;
                  obj = gestureState(channelId[48]);
                  setVideoDeviceResult = obj.setVideoDevice(found);
                }
                return;
              }
            }
          }
          const obj11 = { isHeaderHidden: derivedValue1, scrollPosition, focused };
          cResult[31] = focused;
          cResult[32] = derivedValue1;
          cResult[33] = scrollPosition;
          cResult[34] = closure_23(closure_35, obj11);
          const tmp69 = closure_23(closure_35, obj11);
        }
        const items7 = [tmp4.headerWrapper, animatedStyle];
        cResult[28] = animatedStyle;
        cResult[29] = tmp4.headerWrapper;
        cResult[30] = items7;
      }
      const obj12 = { streamKey: null, channelId };
      cResult[25] = channelId;
      cResult[26] = null;
      cResult[27] = obj12;
      tmp63 = obj12;
    }
    const obj13 = { userId: null, channelId };
    cResult[22] = channelId;
    cResult[23] = null;
    cResult[24] = obj13;
    tmp60 = obj13;
  }
  if (DOWN === tmp38.LEFT) {
    class Be {
      constructor() {
        closure_0 = handleFocusChange.getVideoDeviceId();
        keys = Object.keys(handleFocusChange.getVideoDevices());
        found = keys.find((item) => item !== closure_0);
        if (null != found) {
          tmp2 = gestureState;
          tmp3 = channelId;
          obj = gestureState(channelId[48]);
          setVideoDeviceResult = obj.setVideoDevice(found);
        }
        return;
      }
    }
    stringResult = obj23.string(tmp(tmp2[31]).t["9M6OdC"]);
  } else {
    class Be {
      constructor() {
        closure_0 = handleFocusChange.getVideoDeviceId();
        keys = Object.keys(handleFocusChange.getVideoDevices());
        found = keys.find((item) => item !== closure_0);
        if (null != found) {
          tmp2 = gestureState;
          tmp3 = channelId;
          obj = gestureState(channelId[48]);
          setVideoDeviceResult = obj.setVideoDevice(found);
        }
        return;
      }
    }
    const string = tmp41.string;
    const t = tmp(tmp2[31]).t;
    if (tmp13) {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
    } else {
      class Be {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
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
  let items8;
  let items9;
  let obj22;
  let obj35;
  let scrollPosition;
  let stringResult;
  let tmp11;
  let tmp13;
  let tmp26;
  let tmp2Result11;
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
  obj3 = wrapperOffset(channelId[29]);
  let items = [c10];
  const items1 = [channelId];
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp41Result12 = gestureState(channelId[37])(channelId);
  let obj4 = gestureState(channelId[38]);
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
  fn.__workletHash = 3671264887776;
  fn.__initData = __initData18;
  const fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)(arg0);
    }
  };
  const obj6 = wrapperOffset(channelId[22]);
  fn2.__closure = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
  fn2.__workletHash = 3195747765779;
  fn2.__initData = __initData19;
  ({ runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange });
  const animatedReaction = obj6.useAnimatedReaction(fn, fn2);
  const obj8 = wrapperOffset(channelId[40]);
  token = obj8.useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  function _e() {
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
  _e.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  _e.__workletHash = 11122710925211;
  _e.__initData = __initData20;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER });
  const derivedValue = obj9.useDerivedValue(_e);
  function pe() {
    let num;
    let num2;
    let num3;
    let sum;
    let tmp8;
    let withTiming;
    const tmp2 = calculateVoicePanelHeaderSpecsDefault;
    const tmp2Result = tmp2(safeArea.get(), token);
    const value = mode.get();
    const PIP = constants.PIP;
    const height = tmp2Result.height;
    if (connected.get()) {
      sum = height;
    } else {
      sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
    }
    obj3 = { paddingTop: tmp8, borderTopLeftRadius: num2, borderTopRightRadius: num, height: sum, opacity: withTiming(num3, OPACITY_TIMING) };
    tmp8 = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
    const merged = Object.assign(tmp2Result);
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
    const withSpring = tmp10(5478).withSpring;
    spring;
    const value2 = derivedValue.get();
    if (!connected.get()) {
      let tmp15;
      if (wrapperOffset.get().gestureActive) {
        tmp15 = closure_18;
      }
      const items = [{ translateY: withSpring(value2, tmp15) }];
      obj3.transform = items;
      const obj4 = { translateY: withSpring(value2, tmp15) };
      return obj3;
    }
    tmp15 = closure_16;
  }
  const obj11 = wrapperOffset(channelId[22]);
  pe.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[42]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  pe.__workletHash = 13938557240528;
  pe.__initData = __initData21;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[42]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS });
  const animatedStyle = obj11.useAnimatedStyle(pe);
  const obj13 = wrapperOffset(channelId[22]);
  class Se {
    constructor() {
      const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
      return tmp;
    }
  }
  const obj14 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  Se.__closure = obj14;
  Se.__workletHash = 5927654807363;
  Se.__initData = __initData22;
  derivedValue1 = obj13.useDerivedValue(Se);
  function fe() {
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
    const withSpring = tmp3(5478).withSpring;
    let num2 = 0;
    spring;
    if (obj.get()) {
      num2 = -height;
    }
    items = [{ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) }];
    ({ translateY: withSpring(num2, MODE_CHANGE_PHYSICS) });
    return obj2;
  }
  const obj15 = wrapperOffset(channelId[22]);
  fe.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  fe.__workletHash = 11151013494207;
  fe.__initData = __initData23;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, MODE_CHANGE_PHYSICS: DOWN });
  const animatedStyle1 = obj15.useAnimatedStyle(fe);
  const obj17 = wrapperOffset(channelId[22]);
  class He {
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
  He.__closure = { isHeaderHidden: derivedValue1 };
  He.__workletHash = 9531590342194;
  He.__initData = __initData24;
  const animatedProps = obj17.useAnimatedProps(He);
  const obj18 = wrapperOffset(channelId[43]);
  let canInviteMembers = obj18.useCanInviteMembers(channelId);
  const obj19 = wrapperOffset(channelId[44]);
  const inviteMembersCallback = obj19.useInviteMembersCallback(channelId);
  const tmp24 = gestureState(channelId[45])();
  const obj20 = wrapperOffset(channelId[46]);
  obj20.useNavigatorBackPressHandler(tmp24);
  if (null != tmp13) {
    DOWN = constants.LEFT;
    tmp26 = constants;
  } else {
    tmp26 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp26.LEFT) {
    let intl2 = tmp5(tmp3[31]).intl;
    stringResult = intl2.string(tmp5(tmp3[31]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[31]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[31]).t;
    if (tmp41Result12) {
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
      obj3 = useStableParticipant;
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
  let tmp37 = null;
  const useIsUserSecureFramesVerified = tmp5(tmp3[50]).useIsUserSecureFramesVerified;
  tmp5(tmp3[50]);
  if (tmp13 === ParticipantTypes.USER) {
    tmp37 = null;
    if (null != tmp11) {
      tmp37 = tmp11;
    }
  }
  const isUserSecureFramesVerified = useIsUserSecureFramesVerified({ userId: tmp37, channelId });
  let tmp40 = null;
  const useIsStreamSecureFramesVerified = tmp5(tmp3[50]).useIsStreamSecureFramesVerified;
  tmp5(tmp3[50]);
  if (tmp13 === ParticipantTypes.STREAM) {
    tmp40 = null;
    if (null != tmp11) {
      tmp40 = tmp11;
    }
  }
  let flag = useIsStreamSecureFramesVerified({ streamKey: tmp40, channelId });
  if (ParticipantTypes.STREAM !== tmp13) {
    flag = false;
    if (ParticipantTypes.USER === tmp13) {
      flag = isUserSecureFramesVerified;
    }
  }
  let ONYX;
  const ThemeContextProvider = tmp5(tmp3[62]).ThemeContextProvider;
  if (tmp41Result12) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj21 = { theme: ONYX, children: closure_24(tmp2Result11, obj22) };
  obj22 = { style: items8, pointerEvents: "box-none", layout, children: items9 };
  items8 = [tmp.headerWrapper, animatedStyle];
  items9 = [, , ];
  tmp2Result11 = tmp2(tmp3[26]);
  items9[0] = closure_23(closure_35, { isHeaderHidden: derivedValue1, scrollPosition, focused });
  let tmp41Result = tmp41Result12;
  if (tmp41Result) {
    const obj23 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
    const tmp2Result12 = tmp2(tmp3[51]);
    tmp41Result = tmp41(tmp2Result12, obj23);
  }
  items9[1] = tmp41Result;
  let tmp41Result7 = null;
  const obj24 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: items10 };
  const tmp2Result13 = tmp2(tmp3[26]);
  if (tmp13 === ParticipantTypes.USER) {
    const obj25 = { isHeaderHidden: derivedValue1 };
    tmp41Result7 = tmp41(tmp2(tmp3[52]), obj25);
  }
  items10 = [tmp41Result7, ];
  const obj26 = { style: items11, animatedProps, children: items14 };
  items11 = [tmp.headerOuter, animatedStyle1];
  const obj27 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: items12 };
  const tmp2Result14 = tmp2(tmp3[26]);
  const obj28 = { icon: tmp2(tmp3[53]), accessibilityLabel: stringResult, onPress: tmp24, style: memo };
  const tmp2Result15 = tmp2(tmp3[25]);
  const tmp2Result16 = tmp2(tmp3[35]);
  items12 = [closure_23(tmp2Result16, obj28), ];
  const obj29 = { style: tmp.headerInner, children: items13 };
  items13 = [, ];
  const tmp2Result17 = tmp2(tmp3[26]);
  items13[0] = closure_23(tmp2(tmp3[54]), {});
  let tmp41Result8 = null;
  if (isSecureFramesUIEnabled) {
    tmp41Result8 = null;
    if (flag) {
      const obj30 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      const ShieldLockIcon = tmp5(tmp3[55]).ShieldLockIcon;
      tmp41Result8 = tmp41(ShieldLockIcon, obj30);
    }
  }
  items13[1] = tmp41Result8;
  items12[1] = closure_24(tmp2Result17, obj29);
  items14 = [closure_24(tmp2Result15, obj27), ];
  const obj31 = { style: tmp.rightWrapper, layout, children: items15 };
  items15 = [, , , , , , ];
  const tmp2Result18 = tmp2(tmp3[26]);
  items15[0] = closure_23(closure_40, {});
  let tmp41Result9 = channelType === tmp5(tmp3[56]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp41Result9) {
    const obj32 = { channelId };
    tmp41Result9 = tmp41(closure_41, obj32);
  }
  items15[1] = tmp41Result9;
  items15[2] = closure_23(tmp2(tmp3[57]), { isConnectedToVoiceChannel: tmp41Result12, channelId });
  let tmp41Result10 = null;
  if (null != stateFromStores) {
    const obj33 = { channel: stateFromStores, inCall: tmp41Result12 };
    tmp41Result10 = tmp41(tmp2(tmp3[58]), obj33);
  }
  items15[3] = tmp41Result10;
  if (canInviteMembers) {
    const obj34 = { icon: tmp2(tmp3[59]), accessibilityLabel: intl3.formatToPlainString(tmp5(tmp3[31]).t["dHHb/2"], obj35), onPress: inviteMembersCallback };
    const tmp2Result19 = tmp2(tmp3[35]);
    intl3 = tmp5(tmp3[31]).intl;
    obj35 = { channelName: stateFromStores1 };
    canInviteMembers = tmp41(tmp2Result19, obj34);
  }
  items15[4] = canInviteMembers;
  let tmp41Result11 = null;
  if (null != stateFromStores2) {
    const obj36 = { icon: tmp2(tmp3[60]), onPress: callback1, accessibilityLabel: stateFromStores2 };
    const tmp2Result20 = tmp2(tmp3[35]);
    tmp41Result11 = tmp41(tmp2Result20, obj36);
  }
  items15[5] = tmp41Result11;
  if (tmp41Result12) {
    tmp41Result12 = treatment === tmp5(tmp3[38]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp41Result12) {
    const obj37 = { channelId };
    tmp41Result12 = tmp41(tmp2(tmp3[61]), obj37);
  }
  items15[6] = tmp41Result12;
  items14[1] = closure_24(tmp2Result18, obj31);
  items10[1] = closure_24(tmp2Result14, obj26);
  items9[2] = closure_24(tmp2Result13, obj24);
  return closure_23(ThemeContextProvider, obj21);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
