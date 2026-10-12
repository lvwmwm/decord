// Module ID: 6403
// Function ID: 6404
// Name: maybeExtractNativeEvent
// Dependencies: [6404, 6406, 6405, 6393, 6392, 6402]

// Module 6403 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6392 */;
import allowedNativeProps from "allowedNativeProps" /* 6393 */;
import _mod6402 from "module_6402" /* 6402 */;
import _mod6404 from "module_6404" /* 6404 */;
import _mod6405 from "module_6405" /* 6405 */;
import _mod6406 from "module_6406" /* 6406 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6404.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6404.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6404.useClonedAndRemappedConfig;
export const runCallback = _mod6406.runCallback;
export const touchEventTypeToCallbackType = _mod6406.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6406.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6405.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6405.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6405.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6405.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6405.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6405.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6405.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6402.containsDuplicates;
export const isComposedGesture = _mod6402.isComposedGesture;
export const prepareRelations = _mod6402.prepareRelations;
