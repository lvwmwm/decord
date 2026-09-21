// Module ID: 7113
// Function ID: 7114
// Dependencies: [7093, 19, 7114, 7134]
// Exports: useRecyclerViewManager

// Module 7113
import RecyclerViewManager from "RecyclerViewManager" /* 7114 */;
import _slicedToArray from "module_7093" /* 7093 */;

require = fn;
const noop = fn(19);
({ useEffect: c3, useMemo: closure_4, useState: hasOwnProperty } = noop);

export const useRecyclerViewManager = (data) => {
  let recyclerViewManager = velocityTracker(closure_5(() => {
    recyclerViewManager = new RecyclerViewManager.RecyclerViewManager(closure_0);
    return recyclerViewManager;
  }), 1)[0];
  velocityTracker = velocityTracker(closure_5(() => {
    velocityTracker = new data(recyclerViewManager[3]).VelocityTracker();
    return velocityTracker;
  }), 1)[0];
  const items = [data];
  closure_4(() => {
    recyclerViewManager.updateProps(closure_0);
  }, items);
  const items1 = [data.data];
  closure_4(() => {
    recyclerViewManager.processDataUpdate();
  }, items1);
  closure_3(() => {
    recyclerViewManager.restoreIfNeeded();
    return () => {
      recyclerViewManager.dispose();
      velocityTracker.cleanUp();
    };
  }, []);
  return { recyclerViewManager, velocityTracker };
};
