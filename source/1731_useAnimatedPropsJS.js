// Module ID: 1731
// Function ID: 19403
// Name: useAnimatedPropsJS
// Dependencies: [1732, 1585]

// Module 1731 (useAnimatedPropsJS)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return require(1732) /* checkSharedValueUsage */.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = require("checkSharedValueUsage").useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
