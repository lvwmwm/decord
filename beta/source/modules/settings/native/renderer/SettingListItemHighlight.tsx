// Module ID: 14254
// Function ID: 14255
// Name: SettingListItemHighlight
// Dependencies: [19, 17, 14249, 21, 4836, 576, 4566, 4837, 2]

// Module 14254 (SettingListItemHighlight)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14249 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let start;

let obj2;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let obj = { background: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER };
let closure_7 = createStyles.createStyles(obj);
const __initData = { code: "function SettingListItemHighlightTsx1(){const{withSequence,withDelay,withTiming,Easing,runOnJS,clearSelectedSearchResult}=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function(finished){if(finished){runOnJS(clearSelectedSearchResult);}}))};}" };
let closure_9 = { code: "function SettingListItemHighlightTsx2(finished){const{runOnJS,clearSelectedSearchResult}=this.__closure;if(finished){runOnJS(clearSelectedSearchResult);}}" };
const memoResult = react.memo((start) => {
  let state;
  start = start.start;
  const end = start.end;
  const style = start.style;
  const items = [end, start];
  let tmp = closure_7();
  const memo = react.useMemo(() => {
    let lg1;
    let lg2;
    let lg3;
    let lg;
    if (start) {
      lg = nativeDefault.radii.lg;
    }
    const obj = { borderTopStartRadius: lg, borderTopEndRadius: lg1, borderBottomStartRadius: lg2, borderBottomEndRadius: lg3 };
    lg1 = undefined;
    if (start) {
      lg1 = nativeDefault.radii.lg;
    }
    lg2 = undefined;
    if (end) {
      lg2 = nativeDefault.radii.lg;
    }
    lg3 = undefined;
    if (end) {
      lg3 = nativeDefault.radii.lg;
    }
    return obj;
  }, items);
  const clearSelectedSearchResult = react.useCallback(() => {
    state.setState({ selected: null });
  }, []);
  let obj = start(clearSelectedSearchResult[6]);
  let fn = function _() {
    let fn;
    let obj5;
    let withDelayResult;
    let withSequence;
    let withTiming;
    let withTimingResult;
    let obj = { opacity: withSequence(withDelayResult, withTimingResult, withTiming(0, obj5, "respect-motion-settings", fn)) };
    let tmp = ReanimatedRexport;
    withSequence = tmp.withSequence;
    const withDelay = ReanimatedRexport.withDelay;
    const obj2 = timing;
    withDelayResult = withDelay(500, obj2.withTiming(0, { duration: 0 }));
    const obj3 = timing;
    const obj4 = { duration: 300, easing: ReanimatedRexport.Easing.ease };
    withTimingResult = obj3.withTiming(0.2, obj4);
    withTiming = timing.withTiming;
    fn = function t(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = start(callback[6]);
        obj.runOnJS(closure_1_2);
      }
    };
    obj5 = { duration: 300, easing: ReanimatedRexport.Easing.ease };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, clearSelectedSearchResult };
    fn.__workletHash = 13391094209244;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, clearSelectedSearchResult });
    return obj;
  };
  let obj2 = { withSequence: start(clearSelectedSearchResult[6]).withSequence, withDelay: start(clearSelectedSearchResult[6]).withDelay, withTiming: start(clearSelectedSearchResult[7]).withTiming, Easing: start(clearSelectedSearchResult[6]).Easing, runOnJS: start(clearSelectedSearchResult[6]).runOnJS, clearSelectedSearchResult };
  fn.__closure = obj2;
  fn.__workletHash = 13630242918990;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items1 = [StyleSheet.absoluteFill, tmp.background, memo, animatedStyle, style];
  return jsx(end(clearSelectedSearchResult[6]).View, { pointerEvents: "none", style: items1 });
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default memoResult;
