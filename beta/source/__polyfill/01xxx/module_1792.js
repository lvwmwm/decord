// Module ID: 1792
// Function ID: 1793
// Dependencies: [1793, 1646]

// Module 1792
import _mod1793 from "module_1793" /* 1793 */;
import module_1646 from "module_1646" /* 1646 */;

let useAnimatedPropsJS;
if (module_1646.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1793;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1793.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
