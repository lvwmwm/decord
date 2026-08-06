// Module ID: 1783
// Function ID: 1784
// Name: useAnimatedPropsJS
// Dependencies: [1784, 1637]

// Module 1783 (useAnimatedPropsJS)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return require(1784) /* checkSharedValueUsage */.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = require("checkSharedValueUsage").useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
