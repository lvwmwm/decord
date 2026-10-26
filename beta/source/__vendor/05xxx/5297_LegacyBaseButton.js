// Module ID: 5297
// Function ID: 5298
// Name: LegacyBaseButton
// Dependencies: [5298, 5299, 5306, 5410, 5412, 5413, 5415, 5427, 5428, 5434, 5411, 5337, 5335, 5322, 5417, 5338, 5334, 5339, 5333, 5435, 5436, 5323, 5437, 5303]

// Module 5297 (LegacyBaseButton)
import State from "State" /* 5303 */;
import BaseButton from "BaseButton" /* 5306 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5322 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5323 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5333 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5334 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5335 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5337 */;
import HoverEffect from "HoverEffect" /* 5338 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5339 */;
import LegacyRawButton from "LegacyRawButton" /* 5410 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5411 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5412 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5413 */;
import _modDef5415 from "module_5415" /* 5415 */;
import GestureObjects from "GestureObjects" /* 5417 */;
import LegacyText from "LegacyText" /* 5427 */;
import _mod5428 from "module_5428" /* 5428 */;
import Directions from "Directions" /* 5434 */;
import createHandler from "createHandler" /* 5435 */;
import createHandler2 from "createHandler" /* 5436 */;
import PointerType from "PointerType" /* 5437 */;
import module_5298 from "module_5298" /* 5298 */;
import initialize_mod from "initialize" /* 5299 */;

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
export const LegacyPressable = _modDef5415;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5428.TouchableHighlight;
export const TouchableNativeFeedback = _mod5428.TouchableNativeFeedback;
export const TouchableOpacity = _mod5428.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5428.TouchableWithoutFeedback;
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
