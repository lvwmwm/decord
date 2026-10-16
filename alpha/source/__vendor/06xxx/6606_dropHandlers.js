// Module ID: 6606
// Function ID: 6607
// Name: dropHandlers
// Dependencies: [6588, 6563, 6593, 6590]
// Exports: dropHandlers

// Module 6606 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6563 */;
import react_nativeDefault from "react-native" /* 6588 */;
import selectProperties from "selectProperties" /* 6590 */;
import MountRegistry2 from "MountRegistry" /* 6593 */;


export const dropHandlers = function dropHandlers(attachedGestures) {
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
};
