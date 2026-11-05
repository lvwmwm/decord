// Module ID: 5430
// Function ID: 5431
// Name: LegacyBaseButton
// Dependencies: [5431, 5438, 5553, 5555, 5556, 5558, 5570, 5571, 5577, 5554, 5471, 5469, 5455, 5560, 5468, 5473, 5467, 5578, 5579, 5456, 5580, 5581, 5435]

// Module 5430 (LegacyBaseButton)
import State from "State" /* 5435 */;
import BaseButton from "BaseButton" /* 5438 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5455 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5456 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5467 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5468 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5469 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5471 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5473 */;
import LegacyRawButton from "LegacyRawButton" /* 5553 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5554 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5555 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5556 */;
import _modDef5558 from "module_5558" /* 5558 */;
import GestureObjects from "GestureObjects" /* 5560 */;
import LegacyText from "LegacyText" /* 5570 */;
import _mod5571 from "module_5571" /* 5571 */;
import Directions from "Directions" /* 5577 */;
import createHandler from "createHandler" /* 5578 */;
import createHandler2 from "createHandler" /* 5579 */;
import HoverEffect from "HoverEffect" /* 5580 */;
import PointerType from "PointerType" /* 5581 */;
import initialize_mod from "initialize" /* 5431 */;

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
export const LegacyPressable = _modDef5558;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5571.TouchableHighlight;
export const TouchableNativeFeedback = _mod5571.TouchableNativeFeedback;
export const TouchableOpacity = _mod5571.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5571.TouchableWithoutFeedback;
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
