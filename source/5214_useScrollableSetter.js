// Module ID: 5214
// Function ID: 45147
// Name: useScrollableSetter
// Dependencies: [31, 5197, 5206]
// Exports: useScrollableSetter

// Module 5214 (useScrollableSetter)
import result from "result";

let closure_2;
let closure_3;
({ useCallback: closure_2, useEffect: closure_3 } = result);

export const useScrollableSetter = function useScrollableSetter(scrollableRef, closure_0, scrollableContentOffsetY, arg3, focusHook) {
  const _require = scrollableRef;
  const dependencyMap = closure_0;
  const callback = scrollableContentOffsetY;
  let closure_3 = arg3;
  if (arguments.length > 4) {
    if (undefined !== arguments[4]) {
      let tmp = arguments[4];
    }
    const bottomSheetInternal = _require(5197).useBottomSheetInternal();
    const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
    const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
    const isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
    const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
    const setScrollableRef = bottomSheetInternal.setScrollableRef;
    const removeScrollableRef = bottomSheetInternal.removeScrollableRef;
    const items = [scrollableRef, closure_0, arg3, animatedScrollableType, animatedScrollableContentOffsetY, scrollableContentOffsetY, isScrollableRefreshable, isContentHeightFixed, setScrollableRef, removeScrollableRef];
    tmp(callback(() => {
      animatedScrollableContentOffsetY.value = scrollableContentOffsetY.value;
      animatedScrollableType.value = table;
      isScrollableRefreshable.value = closure_3;
      isContentHeightFixed.value = false;
      let obj = scrollableRef(table[2]);
      const findNodeHandleResult = obj.findNodeHandle(scrollableRef.current);
      if (findNodeHandleResult) {
        obj = { id: findNodeHandleResult, node: scrollableRef };
        setScrollableRef(obj);
      } else {
        const _console = console;
        console.warn("Couldn't find the scrollable node handle id!");
      }
      return () => {
        outer1_9(outer1_0);
      };
    }, items));
  }
  tmp = closure_3;
};
