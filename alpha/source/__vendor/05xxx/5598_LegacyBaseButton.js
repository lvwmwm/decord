// Module ID: 5598
// Function ID: 5599
// Name: LegacyBaseButton
// Dependencies: [5599, 5606, 5721, 5723, 5724, 5726, 5738, 5739, 5745, 5722, 5639, 5637, 5623, 5728, 5636, 5641, 5635, 5746, 5747, 5624, 5748, 5749, 5603]

// Module 5598 (LegacyBaseButton)
import State from "State" /* 5603 */;
import BaseButton from "BaseButton" /* 5606 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5623 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5624 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5635 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5636 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5637 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5639 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5641 */;
import LegacyRawButton from "LegacyRawButton" /* 5721 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5722 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5723 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5724 */;
import _modDef5726 from "module_5726" /* 5726 */;
import GestureObjects from "GestureObjects" /* 5728 */;
import LegacyText from "LegacyText" /* 5738 */;
import _mod5739 from "module_5739" /* 5739 */;
import Directions from "Directions" /* 5745 */;
import createHandler from "createHandler" /* 5746 */;
import createHandler2 from "createHandler" /* 5747 */;
import HoverEffect from "HoverEffect" /* 5748 */;
import PointerType from "PointerType" /* 5749 */;
import initialize_mod from "initialize" /* 5599 */;

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
export const LegacyPressable = _modDef5726;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5739.TouchableHighlight;
export const TouchableNativeFeedback = _mod5739.TouchableNativeFeedback;
export const TouchableOpacity = _mod5739.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5739.TouchableWithoutFeedback;
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
