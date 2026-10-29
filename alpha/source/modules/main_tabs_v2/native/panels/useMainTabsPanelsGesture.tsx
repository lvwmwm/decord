// Module ID: 17941
// Function ID: 17942
// Name: useMainTabsPanelsGesture
// Dependencies: [19, 11298, 1381, 17942, 11299, 1631, 1497, 5086, 5243, 5246, 5284, 17943, 5334, 2]
// Exports: default

// Module 17941 (useMainTabsPanelsGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import timing from "timing" /* 5243 */;
import timingPresets from "timingPresets" /* 5246 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5334 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11298 */;
import react from "react" /* 19 */;
import PlatformUtils_mod from "PlatformUtils" /* 1381 */;
import PanelsConfig from "PanelsConfig" /* 17942 */;
import size from "module_2" /* 2 */;

let __initData, __initData5, set;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
let panelsConfig = PlatformUtils ? PanelsConfig.ANDROID_PANELS_ANIMATION_CONFIG : PanelsConfig.DEFAULT_PANELS_ANIMATION_CONFIG;
let closure_7 = { code: "function useMainTabsPanelsGestureTsx1(width_0){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant,isFoldChange,timingStandard}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;if(IS_ANDROID){translateX.set(withTiming(width_0,timingInstant,'animate-always'));}else{translateX.set(isFoldChange?withTiming(width_0,timingStandard,'respect-motion-settings'):width_0);}}" };
let closure_8 = { code: "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,onVisibilityChange,runOnJS,onPreMovement,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}return false;}if(onPreMovement!=null){runOnJS(onPreMovement)(show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}" };
let closure_9 = { code: "function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{onVisibilityChange,runOnJS,show}=this.__closure;if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}" };
let closure_10 = { code: "function useMainTabsPanelsGestureTsx4(){const{disallowGesture}=this.__closure;return disallowGesture.get();}" };
let closure_11 = { code: "function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){const{didJustAllowGesture}=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);}" };
let closure_12 = { code: "function useMainTabsPanelsGestureTsx6(e_0){const{isDragging,disallowGesture,didJustAllowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e_0.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e_0.velocityX<0,true,e_0.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e_0.velocityX,true);}}" };
let closure_13 = { code: "function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width,didJustAllowGesture}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);}" };
let closure_14 = { code: "function useMainTabsPanelsGestureTsx8(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}" };
let closure_15 = { code: "function useMainTabsPanelsGestureTsx9(event_0,manager_0){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event_0.state!==State.BEGAN)return;const touch_0=event_0.allTouches[0];if(touch_0==null)return;const xDiff=touch_0.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch_0.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager_0.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager_0.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager_0.fail();return;}}manager_0.activate();}" };
let closure_16 = { code: "function useMainTabsPanelsGestureTsx10(event,manager){const{edgeSwipeOnly,translateX,insets,EDGE_SWIPE_WIDTH,startPosition}=this.__closure;const touch=event.allTouches[0];if(touch==null)return;if(edgeSwipeOnly.get()&&translateX.get()===0&&touch.x>insets.left+EDGE_SWIPE_WIDTH){manager.fail();return;}startPosition.set({x:touch.x,y:touch.y});}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx");

