// Module ID: 8846
// Function ID: 8847
// Name: PictureInPicture
// Dependencies: [32, 19, 17, 8829, 1074, 21, 4836, 1177, 8847, 1479, 6402, 8850, 4566, 5280, 8851, 8852, 6073, 1364, 2]

// Module 8846 (PictureInPicture)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import spring from "spring" /* 5280 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import native_mod from "native" /* 1177 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let StyleSheet;
let hasOwnProperty;
let native;
let obj2;
let obj3;
({ StyleSheet, View: hasOwnProperty } = react_native);
const toggleFocus = ChannelCallStore.toggleFocus;
const PictureInPicturePositions = Constants.PictureInPicturePositions;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pipOuterContainer: obj2, pipInnerContainer: obj3, elevationShadow: native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS) };
obj2 = { alignItems: "baseline" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { alignItems: "baseline" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
native = native_mod;
let closure_9 = createStyles(obj);
function getSpringAnimationConfig(velocity) {
  return { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity };
}
getSpringAnimationConfig.__closure = {};
getSpringAnimationConfig.__workletHash = 6627401186753;
getSpringAnimationConfig.__initData = { code: "function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}" };
const __initData = { code: "function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
let TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
const memoResult = react.memo((preferredPosition) => {
  let c1;
  let children;
  let draggableGridItemStyles;
  let gesture;
  let height;
  let size2;
  let style;
  let tmp12;
  let width;
  ({ children, style } = preferredPosition);
  if (preferredPosition.preferredPosition === undefined) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const channel = preferredPosition.channel;
  let insets;
  importDefault = undefined;
  let ref;
  const tmp2 = closure_9();
  const tmp3 = insets;
  let obj = insets(ref[8]);
  const shouldForcePipOrientation = obj.useShouldForcePipOrientation({ channel });
  ({ width, height } = require("useWindowDimensions")());
  require("useWindowDimensions")();
  insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  let obj2 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  size = require("usePipDimensions")(obj2);
  [size2, c1] = react.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 });
  _slicedToArray(react.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  const fn = function w() {
    const obj = { marginTop: insets.top, marginBottom: null };
    spring;
    if (typeof getSpringAnimationConfig === "function") {
      const obj2 = { mass: 0.2, damping: 7.5, stiffness: 100, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1, overshootClamping: true, velocity: undefined };
      obj.marginBottom = tmp2(tmp3, obj2);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj4 = insets(ref[12]);
  fn.__closure = { insets, withSpring: insets(ref[13]).withSpring, getSpringAnimationConfig };
  fn.__workletHash = 16677290574613;
  fn.__initData = __initData;
  ({ insets, withSpring: insets(ref[13]).withSpring, getSpringAnimationConfig });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj6 = insets(ref[14]);
  const obj7 = { channelId: channel.id };
  const isViewingActivity = obj6.useIsViewingActivity(obj7);
  const size1 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity, onPress: tmp12 };
  tmp12 = undefined;
  const useDraggablePip = insets(ref[15]).useDraggablePip;
  insets(ref[15]);
  const obj3 = react;
  if (isViewingActivity) {
    tmp12 = toggleFocus;
  }
  const draggablePip = useDraggablePip(size1);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  ref = obj3.useRef(null);
  const items = [tmp2.pipOuterContainer, animatedStyle, style];
  const View = tmp6(tmp4[12]).View;
  const GestureDetector = tmp3(tmp4[16]).GestureDetector;
  const items1 = [draggableGridItemStyles, ];
  const View2 = tmp6(tmp4[12]).View;
  let elevationShadow;
  const tmp3Result = tmp3(ref[17]);
  if (tmp3Result.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  items1[1] = elevationShadow;
  return <View style={items} pointerEvents="box-none">{null}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default memoResult;
export const DEFAULT_PIP_POSITION = TOP_LEFT;
