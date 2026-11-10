// Module ID: 19464
// Function ID: 19465
// Name: LaunchPadContainer
// Dependencies: [19, 17, 11690, 21, 5142, 11691, 19465, 8921, 19467, 13042, 1652, 5763, 5322, 18424, 5422, 19468, 2]
// Exports: default

// Module 19464 (LaunchPadContainer)
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5763 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8921 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11691 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13042 */;
import useLaunchPadStateDefault from "useLaunchPadState" /* 19465 */;
import useLaunchPadGestureDefault from "useLaunchPadGesture" /* 19467 */;
import LaunchPadWrapperDefault from "LaunchPadWrapper" /* 19468 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11690 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let diff, obj1, onWindowHeightChangeResult, tmp2, value;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, StyleSheet } = react_native);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: hasOwnProperty } = LaunchPadConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, container: obj3 };
obj2 = { backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { overflow: "hidden" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function LaunchPadContainerTsx1(){let[windowDimensions]=this.__closure;return windowDimensions.get().height;})" };
let closure_10 = { code: "(function LaunchPadContainerTsx2(height,lastHeight){let[updaters]=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();})" };
let closure_11 = { code: "(function LaunchPadContainerTsx3(){let[interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG]=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};})" };
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  let GestureDetector;
  let gestureRef;
  let gestureState;
  let items6;
  let items7;
  let launchPadPullTabState;
  let launchPadSharedState;
  let launchPadShown;
  let obj3;
  let obj4;
  let str;
  let str2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp23Result;
  let tmp24;
  let tmp25;
  let updaters;
  children = children.children;
  const tmp = closure_8();
  const tmp4 = useLaunchPadTypeDefault();
  ({ launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters } = useLaunchPadStateDefault());
  useLaunchPadStateDefault();
  const tmp6 = useStateFromSharedValueDefault(launchPadShown);
  ({ gesture, gestureRef } = useLaunchPadGestureDefault({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  useLaunchPadGestureDefault({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters });
  const tmp8 = useWindowDimensionsSharedValueDefault();
  let obj = _mod1652;
  let items = [closure_9, tmp8];
  let c0;
  [tmp10, tmp11] = items;
  class LaunchPadContainerTsx1 {
    constructor() {
      return closure_0.get().height;
    }
  }
  let items1 = [tmp11];
  LaunchPadContainerTsx1.__closure = items1;
  LaunchPadContainerTsx1.__workletHash = 5429128433055;
  LaunchPadContainerTsx1.__initData = tmp10;
  const items2 = [closure_10, updaters];
  c0 = undefined;
  [tmp12, tmp13] = items2;
  class LaunchPadContainerTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = children;
        if (arg1 > children) {
          tmp2 = closure_0;
          onWindowHeightChangeResult = closure_0.onWindowHeightChange();
        }
      }
      return;
    }
  }
  const items3 = [tmp13];
  LaunchPadContainerTsx2.__closure = items3;
  LaunchPadContainerTsx2.__workletHash = 8587684116006;
  LaunchPadContainerTsx2.__initData = tmp12;
  const animatedReaction = obj.useAnimatedReaction(LaunchPadContainerTsx1, LaunchPadContainerTsx2);
  const items4 = [closure_11, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items4[1] = _mod1652.interpolate;
  items4[2] = launchPadSharedState;
  items4[3] = spring_spring.withSpring;
  items4[4] = tmp8;
  items4[5] = React3;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items4;
  class LaunchPadContainerTsx3 {
    constructor() {
      obj = { borderRadius: closure_0(closure_1.get(), [0, 1], [0, 16]), transform: null };
      obj1 = { scale: null };
      value = closure_1.get();
      diff = closure_3.get().width - 48;
      items = [1];
      items[1] = diff / closure_3.get().width;
      obj1.scale = closure_2(closure_0(value, [0, 1], items), closure_4, "animate-always");
      items1 = [, ];
      items1[0] = obj1;
      obj4 = { translateY: closure_2(closure_0(closure_1.get(), [0, 1], [0, -4]), closure_4, "animate-always") };
      items1[1] = obj4;
      obj.transform = items1;
      return obj;
    }
  }
  const items5 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  LaunchPadContainerTsx3.__closure = items5;
  LaunchPadContainerTsx3.__workletHash = 13015105508497;
  LaunchPadContainerTsx3.__initData = tmp16;
  const animatedStyle = useAnimatedStyle(LaunchPadContainerTsx3);
  const MobileHomeDrawerExperiment = tmp9(5322).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds" }).enableHome;
  let obj2 = { value: gestureRef, children: metroRequire(GestureDetector, obj3) };
  const Provider = tmp2(18424).Provider;
  obj3 = { gesture, children: tmp24(tmp25, obj4) };
  obj4 = { style: tmp.wrapper, children: items7 };
  GestureDetector = tmp9(5422).GestureDetector;
  const obj5 = { style: items6, pointerEvents: str2, accessibilityElementsHidden: tmp6, importantForAccessibility: str, children };
  items6 = [tmp.container, animatedStyle];
  str = "auto";
  str2 = "auto";
  const View = tmp2(1652).View;
  tmp24 = metroImportDefault;
  tmp25 = _false;
  if (tmp6) {
    str2 = "none";
  }
  if (tmp6) {
    str = "no-hide-descendants";
  }
  items7 = [metroRequire(View, obj5), ];
  if (tmp4 !== hasOwnProperty.DISABLED) {
    const obj6 = { launchPadType: tmp4, gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters };
    tmp23Result = metroRequire(LaunchPadWrapperDefault, obj6);
  }
  items7[1] = tmp23Result;
  return metroRequire(Provider, obj2);
};
