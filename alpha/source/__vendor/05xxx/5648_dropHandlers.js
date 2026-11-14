// Module ID: 5648
// Function ID: 5649
// Name: dropHandlers
// Dependencies: [5627, 5601, 5633, 5629]
// Exports: dropHandlers

// Module 5648 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5601 */;
import react_nativeDefault from "react-native" /* 5627 */;
import selectProperties from "selectProperties" /* 5629 */;
import MountRegistry2 from "MountRegistry" /* 5633 */;


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
