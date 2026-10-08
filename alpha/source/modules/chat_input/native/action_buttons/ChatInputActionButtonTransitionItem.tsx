// Module ID: 11962
// Function ID: 11963
// Name: ChatInputActionButtonTransitionItem
// Dependencies: [19, 17, 11652, 21, 558, 576, 4787, 4810, 5091, 11963, 2]
// Exports: interactivityProps

// Module 11962 (ChatInputActionButtonTransitionItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 4787 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import ChatInputConstants from "ChatInputConstants" /* 11652 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 11963 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set, set2;

const StyleSheet = react_native.StyleSheet;
const CHAT_INPUT_TIMING_CONFIG = ChatInputConstants.CHAT_INPUT_TIMING_CONFIG;
const jsx = Fragment.jsx;
const styles = StyleSheet.create({ transitionItem: { position: "absolute" }, transitionItemCentered: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" } });
let closure_7 = { code: "function ChatInputActionButtonTransitionItemTsx1(finished){const{runOnJS,cleanup}=this.__closure;if(finished===true){runOnJS(cleanup)();}}" };
const __initData = { code: "function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{opacity:visible.get()};}" };
let closure_9 = { code: "function ChatInputActionButtonTransitionItemTsx3(finished){const{runOnJS,cleanup}=this.__closure;if(finished===true){runOnJS(cleanup)();}}" };
const __initData2 = { code: "function ChatInputActionButtonTransitionItemTsx4(){const{visible}=this.__closure;return{opacity:visible.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function FadeTransitionItem(state) {
  let sharedValue;
  let str2;
  const tmp2 = sharedValue;
  const tmp = state;
  let obj = state(sharedValue[5]);
  const cResult = obj.c(13);
  state = state.state;
  const cleanup = state.cleanup;
  const children = state.children;
  const tmp4 = state === state(sharedValue[6]).TransitionStates.YEETED;
  let num = 1;
  const useSharedValue = state(sharedValue[7]).useSharedValue;
  state(sharedValue[7]);
  if (tmp4) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  if (cResult[0] === cleanup) {
    if (cResult[1] === state) {
      let tmp7;
      let tmp8;
      let tmp13;
      let tmp16;
      if (cResult[2] === sharedValue) {
        tmp7 = cResult[3];
        tmp8 = cResult[4];
      }
      const effect = react.useEffect(tmp7, tmp8);
      let tmpResult = tmp(tmp2[7]);
      class I {
        constructor() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        }
      }
      const obj2 = { visible: sharedValue };
      I.__closure = obj2;
      I.__workletHash = 13386937038500;
      I.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(I);
      if (cResult[5] !== animatedStyle) {
        const items = [closure_6.transitionItem, animatedStyle];
        class I {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        cResult[5] = animatedStyle;
        cResult[6] = items;
        tmp13 = items;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] !== !tmp4) {
        let str = "none";
        if (!tmp4) {
          str = "auto";
        }
        const obj3 = { pointerEvents: str, accessibilityElementsHidden: null, importantForAccessibility: str2 };
        class I {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        str2 = "no-hide-descendants";
        if (!tmp4) {
          str2 = "auto";
        }
        cResult[7] = !tmp4;
        cResult[8] = obj3;
        tmp16 = obj3;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === children) {
        if (cResult[10] === tmp13) {
          let tmp17;
          if (cResult[11] === tmp16) {
            tmp17 = cResult[12];
          }
          return tmp17;
        }
      }
      const View = cleanup(tmp2[7]).View;
      const merged = Object.assign(tmp16);
      const tmp23 = <View style={tmp13}>{children}</View>;
      cResult[9] = children;
      cResult[10] = tmp13;
      cResult[11] = tmp16;
      cResult[12] = tmp23;
      tmp17 = tmp23;
    }
  }
  let fn = function p() {
    if (state === native.TransitionStates.YEETED) {
      set2 = sharedValue.set;
      const fn = function t(arg0) {
        if (true === arg0) {
          const obj = state(sharedValue[7]);
          obj.runOnJS(cleanup)();
        }
      };
      const tmpResult = timing;
      let obj = { runOnJS: tmp(4810).runOnJS, cleanup };
      const withTiming = tmpResult.withTiming;
      fn.__closure = obj;
      fn.__workletHash = 10965161938750;
      fn.__initData = __initData;
      set2(withTiming(0, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings", fn));
    } else {
      set = sharedValue.set;
      const tmpResult2 = timing;
      const result = set(tmpResult2.withTiming(1, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings"));
    }
  };
  const items1 = [state, sharedValue, cleanup];
  cResult[0] = cleanup;
  cResult[1] = state;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function FadeTransitionItem(state) {
  let items1;
  let str2;
  state = state.state;
  const cleanup = state.cleanup;
  let sharedValue;
  const tmp2 = sharedValue;
  const children = state.children;
  const tmp = state;
  const tmp3 = state === state(sharedValue[6]).TransitionStates.YEETED;
  const tmp4 = state(sharedValue[7]);
  let num = 1;
  const useSharedValue = tmp4.useSharedValue;
  if (tmp3) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const items = [state, sharedValue, cleanup];
  const effect = react.useEffect(() => {
    if (state === native.TransitionStates.YEETED) {
      set2 = sharedValue.set;
      const fn = function t(arg0) {
        if (true === arg0) {
          const obj = state(sharedValue[7]);
          obj.runOnJS(cleanup)();
        }
      };
      const tmpResult = timing;
      let obj = { runOnJS: tmp(4810).runOnJS, cleanup };
      const withTiming = tmpResult.withTiming;
      fn.__closure = obj;
      fn.__workletHash = 12574891324796;
      fn.__initData = __initData;
      set2(withTiming(0, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings", fn));
    } else {
      set = sharedValue.set;
      const tmpResult2 = timing;
      const result = set(tmpResult2.withTiming(1, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings"));
    }
  }, items);
  let tmpResult = tmp(tmp2[7]);
  class T {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  T.__closure = { visible: sharedValue };
  T.__workletHash = 3550175919586;
  T.__initData = __initData2;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  let obj = { style: items1, children };
  items1 = [closure_6.transitionItem, animatedStyle];
  let str = "none";
  const View = cleanup(tmp2[7]).View;
  const tmp8 = jsx;
  if (!tmp3) {
    str = "auto";
  }
  const obj2 = { pointerEvents: str, accessibilityElementsHidden: !(!tmp3), importantForAccessibility: str2 };
  str2 = "no-hide-descendants";
  if (!tmp3) {
    str2 = "auto";
  }
  const merged = Object.assign(obj2);
  return tmp8(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function BounceTransitionItem(arg0) {
  let animatedStyle;
  let bounceEnterDelayMs;
  let children;
  let cleanup;
  let isInteractive;
  let state;
  let str2;
  const obj = react2;
  const cResult = obj.c(13);
  ({ state, cleanup, bounceEnterDelayMs, children } = arg0);
  const ENTERED = native.TransitionStates.ENTERED;
  const tmp3 = state !== native.TransitionStates.YEETED;
  if (cResult[0] === bounceEnterDelayMs) {
    if (cResult[1] === cleanup) {
      if (cResult[2] === tmp3) {
        let tmp5;
        let tmp8;
        let tmp10;
        if (cResult[3] === state !== ENTERED) {
          tmp5 = cResult[4];
        }
        ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(tmp5));
        useChatInputFloatingBounceDefault(tmp5);
        const tmp6 = importDefault;
        if (cResult[5] !== animatedStyle) {
          const items = [closure_6.transitionItemCentered, animatedStyle];
          cResult[5] = animatedStyle;
          cResult[6] = items;
          tmp8 = items;
        } else {
          tmp8 = cResult[6];
        }
        if (cResult[7] !== isInteractive) {
          let str = "none";
          if (isInteractive) {
            str = "auto";
          }
          const obj2 = { pointerEvents: str, accessibilityElementsHidden: !isInteractive, importantForAccessibility: str2 };
          str2 = "no-hide-descendants";
          if (isInteractive) {
            str2 = "auto";
          }
          cResult[7] = isInteractive;
          cResult[8] = obj2;
          tmp10 = obj2;
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] === children) {
          if (cResult[10] === tmp8) {
            let tmp11;
            if (cResult[11] === tmp10) {
              tmp11 = cResult[12];
            }
            return tmp11;
          }
        }
        const View = tmp6(4810).View;
        const merged = Object.assign(tmp10);
        const tmp16 = <View style={tmp8}>{children}</View>;
        cResult[9] = children;
        cResult[10] = tmp8;
        cResult[11] = tmp10;
        cResult[12] = tmp16;
        tmp11 = tmp16;
      }
    }
  }
  const obj4 = { visible: tmp3, initiallyVisible: state !== ENTERED, enterDelayMs: bounceEnterDelayMs, onExitComplete: cleanup, interactiveDuringEnter: true };
  cResult[0] = bounceEnterDelayMs;
  cResult[1] = cleanup;
  cResult[2] = tmp3;
  cResult[3] = state !== ENTERED;
  cResult[4] = obj4;
  tmp5 = obj4;
}) : (function BounceTransitionItem(state) {
  let animatedStyle;
  let bounceEnterDelayMs;
  let children;
  let cleanup;
  let isInteractive;
  let items;
  let str2;
  state = state.state;
  ({ cleanup, bounceEnterDelayMs, children } = state);
  const ENTERED = native.TransitionStates.ENTERED;
  const obj = { visible: state !== native.TransitionStates.YEETED, initiallyVisible: state !== ENTERED, enterDelayMs: bounceEnterDelayMs, onExitComplete: cleanup, interactiveDuringEnter: true };
  const tmp = useChatInputFloatingBounceDefault;
  ({ isInteractive, animatedStyle } = tmp(obj));
  const obj2 = { style: items, children };
  items = [closure_6.transitionItemCentered, animatedStyle];
  let str = "none";
  tmp(obj);
  const View = ReanimatedRexportDefault.View;
  const tmp3 = jsx;
  if (isInteractive) {
    str = "auto";
  }
  const obj3 = { pointerEvents: str, accessibilityElementsHidden: !isInteractive, importantForAccessibility: str2 };
  str2 = "no-hide-descendants";
  if (isInteractive) {
    str2 = "auto";
  }
  const merged = Object.assign(obj3);
  return tmp3(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputActionButtonTransitionItem(arg0) {
  let bounceEnterDelayMs;
  let children;
  let cleanup;
  let state;
  let tmp4Result;
  let withBounce;
  const obj = react2;
  const cResult = obj.c(6);
  ({ state, cleanup, children, withBounce, bounceEnterDelayMs } = arg0);
  let num = 0;
  if (undefined !== bounceEnterDelayMs) {
    num = bounceEnterDelayMs;
  }
  if (cResult[0] === num) {
    if (cResult[1] === children) {
      if (cResult[2] === cleanup) {
        if (cResult[3] === state) {
          let tmp3;
          if (cResult[4] === (undefined !== withBounce && withBounce)) {
            tmp3 = cResult[5];
          }
          return tmp3;
        }
      }
    }
  }
  if (undefined !== withBounce && withBounce) {
    const obj2 = { state, cleanup, bounceEnterDelayMs: num, children };
    tmp4Result = tmp4(closure_12, obj2);
  } else {
    const obj3 = { state, cleanup, children };
    tmp4Result = tmp4(closure_11, obj3);
  }
  cResult[0] = num;
  cResult[1] = children;
  cResult[2] = cleanup;
  cResult[3] = state;
  cResult[4] = undefined !== withBounce && withBounce;
  cResult[5] = tmp4Result;
  tmp3 = tmp4Result;
}) : (function ChatInputActionButtonTransitionItem(bounceEnterDelayMs) {
  let children;
  let cleanup;
  let state;
  let tmpResult;
  let withBounce;
  ({ state, cleanup, children, withBounce } = bounceEnterDelayMs);
  if (withBounce === undefined) {
    withBounce = false;
  }
  let num = bounceEnterDelayMs.bounceEnterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  if (withBounce) {
    const obj2 = { state, cleanup, bounceEnterDelayMs: num, children };
    tmpResult = tmp(closure_12, obj2);
  } else {
    const obj = { state, cleanup, children };
    tmpResult = tmp(closure_11, obj);
  }
  return tmpResult;
});
function interactivityProps(isInteractive) {
  let str2;
  let str = "none";
  if (isInteractive) {
    str = "auto";
  }
  const obj = { pointerEvents: str, accessibilityElementsHidden: !isInteractive, importantForAccessibility: str2 };
  str2 = "no-hide-descendants";
  if (isInteractive) {
    str2 = "auto";
  }
  return obj;
}
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx");

export default tmp2;
export { interactivityProps };
