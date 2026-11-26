// Module ID: 5303
// Function ID: 5304
// Name: LegacyBaseButton
// Dependencies: [5304, 5311, 5426, 5428, 5429, 5431, 5443, 5444, 5450, 5427, 5344, 5342, 5328, 5433, 5341, 5346, 5340, 5451, 5452, 5329, 5453, 5454, 5308]

// Module 5303 (LegacyBaseButton)
import State from "State" /* 5308 */;
import BaseButton from "BaseButton" /* 5311 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5328 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5329 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5340 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5341 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5342 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5344 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5346 */;
import LegacyRawButton from "LegacyRawButton" /* 5426 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5427 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5428 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5429 */;
import _modDef5431 from "module_5431" /* 5431 */;
import GestureObjects from "GestureObjects" /* 5433 */;
import LegacyText from "LegacyText" /* 5443 */;
import _mod5444 from "module_5444" /* 5444 */;
import Directions from "Directions" /* 5450 */;
import createHandler from "createHandler" /* 5451 */;
import createHandler2 from "createHandler" /* 5452 */;
import HoverEffect from "HoverEffect" /* 5453 */;
import PointerType from "PointerType" /* 5454 */;
import initialize_mod from "initialize" /* 5304 */;

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
export const LegacyPressable = _modDef5431;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5444.TouchableHighlight;
export const TouchableNativeFeedback = _mod5444.TouchableNativeFeedback;
export const TouchableOpacity = _mod5444.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5444.TouchableWithoutFeedback;
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
