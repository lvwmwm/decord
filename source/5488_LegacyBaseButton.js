// Module ID: 5488
// Function ID: 5489
// Name: LegacyBaseButton
// Dependencies: [5489, 5490, 5497, 5601, 5603, 5604, 5606, 5618, 5619, 5625, 5602, 5528, 5526, 5513, 5608, 5529, 5525, 5530, 5524, 5626, 5627, 5514, 5628, 5494]

// Module 5488 (LegacyBaseButton)
import module_5489 from "module_5489";
import initialize from "initialize";

initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  let tmp4 = key10019;
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = require("_isNativeReflectConstruct").LegacyBaseButton;
export const LegacyBorderlessButton = require("_isNativeReflectConstruct").LegacyBorderlessButton;
export const LegacyRawButton = require("_isNativeReflectConstruct").LegacyRawButton;
export const LegacyRectButton = require("_isNativeReflectConstruct").LegacyRectButton;
export const LegacyDrawerLayoutAndroid = require("LegacyScrollView").LegacyDrawerLayoutAndroid;
export const LegacyFlatList = require("LegacyScrollView").LegacyFlatList;
export const LegacyRefreshControl = require("LegacyScrollView").LegacyRefreshControl;
export const LegacyScrollView = require("LegacyScrollView").LegacyScrollView;
export const LegacySwitch = require("LegacyScrollView").LegacySwitch;
export const LegacyTextInput = require("LegacyScrollView").LegacyTextInput;
export const GestureHandlerRootView = require("GestureHandlerRootView");
export const LegacyPressable = require("hitSlop");
export const LegacyText = require("LegacyText").LegacyText;
export const TouchableHighlight = require("TouchableHighlight").TouchableHighlight;
export const TouchableNativeFeedback = require("TouchableHighlight").TouchableNativeFeedback;
export const TouchableOpacity = require("TouchableHighlight").TouchableOpacity;
export const TouchableWithoutFeedback = require("TouchableHighlight").TouchableWithoutFeedback;
export const Directions = require("module_5625").Directions;
export const legacy_createNativeWrapper = require("items");
export const FlingGestureHandler = require("items1").FlingGestureHandler;
export const ForceTouchGestureHandler = require("_isNativeReflectConstruct").ForceTouchGestureHandler;
export const MouseButton = require("items1").MouseButton;
export const Gesture = require("module_5608").GestureObjects;
export const HoverEffect = require("_isNativeReflectConstruct").HoverEffect;
export const LongPressGestureHandler = require("items1").LongPressGestureHandler;
export const NativeViewGestureHandler = require("items").NativeViewGestureHandler;
export const PanGestureHandler = require("managePanProps").PanGestureHandler;
export const PinchGestureHandler = require("pinchHandlerName").PinchGestureHandler;
export const RotationGestureHandler = require("rotationHandlerName").RotationGestureHandler;
export const TapGestureHandler = require("items1").TapGestureHandler;
export const PointerType = require("module_5628").PointerType;
export const State = require("module_5494").State;
