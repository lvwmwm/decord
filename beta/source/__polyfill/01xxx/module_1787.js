// Module ID: 1787
// Function ID: 1788
// Dependencies: [1788, 1641]

// Module 1787
import _mod1788 from "module_1788" /* 1788 */;
import module_1641 from "module_1641" /* 1641 */;

let useAnimatedPropsJS;
if (module_1641.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1788;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1788.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
