// Module ID: 19198
// Function ID: 19199
// Name: VoicePanelUI
// Dependencies: [32, 19, 17, 6843, 8864, 6875, 11223, 11221, 5681, 11224, 21, 3, 5637, 5014, 575, 5095, 1622, 11222, 1625, 5303, 10089, 11227, 19199, 19200, 5260, 11249, 19107, 5596, 11229, 11857, 19197, 19184, 12271, 5874, 19201, 6541, 19204, 7241, 7326, 7351, 1259, 19206, 5611, 19207, 19239, 19269, 19273, 19276, 19277, 10929, 19278, 19280, 19288, 2]

// Module 19198 (VoicePanelUI)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5095 */;
import spring from "spring" /* 5637 */;
import CallConstants from "CallConstants" /* 5681 */;
import ExternalPipDefault from "ExternalPip" /* 5874 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7241 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 10089 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11224 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11227 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11229 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12271 */;
import PanelSizeUtils from "PanelSizeUtils" /* 19184 */;
import useControlsLockDefault from "useControlsLock" /* 19199 */;
import VoicePanelDockSheet from "VoicePanelDockSheet" /* 19201 */;
import useControlsHoverGestureDefault from "useControlsHoverGesture" /* 19206 */;
import VoicePanelHeaderDefault from "VoicePanelHeader" /* 19207 */;
import VoicePanelCardViewDefault from "VoicePanelCardView" /* 19239 */;
import VoicePanelPreJoinContentDefault from "VoicePanelPreJoinContent" /* 19269 */;
import VoicePanelVoiceChannelAppDefault from "VoicePanelVoiceChannelApp" /* 19273 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import AppFreezeStore from "AppFreezeStore" /* 8864 */;
import VoicePanelStore from "VoicePanelStore" /* 6875 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let dependencyMap, set, set2, tmp6;

let DEFAULT_BORDER_RADIUS;
let DRAWER_SPRING_PHYSICS;
let MODE_CHANGE_PHYSICS;
let ScrollView;
let VOICE_PANEL_CHUNK_DIVISOR;
let c10;
let closure_21;
let closure_22;
let closure_23;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj7;
let obj8;
let obj9;
let tmp2;
const closeVoicePanelsDefault = tmp2(10929);
const VoicePanelSystemUIManagerDefault = tmp2(19276);
const VoicePanelAccessibilityViewDefault = tmp2(19277);
const VoicePanelDismissableContentDefault = tmp2(19278);
const VoicePanelPIPDefault = tmp2(19280);
const VoicePanelControlsDefault = tmp2(19288);
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function AnimatedWrapper(wrapperOffset) {
  let closure_2;
  let connected;
  let height;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj19;
  let tmp35;
  let tmpResult3;
  let wrapperRootStyles;
  let wrapperSurfaceStyles;
  let wrapperTransformStyles;
  wrapperOffset = wrapperOffset.wrapperOffset;
  let obj = connected;
  let tmp = height;
  const children = wrapperOffset.children;
  const context = connected.useContext(height(11222));
  const isDockEnabled = context.isDockEnabled;
  const handleDockSheetLayout = context.handleDockSheetLayout;
  let tmp4 = closure_33();
  const tmp5 = height(19204);
  connected = undefined;
  let animatedStyle;
  let dockSheetSurfaceFills;
  let animatedStyle1;
  let animatedStyle2;
  const tmp5Result = tmp5(wrapperOffset(575).Shadow.SHADOW_TOP_HIGH);
  obj2 = wrapperOffset(11857);
  height = obj2.useGlobalStatusIndicatorState().height;
  let tmp8 = closure_33();
  dependencyMap = tmp8;
  const context1 = connected.useContext(height(11222));
  const wrapperDimensions = context1.wrapperDimensions;
  connected = context1.connected;
  const controlsSpecs = context1.controlsSpecs;
  const dockEntryProgress = context1.dockEntryProgress;
  const dockHeight = context1.dockHeight;
  const dockPressProgress = context1.dockPressProgress;
  const focused = context1.focused;
  const isDockConnected = context1.isDockConnected;
  const isDockEnabled2 = context1.isDockEnabled;
  const dockJoinMorphOrigin = context1.dockJoinMorphOrigin;
  const dockMinimizeProgress = context1.dockMinimizeProgress;
  const mode = context1.mode;
  const preJoinContentSize = context1.preJoinContentSize;
  const safeArea = context1.safeArea;
  const sheetExitProgress = context1.sheetExitProgress;
  const windowDimensions = context1.windowDimensions;
  const useReducedMotion = context1.useReducedMotion;
  let obj3 = wrapperOffset(5095);
  const fn = function n() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 3576504626753;
  fn.__initData = __initData15;
  const derivedValue = obj3.useDerivedValue(fn);
  obj4 = wrapperOffset(19197);
  const pIPState = obj4.usePIPState();
  let obj5 = wrapperOffset(5095);
  const fn2 = function c() {
    const obj = { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
    return obj;
  };
  fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
  fn2.__workletHash = 6530348778352;
  fn2.__initData = __initData16;
  const fn3 = function s(safeAreaState, windowHeight) {
    let controlsHeight;
    let drawerX;
    let drawerY;
    let globalStatusIndicatorHeight;
    let modeToSet;
    let windowWidth;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = windowHeight;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
      ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
      ({ controlsHeight, preJoinContentSize, globalStatusIndicatorHeight } = safeAreaState);
      let tmp8 = null == windowHeight;
      if (!tmp8) {
        tmp8 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
      }
      const value = wrapperDimensions.get();
      ({ drawerX, drawerY } = value);
      const diff = windowHeight - globalStatusIndicatorHeight;
      if (modeToSet === VoicePanelModes.PANEL) {
        if (connected) {
          obj2 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp8, mode: modeToSet };
          updateSharedValueIfChangedDefault(wrapperDimensions, obj2);
          updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
        } else {
          const obj3 = { windowWidth, connected, safeAreaLeft: null, safeAreaRight: null };
          ({ left: obj6.safeAreaLeft, right: obj6.safeAreaRight } = safeArea);
          const tmpResult = PanelSizeUtils;
          const maxPanelWidth = tmpResult.getMaxPanelWidth(obj3);
          const tmpResult2 = PanelSizeUtils;
          const panelX = tmpResult2.getPanelX(windowWidth, maxPanelWidth);
          const _Math = Math;
          const tmp28 = roundToNearestPixelDefault;
          obj4 = { drawerWidth: maxPanelWidth, drawerHeight: diff, drawerX: panelX, drawerY: tmp28(Math.max(diff - preJoinContentSize - controlsHeight - safeArea.bottom, diff - 0.8 * diff)), animated: tmp8, mode: modeToSet };
          tmp28(Math.max(diff - preJoinContentSize - controlsHeight - safeArea.bottom, diff - 0.8 * diff));
          updateSharedValueIfChangedDefault(wrapperDimensions, obj4);
        }
      } else {
        if (modeToSet === VoicePanelModes.PIP) {
          const tmp12 = isDockEnabled2;
          if (tmp12) {
            const obj5 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp8, mode: modeToSet };
            updateSharedValueIfChangedDefault(wrapperDimensions, obj5);
          }
        }
        if (modeToSet === VoicePanelModes.DISMISSED) {
          const tmp13 = isDockEnabled2 && wrapperDimensions.get().mode === VoicePanelModes.PIP;
          if (!connected) {
            let tmp18;
            if (!tmp13) {
              const obj7 = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
              const tmp15 = updateSharedValueIfChangedDefault;
              tmp15(wrapperDimensions, obj7);
              tmp18 = importDefault;
            }
            tmp18(11227)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
          }
          const obj8 = { mode: modeToSet };
          updateSharedValueIfChangedDefault(wrapperDimensions, obj8);
          tmp18 = importDefault;
        }
      }
    }
  };
  let obj6 = { cheapWorkletShallowEqual: wrapperOffset(10089).cheapWorkletShallowEqual, VoicePanelModes: preJoinContentSize, isDockEnabled: isDockEnabled2, wrapperDimensions, updateSharedValueIfChanged: height(11227), wrapperOffset, getMaxPanelWidth: wrapperOffset(19184).getMaxPanelWidth, getPanelX: wrapperOffset(19184).getPanelX, roundToNearestPixel: height(12271), windowDimensions };
  fn3.__closure = obj6;
  fn3.__workletHash = 2786627914150;
  fn3.__initData = __initData17;
  const animatedReaction = obj5.useAnimatedReaction(fn2, fn3);
  let obj7 = wrapperOffset(5095);
  class R {
    constructor() {
      let drawerX;
      let drawerY;
      let gestureActive2;
      let items;
      let obj11;
      let y;
      const value = useReducedMotion.get();
      let gestureActive = !value;
      if (gestureActive) {
        gestureActive = wrapperDimensions.get().animated;
      }
      if (!gestureActive) {
        gestureActive = wrapperOffset.get().gestureActive;
      }
      let obj = wrapperOffset;
      const value4 = wrapperOffset.get();
      ({ gestureActive: gestureActive2, y } = value4);
      const x = value4.x;
      const value5 = wrapperDimensions.get();
      ({ drawerY, drawerX } = value5);
      const value6 = connected.get();
      let tmp7 = !value6;
      obj2 = wrapperDimensions;
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
      class VoicePanelUITsx31 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_1_14;
            tmp3 = preJoinContentSize;
            tmp = closure_1_14.get() !== preJoinContentSize.DISMISSED;
          }
          if (tmp) {
            tmp4 = wrapperOffset;
            tmp5 = closure_2;
            obj = wrapperOffset(closure_2[15]);
            tmp6 = height;
            tmp7 = obj.runOnJS(height(closure_2[33]).updateSourceTrackingView)();
          }
          return;
        }
      }
      VoicePanelUITsx31.__closure = { mode, VoicePanelModes, runOnJS: ReanimatedRexport2.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView };
      VoicePanelUITsx31.__workletHash = 2447720515661;
      VoicePanelUITsx31.__initData = __initData;
      let dockSheetTransform = null;
      ({ mode, VoicePanelModes, runOnJS: ReanimatedRexport2.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView });
      if (isDockEnabled2) {
        obj4 = { connected: isDockConnected.get(), progress: dockMinimizeProgress.get(), wrapperDimensions: obj2.get(), dockHeight: dockHeight.get(), dockJoinMorphOrigin: dockJoinMorphOrigin.get(), dockEntryProgress: dockEntryProgress.get(), sheetExitProgress: sheetExitProgress.get(), dockPressProgress: dockPressProgress.get() };
        const getDockSheetTransform = VoicePanelDockSheet.getDockSheetTransform;
        VoicePanelDockSheet;
        dockSheetTransform = getDockSheetTransform(obj4);
      }
      if (null != dockSheetTransform) {
        const obj5 = { transform: items };
        items = [{ translateX: dockSheetTransform.translateX }, , ];
        const obj6 = { translateX: dockSheetTransform.translateX };
        const obj7 = { translateY: dockSheetTransform.translateY };
        items[1] = obj7;
        const obj8 = { scale: dockSheetTransform.scale };
        items[2] = obj8;
        obj11 = obj5;
      } else {
        let items3;
        const withSpring2 = spring.withSpring;
        const tmp11Result3 = spring;
        let str = "animate-never";
        let str2 = "animate-never";
        const tmp23 = obj.get().gestureActive ? DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE : obj4;
        if (gestureActive) {
          str2 = "animate-always";
        }
        const items1 = [{ translateX: withSpring2(sum1, tmp23, str2, VoicePanelUITsx31) }, ];
        const obj9 = { translateX: withSpring2(sum1, tmp23, str2, VoicePanelUITsx31) };
        const withSpring = spring.withSpring;
        const tmp11Result4 = spring;
        const tmp30 = obj.get().gestureActive ? DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE : obj4;
        if (gestureActive) {
          str = "animate-always";
        }
        const obj10 = { translateY: withSpring(sum, tmp30, str, VoicePanelUITsx31) };
        class VoicePanelUITsx31 {
          constructor(arg0) {
            tmp = arg0;
            if (tmp) {
              tmp2 = closure_1_14;
              tmp3 = preJoinContentSize;
              tmp = closure_1_14.get() !== preJoinContentSize.DISMISSED;
            }
            if (tmp) {
              tmp4 = wrapperOffset;
              tmp5 = closure_2;
              obj = wrapperOffset(closure_2[15]);
              tmp6 = height;
              tmp7 = obj.runOnJS(height(closure_2[33]).updateSourceTrackingView)();
            }
            return;
          }
        }
        items1[1] = obj10;
        if (isDockEnabled2) {
          const items2 = [{ scale: 1 }];
          items3 = items2;
        } else {
          items3 = [];
        }
        obj11 = { transform: items1 };
        HermesBuiltin.arraySpread(items1, items3, 2);
      }
      return obj11;
    }
  }
  let obj8 = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: preJoinContentSize, runOnJS: wrapperOffset(5095).runOnJS, updateSourceTrackingView: height(5874).updateSourceTrackingView, isDockEnabled: isDockEnabled2, getDockSheetTransform: wrapperOffset(19201).getDockSheetTransform, isDockConnected, dockMinimizeProgress, dockHeight, dockJoinMorphOrigin, dockEntryProgress, sheetExitProgress, dockPressProgress, withSpring: wrapperOffset(5637).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: sheetExitProgress, DRAWER_SIZE_PHYSICS: obj4 };
  R.__closure = obj8;
  R.__workletHash = 1655956175061;
  R.__initData = __initData18;
  animatedStyle = obj7.useAnimatedStyle(R);
  let obj9 = wrapperOffset(19201);
  dockSheetSurfaceFills = obj9.useDockSheetSurfaceFills();
  let obj10 = wrapperOffset(5095);
  class J {
    constructor() {
      let dockSheetSurfaceStyle;
      let str;
      const tmp = isDockEnabled2;
      if (tmp) {
        const obj = { connected: isDockConnected.get(), dockPressProgress: dockPressProgress.get(), dockJoinMorphOrigin: dockJoinMorphOrigin.get(), mode: mode.get(), sheetMorphProgress: 1 - dockMinimizeProgress.get(), wrapperDimensions: wrapperDimensions.get() };
        const getDockSheetSurfaceStyle = VoicePanelDockSheet.getDockSheetSurfaceStyle;
        VoicePanelDockSheet;
        dockSheetSurfaceStyle = getDockSheetSurfaceStyle(obj, dockSheetSurfaceFills);
      } else {
        dockSheetSurfaceStyle = { width: wrapperDimensions.get().drawerWidth, height: wrapperDimensions.get().drawerHeight, pointerEvents: str };
        str = "none";
        if (mode.get() === VoicePanelModes.PANEL) {
          str = "auto";
        }
      }
      return dockSheetSurfaceStyle;
    }
  }
  let obj11 = { isDockEnabled: isDockEnabled2, getDockSheetSurfaceStyle: wrapperOffset(19201).getDockSheetSurfaceStyle, isDockConnected, dockPressProgress, dockJoinMorphOrigin, mode, dockMinimizeProgress, wrapperDimensions, dockSurfaceFills: dockSheetSurfaceFills, VoicePanelModes: preJoinContentSize };
  J.__closure = obj11;
  J.__workletHash = 14748671783030;
  J.__initData = __initData20;
  animatedStyle1 = obj10.useAnimatedStyle(J);
  const obj12 = wrapperOffset(5095);
  class U {
    constructor() {
      let getDockSheetShadowOpacity;
      let obj3;
      let str;
      let value;
      const tmp = isDockEnabled2;
      if (tmp) {
        obj2 = { opacity: getDockSheetShadowOpacity(value, 1 - dockMinimizeProgress.get()) };
        obj4 = { connected: isDockConnected.get(), dockJoinMorphOrigin: dockJoinMorphOrigin.get(), sheetMorphProgress: 1 - dockMinimizeProgress.get(), wrapperDimensions: wrapperDimensions.get() };
        const getDockSheetShape = VoicePanelDockSheet.getDockSheetShape;
        VoicePanelDockSheet;
        const merged = Object.assign(getDockSheetShape(obj4));
        getDockSheetShadowOpacity = VoicePanelDockSheet.getDockSheetShadowOpacity;
        VoicePanelDockSheet;
        value = dockPressProgress.get();
        return obj2;
      } else {
        const value2 = mode.get();
        const obj = connected;
        if (typeof computeBorderRadii === "function") {
          let num;
          if (value2 === VoicePanelModes.PIP) {
            num = DEFAULT_BORDER_RADIUS_PIP;
          } else {
            num = 0;
            if (!tmp5) {
              num = DEFAULT_BORDER_RADIUS;
            }
          }
          const obj5 = { borderRadius: obj3.withSpring(num, authStore), backgroundColor: str };
          str = "transparent";
          obj3 = spring;
          if (!obj.get()) {
            str = closure_2.maskDefaultBackground.backgroundColor;
          }
          return obj5;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  U.__closure = { isDockEnabled: isDockEnabled2, getDockSheetShape: wrapperOffset(19201).getDockSheetShape, isDockConnected, dockJoinMorphOrigin, dockMinimizeProgress, wrapperDimensions, getDockSheetShadowOpacity: wrapperOffset(19201).getDockSheetShadowOpacity, dockPressProgress, computeBorderRadii, mode, connected, withSpring: wrapperOffset(5637).withSpring, BORDER_RADIUS_PHYSICS: isDockConnected, styles: tmp8 };
  U.__workletHash = 13910949523845;
  U.__initData = __initData21;
  ({ isDockEnabled: isDockEnabled2, getDockSheetShape: wrapperOffset(19201).getDockSheetShape, isDockConnected, dockJoinMorphOrigin, dockMinimizeProgress, wrapperDimensions, getDockSheetShadowOpacity: wrapperOffset(19201).getDockSheetShadowOpacity, dockPressProgress, computeBorderRadii, mode, connected, withSpring: wrapperOffset(5637).withSpring, BORDER_RADIUS_PHYSICS: isDockConnected, styles: tmp8 });
  animatedStyle2 = obj12.useAnimatedStyle(U);
  if (!wrapperOffset(6541).isStable) {
    const tmp6Result = wrapperOffset(5095);
    class W {
      constructor() {
        return windowDimensions.get();
      }
    }
    const obj14 = { windowDimensions };
    W.__closure = obj14;
    let num = 7828684875250;
    W.__workletHash = 7828684875250;
    let tmp18 = __initData22;
    W.__initData = __initData22;
    class F {
      constructor(arg0) {
        const obj = wrapperOffset(closure_2[15]);
        const runOnJSResult = obj.runOnJS(log);
        runOnJSResult("Window dimensions changed:", JSON.stringify(arg0));
      }
    }
    const useAnimatedReaction = tmp6Result.useAnimatedReaction;
    F.__closure = { runOnJS: wrapperOffset(5095).runOnJS, log };
    F.__workletHash = 16968320948483;
    F.__initData = __initData23;
    const obj15 = { runOnJS: wrapperOffset(5095).runOnJS, log };
    const animatedReaction1 = useAnimatedReaction(W, F);
    const tmp6Result2 = wrapperOffset(5095);
    class X {
      constructor() {
        return wrapperDimensions.get();
      }
    }
    const obj16 = { wrapperDimensions };
    X.__closure = obj16;
    X.__workletHash = 14691592383856;
    let tmp23 = __initData24;
    X.__initData = __initData24;
    class N {
      constructor(arg0) {
        const obj = wrapperOffset(closure_2[15]);
        const runOnJSResult = obj.runOnJS(log);
        runOnJSResult("Wrapper dimensions changed:", JSON.stringify(arg0));
      }
    }
    const useAnimatedReaction2 = tmp6Result2.useAnimatedReaction;
    N.__closure = { runOnJS: wrapperOffset(5095).runOnJS, log };
    N.__workletHash = 13591095165246;
    N.__initData = __initData25;
    const obj17 = { runOnJS: wrapperOffset(5095).runOnJS, log };
    const animatedReaction2 = useAnimatedReaction2(X, N);
  }
  let items = [tmp8.wrapper, animatedStyle1, animatedStyle2, animatedStyle];
  const memo = obj.useMemo(() => ({ wrapperRootStyles: closure_2.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1, wrapperSurfaceLayerStyles: animatedStyle2 }), items);
  const wrapperSurfaceLayerStyles = memo.wrapperSurfaceLayerStyles;
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = memo);
  const obj18 = { style: wrapperRootStyles, pointerEvents: "box-none", children: tmp29(tmpResult3, obj19) };
  let tmpResult = tmp(7241);
  let tmp27Result = null;
  obj19 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: items1 };
  tmpResult3 = tmp(7241);
  if (isDockEnabled) {
    const obj20 = { style: tmp32, pointerEvents: "none" };
    class W {
      constructor() {
        return windowDimensions.get();
      }
    }
    tmp32[0] = tmp4.dockSurfaceShadow;
    const obj21 = { boxShadow: tmp5Result };
    tmp32[1] = obj21;
    tmp32[2] = wrapperSurfaceLayerStyles;
    tmp27Result = tmp27(tmp(7241), obj20);
  }
  items1 = [tmp27Result, ];
  let dockSurfaceClip = null;
  const tmpResult4 = tmp(7241);
  if (isDockEnabled) {
    dockSurfaceClip = tmp4.dockSurfaceClip;
  }
  const obj22 = { style: items2, onLayout: tmp35, layout: layoutTransition, children: items4 };
  items2 = [dockSurfaceClip, wrapperSurfaceStyles];
  tmp35 = undefined;
  if (isDockEnabled) {
    tmp35 = handleDockSheetLayout;
  }
  let tmp27Result2 = null;
  if (!isDockEnabled) {
    const obj23 = { style: items3, pointerEvents: "none" };
    class W {
      constructor() {
        return windowDimensions.get();
      }
    }
    items3 = [controlsSpecs.absoluteFill, wrapperSurfaceLayerStyles];
    tmp27Result2 = tmp27(tmp(7241), obj23);
  }
  items4 = [tmp27Result2, children];
  items1[1] = animatedStyle(tmpResult4, obj22);
  return pIPState(tmpResult, obj18);
}
const StyleSheet = react_native.StyleSheet;
({ Pressable: metroRequire, ScrollView } = react_native);
({ BORDER_RADIUS_PHYSICS: c10, DEFAULT_BORDER_RADIUS } = VoicePanelConstants);
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelConstants.DEFAULT_BORDER_RADIUS_PIP;
({ DRAWER_SPRING_PHYSICS, IS_IOS: map1, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const LAYOUT_PHYSICS = VoicePanelConstants.LAYOUT_PHYSICS;
const DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = VoicePanelConstants.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const POP_RESISTANCE = MorphablePanelConstants.POP_RESISTANCE;
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = Fragment);
let c25 = 0.2;
let tmp5 = new LoggerDefault("VoicePanelUI");
log = tmp5;
function layoutTransition(id) {
  let obj3;
  let obj5;
  let obj6;
  const obj = { animations: size, initialValues: { originX: id.currentOriginX, originY: id.currentOriginY, width: id.currentWidth, height: id.currentHeight } };
  size = { originX: obj3.withSpring(id.targetOriginX, LAYOUT_PHYSICS, "respect-motion-settings"), originY: obj4.withSpring(id.targetOriginY, LAYOUT_PHYSICS, "respect-motion-settings"), width: obj5.withSpring(id.targetWidth, LAYOUT_PHYSICS, "respect-motion-settings"), height: obj6.withSpring(id.targetHeight, LAYOUT_PHYSICS, "respect-motion-settings") };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
let obj = { withSpring: spring.withSpring, LAYOUT_PHYSICS };
layoutTransition.__closure = obj;
layoutTransition.__workletHash = 16293847539255;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'respect-motion-settings'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'respect-motion-settings'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'respect-motion-settings'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'respect-motion-settings')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj2 = { damping: 0 };
let merged = Object.assign(LAYOUT_PHYSICS);
function scrollViewLayoutTransition(originX) {
  let obj3;
  let obj5;
  let obj6;
  const obj = { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  size = { originX: obj3.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "respect-motion-settings"), originY: obj4.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "respect-motion-settings"), width: obj5.withSpring(originX.targetWidth, obj2, "respect-motion-settings"), height: obj6.withSpring(originX.targetHeight, obj2, "respect-motion-settings") };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
let obj3 = { withSpring: spring.withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2 };
scrollViewLayoutTransition.__closure = obj3;
scrollViewLayoutTransition.__workletHash = 10653209622652;
scrollViewLayoutTransition.__initData = { code: "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'respect-motion-settings'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'respect-motion-settings'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'respect-motion-settings'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'respect-motion-settings')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj4 = { mass: 0.3, damping: 100, stiffness: 100 };
let merged1 = Object.assign(DRAWER_SPRING_PHYSICS);
let obj5 = { mass: 2 };
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
function computeViewableChunksFromScrollPosition(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  const rounded = Math.ceil(arg1 / VOICE_PANEL_CHUNK_DIVISOR);
  const sum = Math.max(Math.floor(arg0 / rounded) - num, 0) + VOICE_PANEL_CHUNK_DIVISOR + 2 * num;
  const minResult = min(sum, Math.ceil(arg2 / rounded));
  const obj = { start: Math.max(minResult - VOICE_PANEL_CHUNK_DIVISOR - 2 * num, 0), end: minResult };
  return obj;
}
computeViewableChunksFromScrollPosition.__closure = { VOICE_PANEL_CHUNK_DIVISOR };
computeViewableChunksFromScrollPosition.__workletHash = 3008066799757;
computeViewableChunksFromScrollPosition.__initData = { code: "function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}" };
let createStyles = createStyles_mod;
let obj6 = { accessibilityView: obj7, wrapper: obj8, maskDefaultBackground: obj9, dockSurfaceClip: { overflow: "hidden" }, dockSurfaceShadow: { position: "absolute", top: 0, left: 0 }, scrollView: obj10, scrollViewContent: { flexGrow: 1, flexShrink: 0 }, shade: obj11, shadePressable: { flexGrow: 1 } };
obj7 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = { alignItems: "flex-start", zIndex: 1 };
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj10 = { borderTopLeftRadius: DEFAULT_BORDER_RADIUS, borderTopRightRadius: DEFAULT_BORDER_RADIUS };
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj11 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let closure_33 = createStyles(obj6);
let closure_34 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let closure_35 = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
let __initData2 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
const __initData3 = { code: "function VoicePanelUITsx6(){const{mode}=this.__closure;return mode.get();}" };
const __initData4 = { code: "function VoicePanelUITsx7(mode,previous){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode===VoicePanelModes.DISMISSED&&previous!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData5 = { code: "function VoicePanelUITsx8(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData6 = { code: "function VoicePanelUITsx9(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_42 = { code: "function VoicePanelUITsx10(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_43 = { code: "function VoicePanelUITsx11(){const{isDockEnabled,updateSharedValueIfChanged,gestureState,wrapperOffset,lockScrolling,runOnJS,controlsLock,mode,VoicePanelModes}=this.__closure;if(isDockEnabled){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});lockScrolling.set(false);runOnJS(controlsLock.unlock)();return;}const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}runOnJS(controlsLock.unlock)();}" };
let closure_44 = { code: "function VoicePanelUITsx12(event){const{gestureState,isDockEnabled,mode,VoicePanelModes,lockScrolling,wrapperDimensions,connected,wrapperOffset,MIN_DISMISS_MOVE_PERCENTAGE,SHEET_COMMIT_FLING_VELOCITY,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,committedMode,setMode,updateSharedValueIfChanged,dismissPanel,calculatePIPPositionFromVelocity,windowDimensions,safeArea}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(isDockEnabled){if(mode.get()!==VoicePanelModes.PANEL){lockScrolling.set(false);return;}const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;if(velocityY>0){if(connected.get()){if(wrapperOffset.get().y>panelHeight*MIN_DISMISS_MOVE_PERCENTAGE||velocityY>SHEET_COMMIT_FLING_VELOCITY){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);committedMode.set(VoicePanelModes.PIP);runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});return;}}else if(wrapperOffset.get().y>panelHeight*MIN_DISMISS_MOVE_PERCENTAGE){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);return;}if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_45 = { code: "function VoicePanelUITsx13(_e){const{lockScrolling,gestureState,updateSharedValueIfChanged,isDockEnabled,mode,VoicePanelModes,wrapperOffset}=this.__closure;lockScrolling.set(false);const wasActive=gestureState.get().active;updateSharedValueIfChanged(gestureState,{cancel:false,active:false});if(!isDockEnabled||wasActive||mode.get()===VoicePanelModes.PANEL){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}console.log('onTouchesCancelled');}" };
let closure_46 = { code: "function VoicePanelUITsx14(event){const{gestureState,isDockEnabled,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,PIP_POP_HEIGHT,POP_RESISTANCE,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(gestureState.get().cancel)return;if(!isDockEnabled&&mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});return;}const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(!isDockEnabled&&connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(isDockEnabled){if(connected.get()){updateSharedValueIfChanged(gestureState,{requiresPop:newYOffset<=PIP_POP_HEIGHT});}}else if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}" };
let closure_47 = { code: "function VoicePanelUITsx15(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,isDockEnabled,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(!isDockEnabled&&mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_48 = { code: "function VoicePanelUITsx16(event){const{gestureState,isDockEnabled,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,controlsSpecs,VoicePanelControlsModes,runOnJS,controlsLock}=this.__closure;if(gestureState.get().cancel)return;if(!isDockEnabled||mode.get()===VoicePanelModes.PANEL){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});}gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){runOnJS(controlsLock.lock)();}}" };
let closure_49 = { code: "function VoicePanelUITsx17(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
const __initData7 = { code: "function onBeginDrag_VoicePanelUITsx18(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}" };
const __initData8 = { code: "function onEndDrag_VoicePanelUITsx19(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData9 = { code: "function onMomentumEnd_VoicePanelUITsx20(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData10 = { code: "function onScroll_VoicePanelUITsx21(event){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
const __initData11 = { code: "function VoicePanelUITsx22(){const{mode}=this.__closure;return mode.get();}" };
const __initData12 = { code: "function VoicePanelUITsx23(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
const __initData13 = { code: "function VoicePanelUITsx24(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
const __initData14 = { code: "function VoicePanelUITsx25(){const{isDockConnected,sheetExitProgress,dockJoinMorphOrigin,windowDimensions,dockMinimizeProgress,mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset}=this.__closure;if(isDockConnected.get()){const exitShade=1-sheetExitProgress.get();const join=dockJoinMorphOrigin.get();if(join!=null){const screenSize=windowDimensions.get().height;const startShade=Math.min(Math.max((screenSize-join.y)/screenSize,0),1);return startShade*(1-dockMinimizeProgress.get())*exitShade;}return(1-dockMinimizeProgress.get())*exitShade;}switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
function computeBorderRadii(mode) {
  let num;
  if (mode.mode === VoicePanelModes.PIP) {
    num = DEFAULT_BORDER_RADIUS_PIP;
  } else {
    num = 0;
    if (!tmp) {
      num = DEFAULT_BORDER_RADIUS;
    }
  }
  return num;
}
computeBorderRadii.__closure = { VoicePanelModes, DEFAULT_BORDER_RADIUS_PIP, DEFAULT_BORDER_RADIUS };
computeBorderRadii.__workletHash = 157869295768;
computeBorderRadii.__initData = { code: "function computeBorderRadii_VoicePanelUITsx26({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}" };
const __initData15 = { code: "function VoicePanelUITsx27(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}" };
const __initData16 = { code: "function VoicePanelUITsx28(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};}" };
const __initData17 = { code: "function VoicePanelUITsx29(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,isDockEnabled,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&!isDockEnabled&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.PIP&&isDockEnabled){updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:0,drawerY:0,animated:animated,mode:modeToSet});}else if(modeToSet===VoicePanelModes.DISMISSED){const isLeavingDock=isDockEnabled&&wrapperDimensions.get().mode===VoicePanelModes.PIP;if(connected||isLeavingDock){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}}" };
const __initData18 = { code: "function VoicePanelUITsx30(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,isDockEnabled,getDockSheetTransform,isDockConnected,dockMinimizeProgress,dockHeight,dockJoinMorphOrigin,dockEntryProgress,sheetExitProgress,dockPressProgress,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};const dockTransform=isDockEnabled?getDockSheetTransform({connected:isDockConnected.get(),progress:dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get(),dockHeight:dockHeight.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),dockEntryProgress:dockEntryProgress.get(),sheetExitProgress:sheetExitProgress.get(),dockPressProgress:dockPressProgress.get()}):null;if(dockTransform!=null){return{transform:[{translateX:dockTransform.translateX},{translateY:dockTransform.translateY},{scale:dockTransform.scale}]};}return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},...(isDockEnabled?[{scale:1}]:[])]};}" };
const __initData19 = { code: "function VoicePanelUITsx31(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
const __initData20 = { code: "function VoicePanelUITsx32(){const{isDockEnabled,getDockSheetSurfaceStyle,isDockConnected,dockPressProgress,dockJoinMorphOrigin,mode,dockMinimizeProgress,wrapperDimensions,dockSurfaceFills,VoicePanelModes}=this.__closure;if(isDockEnabled){return getDockSheetSurfaceStyle({connected:isDockConnected.get(),dockPressProgress:dockPressProgress.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),mode:mode.get(),sheetMorphProgress:1-dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get()},dockSurfaceFills);}return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none'};}" };
const __initData21 = { code: "function VoicePanelUITsx33(){const{isDockEnabled,getDockSheetShape,isDockConnected,dockJoinMorphOrigin,dockMinimizeProgress,wrapperDimensions,getDockSheetShadowOpacity,dockPressProgress,computeBorderRadii,mode,connected,withSpring,BORDER_RADIUS_PHYSICS,styles}=this.__closure;if(isDockEnabled){return{...getDockSheetShape({connected:isDockConnected.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),sheetMorphProgress:1-dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get()}),opacity:getDockSheetShadowOpacity(dockPressProgress.get(),1-dockMinimizeProgress.get())};}const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
const __initData22 = { code: "function VoicePanelUITsx34(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData23 = { code: "function VoicePanelUITsx35(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
const __initData24 = { code: "function VoicePanelUITsx36(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
const __initData25 = { code: "function VoicePanelUITsx37(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
const DrawerShadeOpacityPhysics = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
const __initData26 = { code: "function VoicePanelUITsx38(){const{isDockConnected,opacity,withSpring,DrawerShadeOpacityPhysics}=this.__closure;const followsMorph=isDockConnected.get();return{opacity:followsMorph?opacity.get():withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
let closure_73 = react.memo(function DrawerShade(opacity) {
  let items;
  opacity = opacity.opacity;
  let isDockConnected;
  const onPress = opacity.onPress;
  const tmp = closure_33();
  isDockConnected = react.useContext(isDockConnected(11222)).isDockConnected;
  let obj = opacity(5095);
  const fn = function l() {
    let str;
    let withSpringResult;
    if (isDockConnected.get()) {
      withSpringResult = opacity.get();
      obj2 = opacity;
    } else {
      obj2 = opacity;
      const obj = spring;
      withSpringResult = obj.withSpring(opacity.get(), DrawerShadeOpacityPhysics);
    }
    const obj3 = { opacity: withSpringResult, pointerEvents: str };
    str = "auto";
    if (0 === obj2.get()) {
      str = "none";
    }
    return obj3;
  };
  obj2 = { isDockConnected, opacity, withSpring: opacity(5637).withSpring, DrawerShadeOpacityPhysics };
  fn.__closure = obj2;
  fn.__workletHash = 2070286054042;
  fn.__initData = __initData26;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_21(closure_6, obj4) };
  items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj4 = { style: tmp.shadePressable, onPress };
  const View = isDockConnected(5095).View;
  return closure_21(View, obj3);
});
const memoResult = react.memo(function VoicePanelUI() {
  let GestureDetector2;
  let IS_IOS;
  let LayerScope2;
  let MIN_DISMISS_MOVE_PERCENTAGE;
  let channelId;
  let closure_1;
  let closure_32;
  let dismissPanel;
  let dragScrolling;
  let first;
  let first1;
  let isDockEnabled;
  let isQuest;
  let items6;
  let items7;
  let items9;
  let obj24;
  let obj26;
  let obj27;
  let obj28;
  let obj32;
  let obj35;
  let participant;
  let ref;
  let scrollPosition;
  let state2;
  let tmp2Result;
  let tmp38Result;
  let tmp40;
  let xe;
  let ye;
  let tmp = closure_33();
  let tmp2 = importDefault;
  let tmp3 = dependencyMap;
  const tmp4 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ scrollPosition, dragScrolling, channelId } = context);
  ({ dismissPanel, isDockEnabled } = context);
  [first, importDefault] = react.useState(false);
  dependencyMap = react.useRef(-1);
  const items = [channelId];
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    clearTimeout(ref.current);
    let obj = channelId(ref[40]);
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
  const items1 = [channelId];
  const callback1 = react.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelOpen(channelId, arg0);
  }, items1);
  const items2 = [channelId];
  const callback2 = react.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelPIP(channelId, arg0);
  }, items2);
  first1 = undefined;
  closure_32 = undefined;
  let callback3;
  __initData2 = undefined;
  let token;
  const context1 = react.useContext(VoicePanelStateContextDefault);
  const channelId2 = context1.channelId;
  const committedMode = context1.committedMode;
  const connected = context1.connected;
  const controlsSpecs = context1.controlsSpecs;
  const dismissPanel2 = context1.dismissPanel;
  const dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  const focused = context1.focused;
  const hideControls = context1.hideControls;
  const isDockConnected = context1.isDockConnected;
  const isDockEnabled2 = context1.isDockEnabled;
  const isFocusedVideoZoomed = context1.isFocusedVideoZoomed;
  const dockJoinMorphOrigin = context1.dockJoinMorphOrigin;
  const dockMinimizeProgress = context1.dockMinimizeProgress;
  let mode = context1.mode;
  const safeArea = context1.safeArea;
  const setMode = context1.setMode;
  const sheetExitProgress = context1.sheetExitProgress;
  const showControls = context1.showControls;
  const windowDimensions = context1.windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  let tmp13 = useSafeAreaInsetsDefault();
  let closure_26 = tmp13;
  let obj = channelId(5095);
  const sharedValue = obj.useSharedValue(0);
  obj2 = channelId(5095);
  const sharedValue1 = obj2.useSharedValue(false);
  let obj3 = channelId(5095);
  const sharedValue2 = obj3.useSharedValue(false);
  obj4 = channelId(5095);
  let obj5 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
  const sharedValue3 = obj4.useSharedValue(obj5);
  [first1, closure_32] = react.useState(true);
  const memo = react.useMemo(() => {
    const Gesture = channelId(ref[19]).Gesture;
    return Gesture.Native();
  }, []);
  let obj6 = channelId(5095);
  const animatedRef = obj6.useAnimatedRef();
  let obj7 = channelId(5095);
  const sharedValue4 = obj7.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  let obj8 = channelId(5095);
  let fn = function p() {
    const obj = { gestureActive: sharedValue4.get().active, connected: connected.get(), mode: mode.get() };
    return obj;
  };
  fn.__closure = { gestureState: sharedValue4, connected, mode };
  fn.__workletHash = 5596084348360;
  fn.__initData = __initData;
  let fn2 = function h(mode, current) {
    const cheapWorkletShallowEqual = channelId(ref[20]).cheapWorkletShallowEqual;
    channelId(ref[20]);
    const tmp = current;
    if (!cheapWorkletShallowEqual(mode, tmp)) {
      mode = mode.mode;
      if (mode.connected) {
        if (!mode.gestureActive) {
          if (mode === VoicePanelModes.PANEL) {
            const tmp2Result = channelId(ref[15]);
            tmp2Result.runOnJS(callback)(true);
          }
          const tmp10 = VoicePanelModes;
          if (mode === VoicePanelModes.PANEL) {
            const tmp2Result6 = channelId(ref[15]);
            tmp2Result6.runOnJS(callback1)(true);
          } else {
            const tmp2Result7 = channelId(ref[15]);
            tmp2Result7.runOnJS(callback1)(false);
          }
          if (mode === tmp10.PIP) {
            const tmp2Result8 = channelId(ref[15]);
            tmp2Result8.runOnJS(callback2)(true);
          } else {
            const tmp2Result9 = channelId(ref[15]);
            tmp2Result9.runOnJS(callback2)(false);
          }
        }
      }
      const tmp2Result10 = channelId(ref[15]);
      tmp2Result10.runOnJS(callback)(false);
    }
  };
  let obj9 = { cheapWorkletShallowEqual: channelId(10089).cheapWorkletShallowEqual, VoicePanelModes, runOnJS: channelId(5095).runOnJS, setPanelFullscreen: callback, setPanelOpen: callback1, setPanelPIP: callback2 };
  fn2.__closure = obj9;
  fn2.__workletHash = 10989484188294;
  fn2.__initData = __initData2;
  const animatedReaction = obj8.useAnimatedReaction(fn, fn2);
  const obj10 = channelId(5095);
  class P {
    constructor() {
      return mode.get();
    }
  }
  P.__closure = { mode };
  P.__workletHash = 455036316035;
  P.__initData = __initData3;
  let fn3 = function f(arg0, arg1) {
    const tmp2 = arg0 === VoicePanelModes.DISMISSED && arg1 !== tmp.DISMISSED;
    if (tmp2) {
      dragScrolling(ref[21])(sharedValue4, { cancel: false, active: false });
    }
  };
  fn3.__closure = { VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4 };
  fn3.__workletHash = 8982251844724;
  fn3.__initData = __initData4;
  ({ VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4 });
  const animatedReaction1 = obj10.useAnimatedReaction(P, fn3);
  const items3 = [channelId2];
  callback3 = react.useCallback((arg0) => {
    const tmp = null != arg0 && isActivityParticipant(participant.getParticipant(channelId2, arg0));
    closure_32(!tmp);
  }, items3);
  const obj12 = channelId(5095);
  class Ce {
    constructor() {
      let tmp;
      if (mode.get() === VoicePanelModes.PANEL) {
        const value = focused.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  Ce.__closure = { mode, VoicePanelModes, focused };
  Ce.__workletHash = 16350113088465;
  Ce.__initData = __initData5;
  class Ae {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = channelId(ref[15]);
        obj.runOnJS(callback3)(arg0);
      }
    }
  }
  Ae.__closure = { runOnJS: channelId(5095).runOnJS, handleFocusChange: callback3 };
  Ae.__workletHash = 169980789473;
  Ae.__initData = __initData6;
  ({ runOnJS: channelId(5095).runOnJS, handleFocusChange: callback3 });
  const animatedReaction2 = obj12.useAnimatedReaction(Ce, Ae);
  const tmp28 = useControlsLockDefault();
  __initData2 = tmp28;
  const items4 = [tmp13, committedMode, connected, controlsSpecs, dismissPanel2, dismissToPIPGestureRef, focused, first1, hideControls, sharedValue4, isDockEnabled2, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset, tmp28];
  const memo1 = react.useMemo(() => {
    const Gesture = channelId(ref[19]).Gesture;
    const Race = Gesture.Race;
    const Gesture2 = channelId(ref[19]).Gesture;
    const rect = { left: -1 * closure_26.left, right: -1 * closure_26.right };
    const TapResult = Gesture2.Tap();
    const hitSlopResult = TapResult.hitSlop(rect);
    const fn = function h() {
      if (connected.get()) {
        if (closure_1_18.get() !== isFocusedVideoZoomed.PIP) {
          if (controlsSpecs.get().mode === mode.HIDDEN) {
            obj2 = scrollPosition(callback[15]);
            obj2.runOnJS(showControls)({ debounce: true });
          } else {
            const obj = scrollPosition(callback[15]);
            obj.runOnJS(hideControls)({ debounce: true });
          }
        }
      }
    };
    const enabledResult = hitSlopResult.enabled(first1);
    const maxDistanceResult = enabledResult.maxDistance(30);
    let obj = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: channelId(ref[15]).runOnJS, showControls, hideControls };
    fn.__closure = obj;
    fn.__workletHash = 7439125251278;
    fn.__initData = __initData;
    const onStartResult = maxDistanceResult.onStart(fn);
    const Gesture3 = channelId(ref[19]).Gesture;
    const PanResult = Gesture3.Pan();
    const enabledResult1 = PanResult.enabled(first1);
    const rect1 = { left: -1 * closure_26.left, right: -1 * closure_26.right };
    const manualActivationResult = enabledResult1.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    const hitSlopResult1 = maxPointersResult.hitSlop(rect1);
    const withRefResult = hitSlopResult1.withRef(dismissToPIPGestureRef);
    let result = withRefResult.shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(memo);
    class S {
      constructor(arg0, activate) {
        const first = arg0.allTouches[0];
        const tmp2 = isDockConnected;
        if (tmp2) {
          if (null != first) {
            const absoluteY = first.absoluteY;
            if (absoluteY > windowDimensions.get().height - safeArea.get().bottom) {
              obj2 = { cancel: true };
              set2 = sharedValue4.set;
              const merged = Object.assign(sharedValue4.get());
              set2(obj2);
              activate.activate();
            }
          }
        }
        let value = closure_1_15.get();
        if (!value) {
          value = closure_1_18.get() === isFocusedVideoZoomed.PANEL && controlsSpecs.get().mode === mode.DRAWER;
          const tmp9 = closure_1_18.get() === isFocusedVideoZoomed.PANEL && controlsSpecs.get().mode === mode.DRAWER;
        }
        if (value) {
          const obj = { cancel: true };
          set = sharedValue4.set;
          const merged1 = Object.assign(sharedValue4.get());
          const result = set(obj);
          activate.fail();
        }
      }
    }
    obj2 = { IS_IOS, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes };
    S.__closure = obj2;
    S.__workletHash = 1018234940483;
    S.__initData = __initData8;
    const fn2 = function u(arg0) {
      let value;
      const tmp = sharedValue4;
      if (!sharedValue4.get().cancel) {
        const tmp2 = isDockEnabled2 && closure_1_18.get() !== isFocusedVideoZoomed.PANEL;
        if (!tmp2) {
          dragScrolling(callback[21])(wrapperOffset, { x: 0, y: 0 });
        }
        const obj = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: value };
        ({ absoluteX: obj.absoluteXStart, absoluteY: obj.absoluteYStart } = arg0);
        set = tmp.set;
        value = connected.get() && closure_1_18.get() === isFocusedVideoZoomed.PANEL;
        const result = set(obj);
        if (controlsSpecs.get().mode === mode.FLOATING_DEFAULT) {
          obj2 = scrollPosition(callback[15]);
          obj2.runOnJS(controlsLock.lock)();
        }
      }
    };
    const onTouchesDownResult = result1.onTouchesDown(S);
    let obj3 = { gestureState: sharedValue4, isDockEnabled: isDockEnabled2, mode, VoicePanelModes, updateSharedValueIfChanged: dragScrolling(ref[21]), wrapperOffset, connected, controlsSpecs, VoicePanelControlsModes, runOnJS: channelId(ref[15]).runOnJS, controlsLock };
    fn2.__closure = obj3;
    fn2.__workletHash = 5562428303410;
    fn2.__initData = __initData7;
    const fn3 = function l(state, fail) {
      let absoluteX;
      let absoluteY;
      const tmp = scrollPosition;
      if (state.state === scrollPosition(callback[19]).State.BEGAN) {
        if (!closure_1_35.get().active) {
          if (!closure_1_35.get().cancel) {
            let flag;
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const diff = obj5.get().absoluteYStart - absoluteY;
            const diff1 = obj5.get().absoluteXStart - absoluteX;
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const absolute = Math.abs(diff);
            const maxResult = max(absolute, Math.abs(diff1));
            const _Math4 = Math;
            const _Math5 = Math;
            const absolute1 = Math.abs(diff1);
            const obj = mode;
            const tmp9 = absolute1 >= Math.abs(diff) || diff > 0;
            if (mode.get() === isFocusedVideoZoomed.PANEL) {
              const _Math6 = Math;
              if (diff < 0) {
                if (floor(closure_1_0.get()) <= 0) {
                  let tmp24 = !sharedValue4;
                  if (sharedValue4) {
                    tmp24 = maxResult > 10;
                  }
                  flag = tmp24;
                }
              }
              const value = focused.get();
              let id;
              if (value != null) {
                id = value.id;
              }
              flag = false;
              const tmp21 = null != id && tmp9;
              if (tmp21) {
                fail.fail();
                flag = false;
              }
            } else {
              flag = false;
              const tmp13 = !isDockEnabled2 && obj.get() === tmp11.PIP && maxResult > 10;
              if (tmp13) {
                const tmpResult = tmp(callback[15]);
                tmpResult.runOnJS(dragScrolling(callback[23]))();
                flag = true;
              }
            }
            const tmp26 = dragScrolling(callback[21]);
            if (flag) {
              tmp26(wrapperOffset, { gestureActive: true });
              obj2 = { absoluteXStart: absoluteX, absoluteYStart: absoluteY + closure_1_0.get(), cancel: false, active: true, requiresPop: closure_1_35.get().requiresPop };
              set = closure_1_35.set;
              const result = set(obj2);
              const result1 = sharedValue1.set(true);
              fail.activate();
            } else {
              const obj3 = { absoluteYStart: absoluteY, absoluteXStart: absoluteX };
              tmp26(closure_1_35, obj3);
            }
          }
        }
      }
    };
    const onBeginResult = onTouchesDownResult.onBegin(fn2);
    obj4 = { State: channelId(ref[19]).State, gestureState: sharedValue4, mode, VoicePanelModes, scrollPosition, isQuest, MIN_GESTURE_MOVE: 10, focused, isDockEnabled: isDockEnabled2, runOnJS: channelId(ref[15]).runOnJS, triggerIOSHaptic: dragScrolling(ref[23]), updateSharedValueIfChanged: dragScrolling(ref[21]), wrapperOffset, lockScrolling: sharedValue1 };
    fn3.__closure = obj4;
    fn3.__workletHash = 6330669366540;
    fn3.__initData = __initData6;
    const fn4 = function c(absoluteX) {
      if (!sharedValue4.get().cancel) {
        if (!isDockEnabled2) {
          if (mode.get() === isFocusedVideoZoomed.PIP) {
            const point = { x: -1 * (sharedValue4.get().absoluteXStart - absoluteX.absoluteX), y: -1 * (sharedValue4.get().absoluteYStart - absoluteX.absoluteY) };
            const tmp7 = dragScrolling(callback[21]);
            tmp7(wrapperOffset, point);
          }
        }
        const result = -1 * (obj.get().absoluteYStart - absoluteX.absoluteY);
        const value = !tmp2 && connected.get() && !obj.get().requiresPop && result <= 0;
        if (value) {
          obj2 = { requiresPop: true };
          set = sharedValue4.set;
          const merged = Object.assign(obj.get());
          const result1 = set(obj2);
        }
        if (sharedValue1.get()) {
          let diff;
          if (result < 0) {
            const result2 = obj4.set(false);
          }
          if (isDockEnabled2) {
            diff = result;
            if (connected.get()) {
              const obj3 = { requiresPop: result <= 180 };
              dragScrolling(callback[21])(sharedValue4, obj3);
              diff = result;
            }
          } else {
            diff = result;
            if (sharedValue4.get().requiresPop) {
              const _Math = Math;
              const bound = Math.max(result, 0);
              if (bound <= 180) {
                diff = bound - bound * setMode;
              } else {
                const obj5 = { requiresPop: false };
                set2 = sharedValue4.set;
                const merged1 = Object.assign(obj.get());
                set2(obj5);
                const obj8 = scrollPosition(callback[15]);
                const runOnJSResult = obj8.runOnJS(scrollPosition(callback[24]).triggerHapticFeedback);
                runOnJSResult(scrollPosition(callback[24]).HapticFeedbackTypes.IMPACT_MEDIUM);
                diff = result;
              }
            }
          }
          const point1 = { y: diff, x: 0 };
          dragScrolling(callback[21])(wrapperOffset, point1);
        }
        const value2 = obj4.get();
        const tmp17 = !value2 && closure_1_0.get() <= 0;
        if (tmp17) {
          const result3 = obj4.set(true);
        }
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
    let obj5 = { gestureState: sharedValue4, isDockEnabled: isDockEnabled2, mode, VoicePanelModes, updateSharedValueIfChanged: dragScrolling(ref[21]), wrapperOffset, connected, lockScrolling: sharedValue1, scrollPosition, PIP_POP_HEIGHT: 180, POP_RESISTANCE, runOnJS: channelId(ref[15]).runOnJS, triggerHapticFeedback: channelId(ref[24]).triggerHapticFeedback, HapticFeedbackTypes: channelId(ref[24]).HapticFeedbackTypes };
    fn4.__closure = obj5;
    fn4.__workletHash = 5763844933711;
    fn4.__initData = __initData5;
    const fn5 = function s() {
      const result = sharedValue1.set(false);
      const active = sharedValue4.get().active;
      dragScrolling(callback[21])(sharedValue4, { cancel: false, active: false });
      let tmp5 = isDockEnabled2 && !active;
      const tmp2 = dragScrolling;
      const tmp3 = callback;
      if (tmp5) {
        tmp5 = mode.get() !== isFocusedVideoZoomed.PANEL;
      }
      if (!tmp5) {
        tmp2(tmp3[21])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
      }
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    let obj6 = { lockScrolling: sharedValue1, gestureState: sharedValue4, updateSharedValueIfChanged: dragScrolling(ref[21]), isDockEnabled: isDockEnabled2, mode, VoicePanelModes, wrapperOffset };
    fn5.__closure = obj6;
    fn5.__workletHash = 12617975861528;
    fn5.__initData = __initData4;
    const fn6 = function o(velocityY) {
      let absoluteX;
      let absoluteY;
      let pipX;
      let pipY;
      let velocityX;
      const obj = sharedValue4;
      if (!sharedValue4.get().cancel) {
        velocityY = velocityY.velocityY;
        ({ velocityX, absoluteX, absoluteY } = velocityY);
        const value = mode.get();
        obj2 = mode;
        if (isDockEnabled2) {
          if (value !== isFocusedVideoZoomed.PANEL) {
            const result = sharedValue1.set(false);
          } else {
            const drawerHeight = wrapperDimensions.get().drawerHeight;
            if (velocityY > 0) {
              const value2 = connected.get();
              const y = closure_1_25.get().y;
              const result1 = tmp95 * wrapperOffset;
              if (value2) {
                const obj8 = scrollPosition(callback[15]);
                const runOnJSResult = obj8.runOnJS(scrollPosition(callback[24]).triggerHapticFeedback);
                runOnJSResult(scrollPosition(callback[24]).HapticFeedbackTypes.IMPACT_MEDIUM);
                const result2 = committedMode.set(isFocusedVideoZoomed.PIP);
                const obj9 = scrollPosition(callback[15]);
                obj9.runOnJS(setMode)(isFocusedVideoZoomed.PIP);
                dragScrolling(callback[21])(closure_1_25, { gestureActive: false, x: 0, y: 0 });
              } else if (y > result1) {
                dragScrolling(callback[21])(closure_1_25, { gestureActive: false });
                const obj7 = scrollPosition(callback[15]);
                obj7.runOnJS(dismissPanel2)();
              }
            }
            dragScrolling(callback[21])(closure_1_25, { gestureActive: false, x: 0, y: 0 });
            const result3 = sharedValue1.set(false);
          }
        } else if (value === isFocusedVideoZoomed.PIP) {
          const obj5 = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
          const calculatePIPPositionFromVelocity = scrollPosition(callback[26]).calculatePIPPositionFromVelocity;
          scrollPosition(callback[26]);
          const result4 = calculatePIPPositionFromVelocity(obj5);
          ({ pipX, pipY } = result4);
          const obj6 = { pipX, pipY };
          dragScrolling(callback[21])(wrapperDimensions, obj6);
          dragScrolling(callback[21])(closure_1_25, { gestureActive: false });
        } else if (obj2.get() === isFocusedVideoZoomed.PANEL) {
          if (velocityY > 0) {
            if (connected.get()) {
              if (obj.get().requiresPop) {
                dragScrolling(callback[21])(closure_1_25, { gestureActive: false, x: 0, y: 0 });
                const result5 = sharedValue1.set(false);
              } else {
                obj4 = scrollPosition(callback[15]);
                obj4.runOnJS(setMode)(isFocusedVideoZoomed.PIP);
                dragScrolling(callback[21])(closure_1_25, { gestureActive: false, x: 0, y: 0 });
              }
            } else {
              const diff = wrapperDimensions.get().drawerHeight - wrapperDimensions.get().drawerY;
              if (closure_1_25.get().y > diff * wrapperOffset) {
                dragScrolling(callback[21])(closure_1_25, { gestureActive: false });
                const obj3 = scrollPosition(callback[15]);
                obj3.runOnJS(dismissPanel2)();
              } else {
                dragScrolling(callback[21])(closure_1_25, { gestureActive: false, x: 0, y: 0 });
                const result6 = sharedValue1.set(false);
              }
            }
          } else {
            dragScrolling(callback[21])(closure_1_25, { gestureActive: false, x: 0, y: 0 });
            const result7 = sharedValue1.set(false);
          }
        }
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
    let obj7 = { gestureState: sharedValue4, isDockEnabled: isDockEnabled2, mode, VoicePanelModes, lockScrolling: sharedValue1, wrapperDimensions, connected, wrapperOffset, MIN_DISMISS_MOVE_PERCENTAGE, SHEET_COMMIT_FLING_VELOCITY: channelId(ref[25]).SHEET_COMMIT_FLING_VELOCITY, runOnJS: channelId(ref[15]).runOnJS, triggerHapticFeedback: channelId(ref[24]).triggerHapticFeedback, HapticFeedbackTypes: channelId(ref[24]).HapticFeedbackTypes, committedMode, setMode, updateSharedValueIfChanged: dragScrolling(ref[21]), dismissPanel: dismissPanel2, calculatePIPPositionFromVelocity: channelId(ref[26]).calculatePIPPositionFromVelocity, windowDimensions, safeArea };
    fn6.__closure = obj7;
    fn6.__workletHash = 10169964943722;
    fn6.__initData = __initData3;
    const fn7 = function t() {
      const tmp = isDockEnabled2;
      if (tmp) {
        dragScrolling(callback[21])(sharedValue4, { cancel: false, active: false });
        dragScrolling(callback[21])(wrapperOffset, { gestureActive: false });
        const result = sharedValue1.set(false);
        obj2 = scrollPosition(callback[15]);
        obj2.runOnJS(controlsLock.unlock)();
      } else {
        const tmp3 = 0 !== wrapperOffset.get().y && mode.get() === isFocusedVideoZoomed.PANEL;
        if (!tmp3) {
          dragScrolling(callback[21])(sharedValue4, { cancel: false, active: false });
        }
        const obj = scrollPosition(callback[15]);
        obj.runOnJS(controlsLock.unlock)();
      }
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn6);
    let obj8 = { isDockEnabled: isDockEnabled2, updateSharedValueIfChanged: dragScrolling(ref[21]), gestureState: sharedValue4, wrapperOffset, lockScrolling: sharedValue1, runOnJS: channelId(ref[15]).runOnJS, controlsLock, mode, VoicePanelModes };
    fn7.__closure = obj8;
    fn7.__workletHash = 15051989893818;
    fn7.__initData = __initData2;
    return Race(onStartResult, onEndResult.onFinalize(fn7));
  }, items4);
  const obj15 = { onBeginDrag: xe, onEndDrag: Ye, onMomentumEnd: ye, onScroll: He };
  xe = function xe(contentOffset) {
    const result = scrollPosition.set(contentOffset.contentOffset.y);
    const result1 = dragScrolling.set(true);
  };
  xe.__closure = { scrollPosition, dragScrolling };
  xe.__workletHash = 7129316645562;
  xe.__initData = __initData7;
  const obj14 = channelId(5095);
  class Ye {
    constructor() {
      const result = dragScrolling.set(false);
    }
  }
  Ye.__closure = { dragScrolling };
  Ye.__workletHash = 16780787183039;
  Ye.__initData = __initData8;
  ye = function ye() {
    const result = dragScrolling.set(false);
  };
  ye.__closure = { dragScrolling };
  ye.__workletHash = 13772673540365;
  ye.__initData = __initData9;
  class He {
    constructor(contentOffset) {
      if (sharedValue1.get()) {
        if (!sharedValue2.get()) {
          if (scrollPosition.get() < 0) {
            const result = obj4.set(0);
          }
          const value = obj4.get();
          const _Math7 = Math;
          if (Math.abs(contentOffset.contentOffset.y - value) >= 0.1) {
            const result1 = obj3.set(true);
            const obj5 = channelId(ref[15]);
            obj5.scrollTo(animatedRef, 0, value, false);
            const result2 = obj3.set(false);
          }
        }
      } else {
        let tmp;
        if (scrollPosition.get() !== contentOffset.contentOffset.y) {
          const value2 = obj.get();
          const height = windowDimensions.get().height;
          if (typeof computeViewableChunksFromScrollPosition === "function") {
            const _Math = Math;
            const rounded = Math.ceil(height / VOICE_PANEL_CHUNK_DIVISOR);
            const _Math2 = Math;
            const _Math3 = Math;
            const _Math4 = Math;
            const _Math5 = Math;
            const sum = Math.max(Math.floor(value2 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
            const minResult = min(sum, Math.ceil(tmp24 / rounded));
            const _Math6 = Math;
            tmp = { start: Math.max(minResult - VOICE_PANEL_CHUNK_DIVISOR - 2, 0), end: minResult };
            obj2 = { start: Math.max(minResult - VOICE_PANEL_CHUNK_DIVISOR - 2, 0), end: minResult };
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        const result3 = obj.set(contentOffset.contentOffset.y);
        if (null != tmp) {
          dragScrolling(ref[21])(sharedValue3, tmp);
        }
      }
    }
  }
  He.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(5095).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, viewableChunks: sharedValue3 };
  He.__workletHash = 3971019682754;
  He.__initData = __initData10;
  ({ lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(5095).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, viewableChunks: sharedValue3 });
  const animatedScrollHandler = obj14.useAnimatedScrollHandler(obj15);
  const obj17 = channelId(5095);
  class Je {
    constructor() {
      return mode.get();
    }
  }
  Je.__closure = { mode };
  Je.__workletHash = 17369688194549;
  Je.__initData = __initData11;
  class Re {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        if (arg0 === VoicePanelModes.PANEL) {
          if (arg1 === VoicePanelModes.PIP) {
            const result = sharedValue1.set(false);
          }
        }
        if (arg0 === VoicePanelModes.PIP) {
          const result1 = sharedValue1.set(true);
        }
      }
    }
  }
  Re.__closure = { VoicePanelModes, lockScrolling: sharedValue1 };
  Re.__workletHash = 1687129825906;
  Re.__initData = __initData12;
  const animatedReaction3 = obj17.useAnimatedReaction(Je, Re);
  const obj18 = channelId(5596);
  token = obj18.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const obj19 = channelId(5095);
  class Xe {
    constructor() {
      let rect;
      let tmp7;
      let value;
      const tmp = mode.get() === VoicePanelModes.PIP;
      const tmp2 = tmp || null != focused.get();
      let str = "auto";
      if (tmp) {
        str = "none";
      }
      const obj = { pointerEvents: str, scrollEnabled: !tmp2, showsVerticalScrollIndicator: !value && !tmp2, scrollIndicatorInsets: rect };
      value = sharedValue1.get();
      rect = { top: tmp7(safeArea.get(), token).height - safeArea.get().top, bottom: safeArea.get().bottom };
      tmp7 = dragScrolling(ref[28]);
      return obj;
    }
  }
  Xe.__closure = { mode, VoicePanelModes, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token };
  Xe.__workletHash = 12205535325007;
  Xe.__initData = __initData13;
  const items5 = [sharedValue];
  ({ mode, VoicePanelModes, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token });
  const animatedProps = obj19.useAnimatedProps(Xe);
  const callback4 = react.useCallback((arg0, arg1) => {
    const result = sharedValue.set(arg1);
  }, items5);
  const obj21 = channelId(5095);
  class Fe {
    constructor() {
      if (isDockConnected.get()) {
        const diff = 1 - sheetExitProgress.get();
        const value = dockJoinMorphOrigin.get();
        if (null != value) {
          const height2 = windowDimensions.get().height;
          const _Math3 = Math;
          const _Math4 = Math;
          const bound = Math.min(Math.max((height2 - value.y) / height2, 0), 1);
          return bound * (1 - dockMinimizeProgress.get()) * diff;
        } else {
          return (1 - dockMinimizeProgress.get()) * diff;
        }
      } else {
        const value2 = mode.get();
        if (VoicePanelModes.PIP !== value2) {
          if (VoicePanelModes.DISMISSED !== value2) {
            if (connected.get()) {
              const obj = sharedValue4;
              if (sharedValue4.get().active) {
                if (obj.get().requiresPop) {
                  return 1;
                }
              }
            }
            const sum = wrapperDimensions.get().drawerY + wrapperOffset.get().y;
            const height = windowDimensions.get().height;
            const _Math = Math;
            const _Math2 = Math;
            return Math.min(Math.max((height - sum) / height, 0), 1);
          }
        }
        return 0;
      }
    }
  }
  Fe.__closure = { isDockConnected, sheetExitProgress, dockJoinMorphOrigin, windowDimensions, dockMinimizeProgress, mode, VoicePanelModes, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset };
  Fe.__workletHash = 4650267051519;
  Fe.__initData = __initData14;
  const derivedValue = obj21.useDerivedValue(Fe);
  const obj22 = { children: items6 };
  const tmp36 = useControlsHoverGestureDefault();
  const obj23 = { zIndex: 2, children: closure_21(VoicePanelHeaderDefault, obj24) };
  const LayerScope = channelId(5611).LayerScope;
  obj24 = { wrapperOffset, gestureState: sharedValue4, layout: layoutTransition };
  items6 = [closure_21(LayerScope, obj23), , ];
  const obj25 = { gesture: memo1, children: closure_21(tmp40, obj26) };
  const GestureDetector = channelId(5303).GestureDetector;
  obj26 = { style: StyleSheet.absoluteFill, layout: layoutTransition, collapsable: false, children: closure_21(GestureDetector2, obj27) };
  tmp40 = ReanimatedNativeViewDefault;
  obj27 = { gesture: memo, children: closure_22(closure_34, obj28) };
  obj28 = { layout: scrollViewLayoutTransition, ref: animatedRef, onScroll: animatedScrollHandler, onMomentumScrollEnd: NOOP, animatedProps, style: tmp.scrollView, onContentSizeChange: callback4, contentContainerStyle: tmp.scrollViewContent, scrollEventThrottle: 8.333333333333334, children: items7 };
  GestureDetector2 = channelId(5303).GestureDetector;
  items7 = [closure_21(VoicePanelCardViewDefault, { viewableChunks: sharedValue3 }), closure_21(VoicePanelPreJoinContentDefault, {})];
  items6[1] = closure_21(GestureDetector, obj25);
  items6[2] = closure_21(VoicePanelVoiceChannelAppDefault, {});
  const tmp41 = closure_22(closure_23, obj22);
  const effect = react.useEffect(() => closure_1(true), []);
  let tmp38Result2 = null;
  const tmp39 = layoutTransition;
  if (first) {
    const obj29 = { value: analyticsLocations, children: closure_22(LayerScope2, obj35) };
    const AnalyticsLocationProvider = tmp14(7326).AnalyticsLocationProvider;
    LayerScope2 = tmp14(5611).LayerScope;
    const items8 = [tmp38(VoicePanelSystemUIManagerDefault, {}), , ];
    const obj30 = { opacity: derivedValue, onPress: dismissPanel };
    items8[1] = closure_21(closure_73, obj30);
    const obj31 = { gesture: tmp36, children: closure_22(tmp2Result, obj32) };
    const GestureDetector3 = tmp14(5303).GestureDetector;
    let _HermesInternal = HermesInternal;
    let str = "voice-panel-ui-";
    obj32 = { style: tmp.accessibilityView, nativeID: "voice-panel-ui-" + channelId, accessibilityViewIsModal: true, layout: tmp39, onAccessibilityEscape: closeVoicePanelsDefault, children: items9 };
    tmp2Result = VoicePanelAccessibilityViewDefault;
    items9 = [tmp38(VoicePanelDismissableContentDefault, {}), , , ];
    const obj33 = { wrapperOffset, children: tmp38Result };
    tmp38Result = tmp41;
    const tmp47 = AnimatedWrapper;
    if (isDockEnabled) {
      const obj34 = { children: tmp41 };
      tmp38Result = tmp38(tmp14(19201).VoicePanelContentWithDock, obj34);
    }
    obj35 = { children: items8 };
    items9[1] = closure_21(tmp47, obj33);
    items9[2] = closure_21(VoicePanelPIPDefault, {});
    const obj36 = { gestureState: sharedValue4 };
    items9[3] = closure_21(VoicePanelControlsDefault, obj36);
    items8[2] = closure_21(GestureDetector3, obj31);
    tmp38Result2 = tmp38(AnalyticsLocationProvider, obj29);
  }
  return tmp38Result2;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default memoResult;
export const REDUCED_MOTION_OPACITY_PHYSICS = obj5;
