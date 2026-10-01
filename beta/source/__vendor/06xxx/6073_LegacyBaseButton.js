// Module ID: 6073
// Function ID: 6074
// Name: LegacyBaseButton
// Dependencies: [6074, 6075, 6082, 6186, 6188, 6189, 6191, 6203, 6204, 6210, 6187, 6113, 6111, 6098, 6193, 6114, 6110, 6115, 6109, 6211, 6212, 6099, 6213, 6079]

// Module 6073 (LegacyBaseButton)
import State from "State" /* 6079 */;
import BaseButton from "BaseButton" /* 6082 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6098 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6099 */;
import panGestureHandlerProps from "panGestureHandlerProps" /* 6109 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6110 */;
import forceTouchGestureHandlerProps from "forceTouchGestureHandlerProps" /* 6111 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6113 */;
import HoverEffect from "HoverEffect" /* 6114 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6115 */;
import LegacyRawButton from "LegacyRawButton" /* 6186 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6187 */;
import LegacyRefreshControl from "LegacyRefreshControl" /* 6188 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6189 */;
import _modDef6191 from "module_6191" /* 6191 */;
import GestureObjects from "GestureObjects" /* 6193 */;
import LegacyText from "LegacyText" /* 6203 */;
import _mod6204 from "module_6204" /* 6204 */;
import Directions from "Directions" /* 6210 */;
import createHandler from "createHandler" /* 6211 */;
import createHandler2 from "createHandler" /* 6212 */;
import PointerType from "PointerType" /* 6213 */;
import module_6074 from "module_6074" /* 6074 */;
import initialize_mod from "initialize" /* 6075 */;

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
export const LegacyPressable = _modDef6191;
export { LegacyText_export as LegacyText };
export const TouchableHighlight = _mod6204.TouchableHighlight;
export const TouchableNativeFeedback = _mod6204.TouchableNativeFeedback;
export const TouchableOpacity = _mod6204.TouchableOpacity;
export const TouchableWithoutFeedback = _mod6204.TouchableWithoutFeedback;
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
