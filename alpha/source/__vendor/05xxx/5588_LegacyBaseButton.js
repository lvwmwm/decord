// Module ID: 5588
// Function ID: 5589
// Name: LegacyBaseButton
// Dependencies: [5589, 5596, 5711, 5713, 5714, 5716, 5728, 5729, 5735, 5712, 5629, 5627, 5613, 5718, 5626, 5631, 5625, 5736, 5737, 5614, 5738, 5739, 5593]

// Module 5588 (LegacyBaseButton)
import State from "State" /* 5593 */;
import BaseButton from "BaseButton" /* 5596 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5613 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5614 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5625 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5626 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5627 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5629 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5631 */;
import LegacyRawButton from "LegacyRawButton" /* 5711 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5712 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5713 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5714 */;
import _modDef5716 from "module_5716" /* 5716 */;
import GestureObjects from "GestureObjects" /* 5718 */;
import LegacyText from "LegacyText" /* 5728 */;
import _mod5729 from "module_5729" /* 5729 */;
import Directions from "Directions" /* 5735 */;
import createHandler from "createHandler" /* 5736 */;
import createHandler2 from "createHandler" /* 5737 */;
import HoverEffect from "HoverEffect" /* 5738 */;
import PointerType from "PointerType" /* 5739 */;
import initialize_mod from "initialize" /* 5589 */;

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
export const LegacyPressable = _modDef5716;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5729.TouchableHighlight;
export const TouchableNativeFeedback = _mod5729.TouchableNativeFeedback;
export const TouchableOpacity = _mod5729.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5729.TouchableWithoutFeedback;
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
