// Module ID: 6402
// Function ID: 6403
// Name: maybeExtractNativeEvent
// Dependencies: [6403, 6405, 6404, 6392, 6391, 6401]

// Module 6402 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6391 */;
import allowedNativeProps from "allowedNativeProps" /* 6392 */;
import _mod6401 from "module_6401" /* 6401 */;
import _mod6403 from "module_6403" /* 6403 */;
import _mod6404 from "module_6404" /* 6404 */;
import _mod6405 from "module_6405" /* 6405 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6403.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6403.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6403.useClonedAndRemappedConfig;
export const runCallback = _mod6405.runCallback;
export const touchEventTypeToCallbackType = _mod6405.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6405.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6404.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6404.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6404.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6404.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6404.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6404.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6404.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6401.containsDuplicates;
export const isComposedGesture = _mod6401.isComposedGesture;
export const prepareRelations = _mod6401.prepareRelations;
