// Module ID: 14658
// Function ID: 110561
// Name: useMainTabsPanelsGesture
// Dependencies: []
// Exports: default

// Module 14658 (useMainTabsPanelsGesture)
let closure_3 = importAll(dependencyMap[0]);
const LaunchPadTypes = arg1(dependencyMap[1]).LaunchPadTypes;
const isAndroidResult = arg1(dependencyMap[2]).isAndroid();
const tmp3 = arg1(dependencyMap[3]);
let closure_6 = isAndroidResult ? tmp3.ANDROID_PANELS_ANIMATION_CONFIG : tmp3.DEFAULT_PANELS_ANIMATION_CONFIG;
let closure_7 = { code: "function useMainTabsPanelsGestureTsx1(width){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;translateX.set(IS_ANDROID?withTiming(width,timingInstant,'animate-always'):width);}" };
let closure_8 = { code: "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,onVisibilityChange,runOnJS,onPreMovement,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}return false;}if(onPreMovement!=null){runOnJS(onPreMovement)(show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}" };
let closure_9 = { code: "function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{onVisibilityChange,runOnJS,show}=this.__closure;if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}" };
let closure_10 = { code: "function useMainTabsPanelsGestureTsx4(){const{disallowGesture}=this.__closure;return disallowGesture.get();}" };
let closure_11 = { code: "function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){const{didJustAllowGesture}=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);}" };
let closure_12 = { code: "function useMainTabsPanelsGestureTsx6(e){const{isDragging,disallowGesture,didJustAllowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}}" };
let closure_13 = { code: "function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width,didJustAllowGesture}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);}" };
let closure_14 = { code: "function useMainTabsPanelsGestureTsx8(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}" };
let closure_15 = { code: "function useMainTabsPanelsGestureTsx9(event,manager){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];if(touch==null)return;const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();}" };
let closure_16 = { code: "function useMainTabsPanelsGestureTsx10(event,manager){const{startPosition}=this.__closure;const touch=event.allTouches[0];if(touch==null)return;startPosition.set({x:touch.x,y:touch.y});manager.begin();}" };
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx");

