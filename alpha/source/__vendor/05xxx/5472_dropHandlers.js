// Module ID: 5472
// Function ID: 5473
// Name: dropHandlers
// Dependencies: [5451, 5425, 5457, 5453]
// Exports: dropHandlers

// Module 5472 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5425 */;
import react_nativeDefault from "react-native" /* 5451 */;
import selectProperties from "selectProperties" /* 5453 */;
import MountRegistry2 from "MountRegistry" /* 5457 */;


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
