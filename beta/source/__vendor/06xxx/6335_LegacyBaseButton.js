// Module ID: 6335
// Function ID: 6336
// Name: LegacyBaseButton
// Dependencies: [6336, 6337, 6344, 6448, 6450, 6451, 6453, 6465, 6466, 6472, 6449, 6375, 6373, 6360, 6455, 6376, 6372, 6377, 6371, 6473, 6474, 6361, 6475, 6341]

// Module 6335 (LegacyBaseButton)
import State from "State" /* 6341 */;
import BaseButton from "BaseButton" /* 6344 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6360 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6361 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6371 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6372 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6373 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6375 */;
import HoverEffect from "HoverEffect" /* 6376 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6377 */;
import LegacyRawButton from "LegacyRawButton" /* 6448 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6449 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6450 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6451 */;
import _modDef6453 from "module_6453" /* 6453 */;
import GestureObjects from "GestureObjects" /* 6455 */;
import LegacyText from "LegacyText" /* 6465 */;
import _mod6466 from "module_6466" /* 6466 */;
import Directions from "Directions" /* 6472 */;
import createHandler from "createHandler" /* 6473 */;
import createHandler2 from "createHandler" /* 6474 */;
import PointerType from "PointerType" /* 6475 */;
import module_6336 from "module_6336" /* 6336 */;
import initialize_mod from "initialize" /* 6337 */;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in BaseButton) {
  exports[key10019] = BaseButton[key10019];
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
export const LegacyPressable = _modDef6453;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6466.TouchableHighlight;
export const TouchableNativeFeedback = _mod6466.TouchableNativeFeedback;
export const TouchableOpacity = _mod6466.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6466.TouchableWithoutFeedback;
export { Directions_export as Directions };
export const legacy_createNativeWrapper = createNativeWrapperDefault;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = forceTouchGestureHandlerProps.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export { HoverEffect_export as HoverEffect };
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = panGestureHandlerProps.PanGestureHandler;
export const PinchGestureHandler = createHandler.PinchGestureHandler;
export const RotationGestureHandler = createHandler2.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export { PointerType_export as PointerType };
export { State_export as State };
