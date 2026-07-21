// Module ID: 11342
// Function ID: 88176
// Name: useChatInputFloatingBounce
// Dependencies: []
// Exports: default

// Module 11342 (useChatInputFloatingBounce)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG: closure_4, CHAT_INPUT_FLOATING_COLLAPSED_SCALE: closure_5, CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG: closure_6, CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = { code: "function useChatInputFloatingBounceTsx1(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}" };
let closure_9 = { code: "function useChatInputFloatingBounceTsx2(finished){const{runOnJS,handleExitFinished}=this.__closure;if(finished===true){runOnJS(handleExitFinished)();}}" };
let closure_10 = { code: "function useChatInputFloatingBounceTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx");

export default function useChatInputFloatingBounce(visible) {
  visible = visible.visible;
  const arg1 = visible;
  let initiallyVisible = visible.initiallyVisible;
  if (initiallyVisible === undefined) {
    initiallyVisible = visible;
  }
  let num = visible.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  const dependencyMap = num;
  const onExitComplete = visible.onExitComplete;
  const callback = onExitComplete;
  let flag = visible.interactiveDuringEnter;
  if (flag === undefined) {
    flag = false;
  }
  let React;
  let sharedValue1;
  let tmp4;
  let closure_6;
  let obj = arg1(dependencyMap[3]);
  let num2 = 0;
  if (initiallyVisible) {
    num2 = 1;
  }
  const sharedValue = obj.useSharedValue(num2);
  React = sharedValue;
  let num3 = 1;
  if (!initiallyVisible) {
    num3 = tmp4;
  }
  sharedValue1 = arg1(dependencyMap[3]).useSharedValue(num3);
  const tmp3 = callback(React.useState(initiallyVisible), 2);
  tmp4 = tmp3[1];
  const tmp5 = callback(React.useState(visible), 2);
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
  closure_6 = React.useRef(onExitComplete);
  const items = [onExitComplete];
  const effect = React.useEffect(() => {
    closure_6.current = onExitComplete;
  }, items);
  const items1 = [visible, num, sharedValue, sharedValue1];
  const effect1 = React.useEffect(() => {
    function handleExitFinished(arg0) {
      let currentResult;
      if (null != ref.current) {
        currentResult = ref.current();
      }
      return currentResult;
    }
    const visible = handleExitFinished;
    if (visible) {
      const obj4 = visible(num[4]);
      class I {
        constructor(arg0) {
          if (true === arg0) {
            tmp = handleExitFinished;
            tmp2 = closure_1;
            num = 3;
            obj = handleExitFinished(closure_1[3]);
            tmp3 = closure_5;
            tmp4 = obj.runOnJS(closure_5)(true);
          }
          return;
        }
      }
      let obj = { runOnJS: visible(num[3]).runOnJS, setEnterFinished: tmp4 };
      I.__closure = obj;
      I.__workletHash = 9490441890617;
      I.__initData = closure_8;
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
            tmp = handleExitFinished;
            tmp2 = closure_1;
            num = 3;
            obj = handleExitFinished(closure_1[3]);
            tmp3 = closure_5;
            tmp4 = obj.runOnJS(closure_5)(true);
          }
          return;
        }
      }
      const fn = function f(arg0) {
        if (true === arg0) {
          handleExitFinished(closure_1[3]).runOnJS(handleExitFinished)();
          const obj = handleExitFinished(closure_1[3]);
        }
      };
      obj = { runOnJS: visible(4[3]).runOnJS, handleExitFinished };
      fn.__closure = obj;
      fn.__workletHash = 6186469155404;
      fn.__initData = closure_9;
      const result2 = sharedValue.set(obj.withTiming(0, closure_7, "respect-motion-settings", fn));
      const result3 = sharedValue1.set(visible(4[4]).withTiming(tmp4, closure_7, "respect-motion-settings"));
      const obj3 = visible(4[4]);
    }
  }, items1);
  obj = {};
  const obj2 = arg1(dependencyMap[3]);
  class J {
    constructor() {
      obj = { opacity: closure_3.get() };
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
  obj.animatedStyle = arg1(dependencyMap[3]).useAnimatedStyle(J);
  obj.isInteractive = tmp8;
  return obj;
};
