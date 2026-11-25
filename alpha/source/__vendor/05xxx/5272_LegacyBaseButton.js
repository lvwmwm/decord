// Module ID: 5272
// Function ID: 5273
// Name: LegacyBaseButton
// Dependencies: [5273, 5280, 5395, 5397, 5398, 5400, 5412, 5413, 5419, 5396, 5313, 5311, 5297, 5402, 5310, 5315, 5309, 5420, 5421, 5298, 5422, 5423, 5277]

// Module 5272 (LegacyBaseButton)
import State from "State" /* 5277 */;
import BaseButton from "BaseButton" /* 5280 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5297 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5298 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5309 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5310 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5311 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5313 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5315 */;
import LegacyRawButton from "LegacyRawButton" /* 5395 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5396 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5397 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5398 */;
import _modDef5400 from "module_5400" /* 5400 */;
import GestureObjects from "GestureObjects" /* 5402 */;
import LegacyText from "LegacyText" /* 5412 */;
import _mod5413 from "module_5413" /* 5413 */;
import Directions from "Directions" /* 5419 */;
import createHandler from "createHandler" /* 5420 */;
import createHandler2 from "createHandler" /* 5421 */;
import HoverEffect from "HoverEffect" /* 5422 */;
import PointerType from "PointerType" /* 5423 */;
import initialize_mod from "initialize" /* 5273 */;

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
export const LegacyPressable = _modDef5400;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5413.TouchableHighlight;
export const TouchableNativeFeedback = _mod5413.TouchableNativeFeedback;
export const TouchableOpacity = _mod5413.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5413.TouchableWithoutFeedback;
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
