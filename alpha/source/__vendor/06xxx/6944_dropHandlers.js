// Module ID: 6944
// Function ID: 6945
// Name: dropHandlers
// Dependencies: [6926, 6901, 6931, 6928]
// Exports: dropHandlers

// Module 6944 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6901 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6926 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6928 */;
import MountRegistry2 from "MountRegistry" /* 6931 */;

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
