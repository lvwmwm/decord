// Module ID: 6134
// Function ID: 6135
// Name: maybeExtractNativeEvent
// Dependencies: [6135, 6137, 6136, 6124, 6123, 6133]

// Module 6134 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6123 */;
import allowedNativeProps from "allowedNativeProps" /* 6124 */;
import _mod6133 from "module_6133" /* 6133 */;
import _mod6135 from "module_6135" /* 6135 */;
import _mod6136 from "module_6136" /* 6136 */;
import _mod6137 from "module_6137" /* 6137 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6135.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6135.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6135.useClonedAndRemappedConfig;
export const runCallback = _mod6137.runCallback;
export const touchEventTypeToCallbackType = _mod6137.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6137.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6136.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6136.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6136.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6136.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6136.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6136.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6136.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6133.containsDuplicates;
export const isComposedGesture = _mod6133.isComposedGesture;
export const prepareRelations = _mod6133.prepareRelations;
