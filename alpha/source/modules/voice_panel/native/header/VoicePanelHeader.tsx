// Module ID: 19155
// Function ID: 19156
// Name: VoicePanelHeader
// Dependencies: [32, 19, 17, 6837, 5233, 11836, 502, 4858, 2007, 4951, 6750, 1384, 11204, 11207, 11202, 5676, 1083, 21, 5009, 575, 5090, 5632, 7235, 5594, 6954, 11203, 11977, 504, 11838, 19094, 1114, 11842, 8550, 11843, 5269, 19095, 19156, 5647, 5591, 11210, 5249, 19157, 19113, 19158, 6998, 19159, 5896, 9265, 9227, 5075, 18546, 19160, 11378, 19162, 14697, 1094, 19173, 19182, 10959, 19184, 19185, 2]

// Module 19155 (VoicePanelHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl5 from "intl" /* 1114 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import spring from "spring" /* 5632 */;
import useChannelName from "useChannelName" /* 5647 */;
import CallConstants from "CallConstants" /* 5676 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11202 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11207 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11210 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 11843 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 11977 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19094 */;
import useStableParticipant from "useStableParticipant" /* 19159 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import ExperimentStore from "ExperimentStore" /* 5233 */;
import StageMusicStore from "StageMusicStore" /* 11836 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import SpeakingStore from "SpeakingStore" /* 6750 */;
import UserStore from "UserStore" /* 1384 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11204 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_16;
let closure_17;
let closure_18;
let closure_23;
let closure_24;
let obj2;
let obj3;
let size;
let size1;
function MusicMuteButton(channelId) {
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
  const obj2 = stateFromStores(11838);
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    tmp7Result = null;
    if (speaker) {
      let stringResult;
      const tmpResult = VoicePanelIconButtonDefault;
      const intl = tmp4(1114).intl;
      const string = intl.string;
      const t = tmp4(1114).t;
      const tmp7 = closure_23;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 11842 : 8550),
        onPress() {
              const obj = StageMusicActionCreators;
              return obj.updateStageMusicMuted(!stateFromStores);
            }
      };
      tmp7Result = tmp7(tmpResult, obj3);
    }
  }
  return tmp7Result;
}
const StyleSheet = react_native.StyleSheet;
let AuthenticationStore = AuthenticationStore_mod;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
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
let closure_32 = react.memo(function HeaderBlur(isHeaderHidden) {
  let items;
  let items1;
  let items2;
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = closure_26();
  let obj = isHeaderHidden(focused[20]);
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
  fn.__workletHash = 8127245112238;
  fn.__initData = __initData;
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
  const obj2 = isHeaderHidden(focused[20]);
  fn2.__closure = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue };
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
  ({ withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue });
  const animatedProps = obj2.useAnimatedProps(fn2);
  obj4 = isHeaderHidden(focused[20]);
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
  fn3.__closure = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  ({ withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 });
  const animatedStyle = obj4.useAnimatedStyle(fn3);
  const obj6 = { style: items, pointerEvents: "none", children: items1 };
  items = [StyleSheet.absoluteFill, animatedStyle];
  let tmp5 = scrollPosition(focused[22]);
  items1 = [, ];
  const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  items1[0] = closure_23(scrollPosition(focused[23]), obj7);
  const obj8 = { style: tmp.strokeContainer, children: items2 };
  items2 = [, ];
  const obj9 = { style: tmp.stroke };
  const tmp6 = scrollPosition(focused[24]);
  items2[0] = closure_23(scrollPosition(focused[24]), obj9);
  const obj10 = { style: tmp.strokeAlt };
  items2[1] = closure_23(scrollPosition(focused[24]), obj10);
  items1[1] = closure_24(tmp6, obj8);
  return closure_24(tmp5, obj6);
});
const __initData4 = { code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
const __initData5 = { code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
let closure_35 = react.memo(function FocusedSpeakingDot() {
  let controlsSpecs;
  let derivedValue;
  let focused;
  let items1;
  let obj6;
  const id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[25]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const obj = id(controlsSpecs[20]);
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
  fn.__workletHash = 5466722752449;
  fn.__initData = __initData4;
  const obj2 = id(controlsSpecs[20]);
  derivedValue = obj2.useDerivedValue(fn);
  const fn2 = function _() {
    let opacity = 0;
    if (derivedValue.get()) {
      opacity = 1;
    }
    return { opacity };
  };
  fn2.__closure = { showSpeakingIndicator: derivedValue };
  fn2.__workletHash = 16177124708898;
  fn2.__initData = __initData5;
  obj4 = id(controlsSpecs[20]);
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const obj5 = { style: items1, pointerEvents: "none", children: closure_23(focused(controlsSpecs[22]), obj6) };
  items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  obj6 = { style: tmp5.focusedSpeakingDot };
  const tmp8 = focused(controlsSpecs[22]);
  return closure_23(tmp8, obj5);
});
const __initData6 = { code: "function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData7 = { code: "function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData8 = { code: "function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
const __initData9 = { code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{height:!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height};}" };
const __initData10 = { code: "function VoicePanelHeaderTsx10(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;return{paddingTop:!connected.get()?EDGE_GUTTER:specs.paddingTop,paddingLeft:specs.paddingLeft,paddingRight:specs.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData11 = { code: "function VoicePanelHeaderTsx11(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData12 = { code: "function VoicePanelHeaderTsx12(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData13 = { code: "function VoicePanelHeaderTsx13(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
const memoResult = react.memo(function VoicePanelHeader(wrapperOffset) {
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
  let derivedValue;
  let derivedValue1;
  let DOWN;
  UI_SHOW_HIDE_PHYSICS = undefined;
  let tmp = closure_26();
  let obj = controlsSpecs;
  let tmp2 = gestureState;
  let tmp3 = channelId;
  const context = controlsSpecs.useContext(gestureState(channelId[25]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  const tmp5 = wrapperOffset;
  ({ guildId, channelType, scrollPosition } = context);
  let obj2 = wrapperOffset(channelId[34]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = wrapperOffset(channelId[27]);
  let items = [c10];
  const items1 = [channelId];
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp42Result12 = gestureState(channelId[35])(channelId);
  obj4 = gestureState(channelId[36]);
  const treatment = obj4.useConfig({ location: "VoicePanelHeader" }).treatment;
  const items2 = [derivedValue1, token, c10, connected];
  const items3 = [channelId];
  const obj5 = wrapperOffset(channelId[27]);
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
  const obj6 = wrapperOffset(channelId[20]);
  class E {
    constructor() {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  E.__closure = { focused };
  E.__workletHash = 7943480174143;
  E.__initData = __initData6;
  const fn = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)(arg0);
    }
  };
  fn.__closure = { runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange };
  fn.__workletHash = 13084116412140;
  fn.__initData = __initData7;
  ({ runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange });
  const animatedReaction = obj6.useAnimatedReaction(E, fn);
  const obj8 = wrapperOffset(channelId[38]);
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
  const obj9 = wrapperOffset(channelId[20]);
  pe.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  pe.__workletHash = 13290333964417;
  pe.__initData = __initData8;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER });
  derivedValue = obj9.useDerivedValue(pe);
  const obj11 = wrapperOffset(channelId[20]);
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
  Se.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, connected, EDGE_GUTTER };
  Se.__workletHash = 1684302669645;
  Se.__initData = __initData9;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, connected, EDGE_GUTTER });
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
    const withSpring = tmp6(5632).withSpring;
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
  const obj13 = wrapperOffset(channelId[20]);
  fe.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[40]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  fe.__workletHash = 3423245801552;
  fe.__initData = __initData10;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[40]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS });
  const animatedStyle1 = obj13.useAnimatedStyle(fe);
  const obj15 = wrapperOffset(channelId[20]);
  class He {
    constructor() {
      const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
      return tmp;
    }
  }
  const obj16 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  He.__closure = obj16;
  He.__workletHash = 15131979824291;
  He.__initData = __initData11;
  derivedValue1 = obj15.useDerivedValue(He);
  const obj17 = wrapperOffset(channelId[20]);
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
      const withSpring = tmp3(5632).withSpring;
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
  Ee.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[40]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  Ee.__workletHash = 12660552700093;
  Ee.__initData = __initData12;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[40]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, MODE_CHANGE_PHYSICS: DOWN });
  const animatedStyle2 = obj17.useAnimatedStyle(Ee);
  const obj19 = wrapperOffset(channelId[20]);
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
  Ie.__workletHash = 6333039607894;
  Ie.__initData = __initData13;
  const animatedProps = obj19.useAnimatedProps(Ie);
  const obj20 = wrapperOffset(channelId[41]);
  let canInviteMembers = obj20.useCanInviteMembers(channelId);
  const obj21 = wrapperOffset(channelId[42]);
  const inviteMembersCallback = obj21.useInviteMembersCallback(channelId);
  const tmp25 = gestureState(channelId[43])();
  const obj22 = wrapperOffset(channelId[44]);
  obj22.useNavigatorBackPressHandler(tmp25);
  if (null != tmp13) {
    DOWN = constants.LEFT;
    tmp27 = constants;
  } else {
    tmp27 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp27.LEFT) {
    let intl2 = tmp5(tmp3[30]).intl;
    stringResult = intl2.string(tmp5(tmp3[30]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[30]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[30]).t;
    if (tmp42Result12) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  let tmp2Result = tmp2(tmp3[45]);
  const tmp2ResultResult = tmp2Result(AuthenticationStore.getId(), channelId, guildId);
  UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
  const items5 = [handleFocusChange];
  const items6 = [tmp2ResultResult];
  const tmp5Result = tmp5(tmp3[27]);
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
                    const intl3 = tmp10(1114).intl;
                    stringResult = intl3.string(tmp10(1114).t["/R1SBx"]);
                  }
                }
                if ("front" === facing) {
                  if ("back" === tmp6) {
                    const intl2 = tmp10(1114).intl;
                    stringResult = intl2.string(tmp10(1114).t["7YZ/Si"]);
                  }
                }
                const intl = tmp10(1114).intl;
                stringResult = intl.string(tmp10(1114).t["t9eQ/g"]);
              }
              return stringResult;
            }
            const intl4 = tmp10(1114).intl;
            stringResult = intl4.string(tmp10(1114).t["t9eQ/g"]);
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
      const obj = gestureState(channelId[46]);
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
  const tmp5Result4 = tmp5(tmp3[47]);
  const isSecureFramesUIEnabled = tmp5Result4.useIsSecureFramesUIEnabled({ channelId });
  let tmp38 = null;
  const useIsUserSecureFramesVerified = tmp5(tmp3[48]).useIsUserSecureFramesVerified;
  tmp5(tmp3[48]);
  if (tmp13 === ParticipantTypes.USER) {
    tmp38 = null;
    if (null != tmp11) {
      tmp38 = tmp11;
    }
  }
  const isUserSecureFramesVerified = useIsUserSecureFramesVerified({ userId: tmp38, channelId });
  let tmp41 = null;
  const useIsStreamSecureFramesVerified = tmp5(tmp3[48]).useIsStreamSecureFramesVerified;
  tmp5(tmp3[48]);
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
  const ThemeContextProvider = tmp5(tmp3[49]).ThemeContextProvider;
  if (tmp42Result12) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj23 = { theme: ONYX, children: closure_23(tmp2Result12, obj24) };
  obj24 = { style: items8, pointerEvents: "box-none", layout, children: closure_24(tmp2Result13, obj25) };
  items8 = [tmp.headerWrapper, animatedStyle];
  obj25 = { style: items9, pointerEvents: "box-none", children: items10 };
  items9 = [tmp.headerSurface, animatedStyle1];
  items10 = [, , ];
  tmp2Result12 = tmp2(tmp3[22]);
  tmp2Result13 = tmp2(tmp3[22]);
  items10[0] = closure_23(closure_32, { isHeaderHidden: derivedValue1, scrollPosition, focused });
  let tmp42Result = tmp42Result12;
  if (tmp42Result) {
    const obj26 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
    const tmp2Result14 = tmp2(tmp3[50]);
    tmp42Result = tmp42(tmp2Result14, obj26);
  }
  items10[1] = tmp42Result;
  let tmp42Result7 = null;
  const obj27 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: items11 };
  const tmp2Result15 = tmp2(tmp3[22]);
  if (tmp13 === ParticipantTypes.USER) {
    const obj28 = { isHeaderHidden: derivedValue1 };
    tmp42Result7 = tmp42(tmp2(tmp3[51]), obj28);
  }
  items11 = [tmp42Result7, ];
  const obj29 = { style: items12, animatedProps, children: items15 };
  items12 = [tmp.headerOuter, animatedStyle2];
  const obj30 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: items13 };
  const tmp2Result16 = tmp2(tmp3[22]);
  const obj31 = { icon: tmp2(tmp3[52]), accessibilityLabel: stringResult, onPress: tmp25, style: memo };
  const tmp2Result17 = tmp2(tmp3[24]);
  const tmp2Result18 = tmp2(tmp3[29]);
  items13 = [closure_23(tmp2Result18, obj31), ];
  const obj32 = { style: tmp.headerInner, children: items14 };
  items14 = [, ];
  const tmp2Result19 = tmp2(tmp3[22]);
  items14[0] = closure_23(tmp2(tmp3[53]), {});
  let tmp42Result8 = null;
  if (isSecureFramesUIEnabled) {
    tmp42Result8 = null;
    if (flag) {
      const obj33 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      const ShieldLockIcon = tmp5(tmp3[54]).ShieldLockIcon;
      tmp42Result8 = tmp42(ShieldLockIcon, obj33);
    }
  }
  items14[1] = tmp42Result8;
  items13[1] = closure_24(tmp2Result19, obj32);
  items15 = [closure_24(tmp2Result17, obj30), ];
  const obj34 = { style: tmp.rightWrapper, layout, children: items16 };
  items16 = [, , , , , , ];
  const tmp2Result20 = tmp2(tmp3[22]);
  items16[0] = closure_23(closure_35, {});
  let tmp42Result9 = channelType === tmp5(tmp3[55]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp42Result9) {
    const obj35 = { channelId };
    tmp42Result9 = tmp42(MusicMuteButton, obj35);
  }
  items16[1] = tmp42Result9;
  items16[2] = closure_23(tmp2(tmp3[56]), { isConnectedToVoiceChannel: tmp42Result12, channelId });
  let tmp42Result10 = null;
  if (null != stateFromStores) {
    const obj36 = { channel: stateFromStores, inCall: tmp42Result12 };
    tmp42Result10 = tmp42(tmp2(tmp3[57]), obj36);
  }
  items16[3] = tmp42Result10;
  if (canInviteMembers) {
    const obj37 = { icon: tmp2(tmp3[58]), accessibilityLabel: intl3.formatToPlainString(tmp5(tmp3[30]).t["dHHb/2"], obj38), onPress: inviteMembersCallback };
    const tmp2Result21 = tmp2(tmp3[29]);
    intl3 = tmp5(tmp3[30]).intl;
    obj38 = { channelName: stateFromStores1 };
    canInviteMembers = tmp42(tmp2Result21, obj37);
  }
  items16[4] = canInviteMembers;
  let tmp42Result11 = null;
  if (null != stateFromStores2) {
    const obj39 = { icon: tmp2(tmp3[59]), onPress: callback1, accessibilityLabel: stateFromStores2 };
    const tmp2Result22 = tmp2(tmp3[29]);
    tmp42Result11 = tmp42(tmp2Result22, obj39);
  }
  items16[5] = tmp42Result11;
  if (tmp42Result12) {
    tmp42Result12 = treatment === tmp5(tmp3[36]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp42Result12) {
    const obj40 = { channelId };
    tmp42Result12 = tmp42(tmp2(tmp3[60]), obj40);
  }
  items16[6] = tmp42Result12;
  items15[1] = closure_24(tmp2Result20, obj34);
  items11[1] = closure_24(tmp2Result16, obj29);
  items10[2] = closure_24(tmp2Result15, obj27);
  return closure_23(ThemeContextProvider, obj23);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
