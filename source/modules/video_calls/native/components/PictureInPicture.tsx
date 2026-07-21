// Module ID: 10530
// Function ID: 82276
// Name: PictureInPicturePositions
// Dependencies: []

// Module 10530 (PictureInPicturePositions)
let StyleSheet;
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet, View: closure_5 } = arg1(dependencyMap[2]));
const toggleFocus = arg1(dependencyMap[3]).toggleFocus;
const PictureInPicturePositions = arg1(dependencyMap[4]).PictureInPicturePositions;
const jsx = arg1(dependencyMap[5]).jsx;
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["alignItems"] = "baseline";
obj.pipOuterContainer = obj;
obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["alignItems"] = "baseline";
obj.pipInnerContainer = obj1;
const tmp2 = arg1(dependencyMap[2]);
obj.elevationShadow = arg1(dependencyMap[7]).generateBoxShadowStyle(arg1(dependencyMap[7]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
let closure_9 = obj1.createStyles(obj);
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
const obj6 = arg1(dependencyMap[7]);
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
  const tmp5 = callback(importAllResult.useState({ width, height }), 2);
  const size2 = tmp5[0];
  importDefault = tmp5[1];
  let obj2 = arg1(dependencyMap[12]);
  const fn = function w() {
    const obj = { marginTop: insets.top, marginBottom: insets(ref[13]).withSpring(insets.bottom, callback()) };
    return obj;
  };
  obj = { insets, withSpring: arg1(dependencyMap[13]).withSpring, getSpringAnimationConfig: closure_11 };
  fn.__closure = obj;
  fn.__workletHash = 16677290574613;
  fn.__initData = closure_12;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = arg1(dependencyMap[14]);
  const isViewingActivity = obj4.useIsViewingActivity({ channelId: channel.id });
  let obj6 = arg1(dependencyMap[15]);
  obj2 = { width: size.width, height: size.height, containerWidth: size2.width, containerHeight: size2.height, snapToCorners: !isViewingActivity };
  let tmp8;
  if (isViewingActivity) {
    tmp8 = toggleFocus;
  }
  obj2.onPress = tmp8;
  const draggablePip = obj6.useDraggablePip(obj2);
  ({ gesture, draggableGridItemStyles } = draggablePip);
  const ref = importAllResult.useRef(null);
  dependencyMap = ref;
  const obj3 = { style: items, pointerEvents: "box-none" };
  const items = [tmp2.pipOuterContainer, animatedStyle, style];
  obj4 = {
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
  const obj5 = { gesture };
  obj6 = {};
  const items1 = [draggableGridItemStyles, ];
  const obj1 = { channelId: channel.id };
  const tmp12 = closure_5;
  const tmp4 = importDefault(dependencyMap[9])();
  let elevationShadow;
  if (obj13.isIOS()) {
    elevationShadow = tmp2.elevationShadow;
  }
  items1[1] = elevationShadow;
  obj6.style = items1;
  obj6.children = <closure_5>{children}</closure_5>;
  obj5.children = jsx(importDefault(dependencyMap[12]).View, obj6);
  obj4.children = jsx(arg1(dependencyMap[16]).GestureDetector, obj5);
  obj3.children = <tmp12 {...obj4} />;
  return jsx(importDefault(dependencyMap[12]).View, obj3);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/video_calls/native/components/PictureInPicture.tsx");

export default memoResult;
export const DEFAULT_PIP_POSITION = PictureInPicturePositions.TOP_LEFT;
