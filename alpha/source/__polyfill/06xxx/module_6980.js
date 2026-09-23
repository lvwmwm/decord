// Module ID: 6980
// Function ID: 6981
// Dependencies: [19, 6963, 6972]
// Exports: useScrollableSetter

// Module 6980
import normalizeSnapPoint from "normalizeSnapPoint" /* 6972 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useCallback: c2, useEffect: c3 } = noop);

export const useScrollableSetter = (arg0, value, arg2, value3) => {
  _require = arg0;
  dependencyMap = value;
  value2 = arg2;
  let tmp = arg4;
  if (arg4 === undefined) {
    tmp = value3;
  }
  const bottomSheetInternal = require("module_6963").useBottomSheetInternal();
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const setScrollableRef = bottomSheetInternal.setScrollableRef;
  const removeScrollableRef = bottomSheetInternal.removeScrollableRef;
  const items = [arg0, value, value3, animatedScrollableType, animatedScrollableContentOffsetY, arg2, isScrollableRefreshable, isContentHeightFixed, setScrollableRef, removeScrollableRef];
  tmp(value2(() => {
    animatedScrollableContentOffsetY.value = value2.value;
    animatedScrollableType.value = value;
    isScrollableRefreshable.value = value3;
    isContentHeightFixed.value = false;
    const findNodeHandleResult = normalizeSnapPoint.findNodeHandle(ref.current);
    if (findNodeHandleResult) {
      const obj2 = { id: findNodeHandleResult, node: ref };
      setScrollableRef(obj2);
    } else {
      const _console = console;
      console.warn("Couldn't find the scrollable node handle id!");
    }
    return () => {
      removeScrollableRef(ref);
    };
  }, items));
};
