// Module ID: 6627
// Function ID: 6628
// Name: maybeExtractNativeEvent
// Dependencies: [6628, 6630, 6629, 6617, 6616, 6626]

// Module 6627 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6616 */;
import allowedNativeProps from "allowedNativeProps" /* 6617 */;
import _mod6626 from "module_6626" /* 6626 */;
import _mod6628 from "module_6628" /* 6628 */;
import _mod6629 from "module_6629" /* 6629 */;
import _mod6630 from "module_6630" /* 6630 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6628.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6628.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6628.useClonedAndRemappedConfig;
export const runCallback = _mod6630.runCallback;
export const touchEventTypeToCallbackType = _mod6630.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6630.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6629.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6629.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6629.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6629.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6629.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6629.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6629.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6626.containsDuplicates;
export const isComposedGesture = _mod6626.isComposedGesture;
export const prepareRelations = _mod6626.prepareRelations;
