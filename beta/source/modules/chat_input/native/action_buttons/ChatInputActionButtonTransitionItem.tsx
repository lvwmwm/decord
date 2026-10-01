// Module ID: 11728
// Function ID: 11729
// Name: ChatInputActionButtonTransitionItem
// Dependencies: [19, 17, 11444, 21, 4540, 4566, 4837, 11729, 2]
// Exports: default, interactivityProps

// Module 11728 (ChatInputActionButtonTransitionItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 4540 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 11729 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set, set2;

function FadeTransitionItem(state) {
  let items1;
  let str2;
  state = state.state;
  const cleanup = state.cleanup;
  let sharedValue;
  const tmp2 = sharedValue;
  const children = state.children;
  const tmp = state;
  const tmp3 = state === state(sharedValue[4]).TransitionStates.YEETED;
  const tmp4 = state(sharedValue[5]);
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
          const obj = state(sharedValue[5]);
          obj.runOnJS(cleanup)();
        }
      };
      const tmpResult = timing;
      let obj = { runOnJS: tmp(4566).runOnJS, cleanup };
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
  }, items);
  let tmpResult = tmp(tmp2[5]);
  class T {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  T.__closure = { visible: sharedValue };
  T.__workletHash = 13386937038500;
  T.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  let obj = { style: items1, children };
  items1 = [closure_6.transitionItem, animatedStyle];
  let str = "none";
  const View = cleanup(tmp2[5]).View;
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
}
function BounceTransitionItem(state) {
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
}
const StyleSheet = react_native.StyleSheet;
const CHAT_INPUT_TIMING_CONFIG = ChatInputConstants.CHAT_INPUT_TIMING_CONFIG;
const jsx = Fragment.jsx;
const styles = StyleSheet.create({ transitionItem: { position: "absolute" }, transitionItemCentered: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" } });
let closure_7 = { code: "function ChatInputActionButtonTransitionItemTsx1(finished){const{runOnJS,cleanup}=this.__closure;if(finished===true){runOnJS(cleanup)();}}" };
const __initData = { code: "function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{opacity:visible.get()};}" };
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx");

export default function ChatInputActionButtonTransitionItem(bounceEnterDelayMs) {
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
    tmpResult = tmp(BounceTransitionItem, obj2);
  } else {
    const obj = { state, cleanup, children };
    tmpResult = tmp(FadeTransitionItem, obj);
  }
  return tmpResult;
};
export const interactivityProps = function interactivityProps(isInteractive) {
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
};
