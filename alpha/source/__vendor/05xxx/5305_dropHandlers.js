// Module ID: 5305
// Function ID: 5306
// Name: dropHandlers
// Dependencies: [5287, 5262, 5292, 5289]
// Exports: dropHandlers

// Module 5305 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5262 */;
import react_nativeDefault from "react-native" /* 5287 */;
import selectProperties from "selectProperties" /* 5289 */;
import MountRegistry2 from "MountRegistry" /* 5292 */;


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
