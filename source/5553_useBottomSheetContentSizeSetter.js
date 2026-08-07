// Module ID: 5553
// Function ID: 5554
// Name: useBottomSheetContentSizeSetter
// Dependencies: [19, 5403]
// Exports: useBottomSheetContentSizeSetter

// Module 5553 (useBottomSheetContentSizeSetter)
require("noop").useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let obj = enableDynamicSizing(animatedContentHeight[1]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  obj = {
    setContentSize: useCallback((arg0) => {
      if (enableDynamicSizing) {
        const result = animatedContentHeight.set(arg0);
      }
    }, items)
  };
  items = [enableDynamicSizing, animatedContentHeight];
  return obj;
};
