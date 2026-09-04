// Module ID: 6595
// Function ID: 6596
// Name: LegacyBaseButton
// Dependencies: [6596, 6597, 6604, 6708, 6710, 6711, 6713, 6725, 6726, 6732, 6709, 6635, 6633, 6620, 6715, 6636, 6632, 6637, 6631, 6733, 6734, 6621, 6735, 6601]

// Module 6595 (LegacyBaseButton)
import _mod6601 from "module_6601" /* 6601 */;
import items1 from "items1" /* 6620 */;
import items12 from "items1" /* 6621 */;
import managePanProps from "managePanProps" /* 6631 */;
import items13 from "items1" /* 6632 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 6633 */;
import items14 from "items1" /* 6635 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 6636 */;
import items from "items" /* 6637 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 6708 */;
import itemsDefault from "items" /* 6709 */;
import LegacyScrollView from "LegacyScrollView" /* 6710 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6711 */;
import hitSlopDefault from "hitSlop" /* 6713 */;
import _mod6715 from "module_6715" /* 6715 */;
import LegacyText from "LegacyText" /* 6725 */;
import TouchableHighlight from "TouchableHighlight" /* 6726 */;
import _mod6732 from "module_6732" /* 6732 */;
import pinchHandlerName from "pinchHandlerName" /* 6733 */;
import rotationHandlerName from "rotationHandlerName" /* 6734 */;
import _mod6735 from "module_6735" /* 6735 */;
import module_6596 from "module_6596" /* 6596 */;
import initialize from "initialize" /* 6597 */;

initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  let tmp4 = key10019;
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _isNativeReflectConstruct3.LegacyBaseButton;
export const LegacyBorderlessButton = _isNativeReflectConstruct3.LegacyBorderlessButton;
export const LegacyRawButton = _isNativeReflectConstruct3.LegacyRawButton;
export const LegacyRectButton = _isNativeReflectConstruct3.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = hitSlopDefault;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = _mod6732.Directions;
export const legacy_createNativeWrapper = itemsDefault;
export const FlingGestureHandler = items14.FlingGestureHandler;
export const ForceTouchGestureHandler = _isNativeReflectConstruct.ForceTouchGestureHandler;
export const MouseButton = items1.MouseButton;
export const Gesture = _mod6715.GestureObjects;
export const HoverEffect = _isNativeReflectConstruct2.HoverEffect;
export const LongPressGestureHandler = items13.LongPressGestureHandler;
export const NativeViewGestureHandler = items.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = items12.TapGestureHandler;
export const PointerType = _mod6735.PointerType;
export const State = _mod6601.State;
