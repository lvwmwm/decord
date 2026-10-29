// Module ID: 5402
// Function ID: 5403
// Name: maybeExtractNativeEvent
// Dependencies: [5403, 5405, 5404, 5392, 5391, 5401]

// Module 5402 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5391 */;
import allowedNativeProps from "allowedNativeProps" /* 5392 */;
import _mod5401 from "module_5401" /* 5401 */;
import _mod5403 from "module_5403" /* 5403 */;
import _mod5404 from "module_5404" /* 5404 */;
import _mod5405 from "module_5405" /* 5405 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5403.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5403.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5403.useClonedAndRemappedConfig;
export const runCallback = _mod5405.runCallback;
export const touchEventTypeToCallbackType = _mod5405.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5405.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5404.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5404.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5404.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5404.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5404.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5404.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5404.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5401.containsDuplicates;
export const isComposedGesture = _mod5401.isComposedGesture;
export const prepareRelations = _mod5401.prepareRelations;
