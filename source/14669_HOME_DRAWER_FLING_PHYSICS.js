// Module ID: 14669
// Function ID: 110631
// Name: HOME_DRAWER_FLING_PHYSICS
// Dependencies: []
// Exports: useHomeGesture

// Module 14669 (HOME_DRAWER_FLING_PHYSICS)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const computeMaxX = arg1(dependencyMap[2]).computeMaxX;
let closure_7 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
let closure_9 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
let obj = { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036605469645008037, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001586577, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002131465965376 };
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
let closure_21 = { code: "function useHomeDrawerGestureTsx10(){const{isPanelTouchActive,runOnJS,noteInteraction,gestureState,dragOffsetX}=this.__closure;isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}" };
let closure_22 = { code: "function useHomeDrawerGestureTsx11(event){const{FLING_MIN_VELOCITY,dragOffsetX,FLING_MIN_DISTANCE,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,gestureState,setHomeDrawerState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;let shouldOpen;if(event.velocityX>FLING_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&dragOffsetX.get()<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else if(panelX.get()===0){shouldOpen=false;}else if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX){shouldOpen=true;}else if(panelX.get()>=INITIAL_OPEN_WIDTH&&event.absoluteX-gestureState.get().initialX>0){shouldOpen=true;}else{shouldOpen=false;}panelX.set(shouldOpen?maxX:0);runOnJS(setHomeDrawerState)(shouldOpen);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}" };
let closure_23 = { code: "function useHomeDrawerGestureTsx12(event){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH,panelX,DRAWER_RESISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const basePosition=newXOffset+gestureState.get().panelX;if(gestureState.get().panelX===0&&newXOffset>=0&&newXOffset<INITIAL_OPEN_WIDTH){panelX.set(Math.max(basePosition/DRAWER_RESISTANCE,0));}else{panelX.set(Math.max(basePosition,0));}}" };
let closure_24 = { code: "function useHomeDrawerGestureTsx13(event,manager){const{gestureState,panelX}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}" };
let closure_25 = { code: "function useHomeDrawerGestureTsx14(event){const{isPanelTouchActive,gestureState,panelX}=this.__closure;isPanelTouchActive.set(true);gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()});}" };
obj = {};
const Gesture = arg1(dependencyMap[16]).Gesture;
obj.gesture = Gesture.Pan();
obj.panelStyles = {};
obj.gestureState = arg1(dependencyMap[17]).createFakeSharedValue({});
const obj4 = arg1(dependencyMap[17]);
obj.panelX = require("module_0");
const obj5 = arg1(dependencyMap[17]);
obj.panelSpringTranslateX = require("module_0");
obj.guildsBarLabelDrawerStyle = {};
obj.guildsBarIconDrawerStyle = {};
obj.guildsBarUnreadDrawerStyle = {};
const context = importAllResult.createContext(obj);
const obj6 = arg1(dependencyMap[17]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const HOME_DRAWER_FLING_PHYSICS = obj;
export const useHomeGesture = function useHomeGesture() {
  let enableHome;
  let landOnHome;
  const MobileHomeDrawerExperiment = arg1(dependencyMap[5]).MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
  ({ enableHome, landOnHome } = config);
  const tmp2 = callback2();
  const panelX = tmp2.panelX;
  const arg1 = panelX;
  const gestureState = tmp2.gestureState;
  const importDefault = gestureState;
  const updateMaxX = tmp2.updateMaxX;
  const dependencyMap = updateMaxX;
  const maxX = tmp2.maxX;
  let callback = maxX;
  const setPanelX = tmp2.setPanelX;
  const isPanelTouchActive = tmp2.isPanelTouchActive;
  const callback2 = isPanelTouchActive;
  const noteInteraction = tmp2.noteInteraction;
  const computeMaxX = noteInteraction;
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(0);
  let closure_7 = sharedValue;
  let obj1 = arg1(dependencyMap[6]);
  const sharedValue1 = obj1.useSharedValue(false);
  const AnalyticEvents = sharedValue1;
  let obj2 = arg1(dependencyMap[7]);
  const navigation = obj2.useNavigation();
  let closure_9 = navigation;
  callback = importAllResult.useCallback((action) => {
    let obj = gestureState(updateMaxX[8]);
    obj = { action };
    obj.track(sharedValue1.SERVER_DRAWER_INTERACT, obj);
  }, []);
  obj = callback;
  let obj4 = arg1(dependencyMap[6]);
  class F {
    constructor() {
      return closure_7.get() >= 144;
    }
  }
  F.__closure = { dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: 144 };
  F.__workletHash = 2525772891435;
  F.__initData = closure_12;
  class G {
    constructor(arg0, arg1) {
      active = gestureState.get().active;
      if (active) {
        tmp = null;
        active = null !== arg1;
      }
      if (active) {
        active = arg0 !== arg1;
      }
      if (active) {
        tmp2 = panelX;
        tmp3 = updateMaxX;
        num = 6;
        obj = panelX(updateMaxX[6]);
        num2 = 9;
        runOnJSResult = obj.runOnJS(panelX(updateMaxX[9]).triggerHapticFeedback);
        HapticFeedbackTypes = panelX(updateMaxX[9]).HapticFeedbackTypes;
        if (arg0) {
          tmp4Result = runOnJSResult(HapticFeedbackTypes.IMPACT_MEDIUM);
        } else {
          tmp4Result1 = runOnJSResult(HapticFeedbackTypes.SOFT);
        }
      }
      return;
    }
  }
  obj = { gestureState, runOnJS: arg1(dependencyMap[6]).runOnJS, triggerHapticFeedback: arg1(dependencyMap[9]).triggerHapticFeedback, HapticFeedbackTypes: arg1(dependencyMap[9]).HapticFeedbackTypes };
  G.__closure = obj;
  G.__workletHash = 11947599708940;
  G.__initData = closure_13;
  const animatedReaction = obj4.useAnimatedReaction(F, G);
  const tmp7 = importDefault(dependencyMap[10])();
  let closure_11 = tmp7;
  const tmp8 = importDefault(dependencyMap[11])();
  closure_12 = tmp8;
  if (enableHome) {
    enableHome = !importDefault(dependencyMap[12])().isChatBesideChannelList;
  }
  closure_13 = enableHome;
  const sharedValue2 = arg1(dependencyMap[6]).useSharedValue(0);
  let closure_14 = sharedValue2;
  const obj7 = arg1(dependencyMap[6]);
  let enablePeekHint = enableHome;
  if (enableHome) {
    enablePeekHint = config.enablePeekHint;
  }
  const homeDrawerPeekHint = arg1(dependencyMap[13]).useHomeDrawerPeekHint(enablePeekHint, sharedValue2);
  const obj8 = arg1(dependencyMap[13]);
  function ne() {
    const value = panelX.get();
    return value + sharedValue2.get();
  }
  ne.__closure = { panelX, peekX: sharedValue2 };
  ne.__workletHash = 4654854314200;
  ne.__initData = closure_14;
  const derivedValue = arg1(dependencyMap[6]).useDerivedValue(ne);
  let closure_15 = derivedValue;
  const state = navigation.getState();
  const obj9 = arg1(dependencyMap[6]);
  let tmp13;
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
      tmp13 = routes[num];
    }
  }
  const coerceGuildsRouteResult = arg1(dependencyMap[14]).coerceGuildsRoute(tmp13);
  let tmp16 = enableHome;
  if (enableHome) {
    let drawerOpen;
    if (null != coerceGuildsRouteResult) {
      const params = coerceGuildsRouteResult.params;
      if (null != params) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (null != drawerOpen) {
      landOnHome = drawerOpen;
    }
    tmp16 = landOnHome;
  }
  let closure_16 = tmp16;
  let num2 = 0;
  if (tmp16) {
    num2 = computeMaxX(tmp7, tmp8);
  }
  let closure_17 = num2;
  const items = [tmp7, tmp8, updateMaxX, enableHome];
  const effect = importAllResult.useEffect(() => {
    if (enableHome) {
      tmp(tmp7, tmp8);
    } else {
      tmp({ aze: false, azj: true }, { "Bool(true)": "r", "Bool(true)": "onRequireModeratorMFAClick", "Bool(true)": "Array", "Bool(true)": "isSpamMessageRequest" });
    }
  }, items);
  const items1 = [enableHome, panelX];
  const effect1 = importAllResult.useEffect(() => {
    if (!enableHome) {
      const result = panelX.set(0);
      panelX(updateMaxX[14]).setHomeDrawerState(false);
      const obj = panelX(updateMaxX[14]);
    }
  }, items1);
  const items2 = [navigation, setPanelX, enableHome];
  const effect2 = importAllResult.useEffect(() => {
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
      const coerceGuildsRouteResult = handleStateChange(closure_2[14]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        if (closure_13) {
          const params = coerceGuildsRouteResult.params;
          let drawerOpen;
          if (null != params) {
            drawerOpen = params.drawerOpen;
          }
          let str = "closed";
          if (true === drawerOpen) {
            str = "open";
          }
          closure_4(str);
          state = store.getState();
          if (true === drawerOpen) {
            state.startTimer();
          } else {
            state.stopTimer();
          }
          const tmp7 = closure_4;
        }
      }
    }
    const panelX = handleStateChange;
    navigation.addListener("state", handleStateChange);
    return () => {
      closure_9.removeListener("state", handleStateChange);
      const state = store.getState();
      state.stopTimer();
    };
  }, items2);
  let closure_18 = importAllResult.useRef(false);
  const items3 = [enableHome, tmp16, num2, panelX];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !ref.current;
    }
    if (tmp) {
      const result = panelX.set(num2);
      if (tmp16) {
        const state = sharedValue.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items3);
  const items4 = [enableHome, sharedValue1];
  const effect3 = importAllResult.useEffect(() => {
    if (ref.current) {
      const result = sharedValue1.set(true);
    }
  }, items4);
  const obj10 = arg1(dependencyMap[14]);
  class Ie {
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
        withSpringResult = obj.withSpring(value, gestureState.get().active ? closure_9 : f110633, "animate-always");
      } else {
        return closure_17;
      }
      return;
    }
  }
  obj = { isDrawerInitialized: sharedValue1, initialPanelX: num2, withSpring: arg1(dependencyMap[15]).withSpring, panelX, gestureState, HOME_GESTURE_DRAG_PHYSICS: closure_9 };
  obj.HOME_DRAWER_FLING_PHYSICS = obj;
  Ie.__closure = obj;
  Ie.__workletHash = 11078734703352;
  Ie.__initData = closure_15;
  const derivedValue1 = arg1(dependencyMap[6]).useDerivedValue(Ie);
  let closure_19 = derivedValue1;
  const obj11 = arg1(dependencyMap[6]);
  function ge() {
    const value = derivedValue1.get();
    return value + sharedValue2.get();
  }
  ge.__closure = { panelGestureSpringX: derivedValue1, peekX: sharedValue2 };
  ge.__workletHash = 2927026959998;
  ge.__initData = closure_16;
  const derivedValue2 = arg1(dependencyMap[6]).useDerivedValue(ge);
  let closure_20 = derivedValue2;
  const obj13 = arg1(dependencyMap[6]);
  class Se {
    constructor() {
      obj = { flex: 1, marginTop: closure_12.top };
      obj = { translateX: useAnimatedReaction.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  Se.__closure = { safeAreaInsets: tmp8, panelSpringTranslateX: derivedValue2 };
  Se.__workletHash = 13544610996653;
  Se.__initData = closure_17;
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(Se);
  let closure_21 = animatedStyle;
  const obj14 = arg1(dependencyMap[6]);
  class Ae {
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
      obj.translateX = obj3.withSpring(num, f110633);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj5 = panelX(updateMaxX[15]);
      obj1.scale = obj5.withSpring(num3, f110633);
      items[1] = obj1;
      obj.transform = items;
      obj6 = panelX(updateMaxX[15]);
      obj7 = panelX(updateMaxX[6]);
      obj.opacity = obj6.withSpring(obj7.clamp(result, 0, 1), f110633);
      return obj;
    }
  }
  obj1 = { drawerRevealX: derivedValue, withSpring: arg1(dependencyMap[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: obj, clamp: arg1(dependencyMap[6]).clamp };
  Ae.__closure = obj1;
  Ae.__workletHash = 11639414708115;
  Ae.__initData = closure_18;
  let closure_22 = arg1(dependencyMap[6]).useAnimatedStyle(Ae);
  const obj15 = arg1(dependencyMap[6]);
  class Ee {
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
      obj.translateX = obj3.withSpring(num, f110633);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj2 = { 9223372036854775807: false, 0: false, 9223372036854775807: false, drawerRevealX: derivedValue, withSpring: arg1(dependencyMap[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: obj };
  Ee.__closure = obj2;
  Ee.__workletHash = 16360618332998;
  Ee.__initData = closure_19;
  let closure_23 = arg1(dependencyMap[6]).useAnimatedStyle(Ee);
  const obj17 = arg1(dependencyMap[6]);
  class De {
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
      obj.translateX = obj3.withSpring(num, f110633);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  const obj3 = { item: null, raid_alert_id: "0e02f6accc59d44ac3827104886762f1", ANSWER_IN_REGEX: "boost", drawerRevealX: derivedValue, withSpring: arg1(dependencyMap[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: obj };
  De.__closure = obj3;
  De.__workletHash = 8561772429103;
  De.__initData = closure_20;
  let closure_24 = arg1(dependencyMap[6]).useAnimatedStyle(De);
  const items5 = [gestureState, panelX, sharedValue, enableHome, maxX, isPanelTouchActive, noteInteraction, callback];
  const memo = importAllResult.useMemo(() => {
    const Gesture = panelX(updateMaxX[16]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(enableHome);
    const result = Gesture.Pan().enabled(enableHome).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(enableHome).manualActivation(true);
    const fn = function _(absoluteX) {
      const result = store3.set(true);
      const result1 = store2.set({ active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: store.get() });
    };
    let obj = { isPanelTouchActive, gestureState, panelX };
    fn.__closure = obj;
    fn.__workletHash = 16505445202158;
    fn.__initData = memo;
    const maxPointersResult = result.maxPointers(1);
    const fn2 = function s(arg0, fail) {
      if (!store2.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const _Math2 = Math;
        const absolute = Math.abs(absoluteX - store2.get().initialX);
        let tmp4 = Math.abs(arg0.changedTouches[0].absoluteY - store2.get().initialY) > absolute;
        if (!tmp4) {
          let tmp6 = 0 === store.get();
          if (tmp6) {
            tmp6 = absoluteX < store2.get().initialX;
          }
          tmp4 = tmp6;
        }
        if (!tmp4) {
          let tmp9 = store.get() > 0;
          if (tmp9) {
            tmp9 = absoluteX > store2.get().initialX;
          }
          tmp4 = tmp9;
        }
        if (tmp4) {
          fail.fail();
        }
        let tmp13 = 0 === store.get();
        if (tmp13) {
          tmp13 = absoluteX > store2.get().initialX;
        }
        if (!tmp13) {
          tmp13 = absoluteX < store2.get().initialX;
        }
        if (tmp13) {
          const obj = {};
          const merged = Object.assign(store2.get());
          obj["active"] = true;
          obj["initialX"] = absoluteX;
          obj["panelX"] = store.get();
          const result = store2.set(obj);
          fail.activate();
        }
      }
    };
    fn2.__closure = { gestureState, panelX };
    fn2.__workletHash = 14569763728735;
    fn2.__initData = closure_24;
    const onBeginResult = result.maxPointers(1).onBegin(fn);
    const fn3 = function n(absoluteX) {
      if (store2.get().active) {
        const diff = absoluteX.absoluteX - store2.get().initialX;
        const result = store4.set(diff);
        const sum = diff + store2.get().panelX;
        if (0 === store2.get().panelX) {
          if (diff >= 0) {
            if (diff < 144) {
              const _Math2 = Math;
              const result1 = store.set(Math.max(sum / 3, 0));
            }
          }
        }
        const _Math = Math;
        const result2 = store.set(Math.max(sum, 0));
      }
    };
    obj = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: 144, panelX, DRAWER_RESISTANCE: 3 };
    fn3.__closure = obj;
    fn3.__workletHash = 14987365733436;
    fn3.__initData = closure_23;
    const onTouchesMoveResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      if (velocityX.velocityX > 50) {
        if (store4.get() > 40) {
          let flag = true;
          if (store4.get() < 144) {
            const obj2 = store(closure_2[6]);
            store(closure_2[6]).runOnJS(store(closure_2[9]).triggerHapticFeedback)(store(closure_2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
            flag = true;
            const runOnJSResult = store(closure_2[6]).runOnJS(store(closure_2[9]).triggerHapticFeedback);
          }
        }
        let num11 = 0;
        if (flag) {
          num11 = closure_3;
        }
        const result = store.set(num11);
        store(closure_2[6]).runOnJS(store(closure_2[14]).setHomeDrawerState)(flag);
        if (flag) {
          store(closure_2[6]).runOnJS(closure_10)(constants.OPEN);
          const obj5 = store(closure_2[6]);
        } else if (!tmp24) {
          store(closure_2[6]).runOnJS(closure_10)(constants.PEEK);
          const obj4 = store(closure_2[6]);
        }
      }
      if (velocityX.velocityX < -50) {
        if (store4.get() < -40) {
          const obj = store(closure_2[6]);
          store(closure_2[6]).runOnJS(store(closure_2[9]).triggerHapticFeedback)(store(closure_2[9]).HapticFeedbackTypes.SOFT);
          flag = false;
          const runOnJSResult1 = store(closure_2[6]).runOnJS(store(closure_2[9]).triggerHapticFeedback);
        }
      }
      flag = 0 !== store.get();
      if (flag) {
        let tmp5 = store.get() > 0.5 * closure_3;
        if (!tmp5) {
          let tmp7 = store.get() >= 144;
          if (tmp7) {
            tmp7 = velocityX.absoluteX - store2.get().initialX > 0;
          }
          tmp5 = tmp7;
        }
        flag = tmp5;
      }
    };
    const obj1 = { paddingHorizontal: true, borderRadius: true, backgroundColor: true, position: true, dragOffsetX: sharedValue, runOnJS: panelX(updateMaxX[6]).runOnJS, triggerHapticFeedback: panelX(updateMaxX[9]).triggerHapticFeedback, HapticFeedbackTypes: panelX(updateMaxX[9]).HapticFeedbackTypes, panelX, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5, maxX, gestureState, setHomeDrawerState: panelX(updateMaxX[14]).setHomeDrawerState, trackServerDrawerInteract: callback, ServerDrawerInteractAction: tmp7 };
    fn4.__closure = obj1;
    fn4.__workletHash = 9249337782539;
    fn4.__initData = closure_22;
    const onChangeResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    const fn5 = function e() {
      const result = store3.set(false);
      store(closure_2[6]).runOnJS(closure_6)();
      const result1 = store2.set({});
      const result2 = store4.set(0);
    };
    const onEndResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2).onChange(fn3).onEnd(fn4);
    fn5.__closure = { isPanelTouchActive, runOnJS: panelX(updateMaxX[6]).runOnJS, noteInteraction, gestureState, dragOffsetX: sharedValue };
    fn5.__workletHash = 4660810514744;
    fn5.__initData = animatedStyle;
    return onEndResult.onFinalize(fn5);
  }, items5);
  let closure_25 = memo;
  obj4 = { gesture: memo, panelStyles: animatedStyle, homeDrawerState: callback(importAllResult.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelSpringTranslateX: derivedValue2, guildsBarLabelDrawerStyle: closure_22, guildsBarIconDrawerStyle: closure_23, guildsBarUnreadDrawerStyle: closure_24 })), 1)[0] };
  return obj4;
};
export const HomeDrawerStateContext = context;
