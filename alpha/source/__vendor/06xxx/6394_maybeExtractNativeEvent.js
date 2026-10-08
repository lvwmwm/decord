// Module ID: 6394
// Function ID: 6395
// Name: maybeExtractNativeEvent
// Dependencies: [6395, 6397, 6396, 6384, 6383, 6393]

// Module 6394 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6383 */;
import allowedNativeProps from "allowedNativeProps" /* 6384 */;
import _mod6393 from "module_6393" /* 6393 */;
import _mod6395 from "module_6395" /* 6395 */;
import _mod6396 from "module_6396" /* 6396 */;
import _mod6397 from "module_6397" /* 6397 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6395.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6395.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6395.useClonedAndRemappedConfig;
export const runCallback = _mod6397.runCallback;
export const touchEventTypeToCallbackType = _mod6397.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6397.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6396.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6396.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6396.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6396.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6396.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6396.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6396.shouldHandleTouchEvents;
export { allowedNativeProps_export as allowedNativeProps };
export const EMPTY_WHITE_LIST = allowedNativeProps.EMPTY_WHITE_LIST;
export const HandlerCallbacks = allowedNativeProps.HandlerCallbacks;
export const NativeWrapperProps = allowedNativeProps.NativeWrapperProps;
export const PropsToFilter = allowedNativeProps.PropsToFilter;
export const PropsWhiteLists = allowedNativeProps.PropsWhiteLists;
export const bindSharedValues = SHARED_VALUE_OFFSET.bindSharedValues;
export const hasWorkletEventHandlers = SHARED_VALUE_OFFSET.hasWorkletEventHandlers;
export const maybeUnpackValue = SHARED_VALUE_OFFSET.maybeUnpackValue;
export const unbindSharedValues = SHARED_VALUE_OFFSET.unbindSharedValues;
export const containsDuplicates = _mod6393.containsDuplicates;
export const isComposedGesture = _mod6393.isComposedGesture;
export const prepareRelations = _mod6393.prepareRelations;
