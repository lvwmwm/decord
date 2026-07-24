// Module ID: 14838
// Function ID: 113143
// Name: useMainTabsPanelsGesture
// Dependencies: [31, 10480, 477, 14839, 10481, 1557, 1450, 3991, 4131, 4134, 4542, 14840, 5217, 2]
// Exports: default

// Module 14838 (useMainTabsPanelsGesture)
import result from "result";
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";
import set from "set";
import isTimingConfig from "isTimingConfig";
import set from "set";

const require = arg1;
set = set.isAndroid();
let closure_6 = set ? isTimingConfig.ANDROID_PANELS_ANIMATION_CONFIG : isTimingConfig.DEFAULT_PANELS_ANIMATION_CONFIG;
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
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx");

export default function useMainTabsPanelsGesture(canDrag) {
  let cancelOnSwipeRightFromStart;
  let openWidth;
  canDrag = canDrag.canDrag;
  const onVisibilityChange = canDrag.onVisibilityChange;
  const onDragStart = canDrag.onDragStart;
  const onPreMovement = canDrag.onPreMovement;
  ({ openWidth, cancelOnSwipeRightFromStart } = canDrag);
  let c8;
  let sharedValue;
  let sharedValue1;
  let ref;
  let callback;
  let sharedValue2;
  let callback1;
  let sharedValue3;
  let sharedValue4;
  let context;
  let memo;
  let tmp = onVisibilityChange(onDragStart[4])();
  const tmp2 = onVisibilityChange(onDragStart[5])();
  let closure_6 = tmp2;
  const width = onVisibilityChange(onDragStart[6])().width;
  let tmp3 = width;
  if (null != openWidth) {
    tmp3 = openWidth;
  }
  c8 = tmp3;
  let obj = canDrag(onDragStart[7]);
  let num = 0;
  if (!canDrag.startShown) {
    num = tmp3;
  }
  sharedValue = obj.useSharedValue(num);
  sharedValue1 = canDrag(onDragStart[7]).useSharedValue(false);
  ref = onPreMovement.useRef(false);
  const items = [ref];
  callback = onPreMovement.useCallback((current) => {
    ref.current = current;
  }, items);
  let obj2 = canDrag(onDragStart[7]);
  sharedValue2 = canDrag(onDragStart[7]).useSharedValue(false);
  const items1 = [sharedValue1, sharedValue, tmp3];
  const effect = onPreMovement.useEffect(() => {
    let obj = canDrag(onDragStart[7]);
    const fn = function e(value) {
      if (!outer1_10.get()) {
        if (0 !== outer1_9.get()) {
          let withTimingResult = value;
          if (closure_5) {
            withTimingResult = canDrag(onDragStart[8]).withTiming(value, canDrag(onDragStart[9]).timingInstant, "animate-always");
            const obj = canDrag(onDragStart[8]);
          }
          const result = outer1_9.set(withTimingResult);
        }
      }
    };
    obj = { isDragging: sharedValue1, translateX: sharedValue, IS_ANDROID: closure_5, withTiming: canDrag(onDragStart[8]).withTiming, timingInstant: canDrag(onDragStart[9]).timingInstant };
    fn.__closure = obj;
    fn.__workletHash = 16976202846494;
    fn.__initData = width;
    obj.runOnUI(fn)(c8);
  }, items1);
  class R {
    constructor(arg0, arg1, arg2, arg3) {
      closure_0 = canDrag;
      if (!arg3) {
        tmp = c9;
        num = 0;
        if (0 !== c9.get()) {
          tmp2 = c9;
          tmp3 = c8;
          if (c9.get() !== c8) {
            flag = false;
            return false;
          }
        }
      }
      num2 = 0;
      if (!canDrag) {
        num2 = c8;
      }
      if (c9.get() === num2) {
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
        tmp8 = outer1_6;
        if (canDrag) {
          tmp10 = arg1 ? tmp8.swipeSidePanelOpen : tmp8.nonSwipeSidePanelOpen;
        } else {
          tmp9 = arg1 ? tmp8.swipeSidePanelClose : tmp8.nonSwipeSidePanelClose;
          tmp11 = (() => {
            function handleAnimationFinish(arg0) {
              let tmp = arg0;
              if (arg0) {
                tmp = null != outer2_1;
              }
              if (tmp) {
                canDrag(onDragStart[7]).runOnJS(outer2_1)(outer1_0);
                const obj = canDrag(onDragStart[7]);
              }
            }
            handleAnimationFinish.__closure = { onVisibilityChange: outer1_1, runOnJS: canDrag(onDragStart[7]).runOnJS, show: closure_0 };
            handleAnimationFinish.__workletHash = 1018878139815;
            handleAnimationFinish.__initData = sharedValue;
            return handleAnimationFinish;
          })();
          tmp13 = canDrag;
          tmp14 = onDragStart;
          num4 = 3;
          tmp12 = c9;
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
          result = c9.set(withTimingResult);
          flag2 = true;
          return true;
        }
      }
      return;
    }
  }
  obj = { translateX: sharedValue, width: tmp3, onVisibilityChange, runOnJS: canDrag(onDragStart[7]).runOnJS, onPreMovement, panelsConfig: closure_6, isTimingConfig: canDrag(onDragStart[3]).isTimingConfig, withTiming: canDrag(onDragStart[8]).withTiming, withSpring: canDrag(onDragStart[10]).withSpring };
  R.__closure = obj;
  R.__workletHash = 4205680413964;
  R.__initData = c8;
  const items2 = [onVisibilityChange, onPreMovement, sharedValue, tmp3];
  callback1 = onPreMovement.useCallback(R, items2);
  let obj3 = canDrag(onDragStart[7]);
  sharedValue3 = canDrag(onDragStart[7]).useSharedValue(false);
  const obj5 = canDrag(onDragStart[7]);
  class U {
    constructor() {
      return useCallback.get();
    }
  }
  U.__closure = { disallowGesture: sharedValue2 };
  U.__workletHash = 15338765161171;
  U.__initData = sharedValue1;
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
  N.__initData = ref;
  const animatedReaction = canDrag(onDragStart[7]).useAnimatedReaction(U, N);
  let obj6 = canDrag(onDragStart[7]);
  sharedValue4 = canDrag(onDragStart[7]).useSharedValue({ x: 0, y: 0 });
  context = onPreMovement.useContext(onVisibilityChange(onDragStart[11]));
  const items3 = [tmp2, sharedValue, tmp3, width, sharedValue1, callback1, onDragStart, canDrag, sharedValue4, tmp, cancelOnSwipeRightFromStart, sharedValue2, callback, context, sharedValue3];
  memo = onPreMovement.useMemo(() => {
    const Gesture = canDrag(onDragStart[12]).Gesture;
    const PanResult = Gesture.Pan();
    let result = Gesture.Pan().enabled(canDrag).requireExternalGestureToFail(context);
    let obj3 = canDrag(onDragStart[2]);
    const enabledResult = Gesture.Pan().enabled(canDrag);
    let obj = { top: -tmp2.top, left: -tmp2.left, bottom: -tmp2.bottom, right: -tmp2.right };
    const manualActivationResult = result.manualActivation(obj3.isAndroid());
    const fn = function u(arg0, begin) {
      const first = arg0.allTouches[0];
      if (null != first) {
        const obj = {};
        ({ x: obj.x, y: obj.y } = first);
        const result = outer1_16.set(obj);
        begin.begin();
      }
    };
    obj = { startPosition: sharedValue4 };
    fn.__closure = obj;
    fn.__workletHash = 718728838752;
    fn.__initData = sharedValue4;
    const hitSlopResult = result.manualActivation(obj3.isAndroid()).hitSlop(obj);
    const fn2 = function o(state, fail) {
      if (state.state === canDrag(onDragStart[12]).State.BEGAN) {
        const point = state.allTouches[0];
        if (null != point) {
          const diff = point.x - outer1_16.get().x;
          const _Math2 = Math;
          const absolute = Math.abs(diff);
          if (absolute > 12) {
            if (!outer1_13.get()) {
              const _Math = Math;
              const absolute1 = Math.abs(point.y - outer1_16.get().y);
              if (absolute > absolute1) {
                if (absolute * absolute + absolute1 * absolute1 >= 144) {
                  if (diff <= 0) {
                    if (0 === outer1_9.get()) {
                      fail.fail();
                    }
                  } else if (true === outer1_4) {
                    if (outer1_9.get() >= outer1_8) {
                      fail.fail();
                    }
                  }
                  if (outer1_5 === cancelOnSwipeRightFromStart.GESTURE_EDGE) {
                    if (diff < 0) {
                      const diff1 = outer1_7 - 48;
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
    fn2.__closure = { State: canDrag(onDragStart[12]).State, startPosition: sharedValue4, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: c8, launchPadType: closure_5, LaunchPadTypes: cancelOnSwipeRightFromStart, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    fn2.__workletHash = 13108412336922;
    fn2.__initData = sharedValue3;
    const obj1 = { State: canDrag(onDragStart[12]).State, startPosition: sharedValue4, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: c8, launchPadType: closure_5, LaunchPadTypes: cancelOnSwipeRightFromStart, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    const fn3 = function l() {
      const result = outer1_10.set(true);
      canDrag(onDragStart[7]).runOnJS(outer1_12)(true);
      if (null != outer1_2) {
        canDrag(onDragStart[7]).runOnJS(outer1_2)();
        const obj2 = canDrag(onDragStart[7]);
      }
    };
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn2);
    fn3.__closure = { isDragging: sharedValue1, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, onDragStart };
    fn3.__workletHash = 8659650895938;
    fn3.__initData = callback1;
    let obj2 = { isDragging: sharedValue1, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, onDragStart };
    const fn4 = function n(changeX) {
      if (outer1_13.get()) {
        const value = obj.get();
        if (0 !== value) {
          if (value !== outer1_8) {
            const result = outer1_9.set(0);
          }
        }
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const result1 = obj.set(Math.max(0, Math.min(outer1_8, outer1_9.get() + changeX.changeX)));
        const result2 = outer1_15.set(false);
      }
    };
    obj3 = { disallowGesture: sharedValue2, translateX: sharedValue, width: c8, didJustAllowGesture: sharedValue3 };
    fn4.__closure = obj3;
    fn4.__workletHash = 13355779907583;
    fn4.__initData = sharedValue2;
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    const fn5 = function e(velocityX) {
      if (outer1_10.get()) {
        if (!outer1_13.get()) {
          if (!outer1_15.get()) {
            const result = outer1_10.set(false);
            const result1 = outer1_15.set(false);
            canDrag(onDragStart[7]).runOnJS(outer1_12)(false);
            const _Math = Math;
            if (Math.abs(velocityX.velocityX) > minFlingVelocityX.minFlingVelocityX) {
              outer1_14(velocityX.velocityX < 0, true, velocityX.velocityX, true);
            } else {
              outer1_14(outer1_9.get() < outer1_8 / 2, false, velocityX.velocityX, true);
            }
          }
        }
      }
      const result2 = outer1_10.set(false);
      const result3 = outer1_15.set(false);
      canDrag(onDragStart[7]).runOnJS(outer1_12)(false);
    };
    const onChangeResult = onTouchesMoveResult.onStart(fn3).onChange(fn4);
    fn5.__closure = { isDragging: sharedValue1, disallowGesture: sharedValue2, didJustAllowGesture: sharedValue3, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, panelsConfig: tmp2, movePanel: callback1, translateX: sharedValue, width: c8 };
    fn5.__workletHash = 2071301756262;
    fn5.__initData = callback;
    return onChangeResult.onFinalize(fn5);
  }, items3);
  const items4 = [memo, sharedValue2, sharedValue];
  obj = { gesture: memo, panelGestureContext: onPreMovement.useMemo(() => ({ gesture: memo, disallowGesture: sharedValue2, translateX: sharedValue }), items4), isDragging: sharedValue1, translateX: sharedValue, movePanel: callback1, maxWidth: tmp3, isDraggingRef: ref };
  return obj;
};
