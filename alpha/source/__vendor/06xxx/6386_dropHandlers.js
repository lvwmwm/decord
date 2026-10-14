// Module ID: 6386
// Function ID: 6387
// Name: dropHandlers
// Dependencies: [6368, 6343, 6373, 6370]
// Exports: dropHandlers

// Module 6386 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6343 */;
import react_nativeDefault from "react-native" /* 6368 */;
import selectProperties from "selectProperties" /* 6370 */;
import MountRegistry2 from "MountRegistry" /* 6373 */;


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
