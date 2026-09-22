// Module ID: 7005
// Function ID: 7006
// Dependencies: [6958, 19, 7003]
// Exports: useOnListLoad

// Module 7005
import _mod7003 from "module_7003" /* 7003 */;
import _slicedToArray from "module_6958" /* 6958 */;

require = fn;
const noop = fn(19);
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useState: metroRequire } = noop);
function useOnLoad(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = hasOwnProperty(false);
  React3(() => {
    let isFirstLayoutComplete = getDataLength.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      f81296();
    }
  });
}

export const useOnListLoad = (getDataLength, arg1) => {
  let f81296 = arg1;
  hasOwnProperty(Date.now());
  [tmp3, closure_3] = timestampProducer(false);
  const dataLength = getDataLength.getDataLength();
  const tmp = hasOwnProperty;
  const tmp2 = _slicedToArray(timestampProducer(false), 2);
  const requestAnimationFrame = _mod7003.useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  React4(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad === "function") {
    f81296 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      requestAnimationFrame(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f81296 != null) {
          const obj = { elapsedTimeInMs };
          tmp(obj);
        }
        closure_2_3(true);
      });
    };
    tmp(false);
    React3(() => {
      let isFirstLayoutComplete = getDataLength.getIsFirstLayoutComplete();
      if (isFirstLayoutComplete) {
        isFirstLayoutComplete = !ref.current;
      }
      if (isFirstLayoutComplete) {
        ref.current = true;
        f81296();
      }
    });
    const obj2 = { isLoaded: tmp3 };
    return obj2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useOnLoad };
