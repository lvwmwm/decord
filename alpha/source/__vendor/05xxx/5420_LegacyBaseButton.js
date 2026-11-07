// Module ID: 5420
// Function ID: 5421
// Name: LegacyBaseButton
// Dependencies: [5421, 5428, 5543, 5545, 5546, 5548, 5560, 5561, 5567, 5544, 5461, 5459, 5445, 5550, 5458, 5463, 5457, 5568, 5569, 5446, 5570, 5571, 5425]

// Module 5420 (LegacyBaseButton)
import State from "State" /* 5425 */;
import BaseButton from "BaseButton" /* 5428 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5445 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5446 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5457 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5458 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5459 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5461 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5463 */;
import LegacyRawButton from "LegacyRawButton" /* 5543 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5544 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5545 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5546 */;
import _modDef5548 from "module_5548" /* 5548 */;
import GestureObjects from "GestureObjects" /* 5550 */;
import LegacyText from "LegacyText" /* 5560 */;
import _mod5561 from "module_5561" /* 5561 */;
import Directions from "Directions" /* 5567 */;
import createHandler from "createHandler" /* 5568 */;
import createHandler2 from "createHandler" /* 5569 */;
import HoverEffect from "HoverEffect" /* 5570 */;
import PointerType from "PointerType" /* 5571 */;
import initialize_mod from "initialize" /* 5421 */;

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
export const LegacyPressable = _modDef5548;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5561.TouchableHighlight;
export const TouchableNativeFeedback = _mod5561.TouchableNativeFeedback;
export const TouchableOpacity = _mod5561.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5561.TouchableWithoutFeedback;
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
