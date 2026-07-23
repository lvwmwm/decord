// Module ID: 12251
// Function ID: 95647
// Name: useMediaViewerPanGestureConfig
// Dependencies: [31, 3991, 8282, 8278, 4542, 8391, 5217, 2]
// Exports: useMediaViewerPanGesture, useMediaViewerPanGestureConfig

// Module 12251 (useMediaViewerPanGestureConfig)
import result from "result";

const require = arg1;
let closure_4 = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
let closure_5 = { code: "function useMediaViewerPanGestureTsx1(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}" };
let closure_6 = { code: "function useMediaViewerPanGestureTsx2(){const{isInteracting,velocity,swipeVelocityThreshold,runOnJS,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){runOnJS(dismiss)();}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}" };
let closure_7 = { code: "function useMediaViewerPanGestureTsx3(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}" };
let closure_8 = { code: "function useMediaViewerPanGestureTsx4({velocityY:velocityY,translationY:translationY}){const{translatePos,start,velocity}=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}" };
let closure_9 = { code: "function useMediaViewerPanGestureTsx5(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}" };
let result = require("useVideoControls").fileFinishedImporting("modules/media_viewer/native/useMediaViewerPanGesture.tsx");

export const useMediaViewerPanGestureConfig = function useMediaViewerPanGestureConfig(arg0, swipeVelocityThreshold, onClose) {
  const _require = arg0;
  let closure_1 = swipeVelocityThreshold;
  const dependencyMap = onClose;
  const sharedValue = _require(3991).useSharedValue(false);
  let obj = _require(3991);
  const sharedValue1 = _require(3991).useSharedValue(false);
  const obj2 = _require(3991);
  const sharedValue2 = _require(3991).useSharedValue(0);
  const obj3 = _require(3991);
  const sharedValue3 = _require(3991).useSharedValue(0);
  const obj4 = _require(3991);
  const sharedValue4 = _require(3991).useSharedValue({ y: 0, x: 0 });
  const obj5 = _require(3991);
  const sharedValue5 = _require(3991).useSharedValue(true);
  const items = [onClose];
  const callback = sharedValue.useCallback(() => {
    callback(onClose[2]).tryPauseCurrentVideo();
    if (null != onClose) {
      onClose();
    }
    const MediaViewerAnalytics = callback(onClose[3]).MediaViewerAnalytics;
    MediaViewerAnalytics.markSessionCompleted();
  }, items);
  const items1 = [arg0, callback, sharedValue, sharedValue2, sharedValue3];
  const callback1 = sharedValue.useCallback(() => {
    const result = sharedValue.set(true);
    if (sharedValue3.get() < 0) {
      let tmp2 = -callback;
    } else {
      tmp2 = callback;
    }
    let obj = callback(onClose[4]);
    obj = { velocity: sharedValue3.get() };
    const merged = Object.assign(sharedValue1);
    const fn = function t() {
      callback(table[1]).runOnJS(outer1_9)();
    };
    obj = { runOnJS: callback(onClose[1]).runOnJS, handleClose: callback };
    fn.__closure = obj;
    fn.__workletHash = 7033730772994;
    fn.__initData = sharedValue2;
    const result1 = sharedValue2.set(obj.withSpring(tmp2, obj, "respect-motion-settings", fn));
  }, items1);
  const items2 = [sharedValue3, sharedValue, sharedValue1, sharedValue2, swipeVelocityThreshold, callback1, sharedValue4, sharedValue5];
  return sharedValue.useMemo(() => ({ velocity: sharedValue3, isClosing: sharedValue, isInteracting: sharedValue1, overlayEnabled: sharedValue5, translatePos: sharedValue2, swipeVelocityThreshold: closure_1, dismiss: callback1, start: sharedValue4 }), items2);
};
export const useMediaViewerPanGesture = function useMediaViewerPanGesture(panGestureConfig, derivedValue) {
  let swipeVelocityThreshold = panGestureConfig.swipeVelocityThreshold;
  const velocity = panGestureConfig.velocity;
  const isInteracting = panGestureConfig.isInteracting;
  const translatePos = panGestureConfig.translatePos;
  const start = panGestureConfig.start;
  let closure_5 = derivedValue;
  const tmp = velocity(isInteracting[5])(panGestureConfig.dismiss);
  let closure_6 = tmp;
  let items = [tmp, derivedValue, isInteracting, start, swipeVelocityThreshold, translatePos, velocity];
  const callback = translatePos.useCallback(() => {
    const Gesture = swipeVelocityThreshold(isInteracting[6]).Gesture;
    const PanResult = Gesture.Pan();
    const items = [-10, 10];
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    const items1 = [-10, 10];
    const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY(items);
    class V {
      constructor() {
        obj = { x: 0, y: outer1_3.get() };
        result = outer1_4.set(obj);
        result1 = outer1_2.set(true);
        return;
      }
    }
    let obj = { start, translatePos, isInteracting };
    V.__closure = obj;
    V.__workletHash = 12024094550213;
    V.__initData = outer1_9;
    const failOffsetXResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).failOffsetX(items1);
    class S {
      constructor(arg0) {
        ({ velocityY, translationY } = arg0);
        result = outer1_3.set(translationY + outer1_4.get().y);
        result1 = outer1_1.set(velocityY);
        return;
      }
    }
    obj = { translatePos, start, velocity };
    S.__closure = obj;
    S.__workletHash = 9790035695747;
    S.__initData = outer1_8;
    const onStartResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).failOffsetX(items1).onStart(V);
    const fn = function w(arg0, fail) {
      if (!outer1_5.get()) {
        fail.fail();
      }
    };
    fn.__closure = { enabled: closure_5 };
    fn.__workletHash = 10675684732258;
    fn.__initData = callback;
    const obj1 = { enabled: closure_5 };
    const onUpdateResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).failOffsetX(items1).onStart(V).onUpdate(S);
    const fn2 = function t() {
      const result = outer1_2.set(false);
      if (Math.abs(outer1_1.get()) > outer1_0) {
        let obj = swipeVelocityThreshold(isInteracting[1]);
        obj.runOnJS(outer1_6)();
      } else if (0 !== outer1_3.get()) {
        obj = { velocity: outer1_1.get() };
        const merged = Object.assign(start);
        const result1 = outer1_3.set(swipeVelocityThreshold(isInteracting[4]).withSpring(0, obj));
        const obj2 = swipeVelocityThreshold(isInteracting[4]);
      }
    };
    const onTouchesDownResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).failOffsetX(items1).onStart(V).onUpdate(S).onTouchesDown(fn);
    fn2.__closure = { isInteracting, velocity, swipeVelocityThreshold, runOnJS: swipeVelocityThreshold(isInteracting[1]).runOnJS, dismiss: closure_6, translatePos, withSpring: swipeVelocityThreshold(isInteracting[4]).withSpring, SPRING_CONFIG: start };
    fn2.__workletHash = 3185523772752;
    fn2.__initData = closure_6;
    return onTouchesDownResult.onEnd(fn2);
  }, items);
  let items1 = [callback];
  return translatePos.useMemo(() => {
    const Gesture = swipeVelocityThreshold(isInteracting[6]).Gesture;
    const NativeResult = Gesture.Native();
    swipeVelocityThreshold = NativeResult;
    let closure_1 = [];
    return {
      panGestureGenerator(index) {
        if (null != dependencyMap[index]) {
          return dependencyMap[index];
        } else {
          dependencyMap[index] = outer1_7().blocksExternalGesture(closure_0);
          return dependencyMap[index];
        }
      },
      nativeGesture: NativeResult
    };
  }, items1);
};
