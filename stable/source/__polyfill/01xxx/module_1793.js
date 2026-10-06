// Module ID: 1793
// Function ID: 1794
// Dependencies: [1794, 1647]

// Module 1793
import _mod1794 from "module_1794" /* 1794 */;
import module_1647 from "module_1647" /* 1647 */;

let useAnimatedPropsJS;
if (module_1647.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1794;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1794.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
