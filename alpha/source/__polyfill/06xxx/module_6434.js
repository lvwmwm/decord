// Module ID: 6434
// Function ID: 6435
// Dependencies: [6394, 6331, 6369]
// Exports: useComposedGesture

// Module 6434
let handlerTags;


export const useComposedGesture = function useComposedGesture(type) {
  const substr = [...arguments].slice();
  const flatMapResult = substr.flatMap((handlerTags) => {
    const obj = substr(dependencyMap[0]);
    if (obj.isComposedGesture(handlerTags)) {
      handlerTags = handlerTags.handlerTags;
    } else {
      handlerTags = [handlerTags.handlerTag];
    }
    return handlerTags;
  });
  let tmp2 = substr;
  let obj = substr(6394);
  if (obj.containsDuplicates(flatMapResult)) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const tmp2Result = tmp2(6331);
    const error = new Error(tmp2Result.tagMessage("Each gesture can be used only once in the gesture composition."));
    throw error;
  } else {
    const obj2 = { shouldUseReanimatedDetector: substr.some((config) => config.config.shouldUseReanimatedDetector), dispatchesAnimatedEvents: substr.some((config) => config.config.dispatchesAnimatedEvents) };
    if (obj2.shouldUseReanimatedDetector) {
      if (obj2.dispatchesAnimatedEvents) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const tmp2Result2 = tmp2(6331);
        const error1 = new Error(tmp2Result2.tagMessage("Composed gestures cannot use both Reanimated and Animated events at the same time."));
        throw error1;
      }
    }
    const Reanimated = tmp2(6369).Reanimated;
    let composedEventHandler;
    if (Reanimated != null) {
      composedEventHandler = Reanimated.useComposedEventHandler(substr.map((detectorCallbacks) => detectorCallbacks.detectorCallbacks.reanimatedEventHandler || null));
    }
    const found = substr.filter((detectorCallbacks) => undefined !== detectorCallbacks.detectorCallbacks.animatedEventHandler);
    let animatedEventHandler;
    if (found.length > 0) {
      animatedEventHandler = found[0].detectorCallbacks.animatedEventHandler;
    }
    const obj3 = { handlerTags: flatMapResult, type, config: obj2, detectorCallbacks: obj4, externalSimultaneousHandlers: [], gestures: substr };
    return obj3;
  }
};
