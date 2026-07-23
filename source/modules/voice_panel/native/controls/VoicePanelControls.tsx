// Module ID: 15847
// Function ID: 122473
// Dependencies: [57, 31, 27, 4143, 10015, 10018, 10013, 653, 33, 4130, 689, 1553, 15848, 8372, 10014, 3991, 11222, 15777, 3834, 5217, 15849, 10021, 11378, 4099, 4528, 14710, 9423, 15850, 15739, 15851, 4476, 15855, 15856, 5122, 15859, 4542, 7589, 1324, 15719, 15754, 682, 15881, 1207, 1557, 1450, 9891, 15882, 15779, 3842, 15858, 477, 15883, 2]

// Module 15847
import _slicedToArray from "_slicedToArray";
import importAllResult from "FloatingCTA";
import get_ActivityIndicator from "getDrawerSpec";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import CARD_SIZE from "CARD_SIZE";
import VoicePanelControlsModes from "VoicePanelControlsModes";
import ME from "ME";
import jsxProd from "useRefValue";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isMetaQuest from "isMetaQuest";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
const View = get_ActivityIndicator.View;
({ UI_SHOW_HIDE_PHYSICS: closure_7, MODE_CHANGE_PHYSICS: closure_8, BORDER_RADIUS_PHYSICS: closure_9, PANEL_CONTROLS_HEIGHT_PHYSICS: closure_10, VoicePanelModes: closure_11 } = VoicePanelModes);
let num = 5;
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: closure_13 } = CARD_SIZE);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } = VoicePanelControlsModes);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = ME);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
let obj = {};
obj = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["zIndex"] = 1;
obj.accessibilityWrapper = obj;
_createForOfIteratorHelperLoose = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
obj.wrapper = _createForOfIteratorHelperLoose;
let obj2 = { position: "absolute", left: 0, right: 0, zIndex: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.buttonsWrapper = obj2;
obj.actionSheetDragHandleWrapper = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 21 };
let closure_21 = _createForOfIteratorHelperLoose.createStyles(obj);
if (isMetaQuest.isMetaQuest()) {
  num = 15;
}
let closure_23 = importAllResult.memo((openTab) => {
  let accessibilityLabel;
  let ariaHidden;
  let handlePress;
  const tmp = callback2();
  const tmp2 = importDefault(15848)(openTab.openTab);
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return callback(View, { style: tmp.actionSheetDragHandleWrapper, children: callback(require(8372) /* TwinButtons */.ActionSheetDragHandle, { onPress: handlePress, overlay: true, accessibilityLabel, "aria-hidden": ariaHidden }) });
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
  controlsSpecs = controlsSpecs.controlsSpecs;
  const accessoryHeights = controlsSpecs.accessoryHeights;
  const gestureState = controlsSpecs.gestureState;
  let obj = wrapperSpecs(accessoryHeights[28]);
  const shouldShowFloatingCTA = obj.useShouldShowFloatingCTA(channelId);
  const tmp2 = controlsSpecs(accessoryHeights[17])();
  const tmp3 = controlsSpecs(accessoryHeights[29])(channelId);
  const isConnectingToConsole = tmp3.isConnectingToConsole;
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
  obj.renderItem = wrapperSpecs(accessoryHeights[31]).renderVoicePanelFloatingCTA;
  const items2 = [closure_18(wrapperSpecs(accessoryHeights[30]).TransitionItem, obj), ];
  const obj1 = {};
  let tmp11;
  if (tmp3.isConnectingOrConnectedToConsole) {
    tmp11 = memo;
  }
  obj1.item = tmp11;
  obj1.renderItem = wrapperSpecs(accessoryHeights[32]).renderVoicePanelConsoleStatus;
  items2[1] = closure_18(wrapperSpecs(accessoryHeights[30]).TransitionItem, obj1);
  obj.children = items2;
  return closure_20(closure_19, obj);
});
let closure_36 = { code: "function VoicePanelControlsTsx12(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}" };
let closure_37 = importAllResult.memo(function VoicePanelButtonsInner(sharedTab) {
  let require;
  let wrapperSpecs;
  ({ openTab: require, wrapperSpecs } = sharedTab);
  sharedTab = sharedTab.sharedTab;
  const ref = controlsSpecs.useRef(true);
  const tmp2 = wrapperSpecs(sharedTab[33])(ref);
  const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[14]));
  controlsSpecs = context.controlsSpecs;
  const connected = context.connected;
  const tmp3 = callback2();
  let obj = require(sharedTab[15]);
  const fn = function c() {
    let pushToTalk = controlsSpecs.get().pushToTalk;
    if (pushToTalk) {
      pushToTalk = connected.get();
    }
    if ("settings" === sharedTab.get()) {
      if (wrapperSpecs.get().height >= 200) {
        let height = outer1_14;
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
      obj.height = outer1_0(sharedTab[35]).withSpring(height, outer1_8);
      const obj2 = outer1_0(sharedTab[35]);
      let num7 = 1;
      if ("settings" !== sharedTab.get()) {
        num7 = 1;
        if (wrapperSpecs.get().height >= 200) {
          num7 = 0;
        }
      }
      obj.opacity = outer1_0(sharedTab[35]).withSpring(num7, outer1_8);
      obj = {};
      const obj3 = outer1_0(sharedTab[35]);
      obj.translateY = outer1_0(sharedTab[35]).withSpring(num2, outer1_8);
      const items = [obj, ];
      obj = {};
      const obj5 = outer1_0(sharedTab[35]);
      let num9 = 1;
      if ("settings" !== sharedTab.get()) {
        num9 = 1;
        if (wrapperSpecs.get().height >= 200) {
          num9 = 0.95;
        }
      }
      obj.scale = outer1_0(sharedTab[35]).withSpring(num9, outer1_8);
      items[1] = obj;
      obj.transform = items;
      return obj;
    }
    height = controlsSpecs.get().height;
  };
  obj = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, withSpring: require(sharedTab[35]).withSpring, MODE_CHANGE_PHYSICS: closure_8 };
  fn.__closure = obj;
  fn.__workletHash = 17578996123721;
  fn.__initData = closure_36;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = controlsSpecs.useEffect(() => {
    ref.current = false;
  }, []);
  obj = { skipEntering: tmp2 };
  const obj1 = { style: items };
  items = [tmp3.buttonsWrapper, animatedStyle];
  const arr = wrapperSpecs(sharedTab[34])();
  obj1.children = arr.map((props) => props.render(props.key, { props, openTab: closure_0, wrapperSpecs }));
  obj.children = callback(wrapperSpecs(sharedTab[36]), obj1);
  return callback(require(sharedTab[15]).LayoutAnimationConfig, obj);
});
let closure_38 = { code: "function VoicePanelControlsTsx13(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,useReducedMotion,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),opacity:withSpring(wrapperSpecs.get().hidden?0:1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop)?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_39 = { code: "function VoicePanelControlsTsx14(){const{mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}" };
let closure_40 = { code: "function VoicePanelControlsTsx15(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
let closure_41 = { code: "function VoicePanelControlsTsx16(mode,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}" };
let closure_42 = { code: "function VoicePanelControlsTsx17(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
let closure_43 = { code: "function VoicePanelControlsTsx18(drawerMode,previousDrawerMode){const{isRefreshEnabled,runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(!isRefreshEnabled)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}" };
const memoResult = importAllResult.memo(function VoicePanelControls(gestureState) {
  let gesture;
  let gestureSpecs;
  let useScrollLock;
  gestureState = gestureState.gestureState;
  let obj = gestureState(4528);
  let isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let tmp2 = isScreenReaderEnabled(1324)("VoicePanelControls");
  const dependencyMap = tmp2;
  let context = controlsSpecs.useContext(isScreenReaderEnabled(10014));
  const channelId = context.channelId;
  controlsSpecs = context.controlsSpecs;
  let mode = context.mode;
  let setControlsMode = context.setControlsMode;
  const useReducedMotion = context.useReducedMotion;
  const tmp4 = callback2();
  let tmp5 = channelId(controlsSpecs.useState(null), 2);
  let first = tmp5[0];
  let closure_9 = tmp5[1];
  let obj1 = gestureState(3991);
  const sharedValue = obj1.useSharedValue(first);
  const layoutEffect = controlsSpecs.useLayoutEffect(() => {
    const result = sharedValue.set(first);
  });
  let tmp9 = isScreenReaderEnabled(15719)(channelId);
  let obj2 = gestureState(15754);
  const maybeFetchSoundboardSounds = obj2.useMaybeFetchSoundboardSounds({ shouldFetch: tmp9 });
  let items = [channelId, controlsSpecs, setControlsMode];
  const callback = controlsSpecs.useCallback((controlsProps) => {
    let disableControlsUpdate;
    let gestureState;
    let isScreenReaderEnabled;
    ({ tab: gestureState, source: isScreenReaderEnabled, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    controlsProps = controlsProps.controlsProps;
    gestureState(tmp2[40]).batchUpdates(() => {
      let c0 = false;
      outer1_9((arg0) => {
        let closure_0 = arg0 !== c0;
        return c0;
      });
      if (!disableControlsUpdate) {
        const obj = { mode: constants.DRAWER };
        const merged = Object.assign(controlsProps);
        outer1_6(obj);
      }
      let tmp9 = c0;
      if (!c0) {
        tmp9 = tmp;
      }
      if (tmp9) {
        isScreenReaderEnabled(disableControlsUpdate[20])(controlsProps, c0, closure_1);
      }
    });
  }, items);
  const tmp12 = isScreenReaderEnabled(15881)();
  let closure_12 = tmp12;
  const items1 = [channelId, controlsSpecs, callback, first];
  const layoutEffect1 = controlsSpecs.useLayoutEffect(() => {
    function handleStoreChange() {
      const chatOpen = setControlsMode.getChatOpen(outer1_3);
      if (chatOpen !== chatOpen) {
        if (chatOpen) {
          let obj = { tab: "chat", source: gestureState(table[20]).VoicePanelTabAnalyticsSources.STORE };
          obj = { debounce: true };
          obj.controlsProps = obj;
          outer1_11(obj);
        }
      }
    }
    handleStoreChange();
    setControlsMode.addChangeListener(handleStoreChange);
    return () => {
      setControlsMode.removeChangeListener(handleStoreChange);
    };
  }, items1);
  const items2 = [callback];
  const effect = controlsSpecs.useEffect(() => {
    function handleOpenChatTab() {
      outer1_11({ tab: "chat", source: gestureState(15849).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
    }
    let ComponentDispatch = gestureState(tmp2[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(tmp25.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    return () => {
      const ComponentDispatch = gestureState(1207).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    };
  }, items2);
  let obj3 = gestureState(1557);
  const rect = obj3.getSafeAreaInsets();
  let obj4 = gestureState(3991);
  obj = { width: null, height: 0, x: 0, y: 0, drawerMode: false, hidden: false };
  let obj6 = gestureState(11378);
  let obj7 = gestureState(1450);
  obj.width = obj6.getControlsDefaultWidth(obj7.getWindowDimensions().width, rect.left, rect.right);
  let sharedValue1 = obj4.useSharedValue(obj);
  let obj8 = gestureState(3834);
  let token = obj8.useToken(isScreenReaderEnabled(689).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
  let obj9 = gestureState(3991);
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
  obj = { withSpring: gestureState(4542).withSpring, wrapperSpecs: sharedValue1, borderRadius: token, BORDER_RADIUS_PHYSICS: closure_9, PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue, MODE_CHANGE_PHYSICS: first, roundToNearestPixel: isScreenReaderEnabled(9891), UI_SHOW_HIDE_PHYSICS: useReducedMotion, useReducedMotion, gestureState, CALL_TILE_GUTTER: closure_12, accessoryHeights: tmp12 };
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
  const animatedProps = gestureState(3991).useAnimatedProps(de);
  const obj12 = gestureState(3991);
  ({ gesture, useScrollLock, gestureSpecs } = (function useControlsGesture(first, sharedValue, sharedValue1, callback) {
    let closure_0 = first;
    let closure_1 = sharedValue;
    let _slicedToArray = callback;
    const context = controlsSpecs.useContext(isScreenReaderEnabled(tmp2[14]));
    controlsSpecs = context.controlsSpecs;
    const windowDimensions = context.windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const safeArea = context.safeArea;
    let obj = gestureState(tmp2[15]);
    const gestureSpecs = obj.useSharedValue({ absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: false, active: false, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 });
    sharedValue1 = gestureState(sharedValue1[15]).useSharedValue(0);
    let obj2 = gestureState(sharedValue1[15]);
    const sharedValue2 = gestureState(sharedValue1[15]).useSharedValue(false);
    let obj3 = gestureState(sharedValue1[15]);
    const sharedValue3 = gestureState(sharedValue1[15]).useSharedValue(0);
    let closure_12 = controlsSpecs.useRef(undefined);
    let obj4 = gestureState(sharedValue1[15]);
    const sharedValue4 = gestureState(sharedValue1[15]).useSharedValue(false);
    const tmp7 = isScreenReaderEnabled(sharedValue1[17])();
    let token = tmp7;
    const obj5 = gestureState(sharedValue1[15]);
    token = gestureState(sharedValue1[18]).useToken(isScreenReaderEnabled(tmp2[10]).modules.mobile.VOICE_PANEL_GUTTER);
    const items = [controlsSpecs, tmp7, gestureSpecs, sharedValue2, callback, safeArea, sharedValue4, sharedValue3, sharedValue, first, sharedValue1, windowDimensions, wrapperDimensions, sharedValue1, token];
    const gesture = controlsSpecs.useMemo(() => {
      const Gesture = gestureState(sharedValue1[19]).Gesture;
      const PanResult = Gesture.Pan();
      const manualActivationResult = Gesture.Pan().manualActivation(true);
      let result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
      const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
      const fn = function b(absoluteX) {
        const result = outer1_9.set(0);
        const result1 = outer1_8.set({ absoluteX: absoluteX.changedTouches[0].absoluteX, absoluteY: absoluteX.changedTouches[0].absoluteY, x: outer1_2.get().x, y: outer1_2.get().y, height: outer1_2.get().height, isDrawer: outer1_4.get().mode === constants.DRAWER, active: false, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 });
      };
      let obj = { touchMoveCount: sharedValue1, gestureSpecs, wrapperSpecs: sharedValue1, controlsSpecs, VoicePanelControlsModes: closure_15, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200 };
      fn.__closure = obj;
      fn.__workletHash = 3524850376026;
      fn.__initData = outer2_30;
      const withRefResult = result.withRef(closure_12);
      class R {
        constructor() {
          obj = gestureState(outer3_2[15]);
          tmp = obj.runOnJS(outer1_14.lock)();
          return;
        }
      }
      obj = { runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      R.__closure = obj;
      R.__workletHash = 11720944776433;
      R.__initData = outer2_29;
      const onTouchesDownResult = result.withRef(closure_12).onTouchesDown(fn);
      const fn2 = function h(state, fail) {
        if (state.state === gestureState(5217).State.BEGAN) {
          if (!outer1_8.get().active) {
            if (outer1_4.get().mode !== constants.HIDDEN) {
              const result = outer1_9.set(outer1_9.get() + 1);
              let value = outer1_9.get() <= outer3_22;
              if (!value) {
                value = outer1_10.get();
              }
              value = outer1_1.get();
              if ("settings" === value) {
                let num2 = outer1_11.get();
              } else {
                num2 = 0;
              }
              const first = state.changedTouches[0];
              const absoluteY = first.absoluteY;
              const diff = outer1_8.get().absoluteY - absoluteY;
              let tmp17 = outer1_4.get().mode === constants.DRAWER && value;
              if (tmp17) {
                tmp17 = diff >= 0 || num2 > 0;
                const tmp18 = diff >= 0 || num2 > 0;
              }
              if (!tmp17) {
                if (outer1_4.get().mode !== constants.FLOATING_DEFAULT) {
                  const _Math = Math;
                  const _Math2 = Math;
                  const absolute = Math.abs(diff);
                  if (absolute > Math.abs(30)) {
                    fail.fail();
                  }
                }
                let obj = { absoluteX: first.absoluteX, absoluteY, x: outer1_2.get().x, y: outer1_2.get().y, height: outer1_2.get().height, isDrawer: outer1_4.get().mode === constants.DRAWER, active: true, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 };
                const result1 = outer1_8.set(obj);
                let tmp30 = outer1_4.get().mode !== constants.DRAWER;
                if (tmp30) {
                  tmp30 = "settings" !== outer1_0;
                }
                if (tmp30) {
                  obj = { tab: "settings", source: null, disableControlsUpdate: true };
                  const obj2 = gestureState(3991);
                  obj.source = gestureState(15849).VoicePanelTabAnalyticsSources.GESTURE;
                  gestureState(3991).runOnJS(outer1_3)(obj);
                  const runOnJSResult = gestureState(3991).runOnJS(outer1_3);
                }
                const result2 = outer1_13.set(true);
                fail.activate();
              }
            } else {
              fail.fail();
            }
          }
        }
      };
      const onStartResult = result.withRef(closure_12).onTouchesDown(fn).onStart(R);
      fn2.__closure = { State: gestureState(sharedValue1[19]).State, gestureSpecs, controlsSpecs, VoicePanelControlsModes: closure_15, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: outer2_22, isDragScrolling: sharedValue2, sharedTab: closure_1, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: sharedValue1, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200, tab: closure_0, runOnJS: gestureState(sharedValue1[15]).runOnJS, openTab: _slicedToArray, VoicePanelTabAnalyticsSources: gestureState(sharedValue1[20]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
      fn2.__workletHash = 13965683053434;
      fn2.__initData = outer2_28;
      let obj1 = { State: gestureState(sharedValue1[19]).State, gestureSpecs, controlsSpecs, VoicePanelControlsModes: closure_15, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: outer2_22, isDragScrolling: sharedValue2, sharedTab: closure_1, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: sharedValue1, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200, tab: closure_0, runOnJS: gestureState(sharedValue1[15]).runOnJS, openTab: _slicedToArray, VoicePanelTabAnalyticsSources: gestureState(sharedValue1[20]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
      const fn3 = function p(absoluteY) {
        const diff = absoluteY.absoluteY - outer1_8.get().absoluteY;
        const diff1 = outer1_8.get().height - outer1_8.get().y - diff;
        if (diff1 > outer1_8.get().drawerTransitionHeight) {
          if (!outer1_8.get().isDrawer) {
            let obj = {};
            const merged = Object.assign(outer1_8.get());
            obj["isDrawer"] = true;
            const result = outer1_8.set(obj);
          }
          obj = {};
          const merged1 = Object.assign(outer1_2.get());
          obj["x"] = 0;
          obj["y"] = 0;
          const tmp28 = isScreenReaderEnabled(10021);
          obj["width"] = gestureState(11378).getControlsDrawerOpenWidth(outer1_5.get().width, outer1_7.get().left, outer1_7.get().right);
          const _Math = Math;
          obj["height"] = Math.min(diff1, outer1_6.get().drawerHeight - tmp28(outer1_7.get(), outer1_15).height);
          obj["drawerMode"] = true;
          const result1 = outer1_2.set(obj);
          const obj7 = gestureState(11378);
        } else {
          const result2 = diff1 / outer1_8.get().drawerTransitionHeight;
          const height = outer1_4.get().height;
          const _Math2 = Math;
          const result3 = -1 * Math.max(diff1 - outer1_7.get().bottom - height, 0);
          if (outer1_8.get().isDrawer) {
            obj = {};
            const merged2 = Object.assign(outer1_8.get());
            obj["isDrawer"] = false;
            const result4 = outer1_8.set(obj);
          }
          let drawerMode = height === outer1_2.get().height;
          if (!drawerMode) {
            drawerMode = outer1_2.get().drawerMode;
          }
          if (!drawerMode) {
            let obj1 = gestureState(3991);
            obj1.runOnJS(gestureState(4099).triggerHapticFeedback)(gestureState(4099).HapticFeedbackTypes.IMPACT_MEDIUM);
            const runOnJSResult = obj1.runOnJS(gestureState(4099).triggerHapticFeedback);
          }
          obj1 = {};
          const merged3 = Object.assign(outer1_2.get());
          obj1["x"] = 0;
          obj1["y"] = -1 * outer1_7.get().bottom + result3 * (1 - result2 / 1.5);
          obj1["width"] = gestureState(11378).getControlsDefaultWidth(outer1_5.get().width, outer1_7.get().left, outer1_7.get().right);
          obj1["height"] = height;
          obj1["drawerMode"] = false;
          const result5 = outer1_2.set(obj1);
          const obj4 = gestureState(11378);
        }
      };
      const onTouchesMoveResult = onStartResult.onTouchesMove(fn2);
      fn3.__closure = { gestureSpecs, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(sharedValue1[21]), safeArea, edgeGutter: token, wrapperSpecs: sharedValue1, getControlsDrawerOpenWidth: gestureState(sharedValue1[22]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: gestureState(sharedValue1[15]).runOnJS, triggerHapticFeedback: gestureState(sharedValue1[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(sharedValue1[23]).HapticFeedbackTypes, getControlsDefaultWidth: gestureState(sharedValue1[22]).getControlsDefaultWidth };
      fn3.__workletHash = 10007030283382;
      fn3.__initData = outer2_27;
      let obj2 = { gestureSpecs, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(sharedValue1[21]), safeArea, edgeGutter: token, wrapperSpecs: sharedValue1, getControlsDrawerOpenWidth: gestureState(sharedValue1[22]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: gestureState(sharedValue1[15]).runOnJS, triggerHapticFeedback: gestureState(sharedValue1[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(sharedValue1[23]).HapticFeedbackTypes, getControlsDefaultWidth: gestureState(sharedValue1[22]).getControlsDefaultWidth };
      const fn4 = function u() {
        const result = outer1_13.set(false);
        const result1 = outer1_10.set(false);
        const obj = {};
        const merged = Object.assign(outer1_8.get());
        obj["active"] = false;
        const result2 = outer1_8.set(obj);
        gestureState(3991).runOnJS(outer1_14.unlock)();
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn3);
      fn4.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      fn4.__workletHash = 9808165597638;
      fn4.__initData = outer2_26;
      const obj3 = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      const fn5 = function o(velocityY) {
        velocityY = velocityY.velocityY;
        const absolute = Math.abs(velocityY);
        if (absolute > 200) {
          if (velocityY < 0) {
            const obj = {};
            const merged = Object.assign(outer1_2.get());
            obj["height"] = outer1_6.get().drawerHeight - isScreenReaderEnabled(10021)(outer1_7.get(), outer1_15).height;
            const result = outer1_2.set(obj);
            if (outer1_4.get().mode === constants.DRAWER) {
              let DRAWER2 = constants.RESET;
            } else {
              DRAWER2 = constants.DRAWER;
            }
            const tmp16 = isScreenReaderEnabled(10021);
          }
        }
        if (absolute < 200) {
          if (outer1_8.get().isDrawer) {
            if (outer1_4.get().mode === constants.DRAWER) {
              let DRAWER = constants.RESET;
            } else {
              DRAWER = constants.DRAWER;
            }
          }
        }
        if (outer1_4.get().mode === constants.FLOATING_DEFAULT) {
          let FLOATING_DEFAULT = constants.RESET;
        } else {
          FLOATING_DEFAULT = constants.FLOATING_DEFAULT;
        }
        const result1 = outer1_13.set(false);
        const result2 = outer1_10.set(false);
        gestureState(3991).runOnJS(outer1_14.unlock)(FLOATING_DEFAULT);
      };
      const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn4);
      fn5.__closure = { wrapperSpecs: sharedValue1, wrapperDimensions, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(sharedValue1[21]), safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes: closure_15, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      fn5.__workletHash = 12106761920053;
      fn5.__initData = outer2_25;
      let obj4 = { wrapperSpecs: sharedValue1, wrapperDimensions, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(sharedValue1[21]), safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes: closure_15, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      const fn6 = function t() {
        const result = outer1_13.set(false);
        const result1 = outer1_10.set(false);
        gestureState(3991).runOnJS(outer1_14.unlock)();
      };
      const onEndResult = onTouchesCancelledResult.onEnd(fn5);
      fn6.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      fn6.__workletHash = 15918380969837;
      fn6.__initData = outer2_24;
      return onEndResult.onFinalize(fn6);
    }, items);
    const obj6 = gestureState(sharedValue1[18]);
    let fn = function p() {
      return sharedValue1.get().drawerMode;
    };
    fn.__closure = { wrapperSpecs: sharedValue1 };
    fn.__workletHash = 2949834828607;
    fn.__initData = outer1_31;
    let fn2 = function u(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = gestureState(sharedValue1[15]);
        gestureState(sharedValue1[15]).runOnJS(gestureState(sharedValue1[23]).triggerHapticFeedback)(gestureState(sharedValue1[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
        const runOnJSResult = gestureState(sharedValue1[15]).runOnJS(gestureState(sharedValue1[23]).triggerHapticFeedback);
      }
    };
    obj = { runOnJS: gestureState(tmp2[15]).runOnJS, triggerHapticFeedback: gestureState(tmp2[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(tmp2[23]).HapticFeedbackTypes };
    fn2.__closure = obj;
    fn2.__workletHash = 10186886451735;
    fn2.__initData = outer1_32;
    const animatedReaction = gestureState(sharedValue1[15]).useAnimatedReaction(fn, fn2);
    return { gesture, useScrollLock: channelId(controlsSpecs.useState(() => gestureState(sharedValue1[16]).createUseAnimatedScrollLock(closure_12, sharedValue4, sharedValue3, sharedValue2)), 1)[0], gestureSpecs };
  })(first, sharedValue, sharedValue1, callback));
  (function useWrapperSpecs(sharedValue1) {
    let closure_0 = sharedValue1;
    let obj = gestureState(tmp2[24]);
    const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
    tmp2 = isScreenReaderEnabled(tmp2[25])({ ignoreKeyboard: true });
    const context = controlsSpecs.useContext(isScreenReaderEnabled(tmp2[14]));
    controlsSpecs = context.controlsSpecs;
    const windowDimensions = context.windowDimensions;
    const mode = context.mode;
    const setControlsMode = context.setControlsMode;
    const safeArea = context.safeArea;
    const connected = context.connected;
    const fn = function n() {
      return { connected: connected.get(), currentControlsMode: controlsSpecs.get().mode, mode: mode.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, windowHeightIgnoringKeyboard: tmp2.get().height, controlsHeightValue: controlsSpecs.get().height, safeArea: safeArea.get() };
    };
    fn.__closure = { connected, controlsSpecs, mode, windowDimensions, windowDimensionsIgnoringKeyboard: tmp2, safeArea };
    fn.__workletHash = 11588370229444;
    fn.__initData = outer1_33;
    const fn2 = function s(safeAreaState, currentControlsMode) {
      let controlsHeightValue;
      let maxHeight;
      let minHeight;
      let mode;
      let safeArea;
      let windowWidth;
      let obj = gestureState(tmp2[26]);
      let tmp;
      if (null != currentControlsMode) {
        tmp = currentControlsMode;
      }
      if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
        ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
        if (callback.DISMISSED !== mode) {
          if (callback.PIP !== mode) {
            const PANEL = callback.PANEL;
            if (constants.RESET === currentControlsMode) {
              obj = {};
              currentControlsMode = undefined;
              const obj10 = gestureState(tmp2[15]);
              if (null != currentControlsMode) {
                currentControlsMode = currentControlsMode.currentControlsMode;
              }
              if (null == currentControlsMode) {
                currentControlsMode = constants.FLOATING_DEFAULT;
              }
              obj.mode = currentControlsMode;
              gestureState(tmp2[15]).runOnJS(setControlsMode)(obj);
            } else if (constants.HIDDEN === currentControlsMode) {
              if (isScreenReaderEnabled) {
                obj = {};
                const merged = Object.assign(obj7.get());
                obj["hidden"] = false;
                const result = obj7.set(obj);
              } else if (!obj7.get().hidden) {
                let obj1 = {};
                const merged1 = Object.assign(sharedValue1.get());
                obj1["hidden"] = true;
                const result1 = sharedValue1.set(obj1);
              }
            } else if (constants.FLOATING_DEFAULT === currentControlsMode) {
              const obj2 = { x: 0, y: null, width: null, height: null, drawerMode: false, hidden: false };
              const _Math = Math;
              obj2.y = -1 * Math.max(safeArea.bottom, sharedValue1);
              obj2.width = gestureState(tmp2[22]).getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right);
              obj2.height = controlsHeightValue;
              const result2 = sharedValue1.set(obj2);
              const obj6 = gestureState(tmp2[22]);
            } else if (constants.DRAWER === currentControlsMode) {
              const drawerSpec = gestureState(tmp2[27]).getDrawerSpec(tmp2, safeArea.top);
              ({ minHeight, maxHeight } = drawerSpec);
              if (sharedValue1.get().height <= controlsHeightValue) {
                minHeight = maxHeight;
              } else if (null != currentControlsMode) {
                obj1 = gestureState(tmp2[27]);
              }
              let obj3 = { x: 0, y: 0, width: null, height: null, drawerMode: true, hidden: false };
              obj3 = gestureState(tmp2[22]);
              obj3.width = obj3.getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right);
              obj3.height = minHeight;
              const result3 = sharedValue1.set(obj3);
              const obj13 = gestureState(tmp2[27]);
            }
          }
        }
        if (!sharedValue1.get().hidden) {
          const obj4 = {};
          const merged2 = Object.assign(sharedValue1.get());
          obj4["hidden"] = true;
          const result4 = sharedValue1.set(obj4);
        }
      }
    };
    obj = { cheapWorkletShallowEqual: gestureState(tmp2[26]).cheapWorkletShallowEqual, VoicePanelModes: callback, wrapperSpecs: sharedValue1, VoicePanelControlsModes: closure_15, runOnJS: gestureState(tmp2[15]).runOnJS, setControlsMode, isScreenReaderEnabled, EDGE_GUTTER: sharedValue1, getControlsDefaultWidth: gestureState(tmp2[22]).getControlsDefaultWidth, getDrawerSpec: gestureState(tmp2[27]).getDrawerSpec, getControlsDrawerOpenWidth: gestureState(tmp2[22]).getControlsDrawerOpenWidth };
    fn2.__closure = obj;
    fn2.__workletHash = 1154430392188;
    fn2.__initData = outer1_34;
    const animatedReaction = gestureState(tmp2[15]).useAnimatedReaction(fn, fn2);
  })(sharedValue1);
  const tmp21 = channelId(controlsSpecs.useState(false), 2);
  let closure_15 = tmp22;
  const tmp19 = (function useControlsGesture(first, sharedValue, sharedValue1, callback) {
    let closure_0 = first;
    let closure_1 = sharedValue;
    let _slicedToArray = callback;
    const context = controlsSpecs.useContext(isScreenReaderEnabled(tmp2[14]));
    controlsSpecs = context.controlsSpecs;
    const windowDimensions = context.windowDimensions;
    const wrapperDimensions = context.wrapperDimensions;
    const safeArea = context.safeArea;
    let obj = gestureState(tmp2[15]);
    const gestureSpecs = obj.useSharedValue({ absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: false, active: false, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 });
    sharedValue1 = gestureState(sharedValue1[15]).useSharedValue(0);
    let obj2 = gestureState(sharedValue1[15]);
    const sharedValue2 = gestureState(sharedValue1[15]).useSharedValue(false);
    let obj3 = gestureState(sharedValue1[15]);
    const sharedValue3 = gestureState(sharedValue1[15]).useSharedValue(0);
    let closure_12 = controlsSpecs.useRef(undefined);
    let obj4 = gestureState(sharedValue1[15]);
    const sharedValue4 = gestureState(sharedValue1[15]).useSharedValue(false);
    const tmp7 = isScreenReaderEnabled(sharedValue1[17])();
    let token = tmp7;
    const obj5 = gestureState(sharedValue1[15]);
    token = gestureState(sharedValue1[18]).useToken(isScreenReaderEnabled(tmp2[10]).modules.mobile.VOICE_PANEL_GUTTER);
    const items = [controlsSpecs, tmp7, gestureSpecs, sharedValue2, callback, safeArea, sharedValue4, sharedValue3, sharedValue, first, sharedValue1, windowDimensions, wrapperDimensions, sharedValue1, token];
    const gesture = controlsSpecs.useMemo(() => {
      const Gesture = gestureState(sharedValue1[19]).Gesture;
      const PanResult = Gesture.Pan();
      const manualActivationResult = Gesture.Pan().manualActivation(true);
      let result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
      const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
      const fn = function b(absoluteX) {
        const result = outer1_9.set(0);
        const result1 = outer1_8.set({ absoluteX: absoluteX.changedTouches[0].absoluteX, absoluteY: absoluteX.changedTouches[0].absoluteY, x: outer1_2.get().x, y: outer1_2.get().y, height: outer1_2.get().height, isDrawer: outer1_4.get().mode === constants.DRAWER, active: false, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 });
      };
      let obj = { touchMoveCount: sharedValue1, gestureSpecs, wrapperSpecs: sharedValue1, controlsSpecs, VoicePanelControlsModes: closure_15, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200 };
      fn.__closure = obj;
      fn.__workletHash = 3524850376026;
      fn.__initData = outer2_30;
      const withRefResult = result.withRef(closure_12);
      class R {
        constructor() {
          obj = gestureState(outer3_2[15]);
          tmp = obj.runOnJS(outer1_14.lock)();
          return;
        }
      }
      obj = { runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      R.__closure = obj;
      R.__workletHash = 11720944776433;
      R.__initData = outer2_29;
      const onTouchesDownResult = result.withRef(closure_12).onTouchesDown(fn);
      const fn2 = function h(state, fail) {
        if (state.state === gestureState(5217).State.BEGAN) {
          if (!outer1_8.get().active) {
            if (outer1_4.get().mode !== constants.HIDDEN) {
              const result = outer1_9.set(outer1_9.get() + 1);
              let value = outer1_9.get() <= outer3_22;
              if (!value) {
                value = outer1_10.get();
              }
              value = outer1_1.get();
              if ("settings" === value) {
                let num2 = outer1_11.get();
              } else {
                num2 = 0;
              }
              const first = state.changedTouches[0];
              const absoluteY = first.absoluteY;
              const diff = outer1_8.get().absoluteY - absoluteY;
              let tmp17 = outer1_4.get().mode === constants.DRAWER && value;
              if (tmp17) {
                tmp17 = diff >= 0 || num2 > 0;
                const tmp18 = diff >= 0 || num2 > 0;
              }
              if (!tmp17) {
                if (outer1_4.get().mode !== constants.FLOATING_DEFAULT) {
                  const _Math = Math;
                  const _Math2 = Math;
                  const absolute = Math.abs(diff);
                  if (absolute > Math.abs(30)) {
                    fail.fail();
                  }
                }
                let obj = { absoluteX: first.absoluteX, absoluteY, x: outer1_2.get().x, y: outer1_2.get().y, height: outer1_2.get().height, isDrawer: outer1_4.get().mode === constants.DRAWER, active: true, drawerTransitionHeight: 200, interFloatingTransitionHeight: 200 };
                const result1 = outer1_8.set(obj);
                let tmp30 = outer1_4.get().mode !== constants.DRAWER;
                if (tmp30) {
                  tmp30 = "settings" !== outer1_0;
                }
                if (tmp30) {
                  obj = { tab: "settings", source: null, disableControlsUpdate: true };
                  const obj2 = gestureState(3991);
                  obj.source = gestureState(15849).VoicePanelTabAnalyticsSources.GESTURE;
                  gestureState(3991).runOnJS(outer1_3)(obj);
                  const runOnJSResult = gestureState(3991).runOnJS(outer1_3);
                }
                const result2 = outer1_13.set(true);
                fail.activate();
              }
            } else {
              fail.fail();
            }
          }
        }
      };
      const onStartResult = result.withRef(closure_12).onTouchesDown(fn).onStart(R);
      fn2.__closure = { State: gestureState(sharedValue1[19]).State, gestureSpecs, controlsSpecs, VoicePanelControlsModes: closure_15, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: outer2_22, isDragScrolling: sharedValue2, sharedTab: closure_1, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: sharedValue1, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200, tab: closure_0, runOnJS: gestureState(sharedValue1[15]).runOnJS, openTab: _slicedToArray, VoicePanelTabAnalyticsSources: gestureState(sharedValue1[20]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
      fn2.__workletHash = 13965683053434;
      fn2.__initData = outer2_28;
      let obj1 = { State: gestureState(sharedValue1[19]).State, gestureSpecs, controlsSpecs, VoicePanelControlsModes: closure_15, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: outer2_22, isDragScrolling: sharedValue2, sharedTab: closure_1, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs: sharedValue1, TRANSITIONAL_HEIGHT: 200, INTER_FLOATING_TRANSITIONAL_HEIGHT: 200, tab: closure_0, runOnJS: gestureState(sharedValue1[15]).runOnJS, openTab: _slicedToArray, VoicePanelTabAnalyticsSources: gestureState(sharedValue1[20]).VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
      const fn3 = function p(absoluteY) {
        const diff = absoluteY.absoluteY - outer1_8.get().absoluteY;
        const diff1 = outer1_8.get().height - outer1_8.get().y - diff;
        if (diff1 > outer1_8.get().drawerTransitionHeight) {
          if (!outer1_8.get().isDrawer) {
            let obj = {};
            const merged = Object.assign(outer1_8.get());
            obj["isDrawer"] = true;
            const result = outer1_8.set(obj);
          }
          obj = {};
          const merged1 = Object.assign(outer1_2.get());
          obj["x"] = 0;
          obj["y"] = 0;
          const tmp28 = isScreenReaderEnabled(10021);
          obj["width"] = gestureState(11378).getControlsDrawerOpenWidth(outer1_5.get().width, outer1_7.get().left, outer1_7.get().right);
          const _Math = Math;
          obj["height"] = Math.min(diff1, outer1_6.get().drawerHeight - tmp28(outer1_7.get(), outer1_15).height);
          obj["drawerMode"] = true;
          const result1 = outer1_2.set(obj);
          const obj7 = gestureState(11378);
        } else {
          const result2 = diff1 / outer1_8.get().drawerTransitionHeight;
          const height = outer1_4.get().height;
          const _Math2 = Math;
          const result3 = -1 * Math.max(diff1 - outer1_7.get().bottom - height, 0);
          if (outer1_8.get().isDrawer) {
            obj = {};
            const merged2 = Object.assign(outer1_8.get());
            obj["isDrawer"] = false;
            const result4 = outer1_8.set(obj);
          }
          let drawerMode = height === outer1_2.get().height;
          if (!drawerMode) {
            drawerMode = outer1_2.get().drawerMode;
          }
          if (!drawerMode) {
            let obj1 = gestureState(3991);
            obj1.runOnJS(gestureState(4099).triggerHapticFeedback)(gestureState(4099).HapticFeedbackTypes.IMPACT_MEDIUM);
            const runOnJSResult = obj1.runOnJS(gestureState(4099).triggerHapticFeedback);
          }
          obj1 = {};
          const merged3 = Object.assign(outer1_2.get());
          obj1["x"] = 0;
          obj1["y"] = -1 * outer1_7.get().bottom + result3 * (1 - result2 / 1.5);
          obj1["width"] = gestureState(11378).getControlsDefaultWidth(outer1_5.get().width, outer1_7.get().left, outer1_7.get().right);
          obj1["height"] = height;
          obj1["drawerMode"] = false;
          const result5 = outer1_2.set(obj1);
          const obj4 = gestureState(11378);
        }
      };
      const onTouchesMoveResult = onStartResult.onTouchesMove(fn2);
      fn3.__closure = { gestureSpecs, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(sharedValue1[21]), safeArea, edgeGutter: token, wrapperSpecs: sharedValue1, getControlsDrawerOpenWidth: gestureState(sharedValue1[22]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: gestureState(sharedValue1[15]).runOnJS, triggerHapticFeedback: gestureState(sharedValue1[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(sharedValue1[23]).HapticFeedbackTypes, getControlsDefaultWidth: gestureState(sharedValue1[22]).getControlsDefaultWidth };
      fn3.__workletHash = 10007030283382;
      fn3.__initData = outer2_27;
      let obj2 = { gestureSpecs, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(sharedValue1[21]), safeArea, edgeGutter: token, wrapperSpecs: sharedValue1, getControlsDrawerOpenWidth: gestureState(sharedValue1[22]).getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: gestureState(sharedValue1[15]).runOnJS, triggerHapticFeedback: gestureState(sharedValue1[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(sharedValue1[23]).HapticFeedbackTypes, getControlsDefaultWidth: gestureState(sharedValue1[22]).getControlsDefaultWidth };
      const fn4 = function u() {
        const result = outer1_13.set(false);
        const result1 = outer1_10.set(false);
        const obj = {};
        const merged = Object.assign(outer1_8.get());
        obj["active"] = false;
        const result2 = outer1_8.set(obj);
        gestureState(3991).runOnJS(outer1_14.unlock)();
      };
      const onChangeResult = onTouchesMoveResult.onChange(fn3);
      fn4.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      fn4.__workletHash = 9808165597638;
      fn4.__initData = outer2_26;
      const obj3 = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      const fn5 = function o(velocityY) {
        velocityY = velocityY.velocityY;
        const absolute = Math.abs(velocityY);
        if (absolute > 200) {
          if (velocityY < 0) {
            const obj = {};
            const merged = Object.assign(outer1_2.get());
            obj["height"] = outer1_6.get().drawerHeight - isScreenReaderEnabled(10021)(outer1_7.get(), outer1_15).height;
            const result = outer1_2.set(obj);
            if (outer1_4.get().mode === constants.DRAWER) {
              let DRAWER2 = constants.RESET;
            } else {
              DRAWER2 = constants.DRAWER;
            }
            const tmp16 = isScreenReaderEnabled(10021);
          }
        }
        if (absolute < 200) {
          if (outer1_8.get().isDrawer) {
            if (outer1_4.get().mode === constants.DRAWER) {
              let DRAWER = constants.RESET;
            } else {
              DRAWER = constants.DRAWER;
            }
          }
        }
        if (outer1_4.get().mode === constants.FLOATING_DEFAULT) {
          let FLOATING_DEFAULT = constants.RESET;
        } else {
          FLOATING_DEFAULT = constants.FLOATING_DEFAULT;
        }
        const result1 = outer1_13.set(false);
        const result2 = outer1_10.set(false);
        gestureState(3991).runOnJS(outer1_14.unlock)(FLOATING_DEFAULT);
      };
      const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn4);
      fn5.__closure = { wrapperSpecs: sharedValue1, wrapperDimensions, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(sharedValue1[21]), safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes: closure_15, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      fn5.__workletHash = 12106761920053;
      fn5.__initData = outer2_25;
      let obj4 = { wrapperSpecs: sharedValue1, wrapperDimensions, calculateVoicePanelHeaderSpecs: isScreenReaderEnabled(sharedValue1[21]), safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes: closure_15, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      const fn6 = function t() {
        const result = outer1_13.set(false);
        const result1 = outer1_10.set(false);
        gestureState(3991).runOnJS(outer1_14.unlock)();
      };
      const onEndResult = onTouchesCancelledResult.onEnd(fn5);
      fn6.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: gestureState(sharedValue1[15]).runOnJS, gestureLock: closure_14 };
      fn6.__workletHash = 15918380969837;
      fn6.__initData = outer2_24;
      return onEndResult.onFinalize(fn6);
    }, items);
    const obj6 = gestureState(sharedValue1[18]);
    let fn = function p() {
      return sharedValue1.get().drawerMode;
    };
    fn.__closure = { wrapperSpecs: sharedValue1 };
    fn.__workletHash = 2949834828607;
    fn.__initData = outer1_31;
    let fn2 = function u(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = gestureState(sharedValue1[15]);
        gestureState(sharedValue1[15]).runOnJS(gestureState(sharedValue1[23]).triggerHapticFeedback)(gestureState(sharedValue1[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
        const runOnJSResult = gestureState(sharedValue1[15]).runOnJS(gestureState(sharedValue1[23]).triggerHapticFeedback);
      }
    };
    obj = { runOnJS: gestureState(tmp2[15]).runOnJS, triggerHapticFeedback: gestureState(tmp2[23]).triggerHapticFeedback, HapticFeedbackTypes: gestureState(tmp2[23]).HapticFeedbackTypes };
    fn2.__closure = obj;
    fn2.__workletHash = 10186886451735;
    fn2.__initData = outer1_32;
    const animatedReaction = gestureState(sharedValue1[15]).useAnimatedReaction(fn, fn2);
    return { gesture, useScrollLock: channelId(controlsSpecs.useState(() => gestureState(sharedValue1[16]).createUseAnimatedScrollLock(closure_12, sharedValue4, sharedValue3, sharedValue2)), 1)[0], gestureSpecs };
  })(first, sharedValue, sharedValue1, callback);
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
        tmp2 = outer1_15;
        if (gestureState === outer1_15.DRAWER) {
          tmp3 = outer1_15;
          if (arg1 !== outer1_15.DRAWER) {
            tmp11 = gestureState;
            tmp12 = outer1_2;
            num2 = 15;
            obj2 = gestureState(outer1_2[15]);
            tmp13 = closure_15;
            flag2 = true;
            tmp14 = obj2.runOnJS(closure_15)(true);
          }
        }
        tmp4 = outer1_15;
        tmp5 = gestureState !== outer1_15.DRAWER;
        if (tmp5) {
          tmp6 = outer1_15;
          tmp5 = arg1 === outer1_15.DRAWER;
        }
        if (tmp5) {
          tmp7 = gestureState;
          tmp8 = outer1_2;
          num = 15;
          obj = gestureState(outer1_2[15]);
          tmp9 = closure_15;
          flag = false;
          tmp10 = obj.runOnJS(closure_15)(false);
        }
      }
      return;
    }
  }
  obj2 = { isScreenReaderEnabled, VoicePanelControlsModes: closure_15, runOnJS: gestureState(3991).runOnJS, setIsDrawer: tmp22 };
  De.__closure = obj2;
  De.__workletHash = 12036469956927;
  De.__initData = closure_41;
  let animatedReaction = gestureState(3991).useAnimatedReaction(Ae, De);
  const tmp24 = channelId(controlsSpecs.useState(false), 2);
  let closure_16 = tmp25;
  const obj14 = gestureState(3991);
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
      const runOnJSResult = gestureState(gestureState[15]).runOnJS(closure_16);
      if (arg0) {
        runOnJSResult(true);
      } else {
        runOnJSResult(false);
      }
      const obj = gestureState(gestureState[15]);
    }
  }
  obj3 = { isRefreshEnabled: tmp2, runOnJS: gestureState(3991).runOnJS, setIsDrawerActive: tmp25 };
  be.__closure = obj3;
  be.__workletHash = 1721919006032;
  be.__initData = closure_43;
  const animatedReaction1 = gestureState(3991).useAnimatedReaction(Me, be);
  const items3 = [setControlsMode];
  const id = controlsSpecs.useId();
  const callback1 = controlsSpecs.useCallback(() => {
    setControlsMode({ mode: tmp22.FLOATING_DEFAULT });
  }, items3);
  obj4 = { value: useScrollLock };
  const items4 = [callback(isScreenReaderEnabled(15882), { wrapperSpecs: sharedValue1 }), callback(closure_35, { channelId, wrapperSpecs: sharedValue1, controlsSpecs, accessoryHeights: tmp12, gestureState }), ];
  let obj5 = { nativeID: id, style: tmp4.accessibilityWrapper, accessibilityViewIsModal: tmp21[0], onAccessibilityEscape: callback1, pointerEvents: "box-none" };
  const obj16 = gestureState(3991);
  obj6 = { gesture };
  obj7 = { style: items5, animatedProps };
  items5 = [tmp4.wrapper, animatedStyle];
  const tmp31 = isScreenReaderEnabled(15779);
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
    const obj24 = gestureState(477);
    tmp36 = gestureState(477).isAndroid() || tmp2;
    const tmp39 = gestureState(477).isAndroid() || tmp2;
  }
  obj9.matchAppTheme = tmp36;
  const items6 = [callback(gestureState(15858).VoicePanelVisualEffectView, obj9), callback(closure_37, { openTab: callback, wrapperSpecs: sharedValue1, sharedTab: sharedValue })];
  obj8.children = items6;
  const items7 = [closure_20(gestureState(3842).ThemeContextProvider, obj8), callback(isScreenReaderEnabled(15883), { wrapperSpecs: sharedValue1, tab: first, sharedTab: sharedValue, gestureSpecs, openTab: callback }), ];
  const tmp32 = isScreenReaderEnabled(7589);
  const tmp35 = callback;
  let tmp40 = null;
  if (!obj25.isMetaQuest()) {
    let obj10 = { openTab: callback };
    tmp40 = callback(closure_23, obj10);
  }
  items7[2] = tmp40;
  obj7.children = items7;
  obj6.children = closure_20(tmp32, obj7);
  obj5.children = callback(gestureState(5217).GestureDetector, obj6);
  items4[2] = callback(tmp31, obj5);
  obj4.children = items4;
  return closure_20(gestureState(11222).ControlsGestureScrollLock.Provider, obj4);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default memoResult;
