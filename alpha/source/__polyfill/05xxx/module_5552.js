// Module ID: 5552
// Function ID: 5553
// Dependencies: [5505, 19, 5550]
// Exports: useOnListLoad

// Module 5552
import _slicedToArray2 from "_slicedToArray" /* 5550 */;
import _slicedToArray from "_slicedToArray" /* 5505 */;
import react from "react" /* 19 */;

let isFirstLayoutComplete;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useState: metroRequire } = react);
function useOnLoad(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = hasOwnProperty(false);
  _false(() => {
    isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete() && !ref.current;
    if (isFirstLayoutComplete) {
      ref.current = true;
      f87906();
    }
  });
}

export const useOnListLoad = (getDataLength, arg1) => {
  let closure_129_3;
  let tmp3;
  let closure_0 = getDataLength;
  let closure_1 = arg1;
  let tmp = hasOwnProperty;
  let closure_2 = hasOwnProperty(Date.now());
  [tmp3, closure_129_3] = _slicedToArray(metroRequire(false), 2);
  const tmp2 = _slicedToArray(metroRequire(false), 2);
  const dataLength = getDataLength.getDataLength();
  let obj = _slicedToArray2;
  const requestAnimationFrame = obj.useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  React3(() => {
    closure_2.current = Date.now();
  }, items);
  if (typeof useOnLoad === "function") {
    closure_0 = getDataLength;
    const f87906 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      const tmp = closure_4(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f87906 != null) {
          const obj = { elapsedTimeInMs };
          tmp(obj);
        }
        closure_2_3(true);
      });
    };
    closure_2 = tmp(false);
    _false(() => {
      isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete() && !ref.current;
      if (isFirstLayoutComplete) {
        ref.current = true;
        f87906();
      }
    });
    return { isLoaded: tmp3 };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useOnLoad };
