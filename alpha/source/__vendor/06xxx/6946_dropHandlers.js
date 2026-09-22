// Module ID: 6946
// Function ID: 6947
// Name: dropHandlers
// Dependencies: [6928, 6903, 6933, 6930]
// Exports: dropHandlers

// Module 6946 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6903 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6928 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6930 */;
import MountRegistry2 from "MountRegistry" /* 6933 */;

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
