// Module ID: 5298
// Function ID: 5299
// Name: LegacyBaseButton
// Dependencies: [5299, 5300, 5307, 5411, 5413, 5414, 5416, 5428, 5429, 5435, 5412, 5338, 5336, 5323, 5418, 5339, 5335, 5340, 5334, 5436, 5437, 5324, 5438, 5304]

// Module 5298 (LegacyBaseButton)
import State from "State" /* 5304 */;
import BaseButton from "BaseButton" /* 5307 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5323 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5324 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5334 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5335 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5336 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5338 */;
import HoverEffect from "HoverEffect" /* 5339 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5340 */;
import LegacyRawButton from "LegacyRawButton" /* 5411 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5412 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5413 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5414 */;
import _modDef5416 from "module_5416" /* 5416 */;
import GestureObjects from "GestureObjects" /* 5418 */;
import LegacyText from "LegacyText" /* 5428 */;
import _mod5429 from "module_5429" /* 5429 */;
import Directions from "Directions" /* 5435 */;
import createHandler from "createHandler" /* 5436 */;
import createHandler2 from "createHandler" /* 5437 */;
import PointerType from "PointerType" /* 5438 */;
import module_5299 from "module_5299" /* 5299 */;
import initialize_mod from "initialize" /* 5300 */;

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
export const LegacyPressable = _modDef5416;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5429.TouchableHighlight;
export const TouchableNativeFeedback = _mod5429.TouchableNativeFeedback;
export const TouchableOpacity = _mod5429.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5429.TouchableWithoutFeedback;
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
