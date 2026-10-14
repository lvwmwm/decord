// Module ID: 6339
// Function ID: 6340
// Name: LegacyBaseButton
// Dependencies: [6340, 6341, 6348, 6452, 6454, 6455, 6457, 6469, 6470, 6476, 6453, 6379, 6377, 6364, 6459, 6380, 6376, 6381, 6375, 6477, 6478, 6365, 6479, 6345]

// Module 6339 (LegacyBaseButton)
import State from "State" /* 6345 */;
import BaseButton from "BaseButton" /* 6348 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6364 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6365 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6375 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6376 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6377 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6379 */;
import HoverEffect from "HoverEffect" /* 6380 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6381 */;
import LegacyRawButton from "LegacyRawButton" /* 6452 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6453 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6454 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6455 */;
import _modDef6457 from "module_6457" /* 6457 */;
import GestureObjects from "GestureObjects" /* 6459 */;
import LegacyText from "LegacyText" /* 6469 */;
import _mod6470 from "module_6470" /* 6470 */;
import Directions from "Directions" /* 6476 */;
import createHandler from "createHandler" /* 6477 */;
import createHandler2 from "createHandler" /* 6478 */;
import PointerType from "PointerType" /* 6479 */;
import module_6340 from "module_6340" /* 6340 */;
import initialize_mod from "initialize" /* 6341 */;

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
export const LegacyPressable = _modDef6457;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6470.TouchableHighlight;
export const TouchableNativeFeedback = _mod6470.TouchableNativeFeedback;
export const TouchableOpacity = _mod6470.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6470.TouchableWithoutFeedback;
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
