// Module ID: 15713
// Function ID: 120092
// Dependencies: [9883, 2, 4140, 4141, 8926, 624, 15718, 9046, 15719, 15720, 2, 57, 31, 1348, 10006, 10009, 482, 33, 1324, 689, 4126, 4537, 7492, 3840, 10005, 15615, 5798, 624, 15611, 3989, 11367, 4472, 9883, 4538, 7582, 9634, 2, 31, 10006, 10009, 10004, 33, 4126, 689, 10005, 15717, 3989, 4472, 15723, 4538, 5515, 1273, 4124]

// Module 15713
import closure_3 from "t";
import importAllResult from "result2";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import useVoiceStateForRemoteSession from "useVoiceStateForRemoteSession";
import defaultAreStatesEqual from "defaultAreStatesEqual";
import shouldDisplayCancel from "shouldDisplayCancel";
import PlatformTypes from "PlatformTypes";
import getConsoleConnectingText from "getConsoleConnectingText";
import getConsoleColor from "getConsoleColor";
import _slicedToArray from "_slicedToArray";
import Text from "Text";

const View = _isNativeReflectConstruct.View;
({ UI_SHOW_HIDE_PHYSICS: closure_7, MODE_CHANGE_PHYSICS: closure_8, BORDER_RADIUS_PHYSICS: closure_9, PANEL_CONTROLS_HEIGHT_PHYSICS: closure_10, VoicePanelModes: closure_11 } = useVoiceStateForRemoteSession);
let num = 5;
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: closure_13 } = defaultAreStatesEqual);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } = shouldDisplayCancel);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = PlatformTypes);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = getConsoleConnectingText);
let obj = {};
obj = {};
const merged = Object.assign(_isNativeReflectConstruct.StyleSheet.absoluteFillObject);
obj["zIndex"] = 1;
obj.accessibilityWrapper = obj;
getConsoleColor = { borderRadius: require("result2").modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
obj.wrapper = getConsoleColor;
const obj2 = { -783165016: "5de2b08de99a642bedb9972f5a6793f2", 1383489899: "el.messages.5de2b08de99a642bedb9972f5a6793f2.compiled.messages", -1287393223: "jsona", 1991210072: true, 2108357039: "/assets/.cache/intl/bW9kdWxlcy9pbnRs", 581925551: null, -1062242264: "72ad0b4b960146a110960dea1a6ad5e5", marginHorizontal: require("result2").space.PX_16 };
obj.buttonsWrapper = obj2;
obj.actionSheetDragHandleWrapper = { -324479661: true, 1392981258: true, -1400267819: true, -715936620: true, 1806469531: true };
let closure_21 = getConsoleColor.createStyles(obj);
if (_slicedToArray.isMetaQuest()) {
  num = 15;
}
let closure_23 = importAllResult.memo((openTab) => {
  let accessibilityLabel;
  let ariaHidden;
  let handlePress;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[12])(openTab.openTab);
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return callback2(View, { style: tmp.actionSheetDragHandleWrapper, children: callback2(arg1(dependencyMap[13]).ActionSheetDragHandle, { onPress: handlePress, overlay: true, accessibilityLabel, aria-hidden: ariaHidden }) });
});
let closure_24 = { code: "function VoicePanelControlsTsx1(){const{scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)();}" };
let closure_25 = { code: "function VoicePanelControlsTsx2({velocityY:velocityY}){const{wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)(resultingControlMode);}" };
let closure_26 = { code: "function VoicePanelControlsTsx3(){const{scrollLock,isDragScrolling,gestureSpecs,runOnJS,gestureLock}=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});runOnJS(gestureLock.unlock)();}" };
let closure_27 = { code: "function VoicePanelControlsTsx4(event){const{gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth}=this.__closure;const change=event.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}}" };
let closure_28 = { code: "function VoicePanelControlsTsx5(event,manager){const{State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,runOnJS,openTab,VoicePanelTabAnalyticsSources,scrollLock}=this.__closure;if(event.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){runOnJS(openTab)({tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}}" };
let closure_29 = { code: "function VoicePanelControlsTsx6(){const{runOnJS,gestureLock}=this.__closure;runOnJS(gestureLock.lock)();}" };
let closure_30 = { code: "function VoicePanelControlsTsx7(event){const{touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT}=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});}" };
let closure_31 = { code: "function VoicePanelControlsTsx8(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
let closure_32 = { code: "function VoicePanelControlsTsx9(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
let closure_33 = { code: "function VoicePanelControlsTsx10(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}" };
let closure_34 = { code: "function VoicePanelControlsTsx11(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}}" };
let closure_35 = importAllResult.memo((controlsSpecs) => {
  let channelId;
  let wrapperSpecs;
  ({ channelId, wrapperSpecs } = controlsSpecs);
  const arg1 = wrapperSpecs;
  controlsSpecs = controlsSpecs.controlsSpecs;
  const importDefault = controlsSpecs;
  const accessoryHeights = controlsSpecs.accessoryHeights;
  const dependencyMap = accessoryHeights;
  const gestureState = controlsSpecs.gestureState;
  let closure_3 = gestureState;
  let obj = arg1(dependencyMap[28]);
  const shouldShowFloatingCTA = obj.useShouldShowFloatingCTA(channelId);
  const tmp2 = importDefault(dependencyMap[17])();
  const tmp3 = importDefault(dependencyMap[29])(channelId);
  const isConnectingToConsole = tmp3.isConnectingToConsole;
  const View = isConnectingToConsole;
  const items = [wrapperSpecs, controlsSpecs, accessoryHeights, gestureState];
  const memo = importAllResult.useMemo(() => ({ wrapperSpecs, controlsSpecs, accessoryHeights, gestureState }), items);
  const items1 = [isConnectingToConsole, tmp2];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (isConnectingToConsole) {
      obj.lock();
    } else {
      obj.unlock();
    }
  }, items1);
  obj = {};
  obj = {};
  let tmp9;
  if (shouldShowFloatingCTA) {
    tmp9 = memo;
  }
  obj.item = tmp9;
  obj.renderItem = arg1(dependencyMap[31]).renderVoicePanelFloatingCTA;
  const items2 = [closure_18(arg1(dependencyMap[30]).TransitionItem, obj), ];
  const obj1 = {};
  let tmp11;
  if (tmp3.isConnectingOrConnectedToConsole) {
    tmp11 = memo;
  }
  obj1.item = tmp11;
  obj1.renderItem = arg1(dependencyMap[32]).renderVoicePanelConsoleStatus;
  items2[1] = closure_18(arg1(dependencyMap[30]).TransitionItem, obj1);
  obj.children = items2;
  return closure_20(closure_19, obj);
});
let closure_36 = { code: "function VoicePanelControlsTsx12(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}" };
let closure_37 = importAllResult.memo(function VoicePanelButtonsInner(sharedTab) {
  let wrapperSpecs;
  ({ openTab: closure_0, wrapperSpecs } = sharedTab);
  const importDefault = wrapperSpecs;
  sharedTab = sharedTab.sharedTab;
  const dependencyMap = sharedTab;
  const ref = importAllResult.useRef(true);
  let closure_3 = ref;
  const tmp2 = importDefault(dependencyMap[33])(ref);
  const context = importAllResult.useContext(importDefault(dependencyMap[14]));
  const controlsSpecs = context.controlsSpecs;
  const connected = context.connected;
  const View = connected;
  const tmp3 = callback3();
  let obj = arg1(dependencyMap[15]);
  const fn = function c() {
    let pushToTalk = controlsSpecs.get().pushToTalk;
    if (pushToTalk) {
      pushToTalk = connected.get();
    }
    if ("settings" === sharedTab.get()) {
      if (wrapperSpecs.get().height >= 200) {
        let height = closure_14;
      }
      let num2 = 0;
      if ("settings" !== sharedTab.get()) {
        num2 = 0;
        if (wrapperSpecs.get().height >= 200) {
          num2 = -controlsSpecs.get().height;
        }
      }
      let obj = {};
      let num4 = 0;
      if (pushToTalk) {
        num4 = -4;
      }
      obj.top = num4;
      obj.height = callback(sharedTab[35]).withSpring(height, closure_8);
      const obj2 = callback(sharedTab[35]);
      let num7 = 1;
      if ("settings" !== sharedTab.get()) {
        num7 = 1;
        if (wrapperSpecs.get().height >= 200) {
          num7 = 0;
        }
      }
      obj.opacity = callback(sharedTab[35]).withSpring(num7, closure_8);
      obj = {};
      const obj3 = callback(sharedTab[35]);
      obj.translateY = callback(sharedTab[35]).withSpring(num2, closure_8);
      const items = [obj, ];
      obj = {};
      const obj5 = callback(sharedTab[35]);
      let num9 = 1;
      if ("settings" !== sharedTab.get()) {
        num9 = 1;
        if (wrapperSpecs.get().height >= 200) {
          num9 = 0.95;
        }
      }
      obj.scale = callback(sharedTab[35]).withSpring(num9, closure_8);
      items[1] = obj;
      obj.transform = items;
      return obj;
    }
    height = controlsSpecs.get().height;
  };
  obj = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, withSpring: arg1(dependencyMap[35]).withSpring, MODE_CHANGE_PHYSICS: closure_8 };
  fn.__closure = obj;
  fn.__workletHash = 17578996123721;
  fn.__initData = closure_36;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    ref.current = false;
  }, []);
  obj = { skipEntering: tmp2 };
  const obj1 = { style: items };
  const items = [tmp3.buttonsWrapper, animatedStyle];
  const arr = importDefault(dependencyMap[34])();
  obj1.children = arr.map((props) => props.render(props.key, { props, openTab: closure_0, wrapperSpecs }));
  obj.children = callback2(importDefault(dependencyMap[36]), obj1);
  return callback2(arg1(dependencyMap[15]).LayoutAnimationConfig, obj);
});
let closure_38 = { code: "function VoicePanelControlsTsx13(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,useReducedMotion,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),opacity:withSpring(wrapperSpecs.get().hidden?0:1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop)?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_39 = { code: "function VoicePanelControlsTsx14(){const{mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}" };
let closure_40 = { code: "function VoicePanelControlsTsx15(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
let closure_41 = { code: "function VoicePanelControlsTsx16(mode,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}" };
let closure_42 = { code: "function VoicePanelControlsTsx17(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
let closure_43 = { code: "function VoicePanelControlsTsx18(drawerMode,previousDrawerMode){const{isRefreshEnabled,runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(!isRefreshEnabled)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}" };
const result = Text.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default importAllResult.memo(function VoicePanelControls(gestureState) {
  let gesture;
  let gestureSpecs;
  let useScrollLock;
  gestureState = gestureState.gestureState;
  const arg1 = gestureState;
  let obj = arg1(dependencyMap[24]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const importDefault = isScreenReaderEnabled;
  const tmp2 = importDefault(dependencyMap[37])("VoicePanelControls");
  const dependencyMap = tmp2;
  const context = importAllResult.useContext(importDefault(dependencyMap[14]));
  const channelId = context.channelId;
  let callback = channelId;
  const controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const View = mode;
  const setControlsMode = context.setControlsMode;
  let closure_6 = setControlsMode;
  const useReducedMotion = context.useReducedMotion;
  const tmp4 = callback3();
  const tmp5 = callback(controlsSpecs.useState(null), 2);
  const first = tmp5[0];
  let closure_9 = tmp5[1];
  let obj1 = arg1(dependencyMap[15]);
  const sharedValue = obj1.useSharedValue(first);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const result = sharedValue.set(first);
  });
  const tmp9 = importDefault(dependencyMap[38])(channelId);
  let obj2 = arg1(dependencyMap[39]);
  const maybeFetchSoundboardSounds = obj2.useMaybeFetchSoundboardSounds({ shouldFetch: tmp9 });
  const items = [channelId, controlsSpecs, setControlsMode];
  callback = importAllResult.useCallback((controlsProps) => {
    let disableControlsUpdate;
    ({ tab: closure_0, source: closure_1, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    const channelId = controlsProps.controlsProps;
    gestureState(disableControlsUpdate[40]).batchUpdates(() => {
      let closure_0 = false;
      callback3((arg0) => {
        closure_0 = arg0 !== closure_0;
        return closure_0;
      });
      if (!disableControlsUpdate) {
        const obj = { mode: constants.DRAWER };
        const merged = Object.assign(controlsProps);
        callback2(obj);
      }
      let tmp9 = closure_0;
      if (!closure_0) {
        tmp9 = tmp;
      }
      if (tmp9) {
        callback(disableControlsUpdate[20])(controlsProps, closure_0, callback);
      }
    });
  }, items);
  const tmp12 = importDefault(dependencyMap[41])();
  const items1 = [channelId, controlsSpecs, callback, first];
  const layoutEffect1 = importAllResult.useLayoutEffect(() => {
    function handleStoreChange() {
      const chatOpen = closure_6.getChatOpen(closure_3);
      if (chatOpen !== chatOpen) {
        if (chatOpen) {
          let obj = { tab: "chat", source: chatOpen(closure_2[20]).VoicePanelTabAnalyticsSources.STORE };
          obj = { debounce: true };
          obj.controlsProps = obj;
          callback(obj);
        }
      }
    }
    const isScreenReaderEnabled = handleStoreChange;
    handleStoreChange();
    setControlsMode.addChangeListener(handleStoreChange);
    return () => {
      closure_6.removeChangeListener(handleStoreChange);
    };
  }, items1);
  const items2 = [callback];
  const effect = importAllResult.useEffect(() => {
    function handleOpenChatTab(arg0) {
      callback({ tab: "chat", source: handleOpenChatTab(closure_2[20]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
    }
    const gestureState = handleOpenChatTab;
    const ComponentDispatch = gestureState(tmp2[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(tmp25.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    return () => {
      const ComponentDispatch = handleOpenChatTab(closure_2[42]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    };
  }, items2);
  let obj3 = arg1(dependencyMap[43]);
  const rect = obj3.getSafeAreaInsets();
  let obj4 = arg1(dependencyMap[15]);
  obj = {};
  let obj6 = arg1(dependencyMap[22]);
  let obj7 = arg1(dependencyMap[44]);
  obj.width = obj6.getControlsDefaultWidth(obj7.getWindowDimensions().width, rect.left, rect.right);
  const sharedValue1 = obj4.useSharedValue(obj);
  let obj8 = arg1(dependencyMap[18]);
  const token = obj8.useToken(importDefault(dependencyMap[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
  let obj9 = arg1(dependencyMap[15]);
  function ge() {
    let obj = {};
    let num = 0;
    if (!sharedValue1.get().drawerMode) {
      num = token;
    }
    obj.borderBottomRightRadius = gestureState(tmp2[35]).withSpring(num, closure_9);
    const obj2 = gestureState(tmp2[35]);
    let num2 = 0;
    if (!sharedValue1.get().drawerMode) {
      num2 = token;
    }
    obj.borderBottomLeftRadius = gestureState(tmp2[35]).withSpring(num2, closure_9);
    const obj3 = gestureState(tmp2[35]);
    obj.height = gestureState(tmp2[35]).withSpring(sharedValue1.get().height, sharedValue);
    const obj4 = gestureState(tmp2[35]);
    obj.width = gestureState(tmp2[35]).withSpring(sharedValue1.get().width, first);
    const obj5 = gestureState(tmp2[35]);
    const obj6 = gestureState(tmp2[35]);
    obj.marginLeft = obj6.withSpring(-1 * isScreenReaderEnabled(tmp2[45])(sharedValue1.get().width / 2), first);
    const tmp = isScreenReaderEnabled(tmp2[45]);
    let num3 = 1;
    if (sharedValue1.get().hidden) {
      num3 = 0;
    }
    obj.opacity = gestureState(tmp2[35]).withSpring(num3, first);
    obj = {};
    const obj7 = gestureState(tmp2[35]);
    obj.translateX = gestureState(tmp2[35]).withSpring(sharedValue1.get().x, useReducedMotion);
    const items = [obj, ];
    obj = {};
    const obj9 = gestureState(tmp2[35]);
    if (useReducedMotion.get()) {
      let y = sharedValue1.get().y;
    } else if (sharedValue1.get().hidden) {
      const sum = sharedValue1.get().height + tmp12;
      y = sum + tmp12.get();
    }
    obj.translateY = gestureState(tmp2[35]).withSpring(y, useReducedMotion);
    items[1] = obj;
    obj.transform = items;
    return obj;
  }
  obj = { withSpring: arg1(dependencyMap[35]).withSpring, wrapperSpecs: sharedValue1, borderRadius: token, BORDER_RADIUS_PHYSICS: closure_9, PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue, MODE_CHANGE_PHYSICS: first, roundToNearestPixel: importDefault(dependencyMap[45]), UI_SHOW_HIDE_PHYSICS: useReducedMotion, useReducedMotion, gestureState, CALL_TILE_GUTTER: tmp12, accessoryHeights: tmp12 };
  ge.__closure = obj;
  ge.__workletHash = 14734014706335;
  ge.__initData = closure_38;
  const animatedStyle = obj9.useAnimatedStyle(ge);
  function de() {
    const obj = {};
    if (mode.get() !== callback.PANEL) {
      let str = "none";
    } else {
      str = "auto";
    }
    obj.pointerEvents = str;
    return obj;
  }
  obj1 = { mode, VoicePanelModes: callback, wrapperSpecs: sharedValue1 };
  de.__closure = obj1;
  de.__workletHash = 5608048435620;
  de.__initData = closure_39;
  const animatedProps = arg1(dependencyMap[15]).useAnimatedProps(de);
  const obj12 = arg1(dependencyMap[15]);
  ({ gesture, useScrollLock, gestureSpecs } = function useControlsGesture(first, sharedValue, sharedValue1, callback) {
    const gestureState = first;
    const isScreenReaderEnabled = sharedValue;
    const channelId = callback;
    const context = controlsSpecs.useContext(isScreenReaderEnabled(tmp2[14]));
    const controlsSpecs = context.controlsSpecs;
    const windowDimensions = context.windowDimensions;
    const mode = windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const setControlsMode = wrapperDimensions;
    const safeArea = context.safeArea;
    const useReducedMotion = safeArea;
    let obj = gestureState(tmp2[15]);
    const gestureSpecs = obj.useSharedValue({ "Bool(true)": 0.124, "Bool(true)": 1, "Bool(true)": "Enable Application Identity Linked Roles", "Bool(true)": 0, "Bool(true)": 40, "Bool(true)": 4, "Bool(true)": "Star", "Bool(true)": 1, "Bool(true)": 1 });
    first = gestureSpecs;
    sharedValue1 = gestureState(sharedValue1[15]).useSharedValue(0);
    let closure_9 = sharedValue1;
    const obj2 = gestureState(sharedValue1[15]);
    const sharedValue2 = gestureState(sharedValue1[15]).useSharedValue(false);
    sharedValue = sharedValue2;
    const obj3 = gestureState(sharedValue1[15]);
    const sharedValue3 = gestureState(sharedValue1[15]).useSharedValue(0);
    callback = sharedValue3;
    let closure_12 = controlsSpecs.useRef(undefined);
    const obj4 = gestureState(sharedValue1[15]);
    const sharedValue4 = gestureState(sharedValue1[15]).useSharedValue(false);
    sharedValue1 = sharedValue4;
    const tmp7 = isScreenReaderEnabled(sharedValue1[17])();
    let token = tmp7;
    const obj5 = gestureState(sharedValue1[15]);
    token = gestureState(sharedValue1[18]).useToken(isScreenReaderEnabled(tmp2[10]).modules.mobile.VOICE_PANEL_GUTTER);
    const items = [controlsSpecs, tmp7, gestureSpecs, sharedValue2, callback, safeArea, sharedValue4, sharedValue3, sharedValue, first, sharedValue1, windowDimensions, wrapperDimensions, sharedValue1, token];
    const gesture = controlsSpecs.useMemo(() => {
      const Gesture = arg0(arg2[19]).Gesture;
      const PanResult = Gesture.Pan();
      const manualActivationResult = Gesture.Pan().manualActivation(true);
      const result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
      const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
      const fn = function b(absoluteX) {
        const result = store7.set(0);
        const result1 = store6.set({ absoluteX: absoluteX.changedTouches[0].absoluteX, absoluteY: absoluteX.changedTouches[0].absoluteY, x: store.get().x, y: store.get().y, height: store.get().height, isDrawer: store2.get().mode === constants.DRAWER, active: false, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 });
      };
      let obj = { touchMoveCount: sharedValue1, gestureSpecs, wrapperSpecs: arg2, controlsSpecs, VoicePanelControlsModes: token, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200 };
      fn.__closure = obj;
      fn.__workletHash = 3524850376026;
      fn.__initData = closure_30;
      const withRefResult = result.withRef(closure_12);
      class R {
        constructor() {
          obj = closure_0(closure_2[15]);
          tmp = obj.runOnJS(closure_14.lock)();
          return;
        }
      }
      obj = { runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      R.__closure = obj;
      R.__workletHash = 11720944776433;
      R.__initData = closure_29;
      const onTouchesDownResult = result.withRef(closure_12).onTouchesDown(fn);
      const fn2 = function h(state, fail) {
        if (state.state === callback(store[19]).State.BEGAN) {
          if (!store6.get().active) {
            if (store2.get().mode !== constants.HIDDEN) {
              const result = store7.set(store7.get() + 1);
              let value = store7.get() <= closure_22;
              if (!value) {
                value = store8.get();
              }
              value = lib.get();
              if ("settings" === value) {
                let num2 = closure_11.get();
              } else {
                num2 = 0;
              }
              const first = state.changedTouches[0];
              const absoluteY = first.absoluteY;
              const diff = store6.get().absoluteY - absoluteY;
              let tmp17 = store2.get().mode === constants.DRAWER && value;
              if (tmp17) {
                tmp17 = diff >= 0 || num2 > 0;
                const tmp18 = diff >= 0 || num2 > 0;
              }
              if (!tmp17) {
                if (store2.get().mode !== constants.FLOATING_DEFAULT) {
                  const _Math = Math;
                  const _Math2 = Math;
                  const absolute = Math.abs(diff);
                  if (absolute > Math.abs(30)) {
                    fail.fail();
                  }
                }
                let obj = { absoluteX: first.absoluteX, absoluteY, x: store.get().x, y: store.get().y, height: store.get().height, isDrawer: store2.get().mode === constants.DRAWER, active: true, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 };
                const result1 = store6.set(obj);
                let tmp30 = store2.get().mode !== constants.DRAWER;
                if (tmp30) {
                  tmp30 = "settings" !== callback;
                }
                if (tmp30) {
                  obj = { 0: true, 0: "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL2d1aWxkX3RoZW1lL3dlYg==", 9223372036854775807: null };
                  const obj2 = callback(store[15]);
                  obj.source = callback(store[20]).VoicePanelTabAnalyticsSources.GESTURE;
                  callback(store[15]).runOnJS(closure_3)(obj);
                  const runOnJSResult = callback(store[15]).runOnJS(closure_3);
                }
                const result2 = store9.set(true);
                fail.activate();
              }
            } else {
              fail.fail();
            }
          }
        }
      };
      const onStartResult = result.withRef(closure_12).onTouchesDown(fn).onStart(R);
      fn2.__closure = { State: arg0(arg2[19]).State, gestureSpecs, controlsSpecs, VoicePanelControlsModes: token, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: closure_22, isDragScrolling: sharedValue2, sharedTab: arg1, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: arg2, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200, tab: arg0, runOnJS: arg0(arg2[15]).runOnJS, openTab: arg3, VoicePanelTabAnalyticsSources: arg0(arg2[20]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
      fn2.__workletHash = 13965683053434;
      fn2.__initData = closure_28;
      const obj1 = { State: arg0(arg2[19]).State, gestureSpecs, controlsSpecs, VoicePanelControlsModes: token, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: closure_22, isDragScrolling: sharedValue2, sharedTab: arg1, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: arg2, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200, tab: arg0, runOnJS: arg0(arg2[15]).runOnJS, openTab: arg3, VoicePanelTabAnalyticsSources: arg0(arg2[20]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
      const fn3 = function p(absoluteY) {
        const diff = absoluteY.absoluteY - store6.get().absoluteY;
        const diff1 = store6.get().height - store6.get().y - diff;
        if (diff1 > store6.get().drawerTransitionHeight) {
          if (!store6.get().isDrawer) {
            let obj = {};
            const merged = Object.assign(store6.get());
            obj["isDrawer"] = true;
            const result = store6.set(obj);
          }
          obj = {};
          const merged1 = Object.assign(store.get());
          obj["x"] = 0;
          obj["y"] = 0;
          const tmp28 = lib(store[21]);
          obj["width"] = callback(store[22]).getControlsDrawerOpenWidth(store3.get().width, store5.get().left, store5.get().right);
          const _Math = Math;
          obj["height"] = Math.min(diff1, store4.get().drawerHeight - tmp28(store5.get(), closure_15).height);
          obj["drawerMode"] = true;
          const result1 = store.set(obj);
          const obj7 = callback(store[22]);
        } else {
          const result2 = diff1 / store6.get().drawerTransitionHeight;
          const height = store2.get().height;
          const _Math2 = Math;
          const result3 = -1 * Math.max(diff1 - store5.get().bottom - height, 0);
          if (store6.get().isDrawer) {
            obj = {};
            const merged2 = Object.assign(store6.get());
            obj["isDrawer"] = false;
            const result4 = store6.set(obj);
          }
          let drawerMode = height === store.get().height;
          if (!drawerMode) {
            drawerMode = store.get().drawerMode;
          }
          if (!drawerMode) {
            let obj1 = callback(store[15]);
            obj1.runOnJS(callback(store[23]).triggerHapticFeedback)(callback(store[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
            const runOnJSResult = obj1.runOnJS(callback(store[23]).triggerHapticFeedback);
          }
          obj1 = {};
          const merged3 = Object.assign(store.get());
          obj1["x"] = 0;
          obj1["y"] = -1 * store5.get().bottom + result3 * (1 - result2 / 1.5);
          obj1["width"] = callback(store[22]).getControlsDefaultWidth(store3.get().width, store5.get().left, store5.get().right);
          obj1["height"] = height;
          obj1["drawerMode"] = false;
          const result5 = store.set(obj1);
          const obj4 = callback(store[22]);
        }
      };
      const onTouchesMoveResult = onStartResult.onTouchesMove(fn2);
      fn3.__closure = { gestureSpecs, calculateVoicePanelHeaderSpecs: arg1(arg2[21]), safeArea, edgeGutter: token, wrapperSpecs: arg2, getControlsDrawerOpenWidth: arg0(arg2[22]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: arg0(arg2[15]).runOnJS, triggerHapticFeedback: arg0(arg2[23]).triggerHapticFeedback, HapticFeedbackTypes: arg0(arg2[23]).HapticFeedbackTypes, getControlsDefaultWidth: arg0(arg2[22]).getControlsDefaultWidth };
      fn3.__workletHash = 10007030283382;
      fn3.__initData = closure_27;
      const obj2 = { gestureSpecs, calculateVoicePanelHeaderSpecs: arg1(arg2[21]), safeArea, edgeGutter: token, wrapperSpecs: arg2, getControlsDrawerOpenWidth: arg0(arg2[22]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: arg0(arg2[15]).runOnJS, triggerHapticFeedback: arg0(arg2[23]).triggerHapticFeedback, HapticFeedbackTypes: arg0(arg2[23]).HapticFeedbackTypes, getControlsDefaultWidth: arg0(arg2[22]).getControlsDefaultWidth };
      const fn4 = function u() {
        const result = store9.set(false);
        const result1 = store8.set(false);
        const obj = {};
        const merged = Object.assign(store6.get());
        obj["active"] = false;
        const result2 = store6.set(obj);
        callback(closure_2[15]).runOnJS(closure_14.unlock)();
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn3);
      fn4.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      fn4.__workletHash = 9808165597638;
      fn4.__initData = closure_26;
      const obj3 = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      const fn5 = function o(velocityY) {
        velocityY = velocityY.velocityY;
        const absolute = Math.abs(velocityY);
        if (absolute > 200) {
          if (velocityY < 0) {
            const obj = {};
            const merged = Object.assign(store.get());
            obj["height"] = store4.get().drawerHeight - lib(store[21])(store5.get(), constants).height;
            const result = store.set(obj);
            if (store2.get().mode === constants.DRAWER) {
              let DRAWER2 = constants.RESET;
            } else {
              DRAWER2 = constants.DRAWER;
            }
            const tmp16 = lib(store[21]);
          }
        }
        if (absolute < 200) {
          if (store6.get().isDrawer) {
            if (store2.get().mode === constants.DRAWER) {
              let DRAWER = constants.RESET;
            } else {
              DRAWER = constants.DRAWER;
            }
          }
        }
        if (store2.get().mode === constants.FLOATING_DEFAULT) {
          let FLOATING_DEFAULT = constants.RESET;
        } else {
          FLOATING_DEFAULT = constants.FLOATING_DEFAULT;
        }
        const result1 = store9.set(false);
        const result2 = store8.set(false);
        callback(store[15]).runOnJS(closure_14.unlock)(FLOATING_DEFAULT);
      };
      const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn4);
      fn5.__closure = { wrapperSpecs: arg2, wrapperDimensions, calculateVoicePanelHeaderSpecs: arg1(arg2[21]), safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes: token, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      fn5.__workletHash = 12106761920053;
      fn5.__initData = closure_25;
      const obj4 = { wrapperSpecs: arg2, wrapperDimensions, calculateVoicePanelHeaderSpecs: arg1(arg2[21]), safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes: token, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      const fn6 = function t() {
        const result = store9.set(false);
        const result1 = store8.set(false);
        callback(closure_2[15]).runOnJS(closure_14.unlock)();
      };
      const onEndResult = onTouchesCancelledResult.onEnd(fn5);
      fn6.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      fn6.__workletHash = 15918380969837;
      fn6.__initData = closure_24;
      return onEndResult.onFinalize(fn6);
    }, items);
    const obj6 = gestureState(sharedValue1[18]);
    const fn = function p() {
      return arg2.get().drawerMode;
    };
    fn.__closure = { wrapperSpecs: sharedValue1 };
    fn.__workletHash = 2949834828607;
    fn.__initData = closure_31;
    const fn2 = function u(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = arg0(arg2[15]);
        arg0(arg2[15]).runOnJS(arg0(arg2[23]).triggerHapticFeedback)(arg0(arg2[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
        const runOnJSResult = arg0(arg2[15]).runOnJS(arg0(arg2[23]).triggerHapticFeedback);
      }
    };
    obj = { runOnJS: gestureState(tmp2[15]).runOnJS, triggerHapticFeedback: gestureState(tmp2[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(tmp2[23]).HapticFeedbackTypes };
    fn2.__closure = obj;
    fn2.__workletHash = 10186886451735;
    fn2.__initData = closure_32;
    const animatedReaction = gestureState(sharedValue1[15]).useAnimatedReaction(fn, fn2);
    return { gesture, useScrollLock: channelId(controlsSpecs.useState(() => arg0(arg2[16]).createUseAnimatedScrollLock(closure_12, sharedValue4, sharedValue3, sharedValue2)), 1)[0], gestureSpecs };
  }(first, sharedValue, sharedValue1, callback));
  function useWrapperSpecs(sharedValue1) {
    const gestureState = sharedValue1;
    let obj = gestureState(tmp2[24]);
    const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
    const tmp2 = isScreenReaderEnabled(tmp2[25])({ ignoreKeyboard: true });
    const context = controlsSpecs.useContext(isScreenReaderEnabled(tmp2[14]));
    let controlsSpecs = context.controlsSpecs;
    const channelId = controlsSpecs;
    const windowDimensions = context.windowDimensions;
    controlsSpecs = windowDimensions;
    const mode = context.mode;
    const setControlsMode = context.setControlsMode;
    const safeArea = context.safeArea;
    const useReducedMotion = safeArea;
    const connected = context.connected;
    const first = connected;
    const fn = function n() {
      return { connected: connected.get(), currentControlsMode: controlsSpecs.get().mode, mode: mode.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, windowHeightIgnoringKeyboard: tmp2.get().height, controlsHeightValue: controlsSpecs.get().height, safeArea: safeArea.get() };
    };
    fn.__closure = { connected, controlsSpecs, mode, windowDimensions, windowDimensionsIgnoringKeyboard: tmp2, safeArea };
    fn.__workletHash = 11588370229444;
    fn.__initData = closure_33;
    const fn2 = function s(self, currentControlsMode) {
      let controlsHeightValue;
      let maxHeight;
      let minHeight;
      let mode;
      let safeArea;
      let windowWidth;
      let obj = self(tmp2[26]);
      let tmp;
      if (null != currentControlsMode) {
        tmp = currentControlsMode;
      }
      if (!obj.cheapWorkletShallowEqual(self, tmp)) {
        ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = self);
        if (constants.DISMISSED !== mode) {
          if (constants.PIP !== mode) {
            const PANEL = constants.PANEL;
            if (constants2.RESET === currentControlsMode) {
              obj = {};
              currentControlsMode = undefined;
              const obj10 = self(tmp2[15]);
              if (null != currentControlsMode) {
                currentControlsMode = currentControlsMode.currentControlsMode;
              }
              if (null == currentControlsMode) {
                currentControlsMode = constants2.FLOATING_DEFAULT;
              }
              obj.mode = currentControlsMode;
              self(tmp2[15]).runOnJS(setControlsMode)(obj);
            } else if (constants2.HIDDEN === currentControlsMode) {
              if (isScreenReaderEnabled) {
                obj = {};
                const merged = Object.assign(obj7.get());
                obj["hidden"] = false;
                const result = obj7.set(obj);
              } else if (!obj7.get().hidden) {
                let obj1 = {};
                const merged1 = Object.assign(self.get());
                obj1["hidden"] = true;
                const result1 = self.set(obj1);
              }
            } else if (constants2.FLOATING_DEFAULT === currentControlsMode) {
              const obj2 = {};
              const _Math = Math;
              obj2.y = -1 * Math.max(safeArea.bottom, closure_13);
              obj2.width = self(tmp2[22]).getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right);
              obj2.height = controlsHeightValue;
              const result2 = self.set(obj2);
              const obj6 = self(tmp2[22]);
            } else if (constants2.DRAWER === currentControlsMode) {
              const drawerSpec = self(tmp2[27]).getDrawerSpec(tmp2, safeArea.top);
              ({ minHeight, maxHeight } = drawerSpec);
              if (self.get().height <= controlsHeightValue) {
                minHeight = maxHeight;
              } else if (null != currentControlsMode) {
                obj1 = self(tmp2[27]);
              }
              let obj3 = { "Null": "M5 3H2V4H5V3Z", "Null": "white", "Null": "M7 9H6V10H7V9Z", "Null": "black", "Null": "M8 6H7V7H8V6Z", "Null": "black" };
              obj3 = self(tmp2[22]);
              obj3.width = obj3.getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right);
              obj3.height = minHeight;
              const result3 = self.set(obj3);
              const obj13 = self(tmp2[27]);
            }
          }
        }
        if (!self.get().hidden) {
          const obj4 = {};
          const merged2 = Object.assign(self.get());
          obj4["hidden"] = true;
          const result4 = self.set(obj4);
        }
      }
    };
    obj = { cheapWorkletShallowEqual: gestureState(tmp2[26]).cheapWorkletShallowEqual, VoicePanelModes: callback, wrapperSpecs: sharedValue1, VoicePanelControlsModes: tmp22, runOnJS: gestureState(tmp2[15]).runOnJS, setControlsMode, isScreenReaderEnabled, EDGE_GUTTER: sharedValue1, getControlsDefaultWidth: gestureState(tmp2[22]).getControlsDefaultWidth, getDrawerSpec: gestureState(tmp2[27]).getDrawerSpec, getControlsDrawerOpenWidth: gestureState(tmp2[22]).getControlsDrawerOpenWidth };
    fn2.__closure = obj;
    fn2.__workletHash = 1154430392188;
    fn2.__initData = closure_34;
    const animatedReaction = gestureState(tmp2[15]).useAnimatedReaction(fn, fn2);
  }(sharedValue1);
  const tmp21 = callback(controlsSpecs.useState(false), 2);
  const tmp22 = tmp21[1];
  const tmp19 = function useControlsGesture(first, sharedValue, sharedValue1, callback) {
    const gestureState = first;
    const isScreenReaderEnabled = sharedValue;
    const channelId = callback;
    const context = controlsSpecs.useContext(isScreenReaderEnabled(tmp2[14]));
    const controlsSpecs = context.controlsSpecs;
    const windowDimensions = context.windowDimensions;
    const mode = windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const setControlsMode = wrapperDimensions;
    const safeArea = context.safeArea;
    const useReducedMotion = safeArea;
    let obj = gestureState(tmp2[15]);
    const gestureSpecs = obj.useSharedValue({ "Bool(true)": 0.124, "Bool(true)": 1, "Bool(true)": "Enable Application Identity Linked Roles", "Bool(true)": 0, "Bool(true)": 40, "Bool(true)": 4, "Bool(true)": "Star", "Bool(true)": 1, "Bool(true)": 1 });
    first = gestureSpecs;
    sharedValue1 = gestureState(sharedValue1[15]).useSharedValue(0);
    let closure_9 = sharedValue1;
    const obj2 = gestureState(sharedValue1[15]);
    const sharedValue2 = gestureState(sharedValue1[15]).useSharedValue(false);
    sharedValue = sharedValue2;
    const obj3 = gestureState(sharedValue1[15]);
    const sharedValue3 = gestureState(sharedValue1[15]).useSharedValue(0);
    callback = sharedValue3;
    let closure_12 = controlsSpecs.useRef(undefined);
    const obj4 = gestureState(sharedValue1[15]);
    const sharedValue4 = gestureState(sharedValue1[15]).useSharedValue(false);
    sharedValue1 = sharedValue4;
    const tmp7 = isScreenReaderEnabled(sharedValue1[17])();
    let token = tmp7;
    const obj5 = gestureState(sharedValue1[15]);
    token = gestureState(sharedValue1[18]).useToken(isScreenReaderEnabled(tmp2[10]).modules.mobile.VOICE_PANEL_GUTTER);
    const items = [controlsSpecs, tmp7, gestureSpecs, sharedValue2, callback, safeArea, sharedValue4, sharedValue3, sharedValue, first, sharedValue1, windowDimensions, wrapperDimensions, sharedValue1, token];
    const gesture = controlsSpecs.useMemo(() => {
      const Gesture = arg0(arg2[19]).Gesture;
      const PanResult = Gesture.Pan();
      const manualActivationResult = Gesture.Pan().manualActivation(true);
      const result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
      const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
      const fn = function b(absoluteX) {
        const result = store7.set(0);
        const result1 = store6.set({ absoluteX: absoluteX.changedTouches[0].absoluteX, absoluteY: absoluteX.changedTouches[0].absoluteY, x: store.get().x, y: store.get().y, height: store.get().height, isDrawer: store2.get().mode === constants.DRAWER, active: false, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 });
      };
      let obj = { touchMoveCount: sharedValue1, gestureSpecs, wrapperSpecs: arg2, controlsSpecs, VoicePanelControlsModes: token, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200 };
      fn.__closure = obj;
      fn.__workletHash = 3524850376026;
      fn.__initData = closure_30;
      const withRefResult = result.withRef(closure_12);
      class R {
        constructor() {
          obj = closure_0(closure_2[15]);
          tmp = obj.runOnJS(closure_14.lock)();
          return;
        }
      }
      obj = { runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      R.__closure = obj;
      R.__workletHash = 11720944776433;
      R.__initData = closure_29;
      const onTouchesDownResult = result.withRef(closure_12).onTouchesDown(fn);
      const fn2 = function h(state, fail) {
        if (state.state === callback(store[19]).State.BEGAN) {
          if (!store6.get().active) {
            if (store2.get().mode !== constants.HIDDEN) {
              const result = store7.set(store7.get() + 1);
              let value = store7.get() <= closure_22;
              if (!value) {
                value = store8.get();
              }
              value = lib.get();
              if ("settings" === value) {
                let num2 = closure_11.get();
              } else {
                num2 = 0;
              }
              const first = state.changedTouches[0];
              const absoluteY = first.absoluteY;
              const diff = store6.get().absoluteY - absoluteY;
              let tmp17 = store2.get().mode === constants.DRAWER && value;
              if (tmp17) {
                tmp17 = diff >= 0 || num2 > 0;
                const tmp18 = diff >= 0 || num2 > 0;
              }
              if (!tmp17) {
                if (store2.get().mode !== constants.FLOATING_DEFAULT) {
                  const _Math = Math;
                  const _Math2 = Math;
                  const absolute = Math.abs(diff);
                  if (absolute > Math.abs(30)) {
                    fail.fail();
                  }
                }
                let obj = { absoluteX: first.absoluteX, absoluteY, x: store.get().x, y: store.get().y, height: store.get().height, isDrawer: store2.get().mode === constants.DRAWER, active: true, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 };
                const result1 = store6.set(obj);
                let tmp30 = store2.get().mode !== constants.DRAWER;
                if (tmp30) {
                  tmp30 = "settings" !== callback;
                }
                if (tmp30) {
                  obj = { 0: true, 0: "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL2d1aWxkX3RoZW1lL3dlYg==", 9223372036854775807: null };
                  const obj2 = callback(store[15]);
                  obj.source = callback(store[20]).VoicePanelTabAnalyticsSources.GESTURE;
                  callback(store[15]).runOnJS(closure_3)(obj);
                  const runOnJSResult = callback(store[15]).runOnJS(closure_3);
                }
                const result2 = store9.set(true);
                fail.activate();
              }
            } else {
              fail.fail();
            }
          }
        }
      };
      const onStartResult = result.withRef(closure_12).onTouchesDown(fn).onStart(R);
      fn2.__closure = { State: arg0(arg2[19]).State, gestureSpecs, controlsSpecs, VoicePanelControlsModes: token, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: closure_22, isDragScrolling: sharedValue2, sharedTab: arg1, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: arg2, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200, tab: arg0, runOnJS: arg0(arg2[15]).runOnJS, openTab: arg3, VoicePanelTabAnalyticsSources: arg0(arg2[20]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
      fn2.__workletHash = 13965683053434;
      fn2.__initData = closure_28;
      const obj1 = { State: arg0(arg2[19]).State, gestureSpecs, controlsSpecs, VoicePanelControlsModes: token, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: closure_22, isDragScrolling: sharedValue2, sharedTab: arg1, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: arg2, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200, tab: arg0, runOnJS: arg0(arg2[15]).runOnJS, openTab: arg3, VoicePanelTabAnalyticsSources: arg0(arg2[20]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
      const fn3 = function p(absoluteY) {
        const diff = absoluteY.absoluteY - store6.get().absoluteY;
        const diff1 = store6.get().height - store6.get().y - diff;
        if (diff1 > store6.get().drawerTransitionHeight) {
          if (!store6.get().isDrawer) {
            let obj = {};
            const merged = Object.assign(store6.get());
            obj["isDrawer"] = true;
            const result = store6.set(obj);
          }
          obj = {};
          const merged1 = Object.assign(store.get());
          obj["x"] = 0;
          obj["y"] = 0;
          const tmp28 = lib(store[21]);
          obj["width"] = callback(store[22]).getControlsDrawerOpenWidth(store3.get().width, store5.get().left, store5.get().right);
          const _Math = Math;
          obj["height"] = Math.min(diff1, store4.get().drawerHeight - tmp28(store5.get(), closure_15).height);
          obj["drawerMode"] = true;
          const result1 = store.set(obj);
          const obj7 = callback(store[22]);
        } else {
          const result2 = diff1 / store6.get().drawerTransitionHeight;
          const height = store2.get().height;
          const _Math2 = Math;
          const result3 = -1 * Math.max(diff1 - store5.get().bottom - height, 0);
          if (store6.get().isDrawer) {
            obj = {};
            const merged2 = Object.assign(store6.get());
            obj["isDrawer"] = false;
            const result4 = store6.set(obj);
          }
          let drawerMode = height === store.get().height;
          if (!drawerMode) {
            drawerMode = store.get().drawerMode;
          }
          if (!drawerMode) {
            let obj1 = callback(store[15]);
            obj1.runOnJS(callback(store[23]).triggerHapticFeedback)(callback(store[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
            const runOnJSResult = obj1.runOnJS(callback(store[23]).triggerHapticFeedback);
          }
          obj1 = {};
          const merged3 = Object.assign(store.get());
          obj1["x"] = 0;
          obj1["y"] = -1 * store5.get().bottom + result3 * (1 - result2 / 1.5);
          obj1["width"] = callback(store[22]).getControlsDefaultWidth(store3.get().width, store5.get().left, store5.get().right);
          obj1["height"] = height;
          obj1["drawerMode"] = false;
          const result5 = store.set(obj1);
          const obj4 = callback(store[22]);
        }
      };
      const onTouchesMoveResult = onStartResult.onTouchesMove(fn2);
      fn3.__closure = { gestureSpecs, calculateVoicePanelHeaderSpecs: arg1(arg2[21]), safeArea, edgeGutter: token, wrapperSpecs: arg2, getControlsDrawerOpenWidth: arg0(arg2[22]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: arg0(arg2[15]).runOnJS, triggerHapticFeedback: arg0(arg2[23]).triggerHapticFeedback, HapticFeedbackTypes: arg0(arg2[23]).HapticFeedbackTypes, getControlsDefaultWidth: arg0(arg2[22]).getControlsDefaultWidth };
      fn3.__workletHash = 10007030283382;
      fn3.__initData = closure_27;
      const obj2 = { gestureSpecs, calculateVoicePanelHeaderSpecs: arg1(arg2[21]), safeArea, edgeGutter: token, wrapperSpecs: arg2, getControlsDrawerOpenWidth: arg0(arg2[22]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: arg0(arg2[15]).runOnJS, triggerHapticFeedback: arg0(arg2[23]).triggerHapticFeedback, HapticFeedbackTypes: arg0(arg2[23]).HapticFeedbackTypes, getControlsDefaultWidth: arg0(arg2[22]).getControlsDefaultWidth };
      const fn4 = function u() {
        const result = store9.set(false);
        const result1 = store8.set(false);
        const obj = {};
        const merged = Object.assign(store6.get());
        obj["active"] = false;
        const result2 = store6.set(obj);
        callback(closure_2[15]).runOnJS(closure_14.unlock)();
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn3);
      fn4.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      fn4.__workletHash = 9808165597638;
      fn4.__initData = closure_26;
      const obj3 = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      const fn5 = function o(velocityY) {
        velocityY = velocityY.velocityY;
        const absolute = Math.abs(velocityY);
        if (absolute > 200) {
          if (velocityY < 0) {
            const obj = {};
            const merged = Object.assign(store.get());
            obj["height"] = store4.get().drawerHeight - lib(store[21])(store5.get(), constants).height;
            const result = store.set(obj);
            if (store2.get().mode === constants.DRAWER) {
              let DRAWER2 = constants.RESET;
            } else {
              DRAWER2 = constants.DRAWER;
            }
            const tmp16 = lib(store[21]);
          }
        }
        if (absolute < 200) {
          if (store6.get().isDrawer) {
            if (store2.get().mode === constants.DRAWER) {
              let DRAWER = constants.RESET;
            } else {
              DRAWER = constants.DRAWER;
            }
          }
        }
        if (store2.get().mode === constants.FLOATING_DEFAULT) {
          let FLOATING_DEFAULT = constants.RESET;
        } else {
          FLOATING_DEFAULT = constants.FLOATING_DEFAULT;
        }
        const result1 = store9.set(false);
        const result2 = store8.set(false);
        callback(store[15]).runOnJS(closure_14.unlock)(FLOATING_DEFAULT);
      };
      const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn4);
      fn5.__closure = { wrapperSpecs: arg2, wrapperDimensions, calculateVoicePanelHeaderSpecs: arg1(arg2[21]), safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes: token, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      fn5.__workletHash = 12106761920053;
      fn5.__initData = closure_25;
      const obj4 = { wrapperSpecs: arg2, wrapperDimensions, calculateVoicePanelHeaderSpecs: arg1(arg2[21]), safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes: token, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      const fn6 = function t() {
        const result = store9.set(false);
        const result1 = store8.set(false);
        callback(closure_2[15]).runOnJS(closure_14.unlock)();
      };
      const onEndResult = onTouchesCancelledResult.onEnd(fn5);
      fn6.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: arg0(arg2[15]).runOnJS, gestureLock: tmp7 };
      fn6.__workletHash = 15918380969837;
      fn6.__initData = closure_24;
      return onEndResult.onFinalize(fn6);
    }, items);
    const obj6 = gestureState(sharedValue1[18]);
    const fn = function p() {
      return arg2.get().drawerMode;
    };
    fn.__closure = { wrapperSpecs: sharedValue1 };
    fn.__workletHash = 2949834828607;
    fn.__initData = closure_31;
    const fn2 = function u(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = arg0(arg2[15]);
        arg0(arg2[15]).runOnJS(arg0(arg2[23]).triggerHapticFeedback)(arg0(arg2[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
        const runOnJSResult = arg0(arg2[15]).runOnJS(arg0(arg2[23]).triggerHapticFeedback);
      }
    };
    obj = { runOnJS: gestureState(tmp2[15]).runOnJS, triggerHapticFeedback: gestureState(tmp2[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(tmp2[23]).HapticFeedbackTypes };
    fn2.__closure = obj;
    fn2.__workletHash = 10186886451735;
    fn2.__initData = closure_32;
    const animatedReaction = gestureState(sharedValue1[15]).useAnimatedReaction(fn, fn2);
    return { gesture, useScrollLock: channelId(controlsSpecs.useState(() => arg0(arg2[16]).createUseAnimatedScrollLock(closure_12, sharedValue4, sharedValue3, sharedValue2)), 1)[0], gestureSpecs };
  }(first, sharedValue, sharedValue1, callback);
  class Ae {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  Ae.__closure = { controlsSpecs };
  Ae.__workletHash = 7719878249076;
  Ae.__initData = closure_40;
  class De {
    constructor(arg0, arg1) {
      tmp = gestureState !== arg1 && closure_1;
      if (tmp) {
        tmp2 = closure_15;
        if (gestureState === closure_15.DRAWER) {
          tmp3 = closure_15;
          if (arg1 !== closure_15.DRAWER) {
            tmp11 = gestureState;
            tmp12 = closure_2;
            num2 = 15;
            obj2 = gestureState(closure_2[15]);
            tmp13 = closure_15;
            flag2 = true;
            tmp14 = obj2.runOnJS(closure_15)(true);
          }
        }
        tmp4 = closure_15;
        tmp5 = gestureState !== closure_15.DRAWER;
        if (tmp5) {
          tmp6 = closure_15;
          tmp5 = arg1 === closure_15.DRAWER;
        }
        if (tmp5) {
          tmp7 = gestureState;
          tmp8 = closure_2;
          num = 15;
          obj = gestureState(closure_2[15]);
          tmp9 = closure_15;
          flag = false;
          tmp10 = obj.runOnJS(closure_15)(false);
        }
      }
      return;
    }
  }
  obj2 = { isScreenReaderEnabled, VoicePanelControlsModes: tmp22, runOnJS: arg1(dependencyMap[15]).runOnJS, setIsDrawer: tmp22 };
  De.__closure = obj2;
  De.__workletHash = 12036469956927;
  De.__initData = closure_41;
  const animatedReaction = arg1(dependencyMap[15]).useAnimatedReaction(Ae, De);
  const tmp24 = callback(controlsSpecs.useState(false), 2);
  const tmp25 = tmp24[1];
  const obj14 = arg1(dependencyMap[15]);
  class Me {
    constructor() {
      return left.get().drawerMode;
    }
  }
  Me.__closure = { wrapperSpecs: sharedValue1 };
  Me.__workletHash = 2374715205601;
  Me.__initData = closure_42;
  function be(arg0, arg1) {
    if (tmp) {
      const runOnJSResult = gestureState(gestureState[15]).runOnJS(tmp25);
      if (arg0) {
        runOnJSResult(true);
      } else {
        runOnJSResult(false);
      }
      const obj = gestureState(gestureState[15]);
    }
  }
  obj3 = { isRefreshEnabled: tmp2, runOnJS: arg1(dependencyMap[15]).runOnJS, setIsDrawerActive: tmp25 };
  be.__closure = obj3;
  be.__workletHash = 1721919006032;
  be.__initData = closure_43;
  const animatedReaction1 = arg1(dependencyMap[15]).useAnimatedReaction(Me, be);
  const items3 = [setControlsMode];
  const id = importAllResult.useId();
  const callback1 = importAllResult.useCallback(() => {
    setControlsMode({ mode: tmp22.FLOATING_DEFAULT });
  }, items3);
  obj4 = { value: useScrollLock };
  const items4 = [callback2(importDefault(dependencyMap[46]), { wrapperSpecs: sharedValue1 }), callback2(closure_35, { channelId, wrapperSpecs: sharedValue1, controlsSpecs, accessoryHeights: tmp12, gestureState }), ];
  const obj5 = { nativeID: id, style: tmp4.accessibilityWrapper, accessibilityViewIsModal: tmp21[0], onAccessibilityEscape: callback1, pointerEvents: "box-none" };
  const obj16 = arg1(dependencyMap[15]);
  obj6 = { gesture };
  obj7 = { style: items5, animatedProps };
  const items5 = [tmp4.wrapper, animatedStyle];
  const tmp31 = importDefault(dependencyMap[47]);
  obj8 = {};
  let MIDNIGHT;
  if (tmp2) {
    if (tmp9) {
      if (!tmp24[0]) {
        MIDNIGHT = constants.MIDNIGHT;
      }
    }
  }
  obj8.theme = MIDNIGHT;
  obj9 = {};
  let tmp36 = !tmp9;
  if (tmp36) {
    const obj24 = arg1(dependencyMap[50]);
    tmp36 = arg1(dependencyMap[50]).isAndroid() || tmp2;
    const tmp39 = arg1(dependencyMap[50]).isAndroid() || tmp2;
  }
  obj9.matchAppTheme = tmp36;
  const items6 = [callback2(arg1(dependencyMap[49]).VoicePanelVisualEffectView, obj9), callback2(closure_37, { openTab: callback, wrapperSpecs: sharedValue1, sharedTab: sharedValue })];
  obj8.children = items6;
  const items7 = [closure_20(arg1(dependencyMap[48]).ThemeContextProvider, obj8), callback2(importDefault(dependencyMap[51]), { wrapperSpecs: sharedValue1, tab: first, sharedTab: sharedValue, gestureSpecs, openTab: callback }), ];
  const tmp32 = importDefault(dependencyMap[36]);
  const tmp35 = callback2;
  let tmp40 = null;
  if (!obj25.isMetaQuest()) {
    const obj10 = { openTab: callback };
    tmp40 = callback2(closure_23, obj10);
  }
  items7[2] = tmp40;
  obj7.children = items7;
  obj6.children = closure_20(tmp32, obj7);
  obj5.children = callback2(arg1(dependencyMap[19]).GestureDetector, obj6);
  items4[2] = callback2(tmp31, obj5);
  obj4.children = items4;
  return closure_20(arg1(dependencyMap[16]).ControlsGestureScrollLock.Provider, obj4);
});
