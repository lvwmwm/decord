// Module ID: 5227
// Function ID: 5228
// Name: dropHandlers
// Dependencies: [5206, 5180, 5212, 5208]
// Exports: dropHandlers

// Module 5227 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5180 */;
import react_nativeDefault from "react-native" /* 5206 */;
import selectProperties from "selectProperties" /* 5208 */;
import MountRegistry2 from "MountRegistry" /* 5212 */;


export function dropHandlers(attachedGestures) {
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
}
