// Module ID: 5133
// Function ID: 5134
// Name: dropHandlers
// Dependencies: [5112, 5086, 5118, 5114]
// Exports: dropHandlers

// Module 5133 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5086 */;
import react_nativeDefault from "react-native" /* 5112 */;
import selectProperties from "selectProperties" /* 5114 */;
import MountRegistry2 from "MountRegistry" /* 5118 */;


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
