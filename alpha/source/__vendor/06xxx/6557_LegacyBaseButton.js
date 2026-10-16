// Module ID: 6557
// Function ID: 6558
// Name: LegacyBaseButton
// Dependencies: [6558, 6559, 6566, 6670, 6672, 6673, 6675, 6687, 6688, 6694, 6671, 6597, 6595, 6582, 6677, 6598, 6594, 6599, 6593, 6695, 6696, 6583, 6697, 6563]

// Module 6557 (LegacyBaseButton)
import State from "State" /* 6563 */;
import BaseButton from "BaseButton" /* 6566 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6582 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6583 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6593 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6594 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6595 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6597 */;
import HoverEffect from "HoverEffect" /* 6598 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6599 */;
import LegacyRawButton from "LegacyRawButton" /* 6670 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6671 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6672 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6673 */;
import _modDef6675 from "module_6675" /* 6675 */;
import GestureObjects from "GestureObjects" /* 6677 */;
import LegacyText from "LegacyText" /* 6687 */;
import _mod6688 from "module_6688" /* 6688 */;
import Directions from "Directions" /* 6694 */;
import createHandler from "createHandler" /* 6695 */;
import createHandler2 from "createHandler" /* 6696 */;
import PointerType from "PointerType" /* 6697 */;
import module_6558 from "module_6558" /* 6558 */;
import initialize_mod from "initialize" /* 6559 */;

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
export const LegacyPressable = _modDef6675;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6688.TouchableHighlight;
export const TouchableNativeFeedback = _mod6688.TouchableNativeFeedback;
export const TouchableOpacity = _mod6688.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6688.TouchableWithoutFeedback;
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
