// Module ID: 19202
// Function ID: 19203
// Name: VoicePanelDock
// Dependencies: [19, 17, 11223, 11241, 11242, 21, 5014, 575, 1625, 11222, 5095, 11249, 5874, 5260, 11227, 5303, 5254, 7241, 1113, 19203, 19205, 2]

// Module 19202 (VoicePanelDock)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import ExternalPipDefault from "ExternalPip" /* 5874 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11227 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11249 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11241 */;
import GestureConstants from "GestureConstants" /* 11242 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let set2;

let DOCK_DRAG_HANDLE_TOP;
let DOCK_DRAG_HANDLE_WIDTH;
let DOCK_GAP;
let DOCK_PADDING_TOP;
let DOCK_ROW_HEIGHT;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let size;
let unpackModuleId;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ DOCK_EXPAND_GESTURE_CANCEL_DISTANCE: metroImportDefault, DOCK_PULL_SNAP_DISTANCE: metroImportAll, DOCK_PULL_SNAP_GIVE: c9, DOCK_TAP_MAX_MOVEMENT: c10, getDockInset: unpackModuleId, DOCK_DRAG_HANDLE_TOP, DOCK_DRAG_HANDLE_WIDTH, DOCK_GAP, DOCK_PADDING_TOP, DOCK_ROW_HEIGHT } = VoicePanelDockConstants);
({ FLING_MIN_DISTANCE: closure_12, FLING_MIN_VELOCITY: map1, PULL_GESTURE_ACTIVATION_DISTANCE: closure_14, PULL_GESTURE_RESISTANCE: closure_15, PULL_GESTURE_SNAP_TIMING: closure_16, PULL_GESTURE_UNSNAP_TIMING: closure_17 } = GestureConstants);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let obj = { dock: { position: "absolute", top: 0, left: 0, right: 0, paddingTop: DOCK_PADDING_TOP, zIndex: 10 }, pressTarget: { position: "absolute", top: 0, left: 0, right: 0 }, dragHandle: size, row: { flexDirection: "row", alignItems: "center", gap: DOCK_GAP, height: DOCK_ROW_HEIGHT }, identity: { flexShrink: 1, flexGrow: 1, justifyContent: "center" } };
size = { position: "absolute", top: DOCK_DRAG_HANDLE_TOP, alignSelf: "center", width: DOCK_DRAG_HANDLE_WIDTH, height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_20 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelDockTsx1(){const{dockMinimizeProgress,SHEET_MORPH_PHYSICS}=this.__closure;const progress=dockMinimizeProgress.get();const restThreshold=SHEET_MORPH_PHYSICS.restDisplacementThreshold;return progress<=restThreshold||progress>=1-restThreshold;}" };
const __initData2 = { code: "function VoicePanelDockTsx2(settled,previous){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(settled&&previous!==settled&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
const __initData3 = { code: "function VoicePanelDockTsx3(){const{pullActive,pullDistance,pullSnapOffset}=this.__closure;return{active:pullActive.get(),distance:pullDistance.get(),snapOffset:pullSnapOffset.get()};}" };
const __initData4 = { code: "function VoicePanelDockTsx4({active:active,distance:distance,snapOffset:snapOffset}){const{wrapperDimensions,dockHeight,pullSnapped,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_RESISTANCE,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(!active){return;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const pulled=(pullSnapped.get()?distance-DOCK_PULL_SNAP_GIVE:distance/PULL_GESTURE_RESISTANCE)+snapOffset;updateSharedValueIfChanged(wrapperOffset,{x:0,y:Math.min(Math.max(travel-pulled,0),travel)});}" };
let closure_25 = { code: "function VoicePanelDockTsx5(){const{pullActive,pullSnapped,pullSnapOffset,updateSharedValueIfChanged,wrapperOffset}=this.__closure;pullActive.set(false);pullSnapped.set(false);pullSnapOffset.set(0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}" };
let closure_26 = { code: "function VoicePanelDockTsx6(event){const{FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,pullSnapped,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,committedMode,VoicePanelModes,handleExpand}=this.__closure;const distance=Math.max(-event.translationY,0);const flungOpen=event.velocityY<-FLING_MIN_VELOCITY&&distance>FLING_MIN_DISTANCE;const flungClosed=event.velocityY>FLING_MIN_VELOCITY;const opens=flungOpen||!flungClosed&&pullSnapped.get();if(opens){if(!pullSnapped.get()){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}committedMode.set(VoicePanelModes.PANEL);runOnJS(handleExpand)();}else if(pullSnapped.get()){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}" };
let closure_27 = { code: "function VoicePanelDockTsx7(event){const{DOCK_PULL_SNAP_DISTANCE,pullSnapped,dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING,pullSnapOffset,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,PULL_GESTURE_UNSNAP_TIMING,pullDistance}=this.__closure;const distance=Math.max(-event.translationY,0);const snapped=distance>=DOCK_PULL_SNAP_DISTANCE;if(snapped!==pullSnapped.get()){pullSnapped.set(snapped);dockContentSwap.set(withTiming(snapped?1:0,DOCK_CONTENT_SWAP_TIMING));if(snapped){pullSnapOffset.set(withTiming(DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{pullSnapOffset.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}pullDistance.set(distance);}" };
let closure_28 = { code: "function VoicePanelDockTsx8(event){const{runOnJS,showControls,pullSnapped,pullSnapOffset,pullDistance,pullActive,updateSharedValueIfChanged,wrapperOffset,wrapperDimensions,dockHeight}=this.__closure;runOnJS(showControls)();pullSnapped.set(false);pullSnapOffset.set(0);pullDistance.set(Math.max(-event.translationY,0));pullActive.set(true);updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:Math.max(wrapperDimensions.get().drawerHeight-dockHeight.get(),0)});}" };
let closure_29 = { code: "function VoicePanelDockTsx9(event){const{touchOrigin,touchMovement}=this.__closure;const touch=event.changedTouches[0];if(touch==null){return;}const origin=touchOrigin.get();const moved=Math.max(Math.abs(touch.absoluteX-origin.x),Math.abs(touch.absoluteY-origin.y));if(moved>touchMovement.get()){touchMovement.set(moved);}}" };
let closure_30 = { code: "function VoicePanelDockTsx10(event){const{touchOrigin,touchMovement}=this.__closure;touchOrigin.set({x:event.absoluteX,y:event.absoluteY});touchMovement.set(0);}" };
const __initData5 = { code: "function VoicePanelDockTsx11(){const{dockPressProgress}=this.__closure;return{opacity:dockPressProgress.get()};}" };
const __initData6 = { code: "function VoicePanelDockTsx12(){const{dockMinimizeProgress,wrapperDimensions,isDockConnected,getDockInset,dockPressProgress,dockHeight,getDockRowOpacity,isDockExpanding,dockContentSwap,isDockRowTouchable}=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();if(!isDockConnected.get()||drawerHeight<=0){return{opacity:0,pointerEvents:'none'};}const inset=getDockInset(dockPressProgress.get());return{height:dockHeight.get(),opacity:getDockRowOpacity(progress,isDockExpanding.get(),dockContentSwap.get()),pointerEvents:isDockRowTouchable(progress)?'auto':'none',paddingLeft:inset,paddingRight:inset};}" };
const memoResult = react.memo(function VoicePanelDock() {
  let committedMode;
  let dockContentSwap;
  let dockHeight;
  let intl;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let sharedValue5;
  let tmp19;
  let tmp = sharedValue5();
  const bottom = committedMode(dockContentSwap[8])().bottom;
  const context = dockHeight.useContext(committedMode(dockContentSwap[9]));
  committedMode = context.committedMode;
  dockContentSwap = context.dockContentSwap;
  dockHeight = context.dockHeight;
  const dockPressProgress = context.dockPressProgress;
  const dockPressed = context.dockPressed;
  const isDockConnected = context.isDockConnected;
  const isDockExpanding = context.isDockExpanding;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  const mode = context.mode;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  let fn = function l() {
    const value = dockMinimizeProgress.get();
    const restDisplacementThreshold = VoicePanelSheetMorph.SHEET_MORPH_PHYSICS.restDisplacementThreshold;
    return value <= restDisplacementThreshold || value >= 1 - restDisplacementThreshold;
  };
  const tmp3 = bottom(dockContentSwap[10]);
  let obj = { dockMinimizeProgress, SHEET_MORPH_PHYSICS: bottom(dockContentSwap[11]).SHEET_MORPH_PHYSICS };
  const useAnimatedReaction = tmp3.useAnimatedReaction;
  fn.__closure = obj;
  fn.__workletHash = 224524498189;
  fn.__initData = __initData;
  let fn2 = function n(arg0, arg1) {
    const tmp = arg0 && arg1 !== arg0 && mode.get() !== VoicePanelModes.DISMISSED;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(ExternalPipDefault.updateSourceTrackingView)();
    }
  };
  let obj2 = { mode, VoicePanelModes: isDockConnected, runOnJS: bottom(dockContentSwap[10]).runOnJS, updateSourceTrackingView: committedMode(dockContentSwap[12]).updateSourceTrackingView };
  fn2.__closure = obj2;
  fn2.__workletHash = 3463062968340;
  fn2.__initData = __initData2;
  const animatedReaction = useAnimatedReaction(fn, fn2);
  let items = [setMode, showControls];
  const handleExpand = dockHeight.useCallback(() => {
    showControls();
    setMode(VoicePanelModes.PANEL);
  }, items);
  let obj3 = bottom(dockContentSwap[10]);
  const sharedValue = obj3.useSharedValue({ x: 0, y: 0 });
  const obj4 = bottom(dockContentSwap[10]);
  const sharedValue1 = obj4.useSharedValue(0);
  const items1 = [handleExpand, sharedValue1];
  const callback1 = dockHeight.useCallback(() => {
    if (sharedValue1.get() <= authStore) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      callback();
    }
  }, items1);
  const obj5 = bottom(dockContentSwap[10]);
  const sharedValue2 = obj5.useSharedValue(0);
  const obj6 = bottom(dockContentSwap[10]);
  const sharedValue3 = obj6.useSharedValue(0);
  const obj7 = bottom(dockContentSwap[10]);
  const sharedValue4 = obj7.useSharedValue(false);
  const obj8 = bottom(dockContentSwap[10]);
  sharedValue5 = obj8.useSharedValue(false);
  function ne() {
    const obj = { active: sharedValue5.get(), distance: sharedValue2.get(), snapOffset: sharedValue3.get() };
    return obj;
  }
  ne.__closure = { pullActive: sharedValue5, pullDistance: sharedValue2, pullSnapOffset: sharedValue3 };
  ne.__workletHash = 17519042371659;
  ne.__initData = __initData3;
  function te(distance) {
    distance = distance.distance;
    if (distance.active) {
      let diff1;
      const diff = wrapperDimensions.get().drawerHeight - dockHeight.get();
      if (sharedValue4.get()) {
        diff1 = distance - c9;
      } else {
        diff1 = distance / closure_15;
      }
      const sum = diff1 + tmp;
      const point = { x: 0, y: Math.min(Math.max(diff - sum, 0), diff) };
      const _Math = Math;
      const _Math2 = Math;
      const tmp12 = updateSharedValueIfChangedDefault;
      tmp12(wrapperOffset, point);
    }
  }
  const obj9 = bottom(dockContentSwap[10]);
  te.__closure = { wrapperDimensions, dockHeight, pullSnapped: sharedValue4, DOCK_PULL_SNAP_GIVE: showControls, PULL_GESTURE_RESISTANCE: sharedValue, updateSharedValueIfChanged: committedMode(dockContentSwap[14]), wrapperOffset };
  te.__workletHash = 11212990198006;
  te.__initData = __initData4;
  ({ wrapperDimensions, dockHeight, pullSnapped: sharedValue4, DOCK_PULL_SNAP_GIVE: showControls, PULL_GESTURE_RESISTANCE: sharedValue, updateSharedValueIfChanged: committedMode(dockContentSwap[14]), wrapperOffset });
  const animatedReaction1 = obj9.useAnimatedReaction(ne, te);
  const items2 = [bottom, committedMode, dockContentSwap, handleExpand, showControls, sharedValue5, sharedValue2, sharedValue3, sharedValue4, sharedValue1, sharedValue, wrapperDimensions, wrapperOffset, dockHeight];
  const items3 = [dockPressed];
  const memo = dockHeight.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    let obj = { bottom: -bottom };
    const PanResult = Gesture.Pan();
    const hitSlopResult = PanResult.hitSlop(obj);
    const items = [-metroImportDefault, metroImportDefault];
    const activeOffsetYResult = hitSlopResult.activeOffsetY(-authStore3);
    const fn = function p(absoluteX) {
      const point = { x: absoluteX.absoluteX, y: absoluteX.absoluteY };
      const result = sharedValue.set(point);
      const result1 = sharedValue1.set(0);
    };
    let obj2 = { touchOrigin: sharedValue, touchMovement: sharedValue1 };
    fn.__closure = obj2;
    fn.__workletHash = 6099745163609;
    fn.__initData = __initData6;
    const failOffsetYResult = activeOffsetYResult.failOffsetY(authStore3);
    const fn2 = function l(arg0) {
      const first = arg0.changedTouches[0];
      if (null != first) {
        const point = sharedValue.get();
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const absolute = Math.abs(first.absoluteX - point.x);
        const maxResult = max(absolute, Math.abs(first.absoluteY - point.y));
        const obj = sharedValue1;
        if (maxResult > sharedValue1.get()) {
          const result = obj.set(maxResult);
        }
      }
    };
    fn2.__closure = { touchOrigin: sharedValue, touchMovement: sharedValue1 };
    fn2.__workletHash = 1057270337791;
    fn2.__initData = __initData5;
    const failOffsetXResult = failOffsetYResult.failOffsetX(items);
    const fn3 = function o(translationY) {
      let max;
      const obj = bottom(dockContentSwap[10]);
      obj.runOnJS(showControls)();
      const result = sharedValue4.set(false);
      const result1 = sharedValue3.set(0);
      const result2 = sharedValue2.set(Math.max(-translationY.translationY, 0));
      const result3 = sharedValue5.set(true);
      const point = { gestureActive: true, x: 0, y: max(wrapperDimensions.get().drawerHeight - dockHeight.get(), 0) };
      max = Math.max;
      const tmp6 = committedMode(dockContentSwap[14]);
      tmp6(wrapperOffset, point);
    };
    const onBeginResult = failOffsetXResult.onBegin(fn);
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn2);
    let obj3 = { runOnJS: ReanimatedRexport.runOnJS, showControls, pullSnapped: sharedValue4, pullSnapOffset: sharedValue3, pullDistance: sharedValue2, pullActive: sharedValue5, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, wrapperDimensions, dockHeight };
    fn3.__closure = obj3;
    fn3.__workletHash = 15832534447306;
    fn3.__initData = __initData4;
    const fn4 = function s(translationY) {
      const bound = Math.max(-translationY.translationY, 0);
      const obj = sharedValue4;
      if (bound >= setMode !== sharedValue4.get()) {
        const result = obj.set(tmp2);
        let num = 0;
        set2 = set.set;
        const withTiming2 = bottom(dockContentSwap[16]).withTiming;
        bottom(dockContentSwap[16]);
        if (bound >= setMode) {
          num = 1;
        }
        set2(withTiming2(num, bottom(dockContentSwap[11]).DOCK_CONTENT_SWAP_TIMING));
        const withTiming = bottom(dockContentSwap[16]).withTiming;
        bottom(dockContentSwap[16]);
        if (bound >= setMode) {
          const result1 = set(withTiming(showControls, sharedValue1));
          const tmp18Result3 = bottom(dockContentSwap[10]);
          const runOnJSResult = tmp18Result3.runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback);
          runOnJSResult(bottom(dockContentSwap[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
        } else {
          const result2 = set(withTiming(0, sharedValue2));
          const tmp18Result4 = bottom(dockContentSwap[10]);
          const runOnJSResult1 = tmp18Result4.runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback);
          runOnJSResult1(bottom(dockContentSwap[13]).HapticFeedbackTypes.SOFT);
        }
      }
      const result3 = PULL_GESTURE_UNSNAP_TIMING.set(bound);
    };
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    fn4.__closure = { DOCK_PULL_SNAP_DISTANCE: metroImportAll, pullSnapped: sharedValue4, dockContentSwap, withTiming: timing.withTiming, DOCK_CONTENT_SWAP_TIMING: VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING, pullSnapOffset: sharedValue3, DOCK_PULL_SNAP_GIVE, PULL_GESTURE_SNAP_TIMING, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, PULL_GESTURE_UNSNAP_TIMING, pullDistance: sharedValue2 };
    fn4.__workletHash = 1623835250672;
    fn4.__initData = __initData3;
    ({ DOCK_PULL_SNAP_DISTANCE: metroImportAll, pullSnapped: sharedValue4, dockContentSwap, withTiming: timing.withTiming, DOCK_CONTENT_SWAP_TIMING: VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING, pullSnapOffset: sharedValue3, DOCK_PULL_SNAP_GIVE, PULL_GESTURE_SNAP_TIMING, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, PULL_GESTURE_UNSNAP_TIMING, pullDistance: sharedValue2 });
    const fn5 = function n(velocityY) {
      const tmp2 = velocityY.velocityY < -wrapperOffset && tmp > wrapperDimensions;
      if (tmp2) {
        if (!sharedValue4.get()) {
          const obj2 = bottom(dockContentSwap[10]);
          const runOnJSResult = obj2.runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback);
          runOnJSResult(bottom(dockContentSwap[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
        }
        const result = committedMode.set(isDockConnected.PANEL);
        const obj3 = bottom(dockContentSwap[10]);
        obj3.runOnJS(handleExpand)();
      } else if (sharedValue4.get()) {
        const obj = bottom(dockContentSwap[10]);
        const runOnJSResult1 = obj.runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback);
        runOnJSResult1(bottom(dockContentSwap[13]).HapticFeedbackTypes.SOFT);
      }
    };
    const onChangeResult = onStartResult.onChange(fn4);
    fn5.__closure = { FLING_MIN_VELOCITY: map1, FLING_MIN_DISTANCE, pullSnapped: sharedValue4, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, committedMode, VoicePanelModes, handleExpand };
    fn5.__workletHash = 15141841445202;
    fn5.__initData = __initData2;
    ({ FLING_MIN_VELOCITY: map1, FLING_MIN_DISTANCE, pullSnapped: sharedValue4, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, committedMode, VoicePanelModes, handleExpand });
    const fn6 = function t() {
      const result = sharedValue5.set(false);
      const result1 = sharedValue4.set(false);
      const result2 = sharedValue3.set(0);
      committedMode(dockContentSwap[14])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
    };
    const onEndResult = onChangeResult.onEnd(fn5);
    fn6.__closure = { pullActive: sharedValue5, pullSnapped: sharedValue4, pullSnapOffset: sharedValue3, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    fn6.__workletHash = 1169438050828;
    fn6.__initData = __initData;
    ({ pullActive: sharedValue5, pullSnapped: sharedValue4, pullSnapOffset: sharedValue3, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset });
    return onEndResult.onFinalize(fn6);
  }, items2);
  const items4 = [dockPressed];
  const callback2 = dockHeight.useCallback(() => {
    const result = dockPressed.set(true);
  }, items3);
  const callback3 = dockHeight.useCallback(() => {
    const result = dockPressed.set(false);
  }, items4);
  function ue() {
    const obj = { opacity: dockPressProgress.get() };
    return obj;
  }
  ue.__closure = { dockPressProgress };
  ue.__workletHash = 1980493544431;
  ue.__initData = __initData5;
  const obj11 = bottom(dockContentSwap[10]);
  const animatedStyle = obj11.useAnimatedStyle(ue);
  function de() {
    let getDockRowOpacity;
    let str;
    let value;
    const diff = 1 - dockMinimizeProgress.get();
    const drawerHeight = wrapperDimensions.get().drawerHeight;
    if (isDockConnected.get()) {
      if (drawerHeight > 0) {
        const tmp4 = unpackModuleId(dockPressProgress.get());
        const obj = { height: dockHeight.get(), opacity: getDockRowOpacity(diff, value, dockContentSwap.get()), pointerEvents: str, paddingLeft: tmp4, paddingRight: tmp4 };
        getDockRowOpacity = VoicePanelSheetMorph.getDockRowOpacity;
        VoicePanelSheetMorph;
        value = isDockExpanding.get();
        str = "none";
        const obj2 = VoicePanelSheetMorph;
        if (obj2.isDockRowTouchable(diff)) {
          str = "auto";
        }
        return obj;
      }
    }
    return { opacity: 0, pointerEvents: "none" };
  }
  const obj12 = bottom(dockContentSwap[10]);
  de.__closure = { dockMinimizeProgress, wrapperDimensions, isDockConnected, getDockInset: mode, dockPressProgress, dockHeight, getDockRowOpacity: bottom(dockContentSwap[11]).getDockRowOpacity, isDockExpanding, dockContentSwap, isDockRowTouchable: bottom(dockContentSwap[11]).isDockRowTouchable };
  de.__workletHash = 16405508542934;
  de.__initData = __initData6;
  ({ dockMinimizeProgress, wrapperDimensions, isDockConnected, getDockInset: mode, dockPressProgress, dockHeight, getDockRowOpacity: bottom(dockContentSwap[11]).getDockRowOpacity, isDockExpanding, dockContentSwap, isDockRowTouchable: bottom(dockContentSwap[11]).isDockRowTouchable });
  const animatedStyle1 = obj12.useAnimatedStyle(de);
  const obj14 = { gesture: memo, children: sharedValue4(tmp19, obj15) };
  const GestureDetector = bottom(dockContentSwap[15]).GestureDetector;
  obj15 = { style: items5, children: items7 };
  items5 = [tmp.dock, animatedStyle1];
  const obj16 = { style: items6, accessibilityRole: "button", accessibilityLabel: intl.string(bottom(dockContentSwap[18]).t.oN8bqe), onPressIn: callback2, onPressOut: callback3, onPress: callback1 };
  items6 = [tmp.pressTarget, { bottom }];
  tmp19 = committedMode(dockContentSwap[17]);
  intl = bottom(dockContentSwap[18]).intl;
  items7 = [sharedValue3(dockPressProgress, obj16), , ];
  const obj17 = { style: items8, pointerEvents: "none" };
  items8 = [tmp.dragHandle, animatedStyle];
  items7[1] = sharedValue3(committedMode(dockContentSwap[17]), obj17);
  const obj18 = { style: tmp.row, pointerEvents: "box-none", children: items9 };
  items9 = [, ];
  const obj19 = { style: tmp.identity, pointerEvents: "none", children: sharedValue3(committedMode(dockContentSwap[19]), {}) };
  items9[0] = sharedValue3(dockPressed, obj19);
  items9[1] = sharedValue3(committedMode(dockContentSwap[20]), {});
  items7[2] = sharedValue4(dockPressed, obj18);
  return sharedValue3(GestureDetector, obj14);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDock.tsx");

export default memoResult;
