// Module ID: 1731
// Function ID: 19396
// Name: useAnimatedPropsJS
// Dependencies: []

// Module 1731 (useAnimatedPropsJS)
const _module = require(dependencyMap[1]);
if (_module.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return require(dependencyMap[0]).useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = require(dependencyMap[0]).useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
