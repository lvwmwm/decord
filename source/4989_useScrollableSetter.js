// Module ID: 4989
// Function ID: 42710
// Name: useScrollableSetter
// Dependencies: []
// Exports: useScrollableSetter

// Module 4989 (useScrollableSetter)
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useEffect: closure_3 } = _module);

export const useScrollableSetter = function useScrollableSetter(scrollableRef, arg1, scrollableContentOffsetY, arg3, focusHook) {
  const require = scrollableRef;
  const dependencyMap = arg1;
  if (arguments.length > 4) {
    if (undefined !== arguments[4]) {
      let tmp = arguments[4];
    }
    const bottomSheetInternal = require(dependencyMap[1]).useBottomSheetInternal();
    const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
    const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
    const isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
    const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
    const setScrollableRef = bottomSheetInternal.setScrollableRef;
    const removeScrollableRef = bottomSheetInternal.removeScrollableRef;
    const items = [scrollableRef, arg1, arg3, animatedScrollableType, animatedScrollableContentOffsetY, scrollableContentOffsetY, isScrollableRefreshable, isContentHeightFixed, setScrollableRef, removeScrollableRef];
    tmp(scrollableContentOffsetY(() => {
      animatedScrollableContentOffsetY.value = arg2.value;
      animatedScrollableType.value = arg1;
      isScrollableRefreshable.value = arg3;
      isContentHeightFixed.value = false;
      let obj = arg0(arg1[2]);
      const findNodeHandleResult = obj.findNodeHandle(arg0.current);
      if (findNodeHandleResult) {
        obj = { id: findNodeHandleResult, node: arg0 };
        setScrollableRef(obj);
      } else {
        const _console = console;
        console.warn("Couldn't find the scrollable node handle id!");
      }
      return () => {
        callback(closure_0);
      };
    }, items));
  }
  tmp = arg3;
};
