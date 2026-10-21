// Module ID: 5279
// Function ID: 5280
// Name: LegacyBaseButton
// Dependencies: [5280, 5281, 5288, 5392, 5394, 5395, 5397, 5409, 5410, 5416, 5393, 5319, 5317, 5304, 5399, 5320, 5316, 5321, 5315, 5417, 5418, 5305, 5419, 5285]

// Module 5279 (LegacyBaseButton)
import State from "State" /* 5285 */;
import BaseButton from "BaseButton" /* 5288 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5304 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5305 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5315 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5316 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5317 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5319 */;
import HoverEffect from "HoverEffect" /* 5320 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5321 */;
import LegacyRawButton from "LegacyRawButton" /* 5392 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5393 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5394 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5395 */;
import _modDef5397 from "module_5397" /* 5397 */;
import GestureObjects from "GestureObjects" /* 5399 */;
import LegacyText from "LegacyText" /* 5409 */;
import _mod5410 from "module_5410" /* 5410 */;
import Directions from "Directions" /* 5416 */;
import createHandler from "createHandler" /* 5417 */;
import createHandler2 from "createHandler" /* 5418 */;
import PointerType from "PointerType" /* 5419 */;
import module_5280 from "module_5280" /* 5280 */;
import initialize_mod from "initialize" /* 5281 */;

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
export const LegacyPressable = _modDef5397;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5410.TouchableHighlight;
export const TouchableNativeFeedback = _mod5410.TouchableNativeFeedback;
export const TouchableOpacity = _mod5410.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5410.TouchableWithoutFeedback;
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
