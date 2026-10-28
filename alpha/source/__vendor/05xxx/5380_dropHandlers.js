// Module ID: 5380
// Function ID: 5381
// Name: dropHandlers
// Dependencies: [5362, 5337, 5367, 5364]
// Exports: dropHandlers

// Module 5380 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5337 */;
import react_nativeDefault from "react-native" /* 5362 */;
import selectProperties from "selectProperties" /* 5364 */;
import MountRegistry2 from "MountRegistry" /* 5367 */;


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
