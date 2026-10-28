// Module ID: 5401
// Function ID: 5402
// Name: maybeExtractNativeEvent
// Dependencies: [5402, 5404, 5403, 5391, 5390, 5400]

// Module 5401 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5390 */;
import allowedNativeProps from "allowedNativeProps" /* 5391 */;
import _mod5400 from "module_5400" /* 5400 */;
import _mod5402 from "module_5402" /* 5402 */;
import _mod5403 from "module_5403" /* 5403 */;
import _mod5404 from "module_5404" /* 5404 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5402.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5402.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5402.useClonedAndRemappedConfig;
export const runCallback = _mod5404.runCallback;
export const touchEventTypeToCallbackType = _mod5404.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5404.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5403.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5403.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5403.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5403.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5403.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5403.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5403.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5400.containsDuplicates;
export const isComposedGesture = _mod5400.isComposedGesture;
export const prepareRelations = _mod5400.prepareRelations;
