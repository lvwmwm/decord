// Module ID: 5365
// Function ID: 5366
// Name: maybeExtractNativeEvent
// Dependencies: [5366, 5368, 5367, 5355, 5354, 5364]

// Module 5365 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5354 */;
import allowedNativeProps from "allowedNativeProps" /* 5355 */;
import _mod5364 from "module_5364" /* 5364 */;
import _mod5366 from "module_5366" /* 5366 */;
import _mod5367 from "module_5367" /* 5367 */;
import _mod5368 from "module_5368" /* 5368 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5366.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5366.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5366.useClonedAndRemappedConfig;
export const runCallback = _mod5368.runCallback;
export const touchEventTypeToCallbackType = _mod5368.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5368.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5367.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5367.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5367.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5367.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5367.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5367.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5367.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5364.containsDuplicates;
export const isComposedGesture = _mod5364.isComposedGesture;
export const prepareRelations = _mod5364.prepareRelations;
