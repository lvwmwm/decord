// Module ID: 6520
// Function ID: 6521
// Name: react
// Dependencies: [19, 6311]
// Exports: useBottomSheetContentSizeSetter

// Module 6520 (react)
import react from "react" /* 19 */;
import _mod6311 from "module_6311" /* 6311 */;

const useCallback = react.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod6311;
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
