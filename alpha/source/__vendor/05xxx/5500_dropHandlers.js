// Module ID: 5500
// Function ID: 5501
// Name: dropHandlers
// Dependencies: [5479, 5453, 5485, 5481]
// Exports: dropHandlers

// Module 5500 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5453 */;
import react_nativeDefault from "react-native" /* 5479 */;
import selectProperties from "selectProperties" /* 5481 */;
import MountRegistry2 from "MountRegistry" /* 5485 */;


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
