// Module ID: 6407
// Function ID: 6408
// Name: maybeExtractNativeEvent
// Dependencies: [6408, 6410, 6409, 6397, 6396, 6406]

// Module 6407 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6396 */;
import allowedNativeProps from "allowedNativeProps" /* 6397 */;
import _mod6406 from "module_6406" /* 6406 */;
import _mod6408 from "module_6408" /* 6408 */;
import _mod6409 from "module_6409" /* 6409 */;
import _mod6410 from "module_6410" /* 6410 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6408.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6408.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6408.useClonedAndRemappedConfig;
export const runCallback = _mod6410.runCallback;
export const touchEventTypeToCallbackType = _mod6410.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6410.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6409.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6409.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6409.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6409.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6409.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6409.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6409.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6406.containsDuplicates;
export const isComposedGesture = _mod6406.isComposedGesture;
export const prepareRelations = _mod6406.prepareRelations;
