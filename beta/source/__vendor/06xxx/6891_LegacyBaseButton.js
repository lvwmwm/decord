// Module ID: 6891
// Function ID: 6892
// Name: LegacyBaseButton
// Dependencies: [6892, 6893, 6900, 7004, 7006, 7007, 7009, 7021, 7022, 7028, 7005, 6931, 6929, 6916, 7011, 6932, 6928, 6933, 6927, 7029, 7030, 6917, 7031, 6897]

// Module 6891 (LegacyBaseButton)
import _mod6897 from "module_6897" /* 6897 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6916 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6917 */;
import managePanProps from "managePanProps" /* 6927 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6928 */;
import _mod6929 from "module_6929" /* 6929 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6931 */;
import _mod6932 from "module_6932" /* 6932 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6933 */;
import _mod7004 from "module_7004" /* 7004 */;
import _modDef7005 from "module_7005" /* 7005 */;
import LegacyScrollView from "LegacyScrollView" /* 7006 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 7007 */;
import _modDef7009 from "module_7009" /* 7009 */;
import GestureObjects from "GestureObjects" /* 7011 */;
import LegacyText from "LegacyText" /* 7021 */;
import TouchableHighlight from "TouchableHighlight" /* 7022 */;
import Directions from "Directions" /* 7028 */;
import pinchHandlerName from "pinchHandlerName" /* 7029 */;
import rotationHandlerName from "rotationHandlerName" /* 7030 */;
import PointerType from "PointerType" /* 7031 */;
import module_6892 from "module_6892" /* 6892 */;
import initialize_mod from "module_6893" /* 6893 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7004.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7004.LegacyBorderlessButton;
export const LegacyRawButton = _mod7004.LegacyRawButton;
export const LegacyRectButton = _mod7004.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7009;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7005;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6929.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6932.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6897.State;
