// Module ID: 5501
// Function ID: 5502
// Dependencies: [5502, 5504, 5503, 5491, 5490, 5500]

// Module 5501
import reanimatedUtils from "reanimatedUtils" /* 5490 */;
import allowedNativeProps from "allowedNativeProps" /* 5491 */;
import _mod5500 from "module_5500" /* 5500 */;
import prepareConfigForNativeSide from "prepareConfigForNativeSide" /* 5502 */;
import eventUtils from "eventUtils" /* 5503 */;
import _mod5504 from "module_5504" /* 5504 */;

const prepareConfigForNativeSide_export = prepareConfigForNativeSide.prepareConfigForNativeSide;
const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = prepareConfigForNativeSide.isGestureEnabled;
export { prepareConfigForNativeSide_export as prepareConfigForNativeSide };
export const useClonedAndRemappedConfig = prepareConfigForNativeSide.useClonedAndRemappedConfig;
export const runCallback = _mod5504.runCallback;
export const touchEventTypeToCallbackType = _mod5504.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5504.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = eventUtils.checkMappingForChangeProperties;
export const flattenAndFilterEvent = eventUtils.flattenAndFilterEvent;
export const getChangeEventCalculator = eventUtils.getChangeEventCalculator;
export const isEventForHandlerWithTag = eventUtils.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = eventUtils.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = eventUtils.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = eventUtils.shouldHandleTouchEvents;
export { allowedNativeProps_export as allowedNativeProps };
export const EMPTY_WHITE_LIST = allowedNativeProps.EMPTY_WHITE_LIST;
export const HandlerCallbacks = allowedNativeProps.HandlerCallbacks;
export const NativeWrapperProps = allowedNativeProps.NativeWrapperProps;
export const PropsToFilter = allowedNativeProps.PropsToFilter;
export const PropsWhiteLists = allowedNativeProps.PropsWhiteLists;
export const bindSharedValues = reanimatedUtils.bindSharedValues;
export const hasWorkletEventHandlers = reanimatedUtils.hasWorkletEventHandlers;
export const maybeUnpackValue = reanimatedUtils.maybeUnpackValue;
export const splitSingleOffset = reanimatedUtils.splitSingleOffset;
export const unbindSharedValues = reanimatedUtils.unbindSharedValues;
export const containsDuplicates = _mod5500.containsDuplicates;
export const isComposedGesture = _mod5500.isComposedGesture;
export const prepareRelations = _mod5500.prepareRelations;
