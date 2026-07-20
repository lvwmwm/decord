// Module ID: 5033
// Function ID: 42933
// Name: useDetectorUpdater
// Dependencies: []
// Exports: useDetectorUpdater

// Module 5033 (useDetectorUpdater)
require(dependencyMap[0]).useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, arg2, gesture, webEventHandlers) {
  const require = current;
  const importDefault = current2;
  const dependencyMap = arg2;
  const forceRender = require(dependencyMap[1]).useForceRender();
  const items = [forceRender, gesture, arg2, current2, current, webEventHandlers];
  return gesture((self) => {
    const tmp = arg1(arg2[2])(self.viewRef);
    if (tmp === self.previousViewTag) {
      let obj = self(arg2[3]);
      if (!obj.needsToReattach(arg1, arg2)) {
        if (!self) {
          self(arg2[6]).updateHandlers(arg1, arg3, arg2);
          const obj2 = self(arg2[6]);
        }
      }
    }
    const result = self(arg2[1]).validateDetectorChildren(self.viewRef);
    const obj3 = self(arg2[1]);
    self(arg2[4]).dropHandlers(arg1);
    const obj4 = self(arg2[4]);
    obj = { preparedGesture: arg1, gestureConfig: arg3, gesturesToAttach: arg2, webEventHandlersRef: arg4, viewTag: tmp };
    self(arg2[5]).attachHandlers(obj);
    if (tmp !== self.previousViewTag) {
      self.previousViewTag = tmp;
      self.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
};
