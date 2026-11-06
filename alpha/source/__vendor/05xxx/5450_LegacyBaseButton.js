// Module ID: 5450
// Function ID: 5451
// Name: LegacyBaseButton
// Dependencies: [5451, 5458, 5573, 5575, 5576, 5578, 5590, 5591, 5597, 5574, 5491, 5489, 5475, 5580, 5488, 5493, 5487, 5598, 5599, 5476, 5600, 5601, 5455]

// Module 5450 (LegacyBaseButton)
import State from "State" /* 5455 */;
import BaseButton from "BaseButton" /* 5458 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5475 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5476 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5487 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5488 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5489 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5491 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5493 */;
import LegacyRawButton from "LegacyRawButton" /* 5573 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5574 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5575 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5576 */;
import _modDef5578 from "module_5578" /* 5578 */;
import GestureObjects from "GestureObjects" /* 5580 */;
import LegacyText from "LegacyText" /* 5590 */;
import _mod5591 from "module_5591" /* 5591 */;
import Directions from "Directions" /* 5597 */;
import createHandler from "createHandler" /* 5598 */;
import createHandler2 from "createHandler" /* 5599 */;
import HoverEffect from "HoverEffect" /* 5600 */;
import PointerType from "PointerType" /* 5601 */;
import initialize_mod from "initialize" /* 5451 */;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10017 in BaseButton) {
  exports[key10017] = BaseButton[key10017];
  continue;
}
const LegacyRawButton_export = LegacyRawButton.LegacyRawButton;
const LegacyRefreshControl_export = LegacyRefreshControl.LegacyRefreshControl;
const LegacyText_export = LegacyText.LegacyText;
const Directions_export = Directions.Directions;
const HoverEffect_export = HoverEffect.HoverEffect;
const PointerType_export = PointerType.PointerType;
const State_export = State.State;

export const LegacyBaseButton = LegacyRawButton.LegacyBaseButton;
export const LegacyBorderlessButton = LegacyRawButton.LegacyBorderlessButton;
export { LegacyRawButton_export as LegacyRawButton };
export const LegacyRectButton = LegacyRawButton.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyRefreshControl.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyRefreshControl.LegacyFlatList;
export { LegacyRefreshControl_export as LegacyRefreshControl };
export const LegacyScrollView = LegacyRefreshControl.LegacyScrollView;
export const LegacySwitch = LegacyRefreshControl.LegacySwitch;
export const LegacyTextInput = LegacyRefreshControl.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef5578;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5591.TouchableHighlight;
export const TouchableNativeFeedback = _mod5591.TouchableNativeFeedback;
export const TouchableOpacity = _mod5591.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5591.TouchableWithoutFeedback;
export { Directions_export as Directions };
export const legacy_createNativeWrapper = createNativeWrapperDefault;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = forceTouchGestureHandlerProps.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = panGestureHandlerProps.PanGestureHandler;
export const PinchGestureHandler = createHandler.PinchGestureHandler;
export const RotationGestureHandler = createHandler2.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export { HoverEffect_export as HoverEffect };
export { PointerType_export as PointerType };
export { State_export as State };
