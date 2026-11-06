// Module ID: 5497
// Function ID: 5498
// Dependencies: [19, 5474, 5486, 5498, 5499, 5500, 5501, 5502]
// Exports: useDetectorUpdater

// Module 5497
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5486 */;
import assignRef from "assignRef" /* 5498 */;
import needsToReattach from "needsToReattach" /* 5499 */;
import dropHandlers from "dropHandlers" /* 5500 */;
import attachHandlers from "attachHandlers" /* 5501 */;
import _mod5502 from "module_5502" /* 5502 */;

const require = globalThis.__r;
let _require, dependencyMap;

react.useCallback;

export function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  let gestureConfig;
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const webEventHandlersRef = webEventHandlers;
  let obj = require("ALLOWED_PROPS");
  const forceRender = obj.useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp2 = react_nativeDefault;
    const obj = assignRef;
    const tmp2Result = tmp2(obj.resolveHostInstance(current.viewRef));
    if (tmp2Result === current.previousViewTag) {
      const tmp3Result = needsToReattach;
      const tmp7 = preparedGesture;
      const tmp8 = gesturesToAttach;
      if (!tmp3Result.needsToReattach(preparedGesture, gesturesToAttach)) {
        const tmp9 = arg0;
        if (!tmp9) {
          const tmp3Result4 = _mod5502;
          tmp3Result4.updateHandlers(tmp7, gestureConfig, tmp8);
        }
      }
    }
    const tmp3Result5 = dropHandlers;
    tmp3Result5.dropHandlers(preparedGesture);
    const obj2 = { preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp2Result };
    const tmp3Result6 = attachHandlers;
    tmp3Result6.attachHandlers(obj2);
    if (tmp2Result !== current.previousViewTag) {
      current.previousViewTag = tmp2Result;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
}
