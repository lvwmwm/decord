// Module ID: 5492
// Function ID: 5493
// Name: prepareConfigForNativeSide
// Dependencies: [32, 19, 5490, 5480, 5424, 5493, 5464, 5481, 5452]
// Exports: prepareConfigForNativeSide, useClonedAndRemappedConfig

// Module 5492 (prepareConfigForNativeSide)
import react from "react" /* 19 */;
import tagMessage from "tagMessage" /* 5424 */;
import reanimatedUtils from "reanimatedUtils" /* 5480 */;
import allowedNativeProps2 from "allowedNativeProps" /* 5481 */;
import _mod5490 from "module_5490" /* 5490 */;
import eventUtils from "eventUtils" /* 5493 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function resolveInternalConfigProps(disableReanimated) {
  const obj = tagMessage;
  const tmp3 = obj.isTestEnv() && undefined === disableReanimated.disableReanimated;
  if (tmp3) {
    disableReanimated.disableReanimated = true;
  }
  let useAnimated = disableReanimated.useAnimated;
  if (!useAnimated) {
    const tmpResult = eventUtils;
    useAnimated = tmpResult.isNativeAnimatedEvent(disableReanimated.onUpdate);
  }
  disableReanimated.dispatchesAnimatedEvents = useAnimated;
  if (disableReanimated.dispatchesAnimatedEvents) {
    disableReanimated.disableReanimated = true;
  }
  let result = !disableReanimated.disableReanimated && undefined !== tmp(5464).Reanimated;
  if (result) {
    const tmpResult3 = reanimatedUtils;
    result = tmpResult3.hasWorkletEventHandlers(disableReanimated);
  }
  if (result) {
    result = !disableReanimated.dispatchesAnimatedEvents;
  }
  disableReanimated.shouldUseReanimatedDetector = result;
  const tmpResult4 = eventUtils;
  disableReanimated.needsPointerData = tmpResult4.shouldHandleTouchEvents(disableReanimated);
}
const useMemo = react.useMemo;
const map = new Map();
function DEFAULT_PROPS_TRANSFORMER(arg0) {
  return arg0;
}
function isGestureEnabled(gestures) {
  let someResult;
  const obj = _mod5490;
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
export { resolveInternalConfigProps };
export function prepareConfigForNativeSide(c0, shouldUseReanimatedDetector) {
  let first;
  let tmp17;
  const obj = allowedNativeProps2;
  const result = obj.applyProductionTestIDFilter();
  shouldUseReanimatedDetector = shouldUseReanimatedDetector.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    const tmp2Result = reanimatedUtils;
    shouldUseReanimatedDetector = !tmp2Result.maybeUnpackValue(shouldUseReanimatedDetector.runOnJS);
  }
  const obj2 = { dispatchesReanimatedEvents: shouldUseReanimatedDetector };
  const PropsWhiteLists = tmp2(5481).PropsWhiteLists;
  let EMPTY_WHITE_LIST = PropsWhiteLists.get(c0);
  if (EMPTY_WHITE_LIST == null) {
    EMPTY_WHITE_LIST = tmp2(5481).EMPTY_WHITE_LIST;
  }
  const entries = Object.entries(shouldUseReanimatedDetector);
  const tmp11 = entries[Symbol.iterator]();
  while (tmp11 !== undefined) {
    let normalizeHitSlopResult;
    [first, tmp17] = tmp12;
    let tmp16 = first;
    let tmp19 = require;
    let allowedNativeProps = allowedNativeProps2.allowedNativeProps;
    if (!allowedNativeProps.has(first)) {
      if (!EMPTY_WHITE_LIST.has(tmp16)) {
        let PropsToFilter = tmp19(5481).PropsToFilter;
        if (PropsToFilter.has(tmp16)) {
          continue;
        } else {
          let _console = console;
          let tmp19Result = tmp19(5424);
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = " is not a valid property for ";
          let str3 = " and will be ignored.";
          let warnResult = warn(tmp19Result.tagMessage("" + tmp16 + " is not a valid property for " + c0 + " and will be ignored."));
        }
        continue;
      }
      continue;
    }
    let tmp19Result3 = tmp19(5480);
    let maybeUnpackValueResult = tmp19Result3.maybeUnpackValue(tmp17);
    if ("hitSlop" === tmp16) {
      let tmp19Result4 = tmp19(5452);
      normalizeHitSlopResult = tmp19Result4.normalizeHitSlop(maybeUnpackValueResult);
    } else {
      normalizeHitSlopResult = maybeUnpackValueResult;
    }
    obj2[tmp16] = normalizeHitSlopResult;
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
    resolveInternalConfigProps(tmp3);
    return tmp3;
  }, items);
}
