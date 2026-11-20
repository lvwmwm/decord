// Module ID: 5251
// Function ID: 5252
// Name: react
// Dependencies: [19, 5031]
// Exports: useBottomSheetContentSizeSetter

// Module 5251 (react)
import react from "react" /* 19 */;
import _mod5031 from "module_5031" /* 5031 */;

const useCallback = react.useCallback;

export function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod5031;
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
