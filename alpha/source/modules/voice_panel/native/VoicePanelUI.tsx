// Module ID: 19977
// Function ID: 19978
// Name: VoicePanelUI
// Dependencies: [32, 19, 17, 7016, 10192, 6901, 11985, 11983, 5983, 11986, 21, 3, 5939, 5306, 575, 1655, 1627, 11984, 1630, 5598, 11333, 1708, 11989, 19978, 19979, 5554, 12017, 19908, 5902, 11991, 12914, 13809, 11995, 19963, 10576, 6181, 19980, 6772, 19982, 19983, 7918, 7937, 1263, 19984, 5916, 19985, 20007, 20041, 20045, 20048, 20049, 12744, 20050, 20052, 20061, 20069, 2]

// Module 19977 (VoicePanelUI)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _mod1655 from "module_1655" /* 1655 */;
import spring_spring from "spring/spring" /* 5939 */;
import CallConstants from "CallConstants" /* 5983 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11983 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11986 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 12914 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13809 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import AppFreezeStore from "AppFreezeStore" /* 10192 */;
import VoicePanelStore from "VoicePanelStore" /* 6901 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import size_mod from "module_2" /* 2 */;

const module_1655 = _mod1655;
let _Math5, _Math6, _require, absolute, absolute1, absoluteY, activateResult, active, dependencyMap, diff1, drawerHeight, failResult, flag, flag2, flag3, flag4, flag5, floor, max, maxResult, num2, num3, num4, num5, num6, obj1, point, point1, result4, result5, result6, set, set2, set2Result, state, tmp26Result, tmp26Result1, value1, velocityY;

