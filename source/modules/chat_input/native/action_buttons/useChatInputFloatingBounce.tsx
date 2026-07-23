// Module ID: 11353
// Function ID: 88251
// Name: useChatInputFloatingBounce
// Dependencies: [57, 31, 11105, 3991, 4131, 4542, 2]
// Exports: default

// Module 11353 (useChatInputFloatingBounce)
import _slicedToArray from "_slicedToArray";
import result from "result";
import TextAreaCta from "TextAreaCta";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG: closure_4, CHAT_INPUT_FLOATING_COLLAPSED_SCALE: closure_5, CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG: closure_6, CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG: closure_7 } = TextAreaCta);
let closure_8 = { code: "function useChatInputFloatingBounceTsx1(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}" };
let closure_9 = { code: "function useChatInputFloatingBounceTsx2(finished){const{runOnJS,handleExitFinished}=this.__closure;if(finished===true){runOnJS(handleExitFinished)();}}" };
let closure_10 = { code: "function useChatInputFloatingBounceTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx");

export default function useChatInputFloatingBounce(visible) {
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
  let sharedValue1;
  let c5;
  let closure_6;
  let obj = visible(num[3]);
  let num2 = 0;
  if (initiallyVisible) {
    num2 = 1;
  }
  sharedValue = obj.useSharedValue(num2);
  let num3 = 1;
  if (!initiallyVisible) {
    num3 = c5;
  }
  sharedValue1 = visible(num[3]).useSharedValue(num3);
  const tmp3 = onExitComplete(sharedValue.useState(initiallyVisible), 2);
  c5 = tmp4;
  const tmp5 = onExitComplete(sharedValue.useState(visible), 2);
  if (visible !== tmp5[0]) {
    tmp5[1](visible);
    if (!visible) {
      tmp4(false);
    }
  }
  let tmp8 = visible;
  if (!flag) {
    let first = visible;
    if (visible) {
      first = tmp3[0];
    }
    tmp8 = first;
  }
  closure_6 = sharedValue.useRef(onExitComplete);
  let items = [onExitComplete];
  const effect = sharedValue.useEffect(() => {
    closure_6.current = onExitComplete;
  }, items);
  const items1 = [visible, num, sharedValue, sharedValue1];
  const effect1 = sharedValue.useEffect(() => {
    function handleExitFinished() {
      let currentResult;
      if (null != outer1_6.current) {
        currentResult = outer1_6.current();
      }
      return currentResult;
    }
    if (handleExitFinished) {
      const obj4 = visible(num[4]);
      class I {
        constructor(arg0) {
          if (true === arg0) {
            tmp = visible;
            tmp2 = c1;
            num = 3;
            obj = visible(c1[3]);
            tmp3 = outer1_5;
            tmp4 = obj.runOnJS(outer1_5)(true);
          }
          return;
        }
      }
      let obj = { runOnJS: visible(num[3]).runOnJS, setEnterFinished: c5 };
      I.__closure = obj;
      I.__workletHash = 9490441890617;
      I.__initData = outer1_8;
      const withTimingResult = obj4.withTiming(1, closure_6, "respect-motion-settings", I);
      let withDelayResult = withTimingResult;
      if (num > 0) {
        withDelayResult = visible(num[3]).withDelay(num, withTimingResult);
        const obj6 = visible(num[3]);
      }
      const result = sharedValue.set(withDelayResult);
      const withSpringResult = visible(num[5]).withSpring(1, sharedValue1, "respect-motion-settings");
      let withDelayResult1 = withSpringResult;
      if (num > 0) {
        withDelayResult1 = visible(num[3]).withDelay(num, withSpringResult);
        const obj8 = visible(num[3]);
      }
      const result1 = sharedValue1.set(withDelayResult1);
      const obj7 = visible(num[5]);
    } else {
      class I {
        constructor(arg0) {
          if (true === arg0) {
            tmp = visible;
            tmp2 = c1;
            num = 3;
            obj = visible(c1[3]);
            tmp3 = outer1_5;
            tmp4 = obj.runOnJS(outer1_5)(true);
          }
          return;
        }
      }
      const fn = function f(arg0) {
        if (true === arg0) {
          visible(3[3]).runOnJS(handleExitFinished)();
          const obj = visible(3[3]);
        }
      };
      obj = { runOnJS: visible(4[3]).runOnJS, handleExitFinished };
      fn.__closure = obj;
      fn.__workletHash = 6186469155404;
      fn.__initData = outer1_9;
      const result2 = sharedValue.set(obj.withTiming(0, outer1_7, "respect-motion-settings", fn));
      const result3 = sharedValue1.set(visible(4[4]).withTiming(c5, outer1_7, "respect-motion-settings"));
      const obj3 = visible(4[4]);
    }
  }, items1);
  obj = {};
  const obj2 = visible(num[3]);
  class J {
    constructor() {
      obj = { opacity: c3.get() };
      obj = { scale: useSharedValue.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  J.__closure = { opacity: sharedValue, scale: sharedValue1 };
  J.__workletHash = 8631256891065;
  J.__initData = closure_10;
  obj.animatedStyle = visible(num[3]).useAnimatedStyle(J);
  obj.isInteractive = tmp8;
  return obj;
};
