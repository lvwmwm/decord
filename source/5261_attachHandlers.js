// Module ID: 5261
// Function ID: 45377
// Name: attachHandlers
// Dependencies: [27, 5241, 5254, 5226, 5240, 5220, 5239, 5242]
// Exports: attachHandlers

// Module 5261 (attachHandlers)
import { Platform } from "get ActivityIndicator";


export const attachHandlers = function attachHandlers(preparedGesture) {
  let handlerName;
  let handlerTag;
  let viewTag;
  let webEventHandlersRef;
  preparedGesture = preparedGesture.preparedGesture;
  const gestureConfig = preparedGesture.gestureConfig;
  const gesturesToAttach = preparedGesture.gesturesToAttach;
  ({ viewTag, webEventHandlersRef } = preparedGesture);
  gestureConfig.initialize();
  preparedGesture(gesturesToAttach[1]).ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      gestureConfig.prepare();
    }
  });
  let iter = gesturesToAttach[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp14 = preparedGesture;
    let tmp15 = gesturesToAttach;
    let obj4 = preparedGesture(gesturesToAttach[2]);
    let result = obj4.checkGestureCallbacksForWorklets(nextResult);
    let tmp17 = gestureConfig;
    let obj5 = gestureConfig(gesturesToAttach[3]);
    ({ handlerName, handlerTag } = nextResult);
    let obj6 = preparedGesture(gesturesToAttach[4]);
    let gestureHandler = obj5.createGestureHandler(handlerName, handlerTag, obj6.filterConfig(nextResult.config, preparedGesture(gesturesToAttach[2]).ALLOWED_PROPS));
    let obj7 = preparedGesture(gesturesToAttach[5]);
    let registerHandlerResult = obj7.registerHandler(nextResult.handlerTag, nextResult, nextResult.config.testId);
    continue;
  }
  let obj = preparedGesture(gesturesToAttach[1]);
  preparedGesture(gesturesToAttach[1]).ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      const iter = gesturesToAttach[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = gestureConfig;
        let tmp6 = gesturesToAttach;
        let obj = gestureConfig(gesturesToAttach[3]);
        let tmp7 = preparedGesture;
        let obj2 = preparedGesture(gesturesToAttach[4]);
        let obj3 = preparedGesture(gesturesToAttach[2]);
        let updateGestureHandlerResult = obj.updateGestureHandler(nextResult.handlerTag, obj2.filterConfig(nextResult.config, preparedGesture(gesturesToAttach[2]).ALLOWED_PROPS, obj3.extractGestureRelations(nextResult)));
        continue;
      }
      const result = preparedGesture(gesturesToAttach[4]).scheduleFlushOperations();
      const obj4 = preparedGesture(gesturesToAttach[4]);
    }
  });
  const iter2 = gesturesToAttach[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp20 = nextResult1;
    let tmp21 = preparedGesture;
    let tmp22 = gesturesToAttach;
    let ActionType = preparedGesture(gesturesToAttach[6]).ActionType;
    let tmp7 = gestureConfig;
    let tmp8 = gesturesToAttach;
    let tmp6 = nextResult1.shouldUseReanimated ? ActionType.REANIMATED_WORKLET : ActionType.JS_FUNCTION_NEW_API;
    let obj3 = gestureConfig(gesturesToAttach[3]);
    let tmp9 = nextResult1;
    let tmp10 = viewTag;
    let attachGestureHandlerResult = obj3.attachGestureHandler(tmp20.handlerTag, viewTag, tmp6);
    let tmp12 = preparedGesture;
    let MountRegistry = preparedGesture(gesturesToAttach[7]).MountRegistry;
    let gestureWillMountResult = MountRegistry.gestureWillMount(tmp20);
    continue;
  }
  preparedGesture.attachedGestures = gesturesToAttach;
  if (preparedGesture.animatedHandlers) {
    const found = gesturesToAttach.filter(function isAnimatedGesture(shouldUseReanimated) {
      return shouldUseReanimated.shouldUseReanimated;
    });
    preparedGesture.animatedHandlers.value = found.map((handlers) => handlers.handlers);
  }
};
