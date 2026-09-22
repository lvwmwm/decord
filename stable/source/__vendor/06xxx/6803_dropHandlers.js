// Module ID: 6803
// Function ID: 6804
// Name: dropHandlers
// Dependencies: [6785, 6760, 6790, 6787]
// Exports: dropHandlers

// Module 6803 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6760 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6785 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6787 */;
import MountRegistry2 from "MountRegistry" /* 6790 */;

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
