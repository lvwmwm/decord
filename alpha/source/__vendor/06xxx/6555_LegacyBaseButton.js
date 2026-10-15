// Module ID: 6555
// Function ID: 6556
// Name: LegacyBaseButton
// Dependencies: [6556, 6557, 6564, 6668, 6670, 6671, 6673, 6685, 6686, 6692, 6669, 6595, 6593, 6580, 6675, 6596, 6592, 6597, 6591, 6693, 6694, 6581, 6695, 6561]

// Module 6555 (LegacyBaseButton)
import State from "State" /* 6561 */;
import BaseButton from "BaseButton" /* 6564 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6580 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6581 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6591 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6592 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6593 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6595 */;
import HoverEffect from "HoverEffect" /* 6596 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6597 */;
import LegacyRawButton from "LegacyRawButton" /* 6668 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6669 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6670 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6671 */;
import _modDef6673 from "module_6673" /* 6673 */;
import GestureObjects from "GestureObjects" /* 6675 */;
import LegacyText from "LegacyText" /* 6685 */;
import _mod6686 from "module_6686" /* 6686 */;
import Directions from "Directions" /* 6692 */;
import createHandler from "createHandler" /* 6693 */;
import createHandler2 from "createHandler" /* 6694 */;
import PointerType from "PointerType" /* 6695 */;
import module_6556 from "module_6556" /* 6556 */;
import initialize_mod from "initialize" /* 6557 */;

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
export const LegacyPressable = _modDef6673;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6686.TouchableHighlight;
export const TouchableNativeFeedback = _mod6686.TouchableNativeFeedback;
export const TouchableOpacity = _mod6686.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6686.TouchableWithoutFeedback;
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
