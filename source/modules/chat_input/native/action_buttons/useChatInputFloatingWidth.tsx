// Module ID: 11355
// Function ID: 88327
// Name: useChatInputFloatingWidth
// Dependencies: []
// Exports: default

// Module 11355 (useChatInputFloatingWidth)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG;
let closure_4 = { code: "function useChatInputFloatingWidthTsx1(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default function useChatInputFloatingWidth(expanded) {
  expanded = expanded.expanded;
  const arg1 = expanded;
  const collapsedWidth = expanded.collapsedWidth;
  const dependencyMap = collapsedWidth;
  const expandedWidth = expanded.expandedWidth;
  const React = expandedWidth;
  let num = expanded.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  let closure_3 = num;
  let closure_4;
  let obj = arg1(dependencyMap[2]);
  let num2 = 0;
  if (expanded) {
    num2 = 1;
  }
  const sharedValue = obj.useSharedValue(num2);
  closure_4 = sharedValue;
  const items = [expanded, num, sharedValue];
  const effect = React.useEffect(() => {
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
  fn.__initData = closure_4;
  obj.animatedStyle = arg1(dependencyMap[2]).useAnimatedStyle(fn);
  return obj;
};
