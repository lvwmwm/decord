// Module ID: 1800
// Function ID: 1801
// Dependencies: [1801, 1654]

// Module 1800
import _mod1801 from "module_1801" /* 1801 */;
import module_1654 from "module_1654" /* 1654 */;

let useAnimatedPropsJS;
if (module_1654.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1801;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1801.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
