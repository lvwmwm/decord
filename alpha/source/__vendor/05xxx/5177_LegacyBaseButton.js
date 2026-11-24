// Module ID: 5177
// Function ID: 5178
// Name: LegacyBaseButton
// Dependencies: [5178, 5185, 5300, 5302, 5303, 5305, 5317, 5318, 5324, 5301, 5218, 5216, 5202, 5307, 5215, 5220, 5214, 5325, 5326, 5203, 5327, 5328, 5182]

// Module 5177 (LegacyBaseButton)
import State from "State" /* 5182 */;
import BaseButton from "BaseButton" /* 5185 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 5202 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 5203 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 5214 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 5215 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 5216 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 5218 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 5220 */;
import LegacyRawButton from "LegacyRawButton" /* 5300 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 5301 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 5302 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 5303 */;
import _modDef5305 from "module_5305" /* 5305 */;
import GestureObjects from "GestureObjects" /* 5307 */;
import LegacyText from "LegacyText" /* 5317 */;
import _mod5318 from "module_5318" /* 5318 */;
import Directions from "Directions" /* 5324 */;
import createHandler from "createHandler" /* 5325 */;
import createHandler2 from "createHandler" /* 5326 */;
import HoverEffect from "HoverEffect" /* 5327 */;
import PointerType from "PointerType" /* 5328 */;
import initialize_mod from "initialize" /* 5178 */;

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
export const LegacyPressable = _modDef5305;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod5318.TouchableHighlight;
export const TouchableNativeFeedback = _mod5318.TouchableNativeFeedback;
export const TouchableOpacity = _mod5318.TouchableOpacity;
export const TouchableWithoutFeedback = _mod5318.TouchableWithoutFeedback;
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
