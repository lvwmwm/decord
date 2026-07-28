// Module ID: 5292
// Function ID: 45497
// Name: useDetectorUpdater
// Dependencies: [31, 5288, 5277, 5293, 5294, 5295, 5296]
// Exports: useDetectorUpdater

// Module 5292 (useDetectorUpdater)
require("result").useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, arg2, gesture, webEventHandlers) {
  const _require = current;
  let closure_1 = current2;
  const dependencyMap = arg2;
  let closure_4 = webEventHandlers;
  const forceRender = _require(5288).useForceRender();
  const items = [forceRender, gesture, arg2, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp = current2(5277)(current.viewRef);
    if (tmp === current.previousViewTag) {
      let obj = current(5293);
      if (!obj.needsToReattach(current2, dependencyMap)) {
        if (!arg0) {
          current(5296).updateHandlers(current2, closure_3, dependencyMap);
          const obj2 = current(5296);
        }
      }
    }
    current(5294).dropHandlers(current2);
    const obj3 = current(5294);
    obj = { preparedGesture: current2, gestureConfig: closure_3, gesturesToAttach: dependencyMap, webEventHandlersRef: closure_4, viewTag: tmp };
    current(5295).attachHandlers(obj);
    if (tmp !== current.previousViewTag) {
      current.previousViewTag = tmp;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
};
