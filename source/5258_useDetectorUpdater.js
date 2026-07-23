// Module ID: 5258
// Function ID: 45370
// Name: useDetectorUpdater
// Dependencies: [31, 5254, 5243, 5259, 5260, 5261, 5262]
// Exports: useDetectorUpdater

// Module 5258 (useDetectorUpdater)
require("result").useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, arg2, gesture, webEventHandlers) {
  const _require = current;
  let closure_1 = current2;
  const dependencyMap = arg2;
  let closure_4 = webEventHandlers;
  const forceRender = _require(5254).useForceRender();
  const items = [forceRender, gesture, arg2, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp = current2(5243)(current.viewRef);
    if (tmp === current.previousViewTag) {
      let obj = current(5259);
      if (!obj.needsToReattach(current2, dependencyMap)) {
        if (!arg0) {
          current(5262).updateHandlers(current2, closure_3, dependencyMap);
          const obj2 = current(5262);
        }
      }
    }
    const result = current(5254).validateDetectorChildren(current.viewRef);
    const obj3 = current(5254);
    current(5260).dropHandlers(current2);
    const obj4 = current(5260);
    obj = { preparedGesture: current2, gestureConfig: closure_3, gesturesToAttach: dependencyMap, webEventHandlersRef: closure_4, viewTag: tmp };
    current(5261).attachHandlers(obj);
    if (tmp !== current.previousViewTag) {
      current.previousViewTag = tmp;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
};
