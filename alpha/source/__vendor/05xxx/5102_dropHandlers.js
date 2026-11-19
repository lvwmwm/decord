// Module ID: 5102
// Function ID: 5103
// Name: dropHandlers
// Dependencies: [5081, 5055, 5087, 5083]
// Exports: dropHandlers

// Module 5102 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5055 */;
import react_nativeDefault from "react-native" /* 5081 */;
import selectProperties from "selectProperties" /* 5083 */;
import MountRegistry2 from "MountRegistry" /* 5087 */;


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
