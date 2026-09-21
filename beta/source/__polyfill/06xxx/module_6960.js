// Module ID: 6960
// Function ID: 6961
// Dependencies: [32, 19, 6958, 6948, 6961, 6934, 6949, 6896]
// Exports: prepareConfigForNativeSide, resolveInternalConfigProps, useClonedAndRemappedConfig

// Module 6960
import _mod6934 from "module_6934" /* 6934 */;
import hash from "hash" /* 6948 */;
import allowedNativeProps2 from "allowedNativeProps" /* 6949 */;
import _mod6961 from "module_6961" /* 6961 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const useMemo = fn(19).useMemo;
const map = new Map();
function DEFAULT_PROPS_TRANSFORMER(arg0) {
  return arg0;
}
function isGestureEnabled(gestures) {
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    let someResult = gestures.some(isGestureEnabled);
  } else {
    someResult = false !== hash.maybeUnpackValue(gestures.config.enabled);
    const tmpResult = hash;
  }
  return someResult;
}

export { isGestureEnabled };
export const resolveInternalConfigProps = function resolveInternalConfigProps(useAnimated) {
  useAnimated = useAnimated.useAnimated;
  if (!useAnimated) {
    useAnimated = _mod6961.isNativeAnimatedEvent(useAnimated.onUpdate);
  }
  useAnimated.dispatchesAnimatedEvents = useAnimated;
  if (useAnimated.dispatchesAnimatedEvents) {
    useAnimated.disableReanimated = true;
  }
  const disableReanimated = useAnimated.disableReanimated;
  let result = !disableReanimated;
  if (!disableReanimated) {
    result = undefined !== _mod6934.Reanimated;
  }
  if (result) {
    result = hash.hasWorkletEventHandlers(useAnimated);
  }
  if (result) {
    result = !useAnimated.dispatchesAnimatedEvents;
  }
  useAnimated.shouldUseReanimatedDetector = result;
  useAnimated.needsPointerData = _mod6961.shouldHandleTouchEvents(useAnimated);
};
export const prepareConfigForNativeSide = function prepareConfigForNativeSide(arg0, shouldUseReanimatedDetector) {
  shouldUseReanimatedDetector = shouldUseReanimatedDetector.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    shouldUseReanimatedDetector = !hash.maybeUnpackValue(shouldUseReanimatedDetector.runOnJS);
  }
  const obj2 = { dispatchesReanimatedEvents: shouldUseReanimatedDetector };
  const PropsWhiteLists = allowedNativeProps2.PropsWhiteLists;
  let EMPTY_WHITE_LIST = PropsWhiteLists.get(arg0);
  if (EMPTY_WHITE_LIST == null) {
    EMPTY_WHITE_LIST = allowedNativeProps2.EMPTY_WHITE_LIST;
  }
  const entries = Object.entries(shouldUseReanimatedDetector);
  while (tmp12 !== undefined) {
    [first, iter] = tmp13;
    let tmp17 = first;
    let tmp19 = require;
    let allowedNativeProps = allowedNativeProps2.allowedNativeProps;
    if (!allowedNativeProps.has(first)) {
      if (!EMPTY_WHITE_LIST.has(tmp17)) {
        let PropsToFilter = tmp19(6949).PropsToFilter;
        if (PropsToFilter.has(tmp17)) {
          continue;
        } else {
          let _console = console;
          let tmp19Result = tmp19(6896);
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = " is not a valid property for ";
          let str3 = " and will be ignored.";
          let warnResult = console.warn(tmp19Result.tagMessage("" + tmp17 + " is not a valid property for " + arg0 + " and will be ignored."));
          continue;
        }
        continue;
      }
    }
    let Reanimated = tmp19(6934).Reanimated;
    let isSharedValueResult;
    if (Reanimated != null) {
      isSharedValueResult = Reanimated.isSharedValue(iter);
    }
    obj2[tmp17] = isSharedValueResult ? iter.value : iter;
  }
  return obj2;
};
export const useClonedAndRemappedConfig = function useClonedAndRemappedConfig(cResult, map, transformHoverProps) {
  closure_0 = cResult;
  let tmp = map;
  if (map === undefined) {
    tmp = map;
  }
  closure_1 = tmp;
  let tmp2 = transformHoverProps;
  if (transformHoverProps === undefined) {
    tmp2 = DEFAULT_PROPS_TRANSFORMER;
  }
  closure_2 = tmp2;
  const items = [cResult, tmp, tmp2];
  return useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_0);
    const item = closure_1.forEach((item, index) => {
      if (index in obj) {
        tmp3[item] = tmp3[index];
        delete tmp[tmp2];
      }
    });
    const tmp3 = closure_2(obj);
    let useAnimated = tmp3.useAnimated;
    if (!useAnimated) {
      useAnimated = _mod6961.isNativeAnimatedEvent(tmp3.onUpdate);
    }
    tmp3.dispatchesAnimatedEvents = useAnimated;
    if (tmp3.dispatchesAnimatedEvents) {
      tmp3.disableReanimated = true;
    }
    const disableReanimated = tmp3.disableReanimated;
    let result = !disableReanimated;
    if (!disableReanimated) {
      result = undefined !== _mod6934.Reanimated;
    }
    if (result) {
      result = hash.hasWorkletEventHandlers(tmp3);
    }
    if (result) {
      result = !tmp3.dispatchesAnimatedEvents;
    }
    tmp3.shouldUseReanimatedDetector = result;
    tmp3.needsPointerData = _mod6961.shouldHandleTouchEvents(tmp3);
    return tmp3;
  }, items);
};
