// Module ID: 6942
// Function ID: 6943
// Dependencies: [19, 6921, 6932, 6943, 6944, 6945, 6946]
// Exports: useDetectorUpdater

// Module 6942
import _mod19 from "module_19" /* 19 */;
import _modDef6932 from "module_6932" /* 6932 */;
import dropHandlers from "dropHandlers" /* 6944 */;
import attachHandlers from "attachHandlers" /* 6945 */;
import _mod6946 from "module_6946" /* 6946 */;

const require = globalThis.__r;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6932(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6946.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6946;
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
