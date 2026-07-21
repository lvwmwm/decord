// Module ID: 5119
// Function ID: 43547
// Name: useBottomSheetContentSizeSetter
// Dependencies: [0, 0]
// Exports: useBottomSheetContentSizeSetter

// Module 5119 (useBottomSheetContentSizeSetter)
require("result").useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let obj = require(dependencyMap[1]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const require = enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const dependencyMap = animatedContentHeight;
  obj = {
    setContentSize: useCallback((arg0) => {
      if (enableDynamicSizing) {
        const result = animatedContentHeight.set(arg0);
      }
    }, items)
  };
  const items = [enableDynamicSizing, animatedContentHeight];
  return obj;
};
