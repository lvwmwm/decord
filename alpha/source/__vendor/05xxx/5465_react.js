// Module ID: 5465
// Function ID: 5466
// Name: react
// Dependencies: [19, 5256]
// Exports: useBottomSheetContentSizeSetter

// Module 5465 (react)
import react from "react" /* 19 */;
import _mod5256 from "module_5256" /* 5256 */;

const useCallback = react.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod5256;
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
