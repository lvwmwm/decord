// Module ID: 1807
// Function ID: 1808
// Dependencies: [1808, 1661]

// Module 1807
import _mod1808 from "module_1808" /* 1808 */;
import module_1661 from "module_1661" /* 1661 */;

let useAnimatedPropsJS;
if (module_1661.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1808;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1808.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
