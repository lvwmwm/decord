// Module ID: 14849
// Function ID: 113213
// Name: HOME_DRAWER_FLING_PHYSICS
// Dependencies: [57, 31, 14850, 14851, 653, 3987, 3991, 1457, 675, 4099, 1450, 1557, 3984, 14852, 3981, 4542, 5217, 7679, 2]
// Exports: useHomeGesture

// Module 14849 (HOME_DRAWER_FLING_PHYSICS)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import computeMaxX from "computeMaxX";
import { computeMaxX } from "computeMaxX";
import keys from "keys";
import { AnalyticEvents } from "ME";
import { Gesture } from "Directions";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";

const require = arg1;
let closure_9 = { mass: 0.3, damping: 30, stiffness: 400 };
let obj = { mass: 0.4, damping: 100, stiffness: 250 };
let closure_11 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_12 = { code: "function useHomeDrawerGestureTsx1(){const{dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
let closure_13 = { code: "function useHomeDrawerGestureTsx2(isOpen,wasOpen){const{gestureState,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active||wasOpen===null){return;}if(isOpen===wasOpen){return;}if(isOpen){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}" };
let closure_14 = { code: "function useHomeDrawerGestureTsx3(){const{panelX,peekX}=this.__closure;return panelX.get()+peekX.get();}" };
let closure_15 = { code: "function useHomeDrawerGestureTsx4(){const{isDrawerInitialized,initialPanelX,withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;if(!isDrawerInitialized.get()){return initialPanelX;}return withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always');}" };
let closure_16 = { code: "function useHomeDrawerGestureTsx5(){const{panelGestureSpringX,peekX}=this.__closure;return panelGestureSpringX.get()+peekX.get();}" };
let closure_17 = { code: "function useHomeDrawerGestureTsx6(){const{safeAreaInsets,panelSpringTranslateX}=this.__closure;return{flex:1,marginTop:safeAreaInsets.top,transform:[{translateX:panelSpringTranslateX.get()}]};}" };
let closure_18 = { code: "function useHomeDrawerGestureTsx7(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,GUILD_DESCRIPTION_ANIMATION_DISTANCE,MIN_HOME_DRAWER_TEXT_OPACITY,MIN_HOME_DRAWER_OPEN_WIDTH,GUILD_LABEL_UNSNAPPED_SCALE,withSpring,HOME_DRAWER_FLING_PHYSICS,clamp}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(GUILD_DESCRIPTION_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*GUILD_DESCRIPTION_ANIMATION_DISTANCE);}const opacity=MIN_HOME_DRAWER_TEXT_OPACITY+drawerRevealX.get()/MIN_HOME_DRAWER_OPEN_WIDTH*(1-MIN_HOME_DRAWER_TEXT_OPACITY);const scale=drawerRevealX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH?1:GUILD_LABEL_UNSNAPPED_SCALE;return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)},{scale:withSpring(scale,HOME_DRAWER_FLING_PHYSICS)}],opacity:withSpring(clamp(opacity,0,1),HOME_DRAWER_FLING_PHYSICS)};}" };
let closure_19 = { code: "function useHomeDrawerGestureTsx8(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,MAX_HOME_DRAWER_ICON_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(MAX_HOME_DRAWER_ICON_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*MAX_HOME_DRAWER_ICON_DISTANCE);}return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}]};}" };
let closure_20 = { code: "function useHomeDrawerGestureTsx9(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,UNREAD_INDICATOR_ANIMATION_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let left=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){left=-Math.min(UNREAD_INDICATOR_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*UNREAD_INDICATOR_ANIMATION_DISTANCE);}return{transform:[{translateX:withSpring(left,HOME_DRAWER_FLING_PHYSICS)}]};}" };
let closure_21 = { code: "function settleDrawer_useHomeDrawerGestureTsx10(shouldOpen){const{panelX,maxX,runOnJS,setHomeDrawerState}=this.__closure;panelX.set(shouldOpen?maxX:0);runOnJS(setHomeDrawerState)(shouldOpen);}" };
let closure_22 = { code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx11(){const{panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;if(panelX.get()===0)return false;if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(panelX.get()>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}" };
let closure_23 = { code: "function useHomeDrawerGestureTsx12(){const{panelX,maxX,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,gestureState,dragOffsetX}=this.__closure;if(panelX.get()>0&&panelX.get()<maxX){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}" };
let closure_24 = { code: "function useHomeDrawerGestureTsx13(event){const{FLING_MIN_VELOCITY,dragOffsetX,FLING_MIN_DISTANCE,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;let shouldOpen;if(event.velocityX>FLING_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&dragOffsetX.get()<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}" };
let closure_25 = { code: "function useHomeDrawerGestureTsx14(event){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH,panelX,DRAWER_RESISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const basePosition=newXOffset+gestureState.get().panelX;if(gestureState.get().panelX===0&&newXOffset>=0&&newXOffset<INITIAL_OPEN_WIDTH){panelX.set(Math.max(basePosition/DRAWER_RESISTANCE,0));}else{panelX.set(Math.max(basePosition,0));}}" };
let closure_26 = { code: "function useHomeDrawerGestureTsx15(event,manager){const{gestureState,panelX,ACTIVATION_MIN_DISTANCE}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}" };
let closure_27 = { code: "function useHomeDrawerGestureTsx16(event){const{isPanelTouchActive,gestureState,panelX}=this.__closure;isPanelTouchActive.set(true);gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()});}" };
obj = {};
obj.gesture = Gesture.Pan();
obj.panelStyles = {};
obj.gestureState = createFakeSharedValue.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
obj.panelX = require("_slicedToArray");
obj.panelSpringTranslateX = require("_slicedToArray");
obj.guildsBarLabelDrawerStyle = {};
obj.guildsBarIconDrawerStyle = {};
obj.guildsBarUnreadDrawerStyle = {};
const context = importAllResult.createContext(obj);
let result = require("computeMaxX").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const HOME_DRAWER_FLING_PHYSICS = obj;
export const useHomeGesture = function useHomeGesture() {
  let enableHome;
  let landOnHome;
  const MobileHomeDrawerExperiment = panelX(updateMaxX[5]).MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
  ({ enableHome, landOnHome } = config);
  let tmp2 = isPanelTouchActive();
  panelX = tmp2.panelX;
  let gestureState = tmp2.gestureState;
  updateMaxX = tmp2.updateMaxX;
  const maxX = tmp2.maxX;
  const setPanelX = tmp2.setPanelX;
  isPanelTouchActive = tmp2.isPanelTouchActive;
  const noteInteraction = tmp2.noteInteraction;
  let obj = panelX(updateMaxX[6]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = panelX(updateMaxX[6]);
  const sharedValue1 = obj1.useSharedValue(false);
  let obj2 = panelX(updateMaxX[7]);
  const navigation = obj2.useNavigation();
  const callback = setPanelX.useCallback((action) => {
    let obj = gestureState(updateMaxX[8]);
    obj = { action };
    obj.track(sharedValue1.SERVER_DRAWER_INTERACT, obj);
  }, []);
  let obj4 = panelX(updateMaxX[6]);
  let fn = function k() {
    return sharedValue.get() >= 144;
  };
  fn.__closure = { dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: 144 };
  fn.__workletHash = 2525772891435;
  fn.__initData = closure_12;
  let fn2 = function b(arg0, arg1) {
    let active = gestureState.get().active;
    if (active) {
      active = null !== arg1;
    }
    if (active) {
      active = arg0 !== arg1;
    }
    if (active) {
      const runOnJSResult = panelX(updateMaxX[6]).runOnJS(panelX(updateMaxX[9]).triggerHapticFeedback);
      const HapticFeedbackTypes = panelX(updateMaxX[9]).HapticFeedbackTypes;
      if (arg0) {
        runOnJSResult(HapticFeedbackTypes.IMPACT_MEDIUM);
      } else {
        runOnJSResult(HapticFeedbackTypes.SOFT);
      }
      const obj = panelX(updateMaxX[6]);
    }
  };
  obj = { gestureState, runOnJS: panelX(updateMaxX[6]).runOnJS, triggerHapticFeedback: panelX(updateMaxX[9]).triggerHapticFeedback, HapticFeedbackTypes: panelX(updateMaxX[9]).HapticFeedbackTypes };
  fn2.__closure = obj;
  fn2.__workletHash = 11947599708940;
  fn2.__initData = enableHome;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  let tmp7 = gestureState(updateMaxX[10])();
  let closure_11 = tmp7;
  let tmp8 = gestureState(updateMaxX[11])();
  closure_12 = tmp8;
  if (enableHome) {
    enableHome = !gestureState(updateMaxX[12])().isChatBesideChannelList;
  }
  let isFocused = enableHome;
  if (enableHome) {
    isFocused = obj7.useIsFocused();
  }
  obj7 = panelX(updateMaxX[7]);
  const sharedValue2 = panelX(updateMaxX[6]).useSharedValue(0);
  const obj8 = panelX(updateMaxX[6]);
  let enablePeekHint = enableHome;
  if (enableHome) {
    enablePeekHint = config.enablePeekHint;
  }
  const homeDrawerPeekHint = panelX(updateMaxX[13]).useHomeDrawerPeekHint(enablePeekHint, sharedValue2);
  const obj9 = panelX(updateMaxX[13]);
  function le() {
    const value = panelX.get();
    return value + sharedValue2.get();
  }
  le.__closure = { panelX, peekX: sharedValue2 };
  le.__workletHash = 4654854314200;
  le.__initData = isFocused;
  const derivedValue = panelX(updateMaxX[6]).useDerivedValue(le);
  let state = navigation.getState();
  const obj10 = panelX(updateMaxX[6]);
  let tmp14;
  if (null != state) {
    let routes = state.routes;
    if (null != routes) {
      let index;
      if (null != state) {
        index = state.index;
      }
      let num = 0;
      if (null != index) {
        num = index;
      }
      tmp14 = routes[num];
    }
  }
  let coerceGuildsRouteResult = panelX(updateMaxX[14]).coerceGuildsRoute(tmp14);
  let tmp17 = enableHome;
  if (enableHome) {
    let drawerOpen;
    if (null != coerceGuildsRouteResult) {
      let params = coerceGuildsRouteResult.params;
      if (null != params) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (null != drawerOpen) {
      landOnHome = drawerOpen;
    }
    tmp17 = landOnHome;
  }
  let closure_17 = tmp17;
  let num2 = 0;
  if (tmp17) {
    num2 = noteInteraction(tmp7, tmp8);
  }
  let items = [tmp7, tmp8, updateMaxX, enableHome];
  const effect = setPanelX.useEffect(() => {
    if (enableHome) {
      tmp(closure_11, closure_12);
    } else {
      tmp({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [enableHome, panelX];
  const effect1 = setPanelX.useEffect(() => {
    if (!enableHome) {
      const result = panelX.set(0);
      panelX(updateMaxX[14]).setHomeDrawerState(false);
      const obj = panelX(updateMaxX[14]);
    }
  }, items1);
  const items2 = [navigation, setPanelX, enableHome];
  const effect2 = setPanelX.useEffect(() => {
    function handleStateChange(data) {
      let state = data.data.state;
      let tmp;
      if (null != state) {
        const routes = state.routes;
        if (null != routes) {
          let index;
          if (null != state) {
            index = state.index;
          }
          let num = 0;
          if (null != index) {
            num = index;
          }
          tmp = routes[num];
        }
      }
      const coerceGuildsRouteResult = panelX(updateMaxX[14]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        if (outer1_13) {
          const params = coerceGuildsRouteResult.params;
          let drawerOpen;
          if (null != params) {
            drawerOpen = params.drawerOpen;
          }
          let str = "closed";
          if (true === drawerOpen) {
            str = "open";
          }
          outer1_4(str);
          state = sharedValue.getState();
          if (true === drawerOpen) {
            state.startTimer();
          } else {
            state.stopTimer();
          }
          const tmp7 = outer1_4;
        }
      }
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      outer1_9.removeListener("state", handleStateChange);
      const state = sharedValue.getState();
      state.stopTimer();
    };
  }, items2);
  let closure_19 = setPanelX.useRef(false);
  const items3 = [enableHome, tmp17, num2, panelX];
  const layoutEffect = setPanelX.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !ref.current;
    }
    if (tmp) {
      const result = panelX.set(num2);
      if (closure_17) {
        const state = sharedValue.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items3);
  const items4 = [enableHome, sharedValue1];
  const effect3 = setPanelX.useEffect(() => {
    if (ref.current) {
      const result = sharedValue1.set(true);
    }
  }, items4);
  const obj11 = panelX(updateMaxX[14]);
  class De {
    constructor() {
      if (closure_8.get()) {
        tmp = panelX;
        tmp2 = updateMaxX;
        num = 15;
        obj = panelX(updateMaxX[15]);
        tmp3 = panelX;
        tmp5 = gestureState;
        value = panelX.get();
        str = "animate-always";
        withSpringResult = obj.withSpring(value, gestureState.get().active ? outer1_9 : useNavigation, "animate-always");
      } else {
        return c18;
      }
      return;
    }
  }
  obj = { isDrawerInitialized: sharedValue1, initialPanelX: num2, withSpring: panelX(updateMaxX[15]).withSpring, panelX, gestureState, HOME_GESTURE_DRAG_PHYSICS: navigation, HOME_DRAWER_FLING_PHYSICS: callback };
  De.__closure = obj;
  De.__workletHash = 11078734703352;
  De.__initData = sharedValue2;
  const derivedValue1 = panelX(updateMaxX[6]).useDerivedValue(De);
  const obj12 = panelX(updateMaxX[6]);
  function pe() {
    const value = derivedValue1.get();
    return value + sharedValue2.get();
  }
  pe.__closure = { panelGestureSpringX: derivedValue1, peekX: sharedValue2 };
  pe.__workletHash = 2927026959998;
  pe.__initData = derivedValue;
  const derivedValue2 = panelX(updateMaxX[6]).useDerivedValue(pe);
  const obj14 = panelX(updateMaxX[6]);
  class Ee {
    constructor() {
      obj = { flex: 1, marginTop: closure_12.top };
      obj = { translateX: useAnimatedReaction.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  Ee.__closure = { safeAreaInsets: tmp8, panelSpringTranslateX: derivedValue2 };
  Ee.__workletHash = 13544610996653;
  Ee.__initData = closure_17;
  const animatedStyle = panelX(updateMaxX[6]).useAnimatedStyle(Ee);
  const obj15 = panelX(updateMaxX[6]);
  class Oe {
    constructor() {
      num = 0;
      if (useDerivedValue.get() < 48) {
        tmp = globalThis;
        _Math = Math;
        tmp2 = useDerivedValue;
        num2 = 12;
        num = Math.min(12, useDerivedValue.get() / 48 * 12);
      }
      result = useDerivedValue.get() / 150;
      num3 = 0.98;
      if (useDerivedValue.get() >= 48) {
        num3 = 1;
      }
      obj = {};
      obj = {};
      obj3 = panelX(updateMaxX[15]);
      obj.translateX = obj3.withSpring(num, useNavigation);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj5 = panelX(updateMaxX[15]);
      obj1.scale = obj5.withSpring(num3, useNavigation);
      items[1] = obj1;
      obj.transform = items;
      obj6 = panelX(updateMaxX[15]);
      obj7 = panelX(updateMaxX[6]);
      obj.opacity = obj6.withSpring(obj7.clamp(result, 0, 1), useNavigation);
      return obj;
    }
  }
  obj1 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: 48, GUILD_DESCRIPTION_ANIMATION_DISTANCE: 12, MIN_HOME_DRAWER_TEXT_OPACITY: 0, MIN_HOME_DRAWER_OPEN_WIDTH: 150, GUILD_LABEL_UNSNAPPED_SCALE: 0.98, withSpring: panelX(updateMaxX[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: callback, clamp: panelX(updateMaxX[6]).clamp };
  Oe.__closure = obj1;
  Oe.__workletHash = 11639414708115;
  Oe.__initData = num2;
  let closure_23 = panelX(updateMaxX[6]).useAnimatedStyle(Oe);
  const obj16 = panelX(updateMaxX[6]);
  class Te {
    constructor() {
      num = 0;
      if (useDerivedValue.get() < 48) {
        tmp = globalThis;
        _Math = Math;
        tmp2 = useDerivedValue;
        num2 = 8;
        num = Math.min(8, useDerivedValue.get() / 48 * 8);
      }
      obj = {};
      obj = {};
      obj3 = panelX(updateMaxX[15]);
      obj.translateX = obj3.withSpring(num, useNavigation);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj2 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: 48, MAX_HOME_DRAWER_ICON_DISTANCE: 8, withSpring: panelX(updateMaxX[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: callback };
  Te.__closure = obj2;
  Te.__workletHash = 16360618332998;
  Te.__initData = closure_19;
  let closure_24 = panelX(updateMaxX[6]).useAnimatedStyle(Te);
  const obj18 = panelX(updateMaxX[6]);
  class Xe {
    constructor() {
      num = 0;
      if (useDerivedValue.get() < 48) {
        tmp = globalThis;
        _Math = Math;
        tmp2 = useDerivedValue;
        num2 = 4;
        num = -Math.min(4, useDerivedValue.get() / 48 * 4);
      }
      obj = {};
      obj = {};
      obj3 = panelX(updateMaxX[15]);
      obj.translateX = obj3.withSpring(num, useNavigation);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  let obj3 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: 48, UNREAD_INDICATOR_ANIMATION_DISTANCE: 4, withSpring: panelX(updateMaxX[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: callback };
  Xe.__closure = obj3;
  Xe.__workletHash = 8561772429103;
  Xe.__initData = derivedValue1;
  let closure_25 = panelX(updateMaxX[6]).useAnimatedStyle(Xe);
  const items5 = [gestureState, panelX, sharedValue, isFocused, maxX, isPanelTouchActive, noteInteraction, callback];
  const memo = setPanelX.useMemo(() => {
    let tmp = (() => {
      function settleDrawer(arg0) {
        let num = 0;
        if (arg0) {
          num = outer2_3;
        }
        const result = closure_0.set(num);
        panelX(updateMaxX[6]).runOnJS(panelX(updateMaxX[14]).setHomeDrawerState)(arg0);
      }
      settleDrawer.__closure = { panelX: closure_0, maxX: outer1_3, runOnJS: panelX(updateMaxX[6]).runOnJS, setHomeDrawerState: panelX(updateMaxX[14]).setHomeDrawerState };
      settleDrawer.__workletHash = 8226756372642;
      settleDrawer.__initData = derivedValue2;
      return settleDrawer;
    })();
    const panelX = tmp;
    const tmp2 = (() => {
      function shouldOpenFromPosition() {
        let tmp = 0 !== store.get();
        if (tmp) {
          let tmp4 = store.get() > 0.5 * outer2_3;
          if (!tmp4) {
            let tmp6 = store.get() >= 144;
            if (tmp6) {
              tmp6 = outer2_7.get() > 0;
            }
            tmp4 = tmp6;
          }
          tmp = tmp4;
        }
        return tmp;
      }
      shouldOpenFromPosition.__closure = { panelX: closure_0, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5, maxX: outer1_3, INITIAL_OPEN_WIDTH: 144, dragOffsetX: outer1_7 };
      shouldOpenFromPosition.__workletHash = 11654084007114;
      shouldOpenFromPosition.__initData = animatedStyle;
      return shouldOpenFromPosition;
    })();
    const gestureState = tmp2;
    const Gesture = panelX(updateMaxX[16]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(isFocused);
    let result = Gesture.Pan().enabled(isFocused).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isFocused).manualActivation(true);
    const fn = function _(absoluteX) {
      const result = outer1_5.set(true);
      const result1 = tmp2.set({ active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: tmp.get() });
    };
    let obj = { isPanelTouchActive, gestureState, panelX };
    fn.__closure = obj;
    fn.__workletHash = 8825829705900;
    fn.__initData = outer1_27;
    const maxPointersResult = result.maxPointers(1);
    const fn2 = function s(arg0, activate) {
      if (!tmp2.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absolute = Math.abs(absoluteX - tmp2.get().initialX);
        const _Math2 = Math;
        if (Math.abs(arg0.changedTouches[0].absoluteY - tmp2.get().initialY) <= absolute) {
          if (0 !== tmp.get()) {
            if (absolute >= 10) {
              let tmp8 = 0 === tmp.get();
              if (tmp8) {
                tmp8 = absoluteX > tmp2.get().initialX;
              }
              if (!tmp8) {
                tmp8 = absoluteX < tmp2.get().initialX;
              }
              if (tmp8) {
                const obj = {};
                const merged = Object.assign(tmp2.get());
                obj["active"] = true;
                obj["initialX"] = absoluteX;
                obj["panelX"] = tmp.get();
                const result = tmp2.set(obj);
                activate.activate();
              }
            }
          }
        }
        activate.fail();
      }
    };
    obj = { gestureState, panelX, ACTIVATION_MIN_DISTANCE: 10 };
    fn2.__closure = obj;
    fn2.__workletHash = 7484113391171;
    fn2.__initData = memo;
    const onBeginResult = result.maxPointers(1).onBegin(fn);
    const fn3 = function n(absoluteX) {
      if (tmp2.get().active) {
        const diff = absoluteX.absoluteX - tmp2.get().initialX;
        const result = outer1_7.set(diff);
        const sum = diff + tmp2.get().panelX;
        if (0 === tmp2.get().panelX) {
          if (diff >= 0) {
            if (diff < 144) {
              const _Math2 = Math;
              const result1 = tmp.set(Math.max(sum / 3, 0));
            }
          }
        }
        const _Math = Math;
        const result2 = tmp.set(Math.max(sum, 0));
      }
    };
    fn3.__closure = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: 144, panelX, DRAWER_RESISTANCE: 3 };
    fn3.__workletHash = 15118338555898;
    fn3.__initData = closure_25;
    const obj1 = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: 144, panelX, DRAWER_RESISTANCE: 3 };
    const onTouchesMoveResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      if (velocityX.velocityX > 50) {
        if (outer1_7.get() > 40) {
          let flag = true;
          if (outer1_7.get() < 144) {
            const obj2 = panelX(updateMaxX[6]);
            panelX(updateMaxX[6]).runOnJS(panelX(updateMaxX[9]).triggerHapticFeedback)(panelX(updateMaxX[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
            flag = true;
            const runOnJSResult = panelX(updateMaxX[6]).runOnJS(panelX(updateMaxX[9]).triggerHapticFeedback);
          }
        }
        outer1_7(flag);
        if (flag) {
          panelX(updateMaxX[6]).runOnJS(outer1_10)(constants.OPEN);
          const obj4 = panelX(updateMaxX[6]);
        } else if (!tmp15) {
          panelX(updateMaxX[6]).runOnJS(outer1_10)(constants.PEEK);
          const obj3 = panelX(updateMaxX[6]);
        }
      }
      if (velocityX.velocityX < -50) {
        if (outer1_7.get() < -40) {
          const obj = panelX(updateMaxX[6]);
          panelX(updateMaxX[6]).runOnJS(panelX(updateMaxX[9]).triggerHapticFeedback)(panelX(updateMaxX[9]).HapticFeedbackTypes.SOFT);
          flag = false;
          const runOnJSResult1 = panelX(updateMaxX[6]).runOnJS(panelX(updateMaxX[9]).triggerHapticFeedback);
        }
      }
      flag = tmp2();
    };
    let obj2 = { FLING_MIN_VELOCITY: 50, dragOffsetX: sharedValue, FLING_MIN_DISTANCE: 40, INITIAL_OPEN_WIDTH: 144, runOnJS: panelX(updateMaxX[6]).runOnJS, triggerHapticFeedback: panelX(updateMaxX[9]).triggerHapticFeedback, HapticFeedbackTypes: panelX(updateMaxX[9]).HapticFeedbackTypes, shouldOpenFromPosition: tmp2, settleDrawer: tmp, gestureState, trackServerDrawerInteract: callback, ServerDrawerInteractAction: closure_11 };
    fn4.__closure = obj2;
    fn4.__workletHash = 11139594764616;
    fn4.__initData = closure_24;
    const onChangeResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    const fn5 = function e() {
      tmp = tmp.get() > 0;
      if (tmp) {
        tmp = tmp.get() < outer1_3;
      }
      if (tmp) {
        tmp(tmp2());
      }
      const result = outer1_5.set(false);
      panelX(updateMaxX[6]).runOnJS(outer1_6)();
      const result1 = tmp2.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result2 = outer1_7.set(0);
    };
    const onEndResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2).onChange(fn3).onEnd(fn4);
    fn5.__closure = { panelX, maxX, settleDrawer: tmp, shouldOpenFromPosition: tmp2, isPanelTouchActive, runOnJS: panelX(updateMaxX[6]).runOnJS, noteInteraction, gestureState, dragOffsetX: sharedValue };
    fn5.__workletHash = 15210416953749;
    fn5.__initData = closure_23;
    return onEndResult.onFinalize(fn5);
  }, items5);
  obj4 = { gesture: memo, panelStyles: animatedStyle, homeDrawerState: maxX(setPanelX.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelSpringTranslateX: derivedValue2, guildsBarLabelDrawerStyle: closure_23, guildsBarIconDrawerStyle: closure_24, guildsBarUnreadDrawerStyle: closure_25 })), 1)[0] };
  return obj4;
};
export const HomeDrawerStateContext = context;
