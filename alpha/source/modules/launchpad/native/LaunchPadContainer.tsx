// Module ID: 19114
// Function ID: 19115
// Name: LaunchPadContainer
// Dependencies: [19, 17, 11933, 21, 4913, 19115, 5867, 5173, 19116, 11934, 19144, 10598, 12901, 1653, 5514, 17520, 2]
// Exports: default

// Module 19114 (LaunchPadContainer)
import _mod1653 from "module_1653" /* 1653 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5173 */;
import spring_spring from "spring/spring" /* 5514 */;
import OverlayViewDefault from "OverlayView" /* 5867 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 10598 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11934 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 12901 */;
import useLaunchPadGestureDefault from "useLaunchPadGesture" /* 19115 */;
import LaunchPadWrapperDefault from "LaunchPadWrapper" /* 19116 */;
import useLaunchPadStateDefault from "useLaunchPadState" /* 19144 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11933 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let diff, gesture, obj1, onWindowHeightChangeResult, value;

let StyleSheet;
let c3;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function LaunchPadOverlay(shown) {
  let GestureDetector;
  let obj2;
  let obj3;
  let obj4;
  let tmp3;
  shown = shown.shown;
  const merged = Object.assign(shown, Object.assign({ shown: 0 }));
  gesture = useLaunchPadGestureDefault(merged).gesture;
  const obj = { style: StyleSheet.absoluteFill, pointerEvents: "box-none", unstable_accessibilityContainerViewIsModal: shown, children: metroImportDefault(GestureDetector, obj2) };
  obj2 = { gesture, children: metroImportDefault(_false, obj3) };
  obj3 = { style: StyleSheet.absoluteFill, pointerEvents: "box-none", children: metroImportDefault(tmp3, obj4) };
  const tmp2 = OverlayViewDefault;
  GestureDetector = LegacyBaseButton.GestureDetector;
  obj4 = {};
  tmp3 = LaunchPadWrapperDefault;
  const merged1 = Object.assign(merged);
  return metroImportDefault(tmp2, obj);
}
({ View: c3, StyleSheet } = react_native);
({ LAUNCH_PAD_SPRING_CONFIG: hasOwnProperty, LaunchPadTypes: metroRequire } = LaunchPadConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, container: obj3 };
obj2 = { backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { overflow: "hidden" };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
let closure_11 = { code: "(function LaunchPadContainerTsx1(){let[windowDimensions]=this.__closure;return windowDimensions.get().height;})" };
let closure_12 = { code: "(function LaunchPadContainerTsx2(height,lastHeight){let[updaters]=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();})" };
let closure_13 = { code: "(function LaunchPadContainerTsx3(){let[interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG]=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};})" };
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  let View;
  let gestureRef;
  let gestureState;
  let items6;
  let items7;
  let launchPadPullTabState;
  let launchPadSharedState;
  let launchPadShown;
  let obj4;
  let obj5;
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
  let tmp25;
  let updaters;
  children = children.children;
  const tmp = closure_9();
  const tmp4 = useLaunchPadTypeDefault();
  ({ launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters } = useLaunchPadStateDefault());
  useLaunchPadStateDefault();
  const tmp6 = useStateFromSharedValueDefault(launchPadShown);
  ({ gesture, gestureRef } = useLaunchPadGestureDefault({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  useLaunchPadGestureDefault({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters });
  const tmp8 = useWindowDimensionsSharedValueDefault({ ignoreKeyboard: true });
  let obj = _mod1653;
  let items = [closure_11, tmp8];
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
  const items2 = [closure_12, updaters];
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
  const items4 = [closure_13, , , , , ];
  const useAnimatedStyle = _mod1653.useAnimatedStyle;
  _mod1653;
  items4[1] = _mod1653.interpolate;
  items4[2] = launchPadSharedState;
  items4[3] = spring_spring.withSpring;
  items4[4] = tmp8;
  items4[5] = hasOwnProperty;
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
  let obj2 = { value: gestureRef, children: items7 };
  const Provider = tmp2(17520).Provider;
  const obj3 = { gesture, children: metroImportDefault(tmp25, obj4) };
  obj4 = { style: tmp.wrapper, children: metroImportDefault(View, obj5) };
  const GestureDetector = tmp9(5173).GestureDetector;
  obj5 = { style: items6, pointerEvents: str2, accessibilityElementsHidden: tmp6, importantForAccessibility: str, children };
  items6 = [tmp.container, animatedStyle];
  str = "auto";
  str2 = "auto";
  View = tmp2(1653).View;
  const tmp23 = metroImportAll;
  tmp25 = _false;
  if (tmp6) {
    str2 = "none";
  }
  if (tmp6) {
    str = "no-hide-descendants";
  }
  items7 = [metroImportDefault(GestureDetector, obj3), ];
  let tmp24Result;
  if (tmp4 !== metroRequire.DISABLED) {
    const obj6 = { shown: tmp6, launchPadType: tmp4, gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters };
    tmp24Result = tmp24(LaunchPadOverlay, obj6);
  }
  items7[1] = tmp24Result;
  return tmp23(Provider, obj2);
};
