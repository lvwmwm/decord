// Module ID: 6680
// Function ID: 6681
// Name: maybeExtractNativeEvent
// Dependencies: [6681, 6683, 6682, 6670, 6669, 6679]

// Module 6680 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6669 */;
import allowedNativeProps from "allowedNativeProps" /* 6670 */;
import _mod6679 from "module_6679" /* 6679 */;
import _mod6681 from "module_6681" /* 6681 */;
import _mod6682 from "module_6682" /* 6682 */;
import _mod6683 from "module_6683" /* 6683 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6681.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6681.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6681.useClonedAndRemappedConfig;
export const runCallback = _mod6683.runCallback;
export const touchEventTypeToCallbackType = _mod6683.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6683.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6682.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6682.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6682.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6682.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6682.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6682.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6682.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6679.containsDuplicates;
export const isComposedGesture = _mod6679.isComposedGesture;
export const prepareRelations = _mod6679.prepareRelations;
