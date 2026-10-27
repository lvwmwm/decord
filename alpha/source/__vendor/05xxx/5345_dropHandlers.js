// Module ID: 5345
// Function ID: 5346
// Name: dropHandlers
// Dependencies: [5327, 5302, 5332, 5329]
// Exports: dropHandlers

// Module 5345 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5302 */;
import react_nativeDefault from "react-native" /* 5327 */;
import selectProperties from "selectProperties" /* 5329 */;
import MountRegistry2 from "MountRegistry" /* 5332 */;


export const dropHandlers = function dropHandlers(attachedGestures) {
  attachedGestures = attachedGestures.attachedGestures;
  for (const item10006 of attachedGestures) {
    let obj = react_nativeDefault;
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let obj2 = handlerIDToTag;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = MountRegistry2.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const obj3 = selectProperties;
  const result = obj3.scheduleFlushOperations();
};
