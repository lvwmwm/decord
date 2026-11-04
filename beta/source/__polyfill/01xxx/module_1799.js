// Module ID: 1799
// Function ID: 1800
// Dependencies: [1800, 1653]

// Module 1799
import _mod1800 from "module_1800" /* 1800 */;
import module_1653 from "module_1653" /* 1653 */;

let useAnimatedPropsJS;
if (module_1653.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1800;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1800.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
