// Module ID: 15688
// Function ID: 120930
// Name: LaunchPadContainer
// Dependencies: [31, 27, 10480, 33, 4130, 10481, 15689, 15691, 14757, 3991, 4542, 3987, 14840, 5217, 15692, 2]
// Exports: default

// Module 15688 (LaunchPadContainer)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, StyleSheet } = get_ActivityIndicator);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: closure_5 } = LAUNCH_PAD_SPRING_CONFIG);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = "transparent";
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["overflow"] = "hidden";
_createForOfIteratorHelperLoose.container = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { code: "function LaunchPadContainerTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}" };
let closure_10 = { code: "function LaunchPadContainerTsx2(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();}" };
let closure_11 = { code: "function LaunchPadContainerTsx3(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};}" };
const result = require("LAUNCH_PAD_SPRING_CONFIG").fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  let gesture;
  let gestureRef;
  let gestureState;
  let launchPadPullTabState;
  let launchPadShown;
  let updaters;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = updaters(10481)();
  const tmp3 = updaters(15689)();
  const launchPadSharedState = tmp3.launchPadSharedState;
  ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp3);
  ({ gesture, gestureRef } = updaters(15691)({ launchPadType: tmp2, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  const tmp5 = updaters(14757)();
  const dependencyMap = tmp5;
  let obj = launchPadSharedState(3991);
  const fn = function o() {
    return tmp5.get().height;
  };
  fn.__closure = { windowDimensions: tmp5 };
  fn.__workletHash = 9985296176902;
  fn.__initData = closure_9;
  const fn2 = function l(arg0, arg1) {
    if (null != arg1) {
      if (arg1 > arg0) {
        updaters.onWindowHeightChange();
      }
    }
  };
  fn2.__closure = { updaters };
  fn2.__workletHash = 418963589215;
  fn2.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let obj1 = launchPadSharedState(3991);
  const fn3 = function v() {
    let obj = { borderRadius: launchPadSharedState(tmp5[9]).interpolate(launchPadSharedState.get(), [0, 1], [0, 16]) };
    obj = {};
    const obj2 = launchPadSharedState(tmp5[9]);
    const obj4 = launchPadSharedState(tmp5[10]);
    const value = launchPadSharedState.get();
    const diff = tmp5.get().width - 48;
    const items = [1, diff / tmp5.get().width];
    obj.scale = obj4.withSpring(launchPadSharedState(tmp5[9]).interpolate(value, [0, 1], items), outer1_4, "animate-always");
    const items1 = [obj, ];
    obj = {};
    const obj5 = launchPadSharedState(tmp5[9]);
    const obj7 = launchPadSharedState(tmp5[10]);
    const items2 = [0, -4];
    obj.translateY = obj7.withSpring(launchPadSharedState(tmp5[9]).interpolate(launchPadSharedState.get(), [0, 1], items2), outer1_4, "animate-always");
    items1[1] = obj;
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: launchPadSharedState(3991).interpolate, launchPadSharedState, withSpring: launchPadSharedState(4542).withSpring, windowDimensions: tmp5, LAUNCH_PAD_SPRING_CONFIG: closure_4 };
  fn3.__closure = obj;
  fn3.__workletHash = 13886247172712;
  fn3.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(fn3);
  const MobileHomeDrawerExperiment = launchPadSharedState(3987).MobileHomeDrawerExperiment;
  obj = { value: gestureRef };
  obj1 = { gesture };
  let obj2 = { style: tmp.wrapper };
  let items = [tmp.container, animatedStyle];
  let items1 = [callback(updaters(3991).View, { style: items, children: children.children }), ];
  if (tmp2 !== constants.DISABLED) {
    const obj3 = { launchPadType: tmp2, gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters };
    const tmp11 = callback(updaters(15692), obj3);
  }
  items1[1] = tmp11;
  obj2.children = items1;
  obj1.children = closure_7(closure_3, obj2);
  obj.children = callback(launchPadSharedState(5217).GestureDetector, obj1);
  return callback(updaters(14840).Provider, obj);
};
