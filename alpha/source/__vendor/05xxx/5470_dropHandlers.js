// Module ID: 5470
// Function ID: 5471
// Name: dropHandlers
// Dependencies: [5449, 5423, 5455, 5451]
// Exports: dropHandlers

// Module 5470 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5423 */;
import react_nativeDefault from "react-native" /* 5449 */;
import selectProperties from "selectProperties" /* 5451 */;
import MountRegistry2 from "MountRegistry" /* 5455 */;


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
