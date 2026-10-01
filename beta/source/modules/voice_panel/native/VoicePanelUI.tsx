// Module ID: 16917
// Function ID: 16918
// Name: VoicePanelUI
// Dependencies: [32, 19, 17, 4852, 7738, 5044, 11755, 11753, 4857, 11756, 21, 3, 5280, 4836, 576, 4566, 1610, 11754, 1613, 6073, 8853, 10896, 16918, 16919, 4801, 16912, 4531, 11759, 8960, 16916, 16903, 10456, 8886, 5180, 6494, 6583, 6603, 1248, 16920, 6577, 16921, 16922, 8761, 16923, 16925, 16955, 16984, 16988, 16993, 2]

// Module 16917 (VoicePanelUI)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import CallConstants from "CallConstants" /* 4857 */;
import spring from "spring" /* 5280 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 8853 */;
import ExternalPipDefault from "ExternalPip" /* 8886 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10896 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11759 */;
import PanelSizeUtils from "PanelSizeUtils" /* 16903 */;
import useControlsLockDefault from "useControlsLock" /* 16918 */;
import useControlsHoverGestureDefault from "useControlsHoverGesture" /* 16920 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import AppFreezeStore from "AppFreezeStore" /* 7738 */;
import VoicePanelStore from "VoicePanelStore" /* 5044 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let dependencyMap, set, set2;

let DEFAULT_BORDER_RADIUS;
let DRAWER_SPRING_PHYSICS;
let MODE_CHANGE_PHYSICS;
let ScrollView;
let VOICE_PANEL_CHUNK_DIVISOR;
let c10;
let closure_21;
let closure_22;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj7;
let obj8;
let obj9;
let tmp2;
const ReanimatedNativeViewDefault = tmp2(6494);
const closeVoicePanelsDefault = tmp2(8761);
const VoicePanelSystemUIManagerDefault = tmp2(16921);
const VoicePanelAccessibilityViewDefault = tmp2(16922);
const VoicePanelDismissableContentDefault = tmp2(16923);
const VoicePanelHeaderDefault = tmp2(16925);
const VoicePanelCardViewDefault = tmp2(16955);
const VoicePanelPreJoinContentDefault = tmp2(16984);
const VoicePanelPIPDefault = tmp2(16988);
const VoicePanelControlsDefault = tmp2(16993);
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function AnimatedWrapper(wrapperOffset) {
  let closure_2;
  let obj16;
  let obj17;
  let tmp4Result2;
  let wrapperRootStyles;
  let wrapperSurfaceStyles;
  let wrapperTransformStyles;
  wrapperOffset = wrapperOffset.wrapperOffset;
  dependencyMap = undefined;
  let connected;
  let animatedStyle1;
  let tmp = wrapperOffset;
  const tmp2 = dependencyMap;
  const children = wrapperOffset.children;
  let obj = wrapperOffset(8960);
  const height = obj.useGlobalStatusIndicatorState().height;
  let tmp3 = closure_31();
  dependencyMap = tmp3;
  obj2 = connected;
  let tmp4 = height;
  const context = connected.useContext(height(11754));
  const wrapperDimensions = context.wrapperDimensions;
  connected = context.connected;
  const controlsSpecs = context.controlsSpecs;
  const focused = context.focused;
  const mode = context.mode;
  const preJoinContentSize = context.preJoinContentSize;
  const safeArea = context.safeArea;
  const windowDimensions = context.windowDimensions;
  const useReducedMotion = context.useReducedMotion;
  let obj3 = wrapperOffset(4566);
  const fn = function o() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 3576504626753;
  fn.__initData = __initData15;
  const derivedValue = obj3.useDerivedValue(fn);
  obj4 = wrapperOffset(16916);
  const pIPState = obj4.usePIPState();
  let obj5 = wrapperOffset(4566);
  const fn2 = function l() {
    const obj = { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
    return obj;
  };
  fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
  fn2.__workletHash = 6530348778352;
  fn2.__initData = __initData16;
  const fn3 = function s(safeAreaState, windowHeight) {
    let drawerX;
    let drawerY;
    let modeToSet;
    let windowWidth;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = windowHeight;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
      ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
      if (modeToSet !== VoicePanelModes.PIP) {
        let tmp10 = null == windowHeight;
        if (!tmp10) {
          tmp10 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
        }
        const value = wrapperDimensions.get();
        ({ drawerX, drawerY } = value);
        const diff = windowHeight - tmp8;
        if (modeToSet === VoicePanelModes.PANEL) {
          if (connected) {
            obj2 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp10, mode: modeToSet };
            updateSharedValueIfChangedDefault(wrapperDimensions, obj2);
            updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
          } else {
            const obj3 = { windowWidth, connected, safeAreaLeft: null, safeAreaRight: null };
            ({ left: obj4.safeAreaLeft, right: obj4.safeAreaRight } = safeArea);
            const tmpResult = PanelSizeUtils;
            const maxPanelWidth = tmpResult.getMaxPanelWidth(obj3);
            const tmpResult2 = PanelSizeUtils;
            const panelX = tmpResult2.getPanelX(windowWidth, maxPanelWidth);
            const _Math = Math;
            const tmp24 = roundToNearestPixelDefault;
            const obj5 = { drawerWidth: maxPanelWidth, drawerHeight: diff, drawerX: panelX, drawerY: tmp24(Math.max(diff - tmp7 - tmp6 - safeArea.bottom, diff - 0.8 * diff)), animated: tmp10, mode: modeToSet };
            tmp24(Math.max(diff - tmp7 - tmp6 - safeArea.bottom, diff - 0.8 * diff));
            updateSharedValueIfChangedDefault(wrapperDimensions, obj5);
          }
        } else if (modeToSet === VoicePanelModes.DISMISSED) {
          let tmp17;
          const tmp33 = updateSharedValueIfChangedDefault;
          if (connected) {
            const obj6 = { mode: modeToSet };
            tmp33(wrapperDimensions, obj6);
            tmp17 = tmp32;
          } else {
            const obj = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
            tmp33(wrapperDimensions, obj);
            tmp17 = tmp32;
          }
          tmp17(10896)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
        }
      }
    }
  };
  let obj6 = { cheapWorkletShallowEqual: wrapperOffset(8853).cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(10896), wrapperOffset, getMaxPanelWidth: wrapperOffset(16903).getMaxPanelWidth, getPanelX: wrapperOffset(16903).getPanelX, roundToNearestPixel: height(10456), windowDimensions };
  fn3.__closure = obj6;
  fn3.__workletHash = 4997805261566;
  fn3.__initData = __initData17;
  const animatedReaction = obj5.useAnimatedReaction(fn2, fn3);
  const fn4 = function b() {
    let drawerX;
    let drawerY;
    let gestureActive2;
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
          tmp2 = closure_1_7;
          tmp3 = closure_15;
          tmp = closure_1_7.get() !== closure_15.DISMISSED;
        }
        if (tmp) {
          tmp4 = wrapperOffset;
          tmp5 = closure_2;
          obj = wrapperOffset(closure_2[15]);
          tmp6 = height;
          tmp7 = obj.runOnJS(height(closure_2[32]).updateSourceTrackingView)();
        }
        return;
      }
    }
    VoicePanelUITsx31.__closure = { mode, VoicePanelModes, runOnJS: ReanimatedRexport2.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView };
    VoicePanelUITsx31.__workletHash = 2447720515661;
    VoicePanelUITsx31.__initData = __initData;
    ({ mode, VoicePanelModes, runOnJS: ReanimatedRexport2.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView });
    const withSpring = spring.withSpring;
    spring;
    let str = "animate-never";
    let str2 = "animate-never";
    const tmp14 = obj.get().gestureActive ? DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE : obj4;
    if (gestureActive) {
      str2 = "animate-always";
    }
    const items = [{ translateX: withSpring(sum1, tmp14, str2, VoicePanelUITsx31) }, ];
    ({ translateX: withSpring(sum1, tmp14, str2, VoicePanelUITsx31) });
    const withSpring2 = tmp11(5280).withSpring;
    spring;
    const tmp16 = obj.get().gestureActive ? DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE : obj4;
    if (gestureActive) {
      str = "animate-always";
    }
    obj4 = { transform: items };
    items[1] = { translateY: withSpring2(sum, tmp16, str, VoicePanelUITsx31) };
    ({ translateY: withSpring2(sum, tmp16, str, VoicePanelUITsx31) });
    return obj4;
  };
  const obj7 = wrapperOffset(4566);
  fn4.__closure = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: wrapperOffset(4566).runOnJS, updateSourceTrackingView: height(8886).updateSourceTrackingView, withSpring: wrapperOffset(5280).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, DRAWER_SIZE_PHYSICS: obj4 };
  fn4.__workletHash = 62808828087;
  fn4.__initData = __initData18;
  ({ useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: wrapperOffset(4566).runOnJS, updateSourceTrackingView: height(8886).updateSourceTrackingView, withSpring: wrapperOffset(5280).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, DRAWER_SIZE_PHYSICS: obj4 });
  const animatedStyle = obj7.useAnimatedStyle(fn4);
  const obj9 = wrapperOffset(4566);
  class M {
    constructor() {
      let str;
      let str2;
      const value = mode.get();
      const obj = mode;
      obj2 = connected;
      if (typeof computeBorderRadii === "function") {
        let num;
        const tmp3 = VoicePanelModes;
        if (value === VoicePanelModes.PIP) {
          num = DEFAULT_BORDER_RADIUS_PIP;
        } else {
          num = 0;
          if (!tmp2) {
            num = DEFAULT_BORDER_RADIUS;
          }
        }
        size = { width: wrapperDimensions.get().drawerWidth, height: wrapperDimensions.get().drawerHeight, borderRadius: obj4.withSpring(num, authStore), pointerEvents: str, backgroundColor: str2 };
        str = "none";
        obj4 = spring;
        if (obj.get() === tmp3.PANEL) {
          str = "auto";
        }
        str2 = "transparent";
        if (!obj2.get()) {
          str2 = closure_2.maskDefaultBackground.backgroundColor;
        }
        return size;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  M.__closure = { computeBorderRadii, mode, connected, wrapperDimensions, withSpring: wrapperOffset(5280).withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp3 };
  M.__workletHash = 4435209772815;
  M.__initData = __initData19;
  ({ computeBorderRadii, mode, connected, wrapperDimensions, withSpring: wrapperOffset(5280).withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp3 });
  animatedStyle1 = obj9.useAnimatedStyle(M);
  if (!wrapperOffset(5180).isStable) {
    let tmpResult = tmp(4566);
    const fn5 = function y() {
      return windowDimensions.get();
    };
    const obj11 = { windowDimensions };
    fn5.__closure = obj11;
    let num = 8189060666389;
    fn5.__workletHash = 8189060666389;
    fn5.__initData = __initData20;
    const fn6 = function k(arg0) {
      const obj = wrapperOffset(closure_2[15]);
      const runOnJSResult = obj.runOnJS(log);
      runOnJSResult("Window dimensions changed:", JSON.stringify(arg0));
    };
    const useAnimatedReaction = tmpResult.useAnimatedReaction;
    fn6.__closure = { runOnJS: tmp(4566).runOnJS, log };
    fn6.__workletHash = 5206450827682;
    let tmp14 = __initData21;
    fn6.__initData = __initData21;
    const obj12 = { runOnJS: tmp(4566).runOnJS, log };
    const animatedReaction1 = useAnimatedReaction(fn5, fn6);
    let tmpResult2 = tmp(4566);
    class H {
      constructor() {
        return wrapperDimensions.get();
      }
    }
    const obj13 = { wrapperDimensions };
    H.__closure = obj13;
    H.__workletHash = 4862999942291;
    let tmp17 = __initData22;
    H.__initData = __initData22;
    class T {
      constructor(arg0) {
        const obj = wrapperOffset(closure_2[15]);
        const runOnJSResult = obj.runOnJS(log);
        runOnJSResult("Wrapper dimensions changed:", JSON.stringify(arg0));
      }
    }
    const useAnimatedReaction2 = tmpResult2.useAnimatedReaction;
    T.__closure = { runOnJS: tmp(4566).runOnJS, log };
    T.__workletHash = 7760779241631;
    T.__initData = __initData23;
    const obj14 = { runOnJS: tmp(4566).runOnJS, log };
    const animatedReaction2 = useAnimatedReaction2(H, T);
  }
  let items = [tmp3.wrapper, animatedStyle1, animatedStyle];
  const memo = obj2.useMemo(() => ({ wrapperRootStyles: closure_2.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1 }), items);
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = memo);
  const obj15 = { style: wrapperRootStyles, pointerEvents: "box-none", children: closure_21(tmp4Result2, obj16) };
  obj16 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: closure_21(tmp4(6494), obj17) };
  obj17 = { style: wrapperSurfaceStyles, layout: layoutTransition, children };
  const tmp4Result = tmp4(6494);
  tmp4Result2 = tmp4(6494);
  return closure_21(tmp4Result, obj15);
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
let POP_RESISTANCE = MorphablePanelConstants.POP_RESISTANCE;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
log = new LoggerDefault("VoicePanelUI");
function layoutTransition(originX) {
  let obj3;
  let obj5;
  let obj6;
  const obj = { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  size = { originX: obj3.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: obj4.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always"), width: obj5.withSpring(originX.targetWidth, LAYOUT_PHYSICS, "animate-always"), height: obj6.withSpring(originX.targetHeight, LAYOUT_PHYSICS, "animate-always") };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
const tmp5 = new LoggerDefault("VoicePanelUI");
let obj = { withSpring: spring.withSpring, LAYOUT_PHYSICS };
layoutTransition.__closure = obj;
layoutTransition.__workletHash = 16454235842679;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj2 = { damping: 0 };
let merged = Object.assign(LAYOUT_PHYSICS);
function scrollViewLayoutTransition(originX) {
  let obj3;
  let obj5;
  let obj6;
  const obj = { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  size = { originX: obj3.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: obj4.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always"), width: obj5.withSpring(originX.targetWidth, obj2, "animate-always"), height: obj6.withSpring(originX.targetHeight, obj2, "animate-always") };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
let obj3 = { withSpring: spring.withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2 };
scrollViewLayoutTransition.__closure = obj3;
scrollViewLayoutTransition.__workletHash = 11745134918460;
scrollViewLayoutTransition.__initData = { code: "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
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
let obj6 = { accessibilityView: obj7, wrapper: obj8, maskDefaultBackground: obj9, scrollView: obj10, scrollViewContent: { flexGrow: 1, flexShrink: 0 }, shade: obj11, shadePressable: { flexGrow: 1 } };
obj7 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = { alignItems: "flex-start", zIndex: 1 };
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj10 = { borderTopLeftRadius: DEFAULT_BORDER_RADIUS, borderTopRightRadius: DEFAULT_BORDER_RADIUS };
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj11 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let closure_31 = createStyles(obj6);
let closure_32 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let closure_33 = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
const __initData2 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
const __initData3 = { code: "function VoicePanelUITsx6(){const{mode}=this.__closure;return mode.get();}" };
const __initData4 = { code: "function VoicePanelUITsx7(mode,previous){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode===VoicePanelModes.DISMISSED&&previous!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData5 = { code: "function VoicePanelUITsx8(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData6 = { code: "function VoicePanelUITsx9(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_40 = { code: "function VoicePanelUITsx10(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_41 = { code: "function VoicePanelUITsx11(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState,runOnJS,controlsLock}=this.__closure;const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}runOnJS(controlsLock.unlock)();}" };
let closure_42 = { code: "function VoicePanelUITsx12(event){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_43 = { code: "function VoicePanelUITsx13(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});console.log('onTouchesCancelled');}" };
let closure_44 = { code: "function VoicePanelUITsx14(event){const{gestureState,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});return;}const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}" };
let closure_45 = { code: "function VoicePanelUITsx15(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_46 = { code: "function VoicePanelUITsx16(event){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,controlsLock}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){runOnJS(controlsLock.lock)();}}" };
let closure_47 = { code: "function VoicePanelUITsx17(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
const __initData7 = { code: "function onBeginDrag_VoicePanelUITsx18(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}" };
const __initData8 = { code: "function onEndDrag_VoicePanelUITsx19(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData9 = { code: "function onMomentumEnd_VoicePanelUITsx20(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData10 = { code: "function onScroll_VoicePanelUITsx21(event){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
const __initData11 = { code: "function VoicePanelUITsx22(){const{mode}=this.__closure;return mode.get();}" };
const __initData12 = { code: "function VoicePanelUITsx23(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
const __initData13 = { code: "function VoicePanelUITsx24(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
const __initData14 = { code: "function VoicePanelUITsx25(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
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
const __initData17 = { code: "function VoicePanelUITsx29(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}}" };
const __initData18 = { code: "function VoicePanelUITsx30(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}]};}" };
let closure_61 = { code: "function VoicePanelUITsx31(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
const __initData19 = { code: "function VoicePanelUITsx32(){const{computeBorderRadii,mode,connected,wrapperDimensions,withSpring,BORDER_RADIUS_PHYSICS,VoicePanelModes,styles}=this.__closure;const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
const __initData20 = { code: "function VoicePanelUITsx33(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData21 = { code: "function VoicePanelUITsx34(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
const __initData22 = { code: "function VoicePanelUITsx35(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
const __initData23 = { code: "function VoicePanelUITsx36(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
const DrawerShadeOpacityPhysics = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
const __initData24 = { code: "function VoicePanelUITsx37(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
let closure_70 = react.memo((opacity) => {
  let items;
  opacity = opacity.opacity;
  const onPress = opacity.onPress;
  const tmp = closure_31();
  let obj = opacity(4566);
  const fn = function o() {
    let str;
    const obj = { opacity: obj2.withSpring(opacity.get(), DrawerShadeOpacityPhysics), pointerEvents: str };
    str = "auto";
    obj2 = spring;
    if (0 === opacity.get()) {
      str = "none";
    }
    return obj;
  };
  obj2 = { withSpring: opacity(5280).withSpring, opacity, DrawerShadeOpacityPhysics };
  fn.__closure = obj2;
  fn.__workletHash = 11475343199430;
  fn.__initData = __initData24;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_21(closure_6, obj4) };
  items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj4 = { style: tmp.shadePressable, onPress };
  const View = ReanimatedRexport.View;
  return closure_21(View, obj3);
});
const memoResult = react.memo(function VoicePanelUI() {
  let GestureDetector3;
  let IS_IOS;
  let LayerScope;
  let be;
  let channelId;
  let closure_1;
  let closure_26;
  let dragScrolling;
  let first;
  let first1;
  let isQuest;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj23;
  let obj26;
  let obj29;
  let obj31;
  let obj32;
  let obj33;
  let participant;
  let ref;
  let scrollPosition;
  let state2;
  let tmp2Result;
  let tmp2Result2;
  let tmp = closure_31();
  let tmp2 = importDefault;
  let tmp4 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ scrollPosition, dragScrolling, channelId } = context);
  const dismissPanel = context.dismissPanel;
  [first, importDefault] = react.useState(false);
  dependencyMap = react.useRef(-1);
  const items = [channelId];
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    clearTimeout(ref.current);
    let obj = channelId(ref[37]);
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
  closure_26 = undefined;
  closure_31 = undefined;
  let token;
  const context1 = react.useContext(VoicePanelStateContextDefault);
  const channelId2 = context1.channelId;
  const connected = context1.connected;
  const controlsSpecs = context1.controlsSpecs;
  const dismissPanel2 = context1.dismissPanel;
  const dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  const focused = context1.focused;
  const hideControls = context1.hideControls;
  const isFocusedVideoZoomed = context1.isFocusedVideoZoomed;
  let mode = context1.mode;
  const safeArea = context1.safeArea;
  const setMode = context1.setMode;
  const showControls = context1.showControls;
  const windowDimensions = context1.windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  const tmp13 = useSafeAreaInsetsDefault();
  POP_RESISTANCE = tmp13;
  let obj = channelId(4566);
  const sharedValue = obj.useSharedValue(0);
  obj2 = channelId(4566);
  const sharedValue1 = obj2.useSharedValue(false);
  let obj3 = channelId(4566);
  const sharedValue2 = obj3.useSharedValue(false);
  obj4 = channelId(4566);
  let obj5 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
  const sharedValue3 = obj4.useSharedValue(obj5);
  [first1, closure_26] = react.useState(true);
  const memo = react.useMemo(() => {
    const Gesture = channelId(ref[19]).Gesture;
    return Gesture.Native();
  }, []);
  let obj6 = channelId(4566);
  const animatedRef = obj6.useAnimatedRef();
  const obj7 = channelId(4566);
  const sharedValue4 = obj7.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  const obj8 = channelId(4566);
  let fn = function f() {
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
  fn2.__closure = { cheapWorkletShallowEqual: channelId(8853).cheapWorkletShallowEqual, VoicePanelModes, runOnJS: channelId(4566).runOnJS, setPanelFullscreen: callback, setPanelOpen: callback1, setPanelPIP: callback2 };
  fn2.__workletHash = 10989484188294;
  fn2.__initData = __initData2;
  ({ cheapWorkletShallowEqual: channelId(8853).cheapWorkletShallowEqual, VoicePanelModes, runOnJS: channelId(4566).runOnJS, setPanelFullscreen: callback, setPanelOpen: callback1, setPanelPIP: callback2 });
  const animatedReaction = obj8.useAnimatedReaction(fn, fn2);
  let fn3 = function _() {
    return mode.get();
  };
  fn3.__closure = { mode };
  fn3.__workletHash = 455036316035;
  fn3.__initData = __initData3;
  let fn4 = function p(arg0, arg1) {
    const tmp2 = arg0 === VoicePanelModes.DISMISSED && arg1 !== tmp.DISMISSED;
    if (tmp2) {
      dragScrolling(ref[21])(sharedValue4, { cancel: false, active: false });
    }
  };
  const obj10 = channelId(4566);
  fn4.__closure = { VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4 };
  fn4.__workletHash = 8982251844724;
  fn4.__initData = __initData4;
  ({ VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4 });
  const animatedReaction1 = obj10.useAnimatedReaction(fn3, fn4);
  const items3 = [channelId2];
  const callback3 = react.useCallback((arg0) => {
    const tmp = null != arg0 && isActivityParticipant(participant.getParticipant(channelId2, arg0));
    closure_26(!tmp);
  }, items3);
  function ve() {
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
  ve.__closure = { mode, VoicePanelModes, focused };
  ve.__workletHash = 16350113088465;
  ve.__initData = __initData5;
  const obj12 = channelId(4566);
  class Ve {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = channelId(ref[15]);
        obj.runOnJS(callback3)(arg0);
      }
    }
  }
  Ve.__closure = { runOnJS: channelId(4566).runOnJS, handleFocusChange: callback3 };
  Ve.__workletHash = 169980789473;
  Ve.__initData = __initData6;
  ({ runOnJS: channelId(4566).runOnJS, handleFocusChange: callback3 });
  const animatedReaction2 = obj12.useAnimatedReaction(ve, Ve);
  const tmp28 = useControlsLockDefault();
  closure_31 = tmp28;
  const items4 = [tmp13, connected, controlsSpecs, dismissPanel2, dismissToPIPGestureRef, focused, first1, hideControls, sharedValue4, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset, tmp28];
  const memo1 = react.useMemo(() => {
    const Gesture = channelId(ref[19]).Gesture;
    const Race = Gesture.Race;
    const Gesture2 = channelId(ref[19]).Gesture;
    const rect = { left: -1 * closure_20.left, right: -1 * closure_20.right };
    const TapResult = Gesture2.Tap();
    const hitSlopResult = TapResult.hitSlop(rect);
    const fn = function h() {
      if (connected.get()) {
        if (mode.get() !== setMode.PIP) {
          if (controlsSpecs.get().mode === wrapperDimensions.HIDDEN) {
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
    const rect1 = { left: -1 * closure_20.left, right: -1 * closure_20.right };
    const manualActivationResult = enabledResult1.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    const hitSlopResult1 = maxPointersResult.hitSlop(rect1);
    const withRefResult = hitSlopResult1.withRef(dismissToPIPGestureRef);
    let result = withRefResult.shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(memo);
    class S {
      constructor(arg0, activate) {
        const first = arg0.allTouches[0];
        const tmp2 = mode;
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
        let value = isFocusedVideoZoomed.get();
        if (!value) {
          value = closure_1_13.get() === setMode.PANEL && controlsSpecs.get().mode === wrapperDimensions.DRAWER;
          const tmp9 = closure_1_13.get() === setMode.PANEL && controlsSpecs.get().mode === wrapperDimensions.DRAWER;
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
        dragScrolling(callback[21])(wrapperOffset, { x: 0, y: 0 });
        const obj = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: value };
        ({ absoluteX: obj.absoluteXStart, absoluteY: obj.absoluteYStart } = arg0);
        set = tmp.set;
        value = connected.get();
        const tmp4 = callback;
        if (value) {
          value = mode.get() === setMode.PANEL;
        }
        const result = set(obj);
        if (controlsSpecs.get().mode === wrapperDimensions.FLOATING_DEFAULT) {
          obj2 = scrollPosition(tmp4[15]);
          obj2.runOnJS(controlsLock.lock)();
        }
      }
    };
    const onTouchesDownResult = result1.onTouchesDown(S);
    let obj3 = { gestureState: sharedValue4, updateSharedValueIfChanged: dragScrolling(ref[21]), wrapperOffset, connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: channelId(ref[15]).runOnJS, controlsLock };
    fn2.__closure = obj3;
    fn2.__workletHash = 5642296337720;
    fn2.__initData = __initData7;
    const fn3 = function c(state, fail) {
      let absoluteX;
      let absoluteY;
      const tmp = scrollPosition;
      if (state.state === scrollPosition(callback[19]).State.BEGAN) {
        if (!sharedValue4.get().active) {
          if (!sharedValue4.get().cancel) {
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
            if (mode.get() === setMode.PANEL) {
              const _Math6 = Math;
              if (diff < 0) {
                if (floor(closure_1_0.get()) <= 0) {
                  let tmp23 = !isQuest;
                  if (isQuest) {
                    tmp23 = maxResult > 10;
                  }
                  flag = tmp23;
                }
              }
              const value = focused.get();
              let id;
              if (value != null) {
                id = value.id;
              }
              flag = false;
              const tmp20 = null != id && tmp9;
              if (tmp20) {
                fail.fail();
                flag = false;
              }
            } else {
              flag = false;
              const tmp12 = obj.get() === tmp11.PIP && maxResult > 10;
              if (tmp12) {
                const tmpResult = tmp(callback[15]);
                tmpResult.runOnJS(dragScrolling(callback[23]))();
                flag = true;
              }
            }
            const tmp25 = dragScrolling(callback[21]);
            if (flag) {
              tmp25(wrapperOffset, { gestureActive: true });
              obj2 = { absoluteXStart: absoluteX, absoluteYStart: absoluteY + closure_1_0.get(), cancel: false, active: true, requiresPop: sharedValue4.get().requiresPop };
              set = sharedValue4.set;
              const result = set(obj2);
              const result1 = sharedValue1.set(true);
              fail.activate();
            } else {
              const obj3 = { absoluteYStart: absoluteY, absoluteXStart: absoluteX };
              tmp25(sharedValue4, obj3);
            }
          }
        }
      }
    };
    const onBeginResult = onTouchesDownResult.onBegin(fn2);
    obj4 = { State: channelId(ref[19]).State, gestureState: sharedValue4, mode, VoicePanelModes, scrollPosition, isQuest, MIN_GESTURE_MOVE: 10, focused, runOnJS: channelId(ref[15]).runOnJS, triggerIOSHaptic: dragScrolling(ref[23]), updateSharedValueIfChanged: dragScrolling(ref[21]), wrapperOffset, lockScrolling: sharedValue1 };
    fn3.__closure = obj4;
    fn3.__workletHash = 681403423937;
    fn3.__initData = __initData6;
    const fn4 = function l(absoluteY) {
      if (!sharedValue4.get().cancel) {
        if (mode.get() !== setMode.PIP) {
          const result = -1 * (obj.get().absoluteYStart - absoluteY.absoluteY);
          const tmp11 = connected.get() && !obj.get().requiresPop && result <= 0;
          if (tmp11) {
            obj2 = { requiresPop: true };
            set = sharedValue4.set;
            const merged = Object.assign(obj.get());
            const result1 = set(obj2);
          }
          if (sharedValue1.get()) {
            if (result < 0) {
              const result2 = obj4.set(false);
            }
            let diff = result;
            if (sharedValue4.get().requiresPop) {
              const _Math = Math;
              const bound = Math.max(result, 0);
              if (bound <= 180) {
                diff = bound - bound * closure_20;
              } else {
                const obj3 = { requiresPop: false };
                set2 = sharedValue4.set;
                const merged1 = Object.assign(obj.get());
                set2(obj3);
                const obj6 = scrollPosition(callback[15]);
                const runOnJSResult = obj6.runOnJS(scrollPosition(callback[24]).triggerHapticFeedback);
                runOnJSResult(scrollPosition(callback[24]).HapticFeedbackTypes.IMPACT_MEDIUM);
                diff = result;
              }
            }
            const point = { y: diff, x: 0 };
            dragScrolling(callback[21])(wrapperOffset, point);
          }
          const value = obj4.get();
          const tmp16 = !value && closure_1_0.get() <= 0;
          if (tmp16) {
            const result3 = obj4.set(true);
          }
        } else {
          const point1 = { x: -1 * (sharedValue4.get().absoluteXStart - absoluteY.absoluteX), y: -1 * (sharedValue4.get().absoluteYStart - absoluteY.absoluteY) };
          const tmp6 = dragScrolling(callback[21]);
          tmp6(wrapperOffset, point1);
        }
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
    let obj5 = { gestureState: sharedValue4, mode, VoicePanelModes, updateSharedValueIfChanged: dragScrolling(ref[21]), wrapperOffset, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE, PIP_POP_HEIGHT: 180, runOnJS: channelId(ref[15]).runOnJS, triggerHapticFeedback: channelId(ref[24]).triggerHapticFeedback, HapticFeedbackTypes: channelId(ref[24]).HapticFeedbackTypes };
    fn4.__closure = obj5;
    fn4.__workletHash = 5666961213183;
    fn4.__initData = __initData5;
    const fn5 = function s() {
      const result = sharedValue1.set(false);
      dragScrolling(callback[21])(sharedValue4, { cancel: false, active: false });
      dragScrolling(callback[21])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    let obj6 = { lockScrolling: sharedValue1, updateSharedValueIfChanged: dragScrolling(ref[21]), gestureState: sharedValue4, wrapperOffset };
    fn5.__closure = obj6;
    fn5.__workletHash = 2298193707049;
    fn5.__initData = __initData4;
    const fn6 = function n(velocityY) {
      let absoluteX;
      let absoluteY;
      let pipX;
      let pipY;
      let velocityX;
      const obj = sharedValue4;
      if (!sharedValue4.get().cancel) {
        velocityY = velocityY.velocityY;
        ({ velocityX, absoluteX, absoluteY } = velocityY);
        obj2 = mode;
        if (mode.get() === setMode.PIP) {
          const obj5 = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
          const calculatePIPPositionFromVelocity = scrollPosition(callback[25]).calculatePIPPositionFromVelocity;
          scrollPosition(callback[25]);
          const result = calculatePIPPositionFromVelocity(obj5);
          ({ pipX, pipY } = result);
          const obj6 = { pipX, pipY };
          dragScrolling(callback[21])(wrapperDimensions, obj6);
          dragScrolling(callback[21])(wrapperOffset, { gestureActive: false });
        } else if (obj2.get() === setMode.PANEL) {
          if (velocityY > 0) {
            if (connected.get()) {
              if (obj.get().requiresPop) {
                dragScrolling(callback[21])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                const result1 = sharedValue1.set(false);
              } else {
                obj4 = scrollPosition(callback[15]);
                obj4.runOnJS(closure_1_15)(setMode.PIP);
                dragScrolling(callback[21])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
              }
            } else {
              const diff = wrapperDimensions.get().drawerHeight - wrapperDimensions.get().drawerY;
              if (wrapperOffset.get().y > 0.2 * diff) {
                dragScrolling(callback[21])(wrapperOffset, { gestureActive: false });
                const obj3 = scrollPosition(callback[15]);
                obj3.runOnJS(dismissPanel2)();
              } else {
                dragScrolling(callback[21])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                const result2 = sharedValue1.set(false);
              }
            }
          } else {
            dragScrolling(callback[21])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
            const result3 = sharedValue1.set(false);
          }
        }
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
    fn6.__closure = { gestureState: sharedValue4, mode, VoicePanelModes, calculatePIPPositionFromVelocity: channelId(ref[25]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: dragScrolling(ref[21]), wrapperDimensions, wrapperOffset, connected, runOnJS: channelId(ref[15]).runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel: dismissPanel2 };
    fn6.__workletHash = 10456175839006;
    fn6.__initData = __initData3;
    ({ gestureState: sharedValue4, mode, VoicePanelModes, calculatePIPPositionFromVelocity: channelId(ref[25]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: dragScrolling(ref[21]), wrapperDimensions, wrapperOffset, connected, runOnJS: channelId(ref[15]).runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel: dismissPanel2 });
    const fn7 = function t() {
      const tmp = 0 !== wrapperOffset.get().y && mode.get() === setMode.PANEL;
      if (!tmp) {
        dragScrolling(callback[21])(sharedValue4, { cancel: false, active: false });
      }
      const obj = scrollPosition(callback[15]);
      obj.runOnJS(controlsLock.unlock)();
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn6);
    fn7.__closure = { wrapperOffset, mode, VoicePanelModes, updateSharedValueIfChanged: dragScrolling(ref[21]), gestureState: sharedValue4, runOnJS: channelId(ref[15]).runOnJS, controlsLock };
    fn7.__workletHash = 4310054092327;
    fn7.__initData = __initData2;
    ({ wrapperOffset, mode, VoicePanelModes, updateSharedValueIfChanged: dragScrolling(ref[21]), gestureState: sharedValue4, runOnJS: channelId(ref[15]).runOnJS, controlsLock });
    return Race(onStartResult, onEndResult.onFinalize(fn7));
  }, items4);
  const obj15 = { onBeginDrag: be, onEndDrag: Ce, onMomentumEnd: Ee, onScroll: Ae };
  be = function be(contentOffset) {
    const result = scrollPosition.set(contentOffset.contentOffset.y);
    const result1 = dragScrolling.set(true);
  };
  be.__closure = { scrollPosition, dragScrolling };
  be.__workletHash = 7129316645562;
  be.__initData = __initData7;
  const obj14 = channelId(4566);
  class Ce {
    constructor() {
      const result = dragScrolling.set(false);
    }
  }
  Ce.__closure = { dragScrolling };
  Ce.__workletHash = 16780787183039;
  Ce.__initData = __initData8;
  class Ee {
    constructor() {
      const result = dragScrolling.set(false);
    }
  }
  Ee.__closure = { dragScrolling };
  Ee.__workletHash = 13772673540365;
  Ee.__initData = __initData9;
  class Ae {
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
  Ae.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(4566).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, viewableChunks: sharedValue3 };
  Ae.__workletHash = 3971019682754;
  Ae.__initData = __initData10;
  ({ lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(4566).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, viewableChunks: sharedValue3 });
  const animatedScrollHandler = obj14.useAnimatedScrollHandler(obj15);
  const obj17 = channelId(4566);
  class Te {
    constructor() {
      return mode.get();
    }
  }
  Te.__closure = { mode };
  Te.__workletHash = 17369688194549;
  Te.__initData = __initData11;
  class Me {
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
  Me.__closure = { VoicePanelModes, lockScrolling: sharedValue1 };
  Me.__workletHash = 1687129825906;
  Me.__initData = __initData12;
  const animatedReaction3 = obj17.useAnimatedReaction(Te, Me);
  const obj18 = channelId(4531);
  token = obj18.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const obj19 = channelId(4566);
  class Ye {
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
      tmp7 = dragScrolling(ref[27]);
      return obj;
    }
  }
  Ye.__closure = { mode, VoicePanelModes, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token };
  Ye.__workletHash = 12205535325007;
  Ye.__initData = __initData13;
  const items5 = [sharedValue];
  ({ mode, VoicePanelModes, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token });
  const animatedProps = obj19.useAnimatedProps(Ye);
  const callback4 = react.useCallback((arg0, arg1) => {
    const result = sharedValue.set(arg1);
  }, items5);
  const obj21 = channelId(4566);
  class Re {
    constructor() {
      const value = mode.get();
      if (VoicePanelModes.PIP !== value) {
        if (VoicePanelModes.DISMISSED !== value) {
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
  Re.__closure = { mode, VoicePanelModes, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
  Re.__workletHash = 8663151154349;
  Re.__initData = __initData14;
  const derivedValue = obj21.useDerivedValue(Re);
  const tmp36 = useControlsHoverGestureDefault();
  const effect = react.useEffect(() => closure_1(true), []);
  let tmp38 = null;
  if (first) {
    const obj22 = { value: analyticsLocations, children: closure_22(LayerScope, obj23) };
    const AnalyticsLocationProvider = tmp14(6583).AnalyticsLocationProvider;
    obj23 = { children: items6 };
    LayerScope = tmp14(6577).LayerScope;
    items6 = [closure_21(VoicePanelSystemUIManagerDefault, {}), , ];
    const obj24 = { opacity: derivedValue, onPress: dismissPanel };
    items6[1] = closure_21(closure_70, obj24);
    const obj25 = { gesture: tmp36, children: closure_22(tmp2Result, obj26) };
    const GestureDetector = tmp14(6073).GestureDetector;
    let _HermesInternal = HermesInternal;
    let str = "voice-panel-ui-";
    obj26 = { style: tmp.accessibilityView, nativeID: "voice-panel-ui-" + channelId, accessibilityViewIsModal: true, layout: layoutTransition, onAccessibilityEscape: closeVoicePanelsDefault, children: items7 };
    tmp2Result = VoicePanelAccessibilityViewDefault;
    items7 = [closure_21(VoicePanelDismissableContentDefault, {}), , , ];
    const obj27 = { wrapperOffset, children: items8 };
    const obj28 = { zIndex: 2, children: closure_21(VoicePanelHeaderDefault, obj29) };
    const LayerScope2 = tmp14(6577).LayerScope;
    obj29 = { wrapperOffset, gestureState: sharedValue4, layout: layoutTransition };
    items8 = [closure_21(LayerScope2, obj28), ];
    const obj30 = { gesture: memo1, children: closure_21(tmp2Result2, obj31) };
    const GestureDetector2 = tmp14(6073).GestureDetector;
    obj31 = { style: StyleSheet.absoluteFill, layout: layoutTransition, collapsable: false, children: closure_21(GestureDetector3, obj32) };
    obj32 = { gesture: memo, children: closure_22(closure_32, obj33) };
    obj33 = { layout: scrollViewLayoutTransition, ref: animatedRef, onScroll: animatedScrollHandler, onMomentumScrollEnd: NOOP, animatedProps, style: tmp.scrollView, onContentSizeChange: callback4, contentContainerStyle: tmp.scrollViewContent, scrollEventThrottle: 8.333333333333334, children: items9 };
    tmp2Result2 = ReanimatedNativeViewDefault;
    GestureDetector3 = tmp14(6073).GestureDetector;
    const obj34 = { viewableChunks: sharedValue3 };
    items9 = [closure_21(VoicePanelCardViewDefault, obj34), closure_21(VoicePanelPreJoinContentDefault, {})];
    items8[1] = closure_21(GestureDetector2, obj30);
    items7[1] = closure_22(AnimatedWrapper, obj27);
    items7[2] = closure_21(VoicePanelPIPDefault, {});
    const obj35 = { gestureState: sharedValue4 };
    items7[3] = closure_21(VoicePanelControlsDefault, obj35);
    items6[2] = closure_21(GestureDetector, obj25);
    tmp38 = closure_21(AnalyticsLocationProvider, obj22);
  }
  return tmp38;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default memoResult;
export const REDUCED_MOTION_OPACITY_PHYSICS = obj5;
