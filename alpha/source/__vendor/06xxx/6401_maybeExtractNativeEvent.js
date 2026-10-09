// Module ID: 6401
// Function ID: 6402
// Name: maybeExtractNativeEvent
// Dependencies: [6402, 6404, 6403, 6391, 6390, 6400]

// Module 6401 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6390 */;
import allowedNativeProps from "allowedNativeProps" /* 6391 */;
import _mod6400 from "module_6400" /* 6400 */;
import _mod6402 from "module_6402" /* 6402 */;
import _mod6403 from "module_6403" /* 6403 */;
import _mod6404 from "module_6404" /* 6404 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6402.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6402.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6402.useClonedAndRemappedConfig;
export const runCallback = _mod6404.runCallback;
export const touchEventTypeToCallbackType = _mod6404.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6404.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6403.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6403.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6403.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6403.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6403.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6403.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6403.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6400.containsDuplicates;
export const isComposedGesture = _mod6400.isComposedGesture;
export const prepareRelations = _mod6400.prepareRelations;
