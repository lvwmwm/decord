// Module ID: 5327
// Function ID: 5328
// Dependencies: [32, 19, 5325, 5315, 5328, 5301, 5316, 5263]
// Exports: prepareConfigForNativeSide, resolveInternalConfigProps, useClonedAndRemappedConfig

// Module 5327
import react from "react" /* 19 */;
import Reanimated2 from "Reanimated" /* 5301 */;
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5315 */;
import allowedNativeProps2 from "allowedNativeProps" /* 5316 */;
import _mod5325 from "module_5325" /* 5325 */;
import _mod5328 from "module_5328" /* 5328 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const useMemo = react.useMemo;
const map = new Map();
function DEFAULT_PROPS_TRANSFORMER(arg0) {
  return arg0;
}
function isGestureEnabled(gestures) {
  let someResult;
  const obj = _mod5325;
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    someResult = gestures.some(isGestureEnabled);
  } else {
    const tmpResult = SHARED_VALUE_OFFSET;
    someResult = false !== tmpResult.maybeUnpackValue(gestures.config.enabled);
  }
  return someResult;
}

export { isGestureEnabled };
export const resolveInternalConfigProps = function resolveInternalConfigProps(useAnimated) {
  useAnimated = useAnimated.useAnimated;
  if (!useAnimated) {
    const obj = _mod5328;
    useAnimated = obj.isNativeAnimatedEvent(useAnimated.onUpdate);
  }
  useAnimated.dispatchesAnimatedEvents = useAnimated;
  if (useAnimated.dispatchesAnimatedEvents) {
    useAnimated.disableReanimated = true;
  }
  let result = !useAnimated.disableReanimated && undefined !== Reanimated2.Reanimated;
  if (result) {
    const obj2 = SHARED_VALUE_OFFSET;
    result = obj2.hasWorkletEventHandlers(useAnimated);
  }
  if (result) {
    result = !useAnimated.dispatchesAnimatedEvents;
  }
  useAnimated.shouldUseReanimatedDetector = result;
  const obj3 = _mod5328;
  useAnimated.needsPointerData = obj3.shouldHandleTouchEvents(useAnimated);
};
export const prepareConfigForNativeSide = function prepareConfigForNativeSide(arg0, shouldUseReanimatedDetector) {
  let first;
  let iter;
  shouldUseReanimatedDetector = shouldUseReanimatedDetector.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    const obj = SHARED_VALUE_OFFSET;
    shouldUseReanimatedDetector = !obj.maybeUnpackValue(shouldUseReanimatedDetector.runOnJS);
  }
  const obj2 = { dispatchesReanimatedEvents: shouldUseReanimatedDetector };
  const PropsWhiteLists = allowedNativeProps2.PropsWhiteLists;
  let EMPTY_WHITE_LIST = PropsWhiteLists.get(arg0);
  if (EMPTY_WHITE_LIST == null) {
    EMPTY_WHITE_LIST = allowedNativeProps2.EMPTY_WHITE_LIST;
  }
  const entries = Object.entries(shouldUseReanimatedDetector);
  const tmp12 = entries[Symbol.iterator]();
  while (tmp12 !== undefined) {
    [first, iter] = tmp13;
    let tmp17 = first;
    let tmp19 = require;
    let allowedNativeProps = allowedNativeProps2.allowedNativeProps;
    if (!allowedNativeProps.has(first)) {
      if (!EMPTY_WHITE_LIST.has(tmp17)) {
        let PropsToFilter = tmp19(5316).PropsToFilter;
        if (PropsToFilter.has(tmp17)) {
          continue;
        } else {
          let _console = console;
          let tmp19Result = tmp19(5263);
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = " is not a valid property for ";
          let str3 = " and will be ignored.";
          let warnResult = warn(tmp19Result.tagMessage("" + tmp17 + " is not a valid property for " + arg0 + " and will be ignored."));
        }
        continue;
      }
      continue;
    }
    let Reanimated = tmp19(5301).Reanimated;
    let isSharedValueResult;
    if (Reanimated != null) {
      isSharedValueResult = Reanimated.isSharedValue(iter);
    }
    obj2[tmp17] = isSharedValueResult ? iter.value : iter;
  }
  return obj2;
};
export const useClonedAndRemappedConfig = function useClonedAndRemappedConfig(cResult, map, transformHoverProps) {
  let closure_0 = cResult;
  let tmp = map;
  if (map === undefined) {
    tmp = map;
  }
  let closure_1 = tmp;
  let tmp2 = transformHoverProps;
  if (transformHoverProps === undefined) {
    tmp2 = DEFAULT_PROPS_TRANSFORMER;
  }
  let closure_2 = tmp2;
  const items = [cResult, tmp, tmp2];
  return useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_0);
    const item = closure_1.forEach((item, index) => {
      if (index in obj) {
        obj[item] = obj[index];
        delete obj[tmp];
      }
    });
    const tmp3 = closure_2(obj);
    let useAnimated = tmp3.useAnimated;
    if (!useAnimated) {
      const obj2 = _mod5328;
      useAnimated = obj2.isNativeAnimatedEvent(tmp3.onUpdate);
    }
    tmp3.dispatchesAnimatedEvents = useAnimated;
    if (tmp3.dispatchesAnimatedEvents) {
      tmp3.disableReanimated = true;
    }
    let result = !tmp3.disableReanimated && undefined !== Reanimated2.Reanimated;
    if (result) {
      const obj3 = SHARED_VALUE_OFFSET;
      result = obj3.hasWorkletEventHandlers(tmp3);
    }
    if (result) {
      result = !tmp3.dispatchesAnimatedEvents;
    }
    tmp3.shouldUseReanimatedDetector = result;
    const obj4 = _mod5328;
    tmp3.needsPointerData = obj4.shouldHandleTouchEvents(tmp3);
    return tmp3;
  }, items);
};
