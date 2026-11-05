// Module ID: 13036
// Function ID: 13037
// Name: useChatInputFloatingBounce
// Dependencies: [32, 19, 13035, 1652, 5380, 1705, 5773, 2]
// Exports: default

// Module 13036 (useChatInputFloatingBounce)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5380 */;
import spring_spring from "spring/spring" /* 5773 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChatInputConstants from "ChatInputConstants" /* 13035 */;
import size from "module_2" /* 2 */;

let set, set2, set3;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG: closure_4, CHAT_INPUT_FLOATING_COLLAPSED_SCALE: hasOwnProperty, CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG: metroRequire, CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG: metroImportDefault } = ChatInputConstants);
let closure_8 = { code: "(function useChatInputFloatingBounceTsx1(finished){let[scheduleOnRN,setEnterFinished]=this.__closure;if(finished===true){scheduleOnRN(setEnterFinished,true);}})" };
let closure_9 = { code: "(function useChatInputFloatingBounceTsx2(finished){let[scheduleOnRN,handleExitFinished]=this.__closure;if(finished===true){scheduleOnRN(handleExitFinished);}})" };
let closure_10 = { code: "(function useChatInputFloatingBounceTsx3(){let[opacity,scale]=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};})" };
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx");

export default function useChatInputFloatingBounce(visible) {
  let tmp17;
  let tmp18;
  let tmp19;
  visible = visible.visible;
  let initiallyVisible = visible.initiallyVisible;
  if (initiallyVisible === undefined) {
    initiallyVisible = visible;
  }
  let num = visible.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  const onExitComplete = visible.onExitComplete;
  let flag = visible.interactiveDuringEnter;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  let sharedValue2;
  let closure_5;
  let closure_6;
  let tmp = visible;
  const tmp2 = num;
  const tmp3 = visible(num[3]);
  let num2 = 0;
  const useSharedValue = tmp3.useSharedValue;
  if (initiallyVisible) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  let num3 = 1;
  const useSharedValue2 = tmp(tmp2[3]).useSharedValue;
  tmp(tmp2[3]);
  if (!initiallyVisible) {
    num3 = closure_5;
  }
  sharedValue2 = useSharedValue2(num3);
  let obj = sharedValue;
  const tmp7 = onExitComplete(sharedValue.useState(initiallyVisible), 2);
  closure_5 = tmp9;
  const first = tmp7[0];
  const tmp10 = onExitComplete(sharedValue.useState(visible), 2);
  if (visible !== tmp10[0]) {
    const tmp11 = tmp10[1](visible);
    if (!visible) {
      tmp7[1](false);
    }
  }
  let tmp13 = visible;
  if (!flag) {
    tmp13 = visible && first;
    const tmp14 = visible && first;
  }
  closure_6 = obj.useRef(onExitComplete);
  let items = [onExitComplete];
  const effect = obj.useEffect(() => {
    closure_6.current = onExitComplete;
  }, items);
  let items1 = [visible, num, sharedValue, sharedValue2];
  const effect1 = obj.useEffect(() => {
    let ref;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp32;
    let tmp33;
    let tmp34;
    const tmp = visible;
    if (tmp) {
      const items = [closure_8, , ];
      const withTiming2 = timing_timing.withTiming;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = hasOwnProperty;
      let c0;
      let c1;
      [tmp32, tmp33, tmp34] = items;
      function useChatInputFloatingBounceTsx1(arg0) {
        if (true === arg0) {
          _undefined(c1, true);
        }
      }
      const items1 = [tmp33, tmp34];
      useChatInputFloatingBounceTsx1.__closure = items1;
      useChatInputFloatingBounceTsx1.__workletHash = 11139071316621;
      useChatInputFloatingBounceTsx1.__initData = tmp32;
      const withTiming2Result = withTiming2(1, metroRequire, "respect-motion-settings", useChatInputFloatingBounceTsx1);
      let withDelayResult = withTiming2Result;
      set3 = sharedValue.set;
      if (num > 0) {
        const obj2 = _mod1652;
        withDelayResult = obj2.withDelay(tmp40, withTiming2Result);
      }
      set3(withDelayResult);
      const obj3 = spring_spring;
      const withSpringResult = obj3.withSpring(1, React3, "respect-motion-settings");
      let withDelayResult1 = withSpringResult;
      const set4 = sharedValue2.set;
      if (num > 0) {
        const obj4 = _mod1652;
        withDelayResult1 = obj4.withDelay(tmp40, withSpringResult);
      }
      set4(withDelayResult1);
    } else {
      set = sharedValue.set;
      const items2 = [closure_9, , ];
      const withTiming = timing_timing.withTiming;
      items2[1] = _mod1705.scheduleOnRN;
      items2[2] = function handleExitFinished() {
        const current = ref.current;
        let currentResult;
        if (current != null) {
          currentResult = current();
        }
        return currentResult;
      };
      c0 = undefined;
      c1 = undefined;
      [tmp11, tmp12, tmp13] = items2;
      function useChatInputFloatingBounceTsx2(arg0) {
        if (true === arg0) {
          _undefined(c1);
        }
      }
      const items3 = [tmp12, tmp13];
      useChatInputFloatingBounceTsx2.__closure = items3;
      useChatInputFloatingBounceTsx2.__workletHash = 14048912962804;
      useChatInputFloatingBounceTsx2.__initData = tmp11;
      const result = set(withTiming(0, tmp6, "respect-motion-settings", useChatInputFloatingBounceTsx2));
      set2 = sharedValue2.set;
      const obj = timing_timing;
      set2(obj.withTiming(hasOwnProperty, metroImportDefault, "respect-motion-settings"));
    }
  }, items1);
  let items2 = [closure_10, sharedValue, sharedValue2];
  let c0;
  let c1;
  [tmp17, tmp18, tmp19] = items2;
  function useChatInputFloatingBounceTsx3() {
    let items;
    const obj = { opacity: _undefined.get(), transform: items };
    items = [{ scale: _undefined2.get() }];
    ({ scale: _undefined2.get() });
    return obj;
  }
  let items3 = [tmp18, tmp19];
  useChatInputFloatingBounceTsx3.__closure = items3;
  useChatInputFloatingBounceTsx3.__workletHash = 19796400512;
  useChatInputFloatingBounceTsx3.__initData = tmp17;
  const tmpResult2 = tmp(tmp2[3]);
  let obj2 = { animatedStyle: tmpResult2.useAnimatedStyle(useChatInputFloatingBounceTsx3), isInteractive: tmp13 };
  return obj2;
};
