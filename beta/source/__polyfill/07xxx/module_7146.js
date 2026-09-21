// Module ID: 7146
// Function ID: 7147
// Dependencies: [7099, 19, 7144]
// Exports: useOnListLoad

// Module 7146
import _mod7144 from "module_7144" /* 7144 */;
import _slicedToArray from "module_7099" /* 7099 */;

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
      f82589();
    }
  });
}

export const useOnListLoad = (getDataLength, arg1) => {
  let f82589 = arg1;
  hasOwnProperty(Date.now());
  [tmp3, closure_3] = timestampProducer(false);
  const dataLength = getDataLength.getDataLength();
  const tmp = hasOwnProperty;
  const tmp2 = _slicedToArray(timestampProducer(false), 2);
  const requestAnimationFrame = _mod7144.useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  React4(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad === "function") {
    f82589 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      requestAnimationFrame(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f82589 != null) {
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
        f82589();
      }
    });
    const obj2 = { isLoaded: tmp3 };
    return obj2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useOnLoad };
