// Module ID: 5187
// Function ID: 44000
// Name: useOnLoad
// Dependencies: []
// Exports: useOnListLoad

// Module 5187 (useOnLoad)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useMemo: closure_4, useRef: closure_5, useState: closure_6 } = arg1(dependencyMap[1]));
function useOnLoad(recyclerViewManager, arg1) {
  arg1 = recyclerViewManager;
  const dependencyMap = arg1;
  let closure_2 = callback3(false);
  callback2(() => {
    let isFirstLayoutComplete = arg0.getIsFirstLayoutComplete();
    if (isFirstLayoutComplete) {
      isFirstLayoutComplete = !ref.current;
    }
    if (isFirstLayoutComplete) {
      ref.current = true;
      arg1();
    }
  });
}

export const useOnListLoad = function useOnListLoad(recyclerViewManager, onLoad) {
  let tmp2;
  onLoad = recyclerViewManager;
  const dependencyMap = onLoad;
  const callback = callback3(Date.now());
  [tmp2, closure_3] = callback(callback4(false), 2);
  const dataLength = recyclerViewManager.getDataLength();
  const tmp = callback(callback4(false), 2);
  const requestAnimationFrame = onLoad(dependencyMap[2]).useUnmountAwareAnimationFrame().requestAnimationFrame;
  const items = [dataLength];
  requestAnimationFrame(() => {
    closure_2.current = Date.now();
  }, items);
  useOnLoad(recyclerViewManager, () => {
    let closure_0 = Date.now() - ref.current;
    requestAnimationFrame(() => {
      closure_0.isFirstPaintOnUiComplete = true;
      if (null != callback) {
        const obj = { elapsedTimeInMs: closure_0 };
        callback(obj);
      }
      callback2(true);
    });
  });
  return { isLoaded };
};
export { useOnLoad };
