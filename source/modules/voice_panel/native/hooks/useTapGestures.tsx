// Module ID: 15865
// Function ID: 122507
// Name: useTapGestures
// Dependencies: [31, 10046, 5217, 3991, 4099, 2]
// Exports: default

// Module 15865 (useTapGestures)
import result from "result";

const require = arg1;
let closure_4 = { code: "function useTapGesturesTsx1(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}" };
let closure_5 = { code: "function useTapGesturesTsx2(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}" };
let closure_6 = { code: "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}" };
let closure_7 = { code: "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}" };
const result = require("Directions").fileFinishedImporting("modules/voice_panel/native/hooks/useTapGestures.tsx");

export default function useTapGestures(onSingleTap) {
  let closure_0 = onSingleTap;
  isFocusedVideoZoomed = React.useContext(isFocusedVideoZoomed(10046)).isFocusedVideoZoomed;
  const dependencyMap = React.useRef(onSingleTap);
  React = tmp;
  let closure_4 = tmp2;
  let closure_5 = tmp3;
  const gesturesEnabled = onSingleTap.gesturesEnabled;
  const layoutEffect = React.useLayoutEffect(() => {
    closure_2.current = closure_0;
  });
  const items = [null != onSingleTap.onSingleTap, null != onSingleTap.onDoubleTap, null != onSingleTap.onLongPress, gesturesEnabled, isFocusedVideoZoomed];
  return React.useMemo(() => {
    function handleEvent(arg0) {
      if ("single" === arg0) {
        if (null != outer1_2.current.onSingleTap) {
          const current3 = outer1_2.current;
          current3.onSingleTap();
        }
      } else if ("double" === arg0) {
        if (null != outer1_2.current.onDoubleTap) {
          const current2 = outer1_2.current;
          current2.onDoubleTap();
        }
      } else if ("long" === arg0) {
        if (null != outer1_2.current.onLongPress) {
          const current = outer1_2.current;
          current.onLongPress();
        }
      }
    }
    const Gesture = onSingleTap(5217).Gesture;
    const Gesture2 = onSingleTap(5217).Gesture;
    let tmp = gesturesEnabled;
    if (gesturesEnabled) {
      tmp = closure_4;
    }
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(tmp);
    const maxDistanceResult = Gesture2.Tap().enabled(tmp).maxDistance(30);
    class S {
      constructor(arg0, arg1) {
        if (outer1_1.get()) {
          failResult = arg1.fail();
        }
        return;
      }
    }
    let obj = { isFocusedVideoZoomed };
    S.__closure = obj;
    S.__workletHash = 3236469126950;
    S.__initData = closure_5;
    const numberOfTapsResult = Gesture2.Tap().enabled(tmp).maxDistance(30).numberOfTaps(2);
    const fn = function v() {
      return handleEvent(3991).runOnJS(handleEvent)("double");
    };
    obj = { runOnJS: onSingleTap(3991).runOnJS, handleEvent };
    fn.__closure = obj;
    fn.__workletHash = 13571114432746;
    fn.__initData = closure_4;
    const onTouchesDownResult = Gesture2.Tap().enabled(tmp).maxDistance(30).numberOfTaps(2).onTouchesDown(S);
    const Gesture3 = onSingleTap(5217).Gesture;
    const onStartResult = Gesture2.Tap().enabled(tmp).maxDistance(30).numberOfTaps(2).onTouchesDown(S).onStart(fn);
    let tmp3 = gesturesEnabled;
    if (gesturesEnabled) {
      tmp3 = result;
    }
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(tmp3);
    const fn2 = function c() {
      return handleEvent(3991).runOnJS(handleEvent)("single");
    };
    const maxDistanceResult1 = Gesture3.Tap().enabled(tmp3).maxDistance(30);
    fn2.__closure = { runOnJS: onSingleTap(3991).runOnJS, handleEvent };
    fn2.__workletHash = 14109132753191;
    fn2.__initData = gesturesEnabled;
    const obj1 = { runOnJS: onSingleTap(3991).runOnJS, handleEvent };
    const Gesture4 = onSingleTap(5217).Gesture;
    const onStartResult1 = maxDistanceResult1.onStart(fn2);
    let tmp5 = gesturesEnabled;
    if (gesturesEnabled) {
      tmp5 = closure_5;
    }
    const LongPressResult = Gesture4.LongPress();
    const fn3 = function n() {
      const obj = handleEvent(3991);
      handleEvent(3991).runOnJS(handleEvent(4099).triggerHapticFeedback)(handleEvent(4099).HapticFeedbackTypes.IMPACT_MEDIUM);
      const runOnJSResult = handleEvent(3991).runOnJS(handleEvent(4099).triggerHapticFeedback);
      handleEvent(3991).runOnJS(handleEvent)("long");
    };
    const enabledResult2 = Gesture4.LongPress().enabled(tmp5);
    fn3.__closure = { runOnJS: onSingleTap(3991).runOnJS, triggerHapticFeedback: onSingleTap(4099).triggerHapticFeedback, HapticFeedbackTypes: onSingleTap(4099).HapticFeedbackTypes, handleEvent };
    fn3.__workletHash = 1947700378974;
    fn3.__initData = outer1_7;
    return Gesture.Exclusive(onStartResult, onStartResult1, enabledResult2.onStart(fn3));
  }, items);
};
