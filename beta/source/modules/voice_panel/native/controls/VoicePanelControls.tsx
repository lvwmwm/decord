// Module ID: 19734
// Function ID: 19735
// Name: VoicePanelControls
// Dependencies: [32, 19, 17, 6931, 11395, 11398, 11393, 1072, 21, 5170, 575, 1624, 19735, 9105, 11394, 1652, 19615, 5756, 5452, 1705, 19624, 11401, 14094, 5408, 5422, 13060, 10242, 19736, 19575, 19737, 5231, 19741, 19743, 7055, 19746, 5793, 19560, 19769, 19590, 1259, 19770, 19771, 1108, 1627, 1493, 12646, 11421, 19742, 12667, 19772, 19714, 19745, 19773, 2]

// Module 19734 (VoicePanelControls)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import _mod1652 from "module_1652" /* 1652 */;
import native from "native" /* 5231 */;
import spring_spring from "spring/spring" /* 5793 */;
import useRefValueDefault from "useRefValue" /* 7055 */;
import native2 from "native" /* 9105 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19575 */;
import useControlsLockDefault from "useControlsLock" /* 19615 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 19624 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 19735 */;
import useConsoleConnectingInfoDefault from "useConsoleConnectingInfo" /* 19737 */;
import VoicePanelFloatingCTAContainer from "VoicePanelFloatingCTAContainer" /* 19741 */;
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 19743 */;
import useControlsButtonsDefault from "useControlsButtons" /* 19746 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11398 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11393 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import size_mod from "module_2" /* 2 */;

let _Math2, absolute, activateResult, closure_0, controlsProps, diff, diff1, failResult, failResult1, flag, flag2, flag3, flag4, height2, merged3, num3, obj1, result1, result2, set, set2, set2Result, set3, set3Result, set4Result, str, str2, tmp18, value1, velocityY, width, width2;

