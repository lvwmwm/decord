// Module ID: 5037
// Function ID: 42946
// Name: updateHandlers
// Dependencies: []

// Module 5037 (updateHandlers)
arg5.updateHandlers = function updateHandlers(attachedGestures, prepare, arg2) {
  prepare = attachedGestures;
  prepare.prepare();
  for (let num = 0; num < arg2.length; num = num + 1) {
    let tmp2 = attachedGestures.attachedGestures[num];
    let tmp3 = prepare;
    let tmp4 = arg6;
    let obj = prepare(arg6[0]);
    let result = obj.checkGestureCallbacksForWorklets(tmp2);
    if (arg2[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: arg2[num].handlerTag, handlerTag: arg2[num].handlers.handlerTag } = tmp2);
    }
  }
  const arg6 = attachedGestures.attachedGestures;
  prepare(arg6[1]).ghQueueMicrotask((self) => {
    if (self.isMounted) {
      if (attachedGestures === self.attachedGestures) {
        let flag = attachedGestures.length !== arg2.length;
        let num = 0;
        let tmp15 = flag;
        if (0 < arg2.length) {
          do {
            let tmp3 = closure_2;
            let tmp4 = closure_2[num];
            let tmp5 = closure_1;
            let tmp6 = tmp4.handlers.gestureId !== closure_1[num].handlers.gestureId;
            if (tmp6) {
              let tmp7 = closure_1;
              let tmp8 = closure_1[num].shouldUseReanimated || tmp4.shouldUseReanimated;
              tmp6 = tmp8;
            }
            if (tmp6) {
              flag = true;
            }
            let tmp9 = closure_1;
            tmp4.config = closure_1[num].config;
            tmp4.handlers = closure_1[num].handlers;
            let tmp10 = closure_1;
            let tmp11 = closure_2;
            let obj = closure_1(closure_2[2]);
            let tmp12 = closure_0;
            let obj2 = closure_0(closure_2[3]);
            let obj3 = closure_0(closure_2[0]);
            let updateGestureHandlerResult = obj.updateGestureHandler(tmp4.handlerTag, obj2.filterConfig(tmp4.config, closure_0(closure_2[0]).ALLOWED_PROPS, obj3.extractGestureRelations(tmp4)));
            let obj4 = closure_0(closure_2[4]);
            let registerHandlerResult = obj4.registerHandler(tmp4.handlerTag, tmp4, tmp4.config.testId);
            num = num + 1;
            tmp15 = flag;
          } while (num < closure_1.length);
        }
        if (self.animatedHandlers) {
          if (tmp15) {
            const found = attachedGestures.filter((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
            self.animatedHandlers.value = found.map((handlers) => handlers.handlers);
          }
        }
        const result = self(attachedGestures[3]).scheduleFlushOperations();
        const obj5 = self(attachedGestures[3]);
      }
    }
  });
};
