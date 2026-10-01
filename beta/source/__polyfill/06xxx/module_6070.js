// Module ID: 6070
// Function ID: 6071
// Dependencies: [19, 6053, 6062]
// Exports: useScrollableSetter

// Module 6070
import normalizeSnapPoint from "normalizeSnapPoint" /* 6062 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c2;
let c3;
({ useCallback: c2, useEffect: c3 } = react);

export const useScrollableSetter = (arg0, value, arg2, value3) => {
  let ref;
  _require = arg0;
  dependencyMap = value;
  const value2 = arg2;
  let tmp = arg4;
  if (arg4 === undefined) {
    tmp = value3;
  }
  let obj = require("react");
  const bottomSheetInternal = obj.useBottomSheetInternal();
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
    const obj = normalizeSnapPoint;
    const findNodeHandleResult = obj.findNodeHandle(ref.current);
    const tmp = ref;
    if (findNodeHandleResult) {
      const obj2 = { id: findNodeHandleResult, node: tmp };
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
