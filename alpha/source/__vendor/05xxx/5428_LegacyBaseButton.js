// Module ID: 5428
// Function ID: 5429
// Name: LegacyBaseButton
// Dependencies: [5429, 5436, 5551, 5553, 5554, 5556, 5568, 5569, 5575, 5552, 5469, 5467, 5453, 5558, 5466, 5471, 5465, 5576, 5577, 5454, 5578, 5579, 5433]

// Module 5428 (LegacyBaseButton)
import State from "State" /* 5433 */;
import BaseButton from "BaseButton" /* 5436 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5453 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5454 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5465 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5466 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5467 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5469 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5471 */;
import LegacyRawButton from "LegacyRawButton" /* 5551 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5552 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5553 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5554 */;
import _modDef5556 from "module_5556" /* 5556 */;
import GestureObjects from "GestureObjects" /* 5558 */;
import LegacyText from "LegacyText" /* 5568 */;
import _mod5569 from "module_5569" /* 5569 */;
import Directions from "Directions" /* 5575 */;
import createHandler from "createHandler" /* 5576 */;
import createHandler2 from "createHandler" /* 5577 */;
import HoverEffect from "HoverEffect" /* 5578 */;
import PointerType from "PointerType" /* 5579 */;
import initialize_mod from "initialize" /* 5429 */;

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
export const LegacyPressable = _modDef5556;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5569.TouchableHighlight;
export const TouchableNativeFeedback = _mod5569.TouchableNativeFeedback;
export const TouchableOpacity = _mod5569.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5569.TouchableWithoutFeedback;
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