let StyleSheet;
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
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
let rect1;
let tmp2;
let unpackModuleId;
const _modDef1652 = tmp2(1652);
let react = react_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
({ UI_SHOW_HIDE_PHYSICS: metroImportDefault, MODE_CHANGE_PHYSICS: metroImportAll, BORDER_RADIUS_PHYSICS: c9, PANEL_CONTROLS_HEIGHT_PHYSICS: c10, VoicePanelModes: unpackModuleId } = VoicePanelConstants);
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: map1 } = VoicePanelCardConstants);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } = VoicePanelControlsConstants);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = Constants);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { accessibilityWrapper: obj2, wrapper: rect, buttonsWrapper: rect1, actionSheetDragHandleWrapper: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 21 } };
obj2 = { zIndex: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
rect1 = { position: "absolute", left: 0, right: 0, zIndex: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
let closure_21 = createStyles(obj);
let c22 = 200;
let c23 = 200;
let num = 5;
if (MetaQuestUtils.isMetaQuest()) {
  num = 15;
}
let closure_25 = react.memo(function Handle(openTab) {
  let accessibilityLabel;
  let ariaHidden;
  let handlePress;
  openTab = openTab.openTab;
  const tmp = closure_21();
  const tmp2 = useDrawerToggleDefault(openTab);
  const obj = { style: tmp.actionSheetDragHandleWrapper, children: authStore5(native2.ActionSheetDragHandle, { onPress: handlePress, overlay: true, accessibilityLabel, "aria-hidden": ariaHidden }) };
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return authStore5(hasOwnProperty, obj);
});
let closure_26 = { code: "(function VoicePanelControlsTsx1(event){let[touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT]=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});})" };
let closure_27 = { code: "(function VoicePanelControlsTsx2(){let[scheduleOnRN,gestureLock]=this.__closure;scheduleOnRN(gestureLock.lock);})" };
let closure_28 = { code: "(function VoicePanelControlsTsx3(event,manager){let[State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,scheduleOnRN,openTab,VoicePanelTabAnalyticsSources,scrollLock]=this.__closure;if(event.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){scheduleOnRN(openTab,{tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}})" };
let closure_29 = { code: "(function VoicePanelControlsTsx4(event){let[gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth]=this.__closure;const change=event.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}})" };
let closure_30 = { code: "(function VoicePanelControlsTsx5(){let[scrollLock,isDragScrolling,gestureSpecs,scheduleOnRN,gestureLock]=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});scheduleOnRN(gestureLock.unlock);})" };
let closure_31 = { code: "(function VoicePanelControlsTsx6({velocityY:velocityY}){let[wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,scheduleOnRN,gestureLock]=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);scheduleOnRN(gestureLock.unlock,resultingControlMode);})" };
let closure_32 = { code: "(function VoicePanelControlsTsx7(){let[scrollLock,isDragScrolling,scheduleOnRN,gestureLock]=this.__closure;scrollLock.set(false);isDragScrolling.set(false);scheduleOnRN(gestureLock.unlock);})" };
let closure_33 = { code: "(function VoicePanelControlsTsx8(){let[wrapperSpecs]=this.__closure;return wrapperSpecs.get().drawerMode;})" };
let closure_34 = { code: "(function VoicePanelControlsTsx9(current,previous){let[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(current===previous)return;scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);})" };
let closure_35 = { code: "(function VoicePanelControlsTsx10(){let[connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea]=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};})" };
let closure_36 = { code: "(function VoicePanelControlsTsx11(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,scheduleOnRN,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth]=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:scheduleOnRN(setControlsMode,{mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}})" };
let closure_37 = react.memo(function FloatingBars(controlsSpecs) {
  let channelId;
  let wrapperSpecs;
  ({ channelId, wrapperSpecs } = controlsSpecs);
  controlsSpecs = controlsSpecs.controlsSpecs;
  const accessoryHeights = controlsSpecs.accessoryHeights;
  const gestureState = controlsSpecs.gestureState;
  const obj = VoicePanelFloatingCTAUtils;
  const shouldShowFloatingCTA = obj.useShouldShowFloatingCTA(channelId);
  const tmp4 = useControlsLockDefault();
  let closure_4 = tmp4;
  const tmp5 = useConsoleConnectingInfoDefault(channelId);
  const isConnectingToConsole = tmp5.isConnectingToConsole;
  const items = [wrapperSpecs, controlsSpecs, accessoryHeights, gestureState];
  const isConnectingOrConnectedToConsole = tmp5.isConnectingOrConnectedToConsole;
  const memo = react.useMemo(() => ({ wrapperSpecs, controlsSpecs, accessoryHeights, gestureState }), items);
  const items1 = [isConnectingToConsole, tmp4];
  const layoutEffect = react.useLayoutEffect(() => {
    if (isConnectingToConsole) {
      closure_4.lock();
    } else {
      closure_4.unlock();
    }
  }, items1);
  let tmp11;
  const TransitionItem = native.TransitionItem;
  const tmp8 = closure_20;
  const tmp9 = closure_19;
  if (shouldShowFloatingCTA) {
    tmp11 = memo;
  }
  const items2 = [, ];
  const obj2 = { item: tmp11, renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA };
  items2[0] = authStore5(TransitionItem, obj2);
  let tmp12;
  const TransitionItem2 = tmp(5231).TransitionItem;
  if (isConnectingOrConnectedToConsole) {
    tmp12 = memo;
  }
  const obj3 = { children: items2 };
  const obj4 = { item: tmp12, renderItem: VoicePanelConsoleStatus.renderVoicePanelConsoleStatus };
  items2[1] = authStore5(TransitionItem2, obj4);
  return tmp8(tmp9, obj3);
});
let closure_38 = { code: "(function VoicePanelControlsTsx12(){let[controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS]=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};})" };
let closure_39 = react.memo(function VoicePanelButtonsInner(sharedTab) {
  let View;
  let closure_129_0;
  let connected;
  let controlsSpecs;
  let items2;
  let obj3;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp9;
  let wrapperSpecs;
  ({ openTab: closure_129_0, wrapperSpecs } = sharedTab);
  let obj = react;
  sharedTab = sharedTab.sharedTab;
  const ref = react.useRef(true);
  const tmp4 = useRefValueDefault(ref);
  const tmp5 = closure_21();
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ controlsSpecs, connected } = context);
  const arr = useControlsButtonsDefault();
  let items = [closure_38, controlsSpecs, connected, sharedTab, wrapperSpecs, c22, authStore3, , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items[7] = spring_spring.withSpring;
  items[8] = metroImportAll;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  class VoicePanelControlsTsx12 {
    constructor() {
      let items;
      let num4;
      const pushToTalk = _undefined.get().pushToTalk && _undefined2.get();
      if ("settings" === _undefined3.get()) {
        let height;
        if (_undefined4.get().height >= c4) {
          height = c5;
        }
        num = 0;
        if ("settings" !== _undefined3.get()) {
          num = 0;
          if (_undefined4.get().height >= c4) {
            num = -obj.get().height;
          }
        }
        let num2 = 0;
        if (pushToTalk) {
          num2 = -4;
        }
        const obj3 = { top: num2, height: _undefined5(height, c7), opacity: _undefined5(num4, c7), transform: items };
        num4 = 1;
        if ("settings" !== _undefined3.get()) {
          num4 = 1;
          if (_undefined4.get().height >= c4) {
            num4 = 0;
          }
        }
        items = [{ translateY: _undefined5(num, c7) }, ];
        let num5 = 1;
        const obj4 = { translateY: _undefined5(num, c7) };
        if ("settings" !== _undefined3.get()) {
          num5 = 1;
          if (_undefined4.get().height >= c4) {
            num5 = 0.95;
          }
        }
        items[1] = { scale: _undefined5(num5, c7) };
        const obj5 = { scale: _undefined5(num5, c7) };
        return obj3;
      }
      height = obj.get().height;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  VoicePanelControlsTsx12.__closure = items1;
  VoicePanelControlsTsx12.__workletHash = 5526761748144;
  VoicePanelControlsTsx12.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(VoicePanelControlsTsx12);
  const effect = obj.useEffect(() => {
    ref.current = false;
  }, []);
  const obj2 = { skipEntering: tmp4, children: authStore5(View, obj3) };
  const LayoutAnimationConfig = _mod1652.LayoutAnimationConfig;
  obj3 = {
    style: items2,
    children: arr.map((props) => {
      const obj = { props, openTab, wrapperSpecs };
      return props.render(props.key, obj);
    })
  };
  items2 = [tmp5.buttonsWrapper, animatedStyle];
  View = _modDef1652.View;
  return authStore5(LayoutAnimationConfig, obj2);
});
let closure_40 = { code: "(function VoicePanelControlsTsx13(){let[wrapperSpecs,CALL_TILE_GUTTER,accessoryHeights]=this.__closure;return wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get();})" };
let closure_41 = { code: "(function VoicePanelControlsTsx14(){let[dockJoinMorphOrigin]=this.__closure;return dockJoinMorphOrigin.get()!=null;})" };
let closure_42 = { code: "(function VoicePanelControlsTsx15(morphing,previous){let[joinFrozenSpecs,wrapperSpecs]=this.__closure;if(morphing===previous)return;joinFrozenSpecs.set(morphing?{...wrapperSpecs.get()}:null);})" };
let closure_43 = { code: "(function VoicePanelControlsTsx16(){let[joinFrozenSpecs,borderRadius,roundToNearestPixel,withSpring,useReducedMotion,offscreenY,UI_SHOW_HIDE_PHYSICS,wrapperSpecs,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,isDockEnabled,gestureState,isDockExpanding,SHEET_MORPH_EXPANDING_PANEL_FADE,SHEET_MORPH_DOCKING_PANEL_FADE,dockContentSwap,getSheetMorphFadeProgress,dockMinimizeProgress]=this.__closure;const frozen=joinFrozenSpecs.get();if(frozen!=null){return{borderBottomRightRadius:borderRadius,borderBottomLeftRadius:borderRadius,height:frozen.height,width:frozen.width,marginLeft:roundToNearestPixel(frozen.width/2)*-1,opacity:1,transform:[{translateX:frozen.x},{translateY:withSpring(useReducedMotion.get()?frozen.y:offscreenY.get(),UI_SHOW_HIDE_PHYSICS)}]};}const shared={borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS)};if(!isDockEnabled){return{...shared,transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?offscreenY.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}const panelFade=isDockExpanding.get()?SHEET_MORPH_EXPANDING_PANEL_FADE:SHEET_MORPH_DOCKING_PANEL_FADE;return{...shared,opacity:withSpring((wrapperSpecs.get().hidden?0:1)*Math.max(dockContentSwap.get(),getSheetMorphFadeProgress(1-dockMinimizeProgress.get(),panelFade.start,panelFade.end)),MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?offscreenY.get():wrapperSpecs.get().y+dockMinimizeProgress.get()*offscreenY.get(),UI_SHOW_HIDE_PHYSICS)}]};})" };
let closure_44 = { code: "(function VoicePanelControlsTsx17(){let[controlsSpecs]=this.__closure;return controlsSpecs.get().mode;})" };
let closure_45 = { code: "(function VoicePanelControlsTsx18(mode,previousMode){let[isScreenReaderEnabled,VoicePanelControlsModes,scheduleOnRN,setIsDrawer]=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){scheduleOnRN(setIsDrawer,true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){scheduleOnRN(setIsDrawer,false);}})" };
let closure_46 = { code: "(function VoicePanelControlsTsx19(){let[wrapperSpecs]=this.__closure;return wrapperSpecs.get().drawerMode;})" };
let closure_47 = { code: "(function VoicePanelControlsTsx20(drawerMode,previousDrawerMode){let[scheduleOnRN,setIsDrawerActive]=this.__closure;if(drawerMode===previousDrawerMode)return;if(drawerMode){scheduleOnRN(setIsDrawerActive,true);}else{scheduleOnRN(setIsDrawerActive,false);}})" };
const memoResult = react.memo(function VoicePanelControls(gestureState) {
  let GestureDetector;
  let View;
  let closure_4;
  let connected;
  let constants2;
  let controlsSpecs3;
  let dockContentSwap;
  let dockJoinMorphOrigin;
  let dockMinimizeProgress;
  let getControlsDefaultWidth;
  let hiddenProps;
  let hiddenStyles;
  let isDockEnabled;
  let isDockExpanding;
  let items30;
  let items32;
  let items33;
  let mode;
  let mode2;
  let obj10;
  let obj11;
  let obj7;
  let safeArea2;
  let setControlsMode;
  let setControlsMode2;
  let tmp100;
  let tmp103;
  let tmp104;
  let tmp106;
  let tmp107;
  let tmp108;
  let tmp109;
  let tmp110;
  let tmp111;
  let tmp112;
  let tmp115;
  let tmp116;
  let tmp118;
  let tmp119;
  let tmp120;
  let tmp121;
  let tmp122;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
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
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
  let tmp94;
  let tmp95;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  let useReducedMotion;
  let windowDimensions2;
  gestureState = gestureState.gestureState;
  let channelId;
  let controlsSpecs;
  setControlsMode = undefined;
  let tab;
  react = undefined;
  let tmp = channelId;
  let tmp2 = setControlsMode;
  let obj = channelId(setControlsMode[24]);
  let obj2 = react;
  let tmp4 = controlsSpecs;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const context = react.useContext(controlsSpecs(setControlsMode[14]));
  channelId = context.channelId;
  controlsSpecs = context.controlsSpecs;
  ({ isDockEnabled, setControlsMode } = context);
  ({ dockContentSwap, isDockExpanding, dockJoinMorphOrigin, mode, dockMinimizeProgress, useReducedMotion } = context);
  let tmp6 = closure_21();
  const tmp7 = tab;
  let tmp8 = tab(react.useState(null), 2);
  tab = tmp8[0];
  react = tmp8[1];
  let obj3 = channelId(setControlsMode[15]);
  const sharedValue = obj3.useSharedValue(tab);
  const layoutEffect = react.useLayoutEffect(() => {
    const result = sharedValue.set(first);
  });
  let tmp12 = controlsSpecs(setControlsMode[36])(channelId);
  let tmp13 = controlsSpecs(setControlsMode[37])(channelId);
  let obj4 = channelId(setControlsMode[38]);
  const maybeFetchSoundboardSounds = obj4.useMaybeFetchSoundboardSounds({ shouldFetch: tmp12 });
  let items = [channelId, controlsSpecs, setControlsMode];
  const openTab = react.useCallback((controlsProps) => {
    let disableControlsUpdate;
    ({ tab: channelId, source: controlsSpecs, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    controlsProps = controlsProps.controlsProps;
    let obj = channelId(setControlsMode[39]);
    obj.batchUpdates(() => {
      tab = false;
      const tmp2 = controlsSpecs.get().mode !== constants.DRAWER;
      const obj = channelId(setControlsMode[40]);
      const obj2 = { tab, disableControlsUpdate, controlsProps };
      const result = obj.reportJankVoicePanelTabRequest(channelId, obj2, tmp2);
      closure_1_4((arg0) => {
        closure_0 = arg0 !== channelId;
        return channelId;
      });
      const tmp = constants;
      const tmp3 = setControlsMode;
      const tmp4 = channelId;
      const tmp5 = tab;
      if (!disableControlsUpdate) {
        const obj3 = { mode: tmp.DRAWER };
        const merged = Object.assign(tmp6);
        disableControlsUpdate(obj3);
      }
      const tmp14 = tab || tmp2;
      if (tmp14) {
        controlsSpecs(tmp3[20])(tmp4, tmp5, closure_1);
      }
    });
  }, items);
  const tmp16 = controlsSpecs(setControlsMode[41])();
  let items1 = [channelId, controlsSpecs, openTab, tab];
  const layoutEffect1 = react.useLayoutEffect(() => {
    let chatOpen;
    function handleStoreChange() {
      chatOpen = ChannelRTCStore.getChatOpen(channelId);
      if (chatOpen !== chatOpen) {
        if (chatOpen) {
          const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
          callback(obj);
        }
      }
    }
    let obj = callback;
    chatOpen = callback.getChatOpen(chatOpen);
    if (chatOpen !== chatOpen) {
      if (chatOpen) {
        const obj2 = { tab: "chat", source: channelId(setControlsMode[20]).VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
        callback(obj2);
      }
    }
    obj.addChangeListener(handleStoreChange);
    return () => {
      ChannelRTCStore.removeChangeListener(handleStoreChange);
    };
  }, items1);
  let items2 = [openTab];
  const effect = react.useEffect(() => {
    function handleOpenChatTab(source) {
      source = undefined;
      const tmp = openTab;
      if (source != null) {
        source = source.source;
      }
      if (source == null) {
        source = channelId(setControlsMode[20]).VoicePanelTabAnalyticsSources.HEADER_BUTTON;
      }
      tmp({ tab: "chat", source });
    }
    function handleOpenAppLauncherTab(source) {
      source = undefined;
      const tmp = openTab;
      if (source != null) {
        source = source.source;
      }
      if (source == null) {
        source = channelId(setControlsMode[20]).VoicePanelTabAnalyticsSources.HEADER_BUTTON;
      }
      tmp({ tab: "app_launcher", source });
    }
    let ComponentDispatch = channelId(setControlsMode[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants2.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    let ComponentDispatch2 = channelId(setControlsMode[42]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants2.VOICE_PANEL_OPEN_APP_LAUNCHER_TAB, handleOpenAppLauncherTab);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(authStore4.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(authStore4.VOICE_PANEL_OPEN_APP_LAUNCHER_TAB, handleOpenAppLauncherTab);
    };
  }, items2);
  let obj5 = channelId(setControlsMode[43]);
  const rect = obj5.getSafeAreaInsets();
  let tmp19 = channelId(setControlsMode[15]);
  size = { width: getControlsDefaultWidth(obj7.getWindowDimensions().width, rect.left, rect.right), height: 0, x: 0, y: 0, drawerMode: false, hidden: false };
  const useSharedValue = tmp19.useSharedValue;
  let tmp20 = channelId(setControlsMode[22]);
  getControlsDefaultWidth = tmp20.getControlsDefaultWidth;
  obj7 = channelId(setControlsMode[44]);
  const sharedValue1 = useSharedValue(size);
  let obj8 = channelId(setControlsMode[15]);
  let items3 = [closure_40, sharedValue1, closure_12, tmp16];
  let c0;
  let c1;
  let c2;
  [tmp22, tmp23, tmp24, tmp25] = items3;
  class VoicePanelControlsTsx13 {
    constructor() {
      const sum = _undefined.get().height + c1;
      return sum + _undefined2.get();
    }
  }
  let items4 = [tmp23, tmp24, tmp25];
  VoicePanelControlsTsx13.__closure = items4;
  VoicePanelControlsTsx13.__workletHash = 3098126671150;
  VoicePanelControlsTsx13.__initData = tmp22;
  const derivedValue = obj8.useDerivedValue(VoicePanelControlsTsx13);
  const tmpResult = tmp(tmp2[15]);
  const sharedValue2 = tmpResult.useSharedValue(null);
  let items5 = [closure_41, dockJoinMorphOrigin];
  c0 = undefined;
  [tmp28, tmp29] = items5;
  const tmpResult16 = tmp(tmp2[15]);
  class VoicePanelControlsTsx14 {
    constructor() {
      return null != _undefined.get();
    }
  }
  let items6 = [tmp29];
  VoicePanelControlsTsx14.__closure = items6;
  VoicePanelControlsTsx14.__workletHash = 6544063200230;
  VoicePanelControlsTsx14.__initData = tmp28;
  let items7 = [closure_42, sharedValue2, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp30, tmp31, tmp32] = items7;
  class VoicePanelControlsTsx15 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        let tmp2 = null;
        set = _undefined.set;
        if (arg0) {
          const obj = {};
          const merged = Object.assign(_undefined2.get());
          tmp2 = obj;
        }
        const result = set(tmp2);
      }
    }
  }
  let items8 = [tmp31, tmp32];
  VoicePanelControlsTsx15.__closure = items8;
  VoicePanelControlsTsx15.__workletHash = 5348461441179;
  VoicePanelControlsTsx15.__initData = tmp30;
  const animatedReaction = tmpResult16.useAnimatedReaction(VoicePanelControlsTsx14, VoicePanelControlsTsx15);
  const tmpResult17 = tmp(tmp2[17]);
  const token = tmpResult17.useToken(tmp4(tmp2[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
  let items9 = [closure_43, sharedValue2, token, , , , , , , , , , , , , , , , , ];
  const useAnimatedStyle = tmp(tmp2[15]).useAnimatedStyle;
  tmp(tmp2[15]);
  items9[3] = tmp4(tmp2[45]);
  items9[4] = tmp(tmp2[35]).withSpring;
  items9[5] = useReducedMotion;
  items9[6] = derivedValue;
  items9[7] = closure_7;
  items9[8] = sharedValue1;
  items9[9] = closure_9;
  items9[10] = closure_10;
  items9[11] = closure_8;
  items9[12] = isDockEnabled;
  items9[13] = gestureState;
  items9[14] = isDockExpanding;
  items9[15] = tmp(tmp2[46]).SHEET_MORPH_EXPANDING_PANEL_FADE;
  items9[16] = tmp(tmp2[46]).SHEET_MORPH_DOCKING_PANEL_FADE;
  items9[17] = dockContentSwap;
  items9[18] = tmp(tmp2[46]).getSheetMorphFadeProgress;
  items9[19] = dockMinimizeProgress;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c16;
  let c17;
  let c18;
  [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55] = items9;
  class VoicePanelControlsTsx16 {
    constructor() {
      let items;
      let items2;
      let max;
      let num2;
      let num6;
      let sum;
      let tmp;
      let value;
      const point = _undefined.get();
      if (null != point) {
        let y3;
        size = { borderBottomRightRadius: _undefined2, borderBottomLeftRadius: _undefined2, height: null, width: null, marginLeft: -1 * _undefined3(point.width / 2), opacity: 1, transform: items };
        ({ height: obj11.height, width: obj11.width } = point);
        items = [{ translateX: point.x }, ];
        const obj = { translateX: point.x };
        const tmp28 = _undefined;
        if (_undefined4.get()) {
          y3 = point.y;
        } else {
          y3 = _undefined5.get();
        }
        items[1] = { translateY: tmp28(y3, c6) };
        const obj2 = { translateY: tmp28(y3, c6) };
        return size;
      } else {
        num = 0;
        if (!_undefined6.get().drawerMode) {
          num = _undefined2;
        }
        const size1 = { borderBottomRightRadius: _undefined(num, c8), borderBottomLeftRadius: _undefined(num2, tmp), height: _undefined(_undefined6.get().height, c9), width: _undefined(_undefined6.get().width, c10), marginLeft: _undefined(-1 * _undefined3(_undefined6.get().width / 2), c10) };
        num2 = 0;
        tmp = c8;
        if (!_undefined6.get().drawerMode) {
          num2 = _undefined2;
        }
        const tmp3 = c10;
        const tmp5 = c11;
        if (tmp5) {
          const tmp12 = _undefined8.get() ? c14 : c15;
          const obj3 = { opacity: _undefined(num6 * max(value, _undefined10(1 - _undefined11.get(), tmp12.start, tmp12.end)), tmp3) };
          const merged = Object.assign(size1);
          num6 = 1;
          if (_undefined6.get().hidden) {
            num6 = 0;
          }
          const _Math = Math;
          max = Math.max;
          value = _undefined9.get();
          const items1 = [{ translateX: _undefined(_undefined6.get().x, c6) }, ];
          const obj5 = { translateX: _undefined(_undefined6.get().x, c6) };
          const obj7 = _undefined11;
          const tmp20 = c6;
          if (_undefined4.get()) {
            if (_undefined7.get().active) {
              items1[1] = { translateY: _undefined(sum, tmp20) };
              obj3.transform = items1;
              const obj6 = { translateY: _undefined(sum, tmp20) };
              return obj3;
            }
            const y2 = obj14.get().y;
            const value2 = obj7.get();
            sum = y2 + value2 * _undefined5.get();
          }
          sum = _undefined5.get();
        } else {
          let y;
          const obj8 = { transform: items2 };
          const merged1 = Object.assign(size1);
          items2 = [{ translateX: _undefined(_undefined6.get().x, c6) }, ];
          const obj10 = { translateX: _undefined(_undefined6.get().x, c6) };
          const tmp9 = c6;
          if (_undefined6.get().hidden) {
            y = _undefined5.get();
          } else {
            y = obj14.get().y;
          }
          items2[1] = { translateY: _undefined(y, tmp9) };
          const obj12 = { translateY: _undefined(y, tmp9) };
          return obj8;
        }
      }
    }
  }
  let items10 = [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55];
  VoicePanelControlsTsx16.__closure = items10;
  VoicePanelControlsTsx16.__workletHash = 13552589010327;
  VoicePanelControlsTsx16.__initData = tmp36;
  const animatedStyle = useAnimatedStyle(VoicePanelControlsTsx16);
  const tmp57 = tmp4(tmp2[47])(mode, sharedValue1);
  ({ hiddenProps, hiddenStyles } = tmp57);
  const context1 = obj2.useContext(tmp4(tmp2[14]));
  const controlsSpecs2 = context1.controlsSpecs;
  const windowDimensions = context1.windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  const safeArea = context1.safeArea;
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: false, active: false, drawerTransitionHeight, interFloatingTransitionHeight };
  const tmpResult19 = tmp(tmp2[15]);
  const sharedValue3 = tmpResult19.useSharedValue(point);
  const tmpResult20 = tmp(tmp2[15]);
  const sharedValue4 = tmpResult20.useSharedValue(0);
  const tmpResult21 = tmp(tmp2[15]);
  const sharedValue5 = tmpResult21.useSharedValue(false);
  const tmpResult22 = tmp(tmp2[15]);
  const sharedValue6 = tmpResult22.useSharedValue(0);
  const ref = obj2.useRef(undefined);
  const tmpResult23 = tmp(tmp2[15]);
  const sharedValue7 = tmpResult23.useSharedValue(false);
  let items11 = [ref, sharedValue5, sharedValue7, sharedValue6];
  const memo = obj2.useMemo(() => ({ gestureRef: ref, scrollLocked: sharedValue7, scrollOffsetValue: sharedValue6, isDragScrolling: sharedValue5 }), items11);
  const tmp66 = tmp4(tmp2[16])();
  let closure_14 = tmp66;
  const tmpResult24 = tmp(tmp2[17]);
  const token1 = tmpResult24.useToken(tmp4(tmp2[10]).modules.mobile.VOICE_PANEL_GUTTER);
  let items12 = [controlsSpecs2, tmp66, sharedValue3, sharedValue5, openTab, safeArea, sharedValue7, sharedValue6, sharedValue, tab, sharedValue4, windowDimensions, wrapperDimensions, sharedValue1, token1];
  const memo1 = obj2.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp20;
    let tmp21;
    let tmp22;
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
    let tmp38;
    let tmp39;
    let tmp40;
    let tmp41;
    let tmp42;
    let tmp43;
    let tmp44;
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
    let tmp61;
    let tmp62;
    let tmp63;
    let tmp65;
    let tmp66;
    let tmp67;
    let tmp68;
    let tmp69;
    let tmp70;
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
    let tmp84;
    let tmp86;
    let tmp87;
    let tmp88;
    let tmp89;
    let tmp90;
    const tmp2 = setControlsMode;
    const Gesture = channelId(setControlsMode[18]).Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    let result = maxPointersResult.shouldCancelWhenOutside(false);
    const items = [closure_2_26, sharedValue4, , , , , , ];
    let tmp4 = sharedValue3;
    items[2] = sharedValue3;
    items[3] = sharedValue1;
    let tmp6 = controlsSpecs2;
    items[4] = controlsSpecs2;
    items[5] = constants;
    items[6] = drawerTransitionHeight;
    items[7] = interFloatingTransitionHeight;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
    const withRefResult = result.withRef(ref);
    class VoicePanelControlsTsx1 {
      constructor(arg0) {
        result = closure_0.set(0);
        point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: closure_2.get().x, y: closure_2.get().y, height: closure_2.get().height, isDrawer: closure_3.get().mode === closure_4.DRAWER, active: false, drawerTransitionHeight: closure_5, interFloatingTransitionHeight: closure_6 };
        result1 = closure_1.set(point);
        return;
      }
    }
    const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    VoicePanelControlsTsx1.__closure = items1;
    VoicePanelControlsTsx1.__workletHash = 1951912306053;
    VoicePanelControlsTsx1.__initData = tmp10;
    const tmp3 = sharedValue4;
    const items2 = [closure_2_27, , ];
    const onStart = withRefResult.onTouchesDown(VoicePanelControlsTsx1).onStart;
    withRefResult.onTouchesDown(VoicePanelControlsTsx1);
    items2[1] = channelId(tmp2[19]).scheduleOnRN;
    items2[2] = closure_14;
    c0 = undefined;
    c1 = undefined;
    [tmp20, tmp21, tmp22] = items2;
    const tmp8 = drawerTransitionHeight;
    const tmp9 = interFloatingTransitionHeight;
    class VoicePanelControlsTsx2 {
      constructor() {
        tmp = closure_0(closure_1.lock);
        return;
      }
    }
    const items3 = [tmp21, tmp22];
    VoicePanelControlsTsx2.__closure = items3;
    VoicePanelControlsTsx2.__workletHash = 13169296755053;
    VoicePanelControlsTsx2.__initData = tmp20;
    const items4 = [closure_2_28, , , , , , , , , , , , , , , , , , ];
    const onTouchesMove = onStart(VoicePanelControlsTsx2).onTouchesMove;
    onStart(VoicePanelControlsTsx2);
    items4[1] = channelId(tmp2[18]).State;
    items4[2] = tmp4;
    items4[3] = tmp6;
    items4[4] = constants;
    items4[5] = tmp3;
    items4[6] = num;
    items4[7] = sharedValue5;
    items4[8] = sharedValue;
    items4[9] = sharedValue6;
    items4[10] = 30;
    items4[11] = sharedValue1;
    items4[12] = tmp8;
    items4[13] = tmp9;
    items4[14] = first;
    items4[15] = channelId(tmp2[19]).scheduleOnRN;
    items4[16] = callback;
    items4[17] = channelId(tmp2[20]).VoicePanelTabAnalyticsSources;
    items4[18] = sharedValue7;
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
    let c13;
    let c14;
    let c15;
    let c16;
    let c17;
    [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items4;
    class VoicePanelControlsTsx3 {
      constructor(arg0, arg1) {
        if (arg0.state === closure_0.BEGAN) {
          obj4 = closure_1;
          if (!closure_1.get().active) {
            tmp = arg1;
            obj = closure_2;
            tmp2 = closure_3;
            if (closure_2.get().mode !== closure_3.HIDDEN) {
              tmp4 = closure_4;
              num = 1;
              result = closure_4.set(closure_4.get() + 1);
              tmp6 = closure_5;
              value = closure_4.get() <= closure_5;
              if (!value) {
                tmp8 = closure_6;
                value = closure_6.get();
              }
              tmp9 = closure_7;
              value1 = closure_7.get();
              str = "settings";
              if ("settings" === value1) {
                tmp11 = closure_8;
                num2 = closure_8.get();
              } else {
                str2 = "app_launcher";
                num2 = 0;
              }
              ({ absoluteY, absoluteX } = arg0.changedTouches[0]);
              diff = obj4.get().absoluteY - absoluteY;
              tmp13 = obj.get().mode === tmp2.DRAWER && value;
              if (tmp13) {
                num3 = 0;
                tmp14 = diff >= 0 || num2 > 0;
                tmp13 = tmp14;
              }
              if (!tmp13) {
                if (obj.get().mode !== tmp2.FLOATING_DEFAULT) {
                  if (obj.get().mode === tmp2.DRAWER) {
                    if (diff >= -closure_9) {
                    }
                  }
                  tmp16 = globalThis;
                  _Math = Math;
                  _Math2 = Math;
                  tmp18 = closure_9;
                  absolute = Math.abs(diff);
                  if (absolute > Math.abs(closure_9)) {
                    failResult = arg1.fail();
                  }
                } else {
                  tmp15 = closure_9;
                }
                point = { absoluteX: null, absoluteY: null, x: null, y: null, height: null, isDrawer: null, active: true, drawerTransitionHeight: null, interFloatingTransitionHeight: null };
                point.absoluteX = absoluteX;
                point.absoluteY = absoluteY;
                tmp19 = closure_10;
                set = obj4.set;
                point.x = closure_10.get().x;
                point.y = closure_10.get().y;
                point.height = closure_10.get().height;
                point.isDrawer = obj.get().mode === tmp2.DRAWER;
                tmp20 = closure_11;
                point.drawerTransitionHeight = closure_11;
                tmp21 = closure_12;
                point.interFloatingTransitionHeight = closure_12;
                result1 = set(point);
                tmp23 = obj.get().mode !== tmp2.DRAWER;
                if (tmp23) {
                  tmp24 = closure_13;
                  tmp23 = "settings" !== closure_13;
                }
                if (tmp23) {
                  tmp25 = closure_14;
                  tmp26 = closure_15;
                  obj1 = { tab: "settings", source: null, disableControlsUpdate: true };
                  tmp27 = closure_16;
                  obj1.source = closure_16.GESTURE;
                  tmp28 = closure_14(closure_15, obj1);
                }
                tmp29 = closure_17;
                flag = true;
                result2 = closure_17.set(true);
                activateResult = arg1.activate();
              }
            } else {
              failResult1 = arg1.fail();
            }
          }
        }
        return;
      }
    }
    const items5 = [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
    VoicePanelControlsTsx3.__closure = items5;
    VoicePanelControlsTsx3.__workletHash = 4250755132616;
    VoicePanelControlsTsx3.__initData = tmp26;
    const items6 = [closure_2_29, tmp4, , , , , , , , , , , , ];
    const onChange = onTouchesMove(VoicePanelControlsTsx3).onChange;
    onTouchesMove(VoicePanelControlsTsx3);
    items6[2] = controlsSpecs(tmp2[21]);
    items6[3] = safeArea;
    items6[4] = token1;
    items6[5] = sharedValue1;
    items6[6] = channelId(tmp2[22]).getControlsDrawerOpenWidth;
    items6[7] = windowDimensions;
    items6[8] = wrapperDimensions;
    items6[9] = tmp6;
    items6[10] = channelId(tmp2[19]).scheduleOnRN;
    items6[11] = channelId(tmp2[23]).triggerHapticFeedback;
    items6[12] = channelId(tmp2[23]).HapticFeedbackTypes;
    items6[13] = channelId(tmp2[22]).getControlsDefaultWidth;
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
    [tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63] = items6;
    const tmp46 = controlsSpecs;
    const tmp47 = safeArea;
    const tmp48 = token1;
    const tmp49 = wrapperDimensions;
    class VoicePanelControlsTsx4 {
      constructor(arg0) {
        obj = closure_0;
        diff = arg0.absoluteY - closure_0.get().absoluteY;
        diff1 = closure_0.get().height - closure_0.get().y - diff;
        if (diff1 > closure_0.get().drawerTransitionHeight) {
          if (!obj.get().isDrawer) {
            obj1 = {};
            set3 = obj.set;
            tmp16 = obj1;
            merged = Object.assign(obj.get());
            flag3 = true;
            obj1.isDrawer = true;
            set3Result = set3(obj1);
          }
          tmp19 = closure_1;
          tmp20 = closure_2;
          tmp21 = closure_3;
          tmp22 = closure_4;
          obj8 = {};
          height = closure_1(closure_2.get(), closure_3).height;
          set4 = closure_4.set;
          tmp23 = obj8;
          merged1 = Object.assign(closure_4.get());
          num3 = 0;
          obj8.x = 0;
          obj8.y = 0;
          tmp25 = closure_5;
          tmp26 = closure_6;
          width2 = closure_6.get().width;
          obj8.width = closure_5(width2, closure_2.get().left, closure_2.get().right);
          tmp27 = globalThis;
          _Math = Math;
          tmp28 = closure_7;
          obj8.height = Math.min(diff1, closure_7.get().drawerHeight - height);
          flag4 = true;
          obj8.drawerMode = true;
          set4Result = set4(obj8);
        } else {
          tmp31 = closure_8;
          result = diff1 / obj.get().drawerTransitionHeight;
          height2 = closure_8.get().height;
          tmp32 = globalThis;
          _Math2 = Math;
          obj7 = closure_2;
          num4 = 0;
          num5 = -1;
          result1 = -1 * Math.max(diff1 - closure_2.get().bottom - height2, 0);
          if (obj.get().isDrawer) {
            obj9 = {};
            set = obj.set;
            tmp3 = obj9;
            merged2 = Object.assign(obj.get());
            flag = false;
            obj9.isDrawer = false;
            result2 = set(obj9);
          }
          obj3 = closure_4;
          tmp6 = height2 === closure_4.get().height || obj3.get().drawerMode;
          if (!tmp6) {
            tmp7 = closure_9;
            tmp8 = closure_10;
            tmp9 = closure_11;
            tmp10 = closure_9(closure_10, closure_11.IMPACT_MEDIUM);
          }
          obj10 = {};
          set2 = obj3.set;
          tmp11 = obj10;
          merged3 = Object.assign(obj3.get());
          obj10.x = 0;
          num = 1.5;
          num2 = 1;
          obj10.y = -1 * obj7.get().bottom + result1 * (1 - result / 1.5);
          tmp13 = closure_12;
          tmp14 = closure_6;
          width = closure_6.get().width;
          obj10.width = closure_12(width, obj7.get().left, obj7.get().right);
          obj10.height = height2;
          flag2 = false;
          obj10.drawerMode = false;
          set2Result = set2(obj10);
        }
        return;
      }
    }
    const items7 = [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63];
    VoicePanelControlsTsx4.__closure = items7;
    VoicePanelControlsTsx4.__workletHash = 2574699763426;
    VoicePanelControlsTsx4.__initData = tmp50;
    const items8 = [closure_2_30, tmp25, tmp24, tmp4, , ];
    const onTouchesCancelled = onChange(VoicePanelControlsTsx4).onTouchesCancelled;
    onChange(VoicePanelControlsTsx4);
    items8[4] = channelId(tmp2[19]).scheduleOnRN;
    items8[5] = closure_14;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp65, tmp66, tmp67, tmp68, tmp69, tmp70] = items8;
    class VoicePanelControlsTsx5 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        obj = {};
        set = closure_2.set;
        merged = Object.assign(closure_2.get());
        obj.active = false;
        result2 = set(obj);
        tmp5 = closure_3(closure_4.unlock);
        return;
      }
    }
    const items9 = [tmp66, tmp67, tmp68, tmp69, tmp70];
    VoicePanelControlsTsx5.__closure = items9;
    VoicePanelControlsTsx5.__workletHash = 2432447436376;
    VoicePanelControlsTsx5.__initData = tmp65;
    const items10 = [closure_2_31, tmp5, tmp49, , , , , , , , , , ];
    const onEnd = onTouchesCancelled(VoicePanelControlsTsx5).onEnd;
    onTouchesCancelled(VoicePanelControlsTsx5);
    items10[3] = tmp46(tmp2[21]);
    items10[4] = tmp47;
    items10[5] = tmp48;
    items10[6] = tmp6;
    items10[7] = constants;
    items10[8] = tmp4;
    items10[9] = sharedValue7;
    items10[10] = sharedValue5;
    items10[11] = channelId(tmp2[19]).scheduleOnRN;
    items10[12] = closure_14;
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
    [tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84] = items10;
    class VoicePanelControlsTsx6 {
      constructor(arg0) {
        velocityY = arg0.velocityY;
        absolute = Math.abs(velocityY);
        if (absolute > 200) {
          num = 0;
          if (velocityY < 0) {
            tmp7 = closure_0;
            obj = {};
            set = closure_0.set;
            tmp8 = obj;
            merged = Object.assign(closure_0.get());
            tmp10 = closure_1;
            tmp11 = closure_2;
            tmp12 = closure_3;
            tmp13 = closure_4;
            obj.height = closure_1.get().drawerHeight - closure_2(closure_3.get(), closure_4).height;
            result = set(obj);
            tmp15 = closure_5;
            tmp16 = closure_6;
            tmp4 = closure_5.get().mode === closure_6.DRAWER ? tmp16.RESET : tmp16.DRAWER;
          }
          tmp17 = closure_8;
          flag = false;
          result1 = closure_8.set(false);
          tmp19 = closure_9;
          result2 = closure_9.set(false);
          tmp21 = closure_10;
          tmp22 = closure_11;
          tmp23 = closure_10(closure_11.unlock, tmp4);
          return;
        }
        if (absolute < 200) {
          tmp2 = closure_7;
          if (closure_7.get().isDrawer) {
            tmp5 = closure_5;
            tmp6 = closure_6;
            tmp4 = closure_5.get().mode === closure_6.DRAWER ? tmp6.RESET : tmp6.DRAWER;
          }
        }
        tmp3 = closure_6;
        tmp4 = closure_5.get().mode === closure_6.FLOATING_DEFAULT ? tmp3.RESET : tmp3.FLOATING_DEFAULT;
        return;
      }
    }
    const items11 = [tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84];
    VoicePanelControlsTsx6.__closure = items11;
    VoicePanelControlsTsx6.__workletHash = 17280746684389;
    VoicePanelControlsTsx6.__initData = tmp72;
    const items12 = [closure_2_32, tmp25, tmp24, , ];
    const onFinalize = onEnd(VoicePanelControlsTsx6).onFinalize;
    onEnd(VoicePanelControlsTsx6);
    items12[3] = channelId(tmp2[19]).scheduleOnRN;
    items12[4] = closure_14;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp86, tmp87, tmp88, tmp89, tmp90] = items12;
    class VoicePanelControlsTsx7 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        tmp3 = closure_2(closure_3.unlock);
        return;
      }
    }
    const items13 = [tmp87, tmp88, tmp89, tmp90];
    VoicePanelControlsTsx7.__closure = items13;
    VoicePanelControlsTsx7.__workletHash = 12829173539187;
    VoicePanelControlsTsx7.__initData = tmp86;
    return onFinalize(VoicePanelControlsTsx7);
  }, items12);
  let items13 = [closure_33, sharedValue1];
  c0 = undefined;
  [tmp70, tmp71] = items13;
  const tmpResult25 = tmp(tmp2[15]);
  class VoicePanelControlsTsx8 {
    constructor() {
      return _undefined.get().drawerMode;
    }
  }
  const items14 = [tmp71];
  VoicePanelControlsTsx8.__closure = items14;
  VoicePanelControlsTsx8.__workletHash = 16418343056070;
  VoicePanelControlsTsx8.__initData = tmp70;
  const items15 = [closure_34, , , ];
  const useAnimatedReaction = tmpResult25.useAnimatedReaction;
  items15[1] = tmp(tmp2[19]).scheduleOnRN;
  items15[2] = tmp(tmp2[23]).triggerHapticFeedback;
  items15[3] = tmp(tmp2[23]).HapticFeedbackTypes;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp72, tmp73, tmp74, tmp75] = items15;
  class VoicePanelControlsTsx9 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, _undefined2.IMPACT_MEDIUM);
      }
    }
  }
  const items16 = [tmp73, tmp74, tmp75];
  VoicePanelControlsTsx9.__closure = items16;
  VoicePanelControlsTsx9.__workletHash = 1613558861571;
  VoicePanelControlsTsx9.__initData = tmp72;
  const animatedReaction1 = useAnimatedReaction(VoicePanelControlsTsx8, VoicePanelControlsTsx9);
  const tmpResult26 = tmp(tmp2[24]);
  const isScreenReaderEnabled1 = tmpResult26.useIsScreenReaderEnabled();
  const tmp78 = tmp4(tmp2[25])({ ignoreKeyboard: true });
  const context2 = obj2.useContext(tmp4(tmp2[14]));
  ({ controlsSpecs: controlsSpecs3, windowDimensions: windowDimensions2, mode: mode2, setControlsMode: setControlsMode2, safeArea: safeArea2, connected } = context2);
  const items17 = [closure_35, connected, controlsSpecs3, mode2, windowDimensions2, tmp78, safeArea2];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87] = items17;
  const tmpResult27 = tmp(tmp2[15]);
  class VoicePanelControlsTsx10 {
    constructor() {
      const obj = { connected: _undefined.get(), currentControlsMode: _undefined2.get().mode, mode: _undefined3.get(), windowWidth: _undefined4.get().width, windowHeight: _undefined4.get().height, windowHeightIgnoringKeyboard: _undefined5.get().height, controlsHeightValue: _undefined2.get().height, safeArea: _undefined6.get() };
      return obj;
    }
  }
  const items18 = [tmp82, tmp83, tmp84, tmp85, tmp86, tmp87];
  VoicePanelControlsTsx10.__closure = items18;
  VoicePanelControlsTsx10.__workletHash = 5812012898269;
  VoicePanelControlsTsx10.__initData = tmp81;
  const items19 = [closure_36, , , , , , , , , , , ];
  const useAnimatedReaction2 = tmpResult27.useAnimatedReaction;
  items19[1] = tmp(tmp2[26]).cheapWorkletShallowEqual;
  items19[2] = closure_11;
  items19[3] = sharedValue1;
  items19[4] = constants;
  const tmp88 = constants;
  items19[5] = tmp(tmp2[19]).scheduleOnRN;
  items19[6] = setControlsMode2;
  items19[7] = isScreenReaderEnabled1;
  items19[8] = closure_13;
  items19[9] = tmp(tmp2[22]).getControlsDefaultWidth;
  items19[10] = tmp(tmp2[27]).getDrawerSpec;
  items19[11] = tmp(tmp2[22]).getControlsDrawerOpenWidth;
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
  [tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100] = items19;
  class VoicePanelControlsTsx11 {
    constructor(arg0, currentControlsMode) {
      let controlsHeightValue;
      let maxHeight;
      let minHeight;
      let mode;
      let safeArea;
      let windowWidth;
      const tmp = c0;
      const tmp2 = currentControlsMode;
      if (!tmp(arg0, tmp2)) {
        ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = arg0);
        if (_undefined.DISMISSED !== mode) {
          if (_undefined.PIP !== mode) {
            const PANEL = tmp4.PANEL;
            if (_undefined3.RESET === currentControlsMode) {
              let currentControlsMode1;
              const tmp19 = c4;
              const tmp20 = c5;
              if (currentControlsMode != null) {
                currentControlsMode1 = currentControlsMode.currentControlsMode;
              }
              if (currentControlsMode1 == null) {
                currentControlsMode1 = tmp26.FLOATING_DEFAULT;
              }
              const obj = { mode: currentControlsMode1 };
              tmp19(tmp20, obj);
            } else if (_undefined3.HIDDEN === currentControlsMode) {
              if (c6) {
                const obj2 = { hidden: false };
                const set4 = _undefined2.set;
                const merged = Object.assign(obj3.get());
                set4(obj2);
              } else if (!_undefined2.get().hidden) {
                const obj4 = { hidden: true };
                set3 = _undefined2.set;
                const merged1 = Object.assign(obj3.get());
                set3(obj4);
              }
            } else if (_undefined3.FLOATING_DEFAULT === currentControlsMode) {
              size = { x: 0, y: -1 * Math.max(safeArea.bottom, c7), width: _undefined4(windowWidth, safeArea.left, safeArea.right), height: controlsHeightValue, drawerMode: false, hidden: false };
              const _Math = Math;
              set2 = _undefined2.set;
              set2(size);
            } else if (_undefined3.DRAWER === currentControlsMode) {
              ({ minHeight, maxHeight } = _undefined5(tmp3, safeArea.top));
              _undefined5(tmp3, safeArea.top);
              if (_undefined2.get().height <= controlsHeightValue) {
                minHeight = maxHeight;
              }
              const size1 = { x: 0, y: 0, width: _undefined6(windowWidth, safeArea.left, safeArea.right), height: minHeight, drawerMode: true, hidden: false };
              set = _undefined2.set;
              const result = set(size1);
            }
          }
        }
        if (!_undefined2.get().hidden) {
          const obj5 = { hidden: true };
          const set5 = _undefined2.set;
          const merged2 = Object.assign(obj7.get());
          set5(obj5);
        }
      }
    }
  }
  const items20 = [tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100];
  VoicePanelControlsTsx11.__closure = items20;
  VoicePanelControlsTsx11.__workletHash = 3913287750376;
  VoicePanelControlsTsx11.__initData = tmp89;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelControlsTsx10, VoicePanelControlsTsx11);
  [tmp103, tmp104] = tmp7(obj2.useState(false), 2);
  tmp7(obj2.useState(false), 2);
  const items21 = [closure_44, controlsSpecs];
  c0 = undefined;
  [tmp106, tmp107] = items21;
  const tmpResult28 = tmp(tmp2[15]);
  class VoicePanelControlsTsx17 {
    constructor() {
      return _undefined.get().mode;
    }
  }
  const items22 = [tmp107];
  VoicePanelControlsTsx17.__closure = items22;
  VoicePanelControlsTsx17.__workletHash = 2590752982287;
  VoicePanelControlsTsx17.__initData = tmp106;
  const items23 = [closure_45, isScreenReaderEnabled, tmp88, , ];
  const useAnimatedReaction3 = tmpResult28.useAnimatedReaction;
  items23[3] = tmp(tmp2[19]).scheduleOnRN;
  items23[4] = tmp104;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp108, tmp109, tmp110, tmp111, tmp112] = items23;
  class VoicePanelControlsTsx18 {
    constructor(arg0, arg1) {
      const tmp = arg0 !== arg1 && c0;
      if (tmp) {
        if (arg0 === _undefined.DRAWER) {
          if (arg1 !== _undefined.DRAWER) {
            _undefined2(c3, true);
          }
        }
        const tmp3 = arg0 !== _undefined.DRAWER && arg1 === _undefined.DRAWER;
        if (tmp3) {
          _undefined2(c3, false);
        }
      }
    }
  }
  const items24 = [tmp109, tmp110, tmp111, tmp112];
  VoicePanelControlsTsx18.__closure = items24;
  VoicePanelControlsTsx18.__workletHash = 11440892714817;
  VoicePanelControlsTsx18.__initData = tmp108;
  const animatedReaction3 = useAnimatedReaction3(VoicePanelControlsTsx17, VoicePanelControlsTsx18);
  [tmp115, tmp116] = tmp7(obj2.useState(false), 2);
  tmp7(obj2.useState(false), 2);
  const items25 = [closure_46, sharedValue1];
  c0 = undefined;
  [tmp118, tmp119] = items25;
  const tmpResult29 = tmp(tmp2[15]);
  class VoicePanelControlsTsx19 {
    constructor() {
      return _undefined.get().drawerMode;
    }
  }
  const items26 = [tmp119];
  VoicePanelControlsTsx19.__closure = items26;
  VoicePanelControlsTsx19.__workletHash = 16288224560950;
  VoicePanelControlsTsx19.__initData = tmp118;
  const items27 = [closure_47, , ];
  const useAnimatedReaction4 = tmpResult29.useAnimatedReaction;
  items27[1] = tmp(tmp2[19]).scheduleOnRN;
  items27[2] = tmp116;
  c0 = undefined;
  c1 = undefined;
  [tmp120, tmp121, tmp122] = items27;
  class VoicePanelControlsTsx20 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items28 = [tmp121, tmp122];
  VoicePanelControlsTsx20.__closure = items28;
  VoicePanelControlsTsx20.__workletHash = 8307481518393;
  VoicePanelControlsTsx20.__initData = tmp120;
  const animatedReaction4 = useAnimatedReaction4(VoicePanelControlsTsx19, VoicePanelControlsTsx20);
  const items29 = [setControlsMode];
  const id = obj2.useId();
  const callback1 = obj2.useCallback(() => {
    const obj = { mode: constants.FLOATING_DEFAULT };
    setControlsMode(obj);
  }, items29);
  let obj6 = { value: memo, children: items30 };
  const Provider = tmp(tmp2[48]).ControlsGestureScrollLock.Provider;
  items30 = [closure_18(tmp4(tmp2[49]), { wrapperSpecs: sharedValue1 }), closure_18(closure_37, { channelId, wrapperSpecs: sharedValue1, controlsSpecs, accessoryHeights: tmp16, gestureState }), ];
  const obj9 = { nativeID: id, style: tmp6.accessibilityWrapper, accessibilityViewIsModal: tmp103, onAccessibilityEscape: callback1, pointerEvents: "box-none", children: closure_18(GestureDetector, obj10) };
  obj10 = { gesture: memo1, children: closure_20(View, obj11) };
  const tmp4Result = tmp4(tmp2[50]);
  GestureDetector = tmp(tmp2[18]).GestureDetector;
  const items31 = [tmp6.wrapper, animatedStyle, ];
  let tmp129;
  View = tmp4(tmp2[15]).View;
  if (!isDockEnabled) {
    tmp129 = hiddenStyles;
  }
  obj11 = { style: items31, animatedProps: hiddenProps, children: items33 };
  items31[2] = tmp129;
  let ONYX;
  const ThemeContextProvider = tmp(tmp2[30]).ThemeContextProvider;
  if (tmp13) {
    if (!tmp115) {
      ONYX = closure_17.ONYX;
    }
  }
  let obj12 = { theme: ONYX, children: items32 };
  items32 = [, ];
  const obj13 = { matchAppTheme: !tmp13 };
  items32[0] = closure_18(tmp(tmp2[51]).VoicePanelVisualEffectView, obj13);
  items32[1] = closure_18(closure_39, { openTab, wrapperSpecs: sharedValue1, sharedTab: sharedValue });
  items33 = [closure_20(ThemeContextProvider, obj12), closure_18(tmp4(tmp2[52]), { wrapperSpecs: sharedValue1, tab, sharedTab: sharedValue, gestureSpecs: sharedValue3, openTab }), ];
  let tmp127Result = null;
  const tmpResult30 = tmp(tmp2[11]);
  if (!tmpResult30.isMetaQuest()) {
    const obj14 = { openTab };
    tmp127Result = tmp127(closure_25, obj14);
  }
  items33[2] = tmp127Result;
  items30[2] = closure_18(tmp4Result, obj9);
  return closure_20(Provider, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default memoResult;
