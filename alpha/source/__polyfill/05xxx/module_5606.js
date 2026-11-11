// Module ID: 5606
// Function ID: 5607
// Dependencies: [5607, 5609, 5608, 5596, 5595, 5605]

// Module 5606
import reanimatedUtils from "reanimatedUtils" /* 5595 */;
import allowedNativeProps from "allowedNativeProps" /* 5596 */;
import _mod5605 from "module_5605" /* 5605 */;
import prepareConfigForNativeSide from "prepareConfigForNativeSide" /* 5607 */;
import eventUtils from "eventUtils" /* 5608 */;
import _mod5609 from "module_5609" /* 5609 */;

const prepareConfigForNativeSide_export = prepareConfigForNativeSide.prepareConfigForNativeSide;
const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = prepareConfigForNativeSide.isGestureEnabled;
export { prepareConfigForNativeSide_export as prepareConfigForNativeSide };
export const useClonedAndRemappedConfig = prepareConfigForNativeSide.useClonedAndRemappedConfig;
export const runCallback = _mod5609.runCallback;
export const touchEventTypeToCallbackType = _mod5609.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod5609.useMemoizedGestureCallbacks;
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
export const containsDuplicates = _mod5605.containsDuplicates;
export const isComposedGesture = _mod5605.isComposedGesture;
export const prepareRelations = _mod5605.prepareRelations;
