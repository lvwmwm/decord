// Module ID: 10570
// Function ID: 82542
// Name: PictureInPicturePositions
// Dependencies: [57, 31, 27, 10240, 653, 33, 4130, 1273, 10571, 1450, 5160, 10574, 3991, 4542, 10575, 10576, 5217, 477, 2]

// Module 10570 (PictureInPicturePositions)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { toggleFocus } from "resetFocusTimer";
import { PictureInPicturePositions } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let StyleSheet;
let closure_5;
const require = arg1;
({ StyleSheet, View: closure_5 } = get_ActivityIndicator);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["alignItems"] = "baseline";
obj.pipOuterContainer = obj;
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["alignItems"] = "baseline";
obj.pipInnerContainer = _createForOfIteratorHelperLoose;
obj.elevationShadow = Button.generateBoxShadowStyle(require("Button").EIGHT_DP_ELEVATION_SHADOW_PARAMS);
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}" };
let closure_11 = (() => {
  function getSpringAnimationConfig(velocity) {
    const obj = { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity };
    return obj;
  }
  getSpringAnimationConfig.__closure = {};
  getSpringAnimationConfig.__workletHash = 6627401186753;
  getSpringAnimationConfig.__initData = closure_10;
  return getSpringAnimationConfig;
})();
let closure_12 = { code: "function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
const memoResult = importAllResult.memo((preferredPosition) => {
  let children;
  let draggableGridItemStyles;
  let gesture;
  let height;
  let style;
  let width;
  ({ children, style } = preferredPosition);
  if (preferredPosition.preferredPosition === undefined) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const channel = preferredPosition.channel;
  let insets;
  let importDefault;
  let ref;
  const tmp2 = callback2();
  let obj = insets(ref[8]);
  const shouldForcePipOrientation = obj.useShouldForcePipOrientation({ channel });
  ({ width, height } = importDefault(ref[9])());
  insets = importDefault(ref[10])({ includeKeyboardHeight: true }).insets;
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const size = importDefault(ref[11])(obj);
  obj = { x: 0, y: 0, width, height, pageX: 0, pageY: 0 };
  const tmp5 = callback(importAllResult.useState(obj), 2);
  const size2 = tmp5[0];
  importDefault = tmp5[1];
  let obj3 = insets(ref[12]);
  const fn = function w() {
    const obj = { marginTop: insets.top, marginBottom: insets(ref[13]).withSpring(insets.bottom, outer1_11()) };
    return obj;
  };
  const tmp4 = importDefault(ref[9])();
  fn.__closure = { insets, withSpring: insets(ref[13]).withSpring, getSpringAnimationConfig: closure_11 };
  fn.__workletHash = 16677290574613;
  fn.__initData = closure_12;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj5 = insets(ref[14]);
  const isViewingActivity = obj5.useIsViewingActivity({ channelId: channel.id });
  let obj7 = insets(ref[15]);
  obj3 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity };
  let tmp8;
  if (isViewingActivity) {
    tmp8 = toggleFocus;
  }
  obj3.onPress = tmp8;
  const draggablePip = obj7.useDraggablePip(obj3);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  ref = importAllResult.useRef(null);
  const obj4 = { style: items, pointerEvents: "box-none" };
  items = [tmp2.pipOuterContainer, animatedStyle, style];
  obj5 = {
    ref,
    style: tmp2.pipInnerContainer,
    pointerEvents: "box-none",
    onLayout() {
      if (null != ref.current) {
        const current = ref.current;
        current.measure((arg0, arg1, width, height, pageX, pageY) => {
          outer1_1({ x: arg0, y: arg1, width, height, pageX, pageY });
        });
      }
    }
  };
  const obj6 = { gesture };
  obj7 = {};
  const items1 = [draggableGridItemStyles, ];
  const obj1 = { insets, withSpring: insets(ref[13]).withSpring, getSpringAnimationConfig: closure_11 };
  const obj2 = { channelId: channel.id };
  const tmp12 = closure_5;
  let elevationShadow;
  if (obj14.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  items1[1] = elevationShadow;
  obj7.style = items1;
  obj7.children = <closure_5>{children}</closure_5>;
  obj6.children = jsx(importDefault(ref[12]).View, {});
  obj5.children = jsx(insets(ref[16]).GestureDetector, { gesture });
  obj4.children = <tmp12 ref={ref} style={tmp2.pipInnerContainer} pointerEvents="box-none" onLayout={function onLayout() {
    if (null != ref.current) {
      const current = ref.current;
      current.measure((arg0, arg1, width, height, pageX, pageY) => {
        outer1_1({ x: arg0, y: arg1, width, height, pageX, pageY });
      });
    }
  }} />;
  return jsx(importDefault(ref[12]).View, { style: items, pointerEvents: "box-none" });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default memoResult;
export const DEFAULT_PIP_POSITION = PictureInPicturePositions.TOP_LEFT;
