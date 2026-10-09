// Module ID: 6519
// Function ID: 6520
// Name: react
// Dependencies: [19, 6310]
// Exports: useBottomSheetContentSizeSetter

// Module 6519 (react)
import react from "react" /* 19 */;
import _mod6310 from "module_6310" /* 6310 */;

const useCallback = react.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod6310;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const obj2 = {
    setContentSize: useCallback((arg0) => {
      const tmp = enableDynamicSizing;
      if (tmp) {
        const result = animatedContentHeight.set(arg0);
      }
    }, items)
  };
  items = [enableDynamicSizing, animatedContentHeight];
  return obj2;
};
