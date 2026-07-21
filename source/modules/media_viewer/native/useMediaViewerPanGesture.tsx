// Module ID: 12133
// Function ID: 93470
// Name: useMediaViewerPanGestureConfig
// Dependencies: []
// Exports: useMediaViewerPanGesture, useMediaViewerPanGestureConfig

// Module 12133 (useMediaViewerPanGestureConfig)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true, "Null": true, "Null": true, "Null": true };
let closure_5 = { code: "function useMediaViewerPanGestureTsx1(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}" };
let closure_6 = { code: "function useMediaViewerPanGestureTsx2(){const{isInteracting,velocity,swipeVelocityThreshold,runOnJS,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){runOnJS(dismiss)();}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}" };
let closure_7 = { code: "function useMediaViewerPanGestureTsx3(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}" };
let closure_8 = { code: "function useMediaViewerPanGestureTsx4({velocityY:velocityY,translationY:translationY}){const{translatePos,start,velocity}=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}" };
let closure_9 = { code: "function useMediaViewerPanGestureTsx5(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}" };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/media_viewer/native/useMediaViewerPanGesture.tsx");

export const useMediaViewerPanGestureConfig = function useMediaViewerPanGestureConfig(arg0, swipeVelocityThreshold, onClose) {
  swipeVelocityThreshold = arg0;
  const importDefault = swipeVelocityThreshold;
  const dependencyMap = onClose;
  const sharedValue = swipeVelocityThreshold(dependencyMap[1]).useSharedValue(false);
  const React = sharedValue;
  const obj = swipeVelocityThreshold(dependencyMap[1]);
  const sharedValue1 = swipeVelocityThreshold(dependencyMap[1]).useSharedValue(false);
  let closure_4 = sharedValue1;
  const obj2 = swipeVelocityThreshold(dependencyMap[1]);
  const sharedValue2 = swipeVelocityThreshold(dependencyMap[1]).useSharedValue(0);
  let closure_5 = sharedValue2;
  const obj3 = swipeVelocityThreshold(dependencyMap[1]);
  const sharedValue3 = swipeVelocityThreshold(dependencyMap[1]).useSharedValue(0);
  let closure_6 = sharedValue3;
  const obj4 = swipeVelocityThreshold(dependencyMap[1]);
  const sharedValue4 = swipeVelocityThreshold(dependencyMap[1]).useSharedValue({ <string:3438175103>: -536870861, <string:3622265520>: -299892737 });
  let closure_7 = sharedValue4;
  const obj5 = swipeVelocityThreshold(dependencyMap[1]);
  const sharedValue5 = swipeVelocityThreshold(dependencyMap[1]).useSharedValue(true);
  let closure_8 = sharedValue5;
  const items = [onClose];
  const callback = React.useCallback(() => {
    arg0(arg2[2]).tryPauseCurrentVideo();
    if (null != arg2) {
      arg2();
    }
    const MediaViewerAnalytics = arg0(arg2[3]).MediaViewerAnalytics;
    MediaViewerAnalytics.markSessionCompleted();
  }, items);
  let closure_9 = callback;
  const items1 = [arg0, callback, sharedValue, sharedValue2, sharedValue3];
  const callback1 = React.useCallback(() => {
    const result = sharedValue.set(true);
    if (sharedValue3.get() < 0) {
      let tmp2 = -arg0;
    } else {
      tmp2 = arg0;
    }
    let obj = arg0(arg2[4]);
    obj = { velocity: sharedValue3.get() };
    const merged = Object.assign(sharedValue1);
    const fn = function t() {
      callback(closure_2[1]).runOnJS(closure_9)();
    };
    obj = { runOnJS: arg0(arg2[1]).runOnJS, handleClose: callback };
    fn.__closure = obj;
    fn.__workletHash = 7033730772994;
    fn.__initData = sharedValue2;
    const result1 = sharedValue2.set(obj.withSpring(tmp2, obj, "respect-motion-settings", fn));
  }, items1);
  const items2 = [sharedValue3, sharedValue, sharedValue1, sharedValue2, swipeVelocityThreshold, callback1, sharedValue4, sharedValue5];
  return React.useMemo(() => ({ velocity: sharedValue3, isClosing: sharedValue, isInteracting: sharedValue1, overlayEnabled: sharedValue5, translatePos: sharedValue2, swipeVelocityThreshold: arg1, dismiss: callback1, start: sharedValue4 }), items2);
};
export const useMediaViewerPanGesture = function useMediaViewerPanGesture(panGestureConfig, derivedValue) {
  const swipeVelocityThreshold = panGestureConfig.swipeVelocityThreshold;
  derivedValue = swipeVelocityThreshold;
  const velocity = panGestureConfig.velocity;
  const importDefault = velocity;
  const isInteracting = panGestureConfig.isInteracting;
  const dependencyMap = isInteracting;
  const translatePos = panGestureConfig.translatePos;
  const React = translatePos;
  const start = panGestureConfig.start;
  let closure_4 = start;
  let closure_5 = derivedValue;
  const tmp = importDefault(dependencyMap[5])(panGestureConfig.dismiss);
  let closure_6 = tmp;
  const items = [tmp, derivedValue, isInteracting, start, swipeVelocityThreshold, translatePos, velocity];
  const callback = React.useCallback(() => {
    const Gesture = swipeVelocityThreshold(isInteracting[6]).Gesture;
    const PanResult = Gesture.Pan();
    const items = [-10, 10];
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    const items1 = [-10, 10];
    const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY(items);
    class V {
      constructor() {
        obj = { x: 0, y: closure_3.get() };
        result = closure_4.set(obj);
        result1 = closure_2.set(true);
        return;
      }
    }
    let obj = { start, translatePos, isInteracting };
    V.__closure = obj;
    V.__workletHash = 12024094550213;
    V.__initData = closure_9;
    const failOffsetXResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).failOffsetX(items1);
    class S {
      constructor(arg0) {
        ({ velocityY, translationY } = arg0);
        result = closure_3.set(translationY + closure_4.get().y);
        result1 = closure_1.set(velocityY);
        return;
      }
    }
    obj = { translatePos, start, velocity };
    S.__closure = obj;
    S.__workletHash = 9790035695747;
    S.__initData = closure_8;
    const onStartResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).failOffsetX(items1).onStart(V);
    const fn = function w(arg0, fail) {
      if (!closure_5.get()) {
        fail.fail();
      }
    };
    fn.__closure = { enabled: arg1 };
    fn.__workletHash = 10675684732258;
    fn.__initData = callback;
    const obj1 = { enabled: arg1 };
    const onUpdateResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).failOffsetX(items1).onStart(V).onUpdate(S);
    const fn2 = function t() {
      const result = store2.set(false);
      if (Math.abs(store.get()) > callback) {
        let obj = callback(store2[1]);
        obj.runOnJS(closure_6)();
      } else if (0 !== store3.get()) {
        obj = { velocity: store.get() };
        const merged = Object.assign(closure_4);
        const result1 = store3.set(callback(store2[4]).withSpring(0, obj));
        const obj2 = callback(store2[4]);
      }
    };
    const onTouchesDownResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).failOffsetX(items1).onStart(V).onUpdate(S).onTouchesDown(fn);
    fn2.__closure = { isInteracting, velocity, swipeVelocityThreshold, runOnJS: swipeVelocityThreshold(isInteracting[1]).runOnJS, dismiss: tmp, translatePos, withSpring: swipeVelocityThreshold(isInteracting[4]).withSpring, SPRING_CONFIG: start };
    fn2.__workletHash = 3185523772752;
    fn2.__initData = tmp;
    return onTouchesDownResult.onEnd(fn2);
  }, items);
  let closure_7 = callback;
  const items1 = [callback];
  return React.useMemo(() => {
    const Gesture = swipeVelocityThreshold(isInteracting[6]).Gesture;
    const NativeResult = Gesture.Native();
    const swipeVelocityThreshold = NativeResult;
    let closure_1 = [];
    return {
      panGestureGenerator(index) {
        if (null != closure_1[index]) {
          return closure_1[index];
        } else {
          closure_1[index] = callback().blocksExternalGesture(NativeResult);
          return closure_1[index];
        }
      },
      nativeGesture: NativeResult
    };
  }, items1);
};
