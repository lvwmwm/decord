// Module ID: 5651
// Function ID: 5652
// Dependencies: [5606, 5539, 5579]
// Exports: useComposedGesture

// Module 5651
import _mod5606 from "module_5606" /* 5606 */;

const require = globalThis.__r;
let _require, dependencyMap, handlerTags;


export function useComposedGesture(type) {
  let _undefined;
  _require = type;
  const substr = [...arguments].slice();
  const flatMapResult = substr.flatMap((type) => {
    const obj = _mod5606;
    if (obj.isComposedGesture(type)) {
      let gestures;
      if (type.type === type) {
        gestures = type.gestures;
      }
      return gestures;
    }
    gestures = [type];
  });
  dependencyMap = flatMapResult;
  const flatMapResult1 = flatMapResult.flatMap((handlerTags) => {
    const obj = type(_undefined[0]);
    if (obj.isComposedGesture(handlerTags)) {
      handlerTags = handlerTags.handlerTags;
    } else {
      handlerTags = [handlerTags.handlerTag];
    }
    return handlerTags;
  });
  let tmp2 = _require;
  const obj2 = require("module_5606");
  if (obj2.containsDuplicates(flatMapResult1)) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const tmp2Result = tmp2(5539);
    const error = new Error(tmp2Result.tagMessage("Each gesture can be used only once in the gesture composition."));
    throw error;
  } else {
    let obj = { shouldUseReanimatedDetector: flatMapResult.some((config) => config.config.shouldUseReanimatedDetector), dispatchesAnimatedEvents: flatMapResult.some((config) => config.config.dispatchesAnimatedEvents) };
    if (obj.shouldUseReanimatedDetector) {
      if (obj.dispatchesAnimatedEvents) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const tmp2Result2 = tmp2(5539);
        const error1 = new Error(tmp2Result2.tagMessage("Composed gestures cannot use both Reanimated and Animated events at the same time."));
        throw error1;
      }
    }
    const Reanimated = tmp2(5579).Reanimated;
    let composedEventHandler;
    if (Reanimated != null) {
      composedEventHandler = Reanimated.useComposedEventHandler(flatMapResult.map((detectorCallbacks) => detectorCallbacks.detectorCallbacks.reanimatedEventHandler || null));
    }
    const found = flatMapResult.filter((detectorCallbacks) => undefined !== detectorCallbacks.detectorCallbacks.animatedEventHandler);
    let animatedEventHandler;
    if (found.length > 0) {
      animatedEventHandler = found[0].detectorCallbacks.animatedEventHandler;
    }
    const obj3 = { handlerTags: flatMapResult1, type, config: obj, detectorCallbacks: obj4, externalSimultaneousHandlers: [], gestures: flatMapResult };
    return obj3;
  }
}
