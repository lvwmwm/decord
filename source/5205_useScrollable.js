// Module ID: 5205
// Function ID: 45132
// Name: useScrollable
// Dependencies: [31, 1582, 5190, 5206]
// Exports: useScrollable

// Module 5205 (useScrollable)
import result from "result";

let closure_2;
let closure_3;
({ useCallback: closure_2, useRef: closure_3 } = result);

export const useScrollable = function useScrollable() {
  const tmp = callback2(null);
  const require = tmp;
  const dependencyMap = callback2(null);
  let obj = require(1582) /* cancelAnimation */;
  const sharedValue = obj.useSharedValue(require(5190) /* GESTURE_SOURCE */.SCROLLABLE_TYPE.UNDETERMINED);
  const sharedValue1 = require(1582) /* cancelAnimation */.useSharedValue(0);
  const obj2 = require(1582) /* cancelAnimation */;
  const sharedValue2 = require(1582) /* cancelAnimation */.useSharedValue(require(5190) /* GESTURE_SOURCE */.SCROLLABLE_STATE.UNDETERMINED);
  const obj3 = require(1582) /* cancelAnimation */;
  const sharedValue3 = require(1582) /* cancelAnimation */.useSharedValue(false);
  const obj4 = require(1582) /* cancelAnimation */;
  obj = {
    scrollableRef: tmp,
    animatedScrollableType: sharedValue,
    animatedScrollableContentOffsetY: sharedValue1,
    animatedScrollableOverrideState: sharedValue2,
    isScrollableRefreshable: sharedValue3,
    setScrollableRef: callback((id) => {
      const current = tmp.current;
      id = undefined;
      if (null != current) {
        id = current.id;
      }
      let tmp2 = null;
      if (null != id) {
        tmp2 = id;
      }
      if (tmp2 !== id.id) {
        if (tmp.current) {
          closure_1.current = tmp.current;
        }
        tmp.current = id;
      }
    }, []),
    removeScrollableRef: callback((current) => {
      const obj = tmp(ref[3]);
      current = tmp.current;
      let id;
      if (null != current) {
        id = current.id;
      }
      let tmp3 = null;
      if (null != id) {
        tmp3 = id;
      }
      if (findNodeHandleResult === tmp3) {
        tmp.current = ref.current;
      }
    }, [])
  };
  return obj;
};
