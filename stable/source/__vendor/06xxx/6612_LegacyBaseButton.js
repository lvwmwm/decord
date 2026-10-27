// Module ID: 6612
// Function ID: 6613
// Name: LegacyBaseButton
// Dependencies: [6613, 6614, 6621, 6725, 6727, 6728, 6730, 6742, 6743, 6749, 6726, 6652, 6650, 6637, 6732, 6653, 6649, 6654, 6648, 6750, 6751, 6638, 6752, 6618]

// Module 6612 (LegacyBaseButton)
import State from "State" /* 6618 */;
import BaseButton from "BaseButton" /* 6621 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6637 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6638 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6648 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6649 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6650 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6652 */;
import HoverEffect from "HoverEffect" /* 6653 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6654 */;
import LegacyRawButton from "LegacyRawButton" /* 6725 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6726 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6727 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6728 */;
import _modDef6730 from "module_6730" /* 6730 */;
import GestureObjects from "GestureObjects" /* 6732 */;
import LegacyText from "LegacyText" /* 6742 */;
import _mod6743 from "module_6743" /* 6743 */;
import Directions from "Directions" /* 6749 */;
import createHandler from "createHandler" /* 6750 */;
import createHandler2 from "createHandler" /* 6751 */;
import PointerType from "PointerType" /* 6752 */;
import module_6613 from "module_6613" /* 6613 */;
import initialize_mod from "initialize" /* 6614 */;

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
export const LegacyPressable = _modDef6730;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6743.TouchableHighlight;
export const TouchableNativeFeedback = _mod6743.TouchableNativeFeedback;
export const TouchableOpacity = _mod6743.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6743.TouchableWithoutFeedback;
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
