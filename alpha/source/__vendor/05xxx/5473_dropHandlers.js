// Module ID: 5473
// Function ID: 5474
// Name: dropHandlers
// Dependencies: [5455, 5430, 5460, 5457]
// Exports: dropHandlers

// Module 5473 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5430 */;
import react_nativeDefault from "react-native" /* 5455 */;
import selectProperties from "selectProperties" /* 5457 */;
import MountRegistry2 from "MountRegistry" /* 5460 */;


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