let DEFAULT_BORDER_RADIUS;
let DEFAULT_BORDER_RADIUS_PIP;
let DRAWER_SPRING_PHYSICS;
let LAYOUT_PHYSICS;
let MODE_CHANGE_PHYSICS;
let ScrollView;
let VOICE_PANEL_CHUNK_DIVISOR;
let c10;
let closure_14;
let closure_18;
let closure_19;
let closure_20;
let metroRequire;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
let tmp10;
let tmp13;
let tmp14;
let tmp19;
let tmp2;
let tmp20;
let tmp21;
let tmp22;
let tmp3;
let tmp7;
let tmp8;
let tmp9;
let unpackModuleId;
const _mod1708 = tmp3(1708);
const ExternalPipDefault = tmp(6181);
const ReleaseChannelUtils = tmp3(6772);
const roundToNearestPixelDefault = tmp(10576);
const cheapWorkletShallowEqual = tmp3(11333);
const updateSharedValueIfChangedDefault = tmp(11989);
const calculateVoicePanelHeaderSpecsDefault = tmp2(11991);
const VoicePanelPIPStateContext = tmp3(11995);
const closeVoicePanelsDefault = tmp2(12744);
const PanelSizeUtils = tmp3(19963);
const useControlsLockDefault = tmp2(19978);
const VoicePanelDockSheet = tmp3(19980);
const VoicePanelDockSheetLayersDefault = tmp(19982);
const voicePanelLayoutTransitionDefault = tmp(19983);
const useControlsHoverGestureDefault = tmp2(19984);
const VoicePanelHeaderDefault = tmp2(19985);
const VoicePanelCardViewDefault = tmp2(20007);
const VoicePanelPreJoinContentDefault = tmp2(20041);
const VoicePanelVoiceChannelAppDefault = tmp2(20045);
const VoicePanelSystemUIManagerDefault = tmp2(20048);
const VoicePanelAccessibilityViewDefault = tmp2(20049);
const VoicePanelDismissableContentDefault = tmp2(20050);
const VoicePanelControlsDefault = tmp2(20069);
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function AnimatedWrapper(arg0) {
  let View3;
  let children;
  let connected;
  let controlsSpecs;
  let dockEntryProgress;
  let dockHeight;
  let dockJoinMorphOrigin;
  let dockMinimizeProgress;
  let dockPressProgress;
  let dockSheetWidth;
  let focused;
  let isDockConnected;
  let isDockEnabled2;
  let items22;
  let mode;
  let obj7;
  let preJoinContentSize;
  let safeArea;
  let sheetExitProgress;
  let tmp102;
  let tmp103;
  let tmp104;
  let tmp109;
  let tmp110;
  let tmp113;
  let tmp114;
  let tmp115;
  let tmp118Result;
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
  let tmp23;
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
  let tmp36;
  let tmp37;
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
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp7;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp8;
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
  let tmp97;
  let tmp98;
  let useReducedMotion;
  let windowDimensions;
  let wrapperDimensions;
  let wrapperOffset;
  let wrapperSurfaceLayerStyles;
  let wrapperSurfaceStyles;
  let wrapperTransformStyles;
  ({ wrapperOffset, children } = arg0);
  let obj = react;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  let animatedStyle;
  let animatedStyle2;
  let animatedStyle3;
  const isDockEnabled = react.useContext(VoicePanelStateContextDefault).isDockEnabled;
  obj2 = useGlobalStatusIndicatorState;
  const height = obj2.useGlobalStatusIndicatorState().height;
  const tmp4 = closure_27();
  _require = tmp4;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ wrapperDimensions, connected, dockPressProgress, dockSheetWidth, isDockConnected, isDockEnabled: isDockEnabled2, dockJoinMorphOrigin, dockMinimizeProgress, mode, windowDimensions, controlsSpecs, dockEntryProgress, dockHeight, focused, preJoinContentSize, safeArea, sheetExitProgress, useReducedMotion } = context);
  let tmp6 = useWindowDimensionsSharedValueDefault({ ignoreKeyboard: true });
  let obj3 = _mod1655;
  let items = [closure_53, controlsSpecs];
  let c0;
  [tmp7, tmp8] = items;
  class VoicePanelUITsx26 {
    constructor() {
      return _undefined.get().height;
    }
  }
  let items1 = [tmp8];
  VoicePanelUITsx26.__closure = items1;
  VoicePanelUITsx26.__workletHash = 10614477099225;
  VoicePanelUITsx26.__initData = tmp7;
  const derivedValue = obj3.useDerivedValue(VoicePanelUITsx26);
  const tmp3Result = VoicePanelPIPStateContext;
  const pIPState = tmp3Result.usePIPState();
  let items2 = [closure_54, mode, connected, windowDimensions, safeArea, focused, pIPState, derivedValue, preJoinContentSize, height];
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items2;
  const tmp3Result8 = _mod1655;
  class VoicePanelUITsx27 {
    constructor() {
      const obj = { modeToSet: _undefined.get(), connected: _undefined2.get(), windowWidth: _undefined3.get().width, windowHeight: _undefined3.get().height, safeArea: _undefined4.get(), focused: _undefined5.get(), pipState, controlsHeight: _undefined6.get(), preJoinContentSize: _undefined7.get(), globalStatusIndicatorHeight };
      return obj;
    }
  }
  let items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  VoicePanelUITsx27.__closure = items3;
  VoicePanelUITsx27.__workletHash = 4614893679014;
  VoicePanelUITsx27.__initData = tmp12;
  let items4 = [closure_55, , , , , , , , , , ];
  const useAnimatedReaction = tmp3Result8.useAnimatedReaction;
  items4[1] = cheapWorkletShallowEqual.cheapWorkletShallowEqual;
  const tmp22 = VoicePanelModes;
  items4[2] = VoicePanelModes;
  items4[3] = isDockEnabled2;
  items4[4] = wrapperDimensions;
  items4[5] = updateSharedValueIfChangedDefault;
  items4[6] = wrapperOffset;
  items4[7] = PanelSizeUtils.getMaxPanelWidth;
  items4[8] = PanelSizeUtils.getPanelX;
  items4[9] = roundToNearestPixelDefault;
  items4[10] = windowDimensions;
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
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items4;
  class VoicePanelUITsx28 {
    constructor(arg0, windowHeight) {
      let connected;
      let controlsHeight;
      let drawerX;
      let drawerY;
      let modeToSet;
      let preJoinContentSize;
      let safeArea;
      let windowWidth;
      const tmp = c0;
      const tmp2 = windowHeight;
      if (!tmp(arg0, tmp2)) {
        ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = arg0);
        ({ controlsHeight, preJoinContentSize, globalStatusIndicatorHeight } = arg0);
        let tmp6 = null == windowHeight;
        if (!tmp6) {
          tmp6 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
        }
        const value = _undefined2.get();
        ({ drawerX, drawerY } = value);
        const diff = windowHeight - globalStatusIndicatorHeight;
        if (modeToSet === _undefined.PANEL) {
          if (connected) {
            obj2 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp6, mode: modeToSet };
            _undefined3(_undefined2, obj2);
            _undefined3(c5, { gestureActive: false });
          } else {
            const obj3 = { windowWidth, connected, safeAreaLeft: null, safeAreaRight: null };
            ({ left: obj5.safeAreaLeft, right: obj5.safeAreaRight } = safeArea);
            const tmp20 = _undefined4(obj3);
            const _Math = Math;
            const obj4 = { drawerWidth: tmp20, drawerHeight: diff, drawerX: _undefined5(windowWidth, tmp20), drawerY: _undefined6(Math.max(diff - preJoinContentSize - controlsHeight - safeArea.bottom, diff - 0.8 * diff)), animated: tmp6, mode: modeToSet };
            _undefined5(windowWidth, tmp20);
            _undefined3(_undefined2, obj4);
          }
        } else {
          if (modeToSet === _undefined.PIP) {
            const tmp10 = c2;
            if (tmp10) {
              const obj6 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp6, mode: modeToSet };
              _undefined3(_undefined2, obj6);
            }
          }
          if (modeToSet === _undefined.DISMISSED) {
            const tmp11 = c2 && _undefined2.get().mode === _undefined.PIP;
            if (!connected) {
              let obj7;
              if (!tmp11) {
                obj7 = { drawerY: _undefined7.get().height + 60, mode: modeToSet };
              }
              _undefined3(_undefined2, obj7);
              _undefined3(c5, { gestureActive: false, x: 0, y: 0 });
            }
            obj7 = { mode: modeToSet };
            const obj13 = { mode: modeToSet };
          }
        }
      }
    }
  }
  let items5 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  VoicePanelUITsx28.__closure = items5;
  VoicePanelUITsx28.__workletHash = 11671043152030;
  VoicePanelUITsx28.__initData = tmp23;
  const animatedReaction = useAnimatedReaction(VoicePanelUITsx27, VoicePanelUITsx28);
  const items6 = [closure_57, useReducedMotion, wrapperDimensions, wrapperOffset, connected, closure_56, mode, tmp22, , , , , , , , , , , , , , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items6[8] = _mod1708.scheduleOnRN;
  items6[9] = ExternalPipDefault.updateSourceTrackingView;
  items6[10] = isDockEnabled2;
  items6[11] = VoicePanelDockSheet.getDockSheetTransform;
  items6[12] = isDockConnected;
  items6[13] = dockMinimizeProgress;
  items6[14] = dockHeight;
  items6[15] = tmp6;
  items6[16] = height;
  items6[17] = dockJoinMorphOrigin;
  items6[18] = dockEntryProgress;
  items6[19] = sheetExitProgress;
  items6[20] = dockPressProgress;
  items6[21] = spring_spring.withSpring;
  items6[22] = gesture;
  items6[23] = obj2;
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
  [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items6;
  class VoicePanelUITsx30 {
    constructor() {
      let drawerX;
      let drawerY;
      let gestureActive2;
      let items2;
      let obj10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let y;
      const value = _undefined.get();
      let gestureActive = !value;
      if (gestureActive) {
        gestureActive = _undefined2.get().animated;
      }
      if (!gestureActive) {
        gestureActive = _undefined3.get().gestureActive;
      }
      const value4 = _undefined3.get();
      ({ gestureActive: gestureActive2, y } = value4);
      const x = value4.x;
      const value5 = _undefined2.get();
      ({ drawerY, drawerX } = value5);
      const value6 = _undefined4.get();
      let tmp7 = !value6;
      obj2 = _undefined2;
      if (tmp7) {
        if (!gestureActive2) {
          gestureActive2 = 0 !== y;
        }
        tmp7 = gestureActive2;
      }
      let sum1 = drawerX;
      let sum = drawerY;
      if (tmp7) {
        const _Math = Math;
        sum = drawerY + Math.max(y, 0);
        sum1 = drawerX + x;
      }
      const items = [c4, c5, c6, c7, c8];
      [tmp11, tmp12, tmp13, tmp14, tmp15] = items;
      class VoicePanelUITsx29 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0.get() !== closure_1.DISMISSED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      const items1 = [tmp12, tmp13, tmp14, tmp15];
      VoicePanelUITsx29.__closure = items1;
      VoicePanelUITsx29.__workletHash = 205591346044;
      VoicePanelUITsx29.__initData = tmp11;
      let tmp17 = null;
      if (c9) {
        const obj3 = { connected: _undefined6.get(), progress: _undefined7.get(), wrapperDimensions: obj2.get(), dockHeight: _undefined8.get(), dockBottom: _undefined9.get().height - c15, dockJoinMorphOrigin: _undefined10.get(), dockEntryProgress: _undefined11.get(), sheetExitProgress: _undefined12.get(), dockPressProgress: _undefined13.get() };
        tmp17 = _undefined5(obj3);
      }
      if (null != tmp17) {
        const obj4 = { transform: items2 };
        items2 = [{ translateX: tmp17.translateX }, , ];
        const obj5 = { translateX: tmp17.translateX };
        const obj6 = { translateY: tmp17.translateY };
        items2[1] = obj6;
        const obj7 = { scale: tmp17.scale };
        items2[2] = obj7;
        obj10 = obj4;
      } else {
        let items5;
        let str = "animate-never";
        let str2 = "animate-never";
        const tmp28 = _undefined3.get().gestureActive ? c21 : c22;
        if (gestureActive) {
          str2 = "animate-always";
        }
        const items3 = [{ translateX: _undefined2(sum1, tmp28, str2, VoicePanelUITsx29) }, ];
        const obj8 = { translateX: _undefined2(sum1, tmp28, str2, VoicePanelUITsx29) };
        const tmp33 = _undefined3.get().gestureActive ? c21 : c22;
        if (gestureActive) {
          str = "animate-always";
        }
        items3[1] = { translateY: _undefined2(sum, tmp33, str, VoicePanelUITsx29) };
        const obj9 = { translateY: _undefined2(sum, tmp33, str, VoicePanelUITsx29) };
        if (c9) {
          const items4 = [{ scale: 1 }];
          items5 = items4;
        } else {
          items5 = [];
        }
        obj10 = { transform: items3 };
        HermesBuiltin.arraySpread(items3, items5, 2);
      }
      return obj10;
    }
  }
  const items7 = [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59];
  VoicePanelUITsx30.__closure = items7;
  VoicePanelUITsx30.__workletHash = 16698086189253;
  VoicePanelUITsx30.__initData = tmp36;
  animatedStyle = useAnimatedStyle(VoicePanelUITsx30);
  const tmp3Result10 = VoicePanelDockSheet;
  const dockSheetSurfaceFills = tmp3Result10.useDockSheetSurfaceFills();
  const items8 = [closure_58, isDockEnabled2, , , , , , , , , , ];
  const useAnimatedStyle2 = _mod1655.useAnimatedStyle;
  _mod1655;
  items8[2] = VoicePanelDockSheet.getDockSheetSurfaceStyle;
  items8[3] = isDockConnected;
  items8[4] = dockPressProgress;
  items8[5] = dockJoinMorphOrigin;
  items8[6] = mode;
  items8[7] = dockMinimizeProgress;
  items8[8] = dockSheetWidth;
  items8[9] = wrapperDimensions;
  items8[10] = dockSheetSurfaceFills;
  items8[11] = tmp22;
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
  [tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74] = items8;
  class VoicePanelUITsx31 {
    constructor() {
      let str;
      const tmp = c0;
      if (tmp) {
        const obj = { connected: _undefined2.get(), dockPressProgress: _undefined3.get(), dockJoinMorphOrigin: _undefined4.get(), mode: _undefined5.get(), sheetMorphProgress: 1 - _undefined6.get(), sheetWidth: _undefined7.get(), wrapperDimensions: _undefined8.get() };
        size = _undefined(obj, c9);
      } else {
        size = { width: _undefined8.get().drawerWidth, height: _undefined8.get().drawerHeight, pointerEvents: str };
        str = "none";
        if (_undefined5.get() === _undefined9.PANEL) {
          str = "auto";
        }
      }
      return size;
    }
  }
  const items9 = [tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74];
  VoicePanelUITsx31.__closure = items9;
  VoicePanelUITsx31.__workletHash = 4012411141798;
  VoicePanelUITsx31.__initData = tmp63;
  animatedStyle2 = useAnimatedStyle2(VoicePanelUITsx31);
  const items10 = [closure_59, isDockEnabled2, , , , , , , , , , , , , , ];
  const useAnimatedStyle3 = _mod1655.useAnimatedStyle;
  _mod1655;
  items10[2] = VoicePanelDockSheet.getDockSheetShape;
  items10[3] = isDockConnected;
  items10[4] = dockJoinMorphOrigin;
  items10[5] = dockMinimizeProgress;
  items10[6] = dockSheetWidth;
  items10[7] = wrapperDimensions;
  items10[8] = VoicePanelDockSheet.getDockSheetShadowOpacity;
  items10[9] = dockPressProgress;
  items10[10] = computeBorderRadii;
  items10[11] = mode;
  items10[12] = connected;
  items10[13] = spring_spring.withSpring;
  items10[14] = authStore;
  items10[15] = tmp4;
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
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  [tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92] = items10;
  class VoicePanelUITsx32 {
    constructor() {
      let str;
      let value;
      const tmp = c0;
      if (tmp) {
        obj2 = { opacity: _undefined7(value, 1 - _undefined4.get()) };
        const obj3 = { connected: _undefined2.get(), dockJoinMorphOrigin: _undefined3.get(), sheetMorphProgress: 1 - _undefined4.get(), sheetWidth: _undefined5.get(), wrapperDimensions: _undefined6.get() };
        const merged = Object.assign(_undefined(obj3));
        value = _undefined8.get();
        return obj2;
      } else {
        const obj = { mode: _undefined10.get(), connected: _undefined11.get() };
        const obj4 = { borderRadius: _undefined12(_undefined9(obj), c13), backgroundColor: str };
        str = "transparent";
        if (!_undefined11.get()) {
          str = _undefined13.maskDefaultBackground.backgroundColor;
        }
        return obj4;
      }
    }
  }
  const items11 = [tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92];
  VoicePanelUITsx32.__closure = items11;
  VoicePanelUITsx32.__workletHash = 3074738434583;
  VoicePanelUITsx32.__initData = tmp77;
  animatedStyle3 = useAnimatedStyle3(VoicePanelUITsx32);
  if (!ReleaseChannelUtils.isStable) {
    const items12 = [closure_60, windowDimensions];
    c0 = undefined;
    [tmp97, tmp98] = items12;
    const tmp3Result13 = _mod1655;
    class VoicePanelUITsx33 {
      constructor() {
        return _undefined.get();
      }
    }
    const items13 = [tmp98];
    VoicePanelUITsx33.__closure = items13;
    VoicePanelUITsx33.__workletHash = 11289230546412;
    VoicePanelUITsx33.__initData = tmp97;
    const items14 = [closure_61, , ];
    const useAnimatedReaction2 = tmp3Result13.useAnimatedReaction;
    items14[1] = _mod1708.scheduleOnRN;
    items14[2] = log;
    c0 = undefined;
    c1 = undefined;
    [tmp102, tmp103, tmp104] = items14;
    class VoicePanelUITsx34 {
      constructor(arg0) {
        _undefined(c1, "Window dimensions changed:", JSON.stringify(arg0));
      }
    }
    const items15 = [tmp103, tmp104];
    VoicePanelUITsx34.__closure = items15;
    VoicePanelUITsx34.__workletHash = 9854052507414;
    VoicePanelUITsx34.__initData = tmp102;
    const animatedReaction2 = useAnimatedReaction2(VoicePanelUITsx33, VoicePanelUITsx34);
    const items16 = [closure_62, wrapperDimensions];
    c0 = undefined;
    [tmp109, tmp110] = items16;
    const tmp100 = log;
    const tmp3Result14 = _mod1655;
    class VoicePanelUITsx35 {
      constructor() {
        return _undefined.get();
      }
    }
    const items17 = [tmp110];
    VoicePanelUITsx35.__closure = items17;
    class VoicePanelUITsx26 {
      constructor() {
        return _undefined.get().height;
      }
    }
    VoicePanelUITsx35.__initData = tmp109;
    const items18 = [closure_63, , ];
    const useAnimatedReaction3 = tmp3Result14.useAnimatedReaction;
    items18[1] = _mod1708.scheduleOnRN;
    items18[2] = tmp100;
    c0 = undefined;
    c1 = undefined;
    [tmp113, tmp114, tmp115] = items18;
    class VoicePanelUITsx36 {
      constructor(arg0) {
        _undefined(c1, "Wrapper dimensions changed:", JSON.stringify(arg0));
      }
    }
    const items19 = [tmp114, tmp115];
    VoicePanelUITsx36.__closure = items19;
    VoicePanelUITsx36.__workletHash = 13802443686923;
    VoicePanelUITsx36.__initData = tmp113;
    const animatedReaction3 = useAnimatedReaction3(VoicePanelUITsx35, VoicePanelUITsx36);
  }
  const items20 = [tmp4.wrapper, animatedStyle2, animatedStyle3, animatedStyle];
  const memo = obj.useMemo(() => ({ wrapperRootStyles: wrapper.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle2, wrapperSurfaceLayerStyles: animatedStyle3 }), items20);
  ({ wrapperTransformStyles, wrapperSurfaceStyles, wrapperSurfaceLayerStyles } = memo);
  let obj4 = { style: memo.wrapperRootStyles, pointerEvents: "box-none", children: tmp118Result };
  const View = module_1655.View;
  if (isDockEnabled) {
    let obj5 = { wrapperTransformStyles, wrapperSurfaceStyles, wrapperSurfaceLayerStyles, children };
    tmp118Result = tmp118(VoicePanelDockSheetLayersDefault, obj5);
  } else {
    let obj6 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: closure_19(View3, obj7) };
    const View2 = module_1655.View;
    obj7 = { style: wrapperSurfaceStyles, layout: voicePanelLayoutTransitionDefault, children: items22 };
    View3 = module_1655.View;
    class VoicePanelUITsx33 {
      constructor() {
        return _undefined.get();
      }
    }
    const items21 = [StyleSheet.absoluteFill, wrapperSurfaceLayerStyles];
    tmp120[0] = items21;
    items22 = [authStore4(module_1655.View, tmp120), children];
    tmp118Result = tmp118(View2, obj6);
  }
  return authStore4(View, obj4);
}
const StyleSheet = react_native.StyleSheet;
({ Pressable: metroRequire, ScrollView } = react_native);
({ BORDER_RADIUS_PHYSICS: c10, DEFAULT_BORDER_RADIUS, DRAWER_SPRING_PHYSICS, IS_IOS: unpackModuleId, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ LAYOUT_PHYSICS, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_14, DEFAULT_BORDER_RADIUS_PIP } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const POP_RESISTANCE = MorphablePanelConstants.POP_RESISTANCE;
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
const tmp5 = new LoggerDefault("VoicePanelUI");
log = tmp5;
let obj = { damping: 0 };
let merged = Object.assign(LAYOUT_PHYSICS);
let items = [{ code: "(function scrollViewLayoutTransition_VoicePanelUITsx1(values){let[withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS]=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'respect-motion-settings'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'respect-motion-settings'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'respect-motion-settings'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'respect-motion-settings')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})" }, spring_spring.withSpring, LAYOUT_PHYSICS, obj];
[tmp7, tmp8, tmp9, tmp10] = items;
function scrollViewLayoutTransition(originX) {
  const obj = { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  size = { originX: _undefined(originX.targetOriginX, c1, "respect-motion-settings"), originY: _undefined(originX.targetOriginY, c1, "respect-motion-settings"), width: _undefined(originX.targetWidth, c2, "respect-motion-settings"), height: _undefined(originX.targetHeight, c2, "respect-motion-settings") };
  return obj;
}
let items1 = [tmp8, tmp9, tmp10];
scrollViewLayoutTransition.__closure = items1;
scrollViewLayoutTransition.__workletHash = 6834185196614;
scrollViewLayoutTransition.__initData = tmp7;
let obj2 = { mass: 0.3, damping: 100, stiffness: 100 };
let merged1 = Object.assign(DRAWER_SPRING_PHYSICS);
let obj3 = { mass: 2 };
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
let items2 = [{ code: "(function computeViewableChunksFromScrollPosition_VoicePanelUITsx2(scrollPosition,windowHeight,contentHeight,extraChunks=1){let[VOICE_PANEL_CHUNK_DIVISOR]=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};})" }, VOICE_PANEL_CHUNK_DIVISOR];
[tmp13, tmp14] = items2;
function computeViewableChunksFromScrollPosition(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  const rounded = Math.ceil(arg1 / c0);
  const sum = Math.max(Math.floor(arg0 / rounded) - num, 0) + c0 + 2 * num;
  const minResult = min(sum, Math.ceil(arg2 / rounded));
  const obj = { start: Math.max(minResult - c0 - 2 * num, 0), end: minResult };
  return obj;
}
let items3 = [tmp14];
computeViewableChunksFromScrollPosition.__closure = items3;
computeViewableChunksFromScrollPosition.__workletHash = 804730160053;
computeViewableChunksFromScrollPosition.__initData = tmp13;
let createStyles = createStyles_mod;
let obj4 = { accessibilityView: obj5, wrapper: obj6, maskDefaultBackground: obj7, scrollView: obj8, scrollViewContent: { flexGrow: 1, flexShrink: 0 }, shade: obj9, shadePressable: { flexGrow: 1 } };
obj5 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { alignItems: "flex-start", zIndex: 1 };
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj8 = { borderTopLeftRadius: DEFAULT_BORDER_RADIUS, borderTopRightRadius: DEFAULT_BORDER_RADIUS };
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let closure_27 = createStyles(obj4);
let closure_28 = module_1655.createAnimatedComponent(ScrollView);
let closure_29 = MetaQuestUtils.isMetaQuest();
let closure_30 = { code: "(function VoicePanelUITsx3(){let[gestureState,connected,mode]=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};})" };
let closure_31 = { code: "(function VoicePanelUITsx4(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,scheduleOnRN,setPanelFullscreen,setPanelOpen,setPanelPIP]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){scheduleOnRN(setPanelFullscreen,false);}else{scheduleOnRN(setPanelFullscreen,true);}if(mode===VoicePanelModes.PANEL){scheduleOnRN(setPanelOpen,true);}else{scheduleOnRN(setPanelOpen,false);}if(mode===VoicePanelModes.PIP){scheduleOnRN(setPanelPIP,true);}else{scheduleOnRN(setPanelPIP,false);}})" };
let closure_32 = { code: "(function VoicePanelUITsx5(){let[mode]=this.__closure;return mode.get();})" };
let closure_33 = { code: "(function VoicePanelUITsx6(mode,previous){let[VoicePanelModes,updateSharedValueIfChanged,gestureState]=this.__closure;if(mode===VoicePanelModes.DISMISSED&&previous!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}})" };
let closure_34 = { code: "(function VoicePanelUITsx7(){let[mode,VoicePanelModes,focused]=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;})" };
let closure_35 = { code: "(function VoicePanelUITsx8(manualId,previousManualId){let[scheduleOnRN,handleFocusChange]=this.__closure;if(manualId!==previousManualId){scheduleOnRN(handleFocusChange,manualId);}})" };
let closure_36 = { code: "(function VoicePanelUITsx9(){let[connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,scheduleOnRN,showControls,hideControls]=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls,{debounce:true});}else{scheduleOnRN(hideControls,{debounce:true});}})" };
let closure_37 = { code: "(function VoicePanelUITsx10(event,manager){let[IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes]=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}})" };
let closure_38 = { code: "(function VoicePanelUITsx11(event){let[gestureState,isDockEnabled,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,controlsSpecs,VoicePanelControlsModes,scheduleOnRN,controlsLock]=this.__closure;if(gestureState.get().cancel)return;if(!isDockEnabled||mode.get()===VoicePanelModes.PANEL){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});}gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){scheduleOnRN(controlsLock.lock);}})" };
let closure_39 = { code: "(function VoicePanelUITsx12(event,manager){let[State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,isDockEnabled,scheduleOnRN,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling]=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(!isDockEnabled&&mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;scheduleOnRN(triggerIOSHaptic);}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}})" };
let closure_40 = { code: "(function VoicePanelUITsx13(event){let[gestureState,isDockEnabled,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,PIP_POP_HEIGHT,POP_RESISTANCE,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(gestureState.get().cancel)return;if(!isDockEnabled&&mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});return;}const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(!isDockEnabled&&connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(isDockEnabled){if(connected.get()){updateSharedValueIfChanged(gestureState,{requiresPop:newYOffset<=PIP_POP_HEIGHT});}}else if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});})" };
let closure_41 = { code: "(function VoicePanelUITsx14(_e){let[lockScrolling,gestureState,updateSharedValueIfChanged,isDockEnabled,mode,VoicePanelModes,wrapperOffset]=this.__closure;lockScrolling.set(false);const wasActive=gestureState.get().active;updateSharedValueIfChanged(gestureState,{cancel:false,active:false});if(!isDockEnabled||wasActive||mode.get()===VoicePanelModes.PANEL){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}console.log('onTouchesCancelled');})" };
let closure_42 = { code: "(function VoicePanelUITsx15(event){let[gestureState,isDockEnabled,mode,VoicePanelModes,lockScrolling,wrapperDimensions,connected,wrapperOffset,MIN_DISMISS_MOVE_PERCENTAGE,SHEET_COMMIT_FLING_VELOCITY,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,committedMode,setMode,updateSharedValueIfChanged,dismissPanel,calculatePIPPositionFromVelocity,windowDimensions,safeArea]=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(isDockEnabled){if(mode.get()!==VoicePanelModes.PANEL){lockScrolling.set(false);return;}const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;if(velocityY>0){if(connected.get()){if(wrapperOffset.get().y>panelHeight*MIN_DISMISS_MOVE_PERCENTAGE||velocityY>SHEET_COMMIT_FLING_VELOCITY){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);committedMode.set(VoicePanelModes.PIP);scheduleOnRN(setMode,VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});return;}}else if(wrapperOffset.get().y>panelHeight*MIN_DISMISS_MOVE_PERCENTAGE){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});scheduleOnRN(dismissPanel);return;}}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);return;}if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){scheduleOnRN(setMode,VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});scheduleOnRN(dismissPanel);return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}})" };
let closure_43 = { code: "(function VoicePanelUITsx16(){let[isDockEnabled,updateSharedValueIfChanged,gestureState,wrapperOffset,lockScrolling,scheduleOnRN,controlsLock,mode,VoicePanelModes]=this.__closure;if(isDockEnabled){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});lockScrolling.set(false);scheduleOnRN(controlsLock.unlock);return;}const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}scheduleOnRN(controlsLock.unlock);})" };
let closure_44 = { code: "(function onBeginDrag_VoicePanelUITsx17(event){let[scrollPosition,dragScrolling]=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);})" };
let closure_45 = { code: "(function onEndDrag_VoicePanelUITsx18(){let[dragScrolling]=this.__closure;dragScrolling.set(false);})" };
let closure_46 = { code: "(function onMomentumEnd_VoicePanelUITsx19(){let[dragScrolling]=this.__closure;dragScrolling.set(false);})" };
let closure_47 = { code: "(function onScroll_VoicePanelUITsx20(event){let[lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks]=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}})" };
let closure_48 = { code: "(function VoicePanelUITsx21(){let[mode]=this.__closure;return mode.get();})" };
let closure_49 = { code: "(function VoicePanelUITsx22(mode,previous){let[VoicePanelModes,lockScrolling]=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}})" };
let closure_50 = { code: "(function VoicePanelUITsx23(){let[mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter]=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};})" };
let closure_51 = { code: "(function VoicePanelUITsx24(){let[isDockConnected,sheetExitProgress,dockJoinMorphOrigin,windowDimensions,dockMinimizeProgress,mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset]=this.__closure;if(isDockConnected.get()){const exitShade=1-sheetExitProgress.get();const join=dockJoinMorphOrigin.get();if(join!=null){const screenSize=windowDimensions.get().height;const startShade=Math.min(Math.max((screenSize-join.y)/screenSize,0),1);return startShade*(1-dockMinimizeProgress.get())*exitShade;}return(1-dockMinimizeProgress.get())*exitShade;}switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}})" };
let items4 = [{ code: "(function computeBorderRadii_VoicePanelUITsx25({mode:mode,connected:connected}){let[VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS]=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;})" }, VoicePanelModes, DEFAULT_BORDER_RADIUS_PIP, DEFAULT_BORDER_RADIUS];
let c0;
let c1;
let c2;
[tmp19, tmp20, tmp21, tmp22] = items4;
function computeBorderRadii(mode) {
  let num;
  if (mode.mode === _undefined.PIP) {
    num = c1;
  } else {
    num = 0;
    if (!tmp) {
      num = c2;
    }
  }
  return num;
}
let items5 = [tmp20, tmp21, tmp22];
computeBorderRadii.__closure = items5;
computeBorderRadii.__workletHash = 6169564583234;
computeBorderRadii.__initData = tmp19;
let closure_53 = { code: "(function VoicePanelUITsx26(){let[controlsSpecs]=this.__closure;return controlsSpecs.get().height;})" };
let closure_54 = { code: "(function VoicePanelUITsx27(){let[mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight]=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};})" };
let closure_55 = { code: "(function VoicePanelUITsx28(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,isDockEnabled,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&!isDockEnabled&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.PIP&&isDockEnabled){updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:0,drawerY:0,animated:animated,mode:modeToSet});}else if(modeToSet===VoicePanelModes.DISMISSED){const isLeavingDock=isDockEnabled&&wrapperDimensions.get().mode===VoicePanelModes.PIP;if(connected||isLeavingDock){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}})" };
let closure_56 = { code: "(function VoicePanelUITsx29(finished){let[mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){scheduleOnRN(updateSourceTrackingView);}})" };
let closure_57 = { code: "(function VoicePanelUITsx30(){let[useReducedMotion,wrapperDimensions,wrapperOffset,connected,_worklet_205591346044_init_data,mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView,isDockEnabled,getDockSheetTransform,isDockConnected,dockMinimizeProgress,dockHeight,windowDimensionsIgnoringKeyboard,globalStatusIndicatorHeight,dockJoinMorphOrigin,dockEntryProgress,sheetExitProgress,dockPressProgress,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS]=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function VoicePanelUITsx29Factory([_worklet_205591346044_init_data,mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]){const VoicePanelUITsx29=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){scheduleOnRN(updateSourceTrackingView);}};VoicePanelUITsx29.__closure=[mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView];VoicePanelUITsx29.__workletHash=205591346044;VoicePanelUITsx29.__initData=_worklet_205591346044_init_data;return VoicePanelUITsx29;}([_worklet_205591346044_init_data,mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]);const dockTransform=isDockEnabled?getDockSheetTransform({connected:isDockConnected.get(),progress:dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get(),dockHeight:dockHeight.get(),dockBottom:windowDimensionsIgnoringKeyboard.get().height-globalStatusIndicatorHeight,dockJoinMorphOrigin:dockJoinMorphOrigin.get(),dockEntryProgress:dockEntryProgress.get(),sheetExitProgress:sheetExitProgress.get(),dockPressProgress:dockPressProgress.get()}):null;if(dockTransform!=null){return{transform:[{translateX:dockTransform.translateX},{translateY:dockTransform.translateY},{scale:dockTransform.scale}]};}return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},...(isDockEnabled?[{scale:1}]:[])]};})" };
let closure_58 = { code: "(function VoicePanelUITsx31(){let[isDockEnabled,getDockSheetSurfaceStyle,isDockConnected,dockPressProgress,dockJoinMorphOrigin,mode,dockMinimizeProgress,dockSheetWidth,wrapperDimensions,dockSurfaceFills,VoicePanelModes]=this.__closure;if(isDockEnabled){return getDockSheetSurfaceStyle({connected:isDockConnected.get(),dockPressProgress:dockPressProgress.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),mode:mode.get(),sheetMorphProgress:1-dockMinimizeProgress.get(),sheetWidth:dockSheetWidth.get(),wrapperDimensions:wrapperDimensions.get()},dockSurfaceFills);}return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none'};})" };
let closure_59 = { code: "(function VoicePanelUITsx32(){let[isDockEnabled,getDockSheetShape,isDockConnected,dockJoinMorphOrigin,dockMinimizeProgress,dockSheetWidth,wrapperDimensions,getDockSheetShadowOpacity,dockPressProgress,computeBorderRadii,mode,connected,withSpring,BORDER_RADIUS_PHYSICS,styles]=this.__closure;if(isDockEnabled){return{...getDockSheetShape({connected:isDockConnected.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),sheetMorphProgress:1-dockMinimizeProgress.get(),sheetWidth:dockSheetWidth.get(),wrapperDimensions:wrapperDimensions.get()}),opacity:getDockSheetShadowOpacity(dockPressProgress.get(),1-dockMinimizeProgress.get())};}const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};})" };
let closure_60 = { code: "(function VoicePanelUITsx33(){let[windowDimensions]=this.__closure;return windowDimensions.get();})" };
let closure_61 = { code: "(function VoicePanelUITsx34(value){let[scheduleOnRN,log]=this.__closure;scheduleOnRN(log,'Window dimensions changed:',JSON.stringify(value));})" };
let closure_62 = { code: "(function VoicePanelUITsx35(){let[wrapperDimensions]=this.__closure;return wrapperDimensions.get();})" };
let closure_63 = { code: "(function VoicePanelUITsx36(value){let[scheduleOnRN,log]=this.__closure;scheduleOnRN(log,'Wrapper dimensions changed:',JSON.stringify(value));})" };
let closure_65 = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
let closure_66 = { code: "(function VoicePanelUITsx37(){let[isDockConnected,opacity,withSpring,DrawerShadeOpacityPhysics]=this.__closure;const followsMorph=isDockConnected.get();return{opacity:followsMorph?opacity.get():withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};})" };
let closure_67 = react.memo(function DrawerShade(arg0) {
  let items2;
  let onPress;
  let opacity;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ opacity, onPress } = arg0);
  const tmp = closure_27();
  const isDockConnected = react.useContext(VoicePanelStateContextDefault).isDockConnected;
  const items = [closure_66, isDockConnected, opacity, , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  items[3] = spring_spring.withSpring;
  items[4] = closure_65;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class VoicePanelUITsx37 {
    constructor() {
      if (closure_0.get()) {
        tmp4 = closure_1;
        value = closure_1.get();
        obj = closure_1;
      } else {
        tmp = closure_2;
        obj = closure_1;
        tmp2 = closure_3;
        value = closure_2(closure_1.get(), closure_3);
      }
      obj1 = { opacity: value, pointerEvents: null };
      str = "auto";
      if (0 === obj.get()) {
        str = "none";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9];
  VoicePanelUITsx37.__closure = items1;
  VoicePanelUITsx37.__workletHash = 10971630675340;
  VoicePanelUITsx37.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(VoicePanelUITsx37);
  let obj = { style: items2, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore4(metroRequire, obj2) };
  items2 = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj2 = { style: tmp.shadePressable, onPress };
  const View = module_1655.View;
  return authStore4(View, obj);
});
const memoResult = react.memo(function VoicePanelUI() {
  let GestureDetector2;
  let LayerScope2;
  let View;
  let channelId;
  let closure_1;
  let closure_22;
  let dockJoinMorphOrigin;
  let dockMinimizeProgress;
  let dragScrolling;
  let first;
  let first1;
  let isDockConnected;
  let items34;
  let items35;
  let items37;
  let obj12;
  let obj14;
  let obj15;
  let obj16;
  let obj20;
  let obj23;
  let onBeginDrag;
  let onEndDrag;
  let onMomentumEnd;
  let onScroll;
  let participant;
  let ref;
  let scrollPosition;
  let sheetExitProgress;
  let state2;
  let tmp100;
  let tmp101;
  let tmp102;
  let tmp103;
  let tmp104;
  let tmp105;
  let tmp106;
  let tmp107;
  let tmp111Result;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp2Result;
  let tmp2Result2;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
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
  let tmp75;
  let tmp76;
  let tmp78;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  let tmp = closure_27();
  let tmp2 = importDefault;
  let tmp3 = dependencyMap;
  let tmp4 = useAnalyticsLocationsDefault;
  let obj = react;
  const analyticsLocations = tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ scrollPosition, dragScrolling, channelId } = context);
  const isDockEnabled = context.isDockEnabled;
  const dismissPanel = context.dismissPanel;
  [first, importDefault] = react.useState(false);
  dependencyMap = react.useRef(-1);
  let items = [channelId];
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    clearTimeout(ref.current);
    let obj = channelId(ref[42]);
    obj.batchUpdates(() => {
      if (lockEnabled) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          state = state2.getState();
          const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
          const state1 = state.getState();
          const obj = { lockEnabled, key: "voice-panel-freeze-" + closure_0 };
          const freezeLock = state1.requestFreezeLock(obj);
        }, 1000);
      } else {
        state = VoicePanelStore.getState();
        let result = state.setChannelPanelFullscreen(channelId, tmp);
        let state1 = AppFreezeStore.getState();
        let obj = { lockEnabled, key: "voice-panel-freeze-" + channelId };
        const _HermesInternal = HermesInternal;
        const requestFreezeLock = state1.requestFreezeLock;
        let freezeLock = requestFreezeLock(obj);
      }
    });
  }, items);
  const layoutEffect = react.useLayoutEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  let items1 = [channelId];
  let items2 = [channelId];
  const callback1 = react.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelOpen(channelId, arg0);
  }, items1);
  first1 = undefined;
  closure_22 = undefined;
  let closure_25;
  const callback2 = react.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelPIP(channelId, arg0);
  }, items2);
  const context1 = react.useContext(VoicePanelStateContextDefault);
  const channelId2 = context1.channelId;
  const committedMode = context1.committedMode;
  const connected = context1.connected;
  const controlsSpecs = context1.controlsSpecs;
  const dismissPanel2 = context1.dismissPanel;
  const dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  const focused = context1.focused;
  const hideControls = context1.hideControls;
  const isDockEnabled2 = context1.isDockEnabled;
  const isFocusedVideoZoomed = context1.isFocusedVideoZoomed;
  let mode = context1.mode;
  const safeArea = context1.safeArea;
  const setMode = context1.setMode;
  const showControls = context1.showControls;
  const windowDimensions = context1.windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  ({ isDockConnected, dockJoinMorphOrigin, dockMinimizeProgress, sheetExitProgress } = context1);
  const tmp13 = useSafeAreaInsetsDefault();
  let closure_18 = tmp13;
  const tmp14 = channelId;
  obj2 = channelId(1655);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = channelId(1655);
  const sharedValue1 = obj3.useSharedValue(false);
  const obj4 = channelId(1655);
  const sharedValue2 = obj4.useSharedValue(false);
  let obj5 = channelId(1655);
  let obj6 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
  const sharedValue3 = obj5.useSharedValue(obj6);
  [first1, closure_22] = react.useState(true);
  const memo = react.useMemo(() => {
    const Gesture = channelId(ref[19]).Gesture;
    return Gesture.Native();
  }, []);
  const obj7 = channelId(1655);
  const animatedRef = obj7.useAnimatedRef();
  const obj8 = channelId(1655);
  const sharedValue4 = obj8.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  let tmp24 = channelId(1655);
  let items3 = [closure_30, sharedValue4, connected, mode];
  let c0;
  let c1;
  let c2;
  [tmp25, tmp26, tmp27, tmp28] = items3;
  class VoicePanelUITsx3 {
    constructor() {
      const obj = { gestureActive: _undefined.get().active, connected: _undefined2.get(), mode: _undefined3.get() };
      return obj;
    }
  }
  let items4 = [tmp26, tmp27, tmp28];
  VoicePanelUITsx3.__closure = items4;
  VoicePanelUITsx3.__workletHash = 3464795647798;
  VoicePanelUITsx3.__initData = tmp25;
  let items5 = [closure_31, , , , , , ];
  const useAnimatedReaction = tmp24.useAnimatedReaction;
  items5[1] = tmp14(11333).cheapWorkletShallowEqual;
  const tmp29 = VoicePanelModes;
  items5[2] = VoicePanelModes;
  items5[3] = tmp14(1708).scheduleOnRN;
  items5[4] = callback;
  items5[5] = callback1;
  items5[6] = callback2;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items5;
  class VoicePanelUITsx4 {
    constructor(mode, arg1) {
      const tmp = arg1;
      const tmp2 = c0;
      if (!tmp2(mode, tmp)) {
        mode = mode.mode;
        if (mode.connected) {
          if (!mode.gestureActive) {
            let tmp4;
            if (mode === _undefined.PANEL) {
              tmp4 = _undefined2;
              _undefined2(c3, true);
            }
            const tmp10 = _undefined;
            if (mode === _undefined.PANEL) {
              tmp4(c4, true);
            } else {
              tmp4(c4, false);
            }
            if (mode === tmp10.PIP) {
              tmp4(c5, true);
            } else {
              tmp4(c5, false);
            }
          }
        }
        _undefined2(c3, false);
        tmp4 = _undefined2;
      }
    }
  }
  let items6 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  VoicePanelUITsx4.__closure = items6;
  VoicePanelUITsx4.__workletHash = 15249848589911;
  VoicePanelUITsx4.__initData = tmp30;
  const animatedReaction = useAnimatedReaction(VoicePanelUITsx3, VoicePanelUITsx4);
  let items7 = [closure_32, mode];
  c0 = undefined;
  [tmp39, tmp40] = items7;
  const tmp14Result = tmp14(1655);
  class VoicePanelUITsx5 {
    constructor() {
      return _undefined.get();
    }
  }
  let items8 = [tmp40];
  VoicePanelUITsx5.__closure = items8;
  VoicePanelUITsx5.__workletHash = 11609746086905;
  VoicePanelUITsx5.__initData = tmp39;
  let items9 = [closure_33, tmp29, , ];
  const useAnimatedReaction2 = tmp14Result.useAnimatedReaction;
  items9[2] = updateSharedValueIfChangedDefault;
  items9[3] = sharedValue4;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp41, tmp42, tmp43, tmp44] = items9;
  class VoicePanelUITsx6 {
    constructor(arg0, arg1) {
      const tmp2 = arg0 === _undefined.DISMISSED && arg1 !== tmp.DISMISSED;
      if (tmp2) {
        _undefined2(c2, { cancel: false, active: false });
      }
    }
  }
  let items10 = [tmp42, tmp43, tmp44];
  VoicePanelUITsx6.__closure = items10;
  VoicePanelUITsx6.__workletHash = 831695033676;
  VoicePanelUITsx6.__initData = tmp41;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelUITsx5, VoicePanelUITsx6);
  let items11 = [channelId2];
  const callback3 = obj.useCallback((arg0) => {
    const tmp = null != arg0 && isActivityParticipant(participant.getParticipant(channelId2, arg0));
    closure_22(!tmp);
  }, items11);
  let items12 = [closure_34, mode, tmp29, focused];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp48, tmp49, tmp50, tmp51] = items12;
  const tmp14Result7 = tmp14(1655);
  class VoicePanelUITsx7 {
    constructor() {
      let tmp;
      if (_undefined.get() === _undefined2.PANEL) {
        const value = _undefined3.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  let items13 = [tmp49, tmp50, tmp51];
  VoicePanelUITsx7.__closure = items13;
  VoicePanelUITsx7.__workletHash = 13070549736071;
  VoicePanelUITsx7.__initData = tmp48;
  let items14 = [closure_35, , ];
  const useAnimatedReaction3 = tmp14Result7.useAnimatedReaction;
  items14[1] = tmp14(1708).scheduleOnRN;
  items14[2] = callback3;
  c0 = undefined;
  c1 = undefined;
  [tmp52, tmp53, tmp54] = items14;
  class VoicePanelUITsx8 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  let items15 = [tmp53, tmp54];
  VoicePanelUITsx8.__closure = items15;
  VoicePanelUITsx8.__workletHash = 6427194929748;
  VoicePanelUITsx8.__initData = tmp52;
  const animatedReaction3 = useAnimatedReaction3(VoicePanelUITsx7, VoicePanelUITsx8);
  const tmp56 = useControlsLockDefault();
  closure_25 = tmp56;
  const items16 = [tmp13, committedMode, connected, controlsSpecs, dismissPanel2, dismissToPIPGestureRef, focused, first1, hideControls, sharedValue4, isDockEnabled2, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset, tmp56];
  const memo1 = obj.useMemo(() => {
    let tmp10;
    let tmp100;
    let tmp101;
    let tmp102;
    let tmp103;
    let tmp104;
    let tmp105;
    let tmp106;
    let tmp107;
    let tmp108;
    let tmp109;
    let tmp11;
    let tmp110;
    let tmp111;
    let tmp112;
    let tmp113;
    let tmp114;
    let tmp116;
    let tmp117;
    let tmp118;
    let tmp119;
    let tmp12;
    let tmp120;
    let tmp121;
    let tmp122;
    let tmp123;
    let tmp124;
    let tmp125;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp32;
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
    let tmp53;
    let tmp54;
    let tmp55;
    let tmp56;
    let tmp57;
    let tmp58;
    let tmp59;
    let tmp60;
    let tmp61;
    let tmp62;
    let tmp63;
    let tmp64;
    let tmp65;
    let tmp66;
    let tmp67;
    let tmp69;
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
    let tmp85;
    let tmp86;
    let tmp87;
    let tmp88;
    let tmp89;
    let tmp90;
    let tmp91;
    let tmp92;
    let tmp94;
    let tmp95;
    let tmp96;
    let tmp97;
    let tmp98;
    let tmp99;
    let tmp = channelId;
    let tmp2 = committedMode;
    const Gesture = channelId(committedMode[19]).Gesture;
    const Race = Gesture.Race;
    const Gesture2 = channelId(committedMode[19]).Gesture;
    const rect1 = { left: -1 * closure_18.left, right: -1 * closure_18.right };
    const rect = closure_18;
    let tmp3 = first1;
    const TapResult = Gesture2.Tap();
    const hitSlopResult = TapResult.hitSlop(rect1);
    const enabledResult = hitSlopResult.enabled(first1);
    const items = [closure_2_36, , , , , , , , ];
    items[1] = connected;
    items[2] = mode;
    let tmp7 = VoicePanelModes;
    items[3] = VoicePanelModes;
    items[4] = controlsSpecs;
    let tmp9 = VoicePanelControlsModes;
    items[5] = VoicePanelControlsModes;
    const onStart = enabledResult.maxDistance(30).onStart;
    enabledResult.maxDistance(30);
    items[6] = channelId(committedMode[21]).scheduleOnRN;
    items[7] = showControls;
    items[8] = hideControls;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
    class VoicePanelUITsx9 {
      constructor() {
        if (closure_0.get()) {
          tmp = closure_1;
          tmp2 = closure_2;
          if (closure_1.get() !== closure_2.PIP) {
            tmp3 = closure_3;
            tmp4 = closure_4;
            if (closure_3.get().mode === closure_4.HIDDEN) {
              tmp8 = closure_5;
              tmp9 = closure_6;
              tmp10 = closure_5(closure_6, { debounce: true });
            } else {
              tmp5 = closure_5;
              tmp6 = closure_7;
              tmp7 = closure_5(closure_7, { debounce: true });
            }
          }
        }
        return;
      }
    }
    const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
    VoicePanelUITsx9.__closure = items1;
    VoicePanelUITsx9.__workletHash = 17518795644710;
    VoicePanelUITsx9.__initData = tmp10;
    const onStartResult = onStart(VoicePanelUITsx9);
    const Gesture3 = tmp(tmp2[19]).Gesture;
    const PanResult = Gesture3.Pan();
    const enabledResult1 = PanResult.enabled(tmp3);
    const rect2 = { left: -1 * rect.left, right: -1 * rect.right };
    const manualActivationResult = enabledResult1.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    const hitSlopResult1 = maxPointersResult.hitSlop(rect2);
    const withRefResult = hitSlopResult1.withRef(dismissToPIPGestureRef);
    let result = withRefResult.shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(memo);
    const items2 = [closure_2_37, closure_2_11, windowDimensions, safeArea, , , , , , ];
    items2[4] = sharedValue4;
    items2[5] = isFocusedVideoZoomed;
    items2[6] = mode;
    items2[7] = tmp7;
    items2[8] = controlsSpecs;
    items2[9] = tmp9;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    let c8;
    [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items2;
    class VoicePanelUITsx10 {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        tmp2 = closure_0;
        if (tmp2) {
          tmp3 = null;
          if (null != first) {
            tmp4 = closure_1;
            absoluteY = first.absoluteY;
            tmp5 = closure_2;
            if (absoluteY > closure_1.get().height - closure_2.get().bottom) {
              tmp17 = closure_3;
              obj1 = {};
              set2 = closure_3.set;
              tmp18 = obj1;
              merged = Object.assign(closure_3.get());
              flag2 = true;
              obj1.cancel = true;
              set2Result = set2(obj1);
              activateResult = arg1.activate();
              return;
            }
          }
        }
        value = closure_4.get();
        if (!value) {
          tmp7 = closure_5;
          tmp8 = closure_6;
          tmp9 = closure_5.get() === closure_6.PANEL;
          if (tmp9) {
            tmp10 = closure_7;
            tmp11 = closure_8;
            tmp9 = closure_7.get().mode === closure_8.DRAWER;
          }
          value = tmp9;
        }
        if (value) {
          tmp12 = closure_3;
          obj = {};
          set = closure_3.set;
          tmp13 = obj;
          merged1 = Object.assign(closure_3.get());
          flag = true;
          obj.cancel = true;
          result = set(obj);
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items3 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
    VoicePanelUITsx10.__closure = items3;
    VoicePanelUITsx10.__workletHash = 2593917732093;
    VoicePanelUITsx10.__initData = tmp23;
    let tmp21 = safeArea;
    const items4 = [closure_2_38, tmp22, , , , , , , , , , ];
    items4[2] = isDockEnabled2;
    items4[3] = mode;
    items4[4] = tmp7;
    const onBegin = result1.onTouchesDown(VoicePanelUITsx10).onBegin;
    result1.onTouchesDown(VoicePanelUITsx10);
    items4[5] = channelId2(tmp2[22]);
    items4[6] = wrapperOffset;
    items4[7] = connected;
    items4[8] = controlsSpecs;
    items4[9] = tmp9;
    items4[10] = tmp(tmp2[21]).scheduleOnRN;
    items4[11] = closure_25;
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
    [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items4;
    const tmp20 = windowDimensions;
    class VoicePanelUITsx11 {
      constructor(arg0) {
        tmp = closure_0;
        if (!closure_0.get().cancel) {
          tmp2 = closure_1;
          if (tmp2) {
            tmp3 = closure_2;
            tmp4 = closure_3;
            tmp2 = closure_2.get() !== closure_3.PANEL;
          }
          if (!tmp2) {
            tmp5 = closure_4;
            tmp6 = closure_5;
            tmp7 = closure_4(closure_5, { x: 0, y: 0 });
          }
          tmp8 = arg0;
          obj = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
          ({ absoluteX: obj.absoluteXStart, absoluteY: obj.absoluteYStart } = arg0);
          tmp9 = closure_6;
          set = tmp.set;
          value = closure_6.get();
          if (value) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            value = closure_2.get() === closure_3.PANEL;
          }
          obj.requiresPop = value;
          result = set(obj);
          tmp14 = closure_7;
          tmp15 = closure_8;
          if (closure_7.get().mode === closure_8.FLOATING_DEFAULT) {
            tmp16 = closure_9;
            tmp17 = closure_10;
            tmp18 = closure_9(closure_10.lock);
          }
        }
        return;
      }
    }
    const items5 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
    VoicePanelUITsx11.__closure = items5;
    VoicePanelUITsx11.__workletHash = 12929415024717;
    VoicePanelUITsx11.__initData = tmp38;
    const items6 = [closure_2_39, , , , , , , , , , , , , , ];
    const onTouchesMove = onBegin(VoicePanelUITsx11).onTouchesMove;
    onBegin(VoicePanelUITsx11);
    items6[1] = tmp(tmp2[19]).State;
    items6[2] = sharedValue4;
    items6[3] = mode;
    items6[4] = tmp7;
    items6[5] = scrollPosition;
    items6[6] = closure_2_29;
    items6[7] = 10;
    items6[8] = focused;
    items6[9] = isDockEnabled2;
    items6[10] = tmp(tmp2[21]).scheduleOnRN;
    items6[11] = channelId2(tmp2[24]);
    items6[12] = channelId2(tmp2[22]);
    items6[13] = wrapperOffset;
    items6[14] = sharedValue1;
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
    let c11;
    let c12;
    let c13;
    [tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67] = items6;
    const tmp37 = closure_25;
    const tmp51 = scrollPosition;
    class VoicePanelUITsx12 {
      constructor(arg0, arg1) {
        if (arg0.state === closure_0.BEGAN) {
          obj4 = closure_1;
          if (!closure_1.get().active) {
            if (!obj4.get().cancel) {
              ({ absoluteY, absoluteX } = arg0.changedTouches[0]);
              diff = obj4.get().absoluteYStart - absoluteY;
              diff1 = obj4.get().absoluteXStart - absoluteX;
              tmp3 = globalThis;
              _Math = Math;
              _Math2 = Math;
              max = Math.max;
              _Math3 = Math;
              absolute = Math.abs(diff);
              maxResult = max(absolute, Math.abs(diff1));
              _Math4 = Math;
              _Math5 = Math;
              absolute1 = Math.abs(diff1);
              tmp7 = absolute1 >= Math.abs(diff);
              if (!tmp7) {
                num = 0;
                tmp7 = diff > 0;
              }
              tmp8 = arg1;
              obj = closure_2;
              if (closure_2.get() === closure_3.PANEL) {
                _Math6 = Math;
                tmp16 = closure_4;
                floor = Math.floor;
                num2 = 0;
                if (diff < 0) {
                  if (floor(closure_4.get()) <= 0) {
                    tmp23 = closure_5;
                    tmp24 = !closure_5;
                    if (closure_5) {
                      tmp25 = closure_6;
                      tmp24 = maxResult > closure_6;
                    }
                    flag = tmp24;
                  }
                }
                tmp17 = closure_7;
                value = closure_7.get();
                tmp19 = null;
                id = undefined;
                if (value != null) {
                  id = value.id;
                }
                tmp21 = null != id && tmp7;
                flag = false;
                if (tmp21) {
                  failResult = arg1.fail();
                  flag = false;
                }
              } else {
                tmp10 = closure_8;
                tmp11 = !closure_8 && obj.get() === tmp9.PIP;
                if (tmp11) {
                  tmp12 = closure_6;
                  tmp11 = maxResult > closure_6;
                }
                flag = false;
                if (tmp11) {
                  tmp13 = closure_9;
                  tmp14 = closure_10;
                  tmp15 = closure_9(closure_10);
                  flag = true;
                }
              }
              tmp26 = closure_11;
              if (flag) {
                tmp28 = closure_12;
                tmp26Result = tmp26(closure_12, { gestureActive: true });
                obj1 = { absoluteXStart: null, absoluteYStart: null, cancel: false, active: true, requiresPop: null };
                obj1.absoluteXStart = absoluteX;
                tmp30 = closure_4;
                set = obj4.set;
                obj1.absoluteYStart = absoluteY + closure_4.get();
                obj1.requiresPop = obj4.get().requiresPop;
                result = set(obj1);
                tmp32 = closure_13;
                flag2 = true;
                result1 = closure_13.set(true);
                activateResult = arg1.activate();
              } else {
                obj5 = { absoluteYStart: null, absoluteXStart: null };
                obj5.absoluteYStart = absoluteY;
                obj5.absoluteXStart = absoluteX;
                tmp26Result1 = tmp26(obj4, obj5);
              }
            }
          }
        }
        return;
      }
    }
    const items7 = [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67];
    VoicePanelUITsx12.__closure = items7;
    VoicePanelUITsx12.__workletHash = 13911459846835;
    VoicePanelUITsx12.__initData = tmp53;
    const items8 = [closure_2_40, tmp22, tmp34, tmp6, tmp7, , , , , , , , , , ];
    const onChange = onTouchesMove(VoicePanelUITsx12).onChange;
    onTouchesMove(VoicePanelUITsx12);
    items8[5] = channelId2(tmp2[22]);
    items8[6] = wrapperOffset;
    items8[7] = connected;
    items8[8] = sharedValue1;
    items8[9] = tmp51;
    items8[10] = 180;
    items8[11] = POP_RESISTANCE;
    items8[12] = tmp(tmp2[21]).scheduleOnRN;
    items8[13] = tmp(tmp2[25]).triggerHapticFeedback;
    items8[14] = tmp(tmp2[25]).HapticFeedbackTypes;
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
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    [tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83] = items8;
    class VoicePanelUITsx13 {
      constructor(arg0) {
        obj = closure_0;
        if (!closure_0.get().cancel) {
          tmp = arg0;
          tmp2 = closure_1;
          if (!tmp2) {
            tmp3 = closure_2;
            tmp4 = closure_3;
            if (closure_2.get() === closure_3.PIP) {
              tmp5 = closure_4;
              tmp6 = closure_5;
              point = { x: null, y: null };
              num = -1;
              point.x = -1 * (obj.get().absoluteXStart - arg0.absoluteX);
              point.y = -1 * (obj.get().absoluteYStart - arg0.absoluteY);
              tmp7 = closure_4(closure_5, point);
            }
          }
          num2 = -1;
          result = -1 * (obj.get().absoluteYStart - arg0.absoluteY);
          value = !tmp2;
          if (value) {
            tmp10 = closure_6;
            value = closure_6.get();
          }
          if (value) {
            value = !obj.get().requiresPop;
          }
          if (value) {
            num3 = 0;
            value = result <= 0;
          }
          if (value) {
            obj1 = {};
            set = obj.set;
            tmp11 = obj1;
            merged = Object.assign(obj.get());
            flag = true;
            obj1.requiresPop = true;
            result1 = set(obj1);
          }
          obj4 = closure_7;
          if (closure_7.get()) {
            num4 = 0;
            if (result < 0) {
              flag3 = false;
              result2 = obj4.set(false);
            }
            if (tmp2) {
              tmp31 = closure_6;
              diff = result;
              if (closure_6.get()) {
                tmp32 = closure_4;
                obj8 = { requiresPop: null };
                tmp33 = closure_9;
                obj8.requiresPop = result <= closure_9;
                tmp34 = closure_4(obj, obj8);
                diff = result;
              }
            } else {
              diff = result;
              if (obj.get().requiresPop) {
                tmp20 = globalThis;
                _Math = Math;
                num6 = 0;
                bound = Math.max(result, 0);
                tmp22 = closure_9;
                if (bound <= closure_9) {
                  tmp30 = closure_10;
                  diff = bound - bound * closure_10;
                } else {
                  obj9 = {};
                  set2 = obj.set;
                  tmp23 = obj9;
                  merged1 = Object.assign(obj.get());
                  flag4 = false;
                  obj9.requiresPop = false;
                  set2Result = set2(obj9);
                  tmp26 = closure_11;
                  tmp27 = closure_12;
                  tmp28 = closure_13;
                  tmp29 = closure_11(closure_12, closure_13.IMPACT_MEDIUM);
                  diff = result;
                }
              }
            }
            tmp35 = closure_4;
            tmp36 = closure_5;
            point1 = { y: null, x: 0 };
            point1.y = diff;
            tmp37 = closure_4(closure_5, point1);
          }
          value1 = obj4.get();
          tmp15 = !value1;
          if (tmp15) {
            tmp16 = closure_8;
            num5 = 0;
            tmp15 = closure_8.get() <= 0;
          }
          if (tmp15) {
            flag2 = true;
            result3 = obj4.set(true);
          }
        }
        return;
      }
    }
    const items9 = [tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83];
    VoicePanelUITsx13.__closure = items9;
    VoicePanelUITsx13.__workletHash = 4227301081340;
    VoicePanelUITsx13.__initData = tmp69;
    const items10 = [closure_2_41, tmp52, tmp22, , , , , ];
    const onTouchesCancelled = onChange(VoicePanelUITsx13).onTouchesCancelled;
    onChange(VoicePanelUITsx13);
    items10[3] = channelId2(tmp2[22]);
    items10[4] = isDockEnabled2;
    items10[5] = mode;
    items10[6] = tmp7;
    items10[7] = wrapperOffset;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    [tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92] = items10;
    class VoicePanelUITsx14 {
      constructor() {
        result = closure_0.set(false);
        active = closure_1.get().active;
        tmp2 = closure_2;
        tmp3 = closure_2(closure_1, { cancel: false, active: false });
        tmp4 = closure_3 && !active;
        if (tmp4) {
          tmp5 = closure_4;
          tmp6 = closure_5;
          tmp4 = closure_4.get() !== closure_5.PANEL;
        }
        if (!tmp4) {
          tmp7 = closure_6;
          tmp2Result = tmp2(closure_6, { gestureActive: false, x: 0, y: 0 });
        }
        return;
      }
    }
    const items11 = [tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92];
    VoicePanelUITsx14.__closure = items11;
    VoicePanelUITsx14.__workletHash = 9035609133030;
    VoicePanelUITsx14.__initData = tmp85;
    const items12 = [closure_2_42, tmp22, tmp34, tmp6, tmp7, tmp52, wrapperDimensions, tmp5, tmp36, 0.2, , , , , , , , , , , ];
    const onEnd = onTouchesCancelled(VoicePanelUITsx14).onEnd;
    onTouchesCancelled(VoicePanelUITsx14);
    items12[10] = tmp(tmp2[26]).SHEET_COMMIT_FLING_VELOCITY;
    items12[11] = tmp(tmp2[21]).scheduleOnRN;
    items12[12] = tmp(tmp2[25]).triggerHapticFeedback;
    items12[13] = tmp(tmp2[25]).HapticFeedbackTypes;
    items12[14] = committedMode;
    items12[15] = setMode;
    items12[16] = channelId2(tmp2[22]);
    items12[17] = dismissPanel2;
    items12[18] = tmp(tmp2[27]).calculatePIPPositionFromVelocity;
    items12[19] = tmp20;
    items12[20] = tmp21;
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
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    let c14;
    let c15;
    let c16;
    let c17;
    let c18;
    let c19;
    [tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114] = items12;
    class VoicePanelUITsx15 {
      constructor(arg0) {
        obj = closure_0;
        if (!closure_0.get().cancel) {
          tmp = arg0;
          velocityY = arg0.velocityY;
          tmp2 = closure_1;
          obj2 = closure_2;
          ({ velocityX, absoluteX, absoluteY } = arg0);
          value = closure_2.get();
          tmp4 = closure_3;
          if (closure_1) {
            if (value !== tmp4.PANEL) {
              tmp70 = closure_4;
              flag5 = false;
              result = closure_4.set(false);
              return;
            } else {
              tmp72 = closure_5;
              drawerHeight = closure_5.get().drawerHeight;
              num2 = 0;
              if (velocityY > 0) {
                tmp44 = closure_6;
                tmp46 = closure_7;
                value1 = closure_6.get();
                y = closure_7.get().y;
                tmp47 = closure_8;
                result1 = tmp73 * closure_8;
                if (value1) {
                  if (y <= result1) {
                    tmp54 = closure_9;
                  }
                  tmp60 = closure_10;
                  tmp61 = closure_11;
                  tmp62 = closure_12;
                  tmp63 = closure_10(closure_11, closure_12.IMPACT_MEDIUM);
                  tmp64 = closure_13;
                  result2 = closure_13.set(tmp4.PIP);
                  tmp66 = closure_14;
                  tmp67 = closure_10(closure_14, tmp4.PIP);
                  tmp68 = closure_15;
                  tmp69 = closure_15(tmp46, { gestureActive: false, x: 0, y: 0 });
                  return;
                } else if (y > result1) {
                  tmp49 = closure_15;
                  tmp50 = closure_15(tmp46, { gestureActive: false });
                  tmp51 = closure_10;
                  tmp52 = closure_16;
                  tmp53 = closure_10(closure_16);
                  return;
                }
              }
              tmp55 = closure_15;
              tmp56 = closure_7;
              tmp57 = closure_15(closure_7, { gestureActive: false, x: 0, y: 0 });
              tmp58 = closure_4;
              flag4 = false;
              result3 = closure_4.set(false);
              return;
            }
          } else if (value === tmp4.PIP) {
            tmp35 = closure_17;
            obj1 = { velocityX: null, velocityY: null, absoluteX: null, absoluteY: null, windowDimensions: null, safeArea: null };
            obj1.velocityX = velocityX;
            obj1.velocityY = velocityY;
            obj1.absoluteX = absoluteX;
            obj1.absoluteY = absoluteY;
            tmp36 = closure_18;
            obj1.windowDimensions = closure_18.get();
            tmp37 = closure_19;
            obj1.safeArea = closure_19.get();
            tmp38 = closure_17(obj1);
            tmp39 = closure_15;
            tmp40 = closure_5;
            obj5 = { pipX: null, pipY: null };
            ({ pipX: obj4.pipX, pipY: obj4.pipY } = tmp38);
            tmp41 = closure_15(closure_5, obj5);
            tmp42 = closure_7;
            tmp43 = closure_15(closure_7, { gestureActive: false });
          } else if (obj2.get() === tmp4.PANEL) {
            num = 0;
            if (velocityY > 0) {
              tmp10 = closure_6;
              if (closure_6.get()) {
                if (obj.get().requiresPop) {
                  tmp30 = closure_15;
                  tmp31 = closure_7;
                  tmp32 = closure_15(closure_7, { gestureActive: false, x: 0, y: 0 });
                  tmp33 = closure_4;
                  flag3 = false;
                  result4 = closure_4.set(false);
                } else {
                  tmp24 = closure_10;
                  tmp25 = closure_14;
                  tmp26 = closure_10(closure_14, tmp4.PIP);
                  tmp27 = closure_15;
                  tmp28 = closure_7;
                  tmp29 = closure_15(closure_7, { gestureActive: false, x: 0, y: 0 });
                }
              } else {
                tmp11 = closure_5;
                tmp13 = closure_7;
                diff = closure_5.get().drawerHeight - closure_5.get().drawerY;
                tmp14 = closure_8;
                if (closure_7.get().y > diff * closure_8) {
                  tmp19 = closure_15;
                  tmp20 = closure_15(tmp13, { gestureActive: false });
                  tmp21 = closure_10;
                  tmp22 = closure_16;
                  tmp23 = closure_10(closure_16);
                } else {
                  tmp15 = closure_15;
                  tmp16 = closure_15(tmp13, { gestureActive: false, x: 0, y: 0 });
                  tmp17 = closure_4;
                  flag2 = false;
                  result5 = closure_4.set(false);
                }
              }
            } else {
              tmp5 = closure_15;
              tmp6 = closure_7;
              tmp7 = closure_15(closure_7, { gestureActive: false, x: 0, y: 0 });
              tmp8 = closure_4;
              flag = false;
              result6 = closure_4.set(false);
            }
          }
        }
        return;
      }
    }
    const items13 = [tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114];
    VoicePanelUITsx15.__closure = items13;
    VoicePanelUITsx15.__workletHash = 13753432997753;
    VoicePanelUITsx15.__initData = tmp94;
    const items14 = [closure_2_43, tmp34, , , , , , , , ];
    const onFinalize = onEnd(VoicePanelUITsx15).onFinalize;
    onEnd(VoicePanelUITsx15);
    items14[2] = channelId2(tmp2[22]);
    items14[3] = sharedValue4;
    items14[4] = wrapperOffset;
    items14[5] = sharedValue1;
    items14[6] = tmp(tmp2[21]).scheduleOnRN;
    items14[7] = tmp37;
    items14[8] = mode;
    items14[9] = tmp7;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125] = items14;
    class VoicePanelUITsx16 {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp12 = closure_1;
          tmp13 = closure_2;
          tmp14 = closure_1(closure_2, { cancel: false, active: false });
          tmp15 = closure_3;
          tmp16 = closure_1(closure_3, { gestureActive: false });
          tmp17 = closure_4;
          flag = false;
          result = closure_4.set(false);
          tmp19 = closure_5;
          tmp20 = closure_6;
          tmp21 = closure_5(closure_6.unlock);
          return;
        } else {
          tmp2 = closure_3;
          num = 0;
          tmp3 = 0 !== closure_3.get().y;
          if (tmp3) {
            tmp4 = closure_7;
            tmp5 = closure_8;
            tmp3 = closure_7.get() === closure_8.PANEL;
          }
          if (!tmp3) {
            tmp6 = closure_1;
            tmp7 = closure_2;
            tmp8 = closure_1(closure_2, { cancel: false, active: false });
          }
          tmp9 = closure_5;
          tmp10 = closure_6;
          tmp11 = closure_5(closure_6.unlock);
          return;
        }
      }
    }
    const items15 = [tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125];
    VoicePanelUITsx16.__closure = items15;
    VoicePanelUITsx16.__workletHash = 8562338262861;
    VoicePanelUITsx16.__initData = tmp116;
    return Race(onStartResult, onFinalize(VoicePanelUITsx16));
  }, items16);
  const items17 = [closure_44, scrollPosition, dragScrolling];
  [tmp59, tmp60, tmp61] = items17;
  const obj9 = { onBeginDrag, onEndDrag, onMomentumEnd, onScroll };
  onBeginDrag = function onBeginDrag(contentOffset) {
    const result = _undefined.set(contentOffset.contentOffset.y);
    const result1 = _undefined2.set(true);
  };
  const items18 = [tmp60, tmp61];
  onBeginDrag.__closure = items18;
  onBeginDrag.__workletHash = 8633607408588;
  onBeginDrag.__initData = tmp59;
  const items19 = [closure_45, dragScrolling];
  [tmp62, tmp63] = items19;
  onEndDrag = function onEndDrag() {
    const result = _undefined.set(false);
  };
  const items20 = [tmp63];
  onEndDrag.__closure = items20;
  onEndDrag.__workletHash = 11956201505031;
  onEndDrag.__initData = tmp62;
  const items21 = [closure_46, dragScrolling];
  [tmp64, tmp65] = items21;
  onMomentumEnd = function onMomentumEnd() {
    const result = _undefined.set(false);
  };
  const items22 = [tmp65];
  onMomentumEnd.__closure = items22;
  onMomentumEnd.__workletHash = 4833992480478;
  onMomentumEnd.__initData = tmp64;
  const items23 = [closure_47, sharedValue1, sharedValue2, scrollPosition, , , , , , , ];
  const useAnimatedScrollHandler = tmp14(1655).useAnimatedScrollHandler;
  items23[4] = tmp14(1655).scrollTo;
  items23[5] = animatedRef;
  items23[6] = computeViewableChunksFromScrollPosition;
  items23[7] = windowDimensions;
  items23[8] = sharedValue;
  items23[9] = updateSharedValueIfChangedDefault;
  items23[10] = sharedValue3;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76] = items23;
  onScroll = function onScroll(contentOffset) {
    if (_undefined.get()) {
      if (!_undefined2.get()) {
        if (_undefined3.get() < 0) {
          const result = obj3.set(0);
        }
        const value = obj3.get();
        const _Math = Math;
        if (Math.abs(contentOffset.contentOffset.y - value) >= 0.1) {
          const result1 = obj2.set(true);
          _undefined4(c4, 0, value, false);
          const result2 = obj2.set(false);
        }
      }
    } else {
      let tmp;
      if (_undefined3.get() !== contentOffset.contentOffset.y) {
        const value2 = obj.get();
        tmp = _undefined5(value2, _undefined6.get().height, _undefined7.get());
      }
      const result3 = obj.set(contentOffset.contentOffset.y);
      if (null != tmp) {
        _undefined8(c9, tmp);
      }
    }
  };
  const items24 = [tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76];
  onScroll.__closure = items24;
  onScroll.__workletHash = 5096849357050;
  onScroll.__initData = tmp66;
  const items25 = [closure_48, mode];
  c0 = undefined;
  [tmp78, tmp79] = items25;
  const animatedScrollHandler = useAnimatedScrollHandler(obj9);
  const tmp14Result9 = tmp14(1655);
  class VoicePanelUITsx21 {
    constructor() {
      return _undefined.get();
    }
  }
  const items26 = [tmp79];
  VoicePanelUITsx21.__closure = items26;
  VoicePanelUITsx21.__workletHash = 2093664361167;
  VoicePanelUITsx21.__initData = tmp78;
  const items27 = [closure_49, tmp29, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp80, tmp81, tmp82] = items27;
  class VoicePanelUITsx22 {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        if (arg0 === _undefined.PANEL) {
          if (arg1 === _undefined.PIP) {
            const result = _undefined2.set(false);
          }
        }
        if (arg0 === _undefined.PIP) {
          const result1 = _undefined2.set(true);
        }
      }
    }
  }
  const items28 = [tmp81, tmp82];
  VoicePanelUITsx22.__closure = items28;
  VoicePanelUITsx22.__workletHash = 13562682085354;
  VoicePanelUITsx22.__initData = tmp80;
  const animatedReaction1 = tmp14Result9.useAnimatedReaction(VoicePanelUITsx21, VoicePanelUITsx22);
  const tmp14Result10 = tmp14(5902);
  const token = tmp14Result10.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const items29 = [closure_50, mode, tmp29, focused, sharedValue1, , , ];
  const useAnimatedProps = tmp14(1655).useAnimatedProps;
  tmp14(1655);
  items29[5] = calculateVoicePanelHeaderSpecsDefault;
  items29[6] = safeArea;
  items29[7] = token;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93] = items29;
  class VoicePanelUITsx23 {
    constructor() {
      let rect;
      let value;
      const tmp = _undefined.get() === _undefined2.PIP;
      const tmp2 = tmp || null != _undefined3.get();
      let str = "auto";
      if (tmp) {
        str = "none";
      }
      const obj = { pointerEvents: str, scrollEnabled: !tmp2, showsVerticalScrollIndicator: !value && !tmp2, scrollIndicatorInsets: rect };
      value = _undefined4.get();
      rect = { top: _undefined5(_undefined6.get(), c6).height - _undefined6.get().top, bottom: _undefined6.get().bottom };
      return obj;
    }
  }
  const items30 = [tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93];
  VoicePanelUITsx23.__closure = items30;
  VoicePanelUITsx23.__workletHash = 8373057512913;
  VoicePanelUITsx23.__initData = tmp86;
  const items31 = [sharedValue];
  const animatedProps = useAnimatedProps(VoicePanelUITsx23);
  const callback4 = obj.useCallback((arg0, arg1) => {
    const result = sharedValue.set(arg1);
  }, items31);
  const items32 = [closure_51, isDockConnected, sheetExitProgress, dockJoinMorphOrigin, windowDimensions, dockMinimizeProgress, mode, tmp29, connected, sharedValue4, wrapperDimensions, wrapperOffset];
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
  let c10;
  [tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107] = items32;
  const tmp14Result12 = tmp14(1655);
  class VoicePanelUITsx24 {
    constructor() {
      if (_undefined.get()) {
        const diff = 1 - _undefined2.get();
        const value = _undefined3.get();
        if (null != value) {
          const height2 = _undefined4.get().height;
          const _Math3 = Math;
          const _Math4 = Math;
          const bound = Math.min(Math.max((height2 - value.y) / height2, 0), 1);
          return bound * (1 - _undefined5.get()) * diff;
        } else {
          return (1 - _undefined5.get()) * diff;
        }
      } else {
        const value2 = _undefined6.get();
        if (_undefined7.PIP !== value2) {
          if (_undefined7.DISMISSED !== value2) {
            if (_undefined8.get()) {
              const obj = _undefined9;
              if (_undefined9.get().active) {
                if (obj.get().requiresPop) {
                  return 1;
                }
              }
            }
            const sum = _undefined10.get().drawerY + _undefined11.get().y;
            const height = _undefined4.get().height;
            const _Math = Math;
            const _Math2 = Math;
            return Math.min(Math.max((height - sum) / height, 0), 1);
          }
        }
        return 0;
      }
    }
  }
  const items33 = [tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107];
  VoicePanelUITsx24.__closure = items33;
  VoicePanelUITsx24.__workletHash = 13886774489991;
  VoicePanelUITsx24.__initData = tmp96;
  const derivedValue = tmp14Result12.useDerivedValue(VoicePanelUITsx24);
  const tmp110 = closure_19;
  const tmp111 = closure_18;
  const obj10 = { children: items34 };
  const tmp109 = useControlsHoverGestureDefault();
  const obj11 = { zIndex: 2, children: closure_18(tmp2Result, obj12) };
  const LayerScope = tmp14(5916).LayerScope;
  obj12 = { wrapperOffset, gestureState: sharedValue4, layout: voicePanelLayoutTransitionDefault };
  tmp2Result = VoicePanelHeaderDefault;
  items34 = [closure_18(LayerScope, obj11), , ];
  const obj13 = { gesture: memo1, children: closure_18(View, obj14) };
  const GestureDetector = tmp14(5598).GestureDetector;
  obj14 = { style: StyleSheet.absoluteFill, layout: voicePanelLayoutTransitionDefault, collapsable: false, children: closure_18(GestureDetector2, obj15) };
  View = module_1655.View;
  obj15 = { gesture: memo, children: closure_19(closure_28, obj16) };
  obj16 = { layout: scrollViewLayoutTransition, ref: animatedRef, onScroll: animatedScrollHandler, onMomentumScrollEnd: NOOP, animatedProps, style: tmp.scrollView, onContentSizeChange: callback4, contentContainerStyle: tmp.scrollViewContent, scrollEventThrottle: 8.333333333333334, children: items35 };
  GestureDetector2 = tmp14(5598).GestureDetector;
  items35 = [closure_18(VoicePanelCardViewDefault, { viewableChunks: sharedValue3 }), closure_18(VoicePanelPreJoinContentDefault, {})];
  items34[1] = closure_18(GestureDetector, obj13);
  items34[2] = closure_18(VoicePanelVoiceChannelAppDefault, {});
  const tmp113 = closure_19(closure_20, obj10);
  const effect = obj.useEffect(() => closure_1(true), []);
  let tmp111Result2 = null;
  if (first) {
    const obj17 = { value: analyticsLocations, children: tmp110(LayerScope2, obj23) };
    const AnalyticsLocationProvider = tmp14(7918).AnalyticsLocationProvider;
    LayerScope2 = tmp14(5916).LayerScope;
    const items36 = [tmp111(VoicePanelSystemUIManagerDefault, {}), , ];
    const tmp116 = closure_67;
    const obj18 = { opacity: derivedValue, onPress: dismissPanel };
    items36[1] = tmp111(closure_67, obj18);
    const obj19 = { gesture: tmp109, children: tmp110(tmp2Result2, obj20) };
    const GestureDetector3 = tmp14(5598).GestureDetector;
    const tmp118 = globalThis;
    let _HermesInternal = HermesInternal;
    let str = "voice-panel-ui-";
    obj20 = { style: tmp.accessibilityView, nativeID: "voice-panel-ui-" + channelId, accessibilityViewIsModal: true, layout: voicePanelLayoutTransitionDefault, onAccessibilityEscape: closeVoicePanelsDefault, children: items37 };
    tmp2Result2 = VoicePanelAccessibilityViewDefault;
    items37 = [tmp111(VoicePanelDismissableContentDefault, {}), , , ];
    const obj21 = { wrapperOffset, children: tmp111Result };
    tmp111Result = tmp113;
    const tmp119 = AnimatedWrapper;
    if (isDockEnabled) {
      const obj22 = { children: tmp113 };
      tmp111Result = tmp111(tmp14(19980).VoicePanelContentWithDock, obj22);
    }
    items37[1] = tmp111(tmp119, obj21);
    obj23 = { children: items36 };
    items37[2] = tmp111(tmp2(isDockEnabled ? 20052 : 20061), {});
    const obj24 = { gestureState: sharedValue4 };
    items37[3] = tmp111(VoicePanelControlsDefault, obj24);
    items36[2] = tmp111(GestureDetector3, obj19);
    tmp111Result2 = tmp111(AnalyticsLocationProvider, obj17);
  }
  return tmp111Result2;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default memoResult;
export const REDUCED_MOTION_OPACITY_PHYSICS = obj3;
