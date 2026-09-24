// Module ID: 6970
// Function ID: 6971
// Name: dropHandlers
// Dependencies: [6952, 6927, 6957, 6954]
// Exports: dropHandlers

// Module 6970 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6927 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6952 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6954 */;
import MountRegistry2 from "MountRegistry" /* 6957 */;

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
