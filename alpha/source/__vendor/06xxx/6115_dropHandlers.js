// Module ID: 6115
// Function ID: 6116
// Name: dropHandlers
// Dependencies: [6097, 6072, 6102, 6099]
// Exports: dropHandlers

// Module 6115 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6072 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6097 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6099 */;
import MountRegistry2 from "MountRegistry" /* 6102 */;

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
