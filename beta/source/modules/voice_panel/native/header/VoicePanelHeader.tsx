// Module ID: 16925
// Function ID: 16926
// Name: VoicePanelHeader
// Dependencies: [32, 19, 17, 4852, 4750, 9354, 502, 2045, 1993, 4479, 5731, 1372, 11755, 11758, 11753, 4857, 1085, 21, 4836, 576, 4566, 5280, 6494, 5268, 5901, 11754, 9493, 504, 9356, 16859, 1115, 9365, 9367, 9368, 5266, 16861, 16926, 4989, 4531, 11759, 4837, 16927, 16880, 16928, 5942, 16929, 9104, 9183, 9144, 4540, 16169, 16930, 10616, 16932, 9238, 1095, 16943, 9491, 16952, 16953, 2]

// Module 16925 (VoicePanelHeader)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1115 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import CallConstants from "CallConstants" /* 4857 */;
import useChannelName from "useChannelName" /* 4989 */;
import spring from "spring" /* 5280 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 9368 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 9493 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11758 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11759 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 16859 */;
import useStableParticipant from "useStableParticipant" /* 16929 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import StageMusicStore from "StageMusicStore" /* 9354 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import SpeakingStore from "SpeakingStore" /* 5731 */;
import UserStore from "UserStore" /* 1372 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_16;
let closure_17;
let closure_18;
let closure_23;
let closure_24;
let obj2;
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
  const obj2 = stateFromStores(9356);
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    tmp7Result = null;
    if (speaker) {
      let stringResult;
      const tmpResult = VoicePanelIconButtonDefault;
      const intl = tmp4(1115).intl;
      const string = intl.string;
      const t = tmp4(1115).t;
      const tmp7 = closure_23;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 9365 : 9367),
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
let closure_32 = react.memo((isHeaderHidden) => {
  let items;
  let items1;
  let items2;
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = closure_26();
  let obj = isHeaderHidden(focused[20]);
  const fn = function l() {
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
  const fn2 = function c() {
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
  obj3 = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue };
  fn2.__closure = obj3;
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
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
  const obj4 = isHeaderHidden(focused[20]);
  fn3.__closure = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj3 };
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  ({ withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj3 });
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
let closure_35 = react.memo(() => {
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
  obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
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
  const obj4 = id(controlsSpecs[20]);
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
const __initData9 = { code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData10 = { code: "function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData11 = { code: "function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData12 = { code: "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
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
  let items6;
  let items7;
  let items8;
  let items9;
  let obj21;
  let obj33;
  let scrollPosition;
  let stringResult;
  let tmp10;
  let tmp12;
  let tmp25;
  let tmp2Result11;
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
  let tmp40Result10 = gestureState(channelId[35])(channelId);
  obj3 = gestureState(channelId[36]);
  const treatment = obj3.useConfig({ location: "VoicePanelHeader" }).treatment;
  let obj4 = wrapperOffset(channelId[27]);
  let items = [derivedValue1, token, c10, connected];
  const items1 = [channelId];
  const stateFromStores = obj4.useStateFromStores(items, () => {
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
  }, items1);
  [tmp10, c9] = focused(controlsSpecs.useState(undefined), 2);
  focused(controlsSpecs.useState(undefined), 2);
  const tmp11 = focused(controlsSpecs.useState(null), 2);
  [tmp12, c10] = tmp11;
  const items2 = [channelId];
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
  }, items2);
  const obj5 = wrapperOffset(channelId[20]);
  class I {
    constructor() {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  I.__closure = { focused };
  I.__workletHash = 7943480174143;
  I.__initData = __initData6;
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
  const animatedReaction = obj5.useAnimatedReaction(I, fn);
  const obj7 = wrapperOffset(channelId[38]);
  token = obj7.useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  function he() {
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
  const obj8 = wrapperOffset(channelId[20]);
  he.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  he.__workletHash = 13290333964417;
  he.__initData = __initData8;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER });
  derivedValue = obj8.useDerivedValue(he);
  function _e() {
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
    const withSpring = tmp10(5280).withSpring;
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
  const obj10 = wrapperOffset(channelId[20]);
  _e.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[40]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  _e.__workletHash = 11065699618122;
  _e.__initData = __initData9;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[40]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS });
  const animatedStyle = obj10.useAnimatedStyle(_e);
  function pe() {
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && !isScreenReaderEnabled;
    return tmp;
  }
  const obj13 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  pe.__closure = obj13;
  pe.__workletHash = 16725581527938;
  pe.__initData = __initData10;
  const obj12 = wrapperOffset(channelId[20]);
  derivedValue1 = obj12.useDerivedValue(pe);
  const obj14 = wrapperOffset(channelId[20]);
  class Se {
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
      const withSpring = tmp3(5280).withSpring;
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
  Se.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[40]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  Se.__workletHash = 13148362186846;
  Se.__initData = __initData11;
  ({ calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[40]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[21]).withSpring, MODE_CHANGE_PHYSICS: DOWN });
  const animatedStyle1 = obj14.useAnimatedStyle(Se);
  function fe() {
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
  fe.__closure = { isHeaderHidden: derivedValue1 };
  fe.__workletHash = 4740985143159;
  fe.__initData = __initData12;
  const obj16 = wrapperOffset(channelId[20]);
  const animatedProps = obj16.useAnimatedProps(fe);
  const obj17 = wrapperOffset(channelId[41]);
  let canInviteMembers = obj17.useCanInviteMembers(channelId);
  const obj18 = wrapperOffset(channelId[42]);
  const inviteMembersCallback = obj18.useInviteMembersCallback(channelId);
  const tmp23 = gestureState(channelId[43])();
  const obj19 = wrapperOffset(channelId[44]);
  obj19.useNavigatorBackPressHandler(tmp23);
  if (null != tmp12) {
    DOWN = constants.LEFT;
    tmp25 = constants;
  } else {
    tmp25 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp25.LEFT) {
    let intl2 = tmp5(tmp3[30]).intl;
    stringResult = intl2.string(tmp5(tmp3[30]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[30]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[30]).t;
    if (tmp40Result10) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  let tmp2Result = tmp2(tmp3[45]);
  const tmp2ResultResult = tmp2Result(AuthenticationStore.getId(), channelId, guildId);
  UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
  const items3 = [handleFocusChange];
  const items4 = [tmp2ResultResult];
  const tmp5Result = tmp5(tmp3[27]);
  const stateFromStores1 = tmp5Result.useStateFromStores(items3, () => {
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
                    const intl3 = tmp10(1115).intl;
                    stringResult = intl3.string(tmp10(1115).t["/R1SBx"]);
                  }
                }
                if ("front" === facing) {
                  if ("back" === tmp6) {
                    const intl2 = tmp10(1115).intl;
                    stringResult = intl2.string(tmp10(1115).t["7YZ/Si"]);
                  }
                }
                const intl = tmp10(1115).intl;
                stringResult = intl.string(tmp10(1115).t["t9eQ/g"]);
              }
              return stringResult;
            }
            const intl4 = tmp10(1115).intl;
            stringResult = intl4.string(tmp10(1115).t["t9eQ/g"]);
          }
        }
      }
    }
  }, items4);
  const items5 = [DOWN];
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
  }, items5);
  const tmp5Result4 = tmp5(tmp3[47]);
  const isSecureFramesUIEnabled = tmp5Result4.useIsSecureFramesUIEnabled({ channelId });
  let tmp36 = null;
  const useIsUserSecureFramesVerified = tmp5(tmp3[48]).useIsUserSecureFramesVerified;
  tmp5(tmp3[48]);
  if (tmp12 === ParticipantTypes.USER) {
    tmp36 = null;
    if (null != tmp10) {
      tmp36 = tmp10;
    }
  }
  const isUserSecureFramesVerified = useIsUserSecureFramesVerified({ userId: tmp36, channelId });
  let tmp39 = null;
  const useIsStreamSecureFramesVerified = tmp5(tmp3[48]).useIsStreamSecureFramesVerified;
  tmp5(tmp3[48]);
  if (tmp12 === ParticipantTypes.STREAM) {
    tmp39 = null;
    if (null != tmp10) {
      tmp39 = tmp10;
    }
  }
  let flag = useIsStreamSecureFramesVerified({ streamKey: tmp39, channelId });
  if (ParticipantTypes.STREAM !== tmp12) {
    flag = false;
    if (ParticipantTypes.USER === tmp12) {
      flag = isUserSecureFramesVerified;
    }
  }
  let ONYX;
  const ThemeContextProvider = tmp5(tmp3[49]).ThemeContextProvider;
  if (tmp40Result10) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj20 = { theme: ONYX, children: closure_24(tmp2Result11, obj21) };
  obj21 = { style: items6, pointerEvents: "box-none", layout, children: items7 };
  items6 = [tmp.headerWrapper, animatedStyle];
  items7 = [, , ];
  tmp2Result11 = tmp2(tmp3[22]);
  items7[0] = closure_23(closure_32, { isHeaderHidden: derivedValue1, scrollPosition, focused });
  let tmp40Result = tmp40Result10;
  if (tmp40Result) {
    const obj22 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
    const tmp2Result12 = tmp2(tmp3[50]);
    tmp40Result = tmp40(tmp2Result12, obj22);
  }
  items7[1] = tmp40Result;
  let tmp40Result6 = null;
  const obj23 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: items8 };
  const tmp2Result13 = tmp2(tmp3[22]);
  if (tmp12 === ParticipantTypes.USER) {
    const obj24 = { isHeaderHidden: derivedValue1 };
    tmp40Result6 = tmp40(tmp2(tmp3[51]), obj24);
  }
  items8 = [tmp40Result6, ];
  const obj25 = { style: items9, animatedProps, children: items12 };
  items9 = [tmp.headerOuter, animatedStyle1];
  const obj26 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: items10 };
  const tmp2Result14 = tmp2(tmp3[22]);
  const obj27 = { icon: tmp2(tmp3[52]), accessibilityLabel: stringResult, onPress: tmp23, style: memo };
  const tmp2Result15 = tmp2(tmp3[24]);
  const tmp2Result16 = tmp2(tmp3[29]);
  items10 = [closure_23(tmp2Result16, obj27), ];
  const obj28 = { style: tmp.headerInner, children: items11 };
  items11 = [, ];
  const tmp2Result17 = tmp2(tmp3[22]);
  items11[0] = closure_23(tmp2(tmp3[53]), {});
  let tmp40Result7 = null;
  if (isSecureFramesUIEnabled) {
    tmp40Result7 = null;
    if (flag) {
      const obj29 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      const ShieldLockIcon = tmp5(tmp3[54]).ShieldLockIcon;
      tmp40Result7 = tmp40(ShieldLockIcon, obj29);
    }
  }
  items11[1] = tmp40Result7;
  items10[1] = closure_24(tmp2Result17, obj28);
  items12 = [closure_24(tmp2Result15, obj26), ];
  const obj30 = { style: tmp.rightWrapper, layout, children: items13 };
  items13 = [, , , , , ];
  const tmp2Result18 = tmp2(tmp3[22]);
  items13[0] = closure_23(closure_35, {});
  let tmp40Result8 = channelType === tmp5(tmp3[55]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp40Result8) {
    const obj31 = { channelId };
    tmp40Result8 = tmp40(MusicMuteButton, obj31);
  }
  items13[1] = tmp40Result8;
  items13[2] = closure_23(tmp2(tmp3[56]), { isConnectedToVoiceChannel: tmp40Result10, channelId });
  if (canInviteMembers) {
    const obj32 = { icon: tmp2(tmp3[57]), accessibilityLabel: intl3.formatToPlainString(tmp5(tmp3[30]).t["dHHb/2"], obj33), onPress: inviteMembersCallback };
    const tmp2Result19 = tmp2(tmp3[29]);
    intl3 = tmp5(tmp3[30]).intl;
    obj33 = { channelName: stateFromStores };
    canInviteMembers = tmp40(tmp2Result19, obj32);
  }
  items13[3] = canInviteMembers;
  let tmp40Result9 = null;
  if (null != stateFromStores1) {
    const obj34 = { icon: tmp2(tmp3[58]), onPress: callback1, accessibilityLabel: stateFromStores1 };
    const tmp2Result20 = tmp2(tmp3[29]);
    tmp40Result9 = tmp40(tmp2Result20, obj34);
  }
  items13[4] = tmp40Result9;
  if (tmp40Result10) {
    tmp40Result10 = treatment === tmp5(tmp3[36]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp40Result10) {
    const obj35 = { channelId };
    tmp40Result10 = tmp40(tmp2(tmp3[59]), obj35);
  }
  items13[5] = tmp40Result10;
  items12[1] = closure_24(tmp2Result18, obj30);
  items8[1] = closure_24(tmp2Result14, obj25);
  items7[2] = closure_24(tmp2Result13, obj23);
  return closure_23(ThemeContextProvider, obj20);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
