// Module ID: 5330
// Function ID: 5331
// Name: dropHandlers
// Dependencies: [5312, 5287, 5317, 5314]
// Exports: dropHandlers

// Module 5330 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5287 */;
import react_nativeDefault from "react-native" /* 5312 */;
import selectProperties from "selectProperties" /* 5314 */;
import MountRegistry2 from "MountRegistry" /* 5317 */;


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
