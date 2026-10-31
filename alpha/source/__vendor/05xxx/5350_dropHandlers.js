// Module ID: 5350
// Function ID: 5351
// Name: dropHandlers
// Dependencies: [5332, 5307, 5337, 5334]
// Exports: dropHandlers

// Module 5350 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5307 */;
import react_nativeDefault from "react-native" /* 5332 */;
import selectProperties from "selectProperties" /* 5334 */;
import MountRegistry2 from "MountRegistry" /* 5337 */;


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
