// Module ID: 5333
// Function ID: 5334
// Name: LegacyBaseButton
// Dependencies: [5334, 5335, 5342, 5446, 5448, 5449, 5451, 5463, 5464, 5470, 5447, 5373, 5371, 5358, 5453, 5374, 5370, 5375, 5369, 5471, 5472, 5359, 5473, 5339]

// Module 5333 (LegacyBaseButton)
import State from "State" /* 5339 */;
import BaseButton from "BaseButton" /* 5342 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5358 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5359 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5369 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5370 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5371 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5373 */;
import HoverEffect from "HoverEffect" /* 5374 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5375 */;
import LegacyRawButton from "LegacyRawButton" /* 5446 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5447 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5448 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5449 */;
import _modDef5451 from "module_5451" /* 5451 */;
import GestureObjects from "GestureObjects" /* 5453 */;
import LegacyText from "LegacyText" /* 5463 */;
import _mod5464 from "module_5464" /* 5464 */;
import Directions from "Directions" /* 5470 */;
import createHandler from "createHandler" /* 5471 */;
import createHandler2 from "createHandler" /* 5472 */;
import PointerType from "PointerType" /* 5473 */;
import module_5334 from "module_5334" /* 5334 */;
import initialize_mod from "initialize" /* 5335 */;

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
export const LegacyPressable = _modDef5451;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5464.TouchableHighlight;
export const TouchableNativeFeedback = _mod5464.TouchableNativeFeedback;
export const TouchableOpacity = _mod5464.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5464.TouchableWithoutFeedback;
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
