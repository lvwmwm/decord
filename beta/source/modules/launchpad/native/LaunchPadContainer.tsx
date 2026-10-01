// Module ID: 16790
// Function ID: 16791
// Name: LaunchPadContainer
// Dependencies: [19, 17, 11002, 21, 4836, 11003, 16791, 16793, 11515, 4566, 5280, 4698, 15633, 6073, 16794, 2]
// Exports: default

// Module 16790 (LaunchPadContainer)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11002 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

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
const __initData = { code: "function LaunchPadContainerTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}" };
const __initData2 = { code: "function LaunchPadContainerTsx2(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();}" };
const __initData3 = { code: "function LaunchPadContainerTsx3(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};}" };
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  let GestureDetector;
  let closure_2;
  let gesture;
  let gestureRef;
  let gestureState;
  let items;
  let items1;
  let launchPadPullTabState;
  let launchPadShown;
  let obj5;
  let obj6;
  let tmp10Result;
  let tmp11;
  let tmp12;
  let updaters;
  updaters = undefined;
  children = children.children;
  const tmp = closure_8();
  const tmp2 = updaters;
  const tmp4 = updaters(11003)();
  const tmp5 = updaters(16791)();
  const launchPadSharedState = tmp5.launchPadSharedState;
  ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp5);
  ({ gesture, gestureRef } = updaters(16793)({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  updaters(16793)({ launchPadType: tmp4, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters });
  const tmp7 = updaters(11515)();
  dependencyMap = tmp7;
  let obj = launchPadSharedState(4566);
  const fn = function o() {
    return closure_2.get().height;
  };
  fn.__closure = { windowDimensions: tmp7 };
  fn.__workletHash = 9985296176902;
  fn.__initData = __initData;
  const fn2 = function l(arg0, arg1) {
    if (null != arg1) {
      if (arg1 > arg0) {
        updaters.onWindowHeightChange();
      }
    }
  };
  fn2.__closure = { updaters };
  fn2.__workletHash = 418963589215;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let obj2 = launchPadSharedState(4566);
  const fn3 = function v() {
    let interpolate;
    let items;
    let items1;
    let obj2;
    let obj5;
    let value;
    let withSpring;
    let withSpring2;
    const obj = { borderRadius: obj2.interpolate(launchPadSharedState.get(), [0, 1], [0, 16]), transform: items1 };
    obj2 = ReanimatedRexport;
    const obj3 = { scale: withSpring(interpolate(value, [0, 1], items), closure_4, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = launchPadSharedState.get();
    const diff = closure_2.get().width - 48;
    items = [1, diff / closure_2.get().width];
    items1 = [obj3, ];
    const obj4 = { translateY: withSpring2(obj5.interpolate(launchPadSharedState.get(), [0, 1], [0, -4]), closure_4, "animate-always") };
    withSpring2 = spring.withSpring;
    spring;
    items1[1] = obj4;
    obj5 = ReanimatedRexport;
    return obj;
  };
  let obj3 = { interpolate: launchPadSharedState(4566).interpolate, launchPadSharedState, withSpring: launchPadSharedState(5280).withSpring, windowDimensions: tmp7, LAUNCH_PAD_SPRING_CONFIG };
  fn3.__closure = obj3;
  fn3.__workletHash = 13886247172712;
  fn3.__initData = __initData3;
  const animatedStyle = obj2.useAnimatedStyle(fn3);
  const MobileHomeDrawerExperiment = launchPadSharedState(4698).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds" }).enableHome;
  let obj4 = { value: gestureRef, children: closure_6(GestureDetector, obj5) };
  const Provider = updaters(15633).Provider;
  obj5 = { gesture, children: tmp11(tmp12, obj6) };
  obj6 = { style: tmp.wrapper, children: items1 };
  GestureDetector = launchPadSharedState(6073).GestureDetector;
  const obj7 = { style: items, children };
  items = [tmp.container, animatedStyle];
  items1 = [closure_6(updaters(4566).View, obj7), ];
  tmp11 = closure_7;
  tmp12 = closure_3;
  if (tmp4 !== constants.DISABLED) {
    const obj8 = { launchPadType: tmp4, gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters };
    tmp10Result = closure_6(tmp2(16794), obj8);
  }
  items1[1] = tmp10Result;
  return closure_6(Provider, obj4);
};
