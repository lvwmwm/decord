// Module ID: 5283
// Function ID: 5284
// Name: LegacyBaseButton
// Dependencies: [5284, 5285, 5292, 5396, 5398, 5399, 5401, 5413, 5414, 5420, 5397, 5323, 5321, 5308, 5403, 5324, 5320, 5325, 5319, 5421, 5422, 5309, 5423, 5289]

// Module 5283 (LegacyBaseButton)
import State from "State" /* 5289 */;
import BaseButton from "BaseButton" /* 5292 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5308 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5309 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5319 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5320 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5321 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5323 */;
import HoverEffect from "HoverEffect" /* 5324 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5325 */;
import LegacyRawButton from "LegacyRawButton" /* 5396 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5397 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5398 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5399 */;
import _modDef5401 from "module_5401" /* 5401 */;
import GestureObjects from "GestureObjects" /* 5403 */;
import LegacyText from "LegacyText" /* 5413 */;
import _mod5414 from "module_5414" /* 5414 */;
import Directions from "Directions" /* 5420 */;
import createHandler from "createHandler" /* 5421 */;
import createHandler2 from "createHandler" /* 5422 */;
import PointerType from "PointerType" /* 5423 */;
import module_5284 from "module_5284" /* 5284 */;
import initialize_mod from "initialize" /* 5285 */;

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
export const LegacyPressable = _modDef5401;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5414.TouchableHighlight;
export const TouchableNativeFeedback = _mod5414.TouchableNativeFeedback;
export const TouchableOpacity = _mod5414.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5414.TouchableWithoutFeedback;
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
