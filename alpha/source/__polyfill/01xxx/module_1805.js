// Module ID: 1805
// Function ID: 1806
// Dependencies: [1806, 1659]

// Module 1805
import _mod1806 from "module_1806" /* 1806 */;
import module_1659 from "module_1659" /* 1659 */;

let useAnimatedPropsJS;
if (module_1659.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1806;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1806.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
