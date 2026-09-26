// Module ID: 6929
// Function ID: 6930
// Name: LegacyBaseButton
// Dependencies: [6930, 6931, 6938, 7042, 7044, 7045, 7047, 7059, 7060, 7066, 7043, 6969, 6967, 6954, 7049, 6970, 6966, 6971, 6965, 7067, 7068, 6955, 7069, 6935]

// Module 6929 (LegacyBaseButton)
import _mod6935 from "module_6935" /* 6935 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6954 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6955 */;
import managePanProps from "managePanProps" /* 6965 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6966 */;
import _mod6967 from "module_6967" /* 6967 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6969 */;
import _mod6970 from "module_6970" /* 6970 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6971 */;
import _mod7042 from "module_7042" /* 7042 */;
import _modDef7043 from "module_7043" /* 7043 */;
import LegacyScrollView from "LegacyScrollView" /* 7044 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 7045 */;
import _modDef7047 from "module_7047" /* 7047 */;
import GestureObjects from "GestureObjects" /* 7049 */;
import LegacyText from "LegacyText" /* 7059 */;
import TouchableHighlight from "TouchableHighlight" /* 7060 */;
import Directions from "Directions" /* 7066 */;
import pinchHandlerName from "pinchHandlerName" /* 7067 */;
import rotationHandlerName from "rotationHandlerName" /* 7068 */;
import PointerType from "PointerType" /* 7069 */;
import module_6930 from "module_6930" /* 6930 */;
import initialize_mod from "module_6931" /* 6931 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7042.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7042.LegacyBorderlessButton;
export const LegacyRawButton = _mod7042.LegacyRawButton;
export const LegacyRectButton = _mod7042.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7047;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7043;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6967.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6970.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6935.State;
