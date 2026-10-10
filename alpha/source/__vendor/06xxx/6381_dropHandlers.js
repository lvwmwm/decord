// Module ID: 6381
// Function ID: 6382
// Name: dropHandlers
// Dependencies: [6363, 6338, 6368, 6365]
// Exports: dropHandlers

// Module 6381 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6338 */;
import react_nativeDefault from "react-native" /* 6363 */;
import selectProperties from "selectProperties" /* 6365 */;
import MountRegistry2 from "MountRegistry" /* 6368 */;


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
