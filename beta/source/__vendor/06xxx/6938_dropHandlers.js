// Module ID: 6938
// Function ID: 6939
// Name: dropHandlers
// Dependencies: [6920, 6895, 6925, 6922]
// Exports: dropHandlers

// Module 6938 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6895 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6920 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6922 */;
import MountRegistry2 from "MountRegistry" /* 6925 */;

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
