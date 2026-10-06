// Module ID: 6194
// Function ID: 6195
// Name: dropHandlers
// Dependencies: [6176, 6151, 6181, 6178]
// Exports: dropHandlers

// Module 6194 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6151 */;
import react_nativeDefault from "react-native" /* 6176 */;
import selectProperties from "selectProperties" /* 6178 */;
import MountRegistry2 from "MountRegistry" /* 6181 */;


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
