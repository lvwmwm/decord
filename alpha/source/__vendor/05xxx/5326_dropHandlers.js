// Module ID: 5326
// Function ID: 5327
// Name: dropHandlers
// Dependencies: [5308, 5283, 5313, 5310]
// Exports: dropHandlers

// Module 5326 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5283 */;
import react_nativeDefault from "react-native" /* 5308 */;
import selectProperties from "selectProperties" /* 5310 */;
import MountRegistry2 from "MountRegistry" /* 5313 */;


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
