// Module ID: 5370
// Function ID: 5371
// Name: react
// Dependencies: [19, 5150]
// Exports: useBottomSheetContentSizeSetter

// Module 5370 (react)
import react from "react" /* 19 */;
import _mod5150 from "module_5150" /* 5150 */;

const useCallback = react.useCallback;

export function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod5150;
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
