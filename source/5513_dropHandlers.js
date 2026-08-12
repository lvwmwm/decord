// Module ID: 5513
// Function ID: 5514
// Name: dropHandlers
// Dependencies: [5495, 5470, 5500, 5497]

// Module 5513 (dropHandlers)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.dropHandlers = function dropHandlers(closure_1) {
  for (const item10006 of tmp) {
    let tmp2 = module;
    let tmp3 = dependencyMap;
    let obj = module(5495);
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let tmp5 = require;
    let obj2 = require(5470) /* map */;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = require(5500) /* MountRegistry */.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const result = require(5497) /* transformIntoHandlerTags */.scheduleFlushOperations();
};
