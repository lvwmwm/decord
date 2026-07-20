// Module ID: 14445
// Function ID: 108877
// Dependencies: []

// Module 14445
const importAllResult = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_HOVER };
obj.background = obj;
let closure_7 = arg1(dependencyMap[4]).createStyles(obj);
let closure_8 = { code: "function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}" };
let closure_9 = { code: "function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}" };
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((start) => {
  start = start.start;
  const arg1 = start;
  const end = start.end;
  const importDefault = end;
  const items = [end, start];
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    let lg;
    if (start) {
      lg = end(callback[5]).radii.lg;
    }
    obj.borderTopStartRadius = lg;
    let lg1;
    if (start) {
      lg1 = end(callback[5]).radii.lg;
    }
    obj.borderTopEndRadius = lg1;
    let lg2;
    if (end) {
      lg2 = end(callback[5]).radii.lg;
    }
    obj.borderBottomStartRadius = lg2;
    let lg3;
    if (end) {
      lg3 = end(callback[5]).radii.lg;
    }
    obj.borderBottomEndRadius = lg3;
    return obj;
  }, items);
  const callback = importAllResult.useCallback(() => {
    state.setState({ selected: null });
  }, []);
  const dependencyMap = callback;
  let obj = arg1(dependencyMap[6]);
  const fn = function _() {
    let obj = {};
    let obj1 = start(callback[6]);
    const obj3 = start(callback[6]);
    const obj4 = start(callback[7]);
    const withDelayResult = obj3.withDelay(500, start(callback[7]).withTiming(0, { duration: 0 }));
    obj = { duration: 300, easing: start(callback[6]).Easing.ease };
    const obj5 = start(callback[7]);
    const withTimingResult = start(callback[7]).withTiming(0.2, obj);
    obj = { duration: 300, easing: start(callback[6]).Easing.ease };
    const fn = function t(arg0) {
      if (arg0) {
        callback(closure_2[6]).runOnJS(closure_2);
        const obj = callback(closure_2[6]);
      }
    };
    obj1 = { runOnJS: start(callback[6]).runOnJS, clearSelectedSearchResult: callback };
    fn.__closure = obj1;
    fn.__workletHash = 13391094209244;
    fn.__initData = closure_9;
    obj.opacity = obj1.withSequence(withDelayResult, withTimingResult, start(callback[7]).withTiming(0, obj, "respect-motion-settings", fn));
    return obj;
  };
  obj = { withSequence: arg1(dependencyMap[6]).withSequence, withDelay: arg1(dependencyMap[6]).withDelay, withTiming: arg1(dependencyMap[7]).withTiming, Easing: arg1(dependencyMap[6]).Easing, runOnJS: arg1(dependencyMap[6]).runOnJS, clearSelectedSearchResult: callback };
  fn.__closure = obj;
  fn.__workletHash = 13630242918990;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [StyleSheet.absoluteFill, callback().background, memo, animatedStyle, start.style];
  return jsx(importDefault(dependencyMap[6]).View, { pointerEvents: "none", style });
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default memoResult;
