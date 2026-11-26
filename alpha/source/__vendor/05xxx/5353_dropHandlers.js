// Module ID: 5353
// Function ID: 5354
// Name: dropHandlers
// Dependencies: [5332, 5306, 5338, 5334]
// Exports: dropHandlers

// Module 5353 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5306 */;
import react_nativeDefault from "react-native" /* 5332 */;
import selectProperties from "selectProperties" /* 5334 */;
import MountRegistry2 from "MountRegistry" /* 5338 */;


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
