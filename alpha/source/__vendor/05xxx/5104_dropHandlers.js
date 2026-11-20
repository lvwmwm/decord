// Module ID: 5104
// Function ID: 5105
// Name: dropHandlers
// Dependencies: [5083, 5057, 5089, 5085]
// Exports: dropHandlers

// Module 5104 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5057 */;
import react_nativeDefault from "react-native" /* 5083 */;
import selectProperties from "selectProperties" /* 5085 */;
import MountRegistry2 from "MountRegistry" /* 5089 */;


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
