// Module ID: 5303
// Function ID: 5304
// Name: LegacyBaseButton
// Dependencies: [5304, 5305, 5312, 5416, 5418, 5419, 5421, 5433, 5434, 5440, 5417, 5343, 5341, 5328, 5423, 5344, 5340, 5345, 5339, 5441, 5442, 5329, 5443, 5309]

// Module 5303 (LegacyBaseButton)
import State from "State" /* 5309 */;
import BaseButton from "BaseButton" /* 5312 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5328 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5329 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5339 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5340 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5341 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5343 */;
import HoverEffect from "HoverEffect" /* 5344 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5345 */;
import LegacyRawButton from "LegacyRawButton" /* 5416 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5417 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5418 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5419 */;
import _modDef5421 from "module_5421" /* 5421 */;
import GestureObjects from "GestureObjects" /* 5423 */;
import LegacyText from "LegacyText" /* 5433 */;
import _mod5434 from "module_5434" /* 5434 */;
import Directions from "Directions" /* 5440 */;
import createHandler from "createHandler" /* 5441 */;
import createHandler2 from "createHandler" /* 5442 */;
import PointerType from "PointerType" /* 5443 */;
import module_5304 from "module_5304" /* 5304 */;
import initialize_mod from "initialize" /* 5305 */;

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
export const LegacyPressable = _modDef5421;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5434.TouchableHighlight;
export const TouchableNativeFeedback = _mod5434.TouchableNativeFeedback;
export const TouchableOpacity = _mod5434.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5434.TouchableWithoutFeedback;
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
