// Module ID: 5502
// Function ID: 5503
// Name: dropHandlers
// Dependencies: [5481, 5455, 5487, 5483]
// Exports: dropHandlers

// Module 5502 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5455 */;
import react_nativeDefault from "react-native" /* 5481 */;
import selectProperties from "selectProperties" /* 5483 */;
import MountRegistry2 from "MountRegistry" /* 5487 */;


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
