// Module ID: 5249
// Function ID: 5250
// Name: react
// Dependencies: [19, 5029]
// Exports: useBottomSheetContentSizeSetter

// Module 5249 (react)
import react from "react" /* 19 */;
import _mod5029 from "module_5029" /* 5029 */;

const useCallback = react.useCallback;

export function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod5029;
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
}
