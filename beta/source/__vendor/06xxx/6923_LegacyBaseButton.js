// Module ID: 6923
// Function ID: 6924
// Name: LegacyBaseButton
// Dependencies: [6924, 6925, 6932, 7036, 7038, 7039, 7041, 7053, 7054, 7060, 7037, 6963, 6961, 6948, 7043, 6964, 6960, 6965, 6959, 7061, 7062, 6949, 7063, 6929]

// Module 6923 (LegacyBaseButton)
import _mod6929 from "module_6929" /* 6929 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6948 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6949 */;
import managePanProps from "managePanProps" /* 6959 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6960 */;
import _mod6961 from "module_6961" /* 6961 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6963 */;
import _mod6964 from "module_6964" /* 6964 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6965 */;
import _mod7036 from "module_7036" /* 7036 */;
import _modDef7037 from "module_7037" /* 7037 */;
import LegacyScrollView from "LegacyScrollView" /* 7038 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 7039 */;
import _modDef7041 from "module_7041" /* 7041 */;
import GestureObjects from "GestureObjects" /* 7043 */;
import LegacyText from "LegacyText" /* 7053 */;
import TouchableHighlight from "TouchableHighlight" /* 7054 */;
import Directions from "Directions" /* 7060 */;
import pinchHandlerName from "pinchHandlerName" /* 7061 */;
import rotationHandlerName from "rotationHandlerName" /* 7062 */;
import PointerType from "PointerType" /* 7063 */;
import module_6924 from "module_6924" /* 6924 */;
import initialize_mod from "module_6925" /* 6925 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod7036.LegacyBaseButton;
export const LegacyBorderlessButton = _mod7036.LegacyBorderlessButton;
export const LegacyRawButton = _mod7036.LegacyRawButton;
export const LegacyRectButton = _mod7036.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef7041;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef7037;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6961.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6964.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6929.State;
