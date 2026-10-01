// Module ID: 6295
// Function ID: 6296
// Dependencies: [6275, 19, 6296, 6316]
// Exports: useRecyclerViewManager

// Module 6295
import RecyclerViewManager from "RecyclerViewManager" /* 6296 */;
import _slicedToArray from "_slicedToArray" /* 6275 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
({ useEffect: c3, useMemo: closure_4, useState: hasOwnProperty } = react);

export const useRecyclerViewManager = (data) => {
  let velocityTracker;
  let recyclerViewManager = velocityTracker(closure_5(() => {
    recyclerViewManager = new RecyclerViewManager.RecyclerViewManager(data);
    return recyclerViewManager;
  }), 1)[0];
  velocityTracker = velocityTracker(closure_5(() => {
    velocityTracker = new data(recyclerViewManager[3]).VelocityTracker();
    return velocityTracker;
  }), 1)[0];
  const items = [data];
  data = data.data;
  closure_4(() => {
    recyclerViewManager.updateProps(data);
  }, items);
  const items1 = [data];
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
