// Module ID: 5846
// Function ID: 5847
// Name: useBottomSheetContentSizeSetter
// Dependencies: [19, 5637]
// Exports: useBottomSheetContentSizeSetter

// Module 5846 (useBottomSheetContentSizeSetter)
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
