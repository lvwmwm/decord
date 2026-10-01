// Module ID: 11741
// Function ID: 11742
// Name: useChatInputFloatingWidth
// Dependencies: [19, 11444, 4566, 4837, 2]
// Exports: default

// Module 11741 (useChatInputFloatingWidth)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set, set2;

let closure_3 = ChatInputConstants.CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG;
let closure_4 = { code: "function useChatInputFloatingWidthTsx1(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}" };
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default function useChatInputFloatingWidth(expanded) {
  let fn;
  let tmpResult;
  expanded = expanded.expanded;
  const collapsedWidth = expanded.collapsedWidth;
  const expandedWidth = expanded.expandedWidth;
  let num = expanded.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  const tmp2 = collapsedWidth;
  let num2 = 0;
  const useSharedValue = expanded(collapsedWidth[2]).useSharedValue;
  const tmp = expanded;
  const tmp3 = expanded(collapsedWidth[2]);
  if (expanded) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  const items = [expanded, num, sharedValue];
  const effect = expandedWidth.useEffect(() => {
    if (expanded) {
      if (0 > 0) {
        set2 = sharedValue.set;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const obj = timing;
        set2(withDelay(tmp2, obj.withTiming(1, closure_3, "respect-motion-settings")));
      }
    }
    let num2 = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (expanded) {
      num2 = 1;
    }
    const result = set(withTiming(num2, closure_3, "respect-motion-settings"));
  }, items);
  let obj = { animatedStyle: tmpResult.useAnimatedStyle(fn) };
  fn = function p() {
    let diff;
    const obj = { width: collapsedWidth + diff * sharedValue.get() };
    diff = expandedWidth - collapsedWidth;
    return obj;
  };
  fn.__closure = { collapsedWidth, expandedWidth, progress: sharedValue };
  fn.__workletHash = 2289574047387;
  fn.__initData = sharedValue;
  tmpResult = tmp(tmp2[2]);
  return obj;
};
