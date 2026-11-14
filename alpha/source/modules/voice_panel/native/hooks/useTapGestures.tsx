// Module ID: 20015
// Function ID: 20016
// Name: useTapGestures
// Dependencies: [19, 11984, 5598, 1708, 5548, 5939, 5554, 2]
// Exports: default

// Module 20015 (useTapGestures)
import _mod1708 from "module_1708" /* 1708 */;
import timing_timing from "timing/timing" /* 5548 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import spring_spring from "spring/spring" /* 5939 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let react = react_mod;
let closure_4 = { code: "(function useTapGesturesTsx1(event,manager){let[isFocusedVideoZoomed]=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}})" };
let closure_5 = { code: "(function useTapGesturesTsx2(){let[scheduleOnRN,handleEvent]=this.__closure;return scheduleOnRN(handleEvent,'double');})" };
let closure_6 = { code: "(function useTapGesturesTsx3(){let[scheduleOnRN,handleEvent]=this.__closure;return scheduleOnRN(handleEvent,'single');})" };
let closure_7 = { code: "(function useTapGesturesTsx4(){let[longPressProgress,withTiming,LONG_PRESS_DURATION_MS]=this.__closure;var _longPressProgress;(_longPressProgress=longPressProgress)===null||_longPressProgress===void 0||_longPressProgress.set(withTiming(1,{duration:LONG_PRESS_DURATION_MS}));})" };
let closure_8 = { code: "(function useTapGesturesTsx5(){let[longPressProgress,withSpring]=this.__closure;var _longPressProgress;(_longPressProgress=longPressProgress)===null||_longPressProgress===void 0||_longPressProgress.set(withSpring(0));})" };
let closure_9 = { code: "(function useTapGesturesTsx6(){let[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,handleEvent]=this.__closure;scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);scheduleOnRN(handleEvent,'long');})" };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useTapGestures.tsx");

export default function useTapGestures(onSingleTap) {
  let closure_2;
  let closure_3;
  let isFocusedVideoZoomed;
  let current = onSingleTap;
  isFocusedVideoZoomed = react.useContext(isFocusedVideoZoomed(11984)).isFocusedVideoZoomed;
  dependencyMap = react.useRef(onSingleTap);
  const tmp = null != onSingleTap.onSingleTap;
  react = tmp;
  const tmp2 = null != onSingleTap.onDoubleTap;
  closure_4 = tmp2;
  closure_5 = tmp3;
  const gesturesEnabled = onSingleTap.gesturesEnabled;
  const longPressProgress = onSingleTap.longPressProgress;
  const layoutEffect = react.useLayoutEffect(() => {
    closure_2.current = current;
  });
  let items = [tmp, tmp2, null != onSingleTap.onLongPress, gesturesEnabled, isFocusedVideoZoomed, longPressProgress];
  return react.useMemo(() => {
    let ref;
    let tmp10;
    let tmp11;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp28;
    let tmp29;
    let tmp30;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp36;
    let tmp6;
    let tmp7;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const Exclusive = Gesture.Exclusive;
    const Gesture2 = LegacyBaseButton.Gesture;
    let tmp4 = gesturesEnabled;
    let tmp5 = gesturesEnabled;
    const enabled = Gesture2.Tap().enabled;
    Gesture2.Tap();
    if (gesturesEnabled) {
      tmp5 = closure_4;
    }
    const enabledResult = enabled(tmp5);
    const items = [closure_4, isFocusedVideoZoomed];
    [tmp6, tmp7] = items;
    function handleEvent(arg0) {
      if ("single" === arg0) {
        const current3 = ref.current;
        const onSingleTap = current3.onSingleTap;
        if (onSingleTap != null) {
          onSingleTap();
        }
      } else if ("double" === arg0) {
        const current2 = ref.current;
        const onDoubleTap = current2.onDoubleTap;
        if (onDoubleTap != null) {
          onDoubleTap();
        }
      } else if ("long" === arg0) {
        current = ref.current;
        const onLongPress = current.onLongPress;
        if (onLongPress != null) {
          onLongPress();
        }
      }
    }
    function useTapGesturesTsx1(arg0, fail) {
      if (_undefined.get()) {
        fail.fail();
      }
    }
    const items1 = [tmp7];
    useTapGesturesTsx1.__closure = items1;
    useTapGesturesTsx1.__workletHash = 2872964709820;
    useTapGesturesTsx1.__initData = tmp6;
    const maxDistanceResult = enabledResult.maxDistance(30);
    const numberOfTapsResult = maxDistanceResult.numberOfTaps(2);
    const items2 = [closure_5, , ];
    const onStart = numberOfTapsResult.onTouchesDown(useTapGesturesTsx1).onStart;
    numberOfTapsResult.onTouchesDown(useTapGesturesTsx1);
    items2[1] = _mod1708.scheduleOnRN;
    items2[2] = handleEvent;
    let c0;
    let c1;
    [tmp9, tmp10, tmp11] = items2;
    function useTapGesturesTsx2() {
      return _undefined(c1, "double");
    }
    const items3 = [tmp10, tmp11];
    useTapGesturesTsx2.__closure = items3;
    useTapGesturesTsx2.__workletHash = 11156632838205;
    useTapGesturesTsx2.__initData = tmp9;
    const onStartResult = onStart(useTapGesturesTsx2);
    const Gesture3 = tmp(5598).Gesture;
    let tmp14 = tmp4;
    const enabled2 = Gesture3.Tap().enabled;
    Gesture3.Tap();
    if (tmp4) {
      tmp14 = closure_3;
    }
    const enabled2Result = enabled2(tmp14);
    const items4 = [closure_6, , ];
    const onStart2 = enabled2Result.maxDistance(30).onStart;
    enabled2Result.maxDistance(30);
    items4[1] = _mod1708.scheduleOnRN;
    items4[2] = handleEvent;
    c0 = undefined;
    c1 = undefined;
    [tmp16, tmp17, tmp18] = items4;
    function useTapGesturesTsx3() {
      return _undefined(c1, "single");
    }
    const items5 = [tmp17, tmp18];
    useTapGesturesTsx3.__closure = items5;
    useTapGesturesTsx3.__workletHash = 9691651382035;
    useTapGesturesTsx3.__initData = tmp16;
    const onStart2Result = onStart2(useTapGesturesTsx3);
    const Gesture4 = tmp(5598).Gesture;
    const enabled3 = Gesture4.LongPress().enabled;
    Gesture4.LongPress();
    if (tmp4) {
      tmp4 = closure_5;
    }
    const enabled3Result = enabled3(tmp4);
    const items6 = [closure_7, longPressProgress, , ];
    const onBegin = enabled3Result.minDuration(500).onBegin;
    enabled3Result.minDuration(500);
    items6[2] = timing_timing.withTiming;
    items6[3] = 500;
    [tmp23, tmp24, tmp25, tmp26] = items6;
    function useTapGesturesTsx4() {
      const obj = c0;
      if (c0 != null) {
        const obj2 = { duration };
        const result = obj.set(_undefined(1, obj2));
      }
    }
    const items7 = [tmp24, tmp25, tmp26];
    useTapGesturesTsx4.__closure = items7;
    useTapGesturesTsx4.__workletHash = 9265410513163;
    useTapGesturesTsx4.__initData = tmp23;
    const items8 = [closure_8, longPressProgress, ];
    const onFinalize = onBegin(useTapGesturesTsx4).onFinalize;
    onBegin(useTapGesturesTsx4);
    items8[2] = spring_spring.withSpring;
    [tmp28, tmp29, tmp30] = items8;
    function useTapGesturesTsx5() {
      const obj = c0;
      if (c0 != null) {
        const result = obj.set(_undefined(0));
      }
    }
    const items9 = [tmp29, tmp30];
    useTapGesturesTsx5.__closure = items9;
    useTapGesturesTsx5.__workletHash = 13921288921257;
    useTapGesturesTsx5.__initData = tmp28;
    const items10 = [closure_9, , , , ];
    const onStart3 = onFinalize(useTapGesturesTsx5).onStart;
    onFinalize(useTapGesturesTsx5);
    items10[1] = _mod1708.scheduleOnRN;
    items10[2] = HapticUtils.triggerHapticFeedback;
    items10[3] = HapticUtils.HapticFeedbackTypes;
    items10[4] = handleEvent;
    c0 = undefined;
    c1 = undefined;
    let c2;
    let c3;
    [tmp32, tmp33, tmp34, tmp35, tmp36] = items10;
    function useTapGesturesTsx6() {
      _undefined(c1, _undefined2.IMPACT_MEDIUM);
      _undefined(c3, "long");
    }
    const items11 = [tmp33, tmp34, tmp35, tmp36];
    useTapGesturesTsx6.__closure = items11;
    useTapGesturesTsx6.__workletHash = 15782403123532;
    useTapGesturesTsx6.__initData = tmp32;
    return Exclusive(onStartResult, onStart2Result, onStart3(useTapGesturesTsx6));
  }, items);
};
