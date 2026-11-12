// Module ID: 19829
// Function ID: 19830
// Name: VoicePanelHeader
// Dependencies: [32, 19, 17, 6953, 5469, 12839, 502, 5092, 2130, 5185, 6878, 1385, 11919, 11922, 11917, 11942, 5920, 1083, 21, 5243, 575, 1652, 5876, 5877, 5842, 7656, 11918, 12979, 504, 12841, 11885, 19734, 1113, 12845, 9275, 12846, 5505, 19735, 19830, 5891, 1705, 5839, 11925, 5485, 1093, 19795, 19753, 19831, 7433, 19832, 6162, 10577, 10539, 5314, 19167, 19833, 10492, 19835, 10746, 19837, 19846, 10913, 19848, 19849, 2]

// Module 19829 (VoicePanelHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl5 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5842 */;
import useChannelName from "useChannelName" /* 5891 */;
import CallConstants from "CallConstants" /* 5920 */;
import NativeViewDefault from "NativeView" /* 7656 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11917 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11918 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11922 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11942 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 12846 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19735 */;
import MobileGoLiveEntrypointExperimentDefault from "MobileGoLiveEntrypointExperiment" /* 19830 */;
import useStableParticipant from "useStableParticipant" /* 19832 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
import ExperimentStore from "ExperimentStore" /* 5469 */;
import StageMusicStore from "StageMusicStore" /* 12839 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import SpeakingStore from "SpeakingStore" /* 6878 */;
import UserStore from "UserStore" /* 1385 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11919 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let dependencyMap, importDefault;

let closure_16;
let closure_17;
let closure_18;
let closure_24;
let closure_25;
let obj2;
let obj3;
let size;
let size1;
let tmp2;
const spring_spring = tmp2(5876);
const springPresets = tmp2(5877);
const AssetRegistryDefault = tmp2(10492);
const AssetRegistryDefault2 = tmp2(10913);
const calculateVoicePanelHeaderSpecsDefault = tmp2(11925);
const useMyCurrentStageChannelRoleDefault = tmp2(12979);
const ThemedHeaderBackgroundGradientDefault = tmp2(19167);
const VoicePanelIconButtonDefault = tmp2(19734);
const useVoicePanelNavArrowPressedDefault = tmp2(19831);
const useStableParticipantDefault = tmp2(19832);
const VoicePanelHeaderUserStateDefault = tmp2(19833);
const VoicePanelTitleButtonDefault = tmp2(19835);
const VoicePanelHeaderSpeakerDefault = tmp2(19837);
const VoiceChannelAppHeaderButtonsDefault = tmp2(19846);
const AssetRegistryDefault3 = tmp2(19848);
const VoicePanelHeaderChatButtonDefault = tmp2(19849);
function MusicMuteButton(channelId) {
  let muted;
  let speaker;
  channelId = channelId.channelId;
  let stateFromStores;
  const tmp3 = stateFromStores(12979)(channelId);
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  let obj = channelId(504);
  const items = [StageMusicStore];
  stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  const obj2 = channelId(12841);
  const showStageMusicMuteButton = obj2.useShowStageMusicMuteButton(channelId);
  const items1 = [ChannelStore];
  const items2 = [channelId];
  const obj3 = channelId(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  channelId(11885);
  let tmp11Result = null;
  if (showStageMusicMuteButton) {
    if (speaker) {
      let stringResult;
      const tmpResult = stateFromStores(19734);
      const intl = tmp4(1113).intl;
      const string = intl.string;
      const t = tmp4(1113).t;
      const tmp11 = closure_24;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      obj4 = {
        accessibilityLabel: stringResult,
        icon: stateFromStores(stateFromStores ? 12845 : 9275),
        onPress() {
              const obj = StageMusicActionCreators;
              return obj.updateStageMusicMuted(!stateFromStores);
            }
      };
      tmp11Result = tmp11(tmpResult, obj4);
    } else {
      tmp11Result = null;
    }
  }
  return tmp11Result;
}
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = VoicePanelConstants);
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const DOCK_PULL_SNAP_DISTANCE = VoicePanelDockConstants.DOCK_PULL_SNAP_DISTANCE;
const ParticipantTypes = CallConstants.ParticipantTypes;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_24, jsxs: closure_25 } = Fragment);
let closure_26 = { duration: 300 };
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
let closure_30 = { code: "(function VoicePanelHeaderTsx1(){let[isHeaderHidden,focused,scrollPosition]=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);})" };
let closure_31 = { code: "(function VoicePanelHeaderTsx2(){let[withSpring,showHeaderBlur,Reanimated3DefaultSpringConfig]=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0,Reanimated3DefaultSpringConfig)};})" };
let closure_32 = { code: "(function VoicePanelHeaderTsx3(){let[withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};})" };
let closure_33 = react.memo(function HeaderBlur(arg0) {
  let focused;
  let isHeaderHidden;
  let items6;
  let items7;
  let items8;
  let scrollPosition;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  ({ isHeaderHidden, scrollPosition, focused } = arg0);
  let tmp = closure_27();
  let tmp2 = require;
  let obj = _mod1652;
  const items = [closure_30, isHeaderHidden, focused, scrollPosition];
  let c0;
  let c1;
  let c2;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class VoicePanelHeaderTsx1 {
    constructor() {
      value = closure_0.get();
      tmp2 = !value;
      if (tmp2) {
        tmp3 = closure_1;
        tmp4 = null;
        tmp5 = null != closure_1.get();
        if (!tmp5) {
          tmp6 = closure_2;
          num = 0;
          tmp5 = closure_2.get() > 0;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  VoicePanelHeaderTsx1.__closure = items1;
  VoicePanelHeaderTsx1.__workletHash = 11813925576343;
  VoicePanelHeaderTsx1.__initData = tmp4;
  const derivedValue = obj.useDerivedValue(VoicePanelHeaderTsx1);
  const items2 = [closure_31, , , ];
  const useAnimatedProps = _mod1652.useAnimatedProps;
  _mod1652;
  items2[1] = spring_spring.withSpring;
  items2[2] = derivedValue;
  items2[3] = springPresets.Reanimated3DefaultSpringConfig;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items2;
  class VoicePanelHeaderTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 0.3;
      }
      obj = { blurAmount: tmp(num, closure_2) };
      return obj;
    }
  }
  const items3 = [tmp11, tmp12, tmp13];
  VoicePanelHeaderTsx2.__closure = items3;
  VoicePanelHeaderTsx2.__workletHash = 16070581711409;
  VoicePanelHeaderTsx2.__initData = tmp10;
  const animatedProps = useAnimatedProps(VoicePanelHeaderTsx2);
  const items4 = [closure_32, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items4[1] = spring_spring.withSpring;
  items4[2] = derivedValue;
  items4[3] = obj4;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items4;
  class VoicePanelHeaderTsx3 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items5 = [tmp17, tmp18, tmp19];
  VoicePanelHeaderTsx3.__closure = items5;
  VoicePanelHeaderTsx3.__workletHash = 16349033493456;
  VoicePanelHeaderTsx3.__initData = tmp16;
  const animatedStyle = useAnimatedStyle(VoicePanelHeaderTsx3);
  const obj2 = { style: items6, pointerEvents: "none", children: items7 };
  items6 = [StyleSheet.absoluteFill, animatedStyle];
  const View = _modDef1652.View;
  items7 = [, ];
  const obj3 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  items7[0] = closure_24(VisualEffectViewAnimatedDefault, obj3);
  obj4 = { style: tmp.strokeContainer, children: items8 };
  items8 = [, ];
  const obj5 = { style: tmp.stroke };
  const tmp21 = NativeViewDefault;
  items8[0] = closure_24(NativeViewDefault, obj5);
  const obj6 = { style: tmp.strokeAlt };
  items8[1] = closure_24(NativeViewDefault, obj6);
  items7[1] = closure_25(tmp21, obj4);
  return closure_25(View, obj2);
});
let closure_34 = { code: "(function VoicePanelHeaderTsx4(){let[focused,controlsSpecs,VoicePanelControlsModes,speaking]=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();})" };
let closure_35 = { code: "(function VoicePanelHeaderTsx5(){let[showSpeakingIndicator]=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};})" };
let closure_36 = react.memo(function FocusedSpeakingDot() {
  let controlsSpecs;
  let focused;
  let items5;
  let sharedValue;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp9;
  const id = AuthenticationStore.getId();
  const context = react.useContext(sharedValue(11918));
  ({ focused, controlsSpecs } = context);
  const obj = id(1652);
  sharedValue = obj.useSharedValue(SpeakingStore.isSpeaking(id));
  const items = [id, sharedValue];
  const layoutEffect = react.useLayoutEffect(() => {
    function handleChange() {
      const result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    }
    let result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  }, items);
  const tmp8 = closure_27();
  const items1 = [closure_34, focused, controlsSpecs, VoicePanelControlsModes, sharedValue];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  const obj2 = id(1652);
  const tmp5 = id;
  class VoicePanelHeaderTsx4 {
    constructor() {
      const value = null != _undefined.get() && _undefined2.get().mode !== _undefined3.HIDDEN && _undefined4.get();
      return value;
    }
  }
  const items2 = [tmp10, tmp11, tmp12, tmp13];
  VoicePanelHeaderTsx4.__closure = items2;
  VoicePanelHeaderTsx4.__workletHash = 16194275628888;
  VoicePanelHeaderTsx4.__initData = tmp9;
  const derivedValue = obj2.useDerivedValue(VoicePanelHeaderTsx4);
  const items3 = [closure_35, derivedValue];
  c0 = undefined;
  [tmp15, tmp16] = items3;
  const tmp5Result = tmp5(1652);
  class VoicePanelHeaderTsx5 {
    constructor() {
      let opacity = 0;
      if (_undefined.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  const items4 = [tmp16];
  VoicePanelHeaderTsx5.__closure = items4;
  VoicePanelHeaderTsx5.__workletHash = 8700465895227;
  VoicePanelHeaderTsx5.__initData = tmp15;
  const animatedStyle = tmp5Result.useAnimatedStyle(VoicePanelHeaderTsx5);
  const obj3 = { style: items5, pointerEvents: "none", children: closure_24(sharedValue(7656), obj4) };
  items5 = [tmp8.focusedSpeakingDotWrapper, animatedStyle];
  const View = tmp2(1652).View;
  obj4 = { style: tmp8.focusedSpeakingDot };
  return closure_24(View, obj3);
});
let closure_38 = { code: "(function VoicePanelHeaderTsx6(){let[focused]=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;})" };
let closure_39 = { code: "(function VoicePanelHeaderTsx7(manualId,previousManualId){let[scheduleOnRN,handleFocusChange]=this.__closure;if(manualId!==previousManualId){scheduleOnRN(handleFocusChange,manualId);}})" };
let closure_40 = { code: "(function VoicePanelHeaderTsx8(){let[isDockEnabled,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER]=this.__closure;if(isDockEnabled){return 0;}const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;})" };
let closure_41 = { code: "(function VoicePanelHeaderTsx9(){let[calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,connected,EDGE_GUTTER,isDockEnabled,wrapperDimensions,dockHeight,DOCK_PULL_SNAP_DISTANCE,interpolate,dockMinimizeProgress,Extrapolation]=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(!connected.get()){return EDGE_GUTTER;}if(!isDockEnabled){return specs.paddingTop;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const headerRevealProgress=travel>0?Math.min(DOCK_PULL_SNAP_DISTANCE/travel,1):0;return interpolate(1-dockMinimizeProgress.get(),[headerRevealProgress,1],[edgeGutter,specs.paddingTop],Extrapolation.CLAMP);})" };
let closure_42 = { code: "(function VoicePanelHeaderTsx10(){let[BASE_VOICE_PANEL_HEADER_HEIGHT,headerPaddingTop]=this.__closure;return{height:BASE_VOICE_PANEL_HEADER_HEIGHT+headerPaddingTop.get()};})" };
let closure_43 = { code: "(function VoicePanelHeaderTsx11(){let[calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,isDockEnabled,mode,VoicePanelModes,connected,headerPaddingTop,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS]=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const hidesForMinimize=!isDockEnabled&&mode.get()===VoicePanelModes.PIP;const ridesSheetOut=isDockEnabled&&connected.get();return{paddingTop:headerPaddingTop.get(),paddingLeft:specs.paddingLeft,paddingRight:specs.paddingRight,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,opacity:withTiming(hidesForMinimize||mode.get()===VoicePanelModes.DISMISSED&&!ridesSheetOut?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};})" };
let closure_44 = { code: "(function VoicePanelHeaderTsx12(){let[controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled]=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;})" };
let closure_45 = { code: "(function VoicePanelHeaderTsx13(){let[calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS]=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};})" };
let closure_46 = { code: "(function VoicePanelHeaderTsx14(){let[isHeaderHidden]=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};})" };
const memoResult = react.memo(function VoicePanelHeader(layout) {
  let View;
  let View2;
  let _undefined;
  let _undefined2;
  let c1;
  let c2;
  let channelType;
  let closure_4;
  let connected;
  let controlsSpecs;
  let dockHeight;
  let dockMinimizeProgress;
  let focused;
  let gestureState;
  let guildId;
  let intl3;
  let isDockEnabled;
  let items26;
  let items27;
  let items28;
  let items29;
  let items30;
  let items31;
  let items32;
  let items33;
  let items34;
  let mode;
  let obj21;
  let obj7;
  let obj8;
  let safeArea;
  let scrollPosition;
  let stringResult;
  let tmp100;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
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
  let tmp38;
  let tmp39;
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
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp92;
  let tmp93;
  let wrapperDimensions;
  let wrapperOffset;
  layout = layout.layout;
  importDefault = undefined;
  dependencyMap = undefined;
  let DOWN;
  react = undefined;
  ({ wrapperOffset, gestureState } = layout);
  let tmp = closure_27();
  let obj = react;
  let tmp2 = importDefault;
  let tmp3 = dependencyMap;
  const context = react.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ channelType, focused, mode, safeArea, connected, isDockEnabled } = context);
  let tmp5 = channelId;
  ({ guildId, controlsSpecs, scrollPosition, dockMinimizeProgress, dockHeight, wrapperDimensions } = context);
  let obj2 = channelId(5505);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = channelId(504);
  let items = [ChannelStore];
  let items1 = [channelId];
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp115Result12 = useIsConnectedToVoiceChannelDefault(channelId);
  obj4 = MobileGoLiveEntrypointExperimentDefault;
  const treatment = obj4.useConfig({ location: "VoicePanelHeader" }).treatment;
  const items2 = [UserStore, RelationshipStore, ChannelStore, ExperimentStore];
  const items3 = [channelId];
  const obj5 = channelId(504);
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
  let tmp10 = DOWN(react.useState(undefined), 2);
  [tmp11, c1] = tmp10;
  [tmp13, c2] = DOWN(react.useState(null), 2);
  const items4 = [channelId];
  const tmp12 = DOWN(react.useState(null), 2);
  const callback = react.useCallback((arg0) => {
    let tmp3 = null;
    const tmp = c2;
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
  const items5 = [closure_38, focused];
  let c0;
  [tmp16, tmp17] = items5;
  const tmp15 = channelId(1652);
  class VoicePanelHeaderTsx6 {
    constructor() {
      const value = _undefined.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  const items6 = [tmp17];
  VoicePanelHeaderTsx6.__closure = items6;
  VoicePanelHeaderTsx6.__workletHash = 14454401854438;
  VoicePanelHeaderTsx6.__initData = tmp16;
  const items7 = [closure_39, , ];
  const useAnimatedReaction = tmp15.useAnimatedReaction;
  items7[1] = tmp5(1705).scheduleOnRN;
  items7[2] = callback;
  c0 = undefined;
  importDefault = undefined;
  [tmp18, tmp19, tmp20] = items7;
  class VoicePanelHeaderTsx7 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items8 = [tmp19, tmp20];
  VoicePanelHeaderTsx7.__closure = items8;
  VoicePanelHeaderTsx7.__workletHash = 10422398338840;
  VoicePanelHeaderTsx7.__initData = tmp18;
  const animatedReaction = useAnimatedReaction(VoicePanelHeaderTsx6, VoicePanelHeaderTsx7);
  const tmp5Result = tmp5(5839);
  const token = tmp5Result.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const items9 = [closure_40, isDockEnabled, , , , , , , , ];
  const useDerivedValue = tmp5(1652).useDerivedValue;
  tmp5(1652);
  items9[2] = calculateVoicePanelHeaderSpecsDefault;
  items9[3] = safeArea;
  items9[4] = token;
  items9[5] = mode;
  items9[6] = closure_17;
  items9[7] = gestureState;
  items9[8] = connected;
  items9[9] = EDGE_GUTTER;
  c0 = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items9;
  class VoicePanelHeaderTsx8 {
    constructor() {
      const tmp = c0;
      if (tmp) {
        return 0;
      } else {
        let num;
        const obj = _undefined3;
        const tmp5 = _undefined(_undefined2.get(), c3);
        if (_undefined3.get() === _undefined4.PIP) {
          num = -tmp5.height + c8;
        } else {
          num = 0;
          if (obj.get() === tmp6.DISMISSED) {
            num = 0;
          }
        }
        return num;
      }
    }
  }
  const items10 = [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  VoicePanelHeaderTsx8.__closure = items10;
  VoicePanelHeaderTsx8.__workletHash = 9510822083837;
  VoicePanelHeaderTsx8.__initData = tmp26;
  const derivedValue = useDerivedValue(VoicePanelHeaderTsx8);
  const items11 = [closure_41, , , , , , , , , , , , ];
  const useDerivedValue2 = tmp5(1652).useDerivedValue;
  tmp5(1652);
  items11[1] = calculateVoicePanelHeaderSpecsDefault;
  items11[2] = safeArea;
  items11[3] = token;
  items11[4] = connected;
  items11[5] = EDGE_GUTTER;
  items11[6] = isDockEnabled;
  items11[7] = wrapperDimensions;
  items11[8] = dockHeight;
  items11[9] = DOCK_PULL_SNAP_DISTANCE;
  items11[10] = tmp5(1652).interpolate;
  items11[11] = dockMinimizeProgress;
  items11[12] = tmp5(1652).Extrapolation;
  c0 = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let c9;
  let c10;
  let c11;
  [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50] = items11;
  const tmp24 = closure_17;
  class VoicePanelHeaderTsx9 {
    constructor() {
      const tmp2 = _undefined(_undefined2.get(), c2);
      const tmp = c2;
      if (_undefined3.get()) {
        const tmp4 = c5;
        if (tmp4) {
          const diff = _undefined4.get().drawerHeight - _undefined5.get();
          let num = 0;
          if (diff > 0) {
            const _Math = Math;
            num = Math.min(c8 / diff, 1);
          }
          const items = [num, 1];
          const items1 = [tmp, tmp2.paddingTop];
          return _undefined6(1 - _undefined7.get(), items, items1, _undefined8.CLAMP);
        } else {
          return tmp2.paddingTop;
        }
      } else {
        return c4;
      }
    }
  }
  const items12 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50];
  VoicePanelHeaderTsx9.__closure = items12;
  VoicePanelHeaderTsx9.__workletHash = 12871873065494;
  VoicePanelHeaderTsx9.__initData = tmp38;
  const derivedValue2 = useDerivedValue2(VoicePanelHeaderTsx9);
  const items13 = [closure_42, , ];
  const useAnimatedStyle = tmp5(1652).useAnimatedStyle;
  tmp5(1652);
  items13[1] = tmp5(11925).BASE_VOICE_PANEL_HEADER_HEIGHT;
  items13[2] = derivedValue2;
  c0 = undefined;
  importDefault = undefined;
  [tmp53, tmp54, tmp55] = items13;
  class VoicePanelHeaderTsx10 {
    constructor() {
      const obj = { height: c0 + _undefined.get() };
      return obj;
    }
  }
  const items14 = [tmp54, tmp55];
  VoicePanelHeaderTsx10.__closure = items14;
  VoicePanelHeaderTsx10.__workletHash = 6113996517866;
  VoicePanelHeaderTsx10.__initData = tmp53;
  const animatedStyle = useAnimatedStyle(VoicePanelHeaderTsx10);
  const items15 = [closure_43, , , , , , , , , , , , , , , ];
  const useAnimatedStyle2 = tmp5(1652).useAnimatedStyle;
  tmp5(1652);
  items15[1] = calculateVoicePanelHeaderSpecsDefault;
  items15[2] = safeArea;
  items15[3] = token;
  items15[4] = isDockEnabled;
  items15[5] = mode;
  items15[6] = tmp24;
  items15[7] = connected;
  items15[8] = derivedValue2;
  items15[9] = tmp5(5485).withTiming;
  items15[10] = closure_26;
  items15[11] = tmp5(5876).withSpring;
  items15[12] = derivedValue;
  items15[13] = wrapperOffset;
  items15[14] = closure_18;
  items15[15] = closure_16;
  c0 = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  let c12;
  let c13;
  let c14;
  [tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74] = items15;
  const tmp58 = closure_26;
  class VoicePanelHeaderTsx11 {
    constructor() {
      let num;
      let num2;
      let num4;
      let tmp7;
      const tmp = _undefined(_undefined2.get(), c2);
      let value = c3;
      const tmp3 = !c3 && _undefined3.get() === _undefined4.PIP;
      if (value) {
        value = _undefined5.get();
      }
      const obj = { paddingTop: _undefined6.get(), paddingLeft: tmp.paddingLeft, paddingRight: tmp.paddingRight, borderTopLeftRadius: num2, borderTopRightRadius: num, opacity: tmp7(num4, c9), transform: null };
      num = 24;
      num2 = 24;
      if (_undefined5.get()) {
        num2 = 0;
      }
      if (_undefined5.get()) {
        num = 0;
      }
      tmp7 = c8;
      if (tmp3) {
        num4 = 0;
      } else {
        num4 = 1;
        if (_undefined3.get() === _undefined4.DISMISSED) {
          num4 = 1;
        }
      }
      const value2 = _undefined7.get();
      const tmp10 = c10;
      if (!_undefined5.get()) {
        let tmp13;
        if (_undefined8.get().gestureActive) {
          tmp13 = c13;
        }
        const items = [{ translateY: tmp10(value2, tmp13) }];
        obj.transform = items;
        const obj3 = { translateY: tmp10(value2, tmp13) };
        return obj;
      }
      tmp13 = c14;
    }
  }
  const items16 = [tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74];
  VoicePanelHeaderTsx11.__closure = items16;
  VoicePanelHeaderTsx11.__workletHash = 4008001347556;
  VoicePanelHeaderTsx11.__initData = tmp59;
  const animatedStyle2 = useAnimatedStyle2(VoicePanelHeaderTsx11);
  const items17 = [closure_44, controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled];
  c0 = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp76, tmp77, tmp78, tmp79] = items17;
  const tmp5Result19 = tmp5(1652);
  class VoicePanelHeaderTsx12 {
    constructor() {
      const tmp = _undefined.get().mode === _undefined2.HIDDEN && !c2;
      return tmp;
    }
  }
  const items18 = [tmp77, tmp78, tmp79];
  VoicePanelHeaderTsx12.__closure = items18;
  VoicePanelHeaderTsx12.__workletHash = 5987598000217;
  VoicePanelHeaderTsx12.__initData = tmp76;
  const derivedValue1 = tmp5Result19.useDerivedValue(VoicePanelHeaderTsx12);
  const items19 = [closure_45, , , , , , , , ];
  const useAnimatedStyle3 = tmp5(1652).useAnimatedStyle;
  tmp5(1652);
  items19[1] = calculateVoicePanelHeaderSpecsDefault;
  items19[2] = safeArea;
  items19[3] = token;
  items19[4] = tmp5(5485).withTiming;
  items19[5] = derivedValue1;
  items19[6] = tmp58;
  items19[7] = tmp5(5876).withSpring;
  items19[8] = MODE_CHANGE_PHYSICS;
  c0 = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90] = items19;
  class VoicePanelHeaderTsx13 {
    constructor() {
      let items;
      const height = _undefined(_undefined2.get(), c2).height;
      let num = 1;
      const obj = _undefined3;
      const tmp = c3;
      if (_undefined3.get()) {
        num = 0;
      }
      let num2 = 0;
      const obj2 = { opacity: tmp(num, c5), transform: items };
      if (obj.get()) {
        num2 = -height;
      }
      items = [{ translateY: tmp2(num2, c7) }];
      ({ translateY: _undefined(num2, c7) });
      return obj2;
    }
  }
  const items20 = [tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90];
  VoicePanelHeaderTsx13.__closure = items20;
  VoicePanelHeaderTsx13.__workletHash = 16242469850853;
  VoicePanelHeaderTsx13.__initData = tmp82;
  const animatedStyle3 = useAnimatedStyle3(VoicePanelHeaderTsx13);
  const items21 = [closure_46, derivedValue1];
  c0 = undefined;
  [tmp92, tmp93] = items21;
  const tmp5Result21 = tmp5(1652);
  class VoicePanelHeaderTsx14 {
    constructor() {
      let str2;
      let str = "box-none";
      if (_undefined.get()) {
        str = "none";
      }
      const obj2 = { pointerEvents: str, importantForAccessibility: str2, accessibilityElementsHidden: _undefined.get() };
      str2 = "auto";
      if (_undefined.get()) {
        str2 = "no-hide-descendants";
      }
      return obj2;
    }
  }
  const items22 = [tmp93];
  VoicePanelHeaderTsx14.__closure = items22;
  VoicePanelHeaderTsx14.__workletHash = 8929282510088;
  VoicePanelHeaderTsx14.__initData = tmp92;
  const animatedProps = tmp5Result21.useAnimatedProps(VoicePanelHeaderTsx14);
  const tmp95 = useMyCurrentStageChannelRoleDefault(channelId);
  let flag;
  if (tmp95 != null) {
    flag = tmp95.speaker;
  }
  if (flag == null) {
    flag = false;
  }
  if (channelType !== tmp5(1093).ChannelTypes.GUILD_STAGE_VOICE) {
    flag = treatment === tmp5(19830).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  const tmp5Result22 = tmp5(19795);
  let canInviteMembers = tmp5Result22.useCanInviteMembers(channelId);
  const tmp5Result23 = tmp5(19753);
  const inviteMembersCallback = tmp5Result23.useInviteMembersCallback(channelId);
  const tmp98 = useVoicePanelNavArrowPressedDefault();
  const tmp5Result24 = tmp5(7433);
  tmp5Result24.useNavigatorBackPressHandler(tmp98);
  if (null != tmp13) {
    DOWN = constants.LEFT;
    tmp100 = constants;
  } else {
    tmp100 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp100.LEFT) {
    let intl2 = tmp5(1113).intl;
    stringResult = intl2.string(tmp5(1113).t["9M6OdC"]);
  } else {
    let intl = tmp5(1113).intl;
    const string = intl.string;
    const t = tmp5(1113).t;
    if (tmp115Result12) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  const tmp2Result = useStableParticipantDefault;
  const tmp2ResultResult = tmp2Result(AuthenticationStore.getId(), channelId, guildId);
  react = tmp2ResultResult;
  const items23 = [MediaEngineStore];
  const items24 = [tmp2ResultResult];
  const tmp5Result25 = tmp5(504);
  const stateFromStores2 = tmp5Result25.useStateFromStores(items23, () => {
    if (null != closure_4) {
      const obj3 = useStableParticipant;
      if (obj3.isStableUserParticipant(closure_4)) {
        const tmp10Result = useStableParticipant;
        if (tmp10Result.stableParticipantHasVideo(closure_4)) {
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
  }, items24);
  const items25 = [DOWN];
  const callback1 = obj.useCallback(() => {
    const videoDeviceId = MediaEngineStore.getVideoDeviceId();
    const keys = Object.keys(MediaEngineStore.getVideoDevices());
    const found = keys.find((item) => item !== closure_0);
    if (null != found) {
      const obj = _undefined(c2[50]);
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
  }, items25);
  const tmp5Result26 = tmp5(10577);
  const isSecureFramesUIEnabled = tmp5Result26.useIsSecureFramesUIEnabled({ channelId });
  let tmp111 = null;
  const useIsUserSecureFramesVerified = tmp5(10539).useIsUserSecureFramesVerified;
  tmp5(10539);
  if (tmp13 === ParticipantTypes.USER) {
    tmp111 = null;
    if (null != tmp11) {
      tmp111 = tmp11;
    }
  }
  const isUserSecureFramesVerified = useIsUserSecureFramesVerified({ userId: tmp111, channelId });
  let tmp114 = null;
  const useIsStreamSecureFramesVerified = tmp5(10539).useIsStreamSecureFramesVerified;
  tmp5(10539);
  if (tmp13 === ParticipantTypes.STREAM) {
    tmp114 = null;
    if (null != tmp11) {
      tmp114 = tmp11;
    }
  }
  let flag2 = useIsStreamSecureFramesVerified({ streamKey: tmp114, channelId });
  if (ParticipantTypes.STREAM !== tmp13) {
    flag2 = false;
    if (ParticipantTypes.USER === tmp13) {
      flag2 = isUserSecureFramesVerified;
    }
  }
  let ONYX;
  const ThemeContextProvider = tmp5(5314).ThemeContextProvider;
  if (tmp115Result12) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj6 = { theme: ONYX, children: closure_24(View, obj7) };
  obj7 = { style: items26, pointerEvents: "box-none", layout, children: closure_25(View2, obj8) };
  items26 = [tmp.headerWrapper, animatedStyle];
  View = _modDef1652.View;
  obj8 = { style: items27, pointerEvents: "box-none", children: items28 };
  items27 = [tmp.headerSurface, animatedStyle2];
  View2 = _modDef1652.View;
  items28 = [closure_24(closure_33, { isHeaderHidden: derivedValue1, scrollPosition, focused }), , ];
  let tmp115Result = null;
  if (tmp115Result12) {
    tmp115Result = null;
    if (!isDockEnabled) {
      const obj9 = { baseColor: nativeDefault.colors.BLACK, minHeight: 0 };
      const tmp2Result7 = ThemedHeaderBackgroundGradientDefault;
      tmp115Result = tmp115(tmp2Result7, obj9);
    }
  }
  items28[1] = tmp115Result;
  let tmp115Result7 = null;
  const obj10 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: items29 };
  const View3 = _modDef1652.View;
  if (tmp13 === ParticipantTypes.USER) {
    const obj11 = { isHeaderHidden: derivedValue1 };
    tmp115Result7 = tmp115(VoicePanelHeaderUserStateDefault, obj11);
  }
  items29 = [tmp115Result7, ];
  const obj12 = { style: items30, animatedProps, children: items33 };
  items30 = [tmp.headerOuter, animatedStyle3];
  const View4 = _modDef1652.View;
  const obj13 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: items31 };
  const obj14 = { icon: AssetRegistryDefault, accessibilityLabel: stringResult, onPress: tmp98, style: memo };
  const tmp2Result8 = NativeViewDefault;
  const tmp2Result9 = VoicePanelIconButtonDefault;
  items31 = [closure_24(tmp2Result9, obj14), ];
  const obj15 = { style: tmp.headerInner, children: items32 };
  items32 = [, ];
  const tmp2Result10 = NativeViewDefault;
  items32[0] = closure_24(VoicePanelTitleButtonDefault, {});
  let tmp115Result8 = null;
  if (isSecureFramesUIEnabled) {
    tmp115Result8 = null;
    if (flag2) {
      const obj16 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      const ShieldLockIcon = tmp5(10746).ShieldLockIcon;
      tmp115Result8 = tmp115(ShieldLockIcon, obj16);
    }
  }
  items32[1] = tmp115Result8;
  items31[1] = closure_25(tmp2Result10, obj15);
  items33 = [closure_25(tmp2Result8, obj13), ];
  const obj17 = { style: tmp.rightWrapper, layout, children: items34 };
  const View5 = _modDef1652.View;
  items34 = [closure_24(closure_36, {}), , , , , , ];
  let tmp115Result9 = channelType === tmp5(1093).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp115Result9) {
    const obj18 = { channelId };
    tmp115Result9 = tmp115(MusicMuteButton, obj18);
  }
  items34[1] = tmp115Result9;
  items34[2] = closure_24(VoicePanelHeaderSpeakerDefault, { isConnectedToVoiceChannel: tmp115Result12, channelId });
  let tmp115Result10 = null;
  if (null != stateFromStores) {
    const obj19 = { channel: stateFromStores, inCall: tmp115Result12 };
    tmp115Result10 = tmp115(VoiceChannelAppHeaderButtonsDefault, obj19);
  }
  items34[3] = tmp115Result10;
  if (canInviteMembers) {
    const obj20 = { icon: AssetRegistryDefault2, accessibilityLabel: intl3.formatToPlainString(tmp5(1113).t["dHHb/2"], obj21), onPress: inviteMembersCallback };
    const tmp2Result11 = VoicePanelIconButtonDefault;
    intl3 = tmp5(1113).intl;
    obj21 = { channelName: stateFromStores1 };
    canInviteMembers = tmp115(tmp2Result11, obj20);
  }
  items34[4] = canInviteMembers;
  let tmp115Result11 = null;
  if (null != stateFromStores2) {
    const obj22 = { icon: AssetRegistryDefault3, onPress: callback1, accessibilityLabel: stateFromStores2 };
    const tmp2Result12 = VoicePanelIconButtonDefault;
    tmp115Result11 = tmp115(tmp2Result12, obj22);
  }
  items34[5] = tmp115Result11;
  if (tmp115Result12) {
    tmp115Result12 = flag;
  }
  if (tmp115Result12) {
    const obj23 = { channelId };
    tmp115Result12 = tmp115(VoicePanelHeaderChatButtonDefault, obj23);
  }
  items34[6] = tmp115Result12;
  items33[1] = closure_25(View5, obj17);
  items29[1] = closure_25(View4, obj12);
  items28[2] = closure_25(View3, obj10);
  return closure_24(ThemeContextProvider, obj6);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
