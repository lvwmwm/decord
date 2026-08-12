// Module ID: 5688
// Function ID: 5689
// Name: useRecyclerViewManager
// Dependencies: [5668, 19, 5689, 5709]
// Exports: useRecyclerViewManager

// Module 5688 (useRecyclerViewManager)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c3;
let c4;
let c5;
const require = arg1;
({ useEffect: c3, useMemo: c4, useState: c5 } = noop);

export const useRecyclerViewManager = (data) => {
  let closure_0 = data;
  let recyclerViewManager = velocityTracker(callback3(() => {
    recyclerViewManager = new data(recyclerViewManager[2]).RecyclerViewManager(data);
    return recyclerViewManager;
  }), 1)[0];
  velocityTracker = velocityTracker(callback3(() => {
    const velocityTracker = new data(recyclerViewManager[3]).VelocityTracker();
    return velocityTracker;
  }), 1)[0];
  const items = [data];
  callback2(() => {
    recyclerViewManager.updateProps(closure_0);
  }, items);
  const items1 = [data.data];
  callback2(() => {
    recyclerViewManager.processDataUpdate();
  }, items1);
  callback(() => {
    recyclerViewManager.restoreIfNeeded();
    return () => {
      closure_1.dispose();
      _slicedToArray.cleanUp();
    };
  }, []);
  return { recyclerViewManager, velocityTracker };
};
