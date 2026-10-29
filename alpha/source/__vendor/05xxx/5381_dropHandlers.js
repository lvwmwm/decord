// Module ID: 5381
// Function ID: 5382
// Name: dropHandlers
// Dependencies: [5363, 5338, 5368, 5365]
// Exports: dropHandlers

// Module 5381 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5338 */;
import react_nativeDefault from "react-native" /* 5363 */;
import selectProperties from "selectProperties" /* 5365 */;
import MountRegistry2 from "MountRegistry" /* 5368 */;


export function dropHandlers(attachedGestures) {
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
}
