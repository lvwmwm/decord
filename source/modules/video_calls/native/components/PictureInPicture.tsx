// Module ID: 10531
// Function ID: 82300
// Name: PictureInPicturePositions
// Dependencies: [4101701633, 3089956865, 2611150849, 1985019908, 4139, 10521, 3979, 10518, 566, 2, 14714, 2610688, 2692864, 1021184, 1056512, 325888, 2410496, 1334784, 1161728]

// Module 10531 (PictureInPicturePositions)
import { PictureInPicturePositions } from "_isNativeReflectConstruct";
import { jsx } from "isActivityFocused";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ChannelCallCameraPreview from "ChannelCallCameraPreview";

let StyleSheet;
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet, View: closure_5 } = arg1(dependencyMap[2]));
const toggleFocus = arg1(dependencyMap[3]).toggleFocus;
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["alignItems"] = "baseline";
obj.pipOuterContainer = obj;
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["alignItems"] = "baseline";
obj.pipInnerContainer = _createForOfIteratorHelperLoose;
obj.elevationShadow = ChannelCallCameraPreview.generateBoxShadowStyle(require("ChannelCallCameraPreview").EIGHT_DP_ELEVATION_SHADOW_PARAMS);
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function getSpringAnimationConfig_PictureInPictureTsx1(velocity){return{mass:0.2,damping:7.5,stiffness:100,restDisplacementThreshold:0.1,restSpeedThreshold:0.1,overshootClamping:true,velocity:velocity};}" };
let closure_11 = () => {
  function getSpringAnimationConfig(velocity) {
    return { velocity };
  }
  getSpringAnimationConfig.__closure = {};
  getSpringAnimationConfig.__workletHash = 6627401186753;
  getSpringAnimationConfig.__initData = closure_10;
  return getSpringAnimationConfig;
}();
let closure_12 = { code: "function PictureInPictureTsx2(){const{insets,withSpring,getSpringAnimationConfig}=this.__closure;return{marginTop:insets.top,marginBottom:withSpring(insets.bottom,getSpringAnimationConfig())};}" };
const tmp2 = arg1(dependencyMap[2]);
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
  let arg1;
  let importDefault;
  let dependencyMap;
  const tmp2 = callback2();
  let obj = arg1(dependencyMap[8]);
  const shouldForcePipOrientation = obj.useShouldForcePipOrientation({ channel });
  ({ width, height } = importDefault(dependencyMap[9])());
  const insets = importDefault(dependencyMap[10])({ includeKeyboardHeight: true }).insets;
  arg1 = insets;
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const size = importDefault(dependencyMap[11])(obj);
  obj = { GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET: "counter", qRaqel: "complete", expoVersion: "creator", DragIcon: "creative", shineStyle: "captions", GuildThemePreviewOwner: "content", width, height };
  const tmp5 = callback(importAllResult.useState(obj), 2);
  const size2 = tmp5[0];
  importDefault = tmp5[1];
  let obj3 = arg1(dependencyMap[12]);
  const fn = function w() {
    const obj = { marginTop: insets.top, marginBottom: insets(ref[13]).withSpring(insets.bottom, callback()) };
    return obj;
  };
  const tmp4 = importDefault(dependencyMap[9])();
  fn.__closure = { insets, withSpring: arg1(dependencyMap[13]).withSpring, getSpringAnimationConfig: closure_11 };
  fn.__workletHash = 16677290574613;
  fn.__initData = closure_12;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj5 = arg1(dependencyMap[14]);
  const isViewingActivity = obj5.useIsViewingActivity({ channelId: channel.id });
  let obj7 = arg1(dependencyMap[15]);
  obj3 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity };
  let tmp8;
  if (isViewingActivity) {
    tmp8 = toggleFocus;
  }
  obj3.onPress = tmp8;
  const draggablePip = obj7.useDraggablePip(obj3);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  const ref = importAllResult.useRef(null);
  dependencyMap = ref;
  const obj4 = { style: items, pointerEvents: "box-none" };
  const items = [tmp2.pipOuterContainer, animatedStyle, style];
  obj5 = {
    ref,
    style: tmp2.pipInnerContainer,
    pointerEvents: "box-none",
    onLayout() {
      if (null != ref.current) {
        const current = ref.current;
        current.measure((arg0, arg1, width, height, pageX, pageY) => {
          callback({ x: arg0, y: arg1, width, height, pageX, pageY });
        });
      }
    }
  };
  const obj6 = { gesture };
  obj7 = {};
  const items1 = [draggableGridItemStyles, ];
  const obj1 = { insets, withSpring: arg1(dependencyMap[13]).withSpring, getSpringAnimationConfig: closure_11 };
  const obj2 = { channelId: channel.id };
  const tmp12 = closure_5;
  let elevationShadow;
  if (obj14.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  items1[1] = elevationShadow;
  obj7.style = items1;
  obj7.children = <closure_5>{children}</closure_5>;
  obj6.children = jsx(importDefault(dependencyMap[12]).View, obj7);
  obj5.children = jsx(arg1(dependencyMap[16]).GestureDetector, obj6);
  obj4.children = <tmp12 {...obj5} />;
  return jsx(importDefault(dependencyMap[12]).View, obj4);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default memoResult;
export const DEFAULT_PIP_POSITION = PictureInPicturePositions.TOP_LEFT;
