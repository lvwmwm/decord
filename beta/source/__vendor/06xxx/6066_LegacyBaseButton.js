// Module ID: 6066
// Function ID: 6067
// Name: LegacyBaseButton
// Dependencies: [6067, 6068, 6075, 6179, 6181, 6182, 6184, 6196, 6197, 6203, 6180, 6106, 6104, 6091, 6186, 6107, 6103, 6108, 6102, 6204, 6205, 6092, 6206, 6072]

// Module 6066 (LegacyBaseButton)
import State from "State" /* 6072 */;
import BaseButton from "BaseButton" /* 6075 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6091 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6092 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6102 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6103 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6104 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6106 */;
import HoverEffect from "HoverEffect" /* 6107 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6108 */;
import LegacyRawButton from "LegacyRawButton" /* 6179 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6180 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6181 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6182 */;
import _modDef6184 from "module_6184" /* 6184 */;
import GestureObjects from "GestureObjects" /* 6186 */;
import LegacyText from "LegacyText" /* 6196 */;
import _mod6197 from "module_6197" /* 6197 */;
import Directions from "Directions" /* 6203 */;
import createHandler from "createHandler" /* 6204 */;
import createHandler2 from "createHandler" /* 6205 */;
import PointerType from "PointerType" /* 6206 */;
import module_6067 from "module_6067" /* 6067 */;
import initialize_mod from "initialize" /* 6068 */;

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
export const LegacyPressable = _modDef6184;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6197.TouchableHighlight;
export const TouchableNativeFeedback = _mod6197.TouchableNativeFeedback;
export const TouchableOpacity = _mod6197.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6197.TouchableWithoutFeedback;
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
