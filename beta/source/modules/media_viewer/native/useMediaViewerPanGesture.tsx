// Module ID: 15064
// Function ID: 15065
// Name: useMediaViewerPanGesture
// Dependencies: [19, 1652, 8943, 8942, 5793, 1705, 7235, 5452, 2]
// Exports: useMediaViewerPanGesture, useMediaViewerPanGestureConfig

// Module 15064 (useMediaViewerPanGesture)
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import spring_spring from "spring/spring" /* 5793 */;
import useVideoControls from "useVideoControls" /* 8943 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let tmp;
const MediaViewerAnalyticsManager = tmp(8942);
let closure_4 = { damping: 15, mass: 1, stiffness: 250, overshootClamping: true };
let closure_5 = { code: "(function useMediaViewerPanGestureTsx1(){let[scheduleOnRN,handleClose]=this.__closure;scheduleOnRN(handleClose);})" };
let closure_6 = { code: "(function useMediaViewerPanGestureTsx2(){let[start,translatePos,isInteracting]=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);})" };
let closure_7 = { code: "(function useMediaViewerPanGestureTsx3({velocityY:velocityY,translationY:translationY}){let[translatePos,start,velocity]=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);})" };
let closure_8 = { code: "(function useMediaViewerPanGestureTsx4(_,manager){let[enabled]=this.__closure;if(!enabled.get()){manager.fail();}})" };
let closure_9 = { code: "(function useMediaViewerPanGestureTsx5(){let[isInteracting,velocity,swipeVelocityThreshold,scheduleOnRN,dismiss,translatePos,withSpring,SPRING_CONFIG]=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){scheduleOnRN(dismiss);}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}})" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerPanGesture.tsx");

export function useMediaViewerPanGestureConfig(arg0, swipeVelocityThreshold, onClose) {
  let closure_0;
  _require = arg0;
  dependencyMap = onClose;
  let obj = require("module_1652");
  const sharedValue = obj.useSharedValue(false);
  let obj2 = require("module_1652");
  const sharedValue1 = obj2.useSharedValue(false);
  const obj3 = require("module_1652");
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = require("module_1652");
  const sharedValue3 = obj4.useSharedValue(0);
  const obj5 = require("module_1652");
  const sharedValue4 = obj5.useSharedValue({ y: 0, x: 0 });
  const obj6 = require("module_1652");
  const sharedValue5 = obj6.useSharedValue(true);
  let items = [onClose];
  const callback = sharedValue.useCallback(() => {
    const obj = useVideoControls;
    obj.tryPauseCurrentVideo();
    if (onClose != null) {
      onClose();
    }
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    MediaViewerAnalytics.markSessionCompleted();
  }, items);
  let items1 = [arg0, callback, sharedValue, sharedValue2, sharedValue3];
  const callback1 = sharedValue.useCallback(() => {
    let tmp2;
    let tmp7;
    let tmp8;
    let tmp9;
    const result = sharedValue.set(true);
    const obj = sharedValue3;
    if (sharedValue3.get() < 0) {
      tmp2 = -closure_0;
    } else {
      tmp2 = closure_0;
    }
    set = sharedValue2.set;
    const withSpring = spring_spring.withSpring;
    const obj2 = { velocity: obj.get() };
    const merged = Object.assign(closure_4);
    const items = [closure_5, _mod1705.scheduleOnRN, callback];
    let c0;
    let c1;
    [tmp7, tmp8, tmp9] = items;
    function useMediaViewerPanGestureTsx1() {
      _undefined(c1);
    }
    const items1 = [tmp8, tmp9];
    useMediaViewerPanGestureTsx1.__closure = items1;
    useMediaViewerPanGestureTsx1.__workletHash = 743701601018;
    useMediaViewerPanGestureTsx1.__initData = tmp7;
    const result1 = set(withSpring(tmp2, obj2, "respect-motion-settings", useMediaViewerPanGestureTsx1));
  }, items1);
  const items2 = [sharedValue3, sharedValue, sharedValue1, sharedValue2, swipeVelocityThreshold, callback1, sharedValue4, sharedValue5];
  return sharedValue.useMemo(() => ({ velocity: sharedValue3, isClosing: sharedValue, isInteracting: sharedValue1, overlayEnabled: sharedValue5, translatePos: sharedValue2, swipeVelocityThreshold, dismiss: callback1, start: sharedValue4 }), items2);
}
export function useMediaViewerPanGesture(panGestureConfig, derivedValue) {
  let swipeVelocityThreshold = panGestureConfig.swipeVelocityThreshold;
  const velocity = panGestureConfig.velocity;
  const isInteracting = panGestureConfig.isInteracting;
  const translatePos = panGestureConfig.translatePos;
  const start = panGestureConfig.start;
  closure_5 = derivedValue;
  const tmp = velocity(isInteracting[6])(panGestureConfig.dismiss);
  closure_6 = tmp;
  let items = [tmp, derivedValue, isInteracting, start, swipeVelocityThreshold, translatePos, velocity];
  const callback = translatePos.useCallback(() => {
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = PanResult.maxPointers(1);
    const items = [closure_6, start, , ];
    items[2] = translatePos;
    items[3] = isInteracting;
    [tmp6, tmp7, tmp8, tmp9] = items;
    function useMediaViewerPanGestureTsx2() {
      const point = { x: 0, y: _undefined2.get() };
      const result = _undefined.set(point);
      const result1 = _undefined3.set(true);
    }
    const items1 = [tmp7, tmp8, tmp9];
    useMediaViewerPanGestureTsx2.__closure = items1;
    useMediaViewerPanGestureTsx2.__workletHash = 8573219711611;
    useMediaViewerPanGestureTsx2.__initData = tmp6;
    const activeOffsetYResult = maxPointersResult.activeOffsetY([-10, 10]);
    const items2 = [closure_7, tmp4, start, velocity];
    [tmp11, tmp12, tmp13, tmp14] = items2;
    function useMediaViewerPanGestureTsx3(arg0) {
      let translationY;
      let velocityY;
      ({ velocityY, translationY } = arg0);
      const result = _undefined.set(translationY + _undefined2.get().y);
      const result1 = _undefined3.set(velocityY);
    }
    const items3 = [tmp12, tmp13, tmp14];
    useMediaViewerPanGestureTsx3.__closure = items3;
    useMediaViewerPanGestureTsx3.__workletHash = 9325111251933;
    useMediaViewerPanGestureTsx3.__initData = tmp11;
    const failOffsetXResult = activeOffsetYResult.failOffsetX([-10, 10]);
    const items4 = [closure_8, derivedValue];
    [tmp15, tmp16] = items4;
    function useMediaViewerPanGestureTsx4(arg0, fail) {
      if (!_undefined.get()) {
        fail.fail();
      }
    }
    const items5 = [tmp16];
    useMediaViewerPanGestureTsx4.__closure = items5;
    useMediaViewerPanGestureTsx4.__workletHash = 9267057305244;
    useMediaViewerPanGestureTsx4.__initData = tmp15;
    const onStartResult = failOffsetXResult.onStart(useMediaViewerPanGestureTsx2);
    const onUpdateResult = onStartResult.onUpdate(useMediaViewerPanGestureTsx3);
    const items6 = [closure_9, isInteracting, velocity, swipeVelocityThreshold, , , , , ];
    const onEnd = onUpdateResult.onTouchesDown(useMediaViewerPanGestureTsx4).onEnd;
    onUpdateResult.onTouchesDown(useMediaViewerPanGestureTsx4);
    items6[4] = _mod1705.scheduleOnRN;
    items6[5] = closure_6;
    items6[6] = translatePos;
    items6[7] = spring_spring.withSpring;
    items6[8] = closure_4;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items6;
    function useMediaViewerPanGestureTsx5() {
      const result = _undefined.set(false);
      const obj = _undefined2;
      if (Math.abs(_undefined2.get()) > c2) {
        _undefined3(c4);
      } else {
        const tmp2 = _undefined4;
        if (0 !== _undefined4.get()) {
          const obj2 = { velocity: obj.get() };
          set = tmp2.set;
          const merged = Object.assign(c7);
          const result1 = set(_undefined5(0, obj2));
        }
      }
    }
    const items7 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
    useMediaViewerPanGestureTsx5.__closure = items7;
    useMediaViewerPanGestureTsx5.__workletHash = 14827979759343;
    useMediaViewerPanGestureTsx5.__initData = tmp18;
    return onEnd(useMediaViewerPanGestureTsx5);
  }, items);
  let items1 = [callback];
  return translatePos.useMemo(() => {
    const Gesture = swipeVelocityThreshold(isInteracting[7]).Gesture;
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
}
