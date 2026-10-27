// Module ID: 5366
// Function ID: 5367
// Name: maybeExtractNativeEvent
// Dependencies: [5367, 5369, 5368, 5356, 5355, 5365]

// Module 5366 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5355 */;
import allowedNativeProps from "allowedNativeProps" /* 5356 */;
import _mod5365 from "module_5365" /* 5365 */;
import _mod5367 from "module_5367" /* 5367 */;
import _mod5368 from "module_5368" /* 5368 */;
import _mod5369 from "module_5369" /* 5369 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5367.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5367.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5367.useClonedAndRemappedConfig;
export const runCallback = _mod5369.runCallback;
export const touchEventTypeToCallbackType = _mod5369.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5369.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5368.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5368.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5368.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5368.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5368.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5368.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5368.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5365.containsDuplicates;
export const isComposedGesture = _mod5365.isComposedGesture;
export const prepareRelations = _mod5365.prepareRelations;
