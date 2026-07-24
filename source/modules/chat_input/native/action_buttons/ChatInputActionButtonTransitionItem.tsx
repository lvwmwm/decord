// Module ID: 11381
// Function ID: 88483
// Name: interactivityProps
// Dependencies: [31, 27, 11132, 33, 4476, 3991, 4131, 11382, 2]
// Exports: default

// Module 11381 (interactivityProps)
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import { CHAT_INPUT_TIMING_CONFIG } from "TextAreaCta";
import { jsx } from "jsxProd";

const require = arg1;
function interactivityProps(isInteractive) {
  const obj = {};
  let str = "none";
  if (isInteractive) {
    str = "auto";
  }
  obj.pointerEvents = str;
  obj.accessibilityElementsHidden = !isInteractive;
  let str2 = "no-hide-descendants";
  if (isInteractive) {
    str2 = "auto";
  }
  obj.importantForAccessibility = str2;
  return obj;
}
function FadeTransitionItem(state) {
  state = state.state;
  const cleanup = state.cleanup;
  let sharedValue;
  const tmp = state === state(sharedValue[4]).TransitionStates.YEETED;
  let obj = state(sharedValue[5]);
  let num = 1;
  if (tmp) {
    num = 0;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [state, sharedValue, cleanup];
  const effect = React.useEffect(() => {
    if (state === state(sharedValue[4]).TransitionStates.YEETED) {
      const obj2 = state(sharedValue[6]);
      const fn = function t(arg0) {
        if (true === arg0) {
          state(sharedValue[5]).runOnJS(outer1_1)();
          const obj = state(sharedValue[5]);
        }
      };
      let obj = { runOnJS: state(sharedValue[5]).runOnJS, cleanup };
      fn.__closure = obj;
      fn.__workletHash = 10965161938750;
      fn.__initData = outer1_7;
      const result = sharedValue.set(obj2.withTiming(0, outer1_4, "respect-motion-settings", fn));
    } else {
      obj = state(sharedValue[6]);
      const result1 = sharedValue.set(obj.withTiming(1, outer1_4, "respect-motion-settings"));
    }
  }, items);
  class T {
    constructor() {
      obj = { opacity: c2.get() };
      return obj;
    }
  }
  T.__closure = { visible: sharedValue };
  T.__workletHash = 13386937038500;
  T.__initData = closure_8;
  const animatedStyle = state(sharedValue[5]).useAnimatedStyle(T);
  obj = { style: items1 };
  items1 = [closure_6.transitionItem, animatedStyle];
  const merged = Object.assign(interactivityProps(!tmp));
  obj["children"] = state.children;
  return jsx(cleanup(sharedValue[5]).View, { style: items1 });
}
function BounceTransitionItem(state) {
  let animatedStyle;
  let bounceEnterDelayMs;
  let children;
  let cleanup;
  let isInteractive;
  state = state.state;
  ({ cleanup, bounceEnterDelayMs, children } = state);
  let obj = { visible: state !== require(4476) /* _createForOfIteratorHelperLoose */.TransitionStates.YEETED, initiallyVisible: state !== require(4476) /* _createForOfIteratorHelperLoose */.TransitionStates.ENTERED, enterDelayMs: bounceEnterDelayMs, onExitComplete: cleanup, interactiveDuringEnter: true };
  const tmp = importDefault(11382);
  ({ animatedStyle, isInteractive } = importDefault(11382)(obj));
  obj = { style: items };
  items = [closure_6.transitionItemCentered, animatedStyle];
  const merged = Object.assign(interactivityProps(isInteractive));
  obj["children"] = children;
  return jsx(importDefault(3991).View, { style: items });
}
const styles = StyleSheet.create({ transitionItem: { position: "absolute" }, transitionItemCentered: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" } });
let closure_7 = { code: "function ChatInputActionButtonTransitionItemTsx1(finished){const{runOnJS,cleanup}=this.__closure;if(finished===true){runOnJS(cleanup)();}}" };
let closure_8 = { code: "function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{opacity:visible.get()};}" };
let result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx");

export default function ChatInputActionButtonTransitionItem(bounceEnterDelayMs) {
  let children;
  let cleanup;
  let state;
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
    let obj = { state, cleanup, bounceEnterDelayMs: num, children };
    let tmpResult = tmp(BounceTransitionItem, obj);
  } else {
    obj = { state, cleanup, children };
    tmpResult = tmp(FadeTransitionItem, obj);
  }
  return tmpResult;
};
export { interactivityProps };
