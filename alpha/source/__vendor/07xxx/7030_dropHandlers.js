// Module ID: 7030
// Function ID: 7031
// Name: dropHandlers
// Dependencies: [7012, 6987, 7017, 7014]
// Exports: dropHandlers

// Module 7030 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6987 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 7012 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 7014 */;
import MountRegistry2 from "MountRegistry" /* 7017 */;

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
