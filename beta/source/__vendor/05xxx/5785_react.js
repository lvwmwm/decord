// Module ID: 5785
// Function ID: 5786
// Name: react
// Dependencies: [19, 5565]
// Exports: useBottomSheetContentSizeSetter

// Module 5785 (react)
import react from "react" /* 19 */;
import _mod5565 from "module_5565" /* 5565 */;

const useCallback = react.useCallback;

export function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod5565;
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
