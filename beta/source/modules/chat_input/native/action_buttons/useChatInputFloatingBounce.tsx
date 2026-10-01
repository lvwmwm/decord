// Module ID: 11729
// Function ID: 11730
// Name: useChatInputFloatingBounce
// Dependencies: [32, 19, 11444, 4566, 4837, 5280, 2]
// Exports: default

// Module 11729 (useChatInputFloatingBounce)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import size from "module_2" /* 2 */;

let set, set2, set3;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG: closure_4, CHAT_INPUT_FLOATING_COLLAPSED_SCALE: hasOwnProperty, CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG: metroRequire, CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG: metroImportDefault } = ChatInputConstants);
let closure_8 = { code: "function useChatInputFloatingBounceTsx1(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}" };
let closure_9 = { code: "function useChatInputFloatingBounceTsx2(finished){const{runOnJS,handleExitFinished}=this.__closure;if(finished===true){runOnJS(handleExitFinished)();}}" };
const __initData = { code: "function useChatInputFloatingBounceTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx");

export default function useChatInputFloatingBounce(visible) {
  let tmpResult2;
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
  let setEnterFinished;
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
    num3 = setEnterFinished;
  }
  sharedValue2 = useSharedValue2(num3);
  let obj = sharedValue;
  const tmp7 = onExitComplete(sharedValue.useState(initiallyVisible), 2);
  setEnterFinished = tmp9;
  const first = tmp7[0];
  const tmp10 = onExitComplete(sharedValue.useState(visible), 2);
  if (visible !== tmp10[0]) {
    tmp10[1](visible);
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
  const items1 = [visible, num, sharedValue, sharedValue2];
  const effect1 = obj.useEffect(() => {
    function handleExitFinished() {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    }
    const tmp = handleExitFinished;
    if (tmp) {
      const tmp21 = visible(num[4]);
      class I {
        constructor(arg0) {
          if (true === arg0) {
            const obj = visible(num[3]);
            obj.runOnJS(setEnterFinished)(true);
          }
        }
      }
      const withTiming2 = tmp21.withTiming;
      I.__closure = { runOnJS: visible(num[3]).runOnJS, setEnterFinished };
      I.__workletHash = 9490441890617;
      I.__initData = __initData;
      const obj3 = { runOnJS: visible(num[3]).runOnJS, setEnterFinished };
      const withTiming2Result = withTiming2(1, ref, "respect-motion-settings", I);
      let withDelayResult = withTiming2Result;
      set3 = sharedValue.set;
      if (num > 0) {
        const obj4 = visible(num[3]);
        withDelayResult = obj4.withDelay(tmp31, withTiming2Result);
      }
      set3(withDelayResult);
      const obj5 = visible(num[5]);
      const withSpringResult = obj5.withSpring(1, sharedValue2, "respect-motion-settings");
      let withDelayResult1 = withSpringResult;
      const set4 = sharedValue2.set;
      if (num > 0) {
        const obj6 = visible(num[3]);
        withDelayResult1 = obj6.withDelay(tmp31, withSpringResult);
      }
      set4(withDelayResult1);
    } else {
      set = sharedValue.set;
      class I {
        constructor(arg0) {
          if (true === arg0) {
            const obj = visible(num[3]);
            obj.runOnJS(setEnterFinished)(true);
          }
        }
      }
      const fn = function f(arg0) {
        if (true === arg0) {
          const obj = ReanimatedRexport;
          obj.runOnJS(handleExitFinished)();
        }
      };
      let obj = { runOnJS: visible(num[3]).runOnJS, handleExitFinished };
      const withTiming = tmp5.withTiming;
      fn.__closure = obj;
      num = 6186469155404;
      fn.__workletHash = 6186469155404;
      fn.__initData = __initData2;
      const result = set(withTiming(0, closure_1_7, "respect-motion-settings", fn));
      set2 = sharedValue2.set;
      const obj2 = visible(num[4]);
      set2(obj2.withTiming(setEnterFinished, closure_1_7, "respect-motion-settings"));
    }
  }, items1);
  let obj2 = { animatedStyle: tmpResult2.useAnimatedStyle(J), isInteractive: tmp13 };
  tmpResult2 = tmp(tmp2[3]);
  class J {
    constructor() {
      let items;
      const obj = { opacity: sharedValue.get(), transform: items };
      items = [{ scale: sharedValue2.get() }];
      ({ scale: sharedValue2.get() });
      return obj;
    }
  }
  J.__closure = { opacity: sharedValue, scale: sharedValue2 };
  J.__workletHash = 8631256891065;
  J.__initData = __initData;
  return obj2;
};
