// Module ID: 5371
// Function ID: 5372
// Name: maybeExtractNativeEvent
// Dependencies: [5372, 5374, 5373, 5361, 5360, 5370]

// Module 5371 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 5360 */;
import allowedNativeProps from "allowedNativeProps" /* 5361 */;
import _mod5370 from "module_5370" /* 5370 */;
import _mod5372 from "module_5372" /* 5372 */;
import _mod5373 from "module_5373" /* 5373 */;
import _mod5374 from "module_5374" /* 5374 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod5372.isGestureEnabled;
export const prepareConfigForNativeSide = _mod5372.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod5372.useClonedAndRemappedConfig;
export const runCallback = _mod5374.runCallback;
export const touchEventTypeToCallbackType = _mod5374.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5374.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod5373.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod5373.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod5373.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod5373.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod5373.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod5373.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod5373.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod5370.containsDuplicates;
export const isComposedGesture = _mod5370.isComposedGesture;
export const prepareRelations = _mod5370.prepareRelations;
