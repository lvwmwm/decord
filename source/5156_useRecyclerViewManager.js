// Module ID: 5156
// Function ID: 43661
// Name: useRecyclerViewManager
// Dependencies: []
// Exports: useRecyclerViewManager

// Module 5156 (useRecyclerViewManager)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useMemo: closure_4, useState: closure_5 } = arg1(dependencyMap[1]));

export const useRecyclerViewManager = function useRecyclerViewManager(data) {
  const arg1 = data;
  const recyclerViewManager = callback(callback4(() => {
    const recyclerViewManager = new arg0(recyclerViewManager[2]).RecyclerViewManager(arg0);
    return recyclerViewManager;
  }), 1)[0];
  const dependencyMap = recyclerViewManager;
  const velocityTracker = callback(callback4(() => {
    const velocityTracker = new arg0(recyclerViewManager[3]).VelocityTracker();
    return velocityTracker;
  }), 1)[0];
  const callback = velocityTracker;
  const items = [data];
  callback3(() => {
    recyclerViewManager.updateProps(arg0);
  }, items);
  const items1 = [data.data];
  callback3(() => {
    recyclerViewManager.processDataUpdate();
  }, items1);
  callback2(() => {
    recyclerViewManager.restoreIfNeeded();
    return () => {
      closure_1.dispose();
      closure_2.cleanUp();
    };
  }, []);
  return { recyclerViewManager, velocityTracker };
};
