// Module ID: 5732
// Function ID: 5733
// Name: react
// Dependencies: [19, 5512]
// Exports: useBottomSheetContentSizeSetter

// Module 5732 (react)
import react from "react" /* 19 */;
import _mod5512 from "module_5512" /* 5512 */;

const useCallback = react.useCallback;

export function useBottomSheetContentSizeSetter() {
  let items;
  const obj = _mod5512;
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
