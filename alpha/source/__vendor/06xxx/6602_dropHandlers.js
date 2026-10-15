// Module ID: 6602
// Function ID: 6603
// Name: dropHandlers
// Dependencies: [6584, 6559, 6589, 6586]
// Exports: dropHandlers

// Module 6602 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6559 */;
import react_nativeDefault from "react-native" /* 6584 */;
import selectProperties from "selectProperties" /* 6586 */;
import MountRegistry2 from "MountRegistry" /* 6589 */;


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
