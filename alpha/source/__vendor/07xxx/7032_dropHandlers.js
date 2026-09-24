// Module ID: 7032
// Function ID: 7033
// Name: dropHandlers
// Dependencies: [7014, 6989, 7019, 7016]
// Exports: dropHandlers

// Module 7032 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6989 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 7014 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 7016 */;
import MountRegistry2 from "MountRegistry" /* 7019 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const dropHandlers = function dropHandlers(arg0) {
  for (const item10006 of tmp) {
    let obj = RNGestureHandlerModuleDefault;
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let obj2 = handlerIDToTag;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = MountRegistry2.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const result = transformIntoHandlerTags.scheduleFlushOperations();
};
