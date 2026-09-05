// Module ID: 1785
// Function ID: 1786
// Name: useAnimatedPropsJS
// Dependencies: [1786, 1639]

// Module 1785 (useAnimatedPropsJS)
import checkSharedValueUsage from "checkSharedValueUsage" /* 1786 */;
import isJest from "isJest" /* 1639 */;

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
