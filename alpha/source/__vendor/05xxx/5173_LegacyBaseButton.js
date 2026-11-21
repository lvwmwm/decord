// Module ID: 5173
// Function ID: 5174
// Name: LegacyBaseButton
// Dependencies: [5174, 5181, 5296, 5298, 5299, 5301, 5313, 5314, 5320, 5297, 5214, 5212, 5198, 5303, 5211, 5216, 5210, 5321, 5322, 5199, 5323, 5324, 5178]

// Module 5173 (LegacyBaseButton)
import State from "State" /* 5178 */;
import BaseButton from "BaseButton" /* 5181 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5198 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5199 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5210 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5211 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5212 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5214 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5216 */;
import LegacyRawButton from "LegacyRawButton" /* 5296 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5297 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5298 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5299 */;
import _modDef5301 from "module_5301" /* 5301 */;
import GestureObjects from "GestureObjects" /* 5303 */;
import LegacyText from "LegacyText" /* 5313 */;
import _mod5314 from "module_5314" /* 5314 */;
import Directions from "Directions" /* 5320 */;
import createHandler from "createHandler" /* 5321 */;
import createHandler2 from "createHandler" /* 5322 */;
import HoverEffect from "HoverEffect" /* 5323 */;
import PointerType from "PointerType" /* 5324 */;
import initialize_mod from "initialize" /* 5174 */;

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
export const LegacyPressable = _modDef5301;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5314.TouchableHighlight;
export const TouchableNativeFeedback = _mod5314.TouchableNativeFeedback;
export const TouchableOpacity = _mod5314.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5314.TouchableWithoutFeedback;
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
