// Module ID: 6113
// Function ID: 6114
// Name: dropHandlers
// Dependencies: [6095, 6070, 6100, 6097]
// Exports: dropHandlers

// Module 6113 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6070 */;
import react_nativeDefault from "react-native" /* 6095 */;
import selectProperties from "selectProperties" /* 6097 */;
import MountRegistry2 from "MountRegistry" /* 6100 */;


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
