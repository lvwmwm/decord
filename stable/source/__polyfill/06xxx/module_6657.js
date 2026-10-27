// Module ID: 6657
// Function ID: 6658
// Dependencies: [19, 6636, 6647, 6658, 6659, 6660, 6661]
// Exports: useDetectorUpdater

// Module 6657
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 6647 */;
import needsToReattach from "needsToReattach" /* 6658 */;
import dropHandlers from "dropHandlers" /* 6659 */;
import attachHandlers from "attachHandlers" /* 6660 */;

const require = globalThis.__r;
let _require, dependencyMap;

react.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  let gestureConfig;
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const webEventHandlersRef = webEventHandlers;
  let obj = require("ALLOWED_PROPS");
  const forceRender = obj.useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = react_nativeDefault(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      const obj = needsToReattach;
      const tmp5 = require;
      const tmp6 = preparedGesture;
      const tmp7 = gesturesToAttach;
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        const tmp8 = arg0;
        if (!tmp8) {
          const tmp5Result = tmp5(6661);
          tmp5Result.updateHandlers(tmp6, gestureConfig, tmp7);
        }
      }
    }
    const obj3 = dropHandlers;
    obj3.dropHandlers(preparedGesture);
    const obj2 = { preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp3 };
    const obj4 = attachHandlers;
    obj4.attachHandlers(obj2);
    if (tmp3 !== current.previousViewTag) {
      current.previousViewTag = tmp3;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
};
