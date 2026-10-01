// Module ID: 16993
// Function ID: 16994
// Name: VoicePanelControls
// Dependencies: [32, 19, 17, 4852, 11755, 11758, 11753, 1074, 21, 4836, 576, 1610, 16994, 8370, 11754, 4566, 16918, 4531, 6073, 16995, 11759, 11762, 4801, 5266, 11515, 8853, 16996, 16877, 16997, 4540, 17001, 17003, 5898, 17006, 5280, 6494, 16861, 16893, 1248, 17030, 1110, 1613, 1479, 10456, 17002, 11585, 17031, 16922, 17005, 17032, 2]

// Module 16993 (VoicePanelControls)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import native2 from "native" /* 8370 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 16877 */;
import useControlsLockDefault from "useControlsLock" /* 16918 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 16994 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 16995 */;
import useConsoleConnectingInfoDefault from "useConsoleConnectingInfo" /* 16997 */;
import VoicePanelFloatingCTAContainer from "VoicePanelFloatingCTAContainer" /* 17001 */;
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 17003 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11758 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let controlsProps, dependencyMap, set, set2, set3;

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
let unpackModuleId;
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
let closure_25 = react.memo((openTab) => {
  let accessibilityLabel;
  let ariaHidden;
  let handlePress;
  openTab = openTab.openTab;
  const tmp = closure_21();
  const tmp2 = useDrawerToggleDefault(openTab);
  const obj = { style: tmp.actionSheetDragHandleWrapper, children: authStore4(native2.ActionSheetDragHandle, { onPress: handlePress, overlay: true, accessibilityLabel, "aria-hidden": ariaHidden }) };
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return authStore4(hasOwnProperty, obj);
});
let closure_26 = { code: "function VoicePanelControlsTsx1(){const{scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)();}" };
let closure_27 = { code: "function VoicePanelControlsTsx2({velocityY:velocityY}){const{wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)(resultingControlMode);}" };
let closure_28 = { code: "function VoicePanelControlsTsx3(){const{scrollLock,isDragScrolling,gestureSpecs,runOnJS,gestureLock}=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});runOnJS(gestureLock.unlock)();}" };
let closure_29 = { code: "function VoicePanelControlsTsx4(event){const{gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth}=this.__closure;const change=event.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}}" };
let closure_30 = { code: "function VoicePanelControlsTsx5(event,manager){const{State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,runOnJS,openTab,VoicePanelTabAnalyticsSources,scrollLock}=this.__closure;if(event.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){runOnJS(openTab)({tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}}" };
let closure_31 = { code: "function VoicePanelControlsTsx6(){const{runOnJS,gestureLock}=this.__closure;runOnJS(gestureLock.lock)();}" };
let closure_32 = { code: "function VoicePanelControlsTsx7(event){const{touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT}=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});}" };
const __initData = { code: "function VoicePanelControlsTsx8(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
const __initData2 = { code: "function VoicePanelControlsTsx9(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
const __initData3 = { code: "function VoicePanelControlsTsx10(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}" };
const __initData4 = { code: "function VoicePanelControlsTsx11(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}}" };
let closure_37 = react.memo((controlsSpecs) => {
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
  items2[0] = authStore4(TransitionItem, obj2);
  let tmp12;
  const TransitionItem2 = tmp(4540).TransitionItem;
  if (isConnectingOrConnectedToConsole) {
    tmp12 = memo;
  }
  const obj3 = { children: items2 };
  const obj4 = { item: tmp12, renderItem: VoicePanelConsoleStatus.renderVoicePanelConsoleStatus };
  items2[1] = authStore4(TransitionItem2, obj4);
  return tmp8(tmp9, obj3);
});
const __initData5 = { code: "function VoicePanelControlsTsx12(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}" };
let closure_39 = react.memo(function VoicePanelButtonsInner(sharedTab) {
  let items;
  let obj4;
  let openTab;
  let require;
  let tmp7;
  let wrapperSpecs;
  ({ openTab: require, wrapperSpecs } = sharedTab);
  sharedTab = sharedTab.sharedTab;
  let controlsSpecs;
  const ref = controlsSpecs.useRef(true);
  const tmp2 = wrapperSpecs(sharedTab[32])(ref);
  const tmp3 = closure_21();
  const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[14]));
  controlsSpecs = context.controlsSpecs;
  const connected = context.connected;
  const arr = wrapperSpecs(sharedTab[33])();
  let obj = require("ReanimatedRexport");
  const fn = function c() {
    let items;
    let num4;
    let obj4;
    let tmp6Result;
    let withSpring;
    const pushToTalk = controlsSpecs.get().pushToTalk && connected.get();
    if ("settings" === sharedTab.get()) {
      let height;
      if (wrapperSpecs.get().height >= c22) {
        height = closure_14;
      }
      num = 0;
      if ("settings" !== sharedTab.get()) {
        num = 0;
        if (wrapperSpecs.get().height >= c22) {
          num = -obj.get().height;
        }
      }
      let num2 = 0;
      if (pushToTalk) {
        num2 = -4;
      }
      const obj3 = { top: num2, height: obj4.withSpring(height, metroImportAll), opacity: withSpring(num4, metroImportAll), transform: items };
      obj4 = spring;
      withSpring = spring.withSpring;
      num4 = 1;
      spring;
      if ("settings" !== sharedTab.get()) {
        num4 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num4 = 0;
        }
      }
      const obj5 = { translateY: tmp6Result.withSpring(num, metroImportAll) };
      items = [obj5, ];
      tmp6Result = spring;
      const withSpring2 = spring.withSpring;
      let num5 = 1;
      spring;
      if ("settings" !== sharedTab.get()) {
        num5 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num5 = 0.95;
        }
      }
      items[1] = { scale: withSpring2(num5, metroImportAll) };
      const obj6 = { scale: withSpring2(num5, metroImportAll) };
      return obj3;
    }
    height = obj.get().height;
  };
  fn.__closure = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: v200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE, withSpring: require("spring").withSpring, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 17578996123721;
  fn.__initData = __initData5;
  const obj2 = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: v200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE, withSpring: require("spring").withSpring, MODE_CHANGE_PHYSICS };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = controlsSpecs.useEffect(() => {
    ref.current = false;
  }, []);
  let obj3 = { skipEntering: tmp2, children: closure_18(tmp7, obj4) };
  const LayoutAnimationConfig = require("ReanimatedRexport").LayoutAnimationConfig;
  obj4 = {
    style: items,
    children: arr.map((props) => {
      const obj = { props, openTab: require, wrapperSpecs };
      return props.render(props.key, obj);
    })
  };
  items = [tmp3.buttonsWrapper, animatedStyle];
  tmp7 = wrapperSpecs(sharedTab[35]);
  return closure_18(LayoutAnimationConfig, obj3);
});
const __initData6 = { code: "function VoicePanelControlsTsx13(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData7 = { code: "function VoicePanelControlsTsx14(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData8 = { code: "function VoicePanelControlsTsx15(mode,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}" };
const __initData9 = { code: "function VoicePanelControlsTsx16(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
const __initData10 = { code: "function VoicePanelControlsTsx17(drawerMode,previousDrawerMode){const{runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}" };
const memoResult = react.memo(function VoicePanelControls(gestureState) {
  let GestureDetector;
  let SCROLL_BEGIN_GRACE_TICKS;
  let callback;
  let closure_13;
  let closure_9;
  let drawerTransitionHeight;
  let getControlsDefaultWidth;
  let hiddenProps;
  let hiddenStyles;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj26;
  let obj27;
  let obj6;
  let tmp52;
  gestureState = gestureState.gestureState;
  let channelId;
  let setControlsMode;
  CALL_TILE_GUTTER = undefined;
  EDGE_GUTTER = undefined;
  let tmp = gestureState;
  const tmp2 = channelId;
  let obj = gestureState(channelId[23]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let tmp4 = isScreenReaderEnabled;
  const context = setControlsMode.useContext(isScreenReaderEnabled(channelId[14]));
  channelId = context.channelId;
  const controlsSpecs = context.controlsSpecs;
  setControlsMode = context.setControlsMode;
  let mode = context.mode;
  let tmp6 = closure_21();
  let tmp7 = controlsSpecs(setControlsMode.useState(null), 2);
  const tab = tmp7[0];
  let chatOpen = tmp7[1];
  let obj2 = gestureState(channelId[15]);
  const sharedValue = obj2.useSharedValue(tab);
  const layoutEffect = setControlsMode.useLayoutEffect(() => {
    const result = sharedValue.set(first);
  });
  const tmp11 = isScreenReaderEnabled(channelId[36])(channelId);
  let obj3 = gestureState(channelId[37]);
  const maybeFetchSoundboardSounds = obj3.useMaybeFetchSoundboardSounds({ shouldFetch: tmp11 });
  let items = [channelId, controlsSpecs, setControlsMode];
  const openTab = setControlsMode.useCallback((controlsProps) => {
    let disableControlsUpdate;
    ({ tab: gestureState, source: isScreenReaderEnabled, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    controlsProps = controlsProps.controlsProps;
    let obj = gestureState(channelId[38]);
    obj.batchUpdates(() => {
      let closure_0 = false;
      const mode = controlsProps.get().mode;
      const DRAWER = VoicePanelControlsModes.DRAWER;
      chatOpen((arg0) => {
        gestureState = arg0 !== gestureState;
        return gestureState;
      });
      const tmp = VoicePanelControlsModes;
      const tmp3 = disableControlsUpdate;
      if (!tmp3) {
        const obj = { mode: tmp.DRAWER };
        const merged = Object.assign(controlsProps);
        setControlsMode(obj);
      }
      const tmp9 = closure_0 || mode !== DRAWER;
      if (tmp9) {
        isScreenReaderEnabled(channelId[19])(disableControlsUpdate, closure_0, closure_1);
      }
    });
  }, items);
  const tmp14 = isScreenReaderEnabled(channelId[39])();
  BORDER_RADIUS_PHYSICS = tmp14;
  const items1 = [channelId, controlsSpecs, openTab, tab];
  const layoutEffect1 = setControlsMode.useLayoutEffect(() => {
    function handleStoreChange() {
      chatOpen = ChannelRTCStore.getChatOpen(channelId);
      if (chatOpen !== chatOpen) {
        if (chatOpen) {
          const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
          callback(obj);
        }
      }
    }
    let obj = chatOpen;
    chatOpen = chatOpen.getChatOpen(channelId);
    if (chatOpen !== chatOpen) {
      if (chatOpen) {
        const obj2 = { tab: "chat", source: gestureState(channelId[19]).VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
        callback(obj2);
      }
    }
    obj.addChangeListener(handleStoreChange);
    return () => {
      ChannelRTCStore.removeChangeListener(handleStoreChange);
    };
  }, items1);
  const items2 = [openTab];
  const effect = setControlsMode.useEffect(() => {
    function handleOpenChatTab() {
      const obj = { tab: "chat", source: gestureState(channelId[19]).VoicePanelTabAnalyticsSources.HEADER_BUTTON };
      callback(obj);
    }
    let ComponentDispatch = gestureState(channelId[40]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    };
  }, items2);
  let obj4 = gestureState(channelId[41]);
  const rect = obj4.getSafeAreaInsets();
  const tmp17 = gestureState(channelId[15]);
  size = { width: getControlsDefaultWidth(obj6.getWindowDimensions().width, rect.left, rect.right), height: 0, x: 0, y: 0, drawerMode: false, hidden: false };
  const useSharedValue = tmp17.useSharedValue;
  getControlsDefaultWidth = gestureState(channelId[21]).getControlsDefaultWidth;
  const tmp18 = gestureState(channelId[21]);
  obj6 = gestureState(channelId[42]);
  const sharedValue1 = useSharedValue(size);
  let obj7 = gestureState(channelId[17]);
  const token = obj7.useToken(isScreenReaderEnabled(channelId[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
  function ie() {
    let items;
    let num2;
    let tmp4;
    let tmp7;
    let tmpResult6;
    let tmpResult7;
    let tmpResult9;
    let withSpring2;
    let withSpring3;
    let y;
    const withSpring = spring.withSpring;
    num = 0;
    spring;
    if (!sharedValue1.get().drawerMode) {
      num = token;
    }
    size = { borderBottomRightRadius: withSpring(num, c9), borderBottomLeftRadius: withSpring2(num2, tmp4), height: tmpResult6.withSpring(sharedValue1.get().height, authStore), width: tmpResult7.withSpring(sharedValue1.get().width, metroImportAll), marginLeft: withSpring3(-1 * tmp7(sharedValue1.get().width / 2), metroImportAll), transform: items };
    withSpring2 = spring.withSpring;
    num2 = 0;
    spring;
    tmp4 = c9;
    if (!sharedValue1.get().drawerMode) {
      num2 = token;
    }
    tmpResult6 = spring;
    tmpResult7 = spring;
    withSpring3 = spring.withSpring;
    spring;
    tmp7 = roundToNearestPixelDefault;
    const obj2 = { translateX: tmpResult9.withSpring(sharedValue1.get().x, metroImportDefault) };
    items = [obj2, ];
    tmpResult9 = spring;
    const withSpring4 = spring.withSpring;
    spring;
    if (sharedValue1.get().hidden) {
      const sum = obj.get().height + closure_12;
      y = sum + closure_9.get();
    } else {
      y = obj.get().y;
    }
    items[1] = { translateY: withSpring4(y, metroImportDefault) };
    ({ translateY: withSpring4(y, metroImportDefault) });
    return size;
  }
  const obj8 = gestureState(channelId[15]);
  let obj5 = { withSpring: gestureState(channelId[34]).withSpring, wrapperSpecs: sharedValue1, borderRadius: token, BORDER_RADIUS_PHYSICS, PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1, MODE_CHANGE_PHYSICS: openTab, roundToNearestPixel: isScreenReaderEnabled(channelId[43]), UI_SHOW_HIDE_PHYSICS: sharedValue, gestureState, CALL_TILE_GUTTER, accessoryHeights: tmp14 };
  ie.__closure = obj5;
  ie.__workletHash = 1684143820585;
  ie.__initData = __initData6;
  const animatedStyle = obj8.useAnimatedStyle(ie);
  ({ hiddenProps, hiddenStyles } = isScreenReaderEnabled(channelId[44])(mode, sharedValue1));
  const tmp22 = isScreenReaderEnabled(channelId[44])(mode, sharedValue1);
  const context1 = setControlsMode.useContext(isScreenReaderEnabled(channelId[14]));
  const controlsSpecs2 = context1.controlsSpecs;
  const windowDimensions = context1.windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  const safeArea = context1.safeArea;
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: false, active: false, drawerTransitionHeight: v200, interFloatingTransitionHeight };
  const obj10 = gestureState(channelId[15]);
  const sharedValue2 = obj10.useSharedValue(point);
  const obj12 = gestureState(channelId[15]);
  const sharedValue3 = obj12.useSharedValue(0);
  const obj13 = gestureState(channelId[15]);
  const sharedValue4 = obj13.useSharedValue(false);
  const obj14 = gestureState(channelId[15]);
  const sharedValue5 = obj14.useSharedValue(0);
  const ref = setControlsMode.useRef(undefined);
  const obj15 = gestureState(channelId[15]);
  const sharedValue6 = obj15.useSharedValue(false);
  const items3 = [ref, sharedValue4, sharedValue6, sharedValue5];
  const memo = setControlsMode.useMemo(() => ({ gestureRef: ref, scrollLocked: sharedValue6, scrollOffsetValue: sharedValue5, isDragScrolling: sharedValue4 }), items3);
  const tmp31 = isScreenReaderEnabled(channelId[16])();
  let closure_14 = tmp31;
  const obj16 = gestureState(channelId[17]);
  const token1 = obj16.useToken(isScreenReaderEnabled(channelId[10]).modules.mobile.VOICE_PANEL_GUTTER);
  const items4 = [controlsSpecs2, tmp31, sharedValue2, sharedValue4, openTab, safeArea, sharedValue6, sharedValue5, sharedValue, tab, sharedValue3, windowDimensions, wrapperDimensions, sharedValue1, token1];
  const memo1 = setControlsMode.useMemo(() => {
    const Gesture = gestureState(channelId[18]).Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    let result = maxPointersResult.shouldCancelWhenOutside(false);
    const withRefResult = result.withRef(ref);
    class M {
      constructor(absoluteX) {
        const result = sharedValue3.set(0);
        const point = { absoluteX: absoluteX.changedTouches[0].absoluteX, absoluteY: absoluteX.changedTouches[0].absoluteY, x: sharedValue1.get().x, y: sharedValue1.get().y, height: sharedValue1.get().height, isDrawer: controlsSpecs2.get().mode === token1.DRAWER, active: false, drawerTransitionHeight, interFloatingTransitionHeight };
        const result1 = sharedValue2.set(point);
      }
    }
    let obj = { touchMoveCount: sharedValue3, gestureSpecs: sharedValue2, wrapperSpecs: sharedValue1, controlsSpecs: controlsSpecs2, VoicePanelControlsModes, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT };
    M.__closure = obj;
    M.__workletHash = 3524850376026;
    M.__initData = __initData7;
    const onTouchesDownResult = withRefResult.onTouchesDown(M);
    class O {
      constructor() {
        const obj = first(sharedValue1[15]);
        obj.runOnJS(gestureLock.lock)();
      }
    }
    let obj2 = { runOnJS: gestureState(channelId[15]).runOnJS, gestureLock };
    O.__closure = obj2;
    O.__workletHash = 11720944776433;
    O.__initData = __initData6;
    const onStartResult = onTouchesDownResult.onStart(O);
    class I {
      constructor(state, fail) {
        let absoluteX;
        let absoluteY;
        if (state.state === first(sharedValue1[18]).State.BEGAN) {
          if (!sharedValue2.get().active) {
            if (controlsSpecs2.get().mode !== token1.HIDDEN) {
              let num2;
              const result = sharedValue3.set(sharedValue3.get() + 1);
              const value = sharedValue3.get() <= SCROLL_BEGIN_GRACE_TICKS || sharedValue4.get();
              const value2 = sharedValue.get();
              if ("settings" === value2) {
                num2 = sharedValue5.get();
              } else {
                num2 = 0;
              }
              ({ absoluteY, absoluteX } = state.changedTouches[0]);
              const diff = obj5.get().absoluteY - absoluteY;
              let tmp15 = obj.get().mode === tmp4.DRAWER && value;
              if (tmp15) {
                tmp15 = diff >= 0 || num2 > 0;
              }
              if (!tmp15) {
                if (controlsSpecs2.get().mode !== token1.FLOATING_DEFAULT) {
                  const _Math = Math;
                  const _Math2 = Math;
                  const absolute = Math.abs(diff);
                  if (absolute > Math.abs(30)) {
                    fail.fail();
                  }
                }
                const point = { absoluteX, absoluteY, x: closure_1_2.get().x, y: closure_1_2.get().y, height: closure_1_2.get().height, isDrawer: controlsSpecs2.get().mode === token1.DRAWER, active: true, drawerTransitionHeight, interFloatingTransitionHeight };
                set = sharedValue2.set;
                const result1 = set(point);
                const tmp23 = obj.get().mode !== tmp4.DRAWER && "settings" !== tab;
                if (tmp23) {
                  const obj2 = { tab: "settings", source: first(sharedValue1[19]).VoicePanelTabAnalyticsSources.GESTURE, disableControlsUpdate: true };
                  const tmpResult = first(sharedValue1[15]);
                  const runOnJSResult = tmpResult.runOnJS(openTab);
                  runOnJSResult(obj2);
                }
                const result2 = sharedValue6.set(true);
                fail.activate();
              }
            } else {
              fail.fail();
            }
          }
        }
      }
    }
    const obj3 = { State: gestureState(channelId[18]).State, gestureSpecs: sharedValue2, controlsSpecs: controlsSpecs2, VoicePanelControlsModes, touchMoveCount: sharedValue3, SCROLL_BEGIN_GRACE_TICKS, isDragScrolling: sharedValue4, sharedTab: sharedValue, scrollOffsetValue: sharedValue5, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: sharedValue1, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT, tab, runOnJS: gestureState(channelId[15]).runOnJS, openTab, VoicePanelTabAnalyticsSources: gestureState(channelId[19]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue6 };
    I.__closure = obj3;
    I.__workletHash = 13965683053434;
    I.__initData = __initData5;
    const fn = function h(absoluteY) {
      let getControlsDefaultWidth;
      let getControlsDrawerOpenWidth;
      let height;
      let width;
      let width2;
      const diff = absoluteY.absoluteY - sharedValue2.get().absoluteY;
      const diff1 = sharedValue2.get().height - sharedValue2.get().y - diff;
      if (diff1 > sharedValue2.get().drawerTransitionHeight) {
        if (!sharedValue2.get().isDrawer) {
          const obj2 = { isDrawer: true };
          set3 = sharedValue2.set;
          const merged = Object.assign(obj.get());
          set3(obj2);
        }
        const obj5 = { x: 0, y: 0, width: getControlsDrawerOpenWidth(width2, safeArea.get().left, safeArea.get().right), height: Math.min(diff1, wrapperDimensions.get().drawerHeight - height), drawerMode: true };
        const tmp27 = sharedValue(sharedValue1[20]);
        height = tmp27(safeArea.get(), token1).height;
        const set4 = closure_1_2.set;
        const merged1 = Object.assign(closure_1_2.get());
        getControlsDrawerOpenWidth = first(sharedValue1[21]).getControlsDrawerOpenWidth;
        first(sharedValue1[21]);
        width2 = windowDimensions.get().width;
        const _Math = Math;
        set4(obj5);
      } else {
        const result = diff1 / obj.get().drawerTransitionHeight;
        const height2 = controlsSpecs2.get().height;
        const _Math2 = Math;
        const result1 = -1 * Math.max(diff1 - safeArea.get().bottom - height2, 0);
        if (sharedValue2.get().isDrawer) {
          const obj6 = { isDrawer: false };
          set = sharedValue2.set;
          const merged2 = Object.assign(obj.get());
          const result2 = set(obj6);
        }
        const tmp6 = height2 === closure_1_2.get().height || closure_1_2.get().drawerMode;
        if (!tmp6) {
          const obj4 = first(sharedValue1[15]);
          const runOnJSResult = obj4.runOnJS(first(sharedValue1[22]).triggerHapticFeedback);
          runOnJSResult(first(sharedValue1[22]).HapticFeedbackTypes.IMPACT_MEDIUM);
        }
        const obj7 = { x: 0, y: -1 * safeArea.get().bottom + result1 * (1 - result / 1.5), width: getControlsDefaultWidth(width, safeArea.get().left, safeArea.get().right), height: height2, drawerMode: false };
        set2 = closure_1_2.set;
        const merged3 = Object.assign(obj3.get());
        getControlsDefaultWidth = first(sharedValue1[21]).getControlsDefaultWidth;
        first(sharedValue1[21]);
        width = windowDimensions.get().width;
        set2(obj7);
      }
    };
    const onTouchesMoveResult = onStartResult.onTouchesMove(I);
    let obj4 = { gestureSpecs: sharedValue2, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(channelId[20]), safeArea, edgeGutter: token1, wrapperSpecs: sharedValue1, getControlsDrawerOpenWidth: gestureState(channelId[21]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs: controlsSpecs2, runOnJS: gestureState(channelId[15]).runOnJS, triggerHapticFeedback: gestureState(channelId[22]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(channelId[22]).HapticFeedbackTypes, getControlsDefaultWidth: gestureState(channelId[21]).getControlsDefaultWidth };
    fn.__closure = obj4;
    fn.__workletHash = 10007030283382;
    fn.__initData = __initData4;
    const fn2 = function u() {
      const result = sharedValue6.set(false);
      const result1 = sharedValue4.set(false);
      const obj = { active: false };
      set = sharedValue2.set;
      const merged = Object.assign(sharedValue2.get());
      const result2 = set(obj);
      const obj2 = first(sharedValue1[15]);
      obj2.runOnJS(gestureLock.unlock)();
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn);
    let obj5 = { scrollLock: sharedValue6, isDragScrolling: sharedValue4, gestureSpecs: sharedValue2, runOnJS: gestureState(channelId[15]).runOnJS, gestureLock };
    fn2.__closure = obj5;
    fn2.__workletHash = 9808165597638;
    fn2.__initData = __initData3;
    const fn3 = function l(velocityY) {
      let FLOATING_DEFAULT;
      let drawerHeight;
      let tmp15;
      velocityY = velocityY.velocityY;
      const absolute = Math.abs(velocityY);
      if (absolute > 200) {
        if (velocityY < 0) {
          let DRAWER2;
          const obj = { height: drawerHeight - tmp15(safeArea.get(), closure_1_15).height };
          set = closure_1_2.set;
          const merged = Object.assign(closure_1_2.get());
          drawerHeight = wrapperDimensions.get().drawerHeight;
          tmp15 = sharedValue(sharedValue1[20]);
          const result = set(obj);
          if (controlsSpecs2.get().mode === token1.DRAWER) {
            DRAWER2 = token1.RESET;
          } else {
            DRAWER2 = token1.DRAWER;
          }
          FLOATING_DEFAULT = DRAWER2;
        }
        const result1 = sharedValue6.set(false);
        const result2 = sharedValue4.set(false);
        const obj2 = first(sharedValue1[15]);
        obj2.runOnJS(gestureLock.unlock)(FLOATING_DEFAULT);
      }
      if (absolute < 200) {
        if (sharedValue2.get().isDrawer) {
          let DRAWER;
          if (controlsSpecs2.get().mode === token1.DRAWER) {
            DRAWER = token1.RESET;
          } else {
            DRAWER = token1.DRAWER;
          }
          FLOATING_DEFAULT = DRAWER;
        }
      }
      if (controlsSpecs2.get().mode === token1.FLOATING_DEFAULT) {
        FLOATING_DEFAULT = token1.RESET;
      } else {
        FLOATING_DEFAULT = token1.FLOATING_DEFAULT;
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn2);
    let obj6 = { wrapperSpecs: sharedValue1, wrapperDimensions, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(channelId[20]), safeArea, edgeGutter: token1, controlsSpecs: controlsSpecs2, VoicePanelControlsModes, gestureSpecs: sharedValue2, scrollLock: sharedValue6, isDragScrolling: sharedValue4, runOnJS: gestureState(channelId[15]).runOnJS, gestureLock };
    fn3.__closure = obj6;
    fn3.__workletHash = 12106761920053;
    fn3.__initData = __initData2;
    const fn4 = function o() {
      const result = sharedValue6.set(false);
      const result1 = sharedValue4.set(false);
      const obj = first(sharedValue1[15]);
      obj.runOnJS(gestureLock.unlock)();
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn3);
    let obj7 = { scrollLock: sharedValue6, isDragScrolling: sharedValue4, runOnJS: gestureState(channelId[15]).runOnJS, gestureLock };
    fn4.__closure = obj7;
    fn4.__workletHash = 15918380969837;
    fn4.__initData = __initData;
    return onEndResult.onFinalize(fn4);
  }, items4);
  let fn = function u() {
    return sharedValue1.get().drawerMode;
  };
  fn.__closure = { wrapperSpecs: sharedValue1 };
  fn.__workletHash = 2949834828607;
  fn.__initData = __initData;
  let fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = gestureState(channelId[15]);
      const runOnJSResult = obj.runOnJS(gestureState(channelId[22]).triggerHapticFeedback);
      runOnJSResult(gestureState(channelId[22]).HapticFeedbackTypes.IMPACT_MEDIUM);
    }
  };
  const obj17 = gestureState(channelId[15]);
  fn2.__closure = { runOnJS: gestureState(channelId[15]).runOnJS, triggerHapticFeedback: gestureState(channelId[22]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(channelId[22]).HapticFeedbackTypes };
  fn2.__workletHash = 10186886451735;
  fn2.__initData = __initData2;
  ({ runOnJS: gestureState(channelId[15]).runOnJS, triggerHapticFeedback: gestureState(channelId[22]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(channelId[22]).HapticFeedbackTypes });
  const animatedReaction = obj17.useAnimatedReaction(fn, fn2);
  const obj19 = gestureState(channelId[23]);
  const isScreenReaderEnabled1 = obj19.useIsScreenReaderEnabled();
  const tmp36 = isScreenReaderEnabled(channelId[24])({ ignoreKeyboard: true });
  dependencyMap = tmp36;
  const context2 = setControlsMode.useContext(isScreenReaderEnabled(channelId[14]));
  const controlsSpecs3 = context2.controlsSpecs;
  const windowDimensions2 = context2.windowDimensions;
  const mode2 = context2.mode;
  const setControlsMode2 = context2.setControlsMode;
  const safeArea2 = context2.safeArea;
  const connected = context2.connected;
  let fn3 = function n() {
    const obj = { connected: connected.get(), currentControlsMode: controlsSpecs3.get().mode, mode: mode2.get(), windowWidth: windowDimensions2.get().width, windowHeight: windowDimensions2.get().height, windowHeightIgnoringKeyboard: closure_2.get().height, controlsHeightValue: controlsSpecs3.get().height, safeArea: safeArea2.get() };
    return obj;
  };
  fn3.__closure = { connected, controlsSpecs: controlsSpecs3, mode: mode2, windowDimensions: windowDimensions2, windowDimensionsIgnoringKeyboard: tmp36, safeArea: safeArea2 };
  fn3.__workletHash = 11588370229444;
  fn3.__initData = __initData3;
  let fn4 = function s(safeAreaState, currentControlsMode) {
    let controlsHeightValue;
    let maxHeight;
    let minHeight;
    let mode;
    let safeArea;
    let tmpResult5;
    let tmpResult8;
    let windowWidth;
    const cheapWorkletShallowEqual = gestureState(channelId[25]).cheapWorkletShallowEqual;
    gestureState(channelId[25]);
    const tmp4 = currentControlsMode;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
      ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
      if (token.DISMISSED !== mode) {
        if (token.PIP !== mode) {
          const PANEL = tmp6.PANEL;
          if (VoicePanelControlsModes.RESET === currentControlsMode) {
            let currentControlsMode1;
            const tmpResult = gestureState(channelId[15]);
            const runOnJSResult = tmpResult.runOnJS(setControlsMode2);
            if (currentControlsMode != null) {
              currentControlsMode1 = currentControlsMode.currentControlsMode;
            }
            if (currentControlsMode1 == null) {
              currentControlsMode1 = tmp26.FLOATING_DEFAULT;
            }
            const obj = { mode: currentControlsMode1 };
            runOnJSResult(obj);
          } else if (VoicePanelControlsModes.HIDDEN === currentControlsMode) {
            if (isScreenReaderEnabled1) {
              const obj2 = { hidden: false };
              const set4 = sharedValue1.set;
              const merged = Object.assign(obj6.get());
              set4(obj2);
            } else if (!sharedValue1.get().hidden) {
              const obj3 = { hidden: true };
              set3 = sharedValue1.set;
              const merged1 = Object.assign(obj6.get());
              set3(obj3);
            }
          } else if (VoicePanelControlsModes.FLOATING_DEFAULT === currentControlsMode) {
            size = { x: 0, y: -1 * Math.max(safeArea.bottom, closure_13), width: tmpResult5.getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right), height: controlsHeightValue, drawerMode: false, hidden: false };
            const _Math = Math;
            set2 = sharedValue1.set;
            tmpResult5 = gestureState(channelId[21]);
            set2(size);
          } else if (VoicePanelControlsModes.DRAWER === currentControlsMode) {
            const tmpResult6 = gestureState(channelId[26]);
            const drawerSpec = tmpResult6.getDrawerSpec(tmp5, safeArea.top);
            ({ minHeight, maxHeight } = drawerSpec);
            if (sharedValue1.get().height <= controlsHeightValue) {
              minHeight = maxHeight;
            } else if (null != currentControlsMode) {
              const height = obj14.get().height;
              gestureState(channelId[26]);
            }
            const size1 = { x: 0, y: 0, width: tmpResult8.getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right), height: minHeight, drawerMode: true, hidden: false };
            set = sharedValue1.set;
            tmpResult8 = gestureState(channelId[21]);
            const result = set(size1);
          }
        }
      }
      if (!sharedValue1.get().hidden) {
        const obj4 = { hidden: true };
        const set5 = sharedValue1.set;
        const merged2 = Object.assign(obj11.get());
        set5(obj4);
      }
    }
  };
  const obj20 = gestureState(channelId[15]);
  const obj11 = { cheapWorkletShallowEqual: gestureState(channelId[25]).cheapWorkletShallowEqual, VoicePanelModes: token, wrapperSpecs: sharedValue1, VoicePanelControlsModes, runOnJS: gestureState(channelId[15]).runOnJS, setControlsMode: setControlsMode2, isScreenReaderEnabled: isScreenReaderEnabled1, EDGE_GUTTER, getControlsDefaultWidth: gestureState(channelId[21]).getControlsDefaultWidth, getDrawerSpec: gestureState(channelId[26]).getDrawerSpec, getControlsDrawerOpenWidth: gestureState(channelId[21]).getControlsDrawerOpenWidth };
  fn4.__closure = obj11;
  fn4.__workletHash = 1154430392188;
  fn4.__initData = __initData4;
  const animatedReaction1 = obj20.useAnimatedReaction(fn3, fn4);
  const tmp39 = controlsSpecs(setControlsMode.useState(false), 2);
  CALL_TILE_GUTTER = tmp41;
  const first1 = tmp39[0];
  const obj22 = gestureState(channelId[15]);
  class Ce {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  Ce.__closure = { controlsSpecs };
  Ce.__workletHash = 12841804697749;
  Ce.__initData = __initData7;
  class Ee {
    constructor(arg0, arg1) {
      const tmp = arg0 !== arg1 && isScreenReaderEnabled;
      if (tmp) {
        if (arg0 === VoicePanelControlsModes.DRAWER) {
          if (arg1 !== VoicePanelControlsModes.DRAWER) {
            const obj2 = ReanimatedRexport;
            obj2.runOnJS(closure_12)(true);
          }
        }
        const tmp3 = arg0 !== VoicePanelControlsModes.DRAWER && arg1 === VoicePanelControlsModes.DRAWER;
        if (tmp3) {
          const obj = ReanimatedRexport;
          obj.runOnJS(closure_12)(false);
        }
      }
    }
  }
  Ee.__closure = { isScreenReaderEnabled, VoicePanelControlsModes, runOnJS: gestureState(channelId[15]).runOnJS, setIsDrawer: tmp39[1] };
  Ee.__workletHash = 1065348199900;
  Ee.__initData = __initData8;
  ({ isScreenReaderEnabled, VoicePanelControlsModes, runOnJS: gestureState(channelId[15]).runOnJS, setIsDrawer: tmp39[1] });
  const animatedReaction2 = obj22.useAnimatedReaction(Ce, Ee);
  const tmp43 = controlsSpecs(setControlsMode.useState(false), 2);
  EDGE_GUTTER = tmp45;
  const first2 = tmp43[0];
  const obj24 = gestureState(channelId[15]);
  class Re {
    constructor() {
      return sharedValue1.get().drawerMode;
    }
  }
  Re.__closure = { wrapperSpecs: sharedValue1 };
  Re.__workletHash = 1707616584768;
  Re.__initData = __initData9;
  class Ie {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        const runOnJSResult = obj.runOnJS(closure_13);
        if (arg0) {
          runOnJSResult(true);
        } else {
          runOnJSResult(false);
        }
      }
    }
  }
  Ie.__closure = { runOnJS: gestureState(channelId[15]).runOnJS, setIsDrawerActive: tmp43[1] };
  Ie.__workletHash = 4134397877805;
  Ie.__initData = __initData10;
  ({ runOnJS: gestureState(channelId[15]).runOnJS, setIsDrawerActive: tmp43[1] });
  const animatedReaction3 = obj24.useAnimatedReaction(Re, Ie);
  const items5 = [setControlsMode];
  const id = setControlsMode.useId();
  const callback1 = setControlsMode.useCallback(() => {
    const obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
    setControlsMode(obj);
  }, items5);
  const obj23 = { value: memo, children: items6 };
  const Provider = gestureState(channelId[45]).ControlsGestureScrollLock.Provider;
  items6 = [closure_18(isScreenReaderEnabled(channelId[46]), { wrapperSpecs: sharedValue1 }), closure_18(closure_37, { channelId, wrapperSpecs: sharedValue1, controlsSpecs, accessoryHeights: tmp14, gestureState }), ];
  const obj25 = { nativeID: id, style: tmp6.accessibilityWrapper, accessibilityViewIsModal: first1, onAccessibilityEscape: callback1, pointerEvents: "box-none", children: closure_18(GestureDetector, obj26) };
  obj26 = { gesture: memo1, children: closure_20(tmp52, obj27) };
  const tmp51 = isScreenReaderEnabled(channelId[47]);
  GestureDetector = gestureState(channelId[18]).GestureDetector;
  obj27 = { style: items7, animatedProps: hiddenProps, children: items9 };
  items7 = [tmp6.wrapper, animatedStyle, hiddenStyles];
  let ONYX;
  tmp52 = isScreenReaderEnabled(channelId[35]);
  const ThemeContextProvider = gestureState(channelId[29]).ThemeContextProvider;
  if (tmp11) {
    if (!first2) {
      ONYX = constants2.ONYX;
    }
  }
  const obj28 = { theme: ONYX, children: items8 };
  items8 = [, ];
  const obj29 = { matchAppTheme: !tmp11 };
  items8[0] = closure_18(tmp(tmp2[48]).VoicePanelVisualEffectView, obj29);
  items8[1] = closure_18(closure_39, { openTab, wrapperSpecs: sharedValue1, sharedTab: sharedValue });
  items9 = [closure_20(ThemeContextProvider, obj28), closure_18(tmp4(tmp2[49]), { wrapperSpecs: sharedValue1, tab, sharedTab: sharedValue, gestureSpecs: sharedValue2, openTab }), ];
  let tmpResult = tmp(tmp2[11]);
  let tmp50Result = null;
  if (!tmpResult.isMetaQuest()) {
    const obj30 = { openTab };
    tmp50Result = tmp50(closure_25, obj30);
  }
  items9[2] = tmp50Result;
  items6[2] = closure_18(tmp51, obj25);
  return closure_20(Provider, obj23);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default memoResult;
