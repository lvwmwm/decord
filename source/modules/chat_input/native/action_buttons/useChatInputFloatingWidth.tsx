// Module ID: 11394
// Function ID: 88617
// Name: useChatInputFloatingWidth
// Dependencies: [31, 11132, 3991, 4131, 2]
// Exports: default

// Module 11394 (useChatInputFloatingWidth)
import result from "result";
import { CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG as closure_3 } from "TextAreaCta";

const require = arg1;
let closure_4 = { code: "function useChatInputFloatingWidthTsx1(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}" };
let result = require("module_3991").fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default function useChatInputFloatingWidth(expanded) {
  expanded = expanded.expanded;
  const collapsedWidth = expanded.collapsedWidth;
  const expandedWidth = expanded.expandedWidth;
  let num = expanded.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  let obj = expanded(collapsedWidth[2]);
  let num2 = 0;
  if (expanded) {
    num2 = 1;
  }
  sharedValue = obj.useSharedValue(num2);
  const items = [expanded, num, sharedValue];
  const effect = expandedWidth.useEffect(() => {
    if (expanded) {
      if (0 > 0) {
        const obj2 = expanded(collapsedWidth[2]);
        const result = sharedValue.set(obj2.withDelay(num, expanded(collapsedWidth[3]).withTiming(1, num, "respect-motion-settings")));
        const obj3 = expanded(collapsedWidth[3]);
      }
    }
    let num2 = 0;
    if (expanded) {
      num2 = 1;
    }
    const result1 = sharedValue.set(expanded(collapsedWidth[3]).withTiming(num2, num, "respect-motion-settings"));
  }, items);
  obj = {};
  const fn = function p() {
    const diff = expandedWidth - collapsedWidth;
    return { width: collapsedWidth + diff * sharedValue.get() };
  };
  fn.__closure = { collapsedWidth, expandedWidth, progress: sharedValue };
  fn.__workletHash = 2289574047387;
  fn.__initData = sharedValue;
  obj.animatedStyle = expanded(collapsedWidth[2]).useAnimatedStyle(fn);
  return obj;
};
