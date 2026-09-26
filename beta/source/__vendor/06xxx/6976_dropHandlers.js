// Module ID: 6976
// Function ID: 6977
// Name: dropHandlers
// Dependencies: [6958, 6933, 6963, 6960]
// Exports: dropHandlers

// Module 6976 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6933 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6958 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6960 */;
import MountRegistry2 from "MountRegistry" /* 6963 */;

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
