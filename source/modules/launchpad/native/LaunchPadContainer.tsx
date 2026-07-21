// Module ID: 15513
// Function ID: 118353
// Name: LaunchPadContainer
// Dependencies: []
// Exports: default

// Module 15513 (LaunchPadContainer)
let StyleSheet;
importAll(dependencyMap[0]);
({ View: closure_3, StyleSheet } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ LAUNCH_PAD_SPRING_CONFIG: closure_4, LaunchPadTypes: closure_5 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["backgroundColor"] = "transparent";
obj.wrapper = obj;
const obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["overflow"] = "hidden";
obj.container = obj1;
let closure_8 = obj.createStyles(obj);
let closure_9 = { code: "function LaunchPadContainerTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().height;}" };
let closure_10 = { code: "function LaunchPadContainerTsx2(height,lastHeight){const{updaters}=this.__closure;if(lastHeight==null)return;if(lastHeight<=height)return;updaters.onWindowHeightChange();}" };
let closure_11 = { code: "function LaunchPadContainerTsx3(){const{interpolate,launchPadSharedState,withSpring,windowDimensions,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{borderRadius:interpolate(launchPadSharedState.get(),[0,1],[0,16]),transform:[{scale:withSpring(interpolate(launchPadSharedState.get(),[0,1],[1,(windowDimensions.get().width-16*3)/windowDimensions.get().width]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')},{translateY:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,-4]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')}]};}" };
const tmp5 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/launchpad/native/LaunchPadContainer.tsx");

export default function LaunchPadContainer(children) {
  let gesture;
  let gestureRef;
  let gestureState;
  let launchPadPullTabState;
  let launchPadShown;
  let updaters;
  const tmp = callback2();
  const tmp2 = importDefault(dependencyMap[5])();
  const tmp3 = importDefault(dependencyMap[6])();
  const launchPadSharedState = tmp3.launchPadSharedState;
  const arg1 = launchPadSharedState;
  ({ launchPadPullTabState, launchPadShown, gestureState, updaters } = tmp3);
  const importDefault = updaters;
  ({ gesture, gestureRef } = importDefault(dependencyMap[7])({ launchPadType: tmp2, launchPadSharedState, launchPadPullTabState, launchPadShown, gestureState, updaters }));
  const tmp5 = importDefault(dependencyMap[8])();
  const dependencyMap = tmp5;
  let obj = arg1(dependencyMap[9]);
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
  let obj1 = arg1(dependencyMap[9]);
  const fn3 = function v() {
    let obj = { borderRadius: launchPadSharedState(tmp5[9]).interpolate(launchPadSharedState.get(), ["Text", "lc"], []) };
    obj = {};
    const obj2 = launchPadSharedState(tmp5[9]);
    const obj4 = launchPadSharedState(tmp5[10]);
    const value = launchPadSharedState.get();
    const diff = tmp5.get().width - 48;
    const items = [15189782894321462000000000000000000000000000000000000000000000000000000000000000000, diff / tmp5.get().width];
    obj.scale = obj4.withSpring(launchPadSharedState(tmp5[9]).interpolate(value, ["Text", "lc"], items), closure_4, "animate-always");
    const items1 = [obj, ];
    obj = {};
    const obj5 = launchPadSharedState(tmp5[9]);
    const obj7 = launchPadSharedState(tmp5[10]);
    const items2 = [0.229, -4];
    obj.translateY = obj7.withSpring(launchPadSharedState(tmp5[9]).interpolate(launchPadSharedState.get(), ["Text", "lc"], items2), closure_4, "animate-always");
    items1[1] = obj;
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[9]).interpolate, launchPadSharedState, withSpring: arg1(dependencyMap[10]).withSpring, windowDimensions: tmp5, LAUNCH_PAD_SPRING_CONFIG: closure_4 };
  fn3.__closure = obj;
  fn3.__workletHash = 13886247172712;
  fn3.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(fn3);
  const MobileHomeDrawerExperiment = arg1(dependencyMap[11]).MobileHomeDrawerExperiment;
  obj = { value: gestureRef };
  obj1 = { gesture };
  const obj2 = { style: tmp.wrapper };
  const items = [tmp.container, animatedStyle];
  const items1 = [callback(importDefault(dependencyMap[9]).View, { style: items, children: children.children }), ];
  if (tmp2 !== constants.DISABLED) {
    const obj3 = { launchPadType: tmp2, gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters };
    const tmp11 = callback(importDefault(dependencyMap[14]), obj3);
  }
  items1[1] = tmp11;
  obj2.children = items1;
  obj1.children = closure_7(closure_3, obj2);
  obj.children = callback(arg1(dependencyMap[13]).GestureDetector, obj1);
  return callback(importDefault(dependencyMap[12]).Provider, obj);
};
