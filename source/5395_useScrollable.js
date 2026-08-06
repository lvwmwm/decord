// Module ID: 5395
// Function ID: 5396
// Name: useScrollable
// Dependencies: [19, 1634, 5380, 5396]
// Exports: useScrollable

// Module 5395 (useScrollable)
import noop from "noop";

let c3;
let obj1;
({ useCallback: obj1, useRef: c3 } = noop);

export const useScrollable = () => {
  const tmp = callback2(null);
  const require = tmp;
  const dependencyMap = callback2(null);
  let obj = require(1634) /* cancelAnimation */;
  const sharedValue = obj.useSharedValue(require(5380) /* GESTURE_SOURCE */.SCROLLABLE_TYPE.UNDETERMINED);
  const sharedValue1 = require(1634) /* cancelAnimation */.useSharedValue(0);
  const obj2 = require(1634) /* cancelAnimation */;
  const sharedValue2 = require(1634) /* cancelAnimation */.useSharedValue(require(5380) /* GESTURE_SOURCE */.SCROLLABLE_STATE.UNDETERMINED);
  const obj3 = require(1634) /* cancelAnimation */;
  const sharedValue3 = require(1634) /* cancelAnimation */.useSharedValue(false);
  const obj4 = require(1634) /* cancelAnimation */;
  obj = {
    scrollableRef: tmp,
    animatedScrollableType: sharedValue,
    animatedScrollableContentOffsetY: sharedValue1,
    animatedScrollableOverrideState: sharedValue2,
    isScrollableRefreshable: sharedValue3,
    setScrollableRef: callback((id) => {
      const current = tmp.current;
      id = undefined;
      if (current != null) {
        id = current.id;
      }
      if (id == null) {
        id = null;
      }
      if (id !== id.id) {
        if (tmp.current) {
          closure_1.current = tmp.current;
        }
        tmp.current = id;
      }
    }, []),
    removeScrollableRef: callback((current) => {
      try {
        const findNodeHandleResult = tmp(ref[3]).findNodeHandle(current.current);
        current = tmp.current;
        let id;
        if (current != null) {
          id = current.id;
        }
        if (id == null) {
          id = null;
        }
        if (findNodeHandleResult === id) {
          tmp.current = ref.current;
        }
      } catch (err) {
        return tmp;
      }
    }, [])
  };
  return obj;
};
