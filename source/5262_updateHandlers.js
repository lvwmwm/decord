// Module ID: 5262
// Function ID: 45383
// Name: updateHandlers
// Dependencies: [5254, 5241, 5226, 5240, 5220]

// Module 5262 (updateHandlers)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.updateHandlers = function updateHandlers(closure_1, closure_3, closure_2) {
  const _require = closure_1;
  closure_1 = closure_2;
  closure_3.prepare();
  for (let num = 0; num < closure_2.length; num = num + 1) {
    let tmp2 = closure_1.attachedGestures[num];
    let tmp3 = _require;
    let tmp4 = attachedGestures;
    let obj = _require(attachedGestures[0]);
    let result = obj.checkGestureCallbacksForWorklets(tmp2);
    if (closure_2[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: closure_2[num].handlerTag, handlerTag: closure_2[num].handlers.handlerTag } = tmp2);
    }
  }
  attachedGestures = closure_1.attachedGestures;
  _require(attachedGestures[1]).ghQueueMicrotask(() => {
    if (lib.isMounted) {
      if (attachedGestures === lib.attachedGestures) {
        let flag = attachedGestures.length !== lib2.length;
        let num = 0;
        let tmp15 = flag;
        if (0 < lib2.length) {
          do {
            let tmp3 = attachedGestures;
            let tmp4 = attachedGestures[num];
            let tmp5 = lib2;
            let tmp6 = tmp4.handlers.gestureId !== lib2[num].handlers.gestureId;
            if (tmp6) {
              let tmp7 = lib2;
              let tmp8 = lib2[num].shouldUseReanimated || tmp4.shouldUseReanimated;
              tmp6 = tmp8;
            }
            if (tmp6) {
              flag = true;
            }
            let tmp9 = lib2;
            tmp4.config = lib2[num].config;
            tmp4.handlers = lib2[num].handlers;
            let tmp10 = lib2;
            let tmp11 = attachedGestures;
            let obj = lib2(attachedGestures[2]);
            let tmp12 = lib;
            let obj2 = lib(attachedGestures[3]);
            let obj3 = lib(attachedGestures[0]);
            let updateGestureHandlerResult = obj.updateGestureHandler(tmp4.handlerTag, obj2.filterConfig(tmp4.config, lib(attachedGestures[0]).ALLOWED_PROPS, obj3.extractGestureRelations(tmp4)));
            let obj4 = lib(attachedGestures[4]);
            let registerHandlerResult = obj4.registerHandler(tmp4.handlerTag, tmp4, tmp4.config.testId);
            num = num + 1;
            tmp15 = flag;
          } while (num < lib2.length);
        }
        if (lib.animatedHandlers) {
          if (tmp15) {
            const found = attachedGestures.filter((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
            lib.animatedHandlers.value = found.map((handlers) => handlers.handlers);
          }
        }
        const result = lib(attachedGestures[3]).scheduleFlushOperations();
        const obj5 = lib(attachedGestures[3]);
      }
    }
  });
};
