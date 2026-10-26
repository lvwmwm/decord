// Module ID: 5344
// Function ID: 5345
// Name: dropHandlers
// Dependencies: [5326, 5301, 5331, 5328]
// Exports: dropHandlers

// Module 5344 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5301 */;
import react_nativeDefault from "react-native" /* 5326 */;
import selectProperties from "selectProperties" /* 5328 */;
import MountRegistry2 from "MountRegistry" /* 5331 */;


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
