// Module ID: 5294
// Function ID: 45502
// Name: dropHandlers
// Dependencies: [5260, 5254, 5276, 5274]

// Module 5294 (dropHandlers)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.dropHandlers = function dropHandlers(closure_1) {
  const iter = closure_1.attachedGestures[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = module;
    let tmp3 = dependencyMap;
    let obj = module(5260);
    let dropGestureHandlerResult = obj.dropGestureHandler(nextResult.handlerTag);
    let tmp5 = require;
    let obj2 = require(5254) /* findHandler */;
    let unregisterHandlerResult = obj2.unregisterHandler(nextResult.handlerTag, nextResult.config.testId);
    let MountRegistry = require(5276) /* MountRegistry */.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(nextResult);
    continue;
  }
  const result = require(5274) /* transformIntoHandlerTags */.scheduleFlushOperations();
};
