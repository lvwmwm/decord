// Module ID: 5410
// Function ID: 46396
// Name: useOnLoad
// Dependencies: [5359, 31, 5408]
// Exports: useOnListLoad

// Module 5410 (useOnLoad)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ useEffect: closure_3, useMemo: closure_4, useRef: closure_5, useState: closure_6 } = result);
function useOnLoad(recyclerViewManager, arg1) {
  let closure_0 = recyclerViewManager;
  let closure_1 = arg1;
  let _slicedToArray = callback3(false);
  callback2(() => {
    isFirstLayoutComplete = isFirstLayoutComplete.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      callback();
    }
  });
}

export const useOnListLoad = function useOnListLoad(recyclerViewManager, onLoad) {
  let closure_3;
  let tmp2;
  const _require = recyclerViewManager;
  const dependencyMap = onLoad;
  const callback = callback3(Date.now());
  [tmp2, closure_3] = callback(callback4(false), 2);
  const dataLength = recyclerViewManager.getDataLength();
  const tmp = callback(callback4(false), 2);
  const requestAnimationFrame = _require(5408).useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  requestAnimationFrame(() => {
    _slicedToArray.current = Date.now();
  }, items);
  useOnLoad(recyclerViewManager, () => {
    let closure_0 = Date.now() - ref.current;
    requestAnimationFrame(() => {
      closure_0.isFirstPaintOnUiComplete = true;
      if (null != outer1_1) {
        const obj = { elapsedTimeInMs: closure_0 };
        outer1_1(obj);
      }
      outer1_3(true);
    });
  });
  return { isLoaded };
};
export { useOnLoad };
