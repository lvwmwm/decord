// Module ID: 15693
// Function ID: 119969
// Name: useTapGestures
// Dependencies: []
// Exports: default

// Module 15693 (useTapGestures)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = { code: "function useTapGesturesTsx1(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}" };
let closure_5 = { code: "function useTapGesturesTsx2(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}" };
let closure_6 = { code: "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}" };
let closure_7 = { code: "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}" };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/voice_panel/native/hooks/useTapGestures.tsx");

export default function useTapGestures(onSingleTap) {
  const arg1 = onSingleTap;
  const isFocusedVideoZoomed = React.useContext(importDefault(closure_2[1])).isFocusedVideoZoomed;
  const importDefault = isFocusedVideoZoomed;
  closure_2 = React.useRef(onSingleTap);
  const React = tmp;
  let closure_4 = tmp2;
  let closure_5 = tmp3;
  const gesturesEnabled = onSingleTap.gesturesEnabled;
  let closure_6 = gesturesEnabled;
  const layoutEffect = React.useLayoutEffect(() => {
    closure_2.current = arg0;
  });
  const items = [null != onSingleTap.onSingleTap, null != onSingleTap.onDoubleTap, null != onSingleTap.onLongPress, gesturesEnabled, isFocusedVideoZoomed];
  return React.useMemo(() => {
    function handleEvent(arg0) {
      if ("single" === arg0) {
        if (null != closure_2.current.onSingleTap) {
          const current3 = closure_2.current;
          current3.onSingleTap();
        }
      } else if ("double" === arg0) {
        if (null != closure_2.current.onDoubleTap) {
          const current2 = closure_2.current;
          current2.onDoubleTap();
        }
      } else if ("long" === arg0) {
        if (null != closure_2.current.onLongPress) {
          const current = closure_2.current;
          current.onLongPress();
        }
      }
    }
    const arg0 = handleEvent;
    const Gesture = arg0(closure_2[2]).Gesture;
    const Gesture2 = arg0(closure_2[2]).Gesture;
    let tmp = gesturesEnabled;
    if (gesturesEnabled) {
      tmp = tmp2;
    }
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(tmp);
    const maxDistanceResult = Gesture2.Tap().enabled(tmp).maxDistance(30);
    class S {
      constructor(arg0, arg1) {
        if (closure_1.get()) {
          failResult = arg1.fail();
        }
        return;
      }
    }
    let obj = { isFocusedVideoZoomed };
    S.__closure = obj;
    S.__workletHash = 3236469126950;
    S.__initData = tmp3;
    const numberOfTapsResult = Gesture2.Tap().enabled(tmp).maxDistance(30).numberOfTaps(2);
    const fn = function v() {
      return handleEvent(closure_2[3]).runOnJS(handleEvent)("double");
    };
    obj = { runOnJS: arg0(closure_2[3]).runOnJS, handleEvent };
    fn.__closure = obj;
    fn.__workletHash = 13571114432746;
    fn.__initData = tmp2;
    const onTouchesDownResult = Gesture2.Tap().enabled(tmp).maxDistance(30).numberOfTaps(2).onTouchesDown(S);
    const Gesture3 = arg0(closure_2[2]).Gesture;
    const onStartResult = Gesture2.Tap().enabled(tmp).maxDistance(30).numberOfTaps(2).onTouchesDown(S).onStart(fn);
    let tmp3 = gesturesEnabled;
    if (gesturesEnabled) {
      tmp3 = tmp;
    }
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(tmp3);
    const fn2 = function c() {
      return handleEvent(closure_2[3]).runOnJS(handleEvent)("single");
    };
    const maxDistanceResult1 = Gesture3.Tap().enabled(tmp3).maxDistance(30);
    fn2.__closure = { runOnJS: arg0(closure_2[3]).runOnJS, handleEvent };
    fn2.__workletHash = 14109132753191;
    fn2.__initData = gesturesEnabled;
    const obj1 = { runOnJS: arg0(closure_2[3]).runOnJS, handleEvent };
    const Gesture4 = arg0(closure_2[2]).Gesture;
    const onStartResult1 = maxDistanceResult1.onStart(fn2);
    let tmp5 = gesturesEnabled;
    if (gesturesEnabled) {
      tmp5 = tmp3;
    }
    const LongPressResult = Gesture4.LongPress();
    const fn3 = function n() {
      const obj = handleEvent(closure_2[3]);
      handleEvent(closure_2[3]).runOnJS(handleEvent(closure_2[4]).triggerHapticFeedback)(handleEvent(closure_2[4]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const runOnJSResult = handleEvent(closure_2[3]).runOnJS(handleEvent(closure_2[4]).triggerHapticFeedback);
      handleEvent(closure_2[3]).runOnJS(handleEvent)("long");
    };
    const enabledResult2 = Gesture4.LongPress().enabled(tmp5);
    fn3.__closure = { runOnJS: arg0(closure_2[3]).runOnJS, triggerHapticFeedback: arg0(closure_2[4]).triggerHapticFeedback, HapticFeedbackTypes: arg0(closure_2[4]).HapticFeedbackTypes, handleEvent };
    fn3.__workletHash = 1947700378974;
    fn3.__initData = closure_7;
    return Gesture.Exclusive(onStartResult, onStartResult1, enabledResult2.onStart(fn3));
  }, items);
};
