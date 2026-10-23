// Module ID: 5295
// Function ID: 5296
// Name: LegacyBaseButton
// Dependencies: [5296, 5297, 5304, 5408, 5410, 5411, 5413, 5425, 5426, 5432, 5409, 5335, 5333, 5320, 5415, 5336, 5332, 5337, 5331, 5433, 5434, 5321, 5435, 5301]

// Module 5295 (LegacyBaseButton)
import State from "State" /* 5301 */;
import BaseButton from "BaseButton" /* 5304 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5320 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5321 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5331 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5332 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5333 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5335 */;
import HoverEffect from "HoverEffect" /* 5336 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5337 */;
import LegacyRawButton from "LegacyRawButton" /* 5408 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5409 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5410 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5411 */;
import _modDef5413 from "module_5413" /* 5413 */;
import GestureObjects from "GestureObjects" /* 5415 */;
import LegacyText from "LegacyText" /* 5425 */;
import _mod5426 from "module_5426" /* 5426 */;
import Directions from "Directions" /* 5432 */;
import createHandler from "createHandler" /* 5433 */;
import createHandler2 from "createHandler" /* 5434 */;
import PointerType from "PointerType" /* 5435 */;
import module_5296 from "module_5296" /* 5296 */;
import initialize_mod from "initialize" /* 5297 */;

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
export const LegacyPressable = _modDef5413;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5426.TouchableHighlight;
export const TouchableNativeFeedback = _mod5426.TouchableNativeFeedback;
export const TouchableOpacity = _mod5426.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5426.TouchableWithoutFeedback;
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
