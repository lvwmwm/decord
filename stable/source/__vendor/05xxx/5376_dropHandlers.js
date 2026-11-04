// Module ID: 5376
// Function ID: 5377
// Name: dropHandlers
// Dependencies: [5358, 5333, 5363, 5360]
// Exports: dropHandlers

// Module 5376 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5333 */;
import react_nativeDefault from "react-native" /* 5358 */;
import selectProperties from "selectProperties" /* 5360 */;
import MountRegistry2 from "MountRegistry" /* 5363 */;


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
