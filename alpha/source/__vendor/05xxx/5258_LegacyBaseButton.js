// Module ID: 5258
// Function ID: 5259
// Name: LegacyBaseButton
// Dependencies: [5259, 5260, 5267, 5371, 5373, 5374, 5376, 5388, 5389, 5395, 5372, 5298, 5296, 5283, 5378, 5299, 5295, 5300, 5294, 5396, 5397, 5284, 5398, 5264]

// Module 5258 (LegacyBaseButton)
import State from "State" /* 5264 */;
import BaseButton from "BaseButton" /* 5267 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5283 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5284 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5294 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5295 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5296 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5298 */;
import HoverEffect from "HoverEffect" /* 5299 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5300 */;
import LegacyRawButton from "LegacyRawButton" /* 5371 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5372 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5373 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5374 */;
import _modDef5376 from "module_5376" /* 5376 */;
import GestureObjects from "GestureObjects" /* 5378 */;
import LegacyText from "LegacyText" /* 5388 */;
import _mod5389 from "module_5389" /* 5389 */;
import Directions from "Directions" /* 5395 */;
import createHandler from "createHandler" /* 5396 */;
import createHandler2 from "createHandler" /* 5397 */;
import PointerType from "PointerType" /* 5398 */;
import module_5259 from "module_5259" /* 5259 */;
import initialize_mod from "initialize" /* 5260 */;

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
export const LegacyPressable = _modDef5376;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5389.TouchableHighlight;
export const TouchableNativeFeedback = _mod5389.TouchableNativeFeedback;
export const TouchableOpacity = _mod5389.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5389.TouchableWithoutFeedback;
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
