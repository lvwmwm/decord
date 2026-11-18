// Module ID: 5083
// Function ID: 5084
// Name: LegacyBaseButton
// Dependencies: [5084, 5091, 5206, 5208, 5209, 5211, 5223, 5224, 5230, 5207, 5124, 5122, 5108, 5213, 5121, 5126, 5120, 5231, 5232, 5109, 5233, 5234, 5088]

// Module 5083 (LegacyBaseButton)
import State from "State" /* 5088 */;
import BaseButton from "BaseButton" /* 5091 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5108 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5109 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5120 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5121 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5122 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5124 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5126 */;
import LegacyRawButton from "LegacyRawButton" /* 5206 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5207 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5208 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5209 */;
import _modDef5211 from "module_5211" /* 5211 */;
import GestureObjects from "GestureObjects" /* 5213 */;
import LegacyText from "LegacyText" /* 5223 */;
import _mod5224 from "module_5224" /* 5224 */;
import Directions from "Directions" /* 5230 */;
import createHandler from "createHandler" /* 5231 */;
import createHandler2 from "createHandler" /* 5232 */;
import HoverEffect from "HoverEffect" /* 5233 */;
import PointerType from "PointerType" /* 5234 */;
import initialize_mod from "initialize" /* 5084 */;

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
export const LegacyPressable = _modDef5211;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5224.TouchableHighlight;
export const TouchableNativeFeedback = _mod5224.TouchableNativeFeedback;
export const TouchableOpacity = _mod5224.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5224.TouchableWithoutFeedback;
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
