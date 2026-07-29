// Module ID: 1755
// Function ID: 1756
// Name: useAnimatedPropsJS
// Dependencies: [1756, 1609]

// Module 1755 (useAnimatedPropsJS)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return require(1756) /* checkSharedValueUsage */.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = require("checkSharedValueUsage").useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
