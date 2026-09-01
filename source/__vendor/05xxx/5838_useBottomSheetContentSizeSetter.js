// Module ID: 5838
// Function ID: 5839
// Name: useBottomSheetContentSizeSetter
// Dependencies: [19, 5629]
// Exports: useBottomSheetContentSizeSetter

// Module 5838 (useBottomSheetContentSizeSetter)
import noop from "noop" /* 19 */;

noop.useCallback;

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
