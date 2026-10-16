// Module ID: 6604
// Function ID: 6605
// Name: dropHandlers
// Dependencies: [6586, 6561, 6591, 6588]
// Exports: dropHandlers

// Module 6604 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6561 */;
import react_nativeDefault from "react-native" /* 6586 */;
import selectProperties from "selectProperties" /* 6588 */;
import MountRegistry2 from "MountRegistry" /* 6591 */;


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
