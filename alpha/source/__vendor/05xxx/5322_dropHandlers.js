// Module ID: 5322
// Function ID: 5323
// Name: dropHandlers
// Dependencies: [5301, 5275, 5307, 5303]
// Exports: dropHandlers

// Module 5322 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5275 */;
import react_nativeDefault from "react-native" /* 5301 */;
import selectProperties from "selectProperties" /* 5303 */;
import MountRegistry2 from "MountRegistry" /* 5307 */;


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
