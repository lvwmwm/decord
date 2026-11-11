// Module ID: 5585
// Function ID: 5586
// Name: dropHandlers
// Dependencies: [5564, 5538, 5570, 5566]
// Exports: dropHandlers

// Module 5585 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5538 */;
import react_nativeDefault from "react-native" /* 5564 */;
import selectProperties from "selectProperties" /* 5566 */;
import MountRegistry2 from "MountRegistry" /* 5570 */;


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
