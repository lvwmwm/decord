// Module ID: 6801
// Function ID: 6802
// Dependencies: [19, 6780, 6791, 6802, 6803, 6804, 6805]
// Exports: useDetectorUpdater

// Module 6801
import _mod19 from "module_19" /* 19 */;
import _modDef6791 from "module_6791" /* 6791 */;
import dropHandlers from "dropHandlers" /* 6803 */;
import attachHandlers from "attachHandlers" /* 6804 */;
import _mod6805 from "module_6805" /* 6805 */;

const require = globalThis.__r;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6791(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6805.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6805;
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
