// Module ID: 5351
// Function ID: 5352
// Name: maybeExtractNativeEvent
// Dependencies: [5352, 5354, 5353, 5341, 5340, 5350]

// Module 5351 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5340 */;
import allowedNativeProps from "allowedNativeProps" /* 5341 */;
import _mod5350 from "module_5350" /* 5350 */;
import _mod5352 from "module_5352" /* 5352 */;
import _mod5353 from "module_5353" /* 5353 */;
import _mod5354 from "module_5354" /* 5354 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5352.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5352.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5352.useClonedAndRemappedConfig;
export const runCallback = _mod5354.runCallback;
export const touchEventTypeToCallbackType = _mod5354.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5354.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5353.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5353.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5353.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5353.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5353.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5353.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5353.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5350.containsDuplicates;
export const isComposedGesture = _mod5350.isComposedGesture;
export const prepareRelations = _mod5350.prepareRelations;
