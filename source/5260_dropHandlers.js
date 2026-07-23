// Module ID: 5260
// Function ID: 45375
// Name: dropHandlers
// Dependencies: [5226, 5220, 5242, 5240]

// Module 5260 (dropHandlers)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.dropHandlers = function dropHandlers(closure_1) {
  const iter = closure_1.attachedGestures[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = module;
    let tmp3 = dependencyMap;
    let obj = module(5226);
    let dropGestureHandlerResult = obj.dropGestureHandler(nextResult.handlerTag);
    let tmp5 = require;
    let obj2 = require(5220) /* findHandler */;
    let unregisterHandlerResult = obj2.unregisterHandler(nextResult.handlerTag, nextResult.config.testId);
    let MountRegistry = require(5242) /* MountRegistry */.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(nextResult);
    continue;
  }
  const result = require(5240) /* transformIntoHandlerTags */.scheduleFlushOperations();
};
