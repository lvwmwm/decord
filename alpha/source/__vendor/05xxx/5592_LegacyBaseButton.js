// Module ID: 5592
// Function ID: 5593
// Name: LegacyBaseButton
// Dependencies: [5593, 5600, 5715, 5717, 5718, 5720, 5732, 5733, 5739, 5716, 5633, 5631, 5617, 5722, 5630, 5635, 5629, 5740, 5741, 5618, 5742, 5743, 5597]

// Module 5592 (LegacyBaseButton)
import State from "State" /* 5597 */;
import BaseButton from "BaseButton" /* 5600 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5617 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5618 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5629 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5630 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5631 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5633 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5635 */;
import LegacyRawButton from "LegacyRawButton" /* 5715 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5716 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5717 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5718 */;
import _modDef5720 from "module_5720" /* 5720 */;
import GestureObjects from "GestureObjects" /* 5722 */;
import LegacyText from "LegacyText" /* 5732 */;
import _mod5733 from "module_5733" /* 5733 */;
import Directions from "Directions" /* 5739 */;
import createHandler from "createHandler" /* 5740 */;
import createHandler2 from "createHandler" /* 5741 */;
import HoverEffect from "HoverEffect" /* 5742 */;
import PointerType from "PointerType" /* 5743 */;
import initialize_mod from "initialize" /* 5593 */;

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
export const LegacyPressable = _modDef5720;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5733.TouchableHighlight;
export const TouchableNativeFeedback = _mod5733.TouchableNativeFeedback;
export const TouchableOpacity = _mod5733.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5733.TouchableWithoutFeedback;
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
