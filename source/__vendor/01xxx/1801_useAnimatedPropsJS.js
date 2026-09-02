// Module ID: 1801
// Function ID: 1802
// Name: useAnimatedPropsJS
// Dependencies: [1802, 1655]

// Module 1801 (useAnimatedPropsJS)
import checkSharedValueUsage from "checkSharedValueUsage" /* 1802 */;
import isJest from "isJest" /* 1655 */;

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
