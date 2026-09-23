// Module ID: 6983
// Function ID: 6984
// Name: LegacyBaseButton
// Dependencies: [6984, 6985, 6992, 7096, 7098, 7099, 7101, 7113, 7114, 7120, 7097, 7023, 7021, 7008, 7103, 7024, 7020, 7025, 7019, 7121, 7122, 7009, 7123, 6989]

// Module 6983 (LegacyBaseButton)
import _mod6989 from "module_6989" /* 6989 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 7008 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 7009 */;
import managePanProps from "managePanProps" /* 7019 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 7020 */;
import _mod7021 from "module_7021" /* 7021 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 7023 */;
import _mod7024 from "module_7024" /* 7024 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 7025 */;
import _mod7096 from "module_7096" /* 7096 */;
import _modDef7097 from "module_7097" /* 7097 */;
import LegacyScrollView from "LegacyScrollView" /* 7098 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 7099 */;
import _modDef7101 from "module_7101" /* 7101 */;
import GestureObjects from "GestureObjects" /* 7103 */;
import LegacyText from "LegacyText" /* 7113 */;
import TouchableHighlight from "TouchableHighlight" /* 7114 */;
import Directions from "Directions" /* 7120 */;
import pinchHandlerName from "pinchHandlerName" /* 7121 */;
import rotationHandlerName from "rotationHandlerName" /* 7122 */;
import PointerType from "PointerType" /* 7123 */;
import module_6984 from "module_6984" /* 6984 */;
import initialize_mod from "module_6985" /* 6985 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7096.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7096.LegacyBorderlessButton;
export const LegacyRawButton = _mod7096.LegacyRawButton;
export const LegacyRectButton = _mod7096.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7101;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7097;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod7021.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod7024.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6989.State;
