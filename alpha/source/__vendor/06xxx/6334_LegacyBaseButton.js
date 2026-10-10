// Module ID: 6334
// Function ID: 6335
// Name: LegacyBaseButton
// Dependencies: [6335, 6336, 6343, 6447, 6449, 6450, 6452, 6464, 6465, 6471, 6448, 6374, 6372, 6359, 6454, 6375, 6371, 6376, 6370, 6472, 6473, 6360, 6474, 6340]

// Module 6334 (LegacyBaseButton)
import State from "State" /* 6340 */;
import BaseButton from "BaseButton" /* 6343 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6359 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6360 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6370 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6371 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6372 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6374 */;
import HoverEffect from "HoverEffect" /* 6375 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6376 */;
import LegacyRawButton from "LegacyRawButton" /* 6447 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6448 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6449 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6450 */;
import _modDef6452 from "module_6452" /* 6452 */;
import GestureObjects from "GestureObjects" /* 6454 */;
import LegacyText from "LegacyText" /* 6464 */;
import _mod6465 from "module_6465" /* 6465 */;
import Directions from "Directions" /* 6471 */;
import createHandler from "createHandler" /* 6472 */;
import createHandler2 from "createHandler" /* 6473 */;
import PointerType from "PointerType" /* 6474 */;
import module_6335 from "module_6335" /* 6335 */;
import initialize_mod from "initialize" /* 6336 */;

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
export const LegacyPressable = _modDef6452;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6465.TouchableHighlight;
export const TouchableNativeFeedback = _mod6465.TouchableNativeFeedback;
export const TouchableOpacity = _mod6465.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6465.TouchableWithoutFeedback;
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
