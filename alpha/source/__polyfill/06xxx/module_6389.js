// Module ID: 6389
// Function ID: 6390
// Dependencies: [6342, 19, 6387]
// Exports: useOnListLoad

// Module 6389
import _slicedToArray2 from "_slicedToArray" /* 6387 */;
import _slicedToArray from "_slicedToArray" /* 6342 */;
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
      f92099();
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
    const f92099 = () => {
      const elapsedTimeInMs = Date.now() - ref.current;
      const tmp = closure_4(() => {
        elapsedTimeInMs.isFirstPaintOnUiComplete = true;
        if (f92099 != null) {
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
        f92099();
      }
    });
    return { isLoaded: tmp3 };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useOnLoad };
