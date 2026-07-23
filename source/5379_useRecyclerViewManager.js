// Module ID: 5379
// Function ID: 46057
// Name: useRecyclerViewManager
// Dependencies: [5359, 31, 5380, 5404]
// Exports: useRecyclerViewManager

// Module 5379 (useRecyclerViewManager)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ useEffect: closure_3, useMemo: closure_4, useState: closure_5 } = result);

export const useRecyclerViewManager = function useRecyclerViewManager(data) {
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
      outer1_1.dispose();
      outer1_2.cleanUp();
    };
  }, []);
  return { recyclerViewManager, velocityTracker };
};
