// Module ID: 4981
// Function ID: 42738
// Name: useScrollable
// Dependencies: []
// Exports: useScrollable

// Module 4981 (useScrollable)
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useRef: closure_3 } = _module);

export const useScrollable = function useScrollable() {
  const tmp = callback2(null);
  const require = tmp;
  let closure_1 = callback2(null);
  let obj = require(closure_1[1]);
  const sharedValue = obj.useSharedValue(require(closure_1[2]).SCROLLABLE_TYPE.UNDETERMINED);
  const sharedValue1 = require(closure_1[1]).useSharedValue(0);
  const obj2 = require(closure_1[1]);
  const sharedValue2 = require(closure_1[1]).useSharedValue(require(closure_1[2]).SCROLLABLE_STATE.UNDETERMINED);
  const obj3 = require(closure_1[1]);
  const sharedValue3 = require(closure_1[1]).useSharedValue(false);
  const obj4 = require(closure_1[1]);
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
