// Module ID: 5125
// Function ID: 5126
// Dependencies: [5126, 5128, 5127, 5115, 5114, 5124]

// Module 5125
import reanimatedUtils from "reanimatedUtils" /* 5114 */;
import allowedNativeProps from "allowedNativeProps" /* 5115 */;
import _mod5124 from "module_5124" /* 5124 */;
import prepareConfigForNativeSide from "prepareConfigForNativeSide" /* 5126 */;
import eventUtils from "eventUtils" /* 5127 */;
import _mod5128 from "module_5128" /* 5128 */;

const prepareConfigForNativeSide_export = prepareConfigForNativeSide.prepareConfigForNativeSide;
const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = prepareConfigForNativeSide.isGestureEnabled;
export { prepareConfigForNativeSide_export as prepareConfigForNativeSide };
export const useClonedAndRemappedConfig = prepareConfigForNativeSide.useClonedAndRemappedConfig;
export const runCallback = _mod5128.runCallback;
export const touchEventTypeToCallbackType = _mod5128.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5128.useMemoizedGestureCallbacks;
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
export const containsDuplicates = _mod5124.containsDuplicates;
export const isComposedGesture = _mod5124.isComposedGesture;
export const prepareRelations = _mod5124.prepareRelations;
