// Module ID: 11140
// Function ID: 86632
// Dependencies: []

// Module 11140
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = {};
obj = { height: 2 * importDefault(dependencyMap[5]).space.PX_64, marginBottom: importDefault(dependencyMap[5]).space.PX_12 };
obj.postPlaceholder = obj;
let closure_7 = arg1(dependencyMap[4]).createStyles(obj);
let closure_8 = { code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}" };
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const arg1 = stateFromStores;
  const timingConfig = callback(importAllResult.useState(() => {
    let obj = {};
    obj = { duration: 1000 + 500 * Math.random() };
    const Easing = stateFromStores(closure_2[7]).Easing;
    obj.easing = Easing.inOut(stateFromStores(closure_2[7]).Easing.sin);
    obj.timingConfig = obj;
    return obj;
  }), 1)[0].timingConfig;
  const importDefault = timingConfig;
  let obj1 = arg1(dependencyMap[7]);
  const fn = function _() {
    const obj = {};
    if (stateFromStores) {
      obj.opacity = 0.55;
      let tmp5 = obj;
    } else {
      const obj2 = stateFromStores(closure_2[7]);
      const obj3 = stateFromStores(closure_2[7]);
      const obj4 = stateFromStores(closure_2[7]);
      const obj5 = stateFromStores(closure_2[8]);
      const withTimingResult = stateFromStores(closure_2[8]).withTiming(0.55, timingConfig);
      obj.opacity = obj2.withDelay(1000, obj3.withRepeat(obj4.withSequence(withTimingResult, stateFromStores(closure_2[8]).withTiming(1, timingConfig)), -1, true));
      tmp5 = obj;
      const obj6 = stateFromStores(closure_2[8]);
    }
    return tmp5;
  };
  obj = { reducedMotion: stateFromStores, ROW_OPACITY_END: 0.55, withDelay: arg1(dependencyMap[7]).withDelay, INITIAL_DELAY_MS: 1000, withRepeat: arg1(dependencyMap[7]).withRepeat, withSequence: arg1(dependencyMap[7]).withSequence, withTiming: arg1(dependencyMap[8]).withTiming, timingConfig };
  fn.__closure = obj;
  fn.__workletHash = 9488742940898;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: animatedStyle, pointerEvents: "none" };
  obj1 = { variant: "secondary", style: callback2().postPlaceholder };
  obj.children = jsx(arg1(dependencyMap[9]).Card, obj1);
  return jsx(importDefault(dependencyMap[7]).View, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default memoResult;
