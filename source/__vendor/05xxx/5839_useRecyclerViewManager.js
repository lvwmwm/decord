// Module ID: 5839
// Function ID: 5840
// Name: useRecyclerViewManager
// Dependencies: [5819, 19, 5840, 5860]
// Exports: useRecyclerViewManager

// Module 5839 (useRecyclerViewManager)
import closure_2 from "_slicedToArray" /* 5819 */;
import noop from "noop" /* 19 */;

const require = arg1;
({ useEffect: c3, useMemo: c4, useState: c5 } = noop);

export const useRecyclerViewManager = (data) => {
  closure_0 = data;
  let recyclerViewManager = velocityTracker(callback3(() => {
    recyclerViewManager = new data(recyclerViewManager[2]).RecyclerViewManager(data);
    return recyclerViewManager;
  }), 1)[0];
  velocityTracker = velocityTracker(callback3(() => {
    velocityTracker = new data(recyclerViewManager[3]).VelocityTracker();
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
      closure_2.cleanUp();
    };
  }, []);
  return { recyclerViewManager, velocityTracker };
};
