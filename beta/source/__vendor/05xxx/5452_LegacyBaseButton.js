// Module ID: 5452
// Function ID: 5453
// Name: LegacyBaseButton
// Dependencies: [5453, 5460, 5575, 5577, 5578, 5580, 5592, 5593, 5599, 5576, 5493, 5491, 5477, 5582, 5490, 5495, 5489, 5600, 5601, 5478, 5602, 5603, 5457]

// Module 5452 (LegacyBaseButton)
import State from "State" /* 5457 */;
import BaseButton from "BaseButton" /* 5460 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5477 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5478 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5489 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5490 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5491 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5493 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5495 */;
import LegacyRawButton from "LegacyRawButton" /* 5575 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5576 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5577 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5578 */;
import _modDef5580 from "module_5580" /* 5580 */;
import GestureObjects from "GestureObjects" /* 5582 */;
import LegacyText from "LegacyText" /* 5592 */;
import _mod5593 from "module_5593" /* 5593 */;
import Directions from "Directions" /* 5599 */;
import createHandler from "createHandler" /* 5600 */;
import createHandler2 from "createHandler" /* 5601 */;
import HoverEffect from "HoverEffect" /* 5602 */;
import PointerType from "PointerType" /* 5603 */;
import initialize_mod from "initialize" /* 5453 */;

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
export const LegacyPressable = _modDef5580;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5593.TouchableHighlight;
export const TouchableNativeFeedback = _mod5593.TouchableNativeFeedback;
export const TouchableOpacity = _mod5593.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5593.TouchableWithoutFeedback;
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
