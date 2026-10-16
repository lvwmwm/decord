// Module ID: 6625
// Function ID: 6626
// Name: maybeExtractNativeEvent
// Dependencies: [6626, 6628, 6627, 6615, 6614, 6624]

// Module 6625 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6614 */;
import allowedNativeProps from "allowedNativeProps" /* 6615 */;
import _mod6624 from "module_6624" /* 6624 */;
import _mod6626 from "module_6626" /* 6626 */;
import _mod6627 from "module_6627" /* 6627 */;
import _mod6628 from "module_6628" /* 6628 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6626.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6626.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6626.useClonedAndRemappedConfig;
export const runCallback = _mod6628.runCallback;
export const touchEventTypeToCallbackType = _mod6628.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6628.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6627.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6627.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6627.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6627.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6627.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6627.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6627.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6624.containsDuplicates;
export const isComposedGesture = _mod6624.isComposedGesture;
export const prepareRelations = _mod6624.prepareRelations;
