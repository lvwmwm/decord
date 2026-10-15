// Module ID: 6623
// Function ID: 6624
// Name: maybeExtractNativeEvent
// Dependencies: [6624, 6626, 6625, 6613, 6612, 6622]

// Module 6623 (maybeExtractNativeEvent)
import SHARED_VALUE_OFFSET from "SHARED_VALUE_OFFSET" /* 6612 */;
import allowedNativeProps from "allowedNativeProps" /* 6613 */;
import _mod6622 from "module_6622" /* 6622 */;
import _mod6624 from "module_6624" /* 6624 */;
import _mod6625 from "module_6625" /* 6625 */;
import _mod6626 from "module_6626" /* 6626 */;

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6624.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6624.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6624.useClonedAndRemappedConfig;
export const runCallback = _mod6626.runCallback;
export const touchEventTypeToCallbackType = _mod6626.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6626.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6625.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6625.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6625.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6625.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6625.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6625.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6625.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6622.containsDuplicates;
export const isComposedGesture = _mod6622.isComposedGesture;
export const prepareRelations = _mod6622.prepareRelations;
