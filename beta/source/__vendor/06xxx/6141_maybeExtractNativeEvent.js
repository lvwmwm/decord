// Module ID: 6141
// Function ID: 6142
// Name: maybeExtractNativeEvent
// Dependencies: [6142, 6144, 6143, 6131, 6130, 6140]

// Module 6141 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6130 */;
import allowedNativeProps from "allowedNativeProps" /* 6131 */;
import _mod6140 from "module_6140" /* 6140 */;
import _mod6142 from "module_6142" /* 6142 */;
import _mod6143 from "module_6143" /* 6143 */;
import _mod6144 from "module_6144" /* 6144 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6142.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6142.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6142.useClonedAndRemappedConfig;
export const runCallback = _mod6144.runCallback;
export const touchEventTypeToCallbackType = _mod6144.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6144.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6143.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6143.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6143.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6143.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6143.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6143.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6143.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6140.containsDuplicates;
export const isComposedGesture = _mod6140.isComposedGesture;
export const prepareRelations = _mod6140.prepareRelations;
