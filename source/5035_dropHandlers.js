// Module ID: 5035
// Function ID: 42938
// Name: dropHandlers
// Dependencies: []

// Module 5035 (dropHandlers)
arg5.dropHandlers = function dropHandlers(closure_4) {
  const iter = closure_4.attachedGestures[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = arg2;
    let tmp3 = arg6;
    let obj = arg2(arg6[0]);
    let dropGestureHandlerResult = obj.dropGestureHandler(nextResult.handlerTag);
    let tmp5 = arg1;
    let obj2 = arg1(arg6[1]);
    let unregisterHandlerResult = obj2.unregisterHandler(nextResult.handlerTag, nextResult.config.testId);
    let MountRegistry = arg1(arg6[2]).MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(nextResult);
    // continue
  }
  const result = arg1(arg6[3]).scheduleFlushOperations();
};
