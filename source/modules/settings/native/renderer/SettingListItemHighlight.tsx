// Module ID: 14577
// Function ID: 111128
// Dependencies: [31, 27, 13552, 33, 4130, 689, 3991, 4131, 2]

// Module 14577
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import zustandStore from "zustandStore";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_HOVER };
obj.background = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_8 = { code: "function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}" };
let closure_9 = { code: "function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}" };
const memoResult = importAllResult.memo((start) => {
  start = start.start;
  const end = start.end;
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
    outer1_5.setState({ selected: null });
  }, []);
  let obj = start(callback[6]);
  let fn = function _() {
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
        start(callback[6]).runOnJS(outer1_2);
        const obj = start(callback[6]);
      }
    };
    obj1 = { runOnJS: start(callback[6]).runOnJS, clearSelectedSearchResult: callback };
    fn.__closure = obj1;
    fn.__workletHash = 13391094209244;
    fn.__initData = outer1_9;
    obj.opacity = obj1.withSequence(withDelayResult, withTimingResult, start(callback[7]).withTiming(0, obj, "respect-motion-settings", fn));
    return obj;
  };
  obj = { withSequence: start(callback[6]).withSequence, withDelay: start(callback[6]).withDelay, withTiming: start(callback[7]).withTiming, Easing: start(callback[6]).Easing, runOnJS: start(callback[6]).runOnJS, clearSelectedSearchResult: callback };
  fn.__closure = obj;
  fn.__workletHash = 13630242918990;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [StyleSheet.absoluteFill, callback().background, memo, animatedStyle, start.style];
  return jsx(end(callback[6]).View, { pointerEvents: "none", style });
});
const result = require("zustandStore").fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default memoResult;
