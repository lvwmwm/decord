// Module ID: 5347
// Function ID: 5348
// Name: maybeExtractNativeEvent
// Dependencies: [5348, 5350, 5349, 5337, 5336, 5346]

// Module 5347 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5336 */;
import allowedNativeProps from "allowedNativeProps" /* 5337 */;
import _mod5346 from "module_5346" /* 5346 */;
import _mod5348 from "module_5348" /* 5348 */;
import _mod5349 from "module_5349" /* 5349 */;
import _mod5350 from "module_5350" /* 5350 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5348.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5348.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5348.useClonedAndRemappedConfig;
export const runCallback = _mod5350.runCallback;
export const touchEventTypeToCallbackType = _mod5350.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5350.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5349.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5349.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5349.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5349.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5349.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5349.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5349.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5346.containsDuplicates;
export const isComposedGesture = _mod5346.isComposedGesture;
export const prepareRelations = _mod5346.prepareRelations;
