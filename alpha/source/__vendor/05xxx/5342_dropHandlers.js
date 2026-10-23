// Module ID: 5342
// Function ID: 5343
// Name: dropHandlers
// Dependencies: [5324, 5299, 5329, 5326]
// Exports: dropHandlers

// Module 5342 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5299 */;
import react_nativeDefault from "react-native" /* 5324 */;
import selectProperties from "selectProperties" /* 5326 */;
import MountRegistry2 from "MountRegistry" /* 5329 */;


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
