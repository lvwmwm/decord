// Module ID: 5397
// Function ID: 5398
// Name: maybeExtractNativeEvent
// Dependencies: [5398, 5400, 5399, 5387, 5386, 5396]

// Module 5397 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5386 */;
import allowedNativeProps from "allowedNativeProps" /* 5387 */;
import _mod5396 from "module_5396" /* 5396 */;
import _mod5398 from "module_5398" /* 5398 */;
import _mod5399 from "module_5399" /* 5399 */;
import _mod5400 from "module_5400" /* 5400 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5398.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5398.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5398.useClonedAndRemappedConfig;
export const runCallback = _mod5400.runCallback;
export const touchEventTypeToCallbackType = _mod5400.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5400.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5399.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5399.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5399.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5399.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5399.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5399.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5399.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5396.containsDuplicates;
export const isComposedGesture = _mod5396.isComposedGesture;
export const prepareRelations = _mod5396.prepareRelations;
