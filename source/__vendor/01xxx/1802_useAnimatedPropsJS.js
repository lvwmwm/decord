// Module ID: 1802
// Function ID: 1803
// Name: useAnimatedPropsJS
// Dependencies: [1803, 1656]

// Module 1802 (useAnimatedPropsJS)
import checkSharedValueUsage from "checkSharedValueUsage" /* 1803 */;
import isJest from "isJest" /* 1656 */;

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
