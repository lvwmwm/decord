// Module ID: 5638
// Function ID: 5639
// Name: dropHandlers
// Dependencies: [5617, 5591, 5623, 5619]
// Exports: dropHandlers

// Module 5638 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5591 */;
import react_nativeDefault from "react-native" /* 5617 */;
import selectProperties from "selectProperties" /* 5619 */;
import MountRegistry2 from "MountRegistry" /* 5623 */;


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
