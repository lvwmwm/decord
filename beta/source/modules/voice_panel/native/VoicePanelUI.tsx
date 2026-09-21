// Module ID: 17482
// Function ID: 17483
// Name: VoicePanelUI
// Dependencies: [32, 19, 17, 4774, 8566, 4966, 12420, 12418, 4779, 12421, 21, 3, 5187, 4758, 580, 4497, 1613, 558, 568, 12419, 1616, 6891, 9660, 10345, 17483, 4726, 17484, 4462, 12424, 10181, 17486, 17487, 11293, 9696, 5087, 7320, 7409, 7429, 1252, 17488, 7403, 17489, 17490, 9568, 17491, 17493, 17550, 17582, 17586, 17592, 2]

// Module 17482 (VoicePanelUI)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4497 */;
import HapticUtils from "HapticUtils" /* 4726 */;
import spring from "spring" /* 5187 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6891 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7320 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7409 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import ExternalPipDefault from "ExternalPip" /* 9696 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10345 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11293 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12419 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 12424 */;
import utils_triggerIOSHapticDefault from "utils/triggerIOSHaptic" /* 17483 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17484 */;
import useControlsLockDefault from "useControlsLock" /* 17488 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;
import AppFreezeStore from "AppFreezeStore" /* 8566 */;
import VoicePanelStore from "VoicePanelStore" /* 4966 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function useWrapperStyles(wrapperOffset) {
  _require = wrapperOffset;
  const height = require("useGlobalStatusIndicatorState").useGlobalStatusIndicatorState().height;
  const tmp3 = closure_34();
  dependencyMap = tmp3;
  const context = connected.useContext(height(12419));
  const wrapperDimensions = context.wrapperDimensions;
  connected = context.connected;
  const controlsSpecs = context.controlsSpecs;
  const focused = context.focused;
  const mode = context.mode;
  const preJoinContentSize = context.preJoinContentSize;
  const safeArea = context.safeArea;
  const windowDimensions = context.windowDimensions;
  const useReducedMotion = context.useReducedMotion;
  let obj = require("useGlobalStatusIndicatorState");
  obj2 = connected;
  const fn = function n() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 5538137200137;
  fn.__initData = __initData36;
  const derivedValue = require("ReanimatedRexport").useDerivedValue(fn);
  obj4 = require("VoicePanelPIPStateContext");
  const pIPState = obj4.usePIPState();
  let obj3 = require("ReanimatedRexport");
  const fn2 = function l() {
    return { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
  };
  fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
  fn2.__workletHash = 7089847929407;
  fn2.__initData = __initData37;
  const fn3 = function s(safeAreaState, windowHeight) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, windowHeight)) {
      ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
      if (modeToSet !== VoicePanelModes.PIP) {
        let tmp9 = null == windowHeight;
        if (!tmp9) {
          tmp9 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
          const tmp10 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
        }
        value = wrapperDimensions.get();
        ({ drawerX, drawerY } = value);
        const diff = windowHeight - tmp7;
        if (modeToSet === tmp8.PANEL) {
          if (connected) {
            obj2 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp9, mode: modeToSet };
            updateSharedValueIfChangedDefault(tmp11, obj2);
            updateSharedValueIfChangedDefault(closure_0, { gestureActive: false });
          } else {
            const obj3 = { windowWidth, connected, safeAreaLeft: null, safeAreaRight: null };
            ({ left: obj5.safeAreaLeft, right: obj5.safeAreaRight } = safeArea);
            const maxPanelWidth = tmp(17487).getMaxPanelWidth(obj3);
            const tmpResult = tmp(17487);
            const panelX = tmp(17487).getPanelX(windowWidth, maxPanelWidth);
            const _Math = Math;
            const tmpResult2 = tmp(17487);
            obj4 = { drawerWidth: maxPanelWidth, drawerHeight: diff, drawerX: panelX, drawerY: roundToNearestPixelDefault(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff)), animated: tmp9, mode: modeToSet };
            updateSharedValueIfChangedDefault(tmp11, obj4);
            const tmp23Result = roundToNearestPixelDefault(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff));
          }
        } else if (modeToSet === tmp8.DISMISSED) {
          const tmp32 = updateSharedValueIfChangedDefault;
          if (connected) {
            const obj6 = { mode: modeToSet };
            tmp32(tmp11, obj6);
            let tmp16 = tmp31;
          } else {
            const obj7 = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
            tmp32(tmp11, obj7);
            tmp16 = tmp31;
          }
          tmp16(10345)(closure_0, { gestureActive: false, x: 0, y: 0 });
        }
      }
    }
  };
  let obj5 = require("ReanimatedRexport");
  fn3.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(10345), wrapperOffset, getMaxPanelWidth: require("PanelSizeUtils").getMaxPanelWidth, getPanelX: require("PanelSizeUtils").getPanelX, roundToNearestPixel: height(11293), windowDimensions };
  fn3.__workletHash = 7580692586417;
  fn3.__initData = __initData38;
  const animatedReaction = obj5.useAnimatedReaction(fn2, fn3);
  let obj6 = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(10345), wrapperOffset, getMaxPanelWidth: require("PanelSizeUtils").getMaxPanelWidth, getPanelX: require("PanelSizeUtils").getPanelX, roundToNearestPixel: height(11293), windowDimensions };
  class A {
    constructor() {
      value = useReducedMotion.get();
      gestureActive = !value;
      if (!value) {
        tmp2 = wrapperDimensions;
        gestureActive = wrapperDimensions.get().animated;
      }
      if (!gestureActive) {
        tmp3 = closure_0;
        gestureActive = closure_0.get().gestureActive;
      }
      obj = closure_0;
      value1 = closure_0.get();
      ({ gestureActive: gestureActive2, y } = value1);
      value2 = wrapperDimensions.get();
      ({ drawerY, drawerX } = value2);
      value3 = connected.get();
      tmp7 = !value3;
      if (!value3) {
        if (!gestureActive2) {
          num = 0;
          gestureActive2 = 0 !== y;
        }
        tmp7 = gestureActive2;
      }
      sum1 = drawerX;
      sum = drawerY;
      if (tmp7) {
        tmp10 = globalThis;
        _Math = Math;
        num2 = 0;
        sum = drawerY + Math.max(y, 0);
        sum1 = drawerX + value1.x;
      }
      class VoicePanelUITsx53 {
        constructor(arg0) {
          tmp = wrapperOffset;
          if (wrapperOffset) {
            tmp2 = closure_1_7;
            tmp3 = closure_15;
            tmp = closure_1_7.get() !== closure_15.DISMISSED;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[15]);
            tmp6 = height;
            tmp7 = obj.runOnJS(height(closure_2[33]).updateSourceTrackingView)();
          }
          return;
        }
      }
      obj1 = { mode, VoicePanelModes, runOnJS: closure_0(closure_2[15]).runOnJS, updateSourceTrackingView: closure_1(closure_2[33]).updateSourceTrackingView };
      tmp11 = closure_0;
      tmp12 = closure_2;
      VoicePanelUITsx53.__closure = obj1;
      VoicePanelUITsx53.__workletHash = 6837142333833;
      VoicePanelUITsx53.__initData = closure_87;
      obj3 = closure_0(closure_2[12]);
      tmp13 = obj.get().gestureActive ? closure_17 : closure_32;
      str = "animate-never";
      str2 = "animate-never";
      if (gestureActive) {
        str2 = "animate-always";
      }
      obj8 = { translateX: obj3.withSpring(sum1, tmp13, str2, VoicePanelUITsx53) };
      items = [, ];
      items[0] = obj8;
      tmp11Result = tmp11(tmp12[12]);
      tmp14 = obj.get().gestureActive ? closure_17 : closure_32;
      if (gestureActive) {
        str = "animate-always";
      }
      obj9 = { transform: null };
      obj10 = { translateY: tmp11Result.withSpring(sum, tmp14, str, VoicePanelUITsx53) };
      items[1] = obj10;
      obj9.transform = items;
      return obj9;
    }
  }
  let obj7 = require("ReanimatedRexport");
  A.__closure = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: require("ReanimatedRexport").runOnJS, updateSourceTrackingView: height(9696).updateSourceTrackingView, withSpring: require("spring").withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, DRAWER_SIZE_PHYSICS: obj4 };
  A.__workletHash = 14488035665779;
  A.__initData = __initData39;
  const animatedStyle = obj7.useAnimatedStyle(A);
  const obj8 = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: require("ReanimatedRexport").runOnJS, updateSourceTrackingView: height(9696).updateSourceTrackingView, withSpring: require("spring").withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, DRAWER_SIZE_PHYSICS: obj4 };
  class C {
    constructor() {
      obj = mode;
      obj2 = connected;
      value = mode.get();
      if (typeof computeBorderRadii === "function") {
        tmp3 = VoicePanelModes;
        if (value === VoicePanelModes.PIP) {
          num = DEFAULT_BORDER_RADIUS_PIP;
        } else {
          num = 0;
          if (!tmp2) {
            num = DEFAULT_BORDER_RADIUS;
          }
        }
        size = { width: null, height: null, borderRadius: null, pointerEvents: null, backgroundColor: null };
        tmp4 = wrapperDimensions;
        size.width = wrapperDimensions.get().drawerWidth;
        size.height = wrapperDimensions.get().drawerHeight;
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj4 = closure_0(closure_2[12]);
        tmp7 = BORDER_RADIUS_PHYSICS;
        size.borderRadius = obj4.withSpring(num, BORDER_RADIUS_PHYSICS);
        str = "none";
        if (obj.get() === tmp3.PANEL) {
          str = "auto";
        }
        size.pointerEvents = str;
        str2 = "transparent";
        if (!obj2.get()) {
          tmp8 = closure_2;
          str2 = closure_2.maskDefaultBackground.backgroundColor;
        }
        size.backgroundColor = str2;
        return size;
      } else {
        str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj9 = require("ReanimatedRexport");
  C.__closure = { computeBorderRadii, mode, connected, wrapperDimensions, withSpring: require("spring").withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp3 };
  C.__workletHash = 8780113527375;
  C.__initData = __initData41;
  animatedStyle1 = obj9.useAnimatedStyle(C);
  if (!require("ReleaseChannelUtils").isStable) {
    class H {
      constructor() {
        return windowDimensions.get();
      }
    }
    const obj11 = { windowDimensions };
    H.__closure = obj11;
    H.__workletHash = 5417428185301;
    H.__initData = __initData42;
    const fn4 = function k(arg0) {
      const obj = wrapperOffset(closure_2[15]);
      wrapperOffset(closure_2[15]).runOnJS(log)("Window dimensions changed:", JSON.stringify(arg0));
    };
    const obj12 = { runOnJS: tmp(4497).runOnJS, log };
    fn4.__closure = obj12;
    fn4.__workletHash = 2055218123366;
    fn4.__initData = __initData43;
    const animatedReaction1 = tmp(4497).useAnimatedReaction(H, fn4);
    let tmpResult = tmp(4497);
    class T {
      constructor() {
        return wrapperDimensions.get();
      }
    }
    const obj13 = { wrapperDimensions };
    T.__closure = obj13;
    T.__workletHash = 3714374990167;
    T.__initData = __initData44;
    const fn5 = function y(arg0) {
      const obj = wrapperOffset(closure_2[15]);
      wrapperOffset(closure_2[15]).runOnJS(log)("Wrapper dimensions changed:", JSON.stringify(arg0));
    };
    const obj14 = { runOnJS: tmp(4497).runOnJS, log };
    fn5.__closure = obj14;
    fn5.__workletHash = 2552930207447;
    fn5.__initData = __initData45;
    const animatedReaction2 = tmp(4497).useAnimatedReaction(T, fn5);
    let tmpResult2 = tmp(4497);
  }
  let items = [tmp3.wrapper, animatedStyle1, animatedStyle];
  return obj2.useMemo(() => ({ wrapperRootStyles: closure_2.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1 }), items);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Pressable: metroRequire, ScrollView } = get_ActivityIndicator);
const VoicePanelConstants = fn(12420);
({ BORDER_RADIUS_PHYSICS: c10, DEFAULT_BORDER_RADIUS } = VoicePanelConstants);
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelConstants.DEFAULT_BORDER_RADIUS_PIP;
({ DRAWER_SPRING_PHYSICS, IS_IOS: map1, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const LAYOUT_PHYSICS = VoicePanelConstants.LAYOUT_PHYSICS;
const DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = VoicePanelConstants.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
const VoicePanelControlsModes = fn(12418).VoicePanelControlsModes;
const isActivityParticipant = fn(4779).isActivityParticipant;
const POP_RESISTANCE = fn(12421).POP_RESISTANCE;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let c24 = 10;
let c25 = 0.2;
let c26 = 180;
log = new LoggerDefault("VoicePanelUI");
function layoutTransition(originX) {
  const obj = { animations: null, initialValues: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: null, width: null, height: null };
  size.originY = spring.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  size.width = spring.withSpring(originX.targetWidth, LAYOUT_PHYSICS, "animate-always");
  size.height = spring.withSpring(originX.targetHeight, LAYOUT_PHYSICS, "animate-always");
  obj.animations = size;
  obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
let tmp5 = new LoggerDefault("VoicePanelUI");
layoutTransition.__closure = { withSpring: fn(5187).withSpring, LAYOUT_PHYSICS };
layoutTransition.__workletHash = 16454235842679;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj2 = {};
let merged = Object.assign(LAYOUT_PHYSICS);
obj2.damping = 0;
function scrollViewLayoutTransition(originX) {
  const obj = { animations: null, initialValues: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: null, width: null, height: null };
  size.originY = spring.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  size.width = spring.withSpring(originX.targetWidth, obj2, "animate-always");
  size.height = spring.withSpring(originX.targetHeight, obj2, "animate-always");
  obj.animations = size;
  obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
let obj = { withSpring: fn(5187).withSpring, LAYOUT_PHYSICS };
scrollViewLayoutTransition.__closure = { withSpring: fn(5187).withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2 };
scrollViewLayoutTransition.__workletHash = 11745134918460;
scrollViewLayoutTransition.__initData = { code: "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj4 = {};
let merged1 = Object.assign(DRAWER_SPRING_PHYSICS);
obj4.mass = 0.3;
obj4.damping = 100;
obj4.stiffness = 100;
let obj5 = {};
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
obj5.mass = 2;
function computeViewableChunksFromScrollPosition(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  const rounded = Math.ceil(arg1 / VOICE_PANEL_CHUNK_DIVISOR);
  const sum = Math.max(Math.floor(arg0 / rounded) - num, 0) + VOICE_PANEL_CHUNK_DIVISOR + 2 * num;
  const bound = Math.min(sum, Math.ceil(arg2 / rounded));
  return { start: Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - 2 * num, 0), end: bound };
}
computeViewableChunksFromScrollPosition.__closure = { VOICE_PANEL_CHUNK_DIVISOR };
computeViewableChunksFromScrollPosition.__workletHash = 3008066799757;
computeViewableChunksFromScrollPosition.__initData = { code: "function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}" };
const createStyles = fn(4758);
let obj6 = { accessibilityView: null, wrapper: null, maskDefaultBackground: null, scrollView: null, scrollViewContent: null, shade: null, shadePressable: null };
let obj8 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj8.overflow = "hidden";
obj6.accessibilityView = obj8;
let obj9 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj9.alignItems = "flex-start";
obj9.zIndex = 1;
obj6.wrapper = obj9;
let obj3 = { withSpring: fn(5187).withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2 };
obj6.maskDefaultBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj11 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj11.borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
obj11.borderTopRightRadius = DEFAULT_BORDER_RADIUS;
obj6.scrollView = obj11;
obj6.scrollViewContent = { flexGrow: 1, flexShrink: 0 };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj6.shade = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
obj6.shadePressable = { flexGrow: 1 };
let closure_34 = createStyles.createStyles(obj6);
let closure_35 = ReanimatedRexport.createAnimatedComponent(ScrollView);
const MetaQuestUtils = fn(1613);
let closure_36 = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
const __initData2 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{gestureActive:gestureActive,connected:connected_0,mode:mode_0}=props;if(!connected_0||gestureActive||mode_0!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode_0===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode_0===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
const __initData3 = { code: "function VoicePanelUITsx6(){const{mode}=this.__closure;return mode.get();}" };
const __initData4 = { code: "function VoicePanelUITsx7(mode_1,previous_0){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode_1===VoicePanelModes.DISMISSED&&previous_0!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData5 = { code: "function VoicePanelUITsx8(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData6 = { code: "function VoicePanelUITsx9(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData7 = { code: "function VoicePanelUITsx10(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get()){return;}if(!(mode.get()===VoicePanelModes.PIP)){if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}}" };
let closure_44 = { code: "function VoicePanelUITsx11(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;var pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData8 = { code: "function VoicePanelUITsx12(event_3){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel){return;}var velocityX=event_3.velocityX,velocityY=event_3.velocityY,absoluteX_0=event_3.absoluteX,absoluteY_0=event_3.absoluteY;if(mode.get()===VoicePanelModes.PIP){var _calculatePIPPosition=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()}),pipX=_calculatePIPPosition.pipX,pipY=_calculatePIPPosition.pipY;updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{var panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;var dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}}" };
const __initData9 = { code: "function VoicePanelUITsx13(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}" };
const __initData10 = { code: "function VoicePanelUITsx14(event_2){const{gestureState,mode,VoicePanelModes,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(gestureState.get().cancel){return;}if(mode.get()!==VoicePanelModes.PIP){var newYOffset=(gestureState.get().absoluteYStart-event_2.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=0){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<0){lockScrolling.set(false);}else{if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}}if(gestureState.get().requiresPop){var distance=Math.max(newYOffset,0);var resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event_2.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event_2.absoluteY)*-1});}}" };
const __initData11 = { code: "function VoicePanelUITsx15(event_1,manager_0){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event_1.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel){return;}var _event_1$changedTouch=event_1.changedTouches[0],absoluteY=_event_1$changedTouch.absoluteY,absoluteX=_event_1$changedTouch.absoluteX;var yDiff=gestureState.get().absoluteYStart-absoluteY;var xDiff=gestureState.get().absoluteXStart-absoluteX;var absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));var isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;var startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else{var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager_0.fail();}}}else{if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager_0.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
const __initData12 = { code: "function VoicePanelUITsx16(event_0){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes}=this.__closure;if(gestureState.get().cancel){return;}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event_0.absoluteX,absoluteYStart:event_0.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});}" };
const __initData13 = { code: "function VoicePanelUITsx17(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;var touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
const __initData14 = { code: "function onBeginDrag_VoicePanelUITsx18(event_4){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event_4.contentOffset.y);dragScrolling.set(true);}" };
const __initData15 = { code: "function onEndDrag_VoicePanelUITsx19(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData16 = { code: "function onMomentumEnd_VoicePanelUITsx20(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData17 = { code: "function onScroll_VoicePanelUITsx21(event_5){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event_5.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event_5.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event_5.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
const __initData18 = { code: "function VoicePanelUITsx22(){const{mode}=this.__closure;return mode.get();}" };
const __initData19 = { code: "function VoicePanelUITsx23(mode_2,previous_1){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous_1==null||mode_2===previous_1){return;}if(mode_2===VoicePanelModes.PANEL&&previous_1===VoicePanelModes.PIP){lockScrolling.set(false);}else{if(mode_2===VoicePanelModes.PIP){lockScrolling.set(true);}}}" };
const __initData20 = { code: "function VoicePanelUITsx24(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?\"none\":\"auto\",scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
const __initData21 = { code: "function VoicePanelUITsx25(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:{return 0;}default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
const __initData22 = { code: "function VoicePanelUITsx26(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
const __initData23 = { code: "function VoicePanelUITsx27(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected_0,mode:mode_0}=props;if(!connected_0||gestureActive||mode_0!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode_0===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode_0===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
const __initData24 = { code: "function VoicePanelUITsx28(){const{mode}=this.__closure;return mode.get();}" };
const __initData25 = { code: "function VoicePanelUITsx29(mode_1,previous_0){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode_1===VoicePanelModes.DISMISSED&&previous_0!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData26 = { code: "function VoicePanelUITsx30(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData27 = { code: "function VoicePanelUITsx31(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_65 = { code: "function VoicePanelUITsx32(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_66 = { code: "function VoicePanelUITsx33(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
let closure_67 = { code: "function VoicePanelUITsx34(event_3){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0}=event_3;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_68 = { code: "function VoicePanelUITsx35(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});console.log('onTouchesCancelled');}" };
let closure_69 = { code: "function VoicePanelUITsx36(event_2){const{gestureState,mode,VoicePanelModes,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()!==VoicePanelModes.PIP){const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event_2.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event_2.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event_2.absoluteY)*-1});}}" };
let closure_70 = { code: "function VoicePanelUITsx37(event_1,manager_0){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event_1.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event_1.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager_0.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager_0.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_71 = { code: "function VoicePanelUITsx38(event_0){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event_0.absoluteX,absoluteYStart:event_0.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});}" };
let closure_72 = { code: "function VoicePanelUITsx39(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
const __initData28 = { code: "function onBeginDrag_VoicePanelUITsx40(event_4){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event_4.contentOffset.y);dragScrolling.set(true);}" };
const __initData29 = { code: "function onEndDrag_VoicePanelUITsx41(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData30 = { code: "function onMomentumEnd_VoicePanelUITsx42(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData31 = { code: "function onScroll_VoicePanelUITsx43(event_5){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event_5.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event_5.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event_5.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
const __initData32 = { code: "function VoicePanelUITsx44(){const{mode}=this.__closure;return mode.get();}" };
const __initData33 = { code: "function VoicePanelUITsx45(mode_2,previous_1){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous_1==null||mode_2===previous_1)return;if(mode_2===VoicePanelModes.PANEL&&previous_1===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode_2===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
const __initData34 = { code: "function VoicePanelUITsx46(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
const __initData35 = { code: "function VoicePanelUITsx47(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
let ReactCompilerGating = fn(558);
let closure_81 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollPosition) => {
  const cResult = scrollPosition(setPanelFullscreen[18]).c(86);
  scrollPosition = scrollPosition.scrollPosition;
  const dragScrolling = scrollPosition.dragScrolling;
  setPanelFullscreen = scrollPosition.setPanelFullscreen;
  const setPanelOpen = scrollPosition.setPanelOpen;
  const setPanelPIP = scrollPosition.setPanelPIP;
  const context = setPanelPIP.useContext(dragScrolling(setPanelFullscreen[19]));
  ({ channelId: StyleSheet, connected } = context);
  const controlsSpecs = context.controlsSpecs;
  const dismissPanel = context.dismissPanel;
  ({ dismissToPIPGestureRef, focused } = context);
  let left = context.hideControls;
  const isFocusedVideoZoomed = context.isFocusedVideoZoomed;
  let mode = context.mode;
  const safeArea = context.safeArea;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  let right = dragScrolling(setPanelFullscreen[20])();
  let obj = scrollPosition(setPanelFullscreen[18]);
  const sharedValue = scrollPosition(setPanelFullscreen[15]).useSharedValue(0);
  obj2 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue1 = scrollPosition(setPanelFullscreen[15]).useSharedValue(false);
  let obj3 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue2 = scrollPosition(setPanelFullscreen[15]).useSharedValue(false);
  obj4 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue3 = scrollPosition(setPanelFullscreen[15]).useSharedValue({ start: 0, end: setMode });
  let num = 2;
  let obj5 = scrollPosition(setPanelFullscreen[15]);
  let obj6 = { start: 0, end: setMode };
  [tmp11, NOOP] = setPanelOpen(setPanelPIP.useState(true), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const Gesture = tmp(tmp2[21]).Gesture;
    const NativeResult = Gesture.Native();
    cResult[0] = NativeResult;
    let first = NativeResult;
  } else {
    first = cResult[0];
  }
  const tmp10 = setPanelOpen(setPanelPIP.useState(true), 2);
  const animatedRef = scrollPosition(setPanelFullscreen[15]).useAnimatedRef();
  let tmpResult = scrollPosition(setPanelFullscreen[15]);
  const sharedValue4 = scrollPosition(setPanelFullscreen[15]).useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  const tmpResult10 = scrollPosition(setPanelFullscreen[15]);
  class Ve {
    constructor() {
      obj = { gestureActive: closure_25.get().active, connected: connected.get(), mode: mode.get() };
      return obj;
    }
  }
  Ve.__closure = { gestureState: sharedValue4, connected, mode };
  Ve.__workletHash = 5596084348360;
  Ve.__initData = __initData;
  function ve(mode, safeAreaState2) {
    if (!obj.cheapWorkletShallowEqual(mode, safeAreaState2)) {
      mode = mode.mode;
      if (mode.connected) {
        if (!mode.gestureActive) {
          if (mode === VoicePanelModes.PANEL) {
            tmp2(4497).runOnJS(setPanelFullscreen)(true);
            const tmp2Result = tmp2(4497);
          }
          if (mode === VoicePanelModes.PANEL) {
            tmp2(4497).runOnJS(setPanelOpen)(true);
            const tmp2Result6 = tmp2(4497);
          } else {
            tmp2(4497).runOnJS(setPanelOpen)(false);
            const tmp2Result7 = tmp2(4497);
          }
          if (mode === tmp9.PIP) {
            tmp2(4497).runOnJS(setPanelPIP)(true);
            const tmp2Result8 = tmp2(4497);
          } else {
            tmp2(4497).runOnJS(setPanelPIP)(false);
            const tmp2Result9 = tmp2(4497);
          }
          tmp9 = VoicePanelModes;
        }
      }
      tmp2(4497).runOnJS(setPanelFullscreen)(false);
      const tmp2Result10 = tmp2(4497);
    }
  }
  const tmpResult11 = scrollPosition(setPanelFullscreen[15]);
  ve.__closure = { cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual, VoicePanelModes: showControls, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP };
  ve.__workletHash = 10370987544416;
  ve.__initData = __initData2;
  const animatedReaction = tmpResult11.useAnimatedReaction(Ve, ve);
  let obj7 = { cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual, VoicePanelModes: showControls, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP };
  function be() {
    return mode.get();
  }
  be.__closure = { mode };
  be.__workletHash = 455036316035;
  be.__initData = __initData3;
  class Oe {
    constructor(arg0, arg1) {
      tmp2 = scrollPosition === VoicePanelModes.DISMISSED;
      if (tmp2) {
        tmp3 = arg1;
        tmp2 = arg1 !== tmp.DISMISSED;
      }
      if (tmp2) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp6 = closure_25;
        tmp7 = closure_1(closure_2[23])(closure_25, { cancel: false, active: false });
      }
      return;
    }
  }
  const tmpResult12 = scrollPosition(setPanelFullscreen[15]);
  Oe.__closure = { VoicePanelModes: showControls, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), gestureState: sharedValue4 };
  Oe.__workletHash = 10389543324500;
  Oe.__initData = __initData4;
  const animatedReaction1 = tmpResult12.useAnimatedReaction(be, Oe);
  function handleFocusChange(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      tmp = isActivityParticipant(ChannelRTCStore.getParticipant(StyleSheet, arg0));
    }
    NOOP(!tmp);
  }
  const obj8 = { VoicePanelModes: showControls, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), gestureState: sharedValue4 };
  class Ce {
    constructor() {
      tmp = undefined;
      if (mode.get() === VoicePanelModes.PANEL) {
        tmp2 = focused;
        value = focused.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  Ce.__closure = { mode, VoicePanelModes: showControls, focused };
  Ce.__workletHash = 16350113088465;
  Ce.__initData = __initData5;
  class Ae {
    constructor(arg0, arg1) {
      if (scrollPosition !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = handleFocusChange;
        tmp4 = obj.runOnJS(handleFocusChange)(scrollPosition);
      }
      return;
    }
  }
  const tmpResult13 = scrollPosition(setPanelFullscreen[15]);
  Ae.__closure = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
  Ae.__workletHash = 169980789473;
  Ae.__initData = __initData6;
  const animatedReaction2 = tmpResult13.useAnimatedReaction(Ce, Ae);
  if (cResult[1] === connected) {
    if (cResult[2] === controlsSpecs) {
      if (cResult[3] === dismissPanel) {
        if (cResult[4] === dismissToPIPGestureRef) {
          if (cResult[5] === focused) {
            if (cResult[6] === sharedValue4) {
              if (cResult[7] === tmp11) {
                if (cResult[8] === left) {
                  if (cResult[9] === right.left) {
                    if (cResult[10] === right.right) {
                      if (cResult[11] === isFocusedVideoZoomed) {
                        if (cResult[12] === sharedValue1) {
                          if (cResult[13] === mode) {
                            if (cResult[14] === safeArea) {
                              if (cResult[15] === scrollPosition) {
                                if (cResult[16] === setMode) {
                                  if (cResult[17] === showControls) {
                                    if (cResult[18] === windowDimensions) {
                                      if (cResult[19] === wrapperDimensions) {
                                        if (cResult[20] === wrapperOffset) {
                                          const obj10 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
                                          class Le {
                                            constructor(arg0) {
                                              result = scrollPosition.set(scrollPosition.contentOffset.y);
                                              result1 = dragScrolling.set(true);
                                              return;
                                            }
                                          }
                                          const obj11 = { scrollPosition, dragScrolling };
                                          Le.__closure = obj11;
                                          Le.__workletHash = 9709378200858;
                                          Le.__initData = __initData14;
                                          obj10.onBeginDrag = Le;
                                          class Fe {
                                            constructor() {
                                              result = dragScrolling.set(false);
                                              return;
                                            }
                                          }
                                          const obj12 = { dragScrolling };
                                          Fe.__closure = obj12;
                                          Fe.__workletHash = 16780787183039;
                                          Fe.__initData = __initData15;
                                          obj10.onEndDrag = Fe;
                                          class Xe {
                                            constructor() {
                                              result = dragScrolling.set(false);
                                              return;
                                            }
                                          }
                                          const obj13 = { dragScrolling };
                                          Xe.__closure = obj13;
                                          Xe.__workletHash = 13772673540365;
                                          Xe.__initData = __initData16;
                                          obj10.onMomentumEnd = Xe;
                                          class Je {
                                            constructor(arg0) {
                                              if (closure_20.get()) {
                                                obj3 = closure_21;
                                                if (closure_21.get()) {
                                                  return;
                                                } else {
                                                  obj4 = scrollPosition;
                                                  num5 = 0;
                                                  if (scrollPosition.get() < 0) {
                                                    result = obj4.set(0);
                                                  }
                                                  value = obj4.get();
                                                  tmp11 = globalThis;
                                                  _Math7 = Math;
                                                  num6 = 0.1;
                                                  if (Math.abs(scrollPosition.contentOffset.y - value) < 0.1) {
                                                    return;
                                                  } else {
                                                    flag = true;
                                                    result1 = obj3.set(true);
                                                    tmp13 = closure_0;
                                                    tmp14 = closure_2;
                                                    obj5 = closure_0(closure_2[15]);
                                                    tmp15 = closure_24;
                                                    flag2 = false;
                                                    tmp16 = obj5;
                                                    num7 = 0;
                                                    tmp17 = value;
                                                    flag3 = false;
                                                    scrollToResult = obj5.scrollTo(closure_24, 0, value, false);
                                                    result2 = obj3.set(false);
                                                  }
                                                }
                                              } else {
                                                obj = scrollPosition;
                                                tmp = undefined;
                                                if (scrollPosition.get() !== scrollPosition.contentOffset.y) {
                                                  tmp20 = computeViewableChunksFromScrollPosition;
                                                  tmp22 = windowDimensions;
                                                  value1 = obj.get();
                                                  tmp23 = closure_19;
                                                  if (typeof computeViewableChunksFromScrollPosition === "function") {
                                                    tmp2 = globalThis;
                                                    _Math = Math;
                                                    tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
                                                    rounded = Math.ceil(windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR);
                                                    _Math2 = Math;
                                                    _Math3 = Math;
                                                    num = 1;
                                                    num2 = 0;
                                                    _Math4 = Math;
                                                    num3 = 2;
                                                    num4 = 2;
                                                    _Math5 = Math;
                                                    sum = Math.max(Math.floor(value1 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
                                                    bound = Math.min(sum, Math.ceil(tmp24 / rounded));
                                                    obj1 = { start: null, end: null };
                                                    _Math6 = Math;
                                                    obj1.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - num4, 0);
                                                    obj1.end = bound;
                                                    tmp = obj1;
                                                  } else {
                                                    str = "Trying to call a non-function";
                                                    throw new TypeError("Trying to call a non-function");
                                                  }
                                                }
                                                result3 = obj.set(scrollPosition.contentOffset.y);
                                                tmp8 = null;
                                                if (null != tmp) {
                                                  tmp25 = closure_1;
                                                  tmp26 = closure_2;
                                                  tmp27 = closure_22;
                                                  tmp28 = closure_1(closure_2[23])(closure_22, tmp);
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          const obj14 = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: tmp(tmp2[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: tmp4(tmp2[23]), viewableChunks: sharedValue3 };
                                          Je.__closure = obj14;
                                          Je.__workletHash = 11154582532610;
                                          Je.__initData = __initData17;
                                          obj10.onScroll = Je;
                                          const animatedScrollHandler = tmp(tmp2[15]).useAnimatedScrollHandler(obj10);
                                          const tmpResult14 = tmp(tmp2[15]);
                                          class We {
                                            constructor() {
                                              return mode.get();
                                            }
                                          }
                                          const obj15 = { mode };
                                          We.__closure = obj15;
                                          We.__workletHash = 17369688194549;
                                          We.__initData = __initData18;
                                          class Ge {
                                            constructor(arg0, arg1) {
                                              tmp = null != arg1 && scrollPosition !== arg1;
                                              if (tmp) {
                                                tmp2 = VoicePanelModes;
                                                if (scrollPosition === VoicePanelModes.PANEL) {
                                                  if (arg1 === tmp2.PIP) {
                                                    tmp5 = closure_20;
                                                    flag2 = false;
                                                    result = closure_20.set(false);
                                                  }
                                                }
                                                if (scrollPosition === tmp2.PIP) {
                                                  tmp3 = closure_20;
                                                  flag = true;
                                                  result1 = closure_20.set(true);
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          const obj16 = { VoicePanelModes: tmp16, lockScrolling: sharedValue1 };
                                          Ge.__closure = obj16;
                                          Ge.__workletHash = 14015771250130;
                                          Ge.__initData = __initData19;
                                          const animatedReaction3 = tmp(tmp2[15]).useAnimatedReaction(We, Ge);
                                          const tmpResult15 = tmp(tmp2[15]);
                                          const token = tmp(tmp2[27]).useToken(tmp4(tmp2[14]).modules.mobile.VOICE_PANEL_GUTTER);
                                          const tmpResult16 = tmp(tmp2[27]);
                                          class Be {
                                            constructor() {
                                              tmp = mode.get() === VoicePanelModes.PIP;
                                              tmp2 = tmp;
                                              if (!tmp) {
                                                tmp3 = focused;
                                                tmp4 = null;
                                                tmp2 = null != focused.get();
                                              }
                                              str = "auto";
                                              if (tmp) {
                                                str = "none";
                                              }
                                              obj = { pointerEvents: str, scrollEnabled: null, showsVerticalScrollIndicator: null, scrollIndicatorInsets: null };
                                              tmp5 = !tmp2;
                                              obj.scrollEnabled = tmp5;
                                              value = closure_20.get();
                                              tmp7 = !value;
                                              if (!value) {
                                                tmp7 = tmp5;
                                              }
                                              obj.showsVerticalScrollIndicator = tmp7;
                                              rect = { top: null, bottom: null };
                                              tmp8 = closure_1(closure_2[28]);
                                              rect.top = tmp8(safeArea.get(), closure_27).height - safeArea.get().top;
                                              rect.bottom = safeArea.get().bottom;
                                              obj.scrollIndicatorInsets = rect;
                                              return obj;
                                            }
                                          }
                                          const obj18 = { mode, VoicePanelModes: tmp16, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: tmp4(tmp2[28]), safeArea, edgeGutter: null };
                                          class Ve {
                                            constructor() {
                                              obj = { gestureActive: closure_25.get().active, connected: connected.get(), mode: mode.get() };
                                              return obj;
                                            }
                                          }
                                          Be.__closure = obj18;
                                          Be.__workletHash = 5209527997903;
                                          Be.__initData = __initData20;
                                          const animatedProps = tmp(tmp2[15]).useAnimatedProps(Be);
                                          if (cResult[73] !== sharedValue) {
                                            function $e(arg0, arg1) {
                                              const result = sharedValue.set(arg1);
                                            }
                                            cResult[73] = sharedValue;
                                            class Le {
                                              constructor(arg0) {
                                                result = scrollPosition.set(scrollPosition.contentOffset.y);
                                                result1 = dragScrolling.set(true);
                                                return;
                                              }
                                            }
                                            cResult[74] = $e;
                                            let tmp62 = $e;
                                          } else {
                                            tmp62 = cResult[74];
                                          }
                                          const tmpResult17 = tmp(tmp2[15]);
                                          class Qe {
                                            constructor() {
                                              value = mode.get();
                                              if (VoicePanelModes.PIP !== value) {
                                                if (VoicePanelModes.DISMISSED !== value) {
                                                  tmp7 = connected;
                                                  if (connected.get()) {
                                                    obj = closure_25;
                                                    if (closure_25.get().active) {
                                                      if (obj.get().requiresPop) {
                                                        num3 = 1;
                                                        return 1;
                                                      }
                                                    }
                                                  }
                                                  tmp2 = wrapperDimensions;
                                                  tmp3 = wrapperOffset;
                                                  tmp5 = windowDimensions;
                                                  sum = wrapperDimensions.get().drawerY + wrapperOffset.get().y;
                                                  height = windowDimensions.get().height;
                                                  tmp6 = globalThis;
                                                  _Math = Math;
                                                  _Math2 = Math;
                                                  num = 0;
                                                  num2 = 1;
                                                  return Math.min(Math.max((height - sum) / height, 0), 1);
                                                }
                                              }
                                              return 0;
                                            }
                                          }
                                          const obj19 = { mode, VoicePanelModes: tmp16, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
                                          Qe.__closure = obj19;
                                          Qe.__workletHash = 11760007440267;
                                          Qe.__initData = __initData21;
                                          const derivedValue = tmp(tmp2[15]).useDerivedValue(Qe);
                                          if (cResult[75] === cResult[21]) {
                                            if (cResult[76] === sharedValue4) {
                                              if (cResult[77] === animatedScrollHandler) {
                                                if (cResult[78] === tmp62) {
                                                  if (cResult[79] === derivedValue) {
                                                    if (cResult[80] === animatedProps) {
                                                      if (cResult[81] === sharedValue) {
                                                        if (cResult[82] === animatedRef) {
                                                          if (cResult[83] === sharedValue3) {
                                                            if (cResult[84] === wrapperOffset) {
                                                              let tmp65 = cResult[85];
                                                            }
                                                            return tmp65;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj20 = { gesture: cResult[21], scrollerRef: animatedRef, scrollNativeGesture: first, viewableChunks: sharedValue3, handleScroll: animatedScrollHandler, scrollViewProps: animatedProps, onContentSizeChange: tmp62, wrapperOffset, scrollableRegionSize: sharedValue, gestureState: null, opacity: null };
                                          class Oe {
                                            constructor(arg0, arg1) {
                                              tmp2 = scrollPosition === VoicePanelModes.DISMISSED;
                                              if (tmp2) {
                                                tmp3 = arg1;
                                                tmp2 = arg1 !== tmp.DISMISSED;
                                              }
                                              if (tmp2) {
                                                tmp4 = closure_1;
                                                tmp5 = closure_2;
                                                tmp6 = closure_25;
                                                tmp7 = closure_1(closure_2[23])(closure_25, { cancel: false, active: false });
                                              }
                                              return;
                                            }
                                          }
                                          obj20.opacity = derivedValue;
                                          cResult[75] = cResult[21];
                                          cResult[76] = sharedValue4;
                                          cResult[77] = animatedScrollHandler;
                                          cResult[78] = tmp62;
                                          cResult[79] = derivedValue;
                                          cResult[80] = animatedProps;
                                          class Ce {
                                            constructor() {
                                              tmp = undefined;
                                              if (mode.get() === VoicePanelModes.PANEL) {
                                                tmp2 = focused;
                                                value = focused.get();
                                                tmp4 = null;
                                                id = undefined;
                                                if (value != null) {
                                                  id = value.id;
                                                }
                                                tmp = id;
                                              }
                                              return tmp;
                                            }
                                          }
                                          cResult[82] = animatedRef;
                                          cResult[83] = sharedValue3;
                                          cResult[84] = wrapperOffset;
                                          cResult[85] = obj20;
                                          tmp65 = obj20;
                                          const tmpResult18 = tmp(tmp2[15]);
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
  if (cResult[22] === connected) {
    if (cResult[23] === controlsSpecs) {
      if (cResult[24] === left) {
        if (cResult[25] === mode) {
          if (cResult[26] === showControls) {
            let onEndResult = cResult[27];
          }
          if (cResult[28] === controlsSpecs) {
            if (cResult[29] === sharedValue4) {
              if (cResult[30] === isFocusedVideoZoomed) {
                if (cResult[31] === mode) {
                  if (cResult[32] === safeArea) {
                    if (cResult[33] === windowDimensions) {
                      let tmp21 = cResult[34];
                    }
                    if (cResult[35] === connected) {
                      if (cResult[36] === sharedValue4) {
                        if (cResult[37] === mode) {
                          if (cResult[38] === wrapperOffset) {
                            let tmp25 = cResult[39];
                          }
                          if (cResult[40] === focused) {
                            if (cResult[41] === sharedValue4) {
                              if (cResult[42] === sharedValue1) {
                                if (cResult[43] === mode) {
                                  if (cResult[44] === scrollPosition) {
                                    if (cResult[45] === wrapperOffset) {
                                      let tmp27 = cResult[46];
                                    }
                                    if (cResult[47] === connected) {
                                      if (cResult[48] === sharedValue4) {
                                        if (cResult[49] === sharedValue1) {
                                          if (cResult[50] === mode) {
                                            if (cResult[51] === scrollPosition) {
                                              if (cResult[52] === wrapperOffset) {
                                                let tmp31 = cResult[53];
                                              }
                                              if (cResult[54] === sharedValue4) {
                                                if (cResult[55] === sharedValue1) {
                                                  if (cResult[58] === connected) {
                                                    if (cResult[59] === dismissPanel) {
                                                      if (cResult[60] === sharedValue4) {
                                                        if (cResult[61] === sharedValue1) {
                                                          if (cResult[62] === mode) {
                                                            if (cResult[63] === safeArea) {
                                                              if (cResult[64] === setMode) {
                                                                if (cResult[65] === windowDimensions) {
                                                                  if (cResult[66] === wrapperDimensions) {
                                                                    if (cResult[67] === wrapperOffset) {
                                                                      let tmp38 = cResult[68];
                                                                    }
                                                                    if (cResult[69] === sharedValue4) {
                                                                      if (cResult[70] === mode) {
                                                                        if (cResult[71] === wrapperOffset) {
                                                                          const tmp42 = cResult[72];
                                                                        }
                                                                        class VoicePanelUITsx11 {
                                                                          constructor() {
                                                                            tmp = 0 !== wrapperOffset.get().y;
                                                                            if (tmp) {
                                                                              tmp2 = mode;
                                                                              tmp3 = VoicePanelModes;
                                                                              tmp = mode.get() === VoicePanelModes.PANEL;
                                                                            }
                                                                            if (!tmp) {
                                                                              tmp4 = closure_1;
                                                                              tmp5 = closure_2;
                                                                              tmp6 = closure_25;
                                                                              tmp7 = closure_1(closure_2[23])(closure_25, { cancel: false, active: false });
                                                                            }
                                                                            return;
                                                                          }
                                                                        }
                                                                        class Le {
                                                                          constructor(arg0) {
                                                                            result = scrollPosition.set(scrollPosition.contentOffset.y);
                                                                            result1 = dragScrolling.set(true);
                                                                            return;
                                                                          }
                                                                        }
                                                                        let rect = { left: -1 * right.left, right: -1 * right.right };
                                                                        const TapResult = obj17.Tap();
                                                                        const hitSlopResult = obj17.Tap().hitSlop(rect);
                                                                        obj17.Tap().hitSlop(rect).enabled(tmp11).maxDistance(30);
                                                                        class Fe {
                                                                          constructor() {
                                                                            result = dragScrolling.set(false);
                                                                            return;
                                                                          }
                                                                        }
                                                                        const Gesture2 = tmp(tmp2[21]).Gesture;
                                                                        const enabledResult = obj17.Tap().hitSlop(rect).enabled(tmp11);
                                                                        const PanResult = Gesture2.Pan();
                                                                        const enabledResult1 = Gesture2.Pan().enabled(tmp11);
                                                                        const manualActivationResult = Gesture2.Pan().enabled(tmp11).manualActivation(true);
                                                                        const rect1 = { left: -1 * right.left, right: null };
                                                                        class Xe {
                                                                          constructor() {
                                                                            result = dragScrolling.set(false);
                                                                            return;
                                                                          }
                                                                        }
                                                                        const maxPointersResult = Gesture2.Pan().enabled(tmp11).manualActivation(true).maxPointers(1);
                                                                        const hitSlopResult1 = Gesture2.Pan().enabled(tmp11).manualActivation(true).maxPointers(1).hitSlop(rect1);
                                                                        let result = Gesture2.Pan().enabled(tmp11).manualActivation(true).maxPointers(1).hitSlop(rect1).withRef(dismissToPIPGestureRef).shouldCancelWhenOutside(false);
                                                                        let result1 = result.simultaneousWithExternalGesture(first);
                                                                        const withRefResult = Gesture2.Pan().enabled(tmp11).manualActivation(true).maxPointers(1).hitSlop(rect1).withRef(dismissToPIPGestureRef);
                                                                        const onTouchesDownResult = result1.onTouchesDown(tmp21);
                                                                        const onBeginResult = result1.onTouchesDown(tmp21).onBegin(tmp25);
                                                                        result1.onTouchesDown(tmp21).onBegin(tmp25).onTouchesMove(tmp27).onChange(tmp31);
                                                                        class Je {
                                                                          constructor(arg0) {
                                                                            if (closure_20.get()) {
                                                                              obj3 = closure_21;
                                                                              if (closure_21.get()) {
                                                                                return;
                                                                              } else {
                                                                                obj4 = scrollPosition;
                                                                                num5 = 0;
                                                                                if (scrollPosition.get() < 0) {
                                                                                  result = obj4.set(0);
                                                                                }
                                                                                value = obj4.get();
                                                                                tmp11 = globalThis;
                                                                                _Math7 = Math;
                                                                                num6 = 0.1;
                                                                                if (Math.abs(scrollPosition.contentOffset.y - value) < 0.1) {
                                                                                  return;
                                                                                } else {
                                                                                  flag = true;
                                                                                  result1 = obj3.set(true);
                                                                                  tmp13 = closure_0;
                                                                                  tmp14 = closure_2;
                                                                                  obj5 = closure_0(closure_2[15]);
                                                                                  tmp15 = closure_24;
                                                                                  flag2 = false;
                                                                                  tmp16 = obj5;
                                                                                  num7 = 0;
                                                                                  tmp17 = value;
                                                                                  flag3 = false;
                                                                                  scrollToResult = obj5.scrollTo(closure_24, 0, value, false);
                                                                                  result2 = obj3.set(false);
                                                                                }
                                                                              }
                                                                            } else {
                                                                              obj = scrollPosition;
                                                                              tmp = undefined;
                                                                              if (scrollPosition.get() !== scrollPosition.contentOffset.y) {
                                                                                tmp20 = computeViewableChunksFromScrollPosition;
                                                                                tmp22 = windowDimensions;
                                                                                value1 = obj.get();
                                                                                tmp23 = closure_19;
                                                                                if (typeof computeViewableChunksFromScrollPosition === "function") {
                                                                                  tmp2 = globalThis;
                                                                                  _Math = Math;
                                                                                  tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
                                                                                  rounded = Math.ceil(windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR);
                                                                                  _Math2 = Math;
                                                                                  _Math3 = Math;
                                                                                  num = 1;
                                                                                  num2 = 0;
                                                                                  _Math4 = Math;
                                                                                  num3 = 2;
                                                                                  num4 = 2;
                                                                                  _Math5 = Math;
                                                                                  sum = Math.max(Math.floor(value1 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
                                                                                  bound = Math.min(sum, Math.ceil(tmp24 / rounded));
                                                                                  obj1 = { start: null, end: null };
                                                                                  _Math6 = Math;
                                                                                  obj1.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - num4, 0);
                                                                                  obj1.end = bound;
                                                                                  tmp = obj1;
                                                                                } else {
                                                                                  str = "Trying to call a non-function";
                                                                                  throw new TypeError("Trying to call a non-function");
                                                                                }
                                                                              }
                                                                              result3 = obj.set(scrollPosition.contentOffset.y);
                                                                              tmp8 = null;
                                                                              if (null != tmp) {
                                                                                tmp25 = closure_1;
                                                                                tmp26 = closure_2;
                                                                                tmp27 = closure_22;
                                                                                tmp28 = closure_1(closure_2[23])(closure_22, tmp);
                                                                              }
                                                                            }
                                                                            return;
                                                                          }
                                                                        }
                                                                        onEndResult = obj34.onEnd(tmp38);
                                                                        const onTouchesMoveResult = result1.onTouchesDown(tmp21).onBegin(tmp25).onTouchesMove(tmp27);
                                                                        cResult[1] = connected;
                                                                        cResult[num] = controlsSpecs;
                                                                        cResult[3] = dismissPanel;
                                                                        cResult[4] = dismissToPIPGestureRef;
                                                                        cResult[5] = focused;
                                                                        cResult[6] = sharedValue4;
                                                                        cResult[7] = tmp11;
                                                                        cResult[8] = left;
                                                                        left = right.left;
                                                                        cResult[9] = left;
                                                                        right = right.right;
                                                                        class We {
                                                                          constructor() {
                                                                            return mode.get();
                                                                          }
                                                                        }
                                                                        cResult[11] = isFocusedVideoZoomed;
                                                                        cResult[12] = sharedValue1;
                                                                        cResult[13] = mode;
                                                                        class Ge {
                                                                          constructor(arg0, arg1) {
                                                                            tmp = null != arg1 && scrollPosition !== arg1;
                                                                            if (tmp) {
                                                                              tmp2 = VoicePanelModes;
                                                                              if (scrollPosition === VoicePanelModes.PANEL) {
                                                                                if (arg1 === tmp2.PIP) {
                                                                                  tmp5 = closure_20;
                                                                                  flag2 = false;
                                                                                  result = closure_20.set(false);
                                                                                }
                                                                              }
                                                                              if (scrollPosition === tmp2.PIP) {
                                                                                tmp3 = closure_20;
                                                                                flag = true;
                                                                                result1 = closure_20.set(true);
                                                                              }
                                                                            }
                                                                            return;
                                                                          }
                                                                        }
                                                                        cResult[15] = scrollPosition;
                                                                        cResult[16] = setMode;
                                                                        cResult[17] = showControls;
                                                                        cResult[18] = windowDimensions;
                                                                        cResult[19] = wrapperDimensions;
                                                                        cResult[20] = wrapperOffset;
                                                                        num = 21;
                                                                        cResult[21] = tmp45(tmp47, onEndResult.onFinalize(tmp42));
                                                                        class Be {
                                                                          constructor() {
                                                                            tmp = mode.get() === VoicePanelModes.PIP;
                                                                            tmp2 = tmp;
                                                                            if (!tmp) {
                                                                              tmp3 = focused;
                                                                              tmp4 = null;
                                                                              tmp2 = null != focused.get();
                                                                            }
                                                                            str = "auto";
                                                                            if (tmp) {
                                                                              str = "none";
                                                                            }
                                                                            obj = { pointerEvents: str, scrollEnabled: null, showsVerticalScrollIndicator: null, scrollIndicatorInsets: null };
                                                                            tmp5 = !tmp2;
                                                                            obj.scrollEnabled = tmp5;
                                                                            value = closure_20.get();
                                                                            tmp7 = !value;
                                                                            if (!value) {
                                                                              tmp7 = tmp5;
                                                                            }
                                                                            obj.showsVerticalScrollIndicator = tmp7;
                                                                            rect = { top: null, bottom: null };
                                                                            tmp8 = closure_1(closure_2[28]);
                                                                            rect.top = tmp8(safeArea.get(), closure_27).height - safeArea.get().top;
                                                                            rect.bottom = safeArea.get().bottom;
                                                                            obj.scrollIndicatorInsets = rect;
                                                                            return obj;
                                                                          }
                                                                        }
                                                                        const tmp45Result = tmp45(tmp47, onEndResult.onFinalize(tmp42));
                                                                      }
                                                                    }
                                                                    class VoicePanelUITsx11 {
                                                                      constructor() {
                                                                        tmp = 0 !== wrapperOffset.get().y;
                                                                        if (tmp) {
                                                                          tmp2 = mode;
                                                                          tmp3 = VoicePanelModes;
                                                                          tmp = mode.get() === VoicePanelModes.PANEL;
                                                                        }
                                                                        if (!tmp) {
                                                                          tmp4 = closure_1;
                                                                          tmp5 = closure_2;
                                                                          tmp6 = closure_25;
                                                                          tmp7 = closure_1(closure_2[23])(closure_25, { cancel: false, active: false });
                                                                        }
                                                                        return;
                                                                      }
                                                                    }
                                                                    class Le {
                                                                      constructor(arg0) {
                                                                        result = scrollPosition.set(scrollPosition.contentOffset.y);
                                                                        result1 = dragScrolling.set(true);
                                                                        return;
                                                                      }
                                                                    }
                                                                    tmp43[0] = wrapperOffset;
                                                                    tmp43[1] = mode;
                                                                    tmp43[2] = tmp16;
                                                                    tmp43[3] = tmp4(tmp2[23]);
                                                                    tmp43[4] = sharedValue4;
                                                                    VoicePanelUITsx11.__closure = tmp43;
                                                                    VoicePanelUITsx11.__workletHash = 10251994333954;
                                                                    class Fe {
                                                                      constructor() {
                                                                        result = dragScrolling.set(false);
                                                                        return;
                                                                      }
                                                                    }
                                                                    cResult[69] = sharedValue4;
                                                                    cResult[70] = mode;
                                                                    cResult[71] = wrapperOffset;
                                                                    cResult[72] = VoicePanelUITsx11;
                                                                    class Xe {
                                                                      constructor() {
                                                                        result = dragScrolling.set(false);
                                                                        return;
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
                                                  }
                                                  class VoicePanelUITsx12 {
                                                    constructor(arg0) {
                                                      obj = closure_25;
                                                      if (!closure_25.get().cancel) {
                                                        tmp = scrollPosition;
                                                        velocityY = scrollPosition.velocityY;
                                                        obj2 = mode;
                                                        ({ velocityX, absoluteX, absoluteY } = scrollPosition);
                                                        tmp2 = VoicePanelModes;
                                                        if (mode.get() === VoicePanelModes.PIP) {
                                                          tmp38 = closure_0;
                                                          tmp39 = closure_2;
                                                          obj5 = closure_0(closure_2[26]);
                                                          obj1 = { velocityX: null, velocityY: null, absoluteX: null, absoluteY: null, windowDimensions: null, safeArea: null };
                                                          obj1.velocityX = velocityX;
                                                          obj1.velocityY = velocityY;
                                                          obj1.absoluteX = absoluteX;
                                                          obj1.absoluteY = absoluteY;
                                                          tmp40 = windowDimensions;
                                                          obj1.windowDimensions = windowDimensions.get();
                                                          tmp41 = safeArea;
                                                          obj1.safeArea = safeArea.get();
                                                          result = obj5.calculatePIPPositionFromVelocity(obj1);
                                                          tmp43 = closure_1;
                                                          ({ pipX, pipY } = result);
                                                          tmp44 = wrapperDimensions;
                                                          obj8 = { pipX: null, pipY: null };
                                                          obj8.pipX = pipX;
                                                          obj8.pipY = pipY;
                                                          tmp45 = closure_1(closure_2[23])(wrapperDimensions, obj8);
                                                          tmp46 = wrapperOffset;
                                                          tmp47 = closure_1(closure_2[23])(wrapperOffset, { gestureActive: false });
                                                        } else if (obj2.get() === tmp2.PANEL) {
                                                          num = 0;
                                                          if (velocityY > 0) {
                                                            tmp9 = connected;
                                                            if (connected.get()) {
                                                              if (obj.get().requiresPop) {
                                                                tmp32 = closure_1;
                                                                tmp33 = closure_2;
                                                                tmp34 = wrapperOffset;
                                                                tmp35 = closure_1(closure_2[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                                                                tmp36 = closure_20;
                                                                flag3 = false;
                                                                result1 = closure_20.set(false);
                                                              } else {
                                                                tmp25 = closure_0;
                                                                tmp26 = closure_2;
                                                                obj4 = closure_0(closure_2[15]);
                                                                tmp27 = setMode;
                                                                tmp28 = obj4.runOnJS(setMode)(tmp2.PIP);
                                                                tmp29 = closure_1;
                                                                tmp30 = wrapperOffset;
                                                                tmp31 = closure_1(closure_2[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                                                              }
                                                            } else {
                                                              tmp10 = wrapperDimensions;
                                                              tmp12 = wrapperOffset;
                                                              diff = wrapperDimensions.get().drawerHeight - wrapperDimensions.get().drawerY;
                                                              tmp13 = c25;
                                                              if (wrapperOffset.get().y > diff * c25) {
                                                                tmp19 = closure_1;
                                                                tmp20 = closure_2;
                                                                tmp21 = closure_1(closure_2[23])(tmp12, { gestureActive: false });
                                                                tmp22 = closure_0;
                                                                obj3 = closure_0(closure_2[15]);
                                                                tmp23 = dismissPanel;
                                                                tmp24 = obj3.runOnJS(dismissPanel)();
                                                              } else {
                                                                tmp14 = closure_1;
                                                                tmp15 = closure_2;
                                                                tmp16 = closure_1(closure_2[23])(tmp12, { gestureActive: false, x: 0, y: 0 });
                                                                tmp17 = closure_20;
                                                                flag2 = false;
                                                                result2 = closure_20.set(false);
                                                              }
                                                            }
                                                          } else {
                                                            tmp3 = closure_1;
                                                            tmp4 = closure_2;
                                                            tmp5 = wrapperOffset;
                                                            tmp6 = closure_1(closure_2[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                                                            tmp7 = closure_20;
                                                            flag = false;
                                                            result3 = closure_20.set(false);
                                                          }
                                                        }
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  class Le {
                                                    constructor(arg0) {
                                                      result = scrollPosition.set(scrollPosition.contentOffset.y);
                                                      result1 = dragScrolling.set(true);
                                                      return;
                                                    }
                                                  }
                                                  tmp39[0] = sharedValue4;
                                                  tmp39[1] = mode;
                                                  tmp39[2] = tmp16;
                                                  tmp39[3] = tmp(tmp2[26]).calculatePIPPositionFromVelocity;
                                                  tmp39[4] = windowDimensions;
                                                  tmp39[5] = safeArea;
                                                  tmp39[6] = tmp4(tmp2[23]);
                                                  tmp39[7] = wrapperDimensions;
                                                  tmp39[8] = wrapperOffset;
                                                  class Fe {
                                                    constructor() {
                                                      result = dragScrolling.set(false);
                                                      return;
                                                    }
                                                  }
                                                  tmp39[10] = tmp(tmp2[15]).runOnJS;
                                                  tmp39[11] = setMode;
                                                  tmp39[12] = sharedValue1;
                                                  tmp39[13] = sharedValue4;
                                                  tmp39[14] = dismissPanel;
                                                  VoicePanelUITsx12.__closure = tmp39;
                                                  class Xe {
                                                    constructor() {
                                                      result = dragScrolling.set(false);
                                                      return;
                                                    }
                                                  }
                                                  VoicePanelUITsx12.__initData = __initData8;
                                                  cResult[58] = connected;
                                                  cResult[59] = dismissPanel;
                                                  cResult[60] = sharedValue4;
                                                  class Je {
                                                    constructor(arg0) {
                                                      if (closure_20.get()) {
                                                        obj3 = closure_21;
                                                        if (closure_21.get()) {
                                                          return;
                                                        } else {
                                                          obj4 = scrollPosition;
                                                          num5 = 0;
                                                          if (scrollPosition.get() < 0) {
                                                            result = obj4.set(0);
                                                          }
                                                          value = obj4.get();
                                                          tmp11 = globalThis;
                                                          _Math7 = Math;
                                                          num6 = 0.1;
                                                          if (Math.abs(scrollPosition.contentOffset.y - value) < 0.1) {
                                                            return;
                                                          } else {
                                                            flag = true;
                                                            result1 = obj3.set(true);
                                                            tmp13 = closure_0;
                                                            tmp14 = closure_2;
                                                            obj5 = closure_0(closure_2[15]);
                                                            tmp15 = closure_24;
                                                            flag2 = false;
                                                            tmp16 = obj5;
                                                            num7 = 0;
                                                            tmp17 = value;
                                                            flag3 = false;
                                                            scrollToResult = obj5.scrollTo(closure_24, 0, value, false);
                                                            result2 = obj3.set(false);
                                                          }
                                                        }
                                                      } else {
                                                        obj = scrollPosition;
                                                        tmp = undefined;
                                                        if (scrollPosition.get() !== scrollPosition.contentOffset.y) {
                                                          tmp20 = computeViewableChunksFromScrollPosition;
                                                          tmp22 = windowDimensions;
                                                          value1 = obj.get();
                                                          tmp23 = closure_19;
                                                          if (typeof computeViewableChunksFromScrollPosition === "function") {
                                                            tmp2 = globalThis;
                                                            _Math = Math;
                                                            tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
                                                            rounded = Math.ceil(windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR);
                                                            _Math2 = Math;
                                                            _Math3 = Math;
                                                            num = 1;
                                                            num2 = 0;
                                                            _Math4 = Math;
                                                            num3 = 2;
                                                            num4 = 2;
                                                            _Math5 = Math;
                                                            sum = Math.max(Math.floor(value1 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
                                                            bound = Math.min(sum, Math.ceil(tmp24 / rounded));
                                                            obj1 = { start: null, end: null };
                                                            _Math6 = Math;
                                                            obj1.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - num4, 0);
                                                            obj1.end = bound;
                                                            tmp = obj1;
                                                          } else {
                                                            str = "Trying to call a non-function";
                                                            throw new TypeError("Trying to call a non-function");
                                                          }
                                                        }
                                                        result3 = obj.set(scrollPosition.contentOffset.y);
                                                        tmp8 = null;
                                                        if (null != tmp) {
                                                          tmp25 = closure_1;
                                                          tmp26 = closure_2;
                                                          tmp27 = closure_22;
                                                          tmp28 = closure_1(closure_2[23])(closure_22, tmp);
                                                        }
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  cResult[61] = sharedValue1;
                                                  cResult[62] = mode;
                                                  cResult[63] = safeArea;
                                                  cResult[64] = setMode;
                                                  cResult[65] = windowDimensions;
                                                  cResult[66] = wrapperDimensions;
                                                  cResult[67] = wrapperOffset;
                                                  cResult[68] = VoicePanelUITsx12;
                                                  tmp38 = VoicePanelUITsx12;
                                                }
                                              }
                                              class VoicePanelUITsx13 {
                                                constructor() {
                                                  result = closure_20.set(false);
                                                  tmp2 = closure_1(closure_2[23])(closure_25, { cancel: false, active: false });
                                                  tmp3 = closure_1(closure_2[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                                                  return;
                                                }
                                              }
                                              class Le {
                                                constructor(arg0) {
                                                  result = scrollPosition.set(scrollPosition.contentOffset.y);
                                                  result1 = dragScrolling.set(true);
                                                  return;
                                                }
                                              }
                                              tmp36[0] = sharedValue1;
                                              tmp36[1] = tmp4(tmp2[23]);
                                              tmp36[2] = sharedValue4;
                                              tmp36[3] = wrapperOffset;
                                              VoicePanelUITsx13.__closure = tmp36;
                                              VoicePanelUITsx13.__workletHash = 2088832111767;
                                              VoicePanelUITsx13.__initData = __initData9;
                                              class Fe {
                                                constructor() {
                                                  result = dragScrolling.set(false);
                                                  return;
                                                }
                                              }
                                              cResult[54] = sharedValue4;
                                              cResult[55] = sharedValue1;
                                              cResult[56] = wrapperOffset;
                                              cResult[57] = VoicePanelUITsx13;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    class VoicePanelUITsx14 {
                                      constructor(arg0) {
                                        obj = closure_25;
                                        if (!closure_25.get().cancel) {
                                          tmp = scrollPosition;
                                          tmp2 = mode;
                                          value = mode.get();
                                          tmp4 = VoicePanelModes;
                                          if (value !== VoicePanelModes.PIP) {
                                            num2 = -1;
                                            result = -1 * (obj.get().absoluteYStart - scrollPosition.absoluteY);
                                            tmp11 = connected;
                                            tmp12 = connected.get() && !obj.get().requiresPop;
                                            if (tmp12) {
                                              num3 = 0;
                                              tmp12 = result <= 0;
                                            }
                                            if (tmp12) {
                                              obj1 = {};
                                              tmp13 = obj1;
                                              value = Object.assign(obj.get());
                                              flag = true;
                                              obj1.requiresPop = true;
                                              result1 = obj.set(obj1);
                                            }
                                            obj4 = closure_20;
                                            if (closure_20.get()) {
                                              num4 = 0;
                                              if (result < 0) {
                                                flag3 = false;
                                                result2 = obj4.set(false);
                                              }
                                              diff = result;
                                              if (!obj.get().requiresPop) {
                                                tmp30 = closure_1;
                                                tmp31 = closure_2;
                                                tmp32 = wrapperOffset;
                                                point = { y: null, x: 0 };
                                                point.y = diff;
                                                tmp33 = closure_1(closure_2[23])(wrapperOffset, point);
                                              } else {
                                                tmp20 = globalThis;
                                                _Math = Math;
                                                num6 = 0;
                                                value = Math.max(result, 0);
                                                tmp21 = c26;
                                                if (value > c26) {
                                                  obj8 = {};
                                                  tmp22 = obj8;
                                                  merged = Object.assign(obj.get());
                                                  flag4 = false;
                                                  obj8.requiresPop = false;
                                                  result3 = obj.set(obj8);
                                                  tmp25 = closure_0;
                                                  tmp26 = closure_2;
                                                  obj6 = closure_0(closure_2[15]);
                                                  runOnJSResult = obj6.runOnJS(closure_0(closure_2[25]).triggerHapticFeedback);
                                                  tmp27Result = runOnJSResult(closure_0(closure_2[25]).HapticFeedbackTypes.IMPACT_MEDIUM);
                                                  diff = result;
                                                }
                                              }
                                              tmp29 = POP_RESISTANCE;
                                              diff = value - value * POP_RESISTANCE;
                                            }
                                            value1 = obj4.get();
                                            tmp16 = !value1;
                                            if (!value1) {
                                              value = scrollPosition;
                                              num5 = 0;
                                              tmp16 = scrollPosition.get() <= 0;
                                            }
                                            if (tmp16) {
                                              flag2 = true;
                                              result4 = obj4.set(true);
                                            }
                                          } else {
                                            tmp5 = closure_1;
                                            tmp6 = closure_2;
                                            tmp8 = wrapperOffset;
                                            point1 = { x: null, y: null };
                                            tmp7 = closure_1(closure_2[23]);
                                            num = -1;
                                            point1.x = -1 * (obj.get().absoluteXStart - scrollPosition.absoluteX);
                                            point1.y = -1 * (obj.get().absoluteYStart - scrollPosition.absoluteY);
                                            tmp7Result = tmp7(wrapperOffset, point1);
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    class Le {
                                      constructor(arg0) {
                                        result = scrollPosition.set(scrollPosition.contentOffset.y);
                                        result1 = dragScrolling.set(true);
                                        return;
                                      }
                                    }
                                    tmp32[0] = sharedValue4;
                                    tmp32[1] = mode;
                                    tmp32[2] = tmp16;
                                    tmp32[3] = connected;
                                    tmp32[4] = sharedValue1;
                                    tmp32[5] = scrollPosition;
                                    tmp32[6] = sharedValue1;
                                    class Fe {
                                      constructor() {
                                        result = dragScrolling.set(false);
                                        return;
                                      }
                                    }
                                    tmp32[8] = tmp(tmp2[15]).runOnJS;
                                    tmp32[9] = tmp(tmp2[25]).triggerHapticFeedback;
                                    tmp32[10] = tmp(tmp2[25]).HapticFeedbackTypes;
                                    tmp32[11] = tmp4(tmp2[23]);
                                    tmp32[12] = wrapperOffset;
                                    VoicePanelUITsx14.__closure = tmp32;
                                    VoicePanelUITsx14.__workletHash = 17297529957374;
                                    class Xe {
                                      constructor() {
                                        result = dragScrolling.set(false);
                                        return;
                                      }
                                    }
                                    VoicePanelUITsx14.__initData = __initData10;
                                    cResult[47] = connected;
                                    cResult[48] = sharedValue4;
                                    cResult[49] = sharedValue1;
                                    class Je {
                                      constructor(arg0) {
                                        if (closure_20.get()) {
                                          obj3 = closure_21;
                                          if (closure_21.get()) {
                                            return;
                                          } else {
                                            obj4 = scrollPosition;
                                            num5 = 0;
                                            if (scrollPosition.get() < 0) {
                                              result = obj4.set(0);
                                            }
                                            value = obj4.get();
                                            tmp11 = globalThis;
                                            _Math7 = Math;
                                            num6 = 0.1;
                                            if (Math.abs(scrollPosition.contentOffset.y - value) < 0.1) {
                                              return;
                                            } else {
                                              flag = true;
                                              result1 = obj3.set(true);
                                              tmp13 = closure_0;
                                              tmp14 = closure_2;
                                              obj5 = closure_0(closure_2[15]);
                                              tmp15 = closure_24;
                                              flag2 = false;
                                              tmp16 = obj5;
                                              num7 = 0;
                                              tmp17 = value;
                                              flag3 = false;
                                              scrollToResult = obj5.scrollTo(closure_24, 0, value, false);
                                              result2 = obj3.set(false);
                                            }
                                          }
                                        } else {
                                          obj = scrollPosition;
                                          tmp = undefined;
                                          if (scrollPosition.get() !== scrollPosition.contentOffset.y) {
                                            tmp20 = computeViewableChunksFromScrollPosition;
                                            tmp22 = windowDimensions;
                                            value1 = obj.get();
                                            tmp23 = closure_19;
                                            if (typeof computeViewableChunksFromScrollPosition === "function") {
                                              tmp2 = globalThis;
                                              _Math = Math;
                                              tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
                                              rounded = Math.ceil(windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR);
                                              _Math2 = Math;
                                              _Math3 = Math;
                                              num = 1;
                                              num2 = 0;
                                              _Math4 = Math;
                                              num3 = 2;
                                              num4 = 2;
                                              _Math5 = Math;
                                              sum = Math.max(Math.floor(value1 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
                                              bound = Math.min(sum, Math.ceil(tmp24 / rounded));
                                              obj1 = { start: null, end: null };
                                              _Math6 = Math;
                                              obj1.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - num4, 0);
                                              obj1.end = bound;
                                              tmp = obj1;
                                            } else {
                                              str = "Trying to call a non-function";
                                              throw new TypeError("Trying to call a non-function");
                                            }
                                          }
                                          result3 = obj.set(scrollPosition.contentOffset.y);
                                          tmp8 = null;
                                          if (null != tmp) {
                                            tmp25 = closure_1;
                                            tmp26 = closure_2;
                                            tmp27 = closure_22;
                                            tmp28 = closure_1(closure_2[23])(closure_22, tmp);
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    cResult[51] = scrollPosition;
                                    cResult[52] = wrapperOffset;
                                    cResult[53] = VoicePanelUITsx14;
                                    tmp31 = VoicePanelUITsx14;
                                  }
                                }
                              }
                            }
                          }
                          class VoicePanelUITsx15 {
                            constructor(arg0, arg1) {
                              tmp2 = closure_2;
                              tmp = closure_0;
                              if (scrollPosition.state === closure_0(closure_2[21]).State.BEGAN) {
                                obj5 = closure_25;
                                if (!closure_25.get().active) {
                                  if (!obj5.get().cancel) {
                                    ({ absoluteY, absoluteX } = scrollPosition.changedTouches[0]);
                                    diff = obj5.get().absoluteYStart - absoluteY;
                                    diff1 = obj5.get().absoluteXStart - absoluteX;
                                    tmp5 = globalThis;
                                    _Math = Math;
                                    _Math2 = Math;
                                    _Math3 = Math;
                                    absolute = Math.abs(diff);
                                    bound = Math.max(absolute, Math.abs(diff1));
                                    _Math4 = Math;
                                    _Math5 = Math;
                                    absolute1 = Math.abs(diff1);
                                    tmp9 = absolute1 >= Math.abs(diff);
                                    if (!tmp9) {
                                      num = 0;
                                      tmp9 = diff > 0;
                                    }
                                    tmp10 = arg1;
                                    obj = mode;
                                    if (mode.get() === VoicePanelModes.PANEL) {
                                      _Math6 = Math;
                                      tmp16 = scrollPosition;
                                      num2 = 0;
                                      if (diff < 0) {
                                        if (Math.floor(scrollPosition.get()) <= 0) {
                                          tmp23 = closure_36;
                                          tmp24 = !closure_36;
                                          if (closure_36) {
                                            tmp25 = c24;
                                            tmp24 = bound > c24;
                                          }
                                          flag = tmp24;
                                        }
                                      }
                                      tmp17 = focused;
                                      value = focused.get();
                                      tmp19 = null;
                                      id = undefined;
                                      if (value != null) {
                                        id = value.id;
                                      }
                                      tmp21 = null != id && tmp9;
                                      flag = false;
                                      if (tmp21) {
                                        failResult = arg1.fail();
                                        flag = false;
                                      }
                                    } else {
                                      tmp12 = obj.get() === tmp11.PIP;
                                      if (tmp12) {
                                        tmp13 = c24;
                                        tmp12 = bound > c24;
                                      }
                                      flag = false;
                                      if (tmp12) {
                                        tmpResult = tmp(tmp2[15]);
                                        tmp14 = closure_1;
                                        tmp15 = tmpResult.runOnJS(closure_1(tmp2[24]))();
                                        flag = true;
                                      }
                                    }
                                    tmp26 = closure_1;
                                    tmp27 = closure_1(tmp2[23]);
                                    if (flag) {
                                      tmp29 = wrapperOffset;
                                      tmp27Result = tmp27(wrapperOffset, { gestureActive: true });
                                      obj1 = { absoluteXStart: null, absoluteYStart: null, cancel: false, active: true, requiresPop: null };
                                      obj1.absoluteXStart = absoluteX;
                                      tmp31 = scrollPosition;
                                      obj1.absoluteYStart = absoluteY + scrollPosition.get();
                                      obj1.requiresPop = obj5.get().requiresPop;
                                      result = obj5.set(obj1);
                                      tmp33 = closure_20;
                                      flag2 = true;
                                      result1 = closure_20.set(true);
                                      activateResult = arg1.activate();
                                    } else {
                                      obj6 = { absoluteYStart: null, absoluteXStart: null };
                                      obj6.absoluteYStart = absoluteY;
                                      obj6.absoluteXStart = absoluteX;
                                      tmp27Result1 = tmp27(obj5, obj6);
                                    }
                                  }
                                }
                              }
                              return;
                            }
                          }
                          class Le {
                            constructor(arg0) {
                              result = scrollPosition.set(scrollPosition.contentOffset.y);
                              result1 = dragScrolling.set(true);
                              return;
                            }
                          }
                          tmp28[0] = tmp(tmp2[21]).State;
                          tmp28[1] = sharedValue4;
                          tmp28[2] = mode;
                          tmp28[3] = tmp16;
                          tmp28[4] = scrollPosition;
                          tmp28[5] = closure_36;
                          tmp28[6] = animatedRef;
                          class Fe {
                            constructor() {
                              result = dragScrolling.set(false);
                              return;
                            }
                          }
                          tmp28[8] = tmp(tmp2[15]).runOnJS;
                          tmp28[9] = tmp4(tmp2[24]);
                          tmp28[10] = tmp4(tmp2[23]);
                          tmp28[11] = wrapperOffset;
                          tmp28[12] = sharedValue1;
                          VoicePanelUITsx15.__closure = tmp28;
                          VoicePanelUITsx15.__workletHash = 15820954964682;
                          class Xe {
                            constructor() {
                              result = dragScrolling.set(false);
                              return;
                            }
                          }
                          VoicePanelUITsx15.__initData = __initData11;
                          cResult[40] = focused;
                          cResult[41] = sharedValue4;
                          cResult[42] = sharedValue1;
                          class Je {
                            constructor(arg0) {
                              if (closure_20.get()) {
                                obj3 = closure_21;
                                if (closure_21.get()) {
                                  return;
                                } else {
                                  obj4 = scrollPosition;
                                  num5 = 0;
                                  if (scrollPosition.get() < 0) {
                                    result = obj4.set(0);
                                  }
                                  value = obj4.get();
                                  tmp11 = globalThis;
                                  _Math7 = Math;
                                  num6 = 0.1;
                                  if (Math.abs(scrollPosition.contentOffset.y - value) < 0.1) {
                                    return;
                                  } else {
                                    flag = true;
                                    result1 = obj3.set(true);
                                    tmp13 = closure_0;
                                    tmp14 = closure_2;
                                    obj5 = closure_0(closure_2[15]);
                                    tmp15 = closure_24;
                                    flag2 = false;
                                    tmp16 = obj5;
                                    num7 = 0;
                                    tmp17 = value;
                                    flag3 = false;
                                    scrollToResult = obj5.scrollTo(closure_24, 0, value, false);
                                    result2 = obj3.set(false);
                                  }
                                }
                              } else {
                                obj = scrollPosition;
                                tmp = undefined;
                                if (scrollPosition.get() !== scrollPosition.contentOffset.y) {
                                  tmp20 = computeViewableChunksFromScrollPosition;
                                  tmp22 = windowDimensions;
                                  value1 = obj.get();
                                  tmp23 = closure_19;
                                  if (typeof computeViewableChunksFromScrollPosition === "function") {
                                    tmp2 = globalThis;
                                    _Math = Math;
                                    tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
                                    rounded = Math.ceil(windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR);
                                    _Math2 = Math;
                                    _Math3 = Math;
                                    num = 1;
                                    num2 = 0;
                                    _Math4 = Math;
                                    num3 = 2;
                                    num4 = 2;
                                    _Math5 = Math;
                                    sum = Math.max(Math.floor(value1 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
                                    bound = Math.min(sum, Math.ceil(tmp24 / rounded));
                                    obj1 = { start: null, end: null };
                                    _Math6 = Math;
                                    obj1.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - num4, 0);
                                    obj1.end = bound;
                                    tmp = obj1;
                                  } else {
                                    str = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                result3 = obj.set(scrollPosition.contentOffset.y);
                                tmp8 = null;
                                if (null != tmp) {
                                  tmp25 = closure_1;
                                  tmp26 = closure_2;
                                  tmp27 = closure_22;
                                  tmp28 = closure_1(closure_2[23])(closure_22, tmp);
                                }
                              }
                              return;
                            }
                          }
                          cResult[44] = scrollPosition;
                          cResult[45] = wrapperOffset;
                          cResult[46] = VoicePanelUITsx15;
                          tmp27 = VoicePanelUITsx15;
                        }
                      }
                    }
                    class VoicePanelUITsx16 {
                      constructor(arg0) {
                        obj = closure_25;
                        if (!closure_25.get().cancel) {
                          tmp = scrollPosition;
                          tmp2 = closure_1;
                          tmp3 = closure_2;
                          tmp4 = wrapperOffset;
                          tmp5 = closure_1(closure_2[23])(wrapperOffset, { x: 0, y: 0 });
                          obj1 = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
                          ({ absoluteX: obj2.absoluteXStart, absoluteY: obj2.absoluteYStart } = scrollPosition);
                          tmp6 = connected;
                          value = connected.get();
                          if (value) {
                            tmp8 = mode;
                            tmp9 = VoicePanelModes;
                            value = mode.get() === VoicePanelModes.PANEL;
                          }
                          obj1.requiresPop = value;
                          result = obj.set(obj1);
                        }
                        return;
                      }
                    }
                    class Le {
                      constructor(arg0) {
                        result = scrollPosition.set(scrollPosition.contentOffset.y);
                        result1 = dragScrolling.set(true);
                        return;
                      }
                    }
                    tmp26[0] = sharedValue4;
                    tmp26[1] = tmp4(tmp2[23]);
                    tmp26[2] = wrapperOffset;
                    tmp26[3] = connected;
                    tmp26[4] = mode;
                    tmp26[5] = tmp16;
                    VoicePanelUITsx16.__closure = tmp26;
                    VoicePanelUITsx16.__workletHash = 11518741105604;
                    class Fe {
                      constructor() {
                        result = dragScrolling.set(false);
                        return;
                      }
                    }
                    VoicePanelUITsx16.__initData = __initData12;
                    cResult[35] = connected;
                    cResult[36] = sharedValue4;
                    cResult[37] = mode;
                    class Xe {
                      constructor() {
                        result = dragScrolling.set(false);
                        return;
                      }
                    }
                    cResult[39] = VoicePanelUITsx16;
                    tmp25 = VoicePanelUITsx16;
                  }
                }
              }
            }
          }
          class VoicePanelUITsx17 {
            constructor(arg0, arg1) {
              first = scrollPosition.allTouches[0];
              if (IS_IOS) {
                tmp2 = null;
                if (null != first) {
                  tmp3 = windowDimensions;
                  tmp4 = safeArea;
                  if (first.absoluteY > windowDimensions.get().height - safeArea.get().bottom) {
                    tmp16 = closure_25;
                    obj1 = {};
                    tmp17 = obj1;
                    merged = Object.assign(closure_25.get());
                    flag2 = true;
                    obj1.cancel = true;
                    result = closure_25.set(obj1);
                    activateResult = arg1.activate();
                    return;
                  }
                }
              }
              value = isFocusedVideoZoomed.get();
              if (!value) {
                tmp6 = mode;
                tmp7 = VoicePanelModes;
                tmp8 = mode.get() === VoicePanelModes.PANEL;
                if (tmp8) {
                  tmp9 = controlsSpecs;
                  tmp10 = VoicePanelControlsModes;
                  tmp8 = controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER;
                }
                value = tmp8;
              }
              if (value) {
                tmp11 = closure_25;
                obj = {};
                tmp12 = obj;
                merged1 = Object.assign(closure_25.get());
                flag = true;
                obj.cancel = true;
                result1 = closure_25.set(obj);
                failResult = arg1.fail();
              }
              return;
            }
          }
          class Le {
            constructor(arg0) {
              result = scrollPosition.set(scrollPosition.contentOffset.y);
              result1 = dragScrolling.set(true);
              return;
            }
          }
          tmp22[0] = safeArea;
          tmp22[1] = windowDimensions;
          tmp22[2] = safeArea;
          tmp22[3] = sharedValue4;
          tmp22[4] = isFocusedVideoZoomed;
          tmp22[5] = mode;
          tmp22[6] = tmp16;
          tmp22[7] = controlsSpecs;
          class Fe {
            constructor() {
              result = dragScrolling.set(false);
              return;
            }
          }
          tmp22[8] = wrapperOffset;
          VoicePanelUITsx17.__closure = tmp22;
          VoicePanelUITsx17.__workletHash = 8330595925219;
          VoicePanelUITsx17.__initData = __initData13;
          cResult[28] = controlsSpecs;
          class Xe {
            constructor() {
              result = dragScrolling.set(false);
              return;
            }
          }
          cResult[29] = sharedValue4;
          cResult[30] = isFocusedVideoZoomed;
          cResult[31] = mode;
          cResult[32] = safeArea;
          class Je {
            constructor(arg0) {
              if (closure_20.get()) {
                obj3 = closure_21;
                if (closure_21.get()) {
                  return;
                } else {
                  obj4 = scrollPosition;
                  num5 = 0;
                  if (scrollPosition.get() < 0) {
                    result = obj4.set(0);
                  }
                  value = obj4.get();
                  tmp11 = globalThis;
                  _Math7 = Math;
                  num6 = 0.1;
                  if (Math.abs(scrollPosition.contentOffset.y - value) < 0.1) {
                    return;
                  } else {
                    flag = true;
                    result1 = obj3.set(true);
                    tmp13 = closure_0;
                    tmp14 = closure_2;
                    obj5 = closure_0(closure_2[15]);
                    tmp15 = closure_24;
                    flag2 = false;
                    tmp16 = obj5;
                    num7 = 0;
                    tmp17 = value;
                    flag3 = false;
                    scrollToResult = obj5.scrollTo(closure_24, 0, value, false);
                    result2 = obj3.set(false);
                  }
                }
              } else {
                obj = scrollPosition;
                tmp = undefined;
                if (scrollPosition.get() !== scrollPosition.contentOffset.y) {
                  tmp20 = computeViewableChunksFromScrollPosition;
                  tmp22 = windowDimensions;
                  value1 = obj.get();
                  tmp23 = closure_19;
                  if (typeof computeViewableChunksFromScrollPosition === "function") {
                    tmp2 = globalThis;
                    _Math = Math;
                    tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
                    rounded = Math.ceil(windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR);
                    _Math2 = Math;
                    _Math3 = Math;
                    num = 1;
                    num2 = 0;
                    _Math4 = Math;
                    num3 = 2;
                    num4 = 2;
                    _Math5 = Math;
                    sum = Math.max(Math.floor(value1 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
                    bound = Math.min(sum, Math.ceil(tmp24 / rounded));
                    obj1 = { start: null, end: null };
                    _Math6 = Math;
                    obj1.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - num4, 0);
                    obj1.end = bound;
                    tmp = obj1;
                  } else {
                    str = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                result3 = obj.set(scrollPosition.contentOffset.y);
                tmp8 = null;
                if (null != tmp) {
                  tmp25 = closure_1;
                  tmp26 = closure_2;
                  tmp27 = closure_22;
                  tmp28 = closure_1(closure_2[23])(closure_22, tmp);
                }
              }
              return;
            }
          }
          cResult[34] = VoicePanelUITsx17;
          tmp21 = VoicePanelUITsx17;
        }
      }
    }
  }
  class VoicePanelUITsx10 {
    constructor() {
      value = connected.get();
      if (value) {
        tmp2 = mode;
        tmp3 = VoicePanelModes;
        value = mode.get() !== VoicePanelModes.PIP;
      }
      if (value) {
        tmp4 = controlsSpecs;
        tmp5 = VoicePanelControlsModes;
        if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
          tmp10 = closure_0;
          tmp11 = closure_2;
          obj2 = closure_0(closure_2[15]);
          tmp12 = showControls;
          tmp13 = obj2.runOnJS(showControls)({ debounce: true });
        } else {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp8 = hideControls;
          tmp9 = obj.runOnJS(hideControls)({ debounce: true });
        }
      }
      return;
    }
  }
  const obj9 = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
  VoicePanelUITsx10.__closure = { connected, mode, VoicePanelModes: showControls, controlsSpecs, VoicePanelControlsModes: wrapperOffset, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, showControls, hideControls: left };
  VoicePanelUITsx10.__workletHash = 3342963866967;
  VoicePanelUITsx10.__initData = __initData7;
  cResult[22] = connected;
  cResult[23] = controlsSpecs;
  cResult[24] = left;
  cResult[25] = mode;
  cResult[26] = showControls;
  cResult[27] = VoicePanelUITsx10;
  onEndResult = VoicePanelUITsx10;
}) : ((scrollPosition) => {
  scrollPosition = scrollPosition.scrollPosition;
  const dragScrolling = scrollPosition.dragScrolling;
  const setPanelFullscreen = scrollPosition.setPanelFullscreen;
  const setPanelOpen = scrollPosition.setPanelOpen;
  const setPanelPIP = scrollPosition.setPanelPIP;
  const context = setPanelPIP.useContext(dragScrolling(setPanelFullscreen[19]));
  const channelId = context.channelId;
  const connected = context.connected;
  const controlsSpecs = context.controlsSpecs;
  const dismissPanel = context.dismissPanel;
  const dismissToPIPGestureRef = context.dismissToPIPGestureRef;
  const focused = context.focused;
  const hideControls = context.hideControls;
  const isFocusedVideoZoomed = context.isFocusedVideoZoomed;
  let mode = context.mode;
  const safeArea = context.safeArea;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  let tmp2 = dragScrolling(setPanelFullscreen[20])();
  closure_20 = tmp2;
  const sharedValue = scrollPosition(setPanelFullscreen[15]).useSharedValue(0);
  let obj = scrollPosition(setPanelFullscreen[15]);
  const sharedValue1 = scrollPosition(setPanelFullscreen[15]).useSharedValue(false);
  obj2 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue2 = scrollPosition(setPanelFullscreen[15]).useSharedValue(false);
  let obj3 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue3 = scrollPosition(setPanelFullscreen[15]).useSharedValue({ start: 0, end: safeArea });
  let tmp7 = setPanelOpen(setPanelPIP.useState(true), 2);
  let first = tmp7[0];
  const PIP_POP_HEIGHT = tmp7[1];
  const memo = setPanelPIP.useMemo(() => {
    const Gesture = scrollPosition(setPanelFullscreen[21]).Gesture;
    return Gesture.Native();
  }, []);
  obj4 = scrollPosition(setPanelFullscreen[15]);
  let obj5 = { start: 0, end: safeArea };
  const animatedRef = scrollPosition(setPanelFullscreen[15]).useAnimatedRef();
  let obj6 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue4 = scrollPosition(setPanelFullscreen[15]).useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  let obj7 = scrollPosition(setPanelFullscreen[15]);
  let fn = function h() {
    return { gestureActive: sharedValue4.get().active, connected: connected.get(), mode: mode.get() };
  };
  fn.__closure = { gestureState: sharedValue4, connected, mode };
  fn.__workletHash = 11454780288856;
  fn.__initData = __initData22;
  let fn2 = function f(mode, safeAreaState2) {
    if (!obj.cheapWorkletShallowEqual(mode, safeAreaState2)) {
      mode = mode.mode;
      if (mode.connected) {
        if (!mode.gestureActive) {
          if (mode === VoicePanelModes.PANEL) {
            tmp2(4497).runOnJS(setPanelFullscreen)(true);
            const tmp2Result = tmp2(4497);
          }
          if (mode === VoicePanelModes.PANEL) {
            tmp2(4497).runOnJS(setPanelOpen)(true);
            const tmp2Result6 = tmp2(4497);
          } else {
            tmp2(4497).runOnJS(setPanelOpen)(false);
            const tmp2Result7 = tmp2(4497);
          }
          if (mode === tmp9.PIP) {
            tmp2(4497).runOnJS(setPanelPIP)(true);
            const tmp2Result8 = tmp2(4497);
          } else {
            tmp2(4497).runOnJS(setPanelPIP)(false);
            const tmp2Result9 = tmp2(4497);
          }
          tmp9 = VoicePanelModes;
        }
      }
      tmp2(4497).runOnJS(setPanelFullscreen)(false);
      const tmp2Result10 = tmp2(4497);
    }
  };
  const obj8 = scrollPosition(setPanelFullscreen[15]);
  fn2.__closure = { cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual, VoicePanelModes: setMode, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP };
  fn2.__workletHash = 7042586903190;
  fn2.__initData = __initData23;
  const animatedReaction = obj8.useAnimatedReaction(fn, fn2);
  const obj9 = { cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual, VoicePanelModes: setMode, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP };
  let fn3 = function p() {
    return mode.get();
  };
  fn3.__closure = { mode };
  fn3.__workletHash = 7690101146047;
  fn3.__initData = __initData24;
  let fn4 = function _(arg0, arg1) {
    let tmp2 = arg0 === VoicePanelModes.DISMISSED;
    if (tmp2) {
      tmp2 = arg1 !== tmp.DISMISSED;
    }
    if (tmp2) {
      updateSharedValueIfChangedDefault(sharedValue4, { cancel: false, active: false });
    }
  };
  const obj10 = scrollPosition(setPanelFullscreen[15]);
  fn4.__closure = { VoicePanelModes: setMode, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), gestureState: sharedValue4 };
  fn4.__workletHash = 556236677576;
  fn4.__initData = __initData25;
  const animatedReaction1 = obj10.useAnimatedReaction(fn3, fn4);
  const items = [channelId];
  const handleFocusChange = setPanelPIP.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, arg0));
    }
    PIP_POP_HEIGHT(!tmp);
  }, items);
  const obj11 = { VoicePanelModes: setMode, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), gestureState: sharedValue4 };
  function se() {
    let tmp;
    if (mode.get() === VoicePanelModes.PANEL) {
      value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp = id;
    }
    return tmp;
  }
  se.__closure = { mode, VoicePanelModes: setMode, focused };
  se.__workletHash = 12141076453802;
  se.__initData = __initData26;
  function ne(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(callback)(arg0);
    }
  }
  const obj12 = scrollPosition(setPanelFullscreen[15]);
  ne.__closure = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
  ne.__workletHash = 717225298458;
  ne.__initData = __initData27;
  const animatedReaction2 = obj12.useAnimatedReaction(se, ne);
  const items1 = [tmp2, connected, controlsSpecs, dismissPanel, dismissToPIPGestureRef, focused, first, hideControls, sharedValue4, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo1 = setPanelPIP.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const rect = { left: -1 * closure_20.left, right: -1 * closure_20.right };
    const TapResult = Gesture2.Tap();
    const hitSlopResult = Gesture2.Tap().hitSlop(rect);
    const enabledResult = Gesture2.Tap().hitSlop(rect).enabled(first);
    const fn = function f() {
      if (connected.get()) {
        if (mode.get() !== setMode.PIP) {
          if (controlsSpecs.get().mode === wrapperDimensions.HIDDEN) {
            scrollPosition(setPanelFullscreen[15]).runOnJS(showControls)({ debounce: true });
            obj2 = scrollPosition(setPanelFullscreen[15]);
          } else {
            scrollPosition(setPanelFullscreen[15]).runOnJS(hideControls)({ debounce: true });
            const obj = scrollPosition(setPanelFullscreen[15]);
          }
        }
      }
    };
    const maxDistanceResult = Gesture2.Tap().hitSlop(rect).enabled(first).maxDistance(30);
    fn.__closure = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
    fn.__workletHash = 14805228323598;
    fn.__initData = __initData;
    let obj = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult = maxDistanceResult.onStart(fn);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(first);
    const manualActivationResult = Gesture3.Pan().enabled(first).manualActivation(true);
    const rect1 = { left: -1 * closure_20.left, right: -1 * closure_20.right };
    const maxPointersResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1);
    const hitSlopResult1 = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop(rect1);
    let result = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop(rect1).withRef(dismissToPIPGestureRef).shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(memo);
    class S {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        if (mode) {
          tmp2 = null;
          if (null != first) {
            tmp3 = closure_1_17;
            tmp4 = closure_1_14;
            if (first.absoluteY > closure_1_17.get().height - closure_1_14.get().bottom) {
              tmp16 = closure_1_29;
              obj1 = {};
              tmp17 = obj1;
              merged = Object.assign(closure_1_29.get());
              flag2 = true;
              obj1.cancel = true;
              result = closure_1_29.set(obj1);
              activateResult = arg1.activate();
              return;
            }
          }
        }
        value = closure_1_12.get();
        if (!value) {
          tmp6 = closure_1_13;
          tmp7 = setMode;
          tmp8 = closure_1_13.get() === setMode.PANEL;
          if (tmp8) {
            tmp9 = closure_1_7;
            tmp10 = wrapperDimensions;
            tmp8 = closure_1_7.get().mode === wrapperDimensions.DRAWER;
          }
          value = tmp8;
        }
        if (value) {
          tmp11 = closure_1_29;
          obj = {};
          tmp12 = obj;
          merged1 = Object.assign(closure_1_29.get());
          flag = true;
          obj.cancel = true;
          result1 = closure_1_29.set(obj);
          failResult = arg1.fail();
        }
        return;
      }
    }
    S.__closure = { IS_IOS, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes };
    S.__workletHash = 6294734950159;
    S.__initData = __initData8;
    obj2 = { IS_IOS, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes };
    const withRefResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop(rect1).withRef(dismissToPIPGestureRef);
    const fn2 = function u(arg0) {
      if (!sharedValue4.get().cancel) {
        dragScrolling(setPanelFullscreen[23])(wrapperOffset, { x: 0, y: 0 });
        const obj3 = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
        ({ absoluteX: obj2.absoluteXStart, absoluteY: obj2.absoluteYStart } = arg0);
        value = connected.get();
        if (value) {
          value = mode.get() === setMode.PANEL;
        }
        obj3.requiresPop = value;
        const result = sharedValue4.set(obj3);
      }
    };
    const onTouchesDownResult = result1.onTouchesDown(S);
    fn2.__closure = { gestureState: sharedValue4, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, mode, VoicePanelModes };
    fn2.__workletHash = 6932633643566;
    fn2.__initData = __initData7;
    let obj3 = { gestureState: sharedValue4, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, mode, VoicePanelModes };
    const fn3 = function c(state, fail) {
      if (state.state === scrollPosition(setPanelFullscreen[21]).State.BEGAN) {
        if (!sharedValue4.get().active) {
          if (!obj5.get().cancel) {
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const diff = obj5.get().absoluteYStart - absoluteY;
            const diff1 = obj5.get().absoluteXStart - absoluteX;
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const absolute = Math.abs(diff);
            const bound = Math.max(absolute, Math.abs(diff1));
            const _Math4 = Math;
            const _Math5 = Math;
            const absolute1 = Math.abs(diff1);
            let tmp9 = absolute1 >= Math.abs(diff);
            if (!tmp9) {
              tmp9 = diff > 0;
            }
            if (mode.get() === setMode.PANEL) {
              const _Math6 = Math;
              if (diff < 0) {
                if (Math.floor(closure_1_0.get()) <= 0) {
                  let tmp24 = !isQuest;
                  if (isQuest) {
                    tmp24 = bound > sharedValue3;
                  }
                  let flag = tmp24;
                }
              }
              value = focused.get();
              let id;
              if (value != null) {
                id = value.id;
              }
              flag = false;
              if (tmp21) {
                fail.fail();
                flag = false;
              }
              tmp21 = null != id && tmp9;
            } else {
              let tmp12 = obj.get() === tmp11.PIP;
              if (tmp12) {
                tmp12 = bound > sharedValue3;
              }
              flag = false;
              if (tmp12) {
                scrollPosition(tmp2[15]).runOnJS(dragScrolling(tmp2[24]))();
                flag = true;
                const tmpResult = scrollPosition(tmp2[15]);
              }
            }
            const tmp27 = dragScrolling(tmp2[23]);
            if (flag) {
              tmp27(wrapperOffset, { gestureActive: true });
              obj2 = { absoluteXStart: absoluteX, absoluteYStart: absoluteY + closure_1_0.get(), cancel: false, active: true, requiresPop: obj5.get().requiresPop };
              const result = obj5.set(obj2);
              const result1 = sharedValue1.set(true);
              fail.activate();
            } else {
              const obj3 = { absoluteYStart: absoluteY, absoluteXStart: absoluteX };
              tmp27(obj5, obj3);
            }
            obj = mode;
          }
        }
      }
    };
    const onBeginResult = onTouchesDownResult.onBegin(fn2);
    fn3.__closure = { State: LegacyBaseButton.State, gestureState: sharedValue4, mode, VoicePanelModes, scrollPosition, isQuest, MIN_GESTURE_MOVE, focused, runOnJS: ReanimatedRexport2.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, lockScrolling: sharedValue1 };
    fn3.__workletHash = 1135104747808;
    fn3.__initData = __initData6;
    obj4 = { State: LegacyBaseButton.State, gestureState: sharedValue4, mode, VoicePanelModes, scrollPosition, isQuest, MIN_GESTURE_MOVE, focused, runOnJS: ReanimatedRexport2.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, lockScrolling: sharedValue1 };
    const fn4 = function l(absoluteY) {
      if (!sharedValue4.get().cancel) {
        let merged1 = mode.get();
        if (merged1 !== setMode.PIP) {
          const result = -1 * (obj.get().absoluteYStart - absoluteY.absoluteY);
          let tmp12 = connected.get() && !obj.get().requiresPop;
          if (tmp12) {
            tmp12 = result <= 0;
          }
          if (tmp12) {
            obj2 = {};
            merged1 = Object.assign(obj.get());
            obj2.requiresPop = true;
            const result1 = obj.set(obj2);
          }
          if (sharedValue1.get()) {
            if (result < 0) {
              const result2 = obj4.set(false);
            }
            let diff = result;
            if (!obj.get().requiresPop) {
              const point = { y: diff, x: 0 };
              dragScrolling(setPanelFullscreen[23])(wrapperOffset, point);
            } else {
              const _Math = Math;
              merged1 = Math.max(result, 0);
              if (merged1 > closure_26) {
                const obj3 = {};
                const merged = Object.assign(obj.get());
                obj3.requiresPop = false;
                const result3 = obj.set(obj3);
                const obj6 = scrollPosition(setPanelFullscreen[15]);
                scrollPosition(setPanelFullscreen[15]).runOnJS(scrollPosition(setPanelFullscreen[25]).triggerHapticFeedback)(scrollPosition(setPanelFullscreen[25]).HapticFeedbackTypes.IMPACT_MEDIUM);
                diff = result;
                const runOnJSResult = scrollPosition(setPanelFullscreen[15]).runOnJS(scrollPosition(setPanelFullscreen[25]).triggerHapticFeedback);
              }
            }
            diff = merged1 - merged1 * closure_20;
          }
          value2 = obj4.get();
          let tmp16 = !value2;
          if (!value2) {
            merged1 = closure_1_0;
            tmp16 = closure_1_0.get() <= 0;
          }
          if (tmp16) {
            const result4 = obj4.set(true);
          }
        } else {
          const point1 = { x: -1 * (obj.get().absoluteXStart - absoluteY.absoluteX), y: -1 * (obj.get().absoluteYStart - absoluteY.absoluteY) };
          dragScrolling(setPanelFullscreen[23])(wrapperOffset, point1);
          const tmp7 = dragScrolling(setPanelFullscreen[23]);
        }
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
    fn4.__closure = { gestureState: sharedValue4, mode, VoicePanelModes, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE, PIP_POP_HEIGHT, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    fn4.__workletHash = 4764251017067;
    fn4.__initData = __initData5;
    let obj5 = { gestureState: sharedValue4, mode, VoicePanelModes, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE, PIP_POP_HEIGHT, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    const fn5 = function s() {
      const result = sharedValue1.set(false);
      dragScrolling(setPanelFullscreen[23])(sharedValue4, { cancel: false, active: false });
      dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    fn5.__closure = { lockScrolling: sharedValue1, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4, wrapperOffset };
    fn5.__workletHash = 11957625127277;
    fn5.__initData = __initData4;
    let obj6 = { lockScrolling: sharedValue1, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4, wrapperOffset };
    const fn6 = function o(velocityY) {
      if (!sharedValue4.get().cancel) {
        velocityY = velocityY.velocityY;
        ({ velocityX, absoluteX, absoluteY } = velocityY);
        if (mode.get() === setMode.PIP) {
          const obj6 = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
          const result = scrollPosition(setPanelFullscreen[26]).calculatePIPPositionFromVelocity(obj6);
          ({ pipX, pipY } = result);
          const obj7 = { pipX, pipY };
          dragScrolling(setPanelFullscreen[23])(wrapperDimensions, obj7);
          dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false });
          const obj5 = scrollPosition(setPanelFullscreen[26]);
        } else if (obj2.get() === tmp2.PANEL) {
          if (velocityY > 0) {
            if (connected.get()) {
              if (sharedValue4.get().requiresPop) {
                dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                const result1 = sharedValue1.set(false);
              } else {
                scrollPosition(setPanelFullscreen[15]).runOnJS(closure_1_15)(tmp2.PIP);
                dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                obj4 = scrollPosition(setPanelFullscreen[15]);
              }
            } else {
              const diff = wrapperDimensions.get().drawerHeight - wrapperDimensions.get().drawerY;
              if (wrapperOffset.get().y > diff * first) {
                dragScrolling(setPanelFullscreen[23])(tmp12, { gestureActive: false });
                scrollPosition(setPanelFullscreen[15]).runOnJS(dismissPanel)();
                const obj3 = scrollPosition(setPanelFullscreen[15]);
              } else {
                dragScrolling(setPanelFullscreen[23])(tmp12, { gestureActive: false, x: 0, y: 0 });
                const result2 = sharedValue1.set(false);
              }
            }
          } else {
            dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
            const result3 = sharedValue1.set(false);
          }
        }
        obj2 = mode;
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
    fn6.__closure = { gestureState: sharedValue4, mode, VoicePanelModes, calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperDimensions, wrapperOffset, connected, runOnJS: ReanimatedRexport2.runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE, dismissPanel };
    fn6.__workletHash = 9249476857050;
    fn6.__initData = __initData3;
    let obj7 = { gestureState: sharedValue4, mode, VoicePanelModes, calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperDimensions, wrapperOffset, connected, runOnJS: ReanimatedRexport2.runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE, dismissPanel };
    const fn7 = function t() {
      let tmp = 0 !== wrapperOffset.get().y;
      if (tmp) {
        tmp = mode.get() === setMode.PANEL;
      }
      if (!tmp) {
        dragScrolling(setPanelFullscreen[23])(sharedValue4, { cancel: false, active: false });
      }
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn6);
    fn7.__closure = { wrapperOffset, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4 };
    fn7.__workletHash = 10045661111458;
    fn7.__initData = __initData2;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn7));
  }, items1);
  const obj13 = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
  const obj15 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  function ue(contentOffset) {
    const result = scrollPosition.set(contentOffset.contentOffset.y);
    const result1 = dragScrolling.set(true);
  }
  ue.__closure = { scrollPosition, dragScrolling };
  ue.__workletHash = 9264281860951;
  ue.__initData = __initData28;
  obj15.onBeginDrag = ue;
  function ce() {
    const result = dragScrolling.set(false);
  }
  ce.__closure = { dragScrolling };
  ce.__workletHash = 26506964466;
  ce.__initData = __initData29;
  obj15.onEndDrag = ce;
  function le() {
    const result = dragScrolling.set(false);
  }
  le.__closure = { dragScrolling };
  le.__workletHash = 8850648747337;
  le.__initData = __initData30;
  obj15.onMomentumEnd = le;
  function ie(contentOffset) {
    if (sharedValue1.get()) {
      if (!sharedValue2.get()) {
        if (scrollPosition.get() < 0) {
          const result = obj4.set(0);
        }
        value = obj4.get();
        const _Math7 = Math;
        if (Math.abs(contentOffset.contentOffset.y - value) >= 0.1) {
          const result1 = obj3.set(true);
          const obj5 = ReanimatedRexport2;
          obj5.scrollTo(animatedRef, 0, value, false);
          const result2 = obj3.set(false);
        }
      }
    } else {
      let tmp;
      if (scrollPosition.get() !== contentOffset.contentOffset.y) {
        value2 = obj.get();
        if (typeof computeViewableChunksFromScrollPosition === "function") {
          const _Math = Math;
          const rounded = Math.ceil(windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR);
          const _Math2 = Math;
          const _Math3 = Math;
          const _Math4 = Math;
          const _Math5 = Math;
          const sum = Math.max(Math.floor(value2 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
          const bound = Math.min(sum, Math.ceil(tmp24 / rounded));
          obj2 = { start: null, end: null };
          const _Math6 = Math;
          obj2.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - 2, 0);
          obj2.end = bound;
          tmp = obj2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result3 = obj.set(contentOffset.contentOffset.y);
      if (null != tmp) {
        updateSharedValueIfChangedDefault(sharedValue3, tmp);
      }
    }
  }
  const obj14 = scrollPosition(setPanelFullscreen[15]);
  ie.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: scrollPosition(setPanelFullscreen[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), viewableChunks: sharedValue3 };
  ie.__workletHash = 4242774428742;
  ie.__initData = __initData31;
  obj15.onScroll = ie;
  const obj16 = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: scrollPosition(setPanelFullscreen[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), viewableChunks: sharedValue3 };
  const animatedScrollHandler = obj14.useAnimatedScrollHandler(obj15);
  function ge() {
    return mode.get();
  }
  ge.__closure = { mode };
  ge.__workletHash = 1385044671925;
  ge.__initData = __initData32;
  function de(arg0, arg1) {
    if (tmp) {
      if (arg0 === VoicePanelModes.PANEL) {
        if (arg1 === tmp2.PIP) {
          const result = sharedValue1.set(false);
        }
      }
      if (arg0 === VoicePanelModes.PIP) {
        const result1 = sharedValue1.set(true);
      }
    }
  }
  de.__closure = { VoicePanelModes: setMode, lockScrolling: sharedValue1 };
  de.__workletHash = 6193088181234;
  de.__initData = __initData33;
  const animatedReaction3 = scrollPosition(setPanelFullscreen[15]).useAnimatedReaction(ge, de);
  const obj17 = scrollPosition(setPanelFullscreen[15]);
  const token = scrollPosition(setPanelFullscreen[27]).useToken(dragScrolling(setPanelFullscreen[14]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj18 = scrollPosition(setPanelFullscreen[27]);
  function he() {
    const tmp = mode.get() === VoicePanelModes.PIP;
    let tmp2 = tmp;
    if (!tmp) {
      tmp2 = null != focused.get();
    }
    let str = "auto";
    if (tmp) {
      str = "none";
    }
    const obj = { pointerEvents: str, scrollEnabled: !tmp2, showsVerticalScrollIndicator: null, scrollIndicatorInsets: null };
    value = sharedValue1.get();
    let tmp7 = !value;
    if (!value) {
      tmp7 = tmp5;
    }
    obj.showsVerticalScrollIndicator = tmp7;
    const rect = { top: calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token).height - safeArea.get().top, bottom: safeArea.get().bottom };
    obj.scrollIndicatorInsets = rect;
    return obj;
  }
  const obj19 = scrollPosition(setPanelFullscreen[15]);
  he.__closure = { mode, VoicePanelModes: setMode, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: dragScrolling(setPanelFullscreen[28]), safeArea, edgeGutter: token };
  he.__workletHash = 6124726929163;
  he.__initData = __initData34;
  const items2 = [sharedValue];
  const animatedProps = obj19.useAnimatedProps(he);
  const callback1 = setPanelPIP.useCallback((arg0, arg1) => {
    const result = sharedValue.set(arg1);
  }, items2);
  const obj20 = { mode, VoicePanelModes: setMode, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: dragScrolling(setPanelFullscreen[28]), safeArea, edgeGutter: token };
  function _e() {
    value = mode.get();
    if (VoicePanelModes.PIP !== value) {
      if (VoicePanelModes.DISMISSED !== value) {
        if (connected.get()) {
          if (sharedValue4.get().active) {
            if (obj.get().requiresPop) {
              return 1;
            }
          }
          obj = sharedValue4;
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
  _e.__closure = { mode, VoicePanelModes: setMode, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
  _e.__workletHash = 17433445143273;
  _e.__initData = __initData35;
  const obj21 = scrollPosition(setPanelFullscreen[15]);
  return { gesture: memo1, scrollerRef: animatedRef, scrollNativeGesture: memo, viewableChunks: sharedValue3, handleScroll: animatedScrollHandler, scrollViewProps: animatedProps, onContentSizeChange: callback1, wrapperOffset, scrollableRegionSize: sharedValue, gestureState: sharedValue4, opacity: scrollPosition(setPanelFullscreen[15]).useDerivedValue(_e) };
});
function computeBorderRadii(mode) {
  if (mode.mode === VoicePanelModes.PIP) {
    let num = DEFAULT_BORDER_RADIUS_PIP;
  } else {
    num = 0;
    if (!tmp) {
      num = DEFAULT_BORDER_RADIUS;
    }
  }
  return num;
}
computeBorderRadii.__closure = { VoicePanelModes, DEFAULT_BORDER_RADIUS_PIP, DEFAULT_BORDER_RADIUS };
computeBorderRadii.__workletHash = 4017485515216;
computeBorderRadii.__initData = { code: "function computeBorderRadii_VoicePanelUITsx48({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}" };
const __initData36 = { code: "function VoicePanelUITsx49(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}" };
const __initData37 = { code: "function VoicePanelUITsx50(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};}" };
const __initData38 = { code: "function VoicePanelUITsx51(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}}" };
const __initData39 = { code: "function VoicePanelUITsx52(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}]};}" };
const __initData40 = { code: "function VoicePanelUITsx53(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
const __initData41 = { code: "function VoicePanelUITsx54(){const{computeBorderRadii,mode,connected,wrapperDimensions,withSpring,BORDER_RADIUS_PHYSICS,VoicePanelModes,styles}=this.__closure;const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
const __initData42 = { code: "function VoicePanelUITsx55(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData43 = { code: "function VoicePanelUITsx56(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
const __initData44 = { code: "function VoicePanelUITsx57(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
const __initData45 = { code: "function VoicePanelUITsx58(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
ReactCompilerGating = fn(558);
let closure_94 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(9);
  children = children.children;
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = useWrapperStyles(children.wrapperOffset));
  if (cResult[0] === children) {
    if (cResult[1] === wrapperSurfaceStyles) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === tmp4) {
      if (cResult[4] === wrapperTransformStyles) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === wrapperRootStyles) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      obj2 = { style: wrapperRootStyles, pointerEvents: "box-none", children: tmp6 };
      const tmp13 = guild(ReanimatedNativeViewDefault, obj2);
      cResult[6] = tmp6;
      cResult[7] = wrapperRootStyles;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: tmp4 };
    const tmp9 = guild(ReanimatedNativeViewDefault, obj3);
    cResult[3] = tmp4;
    cResult[4] = wrapperTransformStyles;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const tmp5 = guild(ReanimatedNativeViewDefault, { style: wrapperSurfaceStyles, layout: layoutTransition, children });
  cResult[0] = children;
  cResult[1] = wrapperSurfaceStyles;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((children) => {
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = useWrapperStyles(children.wrapperOffset));
  const obj = { style: wrapperRootStyles, pointerEvents: "box-none", children: null };
  const tmp = useWrapperStyles(children.wrapperOffset);
  obj2 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
  const tmp2 = ReanimatedNativeViewDefault;
  obj2.children = guild(ReanimatedNativeViewDefault, { style: wrapperSurfaceStyles, layout: layoutTransition, children: children.children });
  obj.children = guild(ReanimatedNativeViewDefault, obj2);
  return guild(tmp2, obj);
});
const DrawerShadeOpacityPhysics = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
const __initData46 = { code: "function VoicePanelUITsx59(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?\"none\":\"auto\"};}" };
const __initData47 = { code: "function VoicePanelUITsx60(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
ReactCompilerGating = fn(558);
let closure_98 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((opacity) => {
  const cResult = opacity(568).c(9);
  opacity = opacity.opacity;
  const onPress = opacity.onPress;
  const tmp3 = closure_34();
  let obj = opacity(568);
  const fn = function o() {
    const obj = { opacity: spring.withSpring(opacity.get(), closure_95), pointerEvents: null };
    let str = "auto";
    if (0 === opacity.get()) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  obj2 = opacity(4497);
  fn.__closure = { withSpring: opacity(5187).withSpring, opacity, DrawerShadeOpacityPhysics };
  fn.__workletHash = 6949445761550;
  fn.__initData = __initData46;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp3.shade) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === onPress) {
      if (cResult[4] === tmp3.shadePressable) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp6) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      obj4 = { style: tmp5, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: tmp6 };
      const tmp13 = closure_21(ReanimatedRexport.View, obj4);
      cResult[6] = tmp5;
      cResult[7] = tmp6;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj5 = { style: tmp3.shadePressable, onPress };
    const tmp9 = closure_21(closure_6, obj5);
    cResult[3] = onPress;
    cResult[4] = tmp3.shadePressable;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const items = [StyleSheet.absoluteFill, tmp3.shade, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.shade;
  cResult[2] = items;
  tmp5 = items;
}) : ((onPress) => {
  const opacity = onPress.opacity;
  const tmp = closure_34();
  const fn = function n() {
    const obj = { opacity: spring.withSpring(opacity.get(), closure_95), pointerEvents: null };
    let str = "auto";
    if (0 === opacity.get()) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  let obj = opacity(4497);
  fn.__closure = { withSpring: opacity(5187).withSpring, opacity, DrawerShadeOpacityPhysics };
  fn.__workletHash = 7070087280036;
  fn.__initData = __initData47;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_21(closure_6, { style: tmp.shadePressable, onPress: onPress.onPress }) };
  const items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj3.style = items;
  return closure_21(ReanimatedRexport.View, obj3);
}));
ReactCompilerGating = fn(558);
let obj12 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = channelId(568).c(35);
  closure_34();
  let obj = channelId(568);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ scrollPosition, dragScrolling, channelId } = context);
  obj2 = noop;
  [r10033, importDefault] = noop.useState(false);
  dependencyMap = noop.useRef(-1);
  if (cResult[0] !== channelId) {
    const fn = function n(arg0) {
      closure_0 = arg0;
      clearTimeout(ref.current);
      channelId(ref[38]).batchUpdates(() => {
        if (lockEnabled) {
          const _setTimeout = setTimeout;
          closure_2.current = setTimeout(() => {
            state = state2.getState();
            const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
            const state1 = state.getState();
            const freezeLock = state1.requestFreezeLock({ lockEnabled, key: "voice-panel-freeze-" + closure_0 });
          }, 1000);
        } else {
          state = VoicePanelStore.getState();
          let result = state.setChannelPanelFullscreen(channelId, tmp);
          let state1 = AppFreezeStore.getState();
          const obj = { lockEnabled: tmp, key: null };
          const _HermesInternal = HermesInternal;
          obj.key = "voice-panel-freeze-" + channelId;
          let freezeLock = state1.requestFreezeLock(obj);
        }
      });
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        return () => {
          clearTimeout(ref.current);
        };
      }
    }
    const items = [];
    cResult[2] = D;
    cResult[3] = items;
    let tmp8 = items;
    const tmp7 = D;
  } else {
    class D {
      constructor() {
        return () => {
          clearTimeout(ref.current);
        };
      }
    }
    tmp8 = cResult[3];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp7, tmp8);
  if (cResult[4] !== channelId) {
    class M {
      constructor(arg0) {
        state = closure_9.getState();
        setChannelPanelOpenResult = state.setChannelPanelOpen(channelId, arg0);
        return;
      }
    }
    cResult[4] = channelId;
    cResult[5] = M;
  } else {
    class M {
      constructor(arg0) {
        state = closure_9.getState();
        setChannelPanelOpenResult = state.setChannelPanelOpen(channelId, arg0);
        return;
      }
    }
  }
  if (cResult[6] !== channelId) {
    class C {
      constructor(arg0) {
        state = closure_9.getState();
        setChannelPanelPIPResult = state.setChannelPanelPIP(channelId, arg0);
        return;
      }
    }
    cResult[6] = channelId;
    cResult[7] = C;
  } else {
    class C {
      constructor(arg0) {
        state = closure_9.getState();
        setChannelPanelPIPResult = state.setChannelPanelPIP(channelId, arg0);
        return;
      }
    }
  }
  if (cResult[8] === dragScrolling) {
    class C {
      constructor(arg0) {
        state = closure_9.getState();
        setChannelPanelPIPResult = state.setChannelPanelPIP(channelId, arg0);
        return;
      }
    }
  }
  cResult[8] = dragScrolling;
  cResult[9] = scrollPosition;
  cResult[10] = tmp6;
  cResult[11] = tmp10;
  cResult[12] = tmp11;
  cResult[13] = { scrollPosition, dragScrolling, setPanelFullscreen: tmp6, setPanelOpen: tmp10, setPanelPIP: tmp11 };
}) : (() => {
  const tmp = closure_34();
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ scrollPosition, dragScrolling, dismissPanel } = context);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp6[1];
  dependencyMap = noop.useRef(-1);
  const items = [channelId];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    clearTimeout(ref.current);
    channelId(ref[38]).batchUpdates(() => {
      if (lockEnabled) {
        const _setTimeout = setTimeout;
        closure_2.current = setTimeout(() => {
          state = state2.getState();
          const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
          const state1 = state.getState();
          const freezeLock = state1.requestFreezeLock({ lockEnabled, key: "voice-panel-freeze-" + closure_0 });
        }, 1000);
      } else {
        state = VoicePanelStore.getState();
        let result = state.setChannelPanelFullscreen(channelId, tmp);
        let state1 = AppFreezeStore.getState();
        const obj = { lockEnabled: tmp, key: null };
        const _HermesInternal = HermesInternal;
        obj.key = "voice-panel-freeze-" + channelId;
        let freezeLock = state1.requestFreezeLock(obj);
      }
    });
  }, items);
  const layoutEffect = noop.useLayoutEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  const items1 = [channelId];
  const items2 = [channelId];
  const callback1 = noop.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelOpen(channelId, arg0);
  }, items1);
  const tmp4 = useAnalyticsLocationsDefault;
  let obj = {
    scrollPosition,
    dragScrolling,
    setPanelFullscreen: callback,
    setPanelOpen: callback1,
    setPanelPIP: noop.useCallback((arg0) => {
      state = VoicePanelStore.getState();
      state.setChannelPanelPIP(channelId, arg0);
    }, items2)
  };
  ({ gestureState, wrapperOffset, gesture, handleScroll, onContentSizeChange, scrollViewProps, scrollerRef, scrollNativeGesture, viewableChunks, opacity } = closure_81({
    scrollPosition,
    dragScrolling,
    setPanelFullscreen: callback,
    setPanelOpen: callback1,
    setPanelPIP: noop.useCallback((arg0) => {
      state = VoicePanelStore.getState();
      state.setChannelPanelPIP(channelId, arg0);
    }, items2)
  }));
  const tmp11 = useControlsLockDefault();
  _slicedToArray = tmp11;
  const items3 = [tmp11];
  const effect = noop.useEffect(() => {
    closure_3.lock();
  }, items3);
  const effect1 = noop.useEffect(() => closure_1(true), []);
  let tmp14 = null;
  if (tmp6[0]) {
    obj2 = { value: tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations, children: null };
    const obj3 = { children: null };
    const items4 = [closure_21(tmp2(17489), {}), , ];
    obj4 = { opacity, onPress: dismissPanel };
    items4[1] = closure_21(closure_98, obj4);
    const obj5 = { style: tmp.accessibilityView, nativeID: null, accessibilityViewIsModal: true, layout: null, onAccessibilityEscape: null, children: null };
    let _HermesInternal = HermesInternal;
    obj5.nativeID = "voice-panel-ui-" + channelId;
    obj5.layout = layoutTransition;
    obj5.onAccessibilityEscape = tmp2(9568);
    const items5 = [closure_21(tmp2(17491), {}), , , ];
    const obj6 = { wrapperOffset, children: null };
    const obj7 = { zIndex: 2, children: null };
    const obj8 = { wrapperOffset, gestureState, layout: layoutTransition };
    obj7.children = closure_21(tmp2(17493), obj8);
    const items6 = [closure_21(channelId(7403).LayerScope, obj7), ];
    const obj9 = { gesture, children: null };
    const obj10 = { style: StyleSheet.absoluteFill, layout: layoutTransition, collapsable: false, children: null };
    const tmp2Result = tmp2(17490);
    const obj11 = { gesture: scrollNativeGesture, children: null };
    const obj12 = { layout: scrollViewLayoutTransition, ref: scrollerRef, onScroll: handleScroll, onMomentumScrollEnd: NOOP, animatedProps: scrollViewProps, style: tmp.scrollView, onContentSizeChange, contentContainerStyle: tmp.scrollViewContent, scrollEventThrottle: 8.333333333333334, children: null };
    const obj13 = { viewableChunks };
    const items7 = [closure_21(tmp2(17550), obj13), closure_21(tmp2(17582), {})];
    obj12.children = items7;
    obj11.children = closure_22(closure_35, obj12);
    obj10.children = closure_21(channelId(6891).GestureDetector, obj11);
    obj9.children = closure_21(tmp2(7320), obj10);
    items6[1] = closure_21(channelId(6891).GestureDetector, obj9);
    obj6.children = items6;
    items5[1] = closure_22(closure_94, obj6);
    items5[2] = closure_21(tmp2(17586), {});
    const obj14 = { gestureState };
    items5[3] = closure_21(tmp2(17592), obj14);
    obj5.children = items5;
    items4[2] = closure_22(tmp2Result, obj5);
    obj3.children = items4;
    obj2.children = closure_22(channelId(7403).LayerScope, obj3);
    tmp14 = closure_21(channelId(7409).AnalyticsLocationProvider, obj2);
    const tmp2Result2 = tmp2(7320);
  }
  return tmp14;
}));
export const REDUCED_MOTION_OPACITY_PHYSICS = obj5;
