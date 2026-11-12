// Module ID: 13698
// Function ID: 13699
// Name: ChatInputActionButtonTransitionItem
// Dependencies: [19, 17, 13699, 21, 5314, 1652, 5485, 1705, 13700, 2]
// Exports: default, interactivityProps

// Module 13698 (ChatInputActionButtonTransitionItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5314 */;
import timing_timing from "timing/timing" /* 5485 */;
import ChatInputConstants from "ChatInputConstants" /* 13699 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 13700 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set, set2;

function FadeTransitionItem(state) {
  let items3;
  let str2;
  let tmp7;
  let tmp8;
  state = state.state;
  const cleanup = state.cleanup;
  let sharedValue;
  const tmp2 = sharedValue;
  const children = state.children;
  const tmp = state;
  const tmp3 = state === state(sharedValue[4]).TransitionStates.YEETED;
  let num = 1;
  const useSharedValue = state(sharedValue[5]).useSharedValue;
  const tmp4 = state(sharedValue[5]);
  if (tmp3) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  let items = [state, sharedValue, cleanup];
  const effect = react.useEffect(() => {
    let tmp12;
    let tmp13;
    let tmp14;
    if (state === native.TransitionStates.YEETED) {
      set2 = sharedValue.set;
      const items = [closure_7, , ];
      const withTiming = timing_timing.withTiming;
      const tmpResult = timing_timing;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = cleanup;
      let c0;
      let c1;
      [tmp12, tmp13, tmp14] = items;
      class ChatInputActionButtonTransitionItemTsx1 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp13, tmp14];
      ChatInputActionButtonTransitionItemTsx1.__closure = items1;
      ChatInputActionButtonTransitionItemTsx1.__workletHash = 2879120786854;
      ChatInputActionButtonTransitionItemTsx1.__initData = tmp12;
      set2(withTiming(0, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings", ChatInputActionButtonTransitionItemTsx1));
    } else {
      set = sharedValue.set;
      const tmpResult2 = timing_timing;
      const result = set(tmpResult2.withTiming(1, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings"));
    }
  }, items);
  let tmpResult = tmp(tmp2[5]);
  let items1 = [closure_8, sharedValue];
  let c0;
  [tmp7, tmp8] = items1;
  class ChatInputActionButtonTransitionItemTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp8];
  ChatInputActionButtonTransitionItemTsx2.__closure = items2;
  ChatInputActionButtonTransitionItemTsx2.__workletHash = 10652693384285;
  ChatInputActionButtonTransitionItemTsx2.__initData = tmp7;
  const animatedStyle = tmpResult.useAnimatedStyle(ChatInputActionButtonTransitionItemTsx2);
  let obj = { style: items3, children };
  items3 = [closure_6.transitionItem, animatedStyle];
  let str = "none";
  const View = cleanup(tmp2[5]).View;
  const tmp10 = jsx;
  if (!tmp3) {
    str = "auto";
  }
  const obj2 = { pointerEvents: str, accessibilityElementsHidden: !(!tmp3), importantForAccessibility: str2 };
  str2 = "no-hide-descendants";
  if (!tmp3) {
    str2 = "auto";
  }
  const merged = Object.assign(obj2);
  return tmp10(View, obj);
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
  const View = _modDef1652.View;
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
let closure_7 = { code: "(function ChatInputActionButtonTransitionItemTsx1(finished){let[scheduleOnRN,cleanup]=this.__closure;if(finished===true){scheduleOnRN(cleanup);}})" };
let closure_8 = { code: "(function ChatInputActionButtonTransitionItemTsx2(){let[visible]=this.__closure;return{opacity:visible.get()};})" };
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
export function interactivityProps(isInteractive) {
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
