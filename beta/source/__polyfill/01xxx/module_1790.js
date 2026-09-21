// Module ID: 1790
// Function ID: 1791
// Dependencies: [1791, 1644]

// Module 1790
import _mod1791 from "module_1791" /* 1791 */;
import module_1644 from "module_1644" /* 1644 */;

if (module_1644.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1791.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1791.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
