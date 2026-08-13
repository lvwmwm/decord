// Module ID: 5467
// Function ID: 5468
// Name: LegacyBaseButton
// Dependencies: [5468, 5469, 5476, 5580, 5582, 5583, 5585, 5597, 5598, 5604, 5581, 5507, 5505, 5492, 5587, 5508, 5504, 5509, 5503, 5605, 5606, 5493, 5607, 5473]

// Module 5467 (LegacyBaseButton)
import module_5468 from "module_5468";
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
export const Directions = require("module_5604").Directions;
export const legacy_createNativeWrapper = require("items");
export const FlingGestureHandler = require("items1").FlingGestureHandler;
export const ForceTouchGestureHandler = require("_isNativeReflectConstruct").ForceTouchGestureHandler;
export const MouseButton = require("items1").MouseButton;
export const Gesture = require("module_5587").GestureObjects;
export const HoverEffect = require("_isNativeReflectConstruct").HoverEffect;
export const LongPressGestureHandler = require("items1").LongPressGestureHandler;
export const NativeViewGestureHandler = require("items").NativeViewGestureHandler;
export const PanGestureHandler = require("managePanProps").PanGestureHandler;
export const PinchGestureHandler = require("pinchHandlerName").PinchGestureHandler;
export const RotationGestureHandler = require("rotationHandlerName").RotationGestureHandler;
export const TapGestureHandler = require("items1").TapGestureHandler;
export const PointerType = require("module_5607").PointerType;
export const State = require("module_5473").State;
