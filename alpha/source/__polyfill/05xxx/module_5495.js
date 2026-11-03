// Module ID: 5495
// Function ID: 5496
// Dependencies: [32, 19, 5493, 5483, 5496, 5469, 5484, 5431]
// Exports: prepareConfigForNativeSide, resolveInternalConfigProps, useClonedAndRemappedConfig

// Module 5495
import react from "react" /* 19 */;
import reanimatedWrapper from "reanimatedWrapper" /* 5469 */;
import reanimatedUtils from "reanimatedUtils" /* 5483 */;
import allowedNativeProps2 from "allowedNativeProps" /* 5484 */;
import _mod5493 from "module_5493" /* 5493 */;
import eventUtils from "eventUtils" /* 5496 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const useMemo = react.useMemo;
const map = new Map();
function DEFAULT_PROPS_TRANSFORMER(arg0) {
  return arg0;
}
function isGestureEnabled(gestures) {
  let someResult;
  const obj = _mod5493;
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    someResult = gestures.some(isGestureEnabled);
  } else {
    const tmpResult = reanimatedUtils;
    someResult = false !== tmpResult.maybeUnpackValue(gestures.config.enabled);
  }
  return someResult;
}

export { isGestureEnabled };
export function resolveInternalConfigProps(useAnimated) {
  useAnimated = useAnimated.useAnimated;
  if (!useAnimated) {
    const obj = eventUtils;
    useAnimated = obj.isNativeAnimatedEvent(useAnimated.onUpdate);
  }
  useAnimated.dispatchesAnimatedEvents = useAnimated;
  if (useAnimated.dispatchesAnimatedEvents) {
    useAnimated.disableReanimated = true;
  }
  let result = !useAnimated.disableReanimated && undefined !== reanimatedWrapper.Reanimated;
  if (result) {
    const obj2 = reanimatedUtils;
    result = obj2.hasWorkletEventHandlers(useAnimated);
  }
  if (result) {
    result = !useAnimated.dispatchesAnimatedEvents;
  }
  useAnimated.shouldUseReanimatedDetector = result;
  const obj3 = eventUtils;
  useAnimated.needsPointerData = obj3.shouldHandleTouchEvents(useAnimated);
}
export function prepareConfigForNativeSide(arg0, shouldUseReanimatedDetector) {
  let first;
  let iter;
  shouldUseReanimatedDetector = shouldUseReanimatedDetector.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    const obj = reanimatedUtils;
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
        let PropsToFilter = tmp19(5484).PropsToFilter;
        if (PropsToFilter.has(tmp17)) {
          continue;
        } else {
          let _console = console;
          let tmp19Result = tmp19(5431);
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
    let Reanimated = tmp19(5469).Reanimated;
    let isSharedValueResult;
    if (Reanimated != null) {
      isSharedValueResult = Reanimated.isSharedValue(iter);
    }
    obj2[tmp17] = isSharedValueResult ? iter.value : iter;
  }
  return obj2;
}
export function useClonedAndRemappedConfig(gestureHandlerProps, map, transformHoverProps) {
  let closure_0 = gestureHandlerProps;
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
  const items = [gestureHandlerProps, tmp, tmp2];
  return useMemo(() => {
    const obj = {};
    const merged = Object.assign(gestureHandlerProps);
    const item = closure_1.forEach((item, index) => {
      if (index in obj) {
        obj[item] = obj[index];
        delete obj[tmp];
      }
    });
    const tmp3 = closure_2(obj);
    let useAnimated = tmp3.useAnimated;
    if (!useAnimated) {
      const obj2 = eventUtils;
      useAnimated = obj2.isNativeAnimatedEvent(tmp3.onUpdate);
    }
    tmp3.dispatchesAnimatedEvents = useAnimated;
    if (tmp3.dispatchesAnimatedEvents) {
      tmp3.disableReanimated = true;
    }
    let result = !tmp3.disableReanimated && undefined !== reanimatedWrapper.Reanimated;
    if (result) {
      const obj3 = reanimatedUtils;
      result = obj3.hasWorkletEventHandlers(tmp3);
    }
    if (result) {
      result = !tmp3.dispatchesAnimatedEvents;
    }
    tmp3.shouldUseReanimatedDetector = result;
    const obj4 = eventUtils;
    tmp3.needsPointerData = obj4.shouldHandleTouchEvents(tmp3);
    return tmp3;
  }, items);
}