export default function useMainTabsPanelsGesture(canDrag) {
  let closure_6;
  let foldSeam;
  let openWidth;
  canDrag = canDrag.canDrag;
  const onVisibilityChange = canDrag.onVisibilityChange;
  const onDragStart = canDrag.onDragStart;
  const onPreMovement = canDrag.onPreMovement;
  ({ openWidth, foldSeam } = canDrag);
  const startShown = canDrag.startShown;
  if (foldSeam === undefined) {
    foldSeam = null;
  }
  const cancelOnSwipeRightFromStart = canDrag.cancelOnSwipeRightFromStart;
  openWidth = undefined;
  let sharedValue;
  let sharedValue1;
  let ref;
  let callback;
  let sharedValue2;
  let sharedValue3;
  __initData5 = undefined;
  let callback1;
  let sharedValue4;
  let sharedValue5;
  let context;
  let memo;
  let tmp2 = onDragStart;
  let tmp = onVisibilityChange;
  let tmp3 = onVisibilityChange(onDragStart[4])();
  panelsConfig = tmp3;
  const tmp4 = onVisibilityChange(onDragStart[5])();
  __initData = tmp4;
  const width = onVisibilityChange(onDragStart[6])().width;
  if (openWidth == null) {
    openWidth = width;
  }
  const tmp5 = canDrag;
  const tmp6 = canDrag(tmp2[7]);
  let num = 0;
  const useSharedValue = tmp6.useSharedValue;
  if (!startShown) {
    num = openWidth;
  }
  sharedValue = useSharedValue(num);
  const tmp5Result = tmp5(tmp2[7]);
  sharedValue1 = tmp5Result.useSharedValue(false);
  ref = onPreMovement.useRef(false);
  const items = [ref];
  callback = onPreMovement.useCallback((current) => {
    ref.current = current;
  }, items);
  const tmp5Result6 = tmp5(tmp2[7]);
  sharedValue2 = tmp5Result6.useSharedValue(false);
  const tmp5Result7 = tmp5(tmp2[7]);
  sharedValue3 = tmp5Result7.useSharedValue(false);
  __initData5 = onPreMovement.useRef(foldSeam);
  const items1 = [foldSeam, sharedValue1, sharedValue, openWidth];
  const effect = onPreMovement.useEffect(() => {
    const tmp = __initData5.current !== foldSeam;
    let closure_0 = tmp;
    __initData5.current = foldSeam;
    let obj = canDrag(onDragStart[7]);
    const fn = function e(value) {
      if (!sharedValue1.get()) {
        if (0 !== sharedValue.get()) {
          if (PlatformUtils) {
            const obj2 = timing;
            const result = set(obj2.withTiming(value, timingPresets.timingInstant, "animate-always"));
          } else {
            let withTimingResult = value;
            if (closure_0) {
              const obj = timing;
              withTimingResult = obj.withTiming(value, timingPresets.timingStandard, "respect-motion-settings");
            }
            const result1 = set(withTimingResult);
          }
        }
      }
    };
    let obj2 = { isDragging: sharedValue1, translateX: sharedValue, IS_ANDROID: cancelOnSwipeRightFromStart, withTiming: canDrag(onDragStart[8]).withTiming, timingInstant: canDrag(onDragStart[9]).timingInstant, isFoldChange: tmp, timingStandard: canDrag(onDragStart[9]).timingStandard };
    fn.__closure = obj2;
    fn.__workletHash = 9684253698191;
    fn.__initData = __initData;
    obj.runOnUI(fn)(openWidth);
  }, items1);
  class U {
    constructor(show, arg1, velocity, arg3) {
      let closure_0 = show;
      let tmp = arg3;
      if (!tmp) {
        let obj = sharedValue;
        if (0 !== sharedValue.get()) {
          if (obj.get() !== openWidth) {
            return false;
          }
        }
      }
      let num2 = 0;
      if (!show) {
        num2 = openWidth;
      }
      const tmp3 = sharedValue;
      if (sharedValue.get() === num2) {
        if (null != onVisibilityChange) {
          const obj7 = canDrag(onDragStart[7]);
          obj7.runOnJS(tmp34)(show);
        }
        return false;
      } else {
        let tmp9;
        let withTimingResult;
        if (null != onPreMovement) {
          const obj2 = canDrag(onDragStart[7]);
          obj2.runOnJS(tmp39)(show);
        }
        if (show) {
          tmp9 = arg1 ? tmp8.swipeSidePanelOpen : tmp8.nonSwipeSidePanelOpen;
        } else {
          tmp9 = arg1 ? tmp8.swipeSidePanelClose : tmp8.nonSwipeSidePanelClose;
        }
        function handleAnimationFinish(arg0) {
          const tmp = arg0 && null != onVisibilityChange;
          if (tmp) {
            const obj = ReanimatedRexport;
            obj.runOnJS(onVisibilityChange)(show);
          }
        }
        handleAnimationFinish.__closure = { onVisibilityChange, runOnJS: canDrag(onDragStart[7]).runOnJS, show };
        handleAnimationFinish.__workletHash = 1018878139815;
        handleAnimationFinish.__initData = openWidth;
        const obj3 = { onVisibilityChange, runOnJS: canDrag(onDragStart[7]).runOnJS, show };
        set = tmp3.set;
        const obj4 = canDrag(onDragStart[3]);
        if (obj4.isTimingConfig(tmp9)) {
          const tmp16Result = canDrag(onDragStart[8]);
          withTimingResult = tmp16Result.withTiming(num2, tmp18, "respect-motion-settings", handleAnimationFinish);
        } else {
          const withSpring = canDrag(onDragStart[10]).withSpring;
          const obj5 = { velocity };
          const tmp16Result2 = canDrag(onDragStart[10]);
          const merged = Object.assign(tmp18);
          withTimingResult = withSpring(num2, obj5, "respect-motion-settings", handleAnimationFinish);
        }
        const result = set(withTimingResult);
        return true;
      }
    }
  }
  let obj = { translateX: sharedValue, width: openWidth, onVisibilityChange, runOnJS: tmp5(tmp2[7]).runOnJS, onPreMovement, panelsConfig, isTimingConfig: tmp5(tmp2[3]).isTimingConfig, withTiming: tmp5(tmp2[8]).withTiming, withSpring: tmp5(tmp2[10]).withSpring };
  U.__closure = obj;
  U.__workletHash = 4205680413964;
  U.__initData = width;
  const items2 = [onVisibilityChange, onPreMovement, sharedValue, openWidth];
  callback1 = onPreMovement.useCallback(U, items2);
  const tmp5Result8 = tmp5(tmp2[7]);
  sharedValue4 = tmp5Result8.useSharedValue(false);
  const tmp5Result9 = tmp5(tmp2[7]);
  class V {
    constructor() {
      return sharedValue2.get();
    }
  }
  V.__closure = { disallowGesture: sharedValue2 };
  V.__workletHash = 15338765161171;
  V.__initData = sharedValue;
  class L {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        if (!arg0) {
          const result = sharedValue4.set(true);
        }
      }
    }
  }
  L.__closure = { didJustAllowGesture: sharedValue4 };
  L.__workletHash = 17048450187141;
  L.__initData = sharedValue1;
  const animatedReaction = tmp5Result9.useAnimatedReaction(V, L);
  const tmp5Result10 = tmp5(tmp2[7]);
  sharedValue5 = tmp5Result10.useSharedValue({ x: 0, y: 0 });
  context = onPreMovement.useContext(tmp(tmp2[11]));
  const items3 = [tmp4, sharedValue, openWidth, width, sharedValue1, callback1, onDragStart, canDrag, sharedValue5, tmp3, cancelOnSwipeRightFromStart, sharedValue2, sharedValue3, callback, context, sharedValue4];
  memo = onPreMovement.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(canDrag);
    let result = enabledResult.requireExternalGestureToFail(context);
    const manualActivation = result.manualActivation;
    let obj3 = PlatformUtils;
    const rect = { top: -left.top, left: -left.left, bottom: -left.bottom, right: -left.right };
    const fn = function u(arg0, fail) {
      const first = arg0.allTouches[0];
      if (null != first) {
        if (__initData4.get()) {
          if (0 === sharedValue.get()) {
            if (first.x > left.left + 24) {
              fail.fail();
            }
          }
        }
        const point = { x: null, y: null };
        ({ x: obj.x, y: obj.y } = first);
        const result = sharedValue5.set(point);
      }
    };
    let obj = { edgeSwipeOnly: sharedValue3, translateX: sharedValue, insets: left, EDGE_SWIPE_WIDTH: 24, startPosition: sharedValue5 };
    fn.__closure = obj;
    fn.__workletHash = 5475789226466;
    fn.__initData = __initData5;
    const manualActivationResult = manualActivation(obj3.isAndroid());
    const fn2 = function o(state, fail) {
      if (state.state === canDrag(onDragStart[12]).State.BEGAN) {
        const point = state.allTouches[0];
        if (null != point) {
          const diff = point.x - sharedValue5.get().x;
          const _Math2 = Math;
          const absolute = Math.abs(diff);
          if (absolute > 12) {
            if (!__initData3.get()) {
              const _Math = Math;
              const absolute1 = Math.abs(point.y - obj.get().y);
              if (absolute > absolute1) {
                if (absolute * absolute + absolute1 * absolute1 >= 144) {
                  if (diff <= 0) {
                    if (0 === sharedValue.get()) {
                      fail.fail();
                    }
                  } else if (true === cancelOnSwipeRightFromStart) {
                    if (sharedValue.get() >= openWidth) {
                      fail.fail();
                    }
                  }
                  if (minFlingVelocityX === foldSeam.GESTURE_EDGE) {
                    if (diff < 0) {
                      const diff1 = width - 48;
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
    const hitSlopResult = manualActivationResult.hitSlop(rect);
    const onTouchesDownResult = hitSlopResult.onTouchesDown(fn);
    let obj2 = { State: LegacyBaseButton.State, startPosition: sharedValue5, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: openWidth, launchPadType: minFlingVelocityX, LaunchPadTypes, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    fn2.__closure = obj2;
    fn2.__workletHash = 7246608976890;
    fn2.__initData = __initData4;
    const fn3 = function l() {
      const result = sharedValue1.set(true);
      const obj = canDrag(onDragStart[7]);
      obj.runOnJS(__initData2)(true);
      const tmp2 = canDrag;
      const tmp3 = onDragStart;
      if (null != closure_1_2) {
        const tmp2Result = tmp2(tmp3[7]);
        tmp2Result.runOnJS(tmp5)();
      }
    };
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn2);
    let obj4 = { isDragging: sharedValue1, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, onDragStart };
    fn3.__closure = obj4;
    fn3.__workletHash = 8659650895938;
    fn3.__initData = __initData3;
    const fn4 = function n(changeX) {
      if (__initData3.get()) {
        const value = obj.get();
        if (0 !== value) {
          if (value !== openWidth) {
            const result = obj.set(0);
          }
        }
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const result1 = obj.set(Math.max(0, Math.min(openWidth, obj.get() + changeX.changeX)));
        const result2 = sharedValue4.set(false);
      }
    };
    let obj5 = { disallowGesture: sharedValue2, translateX: sharedValue, width: openWidth, didJustAllowGesture: sharedValue4 };
    fn4.__closure = obj5;
    fn4.__workletHash = 13355779907583;
    fn4.__initData = __initData2;
    const fn5 = function e(velocityX) {
      try {
        if (sharedValue1.get()) {
          if (!__initData3.get()) {
            const obj2 = sharedValue4;
            if (!sharedValue4.get()) {
              const result = obj.set(false);
              const result1 = obj2.set(false);
              const obj3 = canDrag(onDragStart[7]);
              obj3.runOnJS(__initData2)(false);
              const _Math = Math;
              if (Math.abs(velocityX.velocityX) > minFlingVelocityX.minFlingVelocityX) {
                callback1(velocityX.velocityX < 0, true, velocityX.velocityX, true);
              } else {
                callback1(sharedValue.get() < openWidth / 2, false, velocityX.velocityX, true);
              }
            }
          }
        }
        const result2 = obj.set(false);
        const result3 = sharedValue4.set(false);
        const obj4 = canDrag(onDragStart[7]);
        obj4.runOnJS(__initData2)(false);
      } catch (tmp30) {
        const result4 = sharedValue1.set(false);
        const result5 = sharedValue4.set(false);
        const obj5 = canDrag(onDragStart[7]);
        obj5.runOnJS(__initData2)(false);
        throw tmp30;
      }
    };
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    const onChangeResult = onStartResult.onChange(fn4);
    fn5.__closure = { isDragging: sharedValue1, disallowGesture: sharedValue2, didJustAllowGesture: sharedValue4, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, panelsConfig: minFlingVelocityX, movePanel: callback1, translateX: sharedValue, width: openWidth };
    fn5.__workletHash = 9466036897321;
    fn5.__initData = __initData;
    ({ isDragging: sharedValue1, disallowGesture: sharedValue2, didJustAllowGesture: sharedValue4, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, panelsConfig: minFlingVelocityX, movePanel: callback1, translateX: sharedValue, width: openWidth });
    return onChangeResult.onFinalize(fn5);
  }, items3);
  const items4 = [memo, sharedValue2, sharedValue3, sharedValue];
  let obj2 = { gesture: memo, panelGestureContext: onPreMovement.useMemo(() => ({ gesture: memo, disallowGesture: sharedValue2, edgeSwipeOnly: sharedValue3, translateX: sharedValue }), items4), isDragging: sharedValue1, translateX: sharedValue, movePanel: callback1, maxWidth: openWidth, isDraggingRef: ref };
  return obj2;
};
