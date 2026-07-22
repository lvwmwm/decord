// Module ID: 5340
// Function ID: 45917
// Name: useBottomSheetContentSizeSetter
// Dependencies: []
// Exports: useBottomSheetContentSizeSetter

// Module 5340 (useBottomSheetContentSizeSetter)
require(dependencyMap[0]).useCallback;

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
