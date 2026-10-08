// Module ID: 6326
// Function ID: 6327
// Name: LegacyBaseButton
// Dependencies: [6327, 6328, 6335, 6439, 6441, 6442, 6444, 6456, 6457, 6463, 6440, 6366, 6364, 6351, 6446, 6367, 6363, 6368, 6362, 6464, 6465, 6352, 6466, 6332]

// Module 6326 (LegacyBaseButton)
import State from "State" /* 6332 */;
import BaseButton from "BaseButton" /* 6335 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6351 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6352 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6362 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6363 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6364 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6366 */;
import HoverEffect from "HoverEffect" /* 6367 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6368 */;
import LegacyRawButton from "LegacyRawButton" /* 6439 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6440 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6441 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6442 */;
import _modDef6444 from "module_6444" /* 6444 */;
import GestureObjects from "GestureObjects" /* 6446 */;
import LegacyText from "LegacyText" /* 6456 */;
import _mod6457 from "module_6457" /* 6457 */;
import Directions from "Directions" /* 6463 */;
import createHandler from "createHandler" /* 6464 */;
import createHandler2 from "createHandler" /* 6465 */;
import PointerType from "PointerType" /* 6466 */;
import module_6327 from "module_6327" /* 6327 */;
import initialize_mod from "initialize" /* 6328 */;

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
export const LegacyPressable = _modDef6444;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6457.TouchableHighlight;
export const TouchableNativeFeedback = _mod6457.TouchableNativeFeedback;
export const TouchableOpacity = _mod6457.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6457.TouchableWithoutFeedback;
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
