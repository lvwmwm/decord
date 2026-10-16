// Module ID: 6559
// Function ID: 6560
// Name: LegacyBaseButton
// Dependencies: [6560, 6561, 6568, 6672, 6674, 6675, 6677, 6689, 6690, 6696, 6673, 6599, 6597, 6584, 6679, 6600, 6596, 6601, 6595, 6697, 6698, 6585, 6699, 6565]

// Module 6559 (LegacyBaseButton)
import State from "State" /* 6565 */;
import BaseButton from "BaseButton" /* 6568 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6584 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6585 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6595 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6596 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6597 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6599 */;
import HoverEffect from "HoverEffect" /* 6600 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6601 */;
import LegacyRawButton from "LegacyRawButton" /* 6672 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6673 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6674 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6675 */;
import _modDef6677 from "module_6677" /* 6677 */;
import GestureObjects from "GestureObjects" /* 6679 */;
import LegacyText from "LegacyText" /* 6689 */;
import _mod6690 from "module_6690" /* 6690 */;
import Directions from "Directions" /* 6696 */;
import createHandler from "createHandler" /* 6697 */;
import createHandler2 from "createHandler" /* 6698 */;
import PointerType from "PointerType" /* 6699 */;
import module_6560 from "module_6560" /* 6560 */;
import initialize_mod from "initialize" /* 6561 */;

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
export const LegacyPressable = _modDef6677;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6690.TouchableHighlight;
export const TouchableNativeFeedback = _mod6690.TouchableNativeFeedback;
export const TouchableOpacity = _mod6690.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6690.TouchableWithoutFeedback;
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
