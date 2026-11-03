// Module ID: 13948
// Function ID: 13949
// Name: useChatInputFloatingWidth
// Dependencies: [19, 12945, 1652, 5377, 2]
// Exports: default

// Module 13948 (useChatInputFloatingWidth)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import ChatInputConstants from "ChatInputConstants" /* 12945 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set, set2;

let closure_3 = ChatInputConstants.CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG;
let closure_4 = { code: "(function useChatInputFloatingWidthTsx1(){let[collapsedWidth,expandedWidth,progress]=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};})" };
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default function useChatInputFloatingWidth(expanded) {
  let collapsedWidth;
  let expandedWidth;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  expanded = expanded.expanded;
  let num = expanded.enterDelayMs;
  ({ collapsedWidth, expandedWidth } = expanded);
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  const tmp2 = num;
  let num2 = 0;
  const useSharedValue = expanded(num[2]).useSharedValue;
  const tmp = expanded;
  const tmp3 = expanded(num[2]);
  if (expanded) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  const items = [expanded, num, sharedValue];
  const effect = sharedValue.useEffect(() => {
    if (expanded) {
      if (0 > 0) {
        set2 = sharedValue.set;
        const withDelay = _mod1652.withDelay;
        _mod1652;
        const obj = timing_timing;
        set2(withDelay(tmp2, obj.withTiming(1, closure_3, "respect-motion-settings")));
      }
    }
    let num2 = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (expanded) {
      num2 = 1;
    }
    const result = set(withTiming(num2, closure_3, "respect-motion-settings"));
  }, items);
  const items1 = [closure_4, collapsedWidth, expandedWidth, sharedValue];
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  function useChatInputFloatingWidthTsx1() {
    let diff;
    const obj = { width: c0 + diff * _undefined.get() };
    diff = c1 - c0;
    return obj;
  }
  const items2 = [tmp7, tmp8, tmp9];
  useChatInputFloatingWidthTsx1.__closure = items2;
  useChatInputFloatingWidthTsx1.__workletHash = 7676837604130;
  useChatInputFloatingWidthTsx1.__initData = tmp6;
  const tmpResult = tmp(tmp2[2]);
  let obj = { animatedStyle: tmpResult.useAnimatedStyle(useChatInputFloatingWidthTsx1) };
  return obj;
};
