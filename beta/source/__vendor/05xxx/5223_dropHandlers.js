// Module ID: 5223
// Function ID: 5224
// Name: dropHandlers
// Dependencies: [5202, 5176, 5208, 5204]
// Exports: dropHandlers

// Module 5223 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5176 */;
import react_nativeDefault from "react-native" /* 5202 */;
import selectProperties from "selectProperties" /* 5204 */;
import MountRegistry2 from "MountRegistry" /* 5208 */;


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
