// Module ID: 5363
// Function ID: 5364
// Name: maybeExtractNativeEvent
// Dependencies: [5364, 5366, 5365, 5353, 5352, 5362]

// Module 5363 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5352 */;
import allowedNativeProps from "allowedNativeProps" /* 5353 */;
import _mod5362 from "module_5362" /* 5362 */;
import _mod5364 from "module_5364" /* 5364 */;
import _mod5365 from "module_5365" /* 5365 */;
import _mod5366 from "module_5366" /* 5366 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5364.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5364.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5364.useClonedAndRemappedConfig;
export const runCallback = _mod5366.runCallback;
export const touchEventTypeToCallbackType = _mod5366.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5366.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5365.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5365.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5365.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5365.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5365.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5365.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5365.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5362.containsDuplicates;
export const isComposedGesture = _mod5362.isComposedGesture;
export const prepareRelations = _mod5362.prepareRelations;
