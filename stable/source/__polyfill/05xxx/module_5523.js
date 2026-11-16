// Module ID: 5523
// Function ID: 5524
// Dependencies: [5524, 5526, 5525, 5513, 5512, 5522]

// Module 5523
import reanimatedUtils from "reanimatedUtils" /* 5512 */;
import allowedNativeProps from "allowedNativeProps" /* 5513 */;
import _mod5522 from "module_5522" /* 5522 */;
import prepareConfigForNativeSide from "prepareConfigForNativeSide" /* 5524 */;
import eventUtils from "eventUtils" /* 5525 */;
import _mod5526 from "module_5526" /* 5526 */;

const prepareConfigForNativeSide_export = prepareConfigForNativeSide.prepareConfigForNativeSide;
const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = prepareConfigForNativeSide.isGestureEnabled;
export { prepareConfigForNativeSide_export as prepareConfigForNativeSide };
export const useClonedAndRemappedConfig = prepareConfigForNativeSide.useClonedAndRemappedConfig;
export const runCallback = _mod5526.runCallback;
export const touchEventTypeToCallbackType = _mod5526.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5526.useMemoizedGestureCallbacks;
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
export const containsDuplicates = _mod5522.containsDuplicates;
export const isComposedGesture = _mod5522.isComposedGesture;
export const prepareRelations = _mod5522.prepareRelations;
