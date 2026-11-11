// Module ID: 5535
// Function ID: 5536
// Name: LegacyBaseButton
// Dependencies: [5536, 5543, 5658, 5660, 5661, 5663, 5675, 5676, 5682, 5659, 5576, 5574, 5560, 5665, 5573, 5578, 5572, 5683, 5684, 5561, 5685, 5686, 5540]

// Module 5535 (LegacyBaseButton)
import State from "State" /* 5540 */;
import BaseButton from "BaseButton" /* 5543 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5560 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5561 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5572 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5573 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5574 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5576 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5578 */;
import LegacyRawButton from "LegacyRawButton" /* 5658 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5659 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5660 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5661 */;
import _modDef5663 from "module_5663" /* 5663 */;
import GestureObjects from "GestureObjects" /* 5665 */;
import LegacyText from "LegacyText" /* 5675 */;
import _mod5676 from "module_5676" /* 5676 */;
import Directions from "Directions" /* 5682 */;
import createHandler from "createHandler" /* 5683 */;
import createHandler2 from "createHandler" /* 5684 */;
import HoverEffect from "HoverEffect" /* 5685 */;
import PointerType from "PointerType" /* 5686 */;
import initialize_mod from "initialize" /* 5536 */;

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
export const LegacyPressable = _modDef5663;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5676.TouchableHighlight;
export const TouchableNativeFeedback = _mod5676.TouchableNativeFeedback;
export const TouchableOpacity = _mod5676.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5676.TouchableWithoutFeedback;
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
