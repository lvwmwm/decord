// Module ID: 19471
// Function ID: 19472
// Name: VoicePanelDock
// Dependencies: [19, 17, 11410, 11428, 11429, 21, 5141, 575, 1627, 11409, 1652, 11436, 1705, 6008, 5384, 11414, 5428, 5378, 1113, 19472, 19474, 2]

// Module 19471 (VoicePanelDock)
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11410 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11414 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11428 */;
import GestureConstants from "GestureConstants" /* 11429 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let _Math3, absolute, bound, first, max, maxResult, num, result1, result2, result3, set, set2, set2Result, tmp16;

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
let tmp;
let unpackModuleId;
const _mod1705 = tmp(1705);
const timing_timing = tmp(5378);
const VoicePanelSheetMorph = tmp(11436);
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ DOCK_EXPAND_GESTURE_CANCEL_DISTANCE: metroImportDefault, DOCK_PULL_SNAP_DISTANCE: metroImportAll, DOCK_PULL_SNAP_GIVE: c9, DOCK_TAP_MAX_MOVEMENT: c10, getDockInset: unpackModuleId, DOCK_DRAG_HANDLE_TOP, DOCK_DRAG_HANDLE_WIDTH, DOCK_GAP, DOCK_PADDING_TOP, DOCK_ROW_HEIGHT } = VoicePanelDockConstants);
({ FLING_MIN_DISTANCE: closure_12, FLING_MIN_VELOCITY: map1, PULL_GESTURE_ACTIVATION_DISTANCE: closure_14, PULL_GESTURE_RESISTANCE: closure_15, PULL_GESTURE_SNAP_TIMING: closure_16, PULL_GESTURE_UNSNAP_TIMING: closure_17 } = GestureConstants);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let obj = { dock: { position: "absolute", top: 0, left: 0, right: 0, paddingTop: DOCK_PADDING_TOP, zIndex: 10 }, pressTarget: { position: "absolute", top: 0, left: 0, right: 0 }, dragHandle: size, row: { flexDirection: "row", alignItems: "center", gap: DOCK_GAP, height: DOCK_ROW_HEIGHT }, identity: { flexShrink: 1, flexGrow: 1, justifyContent: "center" } };
size = { position: "absolute", top: DOCK_DRAG_HANDLE_TOP, alignSelf: "center", width: DOCK_DRAG_HANDLE_WIDTH, height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_20 = createStyles.createStyles(obj);
let closure_21 = { code: "(function VoicePanelDockTsx1(){let[dockMinimizeProgress,SHEET_MORPH_PHYSICS]=this.__closure;const progress=dockMinimizeProgress.get();const restThreshold=SHEET_MORPH_PHYSICS.restDisplacementThreshold;return progress<=restThreshold||progress>=1-restThreshold;})" };
let closure_22 = { code: "(function VoicePanelDockTsx2(settled,previous){let[mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]=this.__closure;if(settled&&previous!==settled&&mode.get()!==VoicePanelModes.DISMISSED){scheduleOnRN(updateSourceTrackingView);}})" };
let closure_23 = { code: "(function VoicePanelDockTsx3(){let[pullActive,pullDistance,pullSnapOffset]=this.__closure;return{active:pullActive.get(),distance:pullDistance.get(),snapOffset:pullSnapOffset.get()};})" };
let closure_24 = { code: "(function VoicePanelDockTsx4({active:active,distance:distance,snapOffset:snapOffset}){let[wrapperDimensions,dockHeight,pullSnapped,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_RESISTANCE,updateSharedValueIfChanged,wrapperOffset]=this.__closure;if(!active){return;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const pulled=(pullSnapped.get()?distance-DOCK_PULL_SNAP_GIVE:distance/PULL_GESTURE_RESISTANCE)+snapOffset;updateSharedValueIfChanged(wrapperOffset,{x:0,y:Math.min(Math.max(travel-pulled,0),travel)});})" };
let closure_25 = { code: "(function VoicePanelDockTsx5(event){let[touchOrigin,touchMovement]=this.__closure;touchOrigin.set({x:event.absoluteX,y:event.absoluteY});touchMovement.set(0);})" };
let closure_26 = { code: "(function VoicePanelDockTsx6(event){let[touchOrigin,touchMovement]=this.__closure;const touch=event.changedTouches[0];if(touch==null){return;}const origin=touchOrigin.get();const moved=Math.max(Math.abs(touch.absoluteX-origin.x),Math.abs(touch.absoluteY-origin.y));if(moved>touchMovement.get()){touchMovement.set(moved);}})" };
let closure_27 = { code: "(function VoicePanelDockTsx7(event){let[scheduleOnRN,showControls,pullSnapped,pullSnapOffset,pullDistance,pullActive,updateSharedValueIfChanged,wrapperOffset,wrapperDimensions,dockHeight]=this.__closure;scheduleOnRN(showControls);pullSnapped.set(false);pullSnapOffset.set(0);pullDistance.set(Math.max(-event.translationY,0));pullActive.set(true);updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:Math.max(wrapperDimensions.get().drawerHeight-dockHeight.get(),0)});})" };
let closure_28 = { code: "(function VoicePanelDockTsx8(event){let[DOCK_PULL_SNAP_DISTANCE,pullSnapped,dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING,pullSnapOffset,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,PULL_GESTURE_UNSNAP_TIMING,pullDistance]=this.__closure;const distance=Math.max(-event.translationY,0);const snapped=distance>=DOCK_PULL_SNAP_DISTANCE;if(snapped!==pullSnapped.get()){pullSnapped.set(snapped);dockContentSwap.set(withTiming(snapped?1:0,DOCK_CONTENT_SWAP_TIMING));if(snapped){pullSnapOffset.set(withTiming(DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}else{pullSnapOffset.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}}pullDistance.set(distance);})" };
let closure_29 = { code: "(function VoicePanelDockTsx9(event){let[FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,pullSnapped,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,committedMode,VoicePanelModes,handleExpand]=this.__closure;const distance=Math.max(-event.translationY,0);const flungOpen=event.velocityY<-FLING_MIN_VELOCITY&&distance>FLING_MIN_DISTANCE;const flungClosed=event.velocityY>FLING_MIN_VELOCITY;const opens=flungOpen||!flungClosed&&pullSnapped.get();if(opens){if(!pullSnapped.get()){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}committedMode.set(VoicePanelModes.PANEL);scheduleOnRN(handleExpand);}else if(pullSnapped.get()){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}})" };
let closure_30 = { code: "(function VoicePanelDockTsx10(){let[pullActive,pullSnapped,pullSnapOffset,updateSharedValueIfChanged,wrapperOffset]=this.__closure;pullActive.set(false);pullSnapped.set(false);pullSnapOffset.set(0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});})" };
let closure_31 = { code: "(function VoicePanelDockTsx11(){let[dockPressProgress]=this.__closure;return{opacity:dockPressProgress.get()};})" };
let closure_32 = { code: "(function VoicePanelDockTsx12(){let[dockMinimizeProgress,wrapperDimensions,isDockConnected,getDockInset,dockPressProgress,dockHeight,getDockRowOpacity,isDockExpanding,dockContentSwap,isDockRowTouchable]=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();if(!isDockConnected.get()||drawerHeight<=0){return{opacity:0,pointerEvents:'none'};}const inset=getDockInset(dockPressProgress.get());return{height:dockHeight.get(),opacity:getDockRowOpacity(progress,isDockExpanding.get(),dockContentSwap.get()),pointerEvents:isDockRowTouchable(progress)?'auto':'none',paddingLeft:inset,paddingRight:inset};})" };
const memoResult = react.memo(function VoicePanelDock() {
  let View;
  let committedMode;
  let dockContentSwap;
  let dockHeight;
  let dockMinimizeProgress;
  let dockPressProgress;
  let dockPressed;
  let intl;
  let isDockConnected;
  let isDockExpanding;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let mode;
  let obj3;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp25;
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
  let tmp36;
  let tmp41;
  let tmp42;
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
  let tmp7;
  let tmp8;
  let tmp9;
  let wrapperDimensions;
  let tmp = closure_20();
  let tmp2 = committedMode;
  let tmp3 = dockContentSwap;
  const bottom = committedMode(dockContentSwap[8])().bottom;
  let obj = dockHeight;
  const context = dockHeight.useContext(committedMode(dockContentSwap[9]));
  committedMode = context.committedMode;
  dockContentSwap = context.dockContentSwap;
  dockHeight = context.dockHeight;
  ({ dockPressProgress, dockPressed } = context);
  const setMode = context.setMode;
  const showControls = context.showControls;
  ({ dockMinimizeProgress, wrapperDimensions } = context);
  const wrapperOffset = context.wrapperOffset;
  const tmp5 = bottom;
  ({ isDockConnected, isDockExpanding, mode } = context);
  const tmp6 = bottom(dockContentSwap[10]);
  let items = [closure_21, dockMinimizeProgress, ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items[2] = bottom(dockContentSwap[11]).SHEET_MORPH_PHYSICS;
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items;
  class VoicePanelDockTsx1 {
    constructor() {
      const value = _undefined.get();
      const restDisplacementThreshold = _undefined2.restDisplacementThreshold;
      return value <= restDisplacementThreshold || value >= 1 - restDisplacementThreshold;
    }
  }
  let items1 = [tmp8, tmp9];
  VoicePanelDockTsx1.__closure = items1;
  VoicePanelDockTsx1.__workletHash = 6869498202708;
  VoicePanelDockTsx1.__initData = tmp7;
  let items2 = [closure_22, mode, showControls, tmp5(tmp3[12]).scheduleOnRN, tmp2(tmp3[13]).updateSourceTrackingView];
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class VoicePanelDockTsx2 {
    constructor(arg0, arg1) {
      const tmp = arg0 && arg1 !== arg0 && _undefined.get() !== _undefined2.DISMISSED;
      if (tmp) {
        _undefined3(c3);
      }
    }
  }
  let items3 = [tmp11, tmp12, tmp13, tmp14];
  VoicePanelDockTsx2.__closure = items3;
  VoicePanelDockTsx2.__workletHash = 10170503269900;
  VoicePanelDockTsx2.__initData = tmp10;
  const animatedReaction = useAnimatedReaction(VoicePanelDockTsx1, VoicePanelDockTsx2);
  let items4 = [setMode, showControls];
  const callback = obj.useCallback(() => {
    showControls();
    setMode(VoicePanelModes.PANEL);
  }, items4);
  const tmp5Result = tmp5(tmp3[10]);
  const sharedValue = tmp5Result.useSharedValue({ x: 0, y: 0 });
  const tmp5Result9 = tmp5(tmp3[10]);
  const sharedValue1 = tmp5Result9.useSharedValue(0);
  let items5 = [callback, sharedValue1];
  const callback1 = obj.useCallback(() => {
    if (sharedValue1.get() <= authStore) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      callback();
    }
  }, items5);
  const tmp5Result10 = tmp5(tmp3[10]);
  const sharedValue2 = tmp5Result10.useSharedValue(0);
  const tmp5Result11 = tmp5(tmp3[10]);
  const sharedValue3 = tmp5Result11.useSharedValue(0);
  const tmp5Result12 = tmp5(tmp3[10]);
  const sharedValue4 = tmp5Result12.useSharedValue(false);
  const tmp5Result13 = tmp5(tmp3[10]);
  const sharedValue5 = tmp5Result13.useSharedValue(false);
  let items6 = [closure_23, sharedValue5, sharedValue2, sharedValue3];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp25, tmp26, tmp27, tmp28] = items6;
  const tmp5Result14 = tmp5(tmp3[10]);
  class VoicePanelDockTsx3 {
    constructor() {
      const obj = { active: _undefined.get(), distance: _undefined2.get(), snapOffset: _undefined3.get() };
      return obj;
    }
  }
  let items7 = [tmp26, tmp27, tmp28];
  VoicePanelDockTsx3.__closure = items7;
  VoicePanelDockTsx3.__workletHash = 16958594466066;
  VoicePanelDockTsx3.__initData = tmp25;
  let items8 = [closure_24, wrapperDimensions, dockHeight, sharedValue4, callback, sharedValue5, , ];
  const useAnimatedReaction2 = tmp5Result14.useAnimatedReaction;
  items8[6] = tmp2(tmp3[15]);
  items8[7] = wrapperOffset;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  let c5;
  let c6;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items8;
  class VoicePanelDockTsx4 {
    constructor(distance) {
      distance = distance.distance;
      if (distance.active) {
        let diff1;
        const diff = _undefined.get().drawerHeight - _undefined2.get();
        if (_undefined3.get()) {
          diff1 = distance - c3;
        } else {
          diff1 = distance / c4;
        }
        const point = { x: 0, y: Math.min(Math.max(diff - (diff1 + tmp), 0), diff) };
        const _Math = Math;
        const _Math2 = Math;
        _undefined4(c6, point);
      }
    }
  }
  let items9 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  VoicePanelDockTsx4.__closure = items9;
  VoicePanelDockTsx4.__workletHash = 9971386700367;
  VoicePanelDockTsx4.__initData = tmp29;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelDockTsx3, VoicePanelDockTsx4);
  let items10 = [bottom, committedMode, dockContentSwap, callback, showControls, sharedValue5, sharedValue2, sharedValue3, sharedValue4, sharedValue1, sharedValue, wrapperDimensions, wrapperOffset, dockHeight];
  let items11 = [dockPressed];
  const memo = obj.useMemo(() => {
    let tmp10;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp40;
    let tmp41;
    let tmp42;
    let tmp43;
    let tmp45;
    let tmp46;
    let tmp47;
    let tmp48;
    let tmp49;
    let tmp5;
    let tmp50;
    let tmp51;
    let tmp52;
    let tmp53;
    let tmp54;
    let tmp56;
    let tmp57;
    let tmp58;
    let tmp59;
    let tmp6;
    let tmp60;
    let tmp61;
    let tmp7;
    let tmp8;
    let tmp9;
    const tmp = require;
    let tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    let obj = { bottom: -bottom };
    const PanResult = Gesture.Pan();
    const hitSlopResult = PanResult.hitSlop(obj);
    const items = [-metroImportDefault, metroImportDefault];
    const activeOffsetYResult = hitSlopResult.activeOffsetY(-authStore3);
    const items1 = [closure_25, sharedValue, sharedValue1];
    let c0;
    let c1;
    [tmp5, tmp6, tmp7] = items1;
    const failOffsetYResult = activeOffsetYResult.failOffsetY(authStore3);
    const failOffsetXResult = failOffsetYResult.failOffsetX(items);
    class VoicePanelDockTsx5 {
      constructor(arg0) {
        point = { x: arg0.absoluteX, y: arg0.absoluteY };
        result = closure_0.set(point);
        result1 = closure_1.set(0);
        return;
      }
    }
    const items2 = [tmp6, tmp7];
    VoicePanelDockTsx5.__closure = items2;
    VoicePanelDockTsx5.__workletHash = 14355401853492;
    VoicePanelDockTsx5.__initData = tmp5;
    const items3 = [closure_26, sharedValue, sharedValue1];
    c0 = undefined;
    c1 = undefined;
    [tmp8, tmp9, tmp10] = items3;
    const onBeginResult = failOffsetXResult.onBegin(VoicePanelDockTsx5);
    class VoicePanelDockTsx6 {
      constructor(arg0) {
        first = arg0.changedTouches[0];
        if (null != first) {
          tmp3 = closure_0;
          point = closure_0.get();
          tmp4 = globalThis;
          _Math = Math;
          _Math2 = Math;
          max = Math.max;
          _Math3 = Math;
          absolute = Math.abs(first.absoluteX - point.x);
          maxResult = max(absolute, Math.abs(first.absoluteY - point.y));
          obj = closure_1;
          if (maxResult > closure_1.get()) {
            result = obj.set(maxResult);
          }
        }
        return;
      }
    }
    const items4 = [tmp9, tmp10];
    VoicePanelDockTsx6.__closure = items4;
    VoicePanelDockTsx6.__workletHash = 4167278660905;
    VoicePanelDockTsx6.__initData = tmp8;
    const items5 = [closure_27, , , , , , , , , , ];
    const onStart = onBeginResult.onTouchesMove(VoicePanelDockTsx6).onStart;
    onBeginResult.onTouchesMove(VoicePanelDockTsx6);
    items5[1] = _mod1705.scheduleOnRN;
    items5[2] = showControls;
    items5[3] = sharedValue4;
    items5[4] = sharedValue3;
    items5[5] = sharedValue2;
    items5[6] = sharedValue5;
    items5[7] = updateSharedValueIfChangedDefault;
    items5[8] = wrapperOffset;
    items5[9] = wrapperDimensions;
    items5[10] = dockHeight;
    c0 = undefined;
    c1 = undefined;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items5;
    const tmp14 = sharedValue2;
    const tmp15 = sharedValue5;
    class VoicePanelDockTsx7 {
      constructor(arg0) {
        tmp = closure_0(closure_1);
        result = closure_2.set(false);
        result1 = closure_3.set(0);
        result2 = closure_4.set(Math.max(-arg0.translationY, 0));
        result3 = closure_5.set(true);
        point = { gestureActive: true, x: 0, y: null };
        max = Math.max;
        point.y = max(closure_8.get().drawerHeight - closure_9.get(), 0);
        tmp6 = closure_6(closure_7, point);
        return;
      }
    }
    const items6 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
    VoicePanelDockTsx7.__closure = items6;
    VoicePanelDockTsx7.__workletHash = 14444713169085;
    VoicePanelDockTsx7.__initData = tmp18;
    const items7 = [closure_28, metroImportAll, tmp12, dockContentSwap, , , , , , , , , , ];
    const onChange = onStart(VoicePanelDockTsx7).onChange;
    onStart(VoicePanelDockTsx7);
    items7[4] = timing_timing.withTiming;
    items7[5] = VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING;
    items7[6] = sharedValue3;
    items7[7] = React4;
    items7[8] = authStore4;
    items7[9] = _mod1705.scheduleOnRN;
    items7[10] = HapticUtils.triggerHapticFeedback;
    items7[11] = HapticUtils.HapticFeedbackTypes;
    items7[12] = closure_17;
    items7[13] = tmp14;
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
    [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items7;
    const tmp17 = wrapperOffset;
    class VoicePanelDockTsx8 {
      constructor(arg0) {
        bound = Math.max(-arg0.translationY, 0);
        tmp2 = bound >= closure_0;
        obj = closure_1;
        if (tmp2 !== closure_1.get()) {
          result = obj.set(tmp2);
          tmp22 = closure_3;
          num = 0;
          tmp21 = closure_2;
          set2 = closure_2.set;
          if (tmp2) {
            num = 1;
          }
          tmp3 = closure_4;
          set2Result = set2(tmp22(num, closure_4));
          tmp5 = closure_5;
          set = closure_5.set;
          if (tmp2) {
            tmp12 = closure_6;
            tmp13 = closure_7;
            result1 = set(tmp22(closure_6, closure_7));
            tmp15 = closure_8;
            tmp16 = closure_9;
            tmp17 = closure_10;
            tmp18 = closure_8(closure_9, closure_10.IMPACT_MEDIUM);
          } else {
            tmp6 = closure_11;
            result2 = set(tmp22(0, closure_11));
            tmp8 = closure_8;
            tmp9 = closure_9;
            tmp10 = closure_10;
            tmp11 = closure_8(closure_9, closure_10.SOFT);
          }
        }
        result3 = closure_12.set(bound);
        return;
      }
    }
    const items8 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
    VoicePanelDockTsx8.__closure = items8;
    VoicePanelDockTsx8.__workletHash = 7181275704047;
    VoicePanelDockTsx8.__initData = tmp30;
    const items9 = [closure_29, map1, authStore2, tmp12, , , , , , ];
    const onEnd = onChange(VoicePanelDockTsx8).onEnd;
    onChange(VoicePanelDockTsx8);
    items9[4] = _mod1705.scheduleOnRN;
    items9[5] = HapticUtils.triggerHapticFeedback;
    items9[6] = HapticUtils.HapticFeedbackTypes;
    items9[7] = committedMode;
    items9[8] = VoicePanelModes;
    items9[9] = callback;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54] = items9;
    class VoicePanelDockTsx9 {
      constructor(arg0) {
        tmp2 = arg0.velocityY < -closure_0;
        if (tmp2) {
          tmp3 = closure_1;
          tmp2 = tmp > closure_1;
        }
        if (tmp2) {
          tmp11 = closure_2;
          if (!closure_2.get()) {
            tmp12 = closure_3;
            tmp13 = closure_4;
            tmp14 = closure_5;
            tmp15 = closure_3(closure_4, closure_5.IMPACT_MEDIUM);
          }
          tmp16 = closure_6;
          tmp17 = closure_7;
          result = closure_6.set(closure_7.PANEL);
          tmp19 = closure_3;
          tmp20 = closure_8;
          tmp21 = closure_3(closure_8);
        } else {
          if (!tmp4) {
            tmp5 = closure_2;
          }
          tmp6 = closure_2;
          if (closure_2.get()) {
            tmp7 = closure_3;
            tmp8 = closure_4;
            tmp9 = closure_5;
            tmp10 = closure_3(closure_4, closure_5.SOFT);
          }
        }
        return;
      }
    }
    const items10 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54];
    VoicePanelDockTsx9.__closure = items10;
    VoicePanelDockTsx9.__workletHash = 16022563199909;
    VoicePanelDockTsx9.__initData = tmp45;
    const items11 = [closure_30, tmp15, tmp12, tmp13, , ];
    const onFinalize = onEnd(VoicePanelDockTsx9).onFinalize;
    onEnd(VoicePanelDockTsx9);
    items11[4] = updateSharedValueIfChangedDefault;
    items11[5] = tmp17;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61] = items11;
    class VoicePanelDockTsx10 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        result2 = closure_2.set(0);
        tmp4 = closure_3(closure_4, { gestureActive: false, x: 0, y: 0 });
        return;
      }
    }
    const items12 = [tmp57, tmp58, tmp59, tmp60, tmp61];
    VoicePanelDockTsx10.__closure = items12;
    VoicePanelDockTsx10.__workletHash = 5513463782497;
    VoicePanelDockTsx10.__initData = tmp56;
    return onFinalize(VoicePanelDockTsx10);
  }, items10);
  let items12 = [dockPressed];
  const callback2 = obj.useCallback(() => {
    const result = dockPressed.set(true);
  }, items11);
  const callback3 = obj.useCallback(() => {
    const result = dockPressed.set(false);
  }, items12);
  const items13 = [closure_31, dockPressProgress];
  c0 = undefined;
  [tmp41, tmp42] = items13;
  const tmp5Result15 = tmp5(tmp3[10]);
  class VoicePanelDockTsx11 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items14 = [tmp42];
  VoicePanelDockTsx11.__closure = items14;
  VoicePanelDockTsx11.__workletHash = 8563034543670;
  VoicePanelDockTsx11.__initData = tmp41;
  const animatedStyle = tmp5Result15.useAnimatedStyle(VoicePanelDockTsx11);
  const items15 = [closure_32, dockMinimizeProgress, wrapperDimensions, isDockConnected, sharedValue1, dockPressProgress, dockHeight, , , , ];
  const useAnimatedStyle = tmp5(tmp3[10]).useAnimatedStyle;
  tmp5(tmp3[10]);
  items15[7] = tmp5(tmp3[11]).getDockRowOpacity;
  items15[8] = isDockExpanding;
  items15[9] = dockContentSwap;
  items15[10] = tmp5(tmp3[11]).isDockRowTouchable;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  let c7;
  let c8;
  let c9;
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55] = items15;
  class VoicePanelDockTsx12 {
    constructor() {
      let str;
      let value;
      const diff = 1 - _undefined.get();
      const drawerHeight = _undefined2.get().drawerHeight;
      if (_undefined3.get()) {
        if (drawerHeight > 0) {
          const tmp4 = _undefined4(_undefined5.get());
          const obj = { height: _undefined6.get(), opacity: _undefined7(diff, value, _undefined9.get()), pointerEvents: str, paddingLeft: tmp4, paddingRight: tmp4 };
          value = _undefined8.get();
          str = "none";
          if (_undefined10(diff)) {
            str = "auto";
          }
          return obj;
        }
      }
      return { opacity: 0, pointerEvents: "none" };
    }
  }
  const items16 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55];
  VoicePanelDockTsx12.__closure = items16;
  VoicePanelDockTsx12.__workletHash = 463857718991;
  VoicePanelDockTsx12.__initData = tmp45;
  const animatedStyle1 = useAnimatedStyle(VoicePanelDockTsx12);
  const obj2 = { gesture: memo, children: closure_19(View, obj3) };
  const GestureDetector = tmp5(tmp3[16]).GestureDetector;
  obj3 = { style: items17, children: items19 };
  items17 = [tmp.dock, animatedStyle1];
  const obj4 = { style: items18, accessibilityRole: "button", accessibilityLabel: intl.string(tmp5(tmp3[18]).t.oN8bqe), onPressIn: callback2, onPressOut: callback3, onPress: callback1 };
  items18 = [tmp.pressTarget, { bottom }];
  View = tmp2(tmp3[10]).View;
  intl = tmp5(tmp3[18]).intl;
  items19 = [closure_18(dockPressed, obj4), , ];
  const obj5 = { style: items20, pointerEvents: "none" };
  items20 = [tmp.dragHandle, animatedStyle];
  items19[1] = closure_18(tmp2(tmp3[10]).View, obj5);
  const obj6 = { style: tmp.row, pointerEvents: "box-none", children: items21 };
  items21 = [, ];
  const obj7 = { style: tmp.identity, pointerEvents: "none", children: closure_18(tmp2(tmp3[19]), {}) };
  items21[0] = closure_18(setMode, obj7);
  items21[1] = closure_18(tmp2(tmp3[20]), {});
  items19[2] = closure_19(setMode, obj6);
  return closure_18(GestureDetector, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDock.tsx");

export default memoResult;
