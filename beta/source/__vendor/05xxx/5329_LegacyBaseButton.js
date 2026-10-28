// Module ID: 5329
// Function ID: 5330
// Name: LegacyBaseButton
// Dependencies: [5330, 5331, 5338, 5442, 5444, 5445, 5447, 5459, 5460, 5466, 5443, 5369, 5367, 5354, 5449, 5370, 5366, 5371, 5365, 5467, 5468, 5355, 5469, 5335]

// Module 5329 (LegacyBaseButton)
import State from "State" /* 5335 */;
import BaseButton from "BaseButton" /* 5338 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5354 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5355 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5365 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5366 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5367 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5369 */;
import HoverEffect from "HoverEffect" /* 5370 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5371 */;
import LegacyRawButton from "LegacyRawButton" /* 5442 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5443 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5444 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5445 */;
import _modDef5447 from "module_5447" /* 5447 */;
import GestureObjects from "GestureObjects" /* 5449 */;
import LegacyText from "LegacyText" /* 5459 */;
import _mod5460 from "module_5460" /* 5460 */;
import Directions from "Directions" /* 5466 */;
import createHandler from "createHandler" /* 5467 */;
import createHandler2 from "createHandler" /* 5468 */;
import PointerType from "PointerType" /* 5469 */;
import module_5330 from "module_5330" /* 5330 */;
import initialize_mod from "initialize" /* 5331 */;

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
export const LegacyPressable = _modDef5447;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5460.TouchableHighlight;
export const TouchableNativeFeedback = _mod5460.TouchableNativeFeedback;
export const TouchableOpacity = _mod5460.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5460.TouchableWithoutFeedback;
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
