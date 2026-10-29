// Module ID: 5334
// Function ID: 5335
// Name: LegacyBaseButton
// Dependencies: [5335, 5336, 5343, 5447, 5449, 5450, 5452, 5464, 5465, 5471, 5448, 5374, 5372, 5359, 5454, 5375, 5371, 5376, 5370, 5472, 5473, 5360, 5474, 5340]

// Module 5334 (LegacyBaseButton)
import State from "State" /* 5340 */;
import BaseButton from "BaseButton" /* 5343 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5359 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5360 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5370 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5371 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5372 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5374 */;
import HoverEffect from "HoverEffect" /* 5375 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5376 */;
import LegacyRawButton from "LegacyRawButton" /* 5447 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5448 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5449 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5450 */;
import _modDef5452 from "module_5452" /* 5452 */;
import GestureObjects from "GestureObjects" /* 5454 */;
import LegacyText from "LegacyText" /* 5464 */;
import _mod5465 from "module_5465" /* 5465 */;
import Directions from "Directions" /* 5471 */;
import createHandler from "createHandler" /* 5472 */;
import createHandler2 from "createHandler" /* 5473 */;
import PointerType from "PointerType" /* 5474 */;
import module_5335 from "module_5335" /* 5335 */;
import initialize_mod from "initialize" /* 5336 */;

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
export const LegacyPressable = _modDef5452;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5465.TouchableHighlight;
export const TouchableNativeFeedback = _mod5465.TouchableNativeFeedback;
export const TouchableOpacity = _mod5465.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5465.TouchableWithoutFeedback;
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
