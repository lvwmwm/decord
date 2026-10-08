// Module ID: 1804
// Function ID: 1805
// Dependencies: [1805, 1658]

// Module 1804
import _mod1805 from "module_1805" /* 1805 */;
import module_1658 from "module_1658" /* 1658 */;

let useAnimatedPropsJS;
if (module_1658.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1805;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1805.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
