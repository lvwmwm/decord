// Module ID: 7028
// Function ID: 7029
// Dependencies: [19, 7007, 7018, 7029, 7030, 7031, 7032]
// Exports: useDetectorUpdater

// Module 7028
import _mod19 from "module_19" /* 19 */;
import _modDef7018 from "module_7018" /* 7018 */;
import dropHandlers from "dropHandlers" /* 7030 */;
import attachHandlers from "attachHandlers" /* 7031 */;
import _mod7032 from "module_7032" /* 7032 */;

const require = globalThis.__r;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef7018(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod7032.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod7032;
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