export default function useMainTabsPanelsGesture(canDrag) {
  let cancelOnSwipeRightFromStart;
  let openWidth;
  canDrag = canDrag.canDrag;
  const arg1 = canDrag;
  const onVisibilityChange = canDrag.onVisibilityChange;
  const importDefault = onVisibilityChange;
  const onDragStart = canDrag.onDragStart;
  const dependencyMap = onDragStart;
  const onPreMovement = canDrag.onPreMovement;
  const React = onPreMovement;
  ({ openWidth, cancelOnSwipeRightFromStart } = canDrag);
  const LaunchPadTypes = cancelOnSwipeRightFromStart;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let context;
  let memo;
  const tmp = importDefault(dependencyMap[4])();
  const tmp2 = importDefault(dependencyMap[5])();
  let closure_6 = tmp2;
  const width = importDefault(dependencyMap[6])().width;
  let closure_7 = width;
  let tmp3 = width;
  if (null != openWidth) {
    tmp3 = openWidth;
  }
  closure_8 = tmp3;
  let obj = arg1(dependencyMap[7]);
  let num = 0;
  if (!canDrag.startShown) {
    num = tmp3;
  }
  const sharedValue = obj.useSharedValue(num);
  closure_9 = sharedValue;
  const sharedValue1 = arg1(dependencyMap[7]).useSharedValue(false);
  closure_10 = sharedValue1;
  const ref = React.useRef(false);
  closure_11 = ref;
  const items = [ref];
  const callback = React.useCallback((current) => {
    ref.current = current;
  }, items);
  closure_12 = callback;
  const obj2 = arg1(dependencyMap[7]);
  const sharedValue2 = arg1(dependencyMap[7]).useSharedValue(false);
  closure_13 = sharedValue2;
  const items1 = [sharedValue1, sharedValue, tmp3];
  const effect = React.useEffect(() => {
    let obj = canDrag(onDragStart[7]);
    const fn = function e(value) {
      if (!closure_10.get()) {
        if (0 !== store.get()) {
          let withTimingResult = value;
          if (closure_5) {
            withTimingResult = callback(closure_2[8]).withTiming(value, callback(closure_2[9]).timingInstant, "animate-always");
            const obj = callback(closure_2[8]);
          }
          const result = store.set(withTimingResult);
        }
      }
    };
    obj = { isDragging: sharedValue1, translateX: sharedValue, IS_ANDROID: tmp, withTiming: canDrag(onDragStart[8]).withTiming, timingInstant: canDrag(onDragStart[9]).timingInstant };
    fn.__closure = obj;
    fn.__workletHash = 16976202846494;
    fn.__initData = width;
  }, items1);
  class R {
    constructor(arg0, arg1, arg2, arg3) {
      if (!arg3) {
        tmp = closure_9;
        num = 0;
        if (0 !== closure_9.get()) {
          tmp2 = closure_9;
          tmp3 = closure_8;
          if (closure_9.get() !== closure_8) {
            flag = false;
            return false;
          }
        }
      }
      num2 = 0;
      if (!canDrag) {
        num2 = closure_8;
      }
      if (closure_9.get() === num2) {
        tmp32 = onVisibilityChange;
        tmp33 = null;
        if (null != onVisibilityChange) {
          tmp34 = canDrag;
          tmp35 = onDragStart;
          num7 = 7;
          obj6 = canDrag(onDragStart[7]);
          tmp36 = onVisibilityChange;
          tmp37 = obj6.runOnJS(onVisibilityChange)(canDrag);
        }
        flag3 = false;
        return false;
      } else {
        tmp38 = onPreMovement;
        tmp39 = null;
        if (null != onPreMovement) {
          tmp4 = canDrag;
          tmp5 = onDragStart;
          num3 = 7;
          obj = canDrag(onDragStart[7]);
          tmp6 = onPreMovement;
          tmp7 = obj.runOnJS(onPreMovement)(canDrag);
        }
        tmp8 = closure_6;
        if (canDrag) {
          tmp10 = arg1 ? tmp8.swipeSidePanelOpen : tmp8.nonSwipeSidePanelOpen;
        } else {
          tmp9 = arg1 ? tmp8.swipeSidePanelClose : tmp8.nonSwipeSidePanelClose;
          tmp11 = () => {
            function handleAnimationFinish(arg0) {
              let tmp = arg0;
              if (arg0) {
                tmp = null != closure_1;
              }
              if (tmp) {
                callback(closure_2[7]).runOnJS(closure_1)(callback);
                const obj = callback(closure_2[7]);
              }
            }
            handleAnimationFinish.__closure = { onVisibilityChange: closure_1, runOnJS: arg0(closure_2[7]).runOnJS, show: arg0 };
            handleAnimationFinish.__workletHash = 1018878139815;
            handleAnimationFinish.__initData = closure_9;
            return handleAnimationFinish;
          }();
          tmp13 = canDrag;
          tmp14 = onDragStart;
          num4 = 3;
          tmp12 = closure_9;
          obj2 = canDrag(onDragStart[3]);
          tmp15 = canDrag;
          tmp16 = onDragStart;
          tmp17 = tmp9;
          if (obj2.isTimingConfig(tmp9)) {
            num6 = 8;
            tmp15Result = tmp15(tmp16[8]);
            str3 = "respect-motion-settings";
            tmp27 = tmp15Result;
            tmp28 = num2;
            tmp29 = tmp9;
            tmp30 = tmp11;
            withTimingResult = tmp15Result.withTiming(num2, tmp17, "respect-motion-settings", tmp11);
          } else {
            num5 = 10;
            tmp15Result1 = tmp15(tmp16[10]);
            obj = {};
            tmp18 = obj;
            tmp19 = tmp9;
            merged = Object.assign(tmp17);
            tmp21 = arg2;
            str = "velocity";
            obj["velocity"] = arg2;
            str2 = "respect-motion-settings";
            tmp22 = tmp15Result1;
            tmp23 = num2;
            tmp24 = obj;
            tmp25 = tmp11;
            withTimingResult = tmp15Result1.withSpring(num2, obj, "respect-motion-settings", tmp11);
          }
          result = closure_9.set(withTimingResult);
          flag2 = true;
          return true;
        }
      }
      return;
    }
  }
  obj = { translateX: sharedValue, width: tmp3, onVisibilityChange, runOnJS: arg1(dependencyMap[7]).runOnJS, onPreMovement, panelsConfig: closure_6, isTimingConfig: arg1(dependencyMap[3]).isTimingConfig, withTiming: arg1(dependencyMap[8]).withTiming, withSpring: arg1(dependencyMap[10]).withSpring };
  R.__closure = obj;
  R.__workletHash = 4205680413964;
  R.__initData = closure_8;
  const items2 = [onVisibilityChange, onPreMovement, sharedValue, tmp3];
  const callback1 = React.useCallback(R, items2);
  closure_14 = callback1;
  const obj3 = arg1(dependencyMap[7]);
  const sharedValue3 = arg1(dependencyMap[7]).useSharedValue(false);
  closure_15 = sharedValue3;
  const obj5 = arg1(dependencyMap[7]);
  class U {
    constructor() {
      return useCallback.get();
    }
  }
  U.__closure = { disallowGesture: sharedValue2 };
  U.__workletHash = 15338765161171;
  U.__initData = closure_10;
  class N {
    constructor(arg0, arg1) {
      if (canDrag !== arg1) {
        if (!canDrag) {
          tmp = useSharedValue;
          flag = true;
          result = useSharedValue.set(true);
        }
      }
      return;
    }
  }
  N.__closure = { didJustAllowGesture: sharedValue3 };
  N.__workletHash = 17048450187141;
  N.__initData = closure_11;
  const animatedReaction = arg1(dependencyMap[7]).useAnimatedReaction(U, N);
  const obj6 = arg1(dependencyMap[7]);
  const sharedValue4 = arg1(dependencyMap[7]).useSharedValue({ "Null": false, "Null": true });
  closure_16 = sharedValue4;
  context = React.useContext(importDefault(dependencyMap[11]));
  const items3 = [tmp2, sharedValue, tmp3, width, sharedValue1, callback1, onDragStart, canDrag, sharedValue4, tmp, cancelOnSwipeRightFromStart, sharedValue2, callback, context, sharedValue3];
  memo = React.useMemo(() => {
    const Gesture = canDrag(onDragStart[12]).Gesture;
    const PanResult = Gesture.Pan();
    const result = Gesture.Pan().enabled(canDrag).requireExternalGestureToFail(context);
    let obj3 = canDrag(onDragStart[2]);
    const enabledResult = Gesture.Pan().enabled(canDrag);
    let obj = { top: -tmp2.top, left: -tmp2.left, bottom: -tmp2.bottom, right: -tmp2.right };
    const manualActivationResult = result.manualActivation(obj3.isAndroid());
    const fn = function u(arg0, begin) {
      const first = arg0.allTouches[0];
      if (null != first) {
        const obj = {};
        ({ x: obj.x, y: obj.y } = first);
        const result = store5.set(obj);
        begin.begin();
      }
    };
    obj = { startPosition: sharedValue4 };
    fn.__closure = obj;
    fn.__workletHash = 718728838752;
    fn.__initData = sharedValue4;
    const hitSlopResult = result.manualActivation(obj3.isAndroid()).hitSlop(obj);
    const fn2 = function o(state, fail) {
      if (state.state === callback(closure_2[12]).State.BEGAN) {
        const point = state.allTouches[0];
        if (null != point) {
          const diff = point.x - store5.get().x;
          const _Math2 = Math;
          const absolute = Math.abs(diff);
          if (absolute > 12) {
            if (!store3.get()) {
              const _Math = Math;
              const absolute1 = Math.abs(point.y - store5.get().y);
              if (absolute > absolute1) {
                if (absolute * absolute + absolute1 * absolute1 >= 144) {
                  if (diff <= 0) {
                    if (0 === store.get()) {
                      fail.fail();
                    }
                  } else if (true === constants) {
                    if (store.get() >= closure_8) {
                      fail.fail();
                    }
                  }
                  if (closure_5 === constants.GESTURE_EDGE) {
                    if (diff < 0) {
                      const diff1 = closure_7 - 48;
                      fail.fail();
                    }
                  }
                  fail.activate();
                }
              }
            }
          }
        }
      }
    };
    const onTouchesDownResult = result.manualActivation(obj3.isAndroid()).hitSlop(obj).onTouchesDown(fn);
    fn2.__closure = { State: canDrag(onDragStart[12]).State, startPosition: sharedValue4, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: tmp3, launchPadType: tmp, LaunchPadTypes: cancelOnSwipeRightFromStart, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    fn2.__workletHash = 13108412336922;
    fn2.__initData = sharedValue3;
    const obj1 = { State: canDrag(onDragStart[12]).State, startPosition: sharedValue4, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: tmp3, launchPadType: tmp, LaunchPadTypes: cancelOnSwipeRightFromStart, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    const fn3 = function l() {
      const result = store2.set(true);
      callback(closure_2[7]).runOnJS(closure_12)(true);
      if (null != closure_2) {
        callback(closure_2[7]).runOnJS(closure_2)();
        const obj2 = callback(closure_2[7]);
      }
    };
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn2);
    fn3.__closure = { isDragging: sharedValue1, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, onDragStart };
    fn3.__workletHash = 8659650895938;
    fn3.__initData = callback1;
    const obj2 = { isDragging: sharedValue1, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, onDragStart };
    const fn4 = function n(changeX) {
      if (store3.get()) {
        const value = obj.get();
        if (0 !== value) {
          if (value !== closure_8) {
            const result = store.set(0);
          }
        }
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const result1 = obj.set(Math.max(0, Math.min(closure_8, store.get() + changeX.changeX)));
        const result2 = store4.set(false);
      }
    };
    obj3 = { disallowGesture: sharedValue2, translateX: sharedValue, width: tmp3, didJustAllowGesture: sharedValue3 };
    fn4.__closure = obj3;
    fn4.__workletHash = 13355779907583;
    fn4.__initData = sharedValue2;
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    const fn5 = function e(velocityX) {
      if (store2.get()) {
        if (!store3.get()) {
          if (!store4.get()) {
            const result = store2.set(false);
            const result1 = store4.set(false);
            callback(closure_2[7]).runOnJS(closure_12)(false);
            const _Math = Math;
            if (Math.abs(velocityX.velocityX) > minFlingVelocityX.minFlingVelocityX) {
              callback2(velocityX.velocityX < 0, true, velocityX.velocityX, true);
            } else {
              callback2(store.get() < closure_8 / 2, false, velocityX.velocityX, true);
            }
          }
        }
      }
      const result2 = store2.set(false);
      const result3 = store4.set(false);
      callback(closure_2[7]).runOnJS(closure_12)(false);
    };
    const onChangeResult = onTouchesMoveResult.onStart(fn3).onChange(fn4);
    fn5.__closure = { isDragging: sharedValue1, disallowGesture: sharedValue2, didJustAllowGesture: sharedValue3, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, panelsConfig: tmp2, movePanel: callback1, translateX: sharedValue, width: tmp3 };
    fn5.__workletHash = 2071301756262;
    fn5.__initData = callback;
    return onChangeResult.onFinalize(fn5);
  }, items3);
  const items4 = [memo, sharedValue2, sharedValue];
  obj = { gesture: memo, panelGestureContext: React.useMemo(() => ({ gesture: memo, disallowGesture: sharedValue2, translateX: sharedValue }), items4), isDragging: sharedValue1, translateX: sharedValue, movePanel: callback1, maxWidth: tmp3, isDraggingRef: ref };
  return obj;
};
