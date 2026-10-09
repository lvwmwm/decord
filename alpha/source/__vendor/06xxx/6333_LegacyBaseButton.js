// Module ID: 6333
// Function ID: 6334
// Name: LegacyBaseButton
// Dependencies: [6334, 6335, 6342, 6446, 6448, 6449, 6451, 6463, 6464, 6470, 6447, 6373, 6371, 6358, 6453, 6374, 6370, 6375, 6369, 6471, 6472, 6359, 6473, 6339]

// Module 6333 (LegacyBaseButton)
import State from "State" /* 6339 */;
import BaseButton from "BaseButton" /* 6342 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6358 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6359 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6369 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6370 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6371 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6373 */;
import HoverEffect from "HoverEffect" /* 6374 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6375 */;
import LegacyRawButton from "LegacyRawButton" /* 6446 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6447 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6448 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6449 */;
import _modDef6451 from "module_6451" /* 6451 */;
import GestureObjects from "GestureObjects" /* 6453 */;
import LegacyText from "LegacyText" /* 6463 */;
import _mod6464 from "module_6464" /* 6464 */;
import Directions from "Directions" /* 6470 */;
import createHandler from "createHandler" /* 6471 */;
import createHandler2 from "createHandler" /* 6472 */;
import PointerType from "PointerType" /* 6473 */;
import module_6334 from "module_6334" /* 6334 */;
import initialize_mod from "initialize" /* 6335 */;

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
export const LegacyPressable = _modDef6451;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6464.TouchableHighlight;
export const TouchableNativeFeedback = _mod6464.TouchableNativeFeedback;
export const TouchableOpacity = _mod6464.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6464.TouchableWithoutFeedback;
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
