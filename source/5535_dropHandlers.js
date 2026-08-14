// Module ID: 5535
// Function ID: 5536
// Name: dropHandlers
// Dependencies: [5517, 5492, 5522, 5519]

// Module 5535 (dropHandlers)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.dropHandlers = function dropHandlers(closure_1) {
  for (const item10006 of tmp) {
    let tmp2 = module;
    let tmp3 = dependencyMap;
    let obj = module(5517);
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let tmp5 = require;
    let obj2 = require(5492) /* map */;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = require(5522) /* MountRegistry */.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const result = require(5519) /* transformIntoHandlerTags */.scheduleFlushOperations();
};
