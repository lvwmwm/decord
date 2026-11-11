// Module ID: 12631
// Function ID: 12632
// Name: PictureInPicture
// Dependencies: [32, 19, 17, 10940, 1072, 21, 5243, 1187, 12632, 1493, 5850, 12635, 1652, 5876, 12636, 12637, 5535, 1377, 2]

// Module 12631 (PictureInPicture)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5850 */;
import spring_spring from "spring/spring" /* 5876 */;
import ChannelCallStore from "ChannelCallStore" /* 10940 */;
import useShouldForcePipOrientation from "useShouldForcePipOrientation" /* 12632 */;
import usePipDimensionsDefault from "usePipDimensions" /* 12635 */;
import useIsViewingActivity from "useIsViewingActivity" /* 12636 */;
import useDraggablePip2 from "useDraggablePip" /* 12637 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5243 */;
import native_mod from "native" /* 1187 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let native;
let obj2;
let obj3;
let tmp6;
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
let items = [{ code: "(function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,overshootClamping:true,velocity:velocity};})" }];
[tmp6] = items;
function getSpringAnimationConfig(velocity) {
  return { mass: 0.2, damping: 7.5, stiffness: 100, overshootClamping: true, velocity };
}
getSpringAnimationConfig.__workletHash = 9813770049776;
getSpringAnimationConfig.__initData = tmp6;
let closure_11 = { code: "(function PictureInPictureTsx2(){let[insets,withSpring,getSpringAnimationConfig]=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};})" };
let TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
const memoResult = react.memo(function PictureInPicture(preferredPosition) {
  let c0;
  let children;
  let draggableGridItemStyles;
  let height;
  let size2;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp17;
  let width;
  ({ children, style } = preferredPosition);
  if (preferredPosition.preferredPosition === undefined) {
    const TOP_LEFT = PictureInPicturePositions.TOP_LEFT;
  }
  const channel = preferredPosition.channel;
  let ref;
  const tmp2 = closure_9();
  let obj = useShouldForcePipOrientation;
  const shouldForcePipOrientation = obj.useShouldForcePipOrientation({ channel });
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj2 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  size = usePipDimensionsDefault(obj2);
  [size2, c0] = react.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 });
  _slicedToArray(react.useState({ x: 0, y: 0, width, height, pageX: 0, pageY: 0 }), 2);
  const items = [closure_11, insets, , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[2] = spring_spring.withSpring;
  items[3] = getSpringAnimationConfig;
  c0 = undefined;
  let c1;
  let c2;
  [tmp10, tmp11, tmp12, tmp13] = items;
  const obj3 = react;
  class PictureInPictureTsx2 {
    constructor() {
      obj = { marginTop: closure_0.top, marginBottom: closure_1(closure_0.bottom, closure_2()) };
      return obj;
    }
  }
  const items1 = [tmp11, tmp12, tmp13];
  PictureInPictureTsx2.__closure = items1;
  PictureInPictureTsx2.__workletHash = 16667877031596;
  PictureInPictureTsx2.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(PictureInPictureTsx2);
  const obj4 = { channelId: channel.id };
  const tmp3Result = useIsViewingActivity;
  const isViewingActivity = tmp3Result.useIsViewingActivity(obj4);
  const size1 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity, onPress: tmp17 };
  tmp17 = undefined;
  const useDraggablePip = useDraggablePip2.useDraggablePip;
  useDraggablePip2;
  if (isViewingActivity) {
    tmp17 = toggleFocus;
  }
  const draggablePip = useDraggablePip(size1);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  ref = obj3.useRef(null);
  const items2 = [tmp2.pipOuterContainer, animatedStyle, style];
  const View = tmp6(1652).View;
  const GestureDetector = tmp3(5535).GestureDetector;
  const items3 = [draggableGridItemStyles, ];
  const View2 = tmp6(1652).View;
  let elevationShadow;
  const tmp3Result4 = PlatformUtils;
  if (tmp3Result4.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  items3[1] = elevationShadow;
  return <View style={items2} pointerEvents="box-none">{null}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default memoResult;
export const DEFAULT_PIP_POSITION = TOP_LEFT;
