// Module ID: 6659
// Function ID: 6660
// Name: dropHandlers
// Dependencies: [6641, 6616, 6646, 6643]
// Exports: dropHandlers

// Module 6659 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6616 */;
import react_nativeDefault from "react-native" /* 6641 */;
import selectProperties from "selectProperties" /* 6643 */;
import MountRegistry2 from "MountRegistry" /* 6646 */;


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
