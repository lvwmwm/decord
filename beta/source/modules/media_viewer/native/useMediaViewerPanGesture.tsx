// Module ID: 12537
// Function ID: 12538
// Name: useMediaViewerPanGesture
// Dependencies: [19, 4566, 7710, 7709, 5280, 6383, 6073, 2]
// Exports: useMediaViewerPanGesture, useMediaViewerPanGestureConfig

// Module 12537 (useMediaViewerPanGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import useVideoControls from "useVideoControls" /* 7710 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let tmp;
const MediaViewerAnalyticsManager = tmp(7709);
let closure_4 = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
let closure_5 = { code: "function useMediaViewerPanGestureTsx1(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}" };
let closure_6 = { code: "function useMediaViewerPanGestureTsx2(){const{isInteracting,velocity,swipeVelocityThreshold,runOnJS,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){runOnJS(dismiss)();}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}" };
let closure_7 = { code: "function useMediaViewerPanGestureTsx3(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}" };
let closure_8 = { code: "function useMediaViewerPanGestureTsx4({velocityY:velocityY,translationY:translationY}){const{translatePos,start,velocity}=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}" };
let closure_9 = { code: "function useMediaViewerPanGestureTsx5(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerPanGesture.tsx");

export const useMediaViewerPanGestureConfig = function useMediaViewerPanGestureConfig(arg0, swipeVelocityThreshold, onClose) {
  let closure_0;
  _require = arg0;
  dependencyMap = onClose;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(false);
  let obj2 = require("ReanimatedRexport");
  const sharedValue1 = obj2.useSharedValue(false);
  const obj3 = require("ReanimatedRexport");
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = require("ReanimatedRexport");
  const sharedValue3 = obj4.useSharedValue(0);
  const obj5 = require("ReanimatedRexport");
  const sharedValue4 = obj5.useSharedValue({ y: 0, x: 0 });
  const obj6 = require("ReanimatedRexport");
  const sharedValue5 = obj6.useSharedValue(true);
  const items = [onClose];
  const handleClose = sharedValue.useCallback(() => {
    const obj = useVideoControls;
    obj.tryPauseCurrentVideo();
    if (onClose != null) {
      onClose();
    }
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    MediaViewerAnalytics.markSessionCompleted();
  }, items);
  const items1 = [arg0, handleClose, sharedValue, sharedValue2, sharedValue3];
  const callback1 = sharedValue.useCallback(() => {
    let tmp2;
    const result = sharedValue.set(true);
    let obj = sharedValue3;
    if (sharedValue3.get() < 0) {
      tmp2 = -closure_0;
    } else {
      tmp2 = closure_0;
    }
    set = sharedValue2.set;
    const withSpring = spring.withSpring;
    const obj2 = { velocity: obj.get() };
    const merged = Object.assign(closure_4);
    const fn = function t() {
      const obj = closure_0(onClose[1]);
      obj.runOnJS(handleClose)();
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
    fn.__workletHash = 7033730772994;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
    const result1 = set(withSpring(tmp2, obj2, "respect-motion-settings", fn));
  }, items1);
  const items2 = [sharedValue3, sharedValue, sharedValue1, sharedValue2, swipeVelocityThreshold, callback1, sharedValue4, sharedValue5];
  return sharedValue.useMemo(() => ({ velocity: sharedValue3, isClosing: sharedValue, isInteracting: sharedValue1, overlayEnabled: sharedValue5, translatePos: sharedValue2, swipeVelocityThreshold, dismiss: callback1, start: sharedValue4 }), items2);
};
export const useMediaViewerPanGesture = function useMediaViewerPanGesture(panGestureConfig, derivedValue) {
  let SPRING_CONFIG;
  let swipeVelocityThreshold = panGestureConfig.swipeVelocityThreshold;
  const velocity = panGestureConfig.velocity;
  const isInteracting = panGestureConfig.isInteracting;
  const translatePos = panGestureConfig.translatePos;
  const start = panGestureConfig.start;
  const enabled = derivedValue;
  const tmp = velocity(isInteracting[5])(panGestureConfig.dismiss);
  closure_6 = tmp;
  const items = [tmp, derivedValue, isInteracting, start, swipeVelocityThreshold, translatePos, velocity];
  const callback = translatePos.useCallback(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = PanResult.maxPointers(1);
    const activeOffsetYResult = maxPointersResult.activeOffsetY([-10, 10]);
    const failOffsetXResult = activeOffsetYResult.failOffsetX([-10, 10]);
    class V {
      constructor() {
        const point = { x: 0, y: translatePos.get() };
        const result = SPRING_CONFIG.set(point);
        const result1 = isInteracting.set(true);
      }
    }
    let obj = { start, translatePos, isInteracting };
    V.__closure = obj;
    V.__workletHash = 12024094550213;
    V.__initData = __initData3;
    const onStartResult = failOffsetXResult.onStart(V);
    class S {
      constructor(arg0) {
        let translationY;
        let velocityY;
        ({ velocityY, translationY } = arg0);
        const result = translatePos.set(translationY + SPRING_CONFIG.get().y);
        const result1 = velocity.set(velocityY);
      }
    }
    let obj2 = { translatePos, start, velocity };
    S.__closure = obj2;
    S.__workletHash = 9790035695747;
    S.__initData = __initData2;
    const fn = function w(arg0, fail) {
      if (!enabled.get()) {
        fail.fail();
      }
    };
    let obj3 = { enabled };
    fn.__closure = obj3;
    fn.__workletHash = 10675684732258;
    fn.__initData = __initData;
    const fn2 = function t() {
      const result = closure_1_2.set(false);
      const obj = velocity;
      if (Math.abs(velocity.get()) > closure_1_0) {
        const obj3 = swipeVelocityThreshold(isInteracting[1]);
        obj3.runOnJS(closure_1_6)();
      } else {
        const tmp2 = translatePos;
        if (0 !== translatePos.get()) {
          set = tmp2.set;
          const obj2 = { velocity: obj.get() };
          const withSpring = swipeVelocityThreshold(isInteracting[4]).withSpring;
          swipeVelocityThreshold(isInteracting[4]);
          const merged = Object.assign(start);
          const result1 = set(withSpring(0, obj2));
        }
      }
    };
    const onUpdateResult = onStartResult.onUpdate(S);
    const onTouchesDownResult = onUpdateResult.onTouchesDown(fn);
    fn2.__closure = { isInteracting, velocity, swipeVelocityThreshold, runOnJS: ReanimatedRexport.runOnJS, dismiss: __initData, translatePos, withSpring: spring.withSpring, SPRING_CONFIG };
    fn2.__workletHash = 3185523772752;
    fn2.__initData = __initData;
    ({ isInteracting, velocity, swipeVelocityThreshold, runOnJS: ReanimatedRexport.runOnJS, dismiss: __initData, translatePos, withSpring: spring.withSpring, SPRING_CONFIG });
    return onTouchesDownResult.onEnd(fn2);
  }, items);
  const items1 = [callback];
  return translatePos.useMemo(() => {
    const Gesture = swipeVelocityThreshold(isInteracting[6]).Gesture;
    const NativeResult = Gesture.Native();
    swipeVelocityThreshold = NativeResult;
    let closure_1 = [];
    let obj = {
      panGestureGenerator(index) {
        if (null != closure_1[index]) {
          return closure_1[index];
        } else {
          const obj = callback();
          closure_1[index] = obj.blocksExternalGesture(NativeResult);
          return closure_1[index];
        }
      },
      nativeGesture: NativeResult
    };
    return obj;
  }, items1);
};
