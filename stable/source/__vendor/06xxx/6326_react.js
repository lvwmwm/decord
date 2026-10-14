// Module ID: 6326
// Function ID: 6327
// Name: react
// Dependencies: [19, 6117]
// Exports: useBottomSheetContentSizeSetter

// Module 6326 (react)
import react from "react" /* 19 */;
import _mod6117 from "module_6117" /* 6117 */;

const useCallback = react.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod6117;
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
