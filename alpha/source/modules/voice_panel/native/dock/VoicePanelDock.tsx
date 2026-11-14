// Module ID: 19180
// Function ID: 19181
// Name: VoicePanelDock
// Dependencies: [19, 17, 5155, 11985, 12009, 12010, 21, 5306, 575, 19181, 1655, 9148, 1113, 9150, 5554, 11984, 504, 1644, 1380, 13809, 1630, 12017, 1708, 6181, 11989, 5598, 5548, 19179, 19201, 19206, 2]

// Module 19180 (VoicePanelDock)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import timing_timing from "timing/timing" /* 5548 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import ContextMenu from "ContextMenu" /* 9148 */;
import ContextMenuConstants from "ContextMenuConstants" /* 9150 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11989 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 12017 */;
import useVoicePanelDockContextMenuItemsDefault from "useVoicePanelDockContextMenuItems" /* 19181 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 12009 */;
import GestureConstants from "GestureConstants" /* 12010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _Math3, absolute, bound, failResult, first, max, maxResult, num, result2, result3, set, set2, set2Result, tmp16, tmp17, tmp18, tmp21, tmp4;

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
let closure_20;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let size;
let unpackModuleId;
function DockPressTarget(arg0) {
  let channel;
  let closure_4;
  let onExpand;
  let onPress;
  let onPressIn;
  let onPressOut;
  let require;
  ({ style: require, onPressIn: importDefault, onPressOut: dependencyMap, onPress: react, onContextMenuOpen: closure_4 } = arg0);
  ({ channel, onExpand } = arg0);
  const contextMenuAnchor = closure_21();
  const tmp = useVoicePanelDockContextMenuItemsDefault(channel, onExpand);
  let obj = _mod1655;
  const animatedRef = obj.useAnimatedRef();
  let obj2 = _mod1655;
  const animatedRef1 = obj2.useAnimatedRef();
  const obj3 = {
    items: tmp,
    triggerOnLongPress: true,
    disableGesture: true,
    buttonRef: animatedRef,
    returnRef: animatedRef1,
    children(onLongPress) {
      let accessibilityActions;
      let intl;
      let obj2;
      let onAccessibilityAction;
      let ref;
      onLongPress = onLongPress.onLongPress;
      let obj = {
        ref: animatedRef1,
        style: onLongPress,
        accessibilityRole: "button",
        accessibilityLabel: intl.string(require("intl").t.oN8bqe),
        accessibilityActions,
        onAccessibilityAction,
        onPressIn,
        onPressOut: dependencyMap,
        onPress,
        delayLongPress: require("ContextMenuConstants").CONTEXT_MENU_LONG_PRESS_DURATION_MS,
        onLongPress(arg0) {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
          closure_4();
          if (onLongPress != null) {
            tmp3(arg0);
          }
        },
        children: closure_1_19(contextMenuAnchor, obj2)
      };
      ({ ref, accessibilityActions, onAccessibilityAction } = onLongPress);
      intl = require("intl").intl;
      obj2 = { ref, style: contextMenuAnchor.contextMenuAnchor, pointerEvents: "none", collapsable: false };
      return closure_1_19(closure_4, obj);
    }
  };
  return closure_19(ContextMenu.ContextMenu, obj3);
}
function DockPressTargetGuard(arg0) {
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = closure_19(DockPressTarget, obj2);
  }
  return tmp2;
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ DOCK_EXPAND_GESTURE_CANCEL_DISTANCE: metroImportAll, DOCK_PULL_SNAP_DISTANCE: c9, DOCK_PULL_SNAP_GIVE: c10, DOCK_TAP_MAX_MOVEMENT: unpackModuleId, getDockInset: closure_12, DOCK_DRAG_HANDLE_TOP, DOCK_DRAG_HANDLE_WIDTH, DOCK_GAP, DOCK_PADDING_TOP, DOCK_ROW_HEIGHT } = VoicePanelDockConstants);
({ FLING_MIN_DISTANCE: map1, FLING_MIN_VELOCITY: closure_14, PULL_GESTURE_ACTIVATION_DISTANCE: closure_15, PULL_GESTURE_RESISTANCE: closure_16, PULL_GESTURE_SNAP_TIMING: closure_17, PULL_GESTURE_UNSNAP_TIMING: closure_18 } = GestureConstants);
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let obj = { dock: { position: "absolute", top: 0, left: 0, paddingTop: DOCK_PADDING_TOP, zIndex: 10 }, pressTarget: { position: "absolute", top: 0, left: 0, right: 0 }, contextMenuAnchor: { position: "absolute", top: 0, alignSelf: "center", width: 220, height: 0 }, dragHandle: size, row: { flexDirection: "row", alignItems: "center", gap: DOCK_GAP, height: DOCK_ROW_HEIGHT }, identity: { flexShrink: 1, flexGrow: 1, justifyContent: "center" } };
size = { position: "absolute", top: DOCK_DRAG_HANDLE_TOP, alignSelf: "center", width: DOCK_DRAG_HANDLE_WIDTH, height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_21 = createStyles.createStyles(obj);
let closure_24 = { code: "(function VoicePanelDockTsx1(){let[keyboardHeight,enabled,getWindowDimensionsWorklet,measure,rowRef]=this.__closure;const keyboardOverlap=-keyboardHeight.get();if(!enabled||keyboardOverlap<=0){return{opacity:1,pointerEvents:'box-none'};}const keyboardTop=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-keyboardOverlap;const row=measure(rowRef);const covered=row!=null&&row.height>0?(row.pageY+row.height-keyboardTop)/row.height:0;const opacity=1-Math.min(Math.max(covered,0),1);return{opacity:opacity,pointerEvents:opacity>0?'box-none':'none'};})" };
let closure_25 = { code: "(function VoicePanelDockTsx2(){let[dockMinimizeProgress,SHEET_MORPH_PHYSICS]=this.__closure;const progress=dockMinimizeProgress.get();const restThreshold=SHEET_MORPH_PHYSICS.restDisplacementThreshold;return progress<=restThreshold||progress>=1-restThreshold;})" };
let closure_26 = { code: "(function VoicePanelDockTsx3(settled,previous){let[mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]=this.__closure;if(settled&&previous!==settled&&mode.get()!==VoicePanelModes.DISMISSED){scheduleOnRN(updateSourceTrackingView);}})" };
let closure_27 = { code: "(function VoicePanelDockTsx4(){let[pullActive,pullDistance,pullSnapOffset]=this.__closure;return{active:pullActive.get(),distance:pullDistance.get(),snapOffset:pullSnapOffset.get()};})" };
let closure_28 = { code: "(function VoicePanelDockTsx5({active:active,distance:distance,snapOffset:snapOffset}){let[wrapperDimensions,dockHeight,pullSnapped,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_RESISTANCE,updateSharedValueIfChanged,wrapperOffset]=this.__closure;if(!active){return;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const pulled=(pullSnapped.get()?distance-DOCK_PULL_SNAP_GIVE:distance/PULL_GESTURE_RESISTANCE)+snapOffset;updateSharedValueIfChanged(wrapperOffset,{x:0,y:Math.min(Math.max(travel-pulled,0),travel)});})" };
let closure_29 = { code: "(function VoicePanelDockTsx6(event){let[dockTouched,touchOrigin,touchMovement,contextMenuOpened]=this.__closure;dockTouched.set(true);touchOrigin.set({x:event.absoluteX,y:event.absoluteY});touchMovement.set(0);contextMenuOpened.set(false);})" };
let closure_30 = { code: "(function VoicePanelDockTsx7(event,manager){let[contextMenuOpened,touchOrigin,touchMovement]=this.__closure;if(contextMenuOpened.get()){manager.fail();return;}const touch=event.changedTouches[0];if(touch==null){return;}const origin=touchOrigin.get();const moved=Math.max(Math.abs(touch.absoluteX-origin.x),Math.abs(touch.absoluteY-origin.y));if(moved>touchMovement.get()){touchMovement.set(moved);}})" };
let closure_31 = { code: "(function VoicePanelDockTsx8(event){let[scheduleOnRN,showControls,pullSnapped,pullSnapOffset,pullDistance,pullActive,updateSharedValueIfChanged,wrapperOffset,wrapperDimensions,dockHeight]=this.__closure;scheduleOnRN(showControls);pullSnapped.set(false);pullSnapOffset.set(0);pullDistance.set(Math.max(-event.translationY,0));pullActive.set(true);updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:Math.max(wrapperDimensions.get().drawerHeight-dockHeight.get(),0)});})" };
let closure_32 = { code: "(function VoicePanelDockTsx9(event){let[DOCK_PULL_SNAP_DISTANCE,pullSnapped,dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING,pullSnapOffset,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,PULL_GESTURE_UNSNAP_TIMING,pullDistance]=this.__closure;const distance=Math.max(-event.translationY,0);const snapped=distance>=DOCK_PULL_SNAP_DISTANCE;if(snapped!==pullSnapped.get()){pullSnapped.set(snapped);dockContentSwap.set(withTiming(snapped?1:0,DOCK_CONTENT_SWAP_TIMING));if(snapped){pullSnapOffset.set(withTiming(DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}else{pullSnapOffset.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}}pullDistance.set(distance);})" };
let closure_33 = { code: "(function VoicePanelDockTsx10(event){let[contextMenuOpened,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,pullSnapped,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,committedMode,VoicePanelModes,handleExpand]=this.__closure;if(contextMenuOpened.get()){return;}const distance=Math.max(-event.translationY,0);const flungOpen=event.velocityY<-FLING_MIN_VELOCITY&&distance>FLING_MIN_DISTANCE;const flungClosed=event.velocityY>FLING_MIN_VELOCITY;const opens=flungOpen||!flungClosed&&pullSnapped.get();if(opens){if(!pullSnapped.get()){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}committedMode.set(VoicePanelModes.PANEL);scheduleOnRN(handleExpand);}else if(pullSnapped.get()){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}})" };
let closure_34 = { code: "(function VoicePanelDockTsx11(){let[dockTouched,pullActive,pullSnapped,pullSnapOffset,updateSharedValueIfChanged,wrapperOffset]=this.__closure;dockTouched.set(false);pullActive.set(false);pullSnapped.set(false);pullSnapOffset.set(0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});})" };
let closure_35 = { code: "(function VoicePanelDockTsx12(){let[dockPressProgress]=this.__closure;return{opacity:dockPressProgress.get()};})" };
let closure_36 = { code: "(function VoicePanelDockTsx13(){let[dockMinimizeProgress,wrapperDimensions,isDockConnected,getDockInset,dockPressProgress,safeArea,dockRestWidth,isInSlot,dockHeight,getDockRowOpacity,isDockExpanding,dockContentSwap,isDockRowTouchable]=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions.get();if(!isDockConnected.get()||drawerHeight<=0){return{opacity:0,pointerEvents:'none'};}const inset=getDockInset(dockPressProgress.get());const{left:left,right:right}=safeArea.get();const restWidth=dockRestWidth.get();const isBesideChat=restWidth>0&&restWidth<drawerWidth;return{width:isInSlot?'100%':isBesideChat?restWidth:drawerWidth,height:dockHeight.get(),opacity:getDockRowOpacity(progress,isDockExpanding.get(),dockContentSwap.get()),pointerEvents:isDockRowTouchable(progress)?'auto':'none',paddingLeft:left+inset,paddingRight:(isBesideChat?0:right)+inset};})" };
const memoResult = react.memo(function VoicePanelDock(isInSlot) {
  let View;
  let dockMinimizeProgress;
  let dockPressProgress;
  let dockPressed;
  let dockRef;
  let dockRestWidth;
  let handleDockLayout;
  let isDockConnected;
  let isDockExpanding;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let measureGlowOffset;
  let mode;
  let obj3;
  let safeArea;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
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
  let tmp37;
  let tmp43;
  let tmp44;
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
  let tmp60;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp7;
  let tmp70;
  let tmp71;
  let tmp8;
  let tmp9;
  let wrapperDimensions;
  let flag = isInSlot.isInSlot;
  if (flag === undefined) {
    flag = false;
  }
  let committedMode;
  let dockContentSwap;
  let dockHeight;
  dockPressed = undefined;
  wrapperDimensions = undefined;
  let onExpand;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  let tmp = closure_21();
  let tmp2 = committedMode;
  let tmp3 = dockContentSwap;
  const bottom = committedMode(dockContentSwap[20])().bottom;
  let obj = dockHeight;
  const context = dockHeight.useContext(committedMode(dockContentSwap[15]));
  committedMode = context.committedMode;
  dockContentSwap = context.dockContentSwap;
  dockHeight = context.dockHeight;
  ({ dockPressProgress, dockPressed } = context);
  const dockTouched = context.dockTouched;
  const setMode = context.setMode;
  const showControls = context.showControls;
  ({ dockMinimizeProgress, wrapperDimensions } = context);
  const wrapperOffset = context.wrapperOffset;
  let tmp5 = bottom;
  ({ dockRestWidth, isDockConnected, isDockExpanding, safeArea, mode } = context);
  const tmp6 = bottom(dockContentSwap[10]);
  let items = [closure_25, dockMinimizeProgress, ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items[2] = bottom(dockContentSwap[21]).SHEET_MORPH_PHYSICS;
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items;
  class VoicePanelDockTsx2 {
    constructor() {
      const value = _undefined.get();
      const restDisplacementThreshold = _undefined2.restDisplacementThreshold;
      return value <= restDisplacementThreshold || value >= 1 - restDisplacementThreshold;
    }
  }
  let items1 = [tmp8, tmp9];
  VoicePanelDockTsx2.__closure = items1;
  VoicePanelDockTsx2.__workletHash = 9619339657143;
  VoicePanelDockTsx2.__initData = tmp7;
  let items2 = [closure_26, mode, showControls, tmp5(tmp3[22]).scheduleOnRN, tmp2(tmp3[23]).updateSourceTrackingView];
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class VoicePanelDockTsx3 {
    constructor(arg0, arg1) {
      const tmp = arg0 && arg1 !== arg0 && _undefined.get() !== _undefined2.DISMISSED;
      if (tmp) {
        _undefined3(c3);
      }
    }
  }
  let items3 = [tmp11, tmp12, tmp13, tmp14];
  VoicePanelDockTsx3.__closure = items3;
  VoicePanelDockTsx3.__workletHash = 10995549690413;
  VoicePanelDockTsx3.__initData = tmp10;
  const animatedReaction = useAnimatedReaction(VoicePanelDockTsx2, VoicePanelDockTsx3);
  let items4 = [setMode, showControls];
  onExpand = obj.useCallback(() => {
    showControls();
    setMode(VoicePanelModes.PANEL);
  }, items4);
  const tmp5Result = tmp5(tmp3[10]);
  sharedValue = tmp5Result.useSharedValue({ x: 0, y: 0 });
  const tmp5Result14 = tmp5(tmp3[10]);
  sharedValue1 = tmp5Result14.useSharedValue(0);
  const tmp5Result15 = tmp5(tmp3[10]);
  sharedValue2 = tmp5Result15.useSharedValue(false);
  let items5 = [onExpand, sharedValue1];
  const callback1 = obj.useCallback(() => {
    if (sharedValue1.get() <= unpackModuleId) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      callback();
    }
  }, items5);
  const tmp5Result16 = tmp5(tmp3[10]);
  sharedValue3 = tmp5Result16.useSharedValue(0);
  const tmp5Result17 = tmp5(tmp3[10]);
  sharedValue4 = tmp5Result17.useSharedValue(0);
  const tmp5Result18 = tmp5(tmp3[10]);
  sharedValue5 = tmp5Result18.useSharedValue(false);
  const tmp5Result19 = tmp5(tmp3[10]);
  sharedValue6 = tmp5Result19.useSharedValue(false);
  let items6 = [closure_27, sharedValue6, sharedValue3, sharedValue4];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp26, tmp27, tmp28, tmp29] = items6;
  const tmp5Result20 = tmp5(tmp3[10]);
  class VoicePanelDockTsx4 {
    constructor() {
      const obj = { active: _undefined.get(), distance: _undefined2.get(), snapOffset: _undefined3.get() };
      return obj;
    }
  }
  let items7 = [tmp27, tmp28, tmp29];
  VoicePanelDockTsx4.__closure = items7;
  VoicePanelDockTsx4.__workletHash = 2673447581813;
  VoicePanelDockTsx4.__initData = tmp26;
  let items8 = [closure_28, wrapperDimensions, dockHeight, sharedValue5, onExpand, sharedValue5, , ];
  const useAnimatedReaction2 = tmp5Result20.useAnimatedReaction;
  items8[6] = tmp2(tmp3[24]);
  items8[7] = wrapperOffset;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  let c5;
  let c6;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items8;
  class VoicePanelDockTsx5 {
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
  let items9 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  VoicePanelDockTsx5.__closure = items9;
  VoicePanelDockTsx5.__workletHash = 14506418013998;
  VoicePanelDockTsx5.__initData = tmp30;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelDockTsx4, VoicePanelDockTsx5);
  let items10 = [bottom, committedMode, sharedValue2, dockContentSwap, onExpand, showControls, sharedValue6, sharedValue3, sharedValue4, sharedValue5, sharedValue1, sharedValue, wrapperDimensions, wrapperOffset, dockHeight, dockTouched];
  let items11 = [dockPressed];
  const memo = obj.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
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
    let tmp35;
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
    let tmp60;
    let tmp62;
    let tmp63;
    let tmp64;
    let tmp65;
    let tmp66;
    let tmp67;
    let tmp68;
    let tmp7;
    let tmp8;
    let tmp9;
    const tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    let obj = { bottom: -bottom };
    const PanResult = Gesture.Pan();
    const hitSlopResult = PanResult.hitSlop(obj);
    const items = [-metroImportAll, metroImportAll];
    const activeOffsetYResult = hitSlopResult.activeOffsetY(-closure_15);
    const items1 = [closure_29, dockTouched, sharedValue, sharedValue1, ];
    items1[4] = sharedValue2;
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp7, tmp8, tmp9, tmp10, tmp11] = items1;
    const failOffsetYResult = activeOffsetYResult.failOffsetY(closure_15);
    const failOffsetXResult = failOffsetYResult.failOffsetX(items);
    class VoicePanelDockTsx6 {
      constructor(arg0) {
        result = closure_0.set(true);
        point = { x: arg0.absoluteX, y: arg0.absoluteY };
        result1 = closure_1.set(point);
        result2 = closure_2.set(0);
        result3 = closure_3.set(false);
        return;
      }
    }
    const items2 = [tmp8, tmp9, tmp10, tmp11];
    VoicePanelDockTsx6.__closure = items2;
    VoicePanelDockTsx6.__workletHash = 5711190749884;
    VoicePanelDockTsx6.__initData = tmp7;
    const tmp3 = dockTouched;
    let tmp5 = sharedValue1;
    const items3 = [closure_30, tmp6, sharedValue, tmp5];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp12, tmp13, tmp14, tmp15] = items3;
    const onBeginResult = failOffsetXResult.onBegin(VoicePanelDockTsx6);
    class VoicePanelDockTsx7 {
      constructor(arg0, arg1) {
        if (closure_0.get()) {
          tmp5 = arg1;
          failResult = arg1.fail();
        } else {
          tmp = arg0;
          first = arg0.changedTouches[0];
          tmp3 = null;
          if (null != first) {
            tmp7 = closure_1;
            point = closure_1.get();
            tmp8 = globalThis;
            _Math = Math;
            _Math2 = Math;
            max = Math.max;
            _Math3 = Math;
            absolute = Math.abs(first.absoluteX - point.x);
            maxResult = max(absolute, Math.abs(first.absoluteY - point.y));
            obj = closure_2;
            if (maxResult > closure_2.get()) {
              result = obj.set(maxResult);
            }
          }
        }
        return;
      }
    }
    const items4 = [tmp13, tmp14, tmp15];
    VoicePanelDockTsx7.__closure = items4;
    VoicePanelDockTsx7.__workletHash = 8011174432382;
    VoicePanelDockTsx7.__initData = tmp12;
    const items5 = [closure_31, , , , , , , , , , ];
    const onStart = onBeginResult.onTouchesMove(VoicePanelDockTsx7).onStart;
    onBeginResult.onTouchesMove(VoicePanelDockTsx7);
    items5[1] = _mod1708.scheduleOnRN;
    items5[2] = showControls;
    items5[3] = sharedValue5;
    items5[4] = sharedValue4;
    items5[5] = sharedValue3;
    items5[6] = sharedValue6;
    items5[7] = updateSharedValueIfChangedDefault;
    items5[8] = wrapperOffset;
    items5[9] = wrapperDimensions;
    items5[10] = dockHeight;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items5;
    const tmp19 = sharedValue3;
    const tmp20 = sharedValue6;
    class VoicePanelDockTsx8 {
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
    const items6 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
    VoicePanelDockTsx8.__closure = items6;
    VoicePanelDockTsx8.__workletHash = 8994781233490;
    VoicePanelDockTsx8.__initData = tmp23;
    const tmp22 = wrapperOffset;
    const items7 = [closure_32, React4, tmp17, dockContentSwap, , , , , , , , , , ];
    const onChange = onStart(VoicePanelDockTsx8).onChange;
    onStart(VoicePanelDockTsx8);
    items7[4] = timing_timing.withTiming;
    items7[5] = VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING;
    items7[6] = sharedValue4;
    items7[7] = authStore;
    items7[8] = closure_17;
    items7[9] = _mod1708.scheduleOnRN;
    items7[10] = HapticUtils.triggerHapticFeedback;
    items7[11] = HapticUtils.HapticFeedbackTypes;
    items7[12] = authStore4;
    items7[13] = tmp19;
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
    [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48] = items7;
    class VoicePanelDockTsx9 {
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
    const items8 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48];
    VoicePanelDockTsx9.__closure = items8;
    VoicePanelDockTsx9.__workletHash = 9262954094286;
    VoicePanelDockTsx9.__initData = tmp35;
    const items9 = [closure_33, tmp6, gesture, map1, tmp17, , , , , , ];
    const onEnd = onChange(VoicePanelDockTsx9).onEnd;
    onChange(VoicePanelDockTsx9);
    items9[5] = _mod1708.scheduleOnRN;
    items9[6] = HapticUtils.triggerHapticFeedback;
    items9[7] = HapticUtils.HapticFeedbackTypes;
    items9[8] = committedMode;
    items9[9] = VoicePanelModes;
    items9[10] = callback;
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
    [tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60] = items9;
    class VoicePanelDockTsx10 {
      constructor(arg0) {
        if (!closure_0.get()) {
          tmp = arg0;
          tmp2 = globalThis;
          _Math = Math;
          num = 0;
          tmp5 = arg0.velocityY < -closure_1;
          tmp4 = closure_1;
          if (tmp5) {
            tmp6 = closure_2;
            tmp5 = tmp3 > closure_2;
          }
          if (tmp5) {
            tmp14 = closure_3;
            if (!closure_3.get()) {
              tmp15 = closure_4;
              tmp16 = closure_5;
              tmp17 = closure_6;
              tmp18 = closure_4(closure_5, closure_6.IMPACT_MEDIUM);
            }
            tmp19 = closure_7;
            tmp20 = closure_8;
            result = closure_7.set(closure_8.PANEL);
            tmp22 = closure_4;
            tmp23 = closure_9;
            tmp24 = closure_4(closure_9);
          } else {
            if (!tmp7) {
              tmp8 = closure_3;
            }
            tmp9 = closure_3;
            if (closure_3.get()) {
              tmp10 = closure_4;
              tmp11 = closure_5;
              tmp12 = closure_6;
              tmp13 = closure_4(closure_5, closure_6.SOFT);
            }
          }
        }
        return;
      }
    }
    const items10 = [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60];
    VoicePanelDockTsx10.__closure = items10;
    VoicePanelDockTsx10.__workletHash = 6770255881329;
    VoicePanelDockTsx10.__initData = tmp50;
    const items11 = [closure_34, tmp3, tmp20, tmp17, tmp18, , ];
    const onFinalize = onEnd(VoicePanelDockTsx10).onFinalize;
    onEnd(VoicePanelDockTsx10);
    items11[5] = updateSharedValueIfChangedDefault;
    items11[6] = tmp22;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68] = items11;
    class VoicePanelDockTsx11 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        result2 = closure_2.set(false);
        result3 = closure_3.set(0);
        tmp5 = closure_4(closure_5, { gestureActive: false, x: 0, y: 0 });
        return;
      }
    }
    const items12 = [tmp63, tmp64, tmp65, tmp66, tmp67, tmp68];
    VoicePanelDockTsx11.__closure = items12;
    VoicePanelDockTsx11.__workletHash = 10943013957799;
    VoicePanelDockTsx11.__initData = tmp62;
    return onFinalize(VoicePanelDockTsx11);
  }, items10);
  let items12 = [dockPressed];
  const callback2 = obj.useCallback(() => {
    const result = dockPressed.set(true);
  }, items11);
  const items13 = [sharedValue2, dockPressed];
  const callback3 = obj.useCallback(() => {
    const result = dockPressed.set(false);
  }, items12);
  const callback4 = obj.useCallback(() => {
    const result = sharedValue2.set(true);
    const result1 = dockPressed.set(false);
  }, items13);
  const items14 = [closure_35, dockPressProgress];
  c0 = undefined;
  [tmp43, tmp44] = items14;
  const tmp5Result21 = tmp5(tmp3[10]);
  class VoicePanelDockTsx12 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items15 = [tmp44];
  VoicePanelDockTsx12.__closure = items15;
  VoicePanelDockTsx12.__workletHash = 16776422543157;
  VoicePanelDockTsx12.__initData = tmp43;
  const animatedStyle = tmp5Result21.useAnimatedStyle(VoicePanelDockTsx12);
  const items16 = [closure_36, dockMinimizeProgress, wrapperDimensions, isDockConnected, sharedValue1, dockPressProgress, safeArea, dockRestWidth, flag, dockHeight, , , , ];
  const useAnimatedStyle = tmp5(tmp3[10]).useAnimatedStyle;
  tmp5(tmp3[10]);
  items16[10] = tmp5(tmp3[21]).getDockRowOpacity;
  items16[11] = isDockExpanding;
  items16[12] = dockContentSwap;
  items16[13] = tmp5(tmp3[21]).isDockRowTouchable;
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
  let c10;
  let c11;
  let c12;
  [tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60] = items16;
  class VoicePanelDockTsx13 {
    constructor() {
      let left;
      let num2;
      let right;
      let str2;
      let value6;
      const diff = 1 - _undefined.get();
      const value = _undefined2.get();
      let drawerWidth = value.drawerWidth;
      const drawerHeight = value.drawerHeight;
      if (_undefined3.get()) {
        if (drawerHeight > 0) {
          const tmp13 = _undefined4(_undefined5.get());
          const value4 = _undefined6.get();
          ({ left, right } = value4);
          const value5 = _undefined7.get();
          let str = "100%";
          if (!c7) {
            if (value5 > 0 && value5 < drawerWidth) {
              drawerWidth = value5;
            }
            str = drawerWidth;
          }
          size = { width: str, height: _undefined8.get(), opacity: _undefined9(diff, value6, _undefined11.get()), pointerEvents: str2, paddingLeft: left + tmp13, paddingRight: num2 + tmp13 };
          value6 = _undefined10.get();
          str2 = "none";
          if (_undefined12(diff)) {
            str2 = "auto";
          }
          num2 = 0;
          if (!(value5 > 0 && value5 < drawerWidth)) {
            num2 = right;
          }
          return size;
        }
      }
      return { opacity: 0, pointerEvents: "none" };
    }
  }
  const items17 = [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60];
  VoicePanelDockTsx13.__closure = items17;
  VoicePanelDockTsx13.__workletHash = 5034155994972;
  VoicePanelDockTsx13.__initData = tmp47;
  const animatedStyle1 = useAnimatedStyle(VoicePanelDockTsx13);
  const tmp62 = tmp2(tmp3[27])();
  ({ dockRef, handleDockLayout, measureGlowOffset } = tmp62);
  const tmp5Result23 = tmp5(tmp3[10]);
  const animatedRef = tmp5Result23.useAnimatedRef();
  const tmp5Result24 = tmp5(tmp3[17]);
  const height = tmp5Result24.useReanimatedKeyboardAnimation().height;
  const tmp5Result25 = tmp5(tmp3[18]);
  const items18 = [closure_24, height, tmp5Result25.isIOS(), , , ];
  const isIOSResult = tmp5Result25.isIOS();
  const useAnimatedStyle2 = tmp5(tmp3[10]).useAnimatedStyle;
  tmp5(tmp3[10]);
  items18[3] = tmp5(tmp3[19]).getWindowDimensionsWorklet;
  items18[4] = tmp5(tmp3[10]).measure;
  items18[5] = animatedRef;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp66, tmp67, tmp68, tmp69, tmp70, tmp71] = items18;
  class VoicePanelDockTsx1 {
    constructor() {
      let str;
      const tmp = -_undefined.get();
      const tmp2 = c1;
      if (tmp2) {
        if (tmp > 0) {
          const diff = _undefined2({ ignoreKeyboard: true }).height - tmp;
          const tmp9 = _undefined3(c4);
          let num2 = 0;
          if (null != tmp9) {
            num2 = 0;
            if (tmp9.height > 0) {
              num2 = (tmp9.pageY + tmp9.height - diff) / tmp9.height;
            }
          }
          const _Math = Math;
          const _Math2 = Math;
          const diff1 = 1 - Math.min(Math.max(num2, 0), 1);
          const obj = { opacity: diff1, pointerEvents: str };
          str = "none";
          if (0 < diff1) {
            str = "box-none";
          }
          return obj;
        }
      }
      return { opacity: 1, pointerEvents: "box-none" };
    }
  }
  const items19 = [tmp67, tmp68, tmp69, tmp70, tmp71];
  VoicePanelDockTsx1.__closure = items19;
  VoicePanelDockTsx1.__workletHash = 17112345546547;
  VoicePanelDockTsx1.__initData = tmp66;
  const animatedStyle2 = useAnimatedStyle2(VoicePanelDockTsx1);
  const obj2 = { gesture: memo, children: closure_20(View, obj3) };
  const GestureDetector = tmp5(tmp3[25]).GestureDetector;
  obj3 = { ref: dockRef, style: items20, onLayout: handleDockLayout, children: items22 };
  items20 = [tmp.dock, animatedStyle1];
  const obj4 = { style: items21, onPressIn: callback2, onPressOut: callback3, onPress: callback1, onExpand, onContextMenuOpen: callback4 };
  items21 = [tmp.pressTarget, { bottom }];
  View = tmp2(tmp3[10]).View;
  items22 = [closure_19(DockPressTargetGuard, obj4), , ];
  const obj5 = { style: items23, pointerEvents: "none" };
  items23 = [tmp.dragHandle, animatedStyle];
  items22[1] = closure_19(tmp2(tmp3[10]).View, obj5);
  const obj6 = { ref: animatedRef, style: items24, children: items25 };
  items24 = [tmp.row, animatedStyle2];
  const obj7 = { style: tmp.identity, pointerEvents: "none", children: closure_19(tmp2(tmp3[28]), {}) };
  const View2 = tmp2(tmp3[10]).View;
  items25 = [closure_19(dockTouched, obj7), closure_19(tmp2(tmp3[29]), { measureGlowOffset })];
  items22[2] = closure_20(View2, obj6);
  return closure_19(GestureDetector, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDock.tsx");

export default memoResult;
