// Module ID: 5426
// Function ID: 5427
// Name: LegacyBaseButton
// Dependencies: [5427, 5428, 5435, 5539, 5541, 5542, 5544, 5556, 5557, 5563, 5540, 5466, 5464, 5451, 5546, 5467, 5463, 5468, 5462, 5564, 5565, 5452, 5566, 5432]

// Module 5426 (LegacyBaseButton)
import State from "State" /* 5432 */;
import BaseButton from "BaseButton" /* 5435 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5451 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5452 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5462 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5463 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5464 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5466 */;
import HoverEffect from "HoverEffect" /* 5467 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5468 */;
import LegacyRawButton from "LegacyRawButton" /* 5539 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5540 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5541 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5542 */;
import _modDef5544 from "module_5544" /* 5544 */;
import GestureObjects from "GestureObjects" /* 5546 */;
import LegacyText from "LegacyText" /* 5556 */;
import _mod5557 from "module_5557" /* 5557 */;
import Directions from "Directions" /* 5563 */;
import createHandler from "createHandler" /* 5564 */;
import createHandler2 from "createHandler" /* 5565 */;
import PointerType from "PointerType" /* 5566 */;
import module_5427 from "module_5427" /* 5427 */;
import initialize_mod from "initialize" /* 5428 */;

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
export const LegacyPressable = _modDef5544;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5557.TouchableHighlight;
export const TouchableNativeFeedback = _mod5557.TouchableNativeFeedback;
export const TouchableOpacity = _mod5557.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5557.TouchableWithoutFeedback;
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
