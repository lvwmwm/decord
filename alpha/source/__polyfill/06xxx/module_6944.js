// Module ID: 6944
// Function ID: 6945
// Dependencies: [19, 6923, 6934, 6945, 6946, 6947, 6948]
// Exports: useDetectorUpdater

// Module 6944
import _mod19 from "module_19" /* 19 */;
import _modDef6934 from "module_6934" /* 6934 */;
import dropHandlers from "dropHandlers" /* 6946 */;
import attachHandlers from "attachHandlers" /* 6947 */;
import _mod6948 from "module_6948" /* 6948 */;

const require = globalThis.__r;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6934(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6948.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6948;
        }
      }
    }
    dropHandlers.dropHandlers(preparedGesture);
    attachHandlers.attachHandlers({ preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp3 });
    if (tmp3 !== current.previousViewTag) {
      tmp2.previousViewTag = tmp3;
      tmp2.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
};
