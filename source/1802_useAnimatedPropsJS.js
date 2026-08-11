// Module ID: 1802
// Function ID: 1803
// Name: useAnimatedPropsJS
// Dependencies: [1803, 1656]

// Module 1802 (useAnimatedPropsJS)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return require(1803) /* checkSharedValueUsage */.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = require("checkSharedValueUsage").useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
