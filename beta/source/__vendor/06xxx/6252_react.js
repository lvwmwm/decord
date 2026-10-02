// Module ID: 6252
// Function ID: 6253
// Name: react
// Dependencies: [19, 6043]
// Exports: useBottomSheetContentSizeSetter

// Module 6252 (react)
import react from "react" /* 19 */;
import _mod6043 from "module_6043" /* 6043 */;

const useCallback = react.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod6043;
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
