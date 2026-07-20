// Module ID: 5036
// Function ID: 42940
// Name: attachHandlers
// Dependencies: []
// Exports: attachHandlers

// Module 5036 (attachHandlers)
const Platform = require(dependencyMap[0]).Platform;

export const attachHandlers = function attachHandlers(preparedGesture) {
  let handlerName;
  let handlerTag;
  let viewTag;
  let webEventHandlersRef;
  preparedGesture = preparedGesture.preparedGesture;
  const require = preparedGesture;
  const gestureConfig = preparedGesture.gestureConfig;
  const importDefault = gestureConfig;
  const gesturesToAttach = preparedGesture.gesturesToAttach;
  const dependencyMap = gesturesToAttach;
  ({ viewTag, webEventHandlersRef } = preparedGesture);
  gestureConfig.initialize();
  require(dependencyMap[1]).ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      gestureConfig.prepare();
    }
  });
  const iter = gesturesToAttach[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp14 = require;
    let tmp15 = dependencyMap;
    let obj4 = require(dependencyMap[2]);
    let result = obj4.checkGestureCallbacksForWorklets(nextResult);
    let tmp17 = importDefault;
    let obj5 = importDefault(dependencyMap[3]);
    ({ handlerName, handlerTag } = nextResult);
    let obj6 = require(dependencyMap[4]);
    let gestureHandler = obj5.createGestureHandler(handlerName, handlerTag, obj6.filterConfig(nextResult.config, require(dependencyMap[2]).ALLOWED_PROPS));
    let obj7 = require(dependencyMap[5]);
    let registerHandlerResult = obj7.registerHandler(nextResult.handlerTag, nextResult, nextResult.config.testId);
    // continue
  }
  const obj = require(dependencyMap[1]);
  require(dependencyMap[1]).ghQueueMicrotask(() => {
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
        // continue
      }
      const result = preparedGesture(gesturesToAttach[4]).scheduleFlushOperations();
      const obj4 = preparedGesture(gesturesToAttach[4]);
    }
  });
  const iter2 = gesturesToAttach[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp20 = nextResult1;
    let tmp21 = require;
    let tmp22 = dependencyMap;
    let ActionType = require(dependencyMap[6]).ActionType;
    let tmp7 = importDefault;
    let tmp8 = dependencyMap;
    let tmp6 = nextResult1.shouldUseReanimated ? ActionType.REANIMATED_WORKLET : ActionType.JS_FUNCTION_NEW_API;
    let obj3 = importDefault(dependencyMap[3]);
    let tmp9 = nextResult1;
    let tmp10 = viewTag;
    let attachGestureHandlerResult = obj3.attachGestureHandler(tmp20.handlerTag, viewTag, tmp6);
    let tmp12 = require;
    let MountRegistry = require(dependencyMap[7]).MountRegistry;
    let gestureWillMountResult = MountRegistry.gestureWillMount(tmp20);
    // continue
  }
  preparedGesture.attachedGestures = gesturesToAttach;
  if (preparedGesture.animatedHandlers) {
    const found = gesturesToAttach.filter(function isAnimatedGesture(shouldUseReanimated) {
      return shouldUseReanimated.shouldUseReanimated;
    });
    preparedGesture.animatedHandlers.value = found.map((handlers) => handlers.handlers);
  }
};
