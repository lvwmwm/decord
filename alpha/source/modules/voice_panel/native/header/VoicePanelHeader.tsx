// Module ID: 19207
// Function ID: 19208
// Name: VoicePanelHeader
// Dependencies: [32, 19, 17, 6843, 5238, 11874, 502, 4863, 2006, 4956, 6756, 1383, 11223, 11226, 11221, 11241, 5681, 1083, 21, 5014, 575, 5095, 5637, 7241, 5599, 6960, 11222, 12015, 504, 11876, 19143, 1113, 11880, 8558, 11881, 5274, 19144, 19208, 5652, 5596, 11229, 5254, 19209, 19162, 19210, 7004, 19211, 5915, 9284, 9246, 5080, 18589, 19212, 11414, 19214, 14735, 1093, 19225, 19234, 10978, 19236, 19237, 2]

// Module 19207 (VoicePanelHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl5 from "intl" /* 1113 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import useChannelName from "useChannelName" /* 5652 */;
import CallConstants from "CallConstants" /* 5681 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11226 */;
import calculateVoicePanelHeaderSpecs from "calculateVoicePanelHeaderSpecs" /* 11229 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11241 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 11881 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 12015 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19143 */;
import useStableParticipant from "useStableParticipant" /* 19211 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import ExperimentStore from "ExperimentStore" /* 5238 */;
import StageMusicStore from "StageMusicStore" /* 11874 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import SpeakingStore from "SpeakingStore" /* 6756 */;
import UserStore from "UserStore" /* 1383 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const calculateVoicePanelHeaderSpecsDefault = calculateVoicePanelHeaderSpecs;

let closure_16;
let closure_17;
let closure_18;
let closure_24;
let closure_25;
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
  const obj2 = stateFromStores(11876);
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    tmp7Result = null;
    if (speaker) {
      let stringResult;
      const tmpResult = VoicePanelIconButtonDefault;
      const intl = tmp4(1113).intl;
      const string = intl.string;
      const t = tmp4(1113).t;
      const tmp7 = closure_24;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 11880 : 8558),
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
let MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = VoicePanelConstants);
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let DOCK_PULL_SNAP_DISTANCE = VoicePanelDockConstants.DOCK_PULL_SNAP_DISTANCE;
const ParticipantTypes = CallConstants.ParticipantTypes;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_24, jsxs: closure_25 } = Fragment);
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
let closure_27 = createStyles(obj);
const constants = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj4 = { overshootClamping: true };
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
const __initData = { code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
const __initData2 = { code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
const __initData3 = { code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
let closure_33 = react.memo(function HeaderBlur(isHeaderHidden) {
  let items;
  let items1;
  let items2;
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = closure_27();
  let obj = isHeaderHidden(focused[21]);
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
  const obj2 = isHeaderHidden(focused[21]);
  fn2.__closure = { withSpring: isHeaderHidden(focused[22]).withSpring, showHeaderBlur: derivedValue };
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
  ({ withSpring: isHeaderHidden(focused[22]).withSpring, showHeaderBlur: derivedValue });
  const animatedProps = obj2.useAnimatedProps(fn2);
  obj4 = isHeaderHidden(focused[21]);
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
  fn3.__closure = { withSpring: isHeaderHidden(focused[22]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  ({ withSpring: isHeaderHidden(focused[22]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 });
  const animatedStyle = obj4.useAnimatedStyle(fn3);
  const obj6 = { style: items, pointerEvents: "none", children: items1 };
  items = [StyleSheet.absoluteFill, animatedStyle];
  let tmp5 = scrollPosition(focused[23]);
  items1 = [, ];
  const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  items1[0] = closure_24(scrollPosition(focused[24]), obj7);
  const obj8 = { style: tmp.strokeContainer, children: items2 };
  items2 = [, ];
  const obj9 = { style: tmp.stroke };
  const tmp6 = scrollPosition(focused[25]);
  items2[0] = closure_24(scrollPosition(focused[25]), obj9);
  const obj10 = { style: tmp.strokeAlt };
  items2[1] = closure_24(scrollPosition(focused[25]), obj10);
  items1[1] = closure_25(tmp6, obj8);
  return closure_25(tmp5, obj6);
});
const __initData4 = { code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
const __initData5 = { code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
let closure_36 = react.memo(function FocusedSpeakingDot() {
  let controlsSpecs;
  let derivedValue;
  let focused;
  let items1;
  let obj6;
  const id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[26]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const obj = id(controlsSpecs[21]);
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
  const tmp5 = closure_27();
  const fn = function u() {
    const value = null != focused.get() && controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN && sharedValue.get();
    return value;
  };
  const obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  fn.__closure = obj3;
  fn.__workletHash = 5466722752449;
  fn.__initData = __initData4;
  const obj2 = id(controlsSpecs[21]);
  derivedValue = obj2.useDerivedValue(fn);
  const fn2 = function h() {
    let opacity = 0;
    if (derivedValue.get()) {
      opacity = 1;
    }
    return { opacity };
  };
  fn2.__closure = { showSpeakingIndicator: derivedValue };
  fn2.__workletHash = 16177124708898;
  fn2.__initData = __initData5;
  obj4 = id(controlsSpecs[21]);
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const obj5 = { style: items1, pointerEvents: "none", children: closure_24(focused(controlsSpecs[23]), obj6) };
  items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  obj6 = { style: tmp5.focusedSpeakingDot };
  const tmp8 = focused(controlsSpecs[23]);
  return closure_24(tmp8, obj5);
});
const __initData6 = { code: "function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData7 = { code: "function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData8 = { code: "function VoicePanelHeaderTsx8(){const{isDockEnabled,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;if(isDockEnabled){return 0;}const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
const __initData9 = { code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER,isDockEnabled,wrapperDimensions,dockHeight,DOCK_PULL_SNAP_DISTANCE,interpolate,dockMinimizeProgress,Extrapolation}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(!connected.get()){return EDGE_GUTTER;}if(!isDockEnabled){return specs.paddingTop;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const headerRevealProgress=travel>0?Math.min(DOCK_PULL_SNAP_DISTANCE/travel,1):0;return interpolate(1-dockMinimizeProgress.get(),[headerRevealProgress,1],[edgeGutter,specs.paddingTop],Extrapolation.CLAMP);}" };
const __initData10 = { code: "function VoicePanelHeaderTsx10(){const{BASE_VOICE_PANEL_HEADER_HEIGHT,headerPaddingTop}=this.__closure;return{height:BASE_VOICE_PANEL_HEADER_HEIGHT+headerPaddingTop.get()};}" };
const __initData11 = { code: "function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,isDockEnabled,mode,VoicePanelModes,connected,headerPaddingTop,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const hidesForMinimize=!isDockEnabled&&mode.get()===VoicePanelModes.PIP;const ridesSheetOut=isDockEnabled&&connected.get();return{paddingTop:headerPaddingTop.get(),paddingLeft:specs.paddingLeft,paddingRight:specs.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(hidesForMinimize||mode.get()===VoicePanelModes.DISMISSED&&!ridesSheetOut?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData12 = { code: "function VoicePanelHeaderTsx12(){const{connected,dockMinimizeProgress}=this.__closure;return{opacity:connected.get()?Math.min(Math.max(1-dockMinimizeProgress.get(),0),1):1};}" };
const __initData13 = { code: "function VoicePanelHeaderTsx13(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData14 = { code: "function VoicePanelHeaderTsx14(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData15 = { code: "function VoicePanelHeaderTsx15(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
const memoResult = react.memo(function VoicePanelHeader(wrapperOffset) {
  let _undefined;
  let c13;
  let c14;
  let callback;
  let channelType;
  let closure_21;
  let guildId;
  let intl3;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items8;
  let items9;
  let obj27;
  let obj28;
  let obj30;
  let obj43;
  let scrollPosition;
  let stringResult;
  let tmp11;
  let tmp13;
  let tmp29;
  let tmp2Result14;
  let tmp2Result15;
  let tmp2Result17;
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const layout = wrapperOffset.layout;
  let channelId;
  let controlsSpecs;
  c13 = undefined;
  c14 = undefined;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let DOWN;
  DOCK_PULL_SNAP_DISTANCE = undefined;
  let tmp = closure_27();
  let obj = controlsSpecs;
  let tmp2 = gestureState;
  let tmp3 = channelId;
  const context = controlsSpecs.useContext(gestureState(channelId[26]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  const isDockEnabled = context.isDockEnabled;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  const dockHeight = context.dockHeight;
  const wrapperDimensions = context.wrapperDimensions;
  let tmp5 = wrapperOffset;
  ({ guildId, channelType, scrollPosition } = context);
  let obj2 = wrapperOffset(channelId[35]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = wrapperOffset(channelId[28]);
  let items = [dockHeight];
  let items1 = [channelId];
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp44Result12 = gestureState(channelId[36])(channelId);
  obj4 = gestureState(channelId[37]);
  const treatment = obj4.useConfig({ location: "VoicePanelHeader" }).treatment;
  const items2 = [c14, isScreenReaderEnabled, dockHeight, connected];
  const items3 = [channelId];
  const obj5 = wrapperOffset(channelId[28]);
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
  [tmp11, c13] = tmp10;
  [tmp13, c14] = focused(controlsSpecs.useState(null), 2);
  const items4 = [channelId];
  const tmp12 = focused(controlsSpecs.useState(null), 2);
  MODE_CHANGE_PHYSICS = controlsSpecs.useCallback((arg0) => {
    let tmp3 = null;
    const tmp = c14;
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
  const fn = function k() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 7943480174143;
  fn.__initData = __initData6;
  const fn2 = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)(arg0);
    }
  };
  const obj6 = wrapperOffset(channelId[21]);
  fn2.__closure = { runOnJS: wrapperOffset(channelId[21]).runOnJS, handleFocusChange: MODE_CHANGE_PHYSICS };
  fn2.__workletHash = 13084116412140;
  fn2.__initData = __initData7;
  ({ runOnJS: wrapperOffset(channelId[21]).runOnJS, handleFocusChange: MODE_CHANGE_PHYSICS });
  const animatedReaction = obj6.useAnimatedReaction(fn, fn2);
  const obj8 = wrapperOffset(channelId[39]);
  const token = obj8.useToken(gestureState(channelId[20]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj9 = wrapperOffset(channelId[21]);
  class Te {
    constructor() {
      const tmp = isDockEnabled;
      if (tmp) {
        return 0;
      } else {
        let num;
        const tmp4 = calculateVoicePanelHeaderSpecsDefault;
        const obj = mode;
        const tmp4Result = tmp4(safeArea.get(), token);
        if (mode.get() === derivedValue.PIP) {
          num = -tmp4Result.height + EDGE_GUTTER;
        } else {
          num = 0;
          if (obj.get() === tmp8.DISMISSED) {
            num = 0;
          }
        }
        return num;
      }
    }
  }
  Te.__closure = { isDockEnabled, calculateVoicePanelHeaderSpecs: gestureState(channelId[40]), safeArea, edgeGutter: token, mode, VoicePanelModes: derivedValue, gestureState, connected, EDGE_GUTTER: derivedValue2 };
  Te.__workletHash = 11147398524964;
  Te.__initData = __initData8;
  ({ isDockEnabled, calculateVoicePanelHeaderSpecs: gestureState(channelId[40]), safeArea, edgeGutter: token, mode, VoicePanelModes: derivedValue, gestureState, connected, EDGE_GUTTER: derivedValue2 });
  derivedValue = obj9.useDerivedValue(Te);
  const obj11 = wrapperOffset(channelId[21]);
  class De {
    constructor() {
      const tmp2 = calculateVoicePanelHeaderSpecsDefault;
      const tmp2Result = tmp2(safeArea.get(), token);
      const tmp3 = token;
      if (connected.get()) {
        const tmp6 = isDockEnabled;
        if (tmp6) {
          const diff = wrapperDimensions.get().drawerHeight - dockHeight.get();
          let num = 0;
          if (diff > 0) {
            const _Math = Math;
            num = Math.min(DOCK_PULL_SNAP_DISTANCE / diff, 1);
          }
          const interpolate = ReanimatedRexport.interpolate;
          const diff1 = 1 - dockMinimizeProgress.get();
          const items = [num, 1];
          const items1 = [tmp3, tmp2Result.paddingTop];
          return interpolate(diff1, items, items1, ReanimatedRexport.Extrapolation.CLAMP);
        } else {
          return tmp2Result.paddingTop;
        }
      } else {
        return EDGE_GUTTER;
      }
    }
  }
  De.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[40]), safeArea, edgeGutter: token, connected, EDGE_GUTTER: derivedValue2, isDockEnabled, wrapperDimensions, dockHeight, DOCK_PULL_SNAP_DISTANCE, interpolate: wrapperOffset(channelId[21]).interpolate, dockMinimizeProgress, Extrapolation: wrapperOffset(channelId[21]).Extrapolation };
  De.__workletHash = 5513906451503;
  De.__initData = __initData9;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[40]), safeArea, edgeGutter: token, connected, EDGE_GUTTER: derivedValue2, isDockEnabled, wrapperDimensions, dockHeight, DOCK_PULL_SNAP_DISTANCE, interpolate: wrapperOffset(channelId[21]).interpolate, dockMinimizeProgress, Extrapolation: wrapperOffset(channelId[21]).Extrapolation });
  derivedValue1 = obj11.useDerivedValue(De);
  const obj13 = wrapperOffset(channelId[21]);
  class Ce {
    constructor() {
      const obj = { height: calculateVoicePanelHeaderSpecs.BASE_VOICE_PANEL_HEADER_HEIGHT + derivedValue1.get() };
      return obj;
    }
  }
  Ce.__closure = { BASE_VOICE_PANEL_HEADER_HEIGHT: wrapperOffset(channelId[40]).BASE_VOICE_PANEL_HEADER_HEIGHT, headerPaddingTop: derivedValue1 };
  Ce.__workletHash = 14899434854035;
  Ce.__initData = __initData10;
  ({ BASE_VOICE_PANEL_HEADER_HEIGHT: wrapperOffset(channelId[40]).BASE_VOICE_PANEL_HEADER_HEIGHT, headerPaddingTop: derivedValue1 });
  const animatedStyle = obj13.useAnimatedStyle(Ce);
  const obj15 = wrapperOffset(channelId[21]);
  class Ae {
    constructor() {
      let num;
      let num2;
      let num4;
      let withTiming;
      const tmp2 = calculateVoicePanelHeaderSpecsDefault;
      const tmp2Result = tmp2(safeArea.get(), token);
      let value = isDockEnabled;
      const tmp5 = !isDockEnabled && mode.get() === derivedValue.PIP;
      if (value) {
        value = connected.get();
      }
      const obj = { paddingTop: derivedValue1.get(), paddingLeft: tmp2Result.paddingLeft, paddingRight: tmp2Result.paddingRight, borderTopLeftRadius: num2, borderTopRightRadius: num, opacity: withTiming(num4, OPACITY_TIMING), transform: null };
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
      if (tmp5) {
        num4 = 0;
      } else {
        num4 = 1;
        if (mode.get() === derivedValue.DISMISSED) {
          num4 = 1;
        }
      }
      const withSpring = tmp9(5637).withSpring;
      spring;
      const value2 = derivedValue.get();
      if (!connected.get()) {
        let tmp16;
        if (wrapperOffset.get().gestureActive) {
          tmp16 = authStore5;
        }
        const items = [{ translateY: withSpring(value2, tmp16) }];
        obj.transform = items;
        const obj3 = { translateY: withSpring(value2, tmp16) };
        return obj;
      }
      tmp16 = authStore4;
    }
  }
  Ae.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[40]), safeArea, edgeGutter: token, isDockEnabled, mode, VoicePanelModes: derivedValue, connected, headerPaddingTop: derivedValue1, withTiming: wrapperOffset(channelId[41]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[22]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: derivedValue1, UI_SHOW_HIDE_PHYSICS: token };
  Ae.__workletHash = 13312009093405;
  Ae.__initData = __initData11;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[40]), safeArea, edgeGutter: token, isDockEnabled, mode, VoicePanelModes: derivedValue, connected, headerPaddingTop: derivedValue1, withTiming: wrapperOffset(channelId[41]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[22]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: derivedValue1, UI_SHOW_HIDE_PHYSICS: token });
  const animatedStyle1 = obj15.useAnimatedStyle(Ae);
  function be() {
    let opacity = 1;
    if (connected.get()) {
      const _Math = Math;
      const _Math2 = Math;
      opacity = Math.min(Math.max(1 - dockMinimizeProgress.get(), 0), 1);
    }
    return { opacity };
  }
  be.__closure = { connected, dockMinimizeProgress };
  be.__workletHash = 5918254352178;
  be.__initData = __initData12;
  const obj17 = wrapperOffset(channelId[21]);
  const animatedStyle2 = obj17.useAnimatedStyle(be);
  function we() {
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
    return tmp;
  }
  const obj19 = { controlsSpecs, VoicePanelControlsModes: DOWN, isScreenReaderEnabled };
  we.__closure = obj19;
  we.__workletHash = 16238308077793;
  we.__initData = __initData13;
  const obj18 = wrapperOffset(channelId[21]);
  derivedValue2 = obj18.useDerivedValue(we);
  const obj20 = wrapperOffset(channelId[21]);
  class Ve {
    constructor() {
      let items;
      const tmp2 = calculateVoicePanelHeaderSpecsDefault;
      const height = tmp2(safeArea.get(), token).height;
      const withTiming = timing.withTiming;
      let num = 1;
      timing;
      const obj = derivedValue2;
      if (derivedValue2.get()) {
        num = 0;
      }
      const obj2 = { opacity: withTiming(num, OPACITY_TIMING), transform: items };
      const withSpring = tmp3(5637).withSpring;
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
  Ve.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[40]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[41]).withTiming, isHeaderHidden: derivedValue2, OPACITY_TIMING, withSpring: wrapperOffset(channelId[22]).withSpring, MODE_CHANGE_PHYSICS };
  Ve.__workletHash = 14647155301883;
  Ve.__initData = __initData14;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[40]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[41]).withTiming, isHeaderHidden: derivedValue2, OPACITY_TIMING, withSpring: wrapperOffset(channelId[22]).withSpring, MODE_CHANGE_PHYSICS });
  const animatedStyle3 = obj20.useAnimatedStyle(Ve);
  function ke() {
    let str2;
    let str = "box-none";
    if (derivedValue2.get()) {
      str = "none";
    }
    const obj2 = { pointerEvents: str, importantForAccessibility: str2, accessibilityElementsHidden: derivedValue2.get() };
    str2 = "auto";
    if (derivedValue2.get()) {
      str2 = "no-hide-descendants";
    }
    return obj2;
  }
  ke.__closure = { isHeaderHidden: derivedValue2 };
  ke.__workletHash = 10804034531344;
  ke.__initData = __initData15;
  const obj22 = wrapperOffset(channelId[21]);
  const animatedProps = obj22.useAnimatedProps(ke);
  const obj23 = wrapperOffset(channelId[42]);
  let canInviteMembers = obj23.useCanInviteMembers(channelId);
  const obj24 = wrapperOffset(channelId[43]);
  const inviteMembersCallback = obj24.useInviteMembersCallback(channelId);
  const tmp27 = gestureState(channelId[44])();
  const obj25 = wrapperOffset(channelId[45]);
  obj25.useNavigatorBackPressHandler(tmp27);
  if (null != tmp13) {
    DOWN = constants.LEFT;
    tmp29 = constants;
  } else {
    tmp29 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp29.LEFT) {
    let intl2 = tmp5(tmp3[31]).intl;
    stringResult = intl2.string(tmp5(tmp3[31]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[31]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[31]).t;
    if (tmp44Result12) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  let tmp2Result = tmp2(tmp3[46]);
  const tmp2ResultResult = tmp2Result(dockMinimizeProgress.getId(), channelId, guildId);
  DOCK_PULL_SNAP_DISTANCE = tmp2ResultResult;
  const items5 = [wrapperDimensions];
  const items6 = [tmp2ResultResult];
  const tmp5Result = tmp5(tmp3[28]);
  const stateFromStores2 = tmp5Result.useStateFromStores(items5, () => {
    if (null != closure_21) {
      const obj3 = useStableParticipant;
      if (obj3.isStableUserParticipant(closure_21)) {
        const tmp10Result = useStableParticipant;
        if (tmp10Result.stableParticipantHasVideo(closure_21)) {
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
                    const intl3 = tmp10(1113).intl;
                    stringResult = intl3.string(tmp10(1113).t["/R1SBx"]);
                  }
                }
                if ("front" === facing) {
                  if ("back" === tmp6) {
                    const intl2 = tmp10(1113).intl;
                    stringResult = intl2.string(tmp10(1113).t["7YZ/Si"]);
                  }
                }
                const intl = tmp10(1113).intl;
                stringResult = intl.string(tmp10(1113).t["t9eQ/g"]);
              }
              return stringResult;
            }
            const intl4 = tmp10(1113).intl;
            stringResult = intl4.string(tmp10(1113).t["t9eQ/g"]);
          }
        }
      }
    }
  }, items6);
  const items7 = [DOWN];
  const callback1 = obj.useCallback(() => {
    const videoDeviceId = wrapperDimensions.getVideoDeviceId();
    const keys = Object.keys(wrapperDimensions.getVideoDevices());
    const found = keys.find((item) => item !== closure_0);
    if (null != found) {
      const obj = gestureState(channelId[47]);
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
  const tmp5Result4 = tmp5(tmp3[48]);
  const isSecureFramesUIEnabled = tmp5Result4.useIsSecureFramesUIEnabled({ channelId });
  let tmp40 = null;
  const useIsUserSecureFramesVerified = tmp5(tmp3[49]).useIsUserSecureFramesVerified;
  tmp5(tmp3[49]);
  if (tmp13 === ParticipantTypes.USER) {
    tmp40 = null;
    if (null != tmp11) {
      tmp40 = tmp11;
    }
  }
  const isUserSecureFramesVerified = useIsUserSecureFramesVerified({ userId: tmp40, channelId });
  let tmp43 = null;
  const useIsStreamSecureFramesVerified = tmp5(tmp3[49]).useIsStreamSecureFramesVerified;
  tmp5(tmp3[49]);
  if (tmp13 === ParticipantTypes.STREAM) {
    tmp43 = null;
    if (null != tmp11) {
      tmp43 = tmp11;
    }
  }
  let flag = useIsStreamSecureFramesVerified({ streamKey: tmp43, channelId });
  if (ParticipantTypes.STREAM !== tmp13) {
    flag = false;
    if (ParticipantTypes.USER === tmp13) {
      flag = isUserSecureFramesVerified;
    }
  }
  let ONYX;
  const ThemeContextProvider = tmp5(tmp3[50]).ThemeContextProvider;
  if (tmp44Result12) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj26 = { theme: ONYX, children: closure_24(tmp2Result14, obj27) };
  obj27 = { style: items8, pointerEvents: "box-none", layout, children: closure_25(tmp2Result15, obj28) };
  items8 = [tmp.headerWrapper, animatedStyle];
  obj28 = { style: items9, pointerEvents: "box-none", children: items10 };
  items9 = [tmp.headerSurface, animatedStyle1];
  items10 = [, , ];
  tmp2Result14 = tmp2(tmp3[23]);
  tmp2Result15 = tmp2(tmp3[23]);
  items10[0] = closure_24(closure_33, { isHeaderHidden: derivedValue2, scrollPosition, focused });
  let tmp50 = tmp44Result12;
  if (tmp50) {
    let tmp44Result;
    if (isDockEnabled) {
      const obj29 = { style: items11, pointerEvents: "none", children: closure_24(tmp2Result17, obj30) };
      items11 = [mode.absoluteFill, animatedStyle2];
      obj30 = { baseColor: tmp2(tmp3[20]).colors.BLACK, minHeight: 0 };
      const tmp2Result16 = tmp2(tmp3[23]);
      tmp2Result17 = tmp2(tmp3[51]);
      tmp44Result = tmp44(tmp2Result16, obj29);
    } else {
      const obj31 = { baseColor: tmp2(tmp3[20]).colors.BLACK, minHeight: 0 };
      const tmp2Result18 = tmp2(tmp3[51]);
      tmp44Result = tmp44(tmp2Result18, obj31);
    }
    tmp50 = tmp44Result;
  }
  items10[1] = tmp50;
  let tmp44Result7 = null;
  const obj32 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: items12 };
  const tmp2Result19 = tmp2(tmp3[23]);
  if (tmp13 === ParticipantTypes.USER) {
    const obj33 = { isHeaderHidden: derivedValue2 };
    tmp44Result7 = tmp44(tmp2(tmp3[52]), obj33);
  }
  items12 = [tmp44Result7, ];
  const obj34 = { style: items13, animatedProps, children: items16 };
  items13 = [tmp.headerOuter, animatedStyle3];
  const obj35 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: items14 };
  const tmp2Result20 = tmp2(tmp3[23]);
  const obj36 = { icon: tmp2(tmp3[53]), accessibilityLabel: stringResult, onPress: tmp27, style: memo };
  const tmp2Result21 = tmp2(tmp3[25]);
  const tmp2Result22 = tmp2(tmp3[30]);
  items14 = [closure_24(tmp2Result22, obj36), ];
  const obj37 = { style: tmp.headerInner, children: items15 };
  items15 = [, ];
  const tmp2Result23 = tmp2(tmp3[23]);
  items15[0] = closure_24(tmp2(tmp3[54]), {});
  let tmp44Result8 = null;
  if (isSecureFramesUIEnabled) {
    tmp44Result8 = null;
    if (flag) {
      const obj38 = { size: "xs", color: tmp2(tmp3[20]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      const ShieldLockIcon = tmp5(tmp3[55]).ShieldLockIcon;
      tmp44Result8 = tmp44(ShieldLockIcon, obj38);
    }
  }
  items15[1] = tmp44Result8;
  items14[1] = closure_25(tmp2Result23, obj37);
  items16 = [closure_25(tmp2Result21, obj35), ];
  const obj39 = { style: tmp.rightWrapper, layout, children: items17 };
  items17 = [, , , , , , ];
  const tmp2Result24 = tmp2(tmp3[23]);
  items17[0] = closure_24(closure_36, {});
  let tmp44Result9 = channelType === tmp5(tmp3[56]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp44Result9) {
    const obj40 = { channelId };
    tmp44Result9 = tmp44(MusicMuteButton, obj40);
  }
  items17[1] = tmp44Result9;
  items17[2] = closure_24(tmp2(tmp3[57]), { isConnectedToVoiceChannel: tmp44Result12, channelId });
  let tmp44Result10 = null;
  if (null != stateFromStores) {
    const obj41 = { channel: stateFromStores, inCall: tmp44Result12 };
    tmp44Result10 = tmp44(tmp2(tmp3[58]), obj41);
  }
  items17[3] = tmp44Result10;
  if (canInviteMembers) {
    const obj42 = { icon: tmp2(tmp3[59]), accessibilityLabel: intl3.formatToPlainString(tmp5(tmp3[31]).t["dHHb/2"], obj43), onPress: inviteMembersCallback };
    const tmp2Result25 = tmp2(tmp3[30]);
    intl3 = tmp5(tmp3[31]).intl;
    obj43 = { channelName: stateFromStores1 };
    canInviteMembers = tmp44(tmp2Result25, obj42);
  }
  items17[4] = canInviteMembers;
  let tmp44Result11 = null;
  if (null != stateFromStores2) {
    const obj44 = { icon: tmp2(tmp3[60]), onPress: callback1, accessibilityLabel: stateFromStores2 };
    const tmp2Result26 = tmp2(tmp3[30]);
    tmp44Result11 = tmp44(tmp2Result26, obj44);
  }
  items17[5] = tmp44Result11;
  if (tmp44Result12) {
    tmp44Result12 = treatment === tmp5(tmp3[37]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp44Result12) {
    const obj45 = { channelId };
    tmp44Result12 = tmp44(tmp2(tmp3[61]), obj45);
  }
  items17[6] = tmp44Result12;
  items16[1] = closure_25(tmp2Result24, obj39);
  items12[1] = closure_25(tmp2Result20, obj34);
  items10[2] = closure_25(tmp2Result19, obj32);
  return closure_24(ThemeContextProvider, obj26);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
