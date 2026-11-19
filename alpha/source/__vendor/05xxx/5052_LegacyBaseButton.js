// Module ID: 5052
// Function ID: 5053
// Name: LegacyBaseButton
// Dependencies: [5053, 5060, 5175, 5177, 5178, 5180, 5192, 5193, 5199, 5176, 5093, 5091, 5077, 5182, 5090, 5095, 5089, 5200, 5201, 5078, 5202, 5203, 5057]

// Module 5052 (LegacyBaseButton)
import State from "State" /* 5057 */;
import BaseButton from "BaseButton" /* 5060 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5077 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5078 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5089 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5090 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5091 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5093 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5095 */;
import LegacyRawButton from "LegacyRawButton" /* 5175 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5176 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5177 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5178 */;
import _modDef5180 from "module_5180" /* 5180 */;
import GestureObjects from "GestureObjects" /* 5182 */;
import LegacyText from "LegacyText" /* 5192 */;
import _mod5193 from "module_5193" /* 5193 */;
import Directions from "Directions" /* 5199 */;
import createHandler from "createHandler" /* 5200 */;
import createHandler2 from "createHandler" /* 5201 */;
import HoverEffect from "HoverEffect" /* 5202 */;
import PointerType from "PointerType" /* 5203 */;
import initialize_mod from "initialize" /* 5053 */;

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
export const LegacyPressable = _modDef5180;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5193.TouchableHighlight;
export const TouchableNativeFeedback = _mod5193.TouchableNativeFeedback;
export const TouchableOpacity = _mod5193.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5193.TouchableWithoutFeedback;
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
