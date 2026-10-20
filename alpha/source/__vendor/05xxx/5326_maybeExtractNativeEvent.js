// Module ID: 5326
// Function ID: 5327
// Name: maybeExtractNativeEvent
// Dependencies: [5327, 5329, 5328, 5316, 5315, 5325]

// Module 5326 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5315 */;
import allowedNativeProps from "allowedNativeProps" /* 5316 */;
import _mod5325 from "module_5325" /* 5325 */;
import _mod5327 from "module_5327" /* 5327 */;
import _mod5328 from "module_5328" /* 5328 */;
import _mod5329 from "module_5329" /* 5329 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5327.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5327.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5327.useClonedAndRemappedConfig;
export const runCallback = _mod5329.runCallback;
export const touchEventTypeToCallbackType = _mod5329.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5329.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5328.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5328.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5328.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5328.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5328.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5328.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5328.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5325.containsDuplicates;
export const isComposedGesture = _mod5325.isComposedGesture;
export const prepareRelations = _mod5325.prepareRelations;
