// Module ID: 5054
// Function ID: 5055
// Name: LegacyBaseButton
// Dependencies: [5055, 5062, 5177, 5179, 5180, 5182, 5194, 5195, 5201, 5178, 5095, 5093, 5079, 5184, 5092, 5097, 5091, 5202, 5203, 5080, 5204, 5205, 5059]

// Module 5054 (LegacyBaseButton)
import State from "State" /* 5059 */;
import BaseButton from "BaseButton" /* 5062 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5079 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5080 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5091 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5092 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5093 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5095 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5097 */;
import LegacyRawButton from "LegacyRawButton" /* 5177 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5178 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5179 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5180 */;
import _modDef5182 from "module_5182" /* 5182 */;
import GestureObjects from "GestureObjects" /* 5184 */;
import LegacyText from "LegacyText" /* 5194 */;
import _mod5195 from "module_5195" /* 5195 */;
import Directions from "Directions" /* 5201 */;
import createHandler from "createHandler" /* 5202 */;
import createHandler2 from "createHandler" /* 5203 */;
import HoverEffect from "HoverEffect" /* 5204 */;
import PointerType from "PointerType" /* 5205 */;
import initialize_mod from "initialize" /* 5055 */;

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
export const LegacyPressable = _modDef5182;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5195.TouchableHighlight;
export const TouchableNativeFeedback = _mod5195.TouchableNativeFeedback;
export const TouchableOpacity = _mod5195.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5195.TouchableWithoutFeedback;
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
