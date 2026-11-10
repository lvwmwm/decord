// Module ID: 5422
// Function ID: 5423
// Name: LegacyBaseButton
// Dependencies: [5423, 5430, 5545, 5547, 5548, 5550, 5562, 5563, 5569, 5546, 5463, 5461, 5447, 5552, 5460, 5465, 5459, 5570, 5571, 5448, 5572, 5573, 5427]

// Module 5422 (LegacyBaseButton)
import State from "State" /* 5427 */;
import BaseButton from "BaseButton" /* 5430 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5447 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5448 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5459 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5460 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5461 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5463 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5465 */;
import LegacyRawButton from "LegacyRawButton" /* 5545 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5546 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5547 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5548 */;
import _modDef5550 from "module_5550" /* 5550 */;
import GestureObjects from "GestureObjects" /* 5552 */;
import LegacyText from "LegacyText" /* 5562 */;
import _mod5563 from "module_5563" /* 5563 */;
import Directions from "Directions" /* 5569 */;
import createHandler from "createHandler" /* 5570 */;
import createHandler2 from "createHandler" /* 5571 */;
import HoverEffect from "HoverEffect" /* 5572 */;
import PointerType from "PointerType" /* 5573 */;
import initialize_mod from "initialize" /* 5423 */;

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
export const LegacyPressable = _modDef5550;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5563.TouchableHighlight;
export const TouchableNativeFeedback = _mod5563.TouchableNativeFeedback;
export const TouchableOpacity = _mod5563.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5563.TouchableWithoutFeedback;
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
