// Module ID: 5244
// Function ID: 5245
// Dependencies: [5245, 5247, 5246, 5234, 5233, 5243]

// Module 5244
import reanimatedUtils from "reanimatedUtils" /* 5233 */;
import allowedNativeProps from "allowedNativeProps" /* 5234 */;
import _mod5243 from "module_5243" /* 5243 */;
import prepareConfigForNativeSide from "prepareConfigForNativeSide" /* 5245 */;
import eventUtils from "eventUtils" /* 5246 */;
import _mod5247 from "module_5247" /* 5247 */;

const prepareConfigForNativeSide_export = prepareConfigForNativeSide.prepareConfigForNativeSide;
const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = prepareConfigForNativeSide.isGestureEnabled;
export { prepareConfigForNativeSide_export as prepareConfigForNativeSide };
export const useClonedAndRemappedConfig = prepareConfigForNativeSide.useClonedAndRemappedConfig;
export const runCallback = _mod5247.runCallback;
export const touchEventTypeToCallbackType = _mod5247.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5247.useMemoizedGestureCallbacks;
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
export const containsDuplicates = _mod5243.containsDuplicates;
export const isComposedGesture = _mod5243.isComposedGesture;
export const prepareRelations = _mod5243.prepareRelations;
